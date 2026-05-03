"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import confetti from "canvas-confetti";
import { Heart, X, CheckCircle2, Share2 } from "lucide-react";

interface ThankYouModalProps {
  isOpen: boolean;
  onClose: () => void;
  amount?: number;
}

export function ThankYouModal({ isOpen, onClose, amount }: ThankYouModalProps) {
  useEffect(() => {
    if (isOpen) {
      // Primary burst
      const duration = 3 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

      const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

      const interval: any = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
      }, 250);

      return () => clearInterval(interval);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-blue-950/40 backdrop-blur-md"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Decorative Background Elements */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-blue-600 to-blue-800 -z-10" />
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl" />
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="px-8 pt-12 pb-10 text-center">
            {/* Success Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white shadow-xl mb-6 relative"
            >
              <CheckCircle2 className="w-12 h-12 text-emerald-500" />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute inset-0 rounded-full border-4 border-emerald-100/50"
              />
            </motion.div>

            <h2 className="text-3xl font-bold text-blue-900 mb-2">Heartfelt Thanks!</h2>
            <p className="text-blue-600 font-medium mb-6">Your kindness lights up lives.</p>
            
            <div className="bg-slate-50 rounded-2xl p-6 mb-8 border border-blue-50">
              <div className="flex flex-col items-center gap-1">
                <span className="text-xs text-slate-400 uppercase tracking-widest font-semibold">
                  Contribution Received
                </span>
                <span className="text-4xl font-black text-blue-900">
                  ₹{amount?.toLocaleString("en-IN")}
                </span>
              </div>
              <div className="mt-4 pt-4 border-t border-blue-100 flex items-center justify-center gap-2 text-sm text-slate-600 italic">
                <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                "Dignity is not a privilege, it is a right."
              </div>
            </div>

            <p className="text-slate-500 text-sm leading-relaxed mb-8 px-4">
              Your support directly funds the care, medication, and meals for our residents. 
              We'll send your receipt to your registered email shortly.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={onClose}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-blue-200 transition-all active:scale-[0.98]"
              >
                Return to Home
              </button>
              <button className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl border border-blue-100 text-blue-600 font-bold hover:bg-blue-50 transition-all active:scale-[0.98]">
                <Share2 className="w-5 h-5" />
                Share
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
