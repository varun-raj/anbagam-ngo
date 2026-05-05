"use client";

import { useState } from "react";
import { type Meal } from "@/lib/config";
import { initializeRazorpay } from "@/lib/razorpay-client";
import { ThankYouModal } from "@/components/ThankYouModal";
import { DonorDetailsModal, type DonorDetails } from "@/components/DonorDetailsModal";

interface MealCardProps {
  meal: Meal;
  isLast?: boolean;
}

export function MealCard({ meal, isLast = false }: MealCardProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [showThanks, setShowThanks] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const openDetails = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowDetails(true);
  };

  const handleDonate = async (donor: DonorDetails) => {
    setIsLoading(true);

    try {
      const response = await fetch("/api/razorpay/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: meal.amount,
          receipt: `receipt_${meal.name}_${Date.now()}`,
          notes: {
            meal: meal.name,
            note: meal.note,
            donor_name: donor.name,
            donor_phone: donor.phone,
          },
        }),
      });

      const order = await response.json();

      if (order.error) {
        throw new Error(order.error);
      }

      setShowDetails(false);

      await initializeRazorpay({
        amount: meal.amount,
        name: meal.name,
        description: `Donate for ${meal.name} at Anbagam`,
        orderId: order.id,
        prefill: {
          name: donor.name,
          contact: donor.phone,
        },
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
      <div
        className={`py-4 px-4 sm:px-5 hover:bg-blue-50/60 transition-colors duration-150 ${
          !isLast ? "border-b border-blue-100" : ""
        }`}
      >
        {/* ── Mobile layout ── */}
        <div className="sm:hidden grid grid-cols-[40px_1fr] gap-x-3">
          {/* Icon — spans both rows */}
          <div className="row-span-2 flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-lg mt-0.5">
            {meal.icon}
          </div>

          {/* Row 1 right: name (left) + amount (right) */}
          <div className="flex items-center justify-between gap-2">
            <p className="font-semibold text-blue-900 text-sm leading-snug">
              {meal.name}
            </p>
            <span className="font-bold text-blue-800 text-base flex-shrink-0">
              ₹{meal.amount.toLocaleString("en-IN")}
            </span>
          </div>

          {/* Row 2 right: donate (left) + subtitle (right) */}
          <div className="flex items-center justify-between gap-2 mt-2">
            <button
              onClick={openDetails}
              disabled={isLoading}
              className="inline-flex items-center gap-1 bg-blue-600 active:bg-blue-800 text-white text-xs font-semibold px-3 py-1.5 rounded-md shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Processing..." : "Donate"}
              {!isLoading && (
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              )}
            </button>
            <p className="text-xs text-slate-500 uppercase tracking-wide">
              Daily contribution
            </p>
          </div>
        </div>

        {/* ── Desktop layout: single row ── */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="flex-shrink-0 w-11 h-11 rounded-full bg-blue-100 flex items-center justify-center text-xl">
            {meal.icon}
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-blue-900 text-base leading-snug">
              {meal.name}
            </p>
            <p className="text-xs text-slate-500 uppercase tracking-wide mt-0.5">
              Daily contribution
            </p>
          </div>
          <span className="flex-shrink-0 text-xl font-bold text-blue-800 mr-2">
            ₹{meal.amount.toLocaleString("en-IN")}
          </span>
          <button
            onClick={openDetails}
            disabled={isLoading}
            className="flex-shrink-0 inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Processing..." : "Donate"}
            {!isLoading && (
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <DonorDetailsModal
        isOpen={showDetails}
        onClose={() => !isLoading && setShowDetails(false)}
        onSubmit={handleDonate}
        amount={meal.amount}
        mealName={meal.name}
        isSubmitting={isLoading}
      />

      <ThankYouModal
        isOpen={showThanks}
        onClose={() => setShowThanks(false)}
        amount={meal.amount}
      />
    </>
  );
}
