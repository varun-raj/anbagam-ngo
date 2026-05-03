"use client";

import { useState } from "react";
import { initializeRazorpay } from "@/lib/razorpay-client";
import { ThankYouModal } from "@/components/ThankYouModal";

const QUICK_AMOUNTS = [500, 1000, 2500, 5000];

export function DonationForm() {
  const [amount, setAmount] = useState<string>("1000");
  const [isLoading, setIsLoading] = useState(false);
  const [showThanks, setShowThanks] = useState(false);

  const handleDonate = async (e: React.FormEvent) => {
    e.preventDefault();
    const numAmount = parseFloat(amount);
    if (isNaN(numAmount) || numAmount <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/razorpay/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: numAmount,
          receipt: `receipt_custom_${Date.now()}`,
          notes: {
            type: "Custom Donation",
          },
        }),
      });

      const order = await response.json();

      if (order.error) {
        throw new Error(order.error);
      }

      await initializeRazorpay({
        amount: numAmount,
        name: "General Donation",
        description: "Support Anbagam NGO",
        orderId: order.id,
        onSuccess: (response) => {
          console.log("Payment Successful:", response);
          setShowThanks(true);
        },
        onCancel: () => {
          console.log("Payment Cancelled");
        },
      });
    } catch (error) {
      console.error("Donation error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="bg-white rounded-xl border border-blue-100 shadow-sm p-6 sm:p-8">
        <form onSubmit={handleDonate}>
          <div className="mb-6">
            <label className="block text-sm font-semibold text-blue-900 mb-2">
              Select Amount (₹)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
              {QUICK_AMOUNTS.map((amt) => (
                <button
                  key={amt}
                  type="button"
                  onClick={() => setAmount(amt.toString())}
                  className={`py-2.5 px-4 rounded-lg text-sm font-semibold transition-all border ${
                    amount === amt.toString()
                      ? "bg-blue-600 border-blue-600 text-white shadow-md"
                      : "bg-white border-blue-100 text-blue-700 hover:border-blue-300 hover:bg-blue-50"
                  }`}
                >
                  ₹{amt.toLocaleString("en-IN")}
                </button>
              ))}
            </div>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-semibold">
                ₹
              </span>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Other amount"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-8 pr-4 text-blue-900 font-bold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-200 transition-all transform active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? (
              "Processing..."
            ) : (
              <>
                Donate Now
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </>
            )}
          </button>
          <p className="text-center text-xs text-slate-400 mt-4">
            Secure payment powered by Razorpay
          </p>
        </form>
      </div>

      <ThankYouModal
        isOpen={showThanks}
        onClose={() => setShowThanks(false)}
        amount={parseFloat(amount)}
      />
    </>
  );
}
