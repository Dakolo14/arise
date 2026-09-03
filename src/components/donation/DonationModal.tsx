"use client"

import React, { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, HeartHandshake } from "lucide-react"
import { useDonationModal } from "@/context/DonationContext"
import { GivingWidget } from "@/components/donation/GivingWidget"

export function DonationModal() {
  const { isDonationModalOpen, closeDonationModal, modalOptions } = useDonationModal()

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeDonationModal()
      }
    }
    if (isDonationModalOpen) {
      window.addEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "unset"
    }
  }, [isDonationModalOpen, closeDonationModal])

  return (
    <AnimatePresence>
      {isDonationModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeDonationModal}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            role="dialog"
            aria-modal="true"
            className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 my-auto max-h-[92vh] flex flex-col border border-gray-100"
          >
            {/* Header */}
            <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between bg-gradient-to-r from-[#E8EFF8]/60 to-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#1E4D97]/10 text-[#1E4D97] flex items-center justify-center">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 leading-tight">
                    Support Arise Foundation
                  </h3>
                  <p className="text-xs text-gray-500">
                    Connecting caring hearts with lives in need
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={closeDonationModal}
                className="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors focus:outline-none"
                aria-label="Close donation modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Scrollable */}
            <div className="p-6 overflow-y-auto">
              <GivingWidget
                initialCauseId={modalOptions.causeId}
                initialCurrency={modalOptions.currency}
                initialTab={modalOptions.defaultTab}
                initialAmount={modalOptions.defaultAmount}
                isModal={true}
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
