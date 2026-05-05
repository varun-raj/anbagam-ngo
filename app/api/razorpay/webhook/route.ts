import { NextResponse } from "next/server";
import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";

export const runtime = "edge";

const NOTIFICATION_RECIPIENTS = ["varun@foundrysoft.co"];

async function computeSignature(rawBody: string, secret: string) {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const sigBuf = await crypto.subtle.sign("HMAC", key, encoder.encode(rawBody));
  return Array.from(new Uint8Array(sigBuf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function timingSafeEqual(a: string, b: string) {
  if (a.length !== b.length) return false;
  let mismatch = 0;
  for (let i = 0; i < a.length; i++) {
    mismatch |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return mismatch === 0;
}

function formatINR(paise: number) {
  return `₹${(paise / 100).toLocaleString("en-IN")}`;
}

function buildEmail(event: string, payment: any) {
  const amount = formatINR(payment.amount);
  const notes = payment.notes || {};
  const donorName = notes.donor_name || payment.email || "Anonymous";
  const donorPhone = notes.donor_phone || payment.contact || "—";
  const donorEmail = notes.donor_email || payment.email || "—";
  const meal = notes.meal || "—";
  const note = notes.note || "—";

  const subject =
    event === "payment.captured"
      ? `New donation: ${amount} from ${donorName}`
      : `Payment ${event}: ${amount}`;

  const text = [
    `Event: ${event}`,
    `Amount: ${amount}`,
    `Status: ${payment.status}`,
    `Method: ${payment.method}`,
    ``,
    `Donor: ${donorName}`,
    `Phone: ${donorPhone}`,
    `Email: ${donorEmail}`,
    ``,
    `Meal: ${meal}`,
    `Note: ${note}`,
    ``,
    `Payment ID: ${payment.id}`,
    `Order ID: ${payment.order_id}`,
  ].join("\n");

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;padding:24px;color:#0f172a;">
      <h2 style="color:#1d4ed8;margin:0 0 16px;">${subject}</h2>
      <table style="width:100%;border-collapse:collapse;font-size:14px;">
        <tr><td style="padding:6px 0;color:#475569;">Event</td><td><strong>${event}</strong></td></tr>
        <tr><td style="padding:6px 0;color:#475569;">Amount</td><td><strong>${amount}</strong></td></tr>
        <tr><td style="padding:6px 0;color:#475569;">Status</td><td>${payment.status}</td></tr>
        <tr><td style="padding:6px 0;color:#475569;">Method</td><td>${payment.method}</td></tr>
        <tr><td colspan="2" style="padding:12px 0 4px;border-top:1px solid #e2e8f0;"></td></tr>
        <tr><td style="padding:6px 0;color:#475569;">Donor</td><td><strong>${donorName}</strong></td></tr>
        <tr><td style="padding:6px 0;color:#475569;">Phone</td><td>${donorPhone}</td></tr>
        <tr><td style="padding:6px 0;color:#475569;">Email</td><td>${donorEmail}</td></tr>
        <tr><td colspan="2" style="padding:12px 0 4px;border-top:1px solid #e2e8f0;"></td></tr>
        <tr><td style="padding:6px 0;color:#475569;">Meal</td><td>${meal}</td></tr>
        <tr><td style="padding:6px 0;color:#475569;">Note</td><td>${note}</td></tr>
        <tr><td colspan="2" style="padding:12px 0 4px;border-top:1px solid #e2e8f0;"></td></tr>
        <tr><td style="padding:6px 0;color:#475569;">Payment ID</td><td><code>${payment.id}</code></td></tr>
        <tr><td style="padding:6px 0;color:#475569;">Order ID</td><td><code>${payment.order_id}</code></td></tr>
      </table>
    </div>`;

  return { subject, text, html };
}

export async function POST(request: Request) {
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET;
  console.log("[webhook] env_secret_present:", !!secret, "secret_len:", secret?.length ?? 0, "secret_prefix:", secret?.slice(0, 10));

  if (!secret) {
    return NextResponse.json({ error: "Webhook secret not configured" }, { status: 500 });
  }

  const signature = request.headers.get("x-razorpay-signature");
  const allHeaders: Record<string, string> = {};
  request.headers.forEach((v, k) => { allHeaders[k] = v; });
  console.log("[webhook] headers:", JSON.stringify(allHeaders));
  console.log("[webhook] sig_received:", signature);

  if (!signature) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  const rawBody = await request.text();
  const expected = await computeSignature(rawBody, secret);
  const valid = timingSafeEqual(expected, signature);

  console.log("[webhook] body_len:", rawBody.length);
  console.log("[webhook] body_full:", rawBody);
  console.log("[webhook] body_b64:", btoa(rawBody.slice(0, 200)));
  console.log("[webhook] sig_expected:", expected);
  console.log("[webhook] sig_match:", valid);

  if (!valid) {
    return NextResponse.json(
      { error: "Invalid signature", expected, received: signature },
      { status: 401 },
    );
  }

  let payload: any;
  try {
    payload = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const event = payload.event as string;
  const payment = payload.payload?.payment?.entity;

  if (!payment || (event !== "payment.captured" && event !== "payment.failed")) {
    return NextResponse.json({ ok: true, ignored: event });
  }

  const { subject, text, html } = buildEmail(event, payment);

  const ses = new SESv2Client({
    region: process.env.AWS_REGION,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    },
  });

  try {
    await ses.send(
      new SendEmailCommand({
        FromEmailAddress: process.env.SES_FROM_EMAIL!,
        Destination: { ToAddresses: NOTIFICATION_RECIPIENTS },
        Content: {
          Simple: {
            Subject: { Data: subject, Charset: "UTF-8" },
            Body: {
              Html: { Data: html, Charset: "UTF-8" },
              Text: { Data: text, Charset: "UTF-8" },
            },
          },
        },
      }),
    );
  } catch (err: any) {
    console.error("[webhook] SES send failed:", err?.name, err?.message, err?.$metadata, err?.stack);
    return NextResponse.json(
      { error: "Email send failed", name: err?.name, message: err?.message },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
