"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { initializeRazorpay } from "@/lib/razorpay-client";
import { ThankYouModal } from "@/components/ThankYouModal";
import { DonorDetailsModal, type DonorDetails } from "@/components/DonorDetailsModal";

interface PerPersonCardProps {
  centerName: string;
  location: string;
  unitAmount: number;
}

export function PerPersonCard({ centerName, location, unitAmount }: PerPersonCardProps) {
  const [count, setCount] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showThanks, setShowThanks] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const totalAmount = unitAmount * count;
  const label = `Daily Care · ${count} ${count === 1 ? "Person" : "People"}`;

  const dec = () => setCount((c) => Math.max(1, c - 1));
  const inc = () => setCount((c) => c + 1);

  const openDetails = () => setShowDetails(true);

  const handleDonate = async (donor: DonorDetails) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/razorpay/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: totalAmount,
          receipt: `receipt_perperson_${location}_${Date.now()}`,
          notes: {
            meal: label,
            note: `PerPerson+${location}`,
            people_count: String(count),
            unit_amount: String(unitAmount),
            donor_name: donor.name,
            donor_phone: donor.phone,
          },
        }),
      });

      const order = await response.json();
      if (order.error) throw new Error(order.error);

      setShowDetails(false);

      await initializeRazorpay({
        amount: totalAmount,
        name: label,
        description: `Per-person daily care at ${centerName}`,
        orderId: order.id,
        prefill: { name: donor.name, contact: donor.phone },
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
      <div className="py-4 px-4 sm:px-5 bg-blue-50/40">
        {/* Mobile */}
        <div className="sm:hidden">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-lg flex-shrink-0">
              👤
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-blue-900 text-sm leading-snug">
                Daily Care · Per Person
              </p>
              <p className="text-xs text-slate-500 mt-0.5">
                ₹{unitAmount.toLocaleString("en-IN")} per person / day
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 bg-white border border-blue-200 rounded-lg p-1">
              <button
                type="button"
                onClick={dec}
                disabled={count <= 1 || isLoading}
                aria-label="Decrease people"
                className="w-7 h-7 flex items-center justify-center rounded-md text-blue-700 hover:bg-blue-50 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="min-w-[1.5rem] text-center font-bold text-blue-900 text-sm">
                {count}
              </span>
              <button
                type="button"
                onClick={inc}
                disabled={isLoading}
                aria-label="Increase people"
                className="w-7 h-7 flex items-center justify-center rounded-md text-blue-700 hover:bg-blue-50 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
            <button
              onClick={openDetails}
              disabled={isLoading}
              className="flex-1 inline-flex items-center justify-center gap-1 bg-blue-600 active:bg-blue-800 text-white text-xs font-semibold px-3 py-2 rounded-md shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Processing..." : `Donate ₹${totalAmount.toLocaleString("en-IN")}`}
            </button>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="flex-shrink-0 w-11 h-11 rounded-full bg-blue-100 flex items-center justify-center text-xl">
            👤
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-blue-900 text-base leading-snug">
              Daily Care · Per Person
            </p>
            <p className="text-xs text-slate-500 mt-0.5">
              ₹{unitAmount.toLocaleString("en-IN")} per person / day
            </p>
          </div>
          <div className="flex items-center gap-1.5 bg-white border border-blue-200 rounded-lg p-1">
            <button
              type="button"
              onClick={dec}
              disabled={count <= 1 || isLoading}
              aria-label="Decrease people"
              className="w-8 h-8 flex items-center justify-center rounded-md text-blue-700 hover:bg-blue-50 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="min-w-[2rem] text-center font-bold text-blue-900">
              {count}
            </span>
            <button
              type="button"
              onClick={inc}
              disabled={isLoading}
              aria-label="Increase people"
              className="w-8 h-8 flex items-center justify-center rounded-md text-blue-700 hover:bg-blue-50 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
          <span className="flex-shrink-0 text-xl font-bold text-blue-800 mr-2 min-w-[5rem] text-right">
            ₹{totalAmount.toLocaleString("en-IN")}
          </span>
          <button
            onClick={openDetails}
            disabled={isLoading}
            className="flex-shrink-0 inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Processing..." : "Donate"}
          </button>
        </div>
      </div>

      <DonorDetailsModal
        isOpen={showDetails}
        onClose={() => !isLoading && setShowDetails(false)}
        onSubmit={handleDonate}
        amount={totalAmount}
        mealName={label}
        isSubmitting={isLoading}
      />

      <ThankYouModal
        isOpen={showThanks}
        onClose={() => setShowThanks(false)}
        amount={totalAmount}
      />
    </>
  );
}
