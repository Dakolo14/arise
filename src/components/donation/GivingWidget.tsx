"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { 
  CreditCard, 
  Building2, 
  Gift, 
  Check, 
  Copy, 
  ArrowRight, 
  Heart, 
  ShieldCheck, 
  ExternalLink,
  MessageCircle,
  Mail,
  Sparkles
} from "lucide-react"
import { DONATION_CONFIG, BankAccount } from "@/data/donation"
import { CurrencyType, DonationTab } from "@/context/DonationContext"

interface GivingWidgetProps {
  initialCauseId?: string
  initialCurrency?: CurrencyType
  initialTab?: DonationTab
  initialAmount?: number
  onSuccess?: () => void
  isModal?: boolean
}

export function GivingWidget({
  initialCauseId = "general",
  initialCurrency = "NGN",
  initialTab = "online",
  initialAmount,
  isModal = false,
}: GivingWidgetProps) {
  const [activeTab, setActiveTab] = useState<DonationTab>(initialTab)
  const [currency, setCurrency] = useState<CurrencyType>(initialCurrency)
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("one-time")
  const [selectedCauseId, setSelectedCauseId] = useState<string>(initialCauseId)
  
  // Amounts
  const currentPresets = DONATION_CONFIG.presetAmounts[currency] || DONATION_CONFIG.presetAmounts.NGN
  const [selectedAmount, setSelectedAmount] = useState<number>(
    initialAmount || currentPresets[1]?.amount || 15000
  )
  const [customAmount, setCustomAmount] = useState<string>("")
  const [isCustom, setIsCustom] = useState(false)

  // Donor form
  const [donorName, setDonorName] = useState("")
  const [donorEmail, setDonorEmail] = useState("")
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)

  // Currency symbols
  const currencySymbols: Record<CurrencyType, string> = {
    NGN: "₦",
    USD: "$",
    GBP: "£",
    EUR: "€",
  }

  // Handle amount change
  const handlePresetSelect = (amount: number) => {
    setSelectedAmount(amount)
    setIsCustom(false)
    setCustomAmount("")
  }

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^0-9]/g, "")
    setCustomAmount(val)
    setIsCustom(true)
    if (val) {
      setSelectedAmount(parseInt(val, 10))
    }
  }

  // Handle currency change
  const handleCurrencyChange = (newCurr: CurrencyType) => {
    setCurrency(newCurr)
    const newPresets = DONATION_CONFIG.presetAmounts[newCurr]
    setSelectedAmount(newPresets[1]?.amount || 50)
    setIsCustom(false)
    setCustomAmount("")
  }

  // Copy account number
  const handleCopy = (accountNum: string) => {
    navigator.clipboard.writeText(accountNum)
    setCopiedAccount(accountNum)
    setTimeout(() => setCopiedAccount(null), 2500)
  }

  // Find impact label
  const matchedPreset = currentPresets.find(p => p.amount === selectedAmount)
  const impactText = matchedPreset 
    ? matchedPreset.impactLabel 
    : "Powers critical humanitarian operations, outreach logistics, and community care in Edo State."

  // Handle Online Donation Submission
  const handleOnlineDonate = (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Check if we have a live payment link
    const paymentUrl = DONATION_CONFIG.paymentLinks.paystackUrl || DONATION_CONFIG.paymentLinks.flutterwaveUrl

    setTimeout(() => {
      setIsProcessing(false)
      if (paymentUrl && paymentUrl !== "https://paystack.shop/arisecsf") {
        window.open(paymentUrl, "_blank", "noopener,noreferrer")
      } else {
        // Show demo success confirmation
        setIsCompleted(true)
      }
    }, 1200)
  }

  // Format currency
  const formatAmount = (amt: number) => {
    return amt.toLocaleString()
  }

  if (isCompleted) {
    return (
      <div className="text-center py-10 px-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-20 h-20 rounded-full bg-green-100 text-[#589E47] flex items-center justify-center mx-auto mb-6 shadow-md"
        >
          <Check className="w-10 h-10 stroke-[2.5]" />
        </motion.div>
        
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
          Thank You for Your Generosity!
        </h3>
        
        <p className="text-gray-600 max-w-md mx-auto mb-6 leading-relaxed">
          Your gift of <strong className="text-gray-900">{currencySymbols[currency]}{formatAmount(selectedAmount)}</strong> directly fuels our community outreaches and brings lasting hope to lives in need.
        </p>

        <div className="p-5 rounded-2xl bg-[#E8EFF8]/80 border border-[#1E4D97]/15 max-w-sm mx-auto mb-8 text-left text-sm text-gray-700">
          <div className="flex justify-between py-1 border-b border-gray-200/60">
            <span className="text-gray-500">Initiative</span>
            <span className="font-medium text-[#1E4D97]">
              {DONATION_CONFIG.causes.find(c => c.id === selectedCauseId)?.title.split("(")[0]}
            </span>
          </div>
          <div className="flex justify-between py-1 border-b border-gray-200/60">
            <span className="text-gray-500">Frequency</span>
            <span className="capitalize font-medium text-gray-800">{frequency}</span>
          </div>
          <div className="flex justify-between py-1">
            <span className="text-gray-500">Beneficiary</span>
            <span className="font-medium text-gray-800">Arise Community Support Foundation</span>
          </div>
        </div>

        <button
          onClick={() => {
            setIsCompleted(false)
            setDonorName("")
            setDonorEmail("")
          }}
          className="px-8 py-3 rounded-full bg-[#1E4D97] text-white font-medium hover:bg-[#163a73] transition-colors shadow-md"
        >
          Make Another Contribution
        </button>
      </div>
    )
  }

  return (
    <div className="w-full">
      {/* Tab Switcher */}
      <div className="flex p-1.5 bg-gray-100/90 rounded-2xl mb-6">
        <button
          type="button"
          onClick={() => setActiveTab("online")}
          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            activeTab === "online"
              ? "bg-white text-[#1E4D97] shadow-sm"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          <CreditCard className="w-4 h-4" />
          <span>Card & Online</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("bank")}
          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            activeTab === "bank"
              ? "bg-white text-[#1E4D97] shadow-sm"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          <Building2 className="w-4 h-4" />
          <span>Bank Transfer</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("inkind")}
          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            activeTab === "inkind"
              ? "bg-white text-[#1E4D97] shadow-sm"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          <Gift className="w-4 h-4" />
          <span>In-Kind / Supplies</span>
        </button>
      </div>

      {/* 1. ONLINE PAYMENT TAB */}
      {activeTab === "online" && (
        <form onSubmit={handleOnlineDonate} className="space-y-6">
          {/* Currency and Frequency */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Frequency Toggle */}
            <div className="flex p-1 bg-gray-100 rounded-xl w-full sm:w-auto">
              <button
                type="button"
                onClick={() => setFrequency("one-time")}
                className={`flex-1 sm:flex-none px-5 py-2 rounded-lg text-xs font-semibold transition-all ${
                  frequency === "one-time"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                One-Time
              </button>
              <button
                type="button"
                onClick={() => setFrequency("monthly")}
                className={`flex-1 sm:flex-none px-5 py-2 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1 ${
                  frequency === "monthly"
                    ? "bg-[#1E4D97] text-white shadow-sm"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                <Heart className="w-3 h-3 text-red-300 fill-current" />
                <span>Monthly Giving</span>
              </button>
            </div>

            {/* Currency Selector */}
            <div className="flex items-center gap-1.5 self-end sm:self-auto">
              {(["NGN", "USD", "GBP", "EUR"] as CurrencyType[]).map((curr) => (
                <button
                  key={curr}
                  type="button"
                  onClick={() => handleCurrencyChange(curr)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                    currency === curr
                      ? "border-[#1E4D97] bg-[#E8EFF8] text-[#1E4D97]"
                      : "border-gray-200 text-gray-500 hover:border-gray-300"
                  }`}
                >
                  {curr} ({currencySymbols[curr]})
                </button>
              ))}
            </div>
          </div>

          {/* Select Cause */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
              Select Designated Initiative
            </label>
            <select
              value={selectedCauseId}
              onChange={(e) => setSelectedCauseId(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#1E4D97]/30 bg-white"
            >
              {DONATION_CONFIG.causes.map((cause) => (
                <option key={cause.id} value={cause.id}>
                  {cause.title}
                </option>
              ))}
            </select>
          </div>

          {/* Preset Amounts Grid */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
              Choose Giving Amount
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2.5 mb-3">
              {currentPresets.map((preset) => {
                const isSelected = selectedAmount === preset.amount && !isCustom
                return (
                  <button
                    key={preset.amount}
                    type="button"
                    onClick={() => handlePresetSelect(preset.amount)}
                    className={`py-3 px-2 rounded-xl text-sm font-semibold border transition-all flex flex-col items-center justify-center ${
                      isSelected
                        ? "border-[#1E4D97] bg-[#1E4D97] text-white shadow-md"
                        : "border-gray-200 hover:border-[#1E4D97]/40 text-gray-800 hover:bg-gray-50"
                    }`}
                  >
                    <span>{currencySymbols[currency]}{formatAmount(preset.amount)}</span>
                  </button>
                )
              })}
            </div>

            {/* Custom Amount Field */}
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium text-sm">
                {currencySymbols[currency]}
              </span>
              <input
                type="text"
                placeholder="Or enter custom amount"
                value={customAmount}
                onChange={handleCustomAmountChange}
                className={`w-full pl-9 pr-4 py-3 rounded-xl border text-sm font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#1E4D97]/30 ${
                  isCustom ? "border-[#1E4D97] bg-[#E8EFF8]/30" : "border-gray-200"
                }`}
              />
            </div>
          </div>

          {/* Impact Callout Banner */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-[#E8EFF8] to-[#f4f7fb] border border-[#1E4D97]/15 flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-[#589E47] shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-bold text-[#1E4D97] uppercase tracking-wider block mb-0.5">
                Your Direct Impact:
              </span>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                {impactText}
              </p>
            </div>
          </div>

          {/* Donor details (Optional) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">
                Full Name (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Adesuwa Osagie"
                value={donorName}
                onChange={(e) => setDonorName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E4D97]/30"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">
                Email Address (For receipt)
              </label>
              <input
                type="email"
                placeholder="donor@example.com"
                value={donorEmail}
                onChange={(e) => setDonorEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E4D97]/30"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isProcessing || !selectedAmount || selectedAmount <= 0}
            className="w-full py-4 rounded-full bg-[#1E4D97] hover:bg-[#163a73] text-white font-medium text-base shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group disabled:opacity-50 cursor-pointer"
          >
            {isProcessing ? (
              <span className="inline-flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Connecting Secure Gateway...
              </span>
            ) : (
              <>
                <span>
                  Donate {currencySymbols[currency]}{formatAmount(selectedAmount)} {frequency === "monthly" ? "/ month" : ""}
                </span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </button>

          {/* Trust badges */}
          <div className="flex items-center justify-center gap-6 text-xs text-gray-400 pt-2 border-t border-gray-100">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#589E47]" />
              256-bit Secure Encryption
            </span>
            <span>•</span>
            <span>Verified Non-Profit NGO</span>
          </div>
        </form>
      )}

      {/* 2. DIRECT BANK TRANSFER TAB */}
      {activeTab === "bank" && (
        <div className="space-y-6">
          <p className="text-sm text-gray-600 leading-relaxed">
            You can transfer directly from your mobile banking app, USSD, or international wire. All donations go directly to the foundation&apos;s verified accounts.
          </p>

          {/* Currency Filter for Accounts */}
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setCurrency("NGN")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                currency === "NGN"
                  ? "border-[#1E4D97] bg-[#E8EFF8] text-[#1E4D97]"
                  : "border-gray-200 text-gray-600 hover:bg-gray-50"
              }`}
            >
              Nigerian Naira (NGN)
            </button>
            <button
              type="button"
              onClick={() => setCurrency("USD")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                currency !== "NGN"
                  ? "border-[#1E4D97] bg-[#E8EFF8] text-[#1E4D97]"
                  : "border-gray-200 text-gray-600 hover:bg-gray-50"
              }`}
            >
              Domiciliary & International (USD / GBP)
            </button>
          </div>

          {/* Account Cards */}
          <div className="space-y-4">
            {DONATION_CONFIG.bankAccounts
              .filter(acc => currency === "NGN" ? acc.currency === "NGN" : acc.currency !== "NGN")
              .map((acc, index) => (
                <div
                  key={index}
                  className="p-5 rounded-2xl bg-gray-50 border border-gray-200/80 hover:border-[#1E4D97]/30 transition-all relative overflow-hidden group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#1E4D97]/10 text-[#1E4D97] mb-1.5 uppercase tracking-wider">
                        {acc.currency} Account
                      </span>
                      <h4 className="text-base font-semibold text-gray-900">{acc.bankName}</h4>
                      <p className="text-xs text-gray-500 mt-0.5">Account Name: <strong className="text-gray-800">{acc.accountName}</strong></p>
                    </div>

                    {/* Copy Account Button */}
                    <button
                      type="button"
                      onClick={() => handleCopy(acc.accountNumber)}
                      className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white border border-gray-200 text-xs font-semibold text-gray-700 hover:text-[#1E4D97] hover:border-[#1E4D97]/30 transition-all shadow-sm"
                      title="Copy Account Number"
                    >
                      {copiedAccount === acc.accountNumber ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-green-600" />
                          <span className="text-green-600">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="mt-4 pt-3 border-t border-gray-200/60 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-gray-400 block">Account Number</span>
                      <span className="text-xl font-mono font-bold tracking-wider text-gray-900">{acc.accountNumber}</span>
                    </div>
                    {acc.swiftBic && (
                      <div className="text-right">
                        <span className="text-xs text-gray-400 block">SWIFT / BIC</span>
                        <span className="text-sm font-mono font-semibold text-gray-700">{acc.swiftBic}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </div>

          {/* Transfer Notification prompt */}
          <div className="p-4 rounded-2xl bg-[#E8EFF8]/80 border border-[#1E4D97]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-xs text-gray-700">
              <strong className="block text-[#1E4D97] font-semibold mb-0.5">Completed your transfer?</strong>
              Notify our team so we can send your acknowledgment and official receipt.
            </div>
            <a
              href={`https://wa.me/${DONATION_CONFIG.partnershipContact.whatsapp}?text=${encodeURIComponent("Hello Arise Community Support Foundation, I have just completed a donation transfer to support your community initiatives.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-[#589E47] hover:bg-[#4a873c] text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-all whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Confirm on WhatsApp</span>
            </a>
          </div>
        </div>
      )}

      {/* 3. IN-KIND & PARTNERSHIP TAB */}
      {activeTab === "inkind" && (
        <div className="space-y-6">
          <p className="text-sm text-gray-600 leading-relaxed">
            We welcome non-cash donations that directly support our beneficiaries in Benin City and surrounding communities.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-4 rounded-2xl border border-gray-200 bg-gray-50/50">
              <h4 className="text-sm font-semibold text-gray-900 mb-1 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#589E47]" />
                Healthcare & Medications
              </h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Glucometers, blood pressure monitors, test strips, vitamins, and certified medications.
              </p>
            </div>

            <div className="p-4 rounded-2xl border border-gray-200 bg-gray-50/50">
              <h4 className="text-sm font-semibold text-gray-900 mb-1 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#1E4D97]" />
                Education & Technology
              </h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                School textbooks, notebooks, school bags, shoes, desktop computers, and laptops for youth.
              </p>
            </div>

            <div className="p-4 rounded-2xl border border-gray-200 bg-gray-50/50">
              <h4 className="text-sm font-semibold text-gray-900 mb-1 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                Senior Citizen Food Packs
              </h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Non-perishable food items, grains, cereals, and hygiene supplies for elderly care.
              </p>
            </div>

            <div className="p-4 rounded-2xl border border-gray-200 bg-gray-50/50">
              <h4 className="text-sm font-semibold text-gray-900 mb-1 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-purple-500" />
                Corporate Sponsorship
              </h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Full community project sponsorship, CSR grants, and institutional partnership.
              </p>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <a
              href={`https://wa.me/${DONATION_CONFIG.partnershipContact.whatsapp}?text=${encodeURIComponent("Hello Arise Community Support Foundation, I would like to discuss an in-kind donation or partnership.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3.5 px-6 rounded-full bg-[#589E47] hover:bg-[#4a873c] text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Discuss via WhatsApp</span>
            </a>

            <a
              href={`mailto:${DONATION_CONFIG.partnershipContact.email}?subject=${encodeURIComponent("In-Kind Donation / Partnership Inquiry")}`}
              className="flex-1 py-3.5 px-6 rounded-full border border-gray-300 hover:border-[#1E4D97] text-gray-700 hover:text-[#1E4D97] text-sm font-semibold flex items-center justify-center gap-2 transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Send Email</span>
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
