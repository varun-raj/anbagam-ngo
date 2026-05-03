declare global {
  interface Window {
    Razorpay: any;
  }
}

export const loadRazorpay = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

interface RazorpayOptions {
  amount: number;
  name: string;
  description: string;
  orderId: string;
  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };
  onSuccess: (response: any) => void;
  onCancel?: () => void;
}

export const initializeRazorpay = async ({
  amount,
  name,
  description,
  orderId,
  prefill,
  onSuccess,
  onCancel,
}: RazorpayOptions) => {
  const options = {
    key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
    amount: amount * 100, // already in order creation but good to have
    currency: "INR",
    name: "Anbagam NGO",
    description,
    order_id: orderId,
    prefill,
    handler: function (response: any) {
      onSuccess(response);
    },
    modal: {
      ondismiss: function () {
        if (onCancel) onCancel();
      },
    },
    theme: {
      color: "#2563eb", // blue-600
    },
  };

  const rzp = new window.Razorpay(options);
  rzp.open();
};
