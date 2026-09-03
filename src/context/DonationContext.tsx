"use client"

import React, { createContext, useContext, useState, ReactNode } from "react"

export type CurrencyType = "NGN" | "USD" | "GBP" | "EUR"
export type DonationTab = "online" | "bank" | "inkind"

export interface OpenDonationModalOptions {
  causeId?: string
  defaultAmount?: number
  currency?: CurrencyType
  defaultTab?: DonationTab
}

interface DonationContextType {
  isDonationModalOpen: boolean
  openDonationModal: (options?: OpenDonationModalOptions) => void
  closeDonationModal: () => void
  modalOptions: OpenDonationModalOptions
}

const DonationContext = createContext<DonationContextType | undefined>(undefined)

export function DonationProvider({ children }: { children: ReactNode }) {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false)
  const [modalOptions, setModalOptions] = useState<OpenDonationModalOptions>({
    causeId: "general",
    currency: "NGN",
    defaultTab: "online",
  })

  const openDonationModal = (options?: OpenDonationModalOptions) => {
    setModalOptions({
      causeId: options?.causeId || "general",
      defaultAmount: options?.defaultAmount,
      currency: options?.currency || "NGN",
      defaultTab: options?.defaultTab || "online",
    })
    setIsDonationModalOpen(true)
  }

  const closeDonationModal = () => {
    setIsDonationModalOpen(false)
  }

  return (
    <DonationContext.Provider
      value={{
        isDonationModalOpen,
        openDonationModal,
        closeDonationModal,
        modalOptions,
      }}
    >
      {children}
    </DonationContext.Provider>
  )
}

export function useDonationModal() {
  const context = useContext(DonationContext)
  if (!context) {
    throw new Error("useDonationModal must be used within a DonationProvider")
  }
  return context
}
