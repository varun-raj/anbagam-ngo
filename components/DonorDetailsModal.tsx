"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, User, Phone } from "lucide-react";

export interface DonorDetails {
  name: string;
  phone: string;
}

interface DonorDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (details: DonorDetails) => void;
  amount: number;
  mealName: string;
  isSubmitting?: boolean;
}

export function DonorDetailsModal({
  isOpen,
  onClose,
  onSubmit,
  amount,
  mealName,
  isSubmitting = false,
}: DonorDetailsModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});

  if (!isOpen) return null;

  const validate = () => {
    const next: typeof errors = {};
    if (!name.trim()) next.name = "Name is required";
    const digits = phone.replace(/\D/g, "");
    if (!digits) next.phone = "Phone is required";
    else if (digits.length < 10) next.phone = "Enter a valid 10-digit number";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    onSubmit({
      name: name.trim(),
      phone: phone.replace(/\D/g, ""),
    });
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={isSubmitting ? undefined : onClose}
          className="absolute inset-0 bg-blue-950/40 backdrop-blur-md"
        />

        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 px-6 sm:px-8 pt-8 pb-6 text-center">
            <button
              onClick={onClose}
              disabled={isSubmitting}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors disabled:opacity-50"
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-2xl font-bold text-white mb-1">Your Details</h2>
            <p className="text-blue-100 text-sm">
              Donating <span className="font-semibold">₹{amount.toLocaleString("en-IN")}</span> for {mealName}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="px-6 sm:px-8 pb-8 pt-2 space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5">
                Name <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  disabled={isSubmitting}
                  autoFocus
                  className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm disabled:bg-slate-50"
                />
              </div>
              {errors.name && <p className="text-xs text-rose-500 mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5">
                Phone <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="tel"
                  inputMode="numeric"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="10-digit mobile number"
                  disabled={isSubmitting}
                  className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm disabled:bg-slate-50"
                />
              </div>
              {errors.phone && <p className="text-xs text-rose-500 mt-1">{errors.phone}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-3 rounded-xl shadow-lg shadow-blue-200 transition-all active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed mt-2"
            >
              {isSubmitting ? "Processing..." : "Continue to Payment"}
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
