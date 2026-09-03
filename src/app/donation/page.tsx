"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { 
  Building2, 
  CreditCard, 
  Gift, 
  Copy, 
  Check, 
  ShieldCheck, 
  ArrowRight, 
  Heart, 
  Mail, 
  Phone,
  HelpCircle,
  GraduationCap,
  HeartPulse,
  Users,
  Sparkles
} from "lucide-react"
import { PageHero } from "@/components/ui/PageHero"
import { FaWhatsapp } from "@/components/ui/SocialIcons"
import { DONATION_CONFIG } from "@/data/donation"
import { CurrencyType } from "@/context/DonationContext"

export default function DonationPage() {
  const [activeMethod, setActiveMethod] = useState<"bank" | "online" | "inkind">("bank")
  const [bankCurrency, setBankCurrency] = useState<"NGN" | "DOM">("NGN")
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null)

  // Online form state
  const [onlineCurrency, setOnlineCurrency] = useState<CurrencyType>("NGN")
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("one-time")
  const [selectedCauseId, setSelectedCauseId] = useState("general")
  
  const currentPresets = DONATION_CONFIG.presetAmounts[onlineCurrency] || DONATION_CONFIG.presetAmounts.NGN
  const [amount, setAmount] = useState<number>(currentPresets[1]?.amount || 15000)
  const [customAmount, setCustomAmount] = useState("")
  const [isCustom, setIsCustom] = useState(false)
  const [donorName, setDonorName] = useState("")
  const [donorEmail, setDonorEmail] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [onlineSuccess, setOnlineSuccess] = useState(false)

  const currencySymbols: Record<CurrencyType, string> = {
    NGN: "₦",
    USD: "$",
    GBP: "£",
    EUR: "€",
  }

  const handleCopy = (accountNumber: string) => {
    navigator.clipboard.writeText(accountNumber)
    setCopiedAccount(accountNumber)
    setTimeout(() => setCopiedAccount(null), 2500)
  }

  const handleOnlineSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    const paymentUrl = DONATION_CONFIG.paymentLinks.paystackUrl || DONATION_CONFIG.paymentLinks.flutterwaveUrl
    setTimeout(() => {
      setIsProcessing(false)
      if (paymentUrl && paymentUrl !== "https://paystack.shop/arisecsf") {
        window.open(paymentUrl, "_blank", "noopener,noreferrer")
      } else {
        setOnlineSuccess(true)
      }
    }, 1200)
  }

  return (
    <div className="flex flex-col w-full bg-white pb-24">
      {/* Page Hero */}
      <PageHero
        label="Support Our Mission"
        title="Be the Heart Behind a Life Changed"
        subtitle="Every contribution directly empowers promising students with scholarships, provides free diabetes and health screenings, and delivers care to vulnerable community elders in Nigeria."
      />

      {/* Main Donation Container */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 -mt-2">
        
        {/* Method Selector Tabs */}
        <div className="flex flex-wrap p-1.5 bg-gray-100/90 rounded-2xl sm:rounded-full max-w-2xl mx-auto mb-12 shadow-xs">
          <button
            type="button"
            onClick={() => setActiveMethod("bank")}
            className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl sm:rounded-full text-xs sm:text-sm font-semibold transition-all ${
              activeMethod === "bank"
                ? "bg-[#1E4D97] text-white shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>Bank Transfer</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveMethod("online")}
            className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl sm:rounded-full text-xs sm:text-sm font-semibold transition-all ${
              activeMethod === "online"
                ? "bg-[#1E4D97] text-white shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <CreditCard className="w-4 h-4" />
            <span>Card & Online</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveMethod("inkind")}
            className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl sm:rounded-full text-xs sm:text-sm font-semibold transition-all ${
              activeMethod === "inkind"
                ? "bg-[#1E4D97] text-white shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <Gift className="w-4 h-4" />
            <span>In-Kind & Material</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Giving Content */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-gray-200/80 shadow-lg">

            {/* TAB 1: BANK TRANSFER */}
            {activeMethod === "bank" && (
              <div className="space-y-8">
                <div>
                  <span className="text-xs font-bold text-[#1E4D97] uppercase tracking-wider block mb-1">
                    Direct Official Accounts
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Official Foundation Bank Transfer
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Transfer directly via mobile banking app, USSD code, or international wire. All funds go straight into Arise Community Support Foundation&apos;s verified institutional accounts.
                  </p>
                </div>

                {/* Currency Filter */}
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setBankCurrency("NGN")}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                      bankCurrency === "NGN"
                        ? "border-[#1E4D97] bg-[#E8EFF8] text-[#1E4D97]"
                        : "border-gray-200 text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    Naira Accounts (NGN)
                  </button>
                  <button
                    type="button"
                    onClick={() => setBankCurrency("DOM")}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                      bankCurrency === "DOM"
                        ? "border-[#1E4D97] bg-[#E8EFF8] text-[#1E4D97]"
                        : "border-gray-200 text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    Foreign / Domiciliary (USD & GBP)
                  </button>
                </div>

                {/* Bank Cards */}
                <div className="space-y-5">
                  {DONATION_CONFIG.bankAccounts
                    .filter(acc => bankCurrency === "NGN" ? acc.currency === "NGN" : acc.currency !== "NGN")
                    .map((acc, index) => (
                      <div
                        key={index}
                        className="p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-[#E8EFF8]/30 border border-gray-200 hover:border-[#1E4D97]/40 transition-all shadow-xs"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold bg-[#1E4D97]/10 text-[#1E4D97] mb-2 uppercase tracking-wider">
                              {acc.currency} Account
                            </span>
                            <h3 className="text-lg font-bold text-gray-900">{acc.bankName}</h3>
                            <p className="text-xs text-gray-600 mt-1">
                              Account Name: <strong className="text-gray-900">{acc.accountName}</strong>
                            </p>
                            {acc.branch && (
                              <p className="text-xs text-gray-400 mt-0.5">Branch: {acc.branch}</p>
                            )}
                          </div>

                          <button
                            type="button"
                            onClick={() => handleCopy(acc.accountNumber)}
                            className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white border border-gray-200 text-xs font-semibold text-gray-700 hover:text-[#1E4D97] hover:border-[#1E4D97]/40 transition-all shadow-xs shrink-0 cursor-pointer"
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

                        <div className="mt-5 pt-4 border-t border-gray-200/70 flex flex-wrap items-center justify-between gap-2">
                          <div>
                            <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider block">
                              Account Number
                            </span>
                            <span className="text-2xl font-mono font-bold tracking-wider text-gray-900">
                              {acc.accountNumber}
                            </span>
                          </div>

                          {acc.swiftBic && (
                            <div className="text-right">
                              <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider block">
                                SWIFT / BIC Code
                              </span>
                              <span className="text-sm font-mono font-bold text-gray-800">
                                {acc.swiftBic}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                </div>

                {/* Proof of Transfer Confirmation Card */}
                <div className="p-6 rounded-2xl bg-[#E8EFF8] border border-[#1E4D97]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-[#1E4D97]">
                      Completed Your Bank Transfer?
                    </h4>
                    <p className="text-xs text-gray-600 max-w-sm">
                      Send a quick confirmation on WhatsApp with your name or initiative so our finance team can confirm and issue an official receipt.
                    </p>
                  </div>
                  <a
                    href={`https://wa.me/${DONATION_CONFIG.partnershipContact.whatsapp}?text=${encodeURIComponent("Hello Arise Community Support Foundation, I have just completed a bank transfer donation. Kindly find my confirmation details.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold flex items-center gap-2 shadow-sm transition-all whitespace-nowrap cursor-pointer"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                    <span>Confirm on WhatsApp</span>
                  </a>
                </div>
              </div>
            )}

            {/* TAB 2: ONLINE PAYMENT */}
            {activeMethod === "online" && (
              <div>
                {onlineSuccess ? (
                  <div className="text-center py-10 px-4">
                    <div className="w-16 h-16 rounded-full bg-green-100 text-[#589E47] flex items-center justify-center mx-auto mb-4">
                      <Check className="w-8 h-8 stroke-[2.5]" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You for Giving!</h3>
                    <p className="text-sm text-gray-600 max-w-md mx-auto mb-6">
                      Your contribution of <strong className="text-gray-900">{currencySymbols[onlineCurrency]}{amount.toLocaleString()}</strong> directly impacts lives in need.
                    </p>
                    <button
                      type="button"
                      onClick={() => setOnlineSuccess(false)}
                      className="px-6 py-2.5 rounded-full bg-[#1E4D97] text-white text-sm font-medium hover:bg-[#163a73]"
                    >
                      Give Another Gift
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleOnlineSubmit} className="space-y-6">
                    <div>
                      <span className="text-xs font-bold text-[#1E4D97] uppercase tracking-wider block mb-1">
                        Secure Gateway
                      </span>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        Online Card & Mobile Giving
                      </h2>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Pay securely with your Debit/Credit Card, Apple Pay, or USSD via our verified non-profit payment gateway.
                      </p>
                    </div>

                    {/* Frequency & Currency */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                      <div className="flex p-1 bg-gray-100 rounded-xl w-full sm:w-auto">
                        <button
                          type="button"
                          onClick={() => setFrequency("one-time")}
                          className={`flex-1 sm:flex-none px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                            frequency === "one-time" ? "bg-white text-gray-900 shadow-xs" : "text-gray-500"
                          }`}
                        >
                          One-Time
                        </button>
                        <button
                          type="button"
                          onClick={() => setFrequency("monthly")}
                          className={`flex-1 sm:flex-none px-4 py-2 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1 ${
                            frequency === "monthly" ? "bg-[#1E4D97] text-white shadow-xs" : "text-gray-500"
                          }`}
                        >
                          <Heart className="w-3 h-3 text-red-300 fill-current" />
                          <span>Monthly</span>
                        </button>
                      </div>

                      <div className="flex gap-1.5 self-end sm:self-auto">
                        {(["NGN", "USD", "GBP", "EUR"] as CurrencyType[]).map((curr) => (
                          <button
                            key={curr}
                            type="button"
                            onClick={() => {
                              setOnlineCurrency(curr)
                              setAmount(DONATION_CONFIG.presetAmounts[curr][1]?.amount || 50)
                              setIsCustom(false)
                            }}
                            className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                              onlineCurrency === curr
                                ? "border-[#1E4D97] bg-[#E8EFF8] text-[#1E4D97]"
                                : "border-gray-200 text-gray-500 hover:border-gray-300"
                            }`}
                          >
                            {curr} ({currencySymbols[curr]})
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Designated Cause */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                        Designate to a Specific Initiative
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

                    {/* Amount Chips */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                        Select Amount
                      </label>
                      <div className="grid grid-cols-3 sm:grid-cols-5 gap-2.5 mb-3">
                        {currentPresets.map((preset) => {
                          const isSelected = amount === preset.amount && !isCustom
                          return (
                            <button
                              key={preset.amount}
                              type="button"
                              onClick={() => {
                                setAmount(preset.amount)
                                setIsCustom(false)
                                setCustomAmount("")
                              }}
                              className={`py-3 px-2 rounded-xl text-sm font-semibold border transition-all flex flex-col items-center justify-center ${
                                isSelected
                                  ? "border-[#1E4D97] bg-[#1E4D97] text-white shadow-sm"
                                  : "border-gray-200 text-gray-800 hover:border-[#1E4D97]/40 hover:bg-gray-50"
                              }`}
                            >
                              <span>{currencySymbols[onlineCurrency]}{preset.amount.toLocaleString()}</span>
                            </button>
                          )
                        })}
                      </div>

                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium text-sm">
                          {currencySymbols[onlineCurrency]}
                        </span>
                        <input
                          type="text"
                          placeholder="Or enter custom amount"
                          value={customAmount}
                          onChange={(e) => {
                            const val = e.target.value.replace(/[^0-9]/g, "")
                            setCustomAmount(val)
                            setIsCustom(true)
                            if (val) setAmount(parseInt(val, 10))
                          }}
                          className={`w-full pl-9 pr-4 py-3 rounded-xl border text-sm font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#1E4D97]/30 ${
                            isCustom ? "border-[#1E4D97] bg-[#E8EFF8]/30" : "border-gray-200"
                          }`}
                        />
                      </div>
                    </div>

                    {/* Donor Details */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1">
                          Your Name (Optional)
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Osaro Ighodalo"
                          value={donorName}
                          onChange={(e) => setDonorName(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E4D97]/30"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1">
                          Email (For receipt)
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

                    <button
                      type="submit"
                      disabled={isProcessing || !amount || amount <= 0}
                      className="w-full py-4 rounded-full bg-[#1E4D97] hover:bg-[#163a73] text-white font-medium text-base shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-50"
                    >
                      {isProcessing ? (
                        <span>Connecting Secure Gateway...</span>
                      ) : (
                        <>
                          <span>
                            Proceed to Give {currencySymbols[onlineCurrency]}{amount.toLocaleString()} {frequency === "monthly" ? "/ mo" : ""}
                          </span>
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            )}

            {/* TAB 3: IN-KIND DONATIONS */}
            {activeMethod === "inkind" && (
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold text-[#1E4D97] uppercase tracking-wider block mb-1">
                    Material & Corporate Giving
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    In-Kind Donations & Equipment
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    We welcome donations of certified medical equipment, pharmaceuticals, educational materials, and technology to empower beneficiaries directly.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200">
                    <h4 className="text-sm font-bold text-gray-900 mb-1 flex items-center gap-2">
                      <HeartPulse className="w-4 h-4 text-[#589E47]" />
                      Healthcare Supplies
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Glucometers, test strips, blood pressure kits, vitamins, and certified essential medicines.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200">
                    <h4 className="text-sm font-bold text-gray-900 mb-1 flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-[#1E4D97]" />
                      Education & Tech
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Primary & secondary textbooks, notebooks, school bags, and laptops for digital skills training.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200">
                    <h4 className="text-sm font-bold text-gray-900 mb-1 flex items-center gap-2">
                      <Users className="w-4 h-4 text-amber-500" />
                      Senior Care Food Packs
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Non-perishable food grains, cereals, milk, and nutritional provisions for elderly care.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200">
                    <h4 className="text-sm font-bold text-gray-900 mb-1 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-purple-500" />
                      Corporate CSR
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Corporate sponsorships, institutional grants, and co-branded community outreaches.
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-[#E8EFF8] border border-[#1E4D97]/15">
                  <h4 className="text-sm font-bold text-[#1E4D97] mb-2">
                    Coordination & Drop-off Office
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    Our team coordinates logistics for in-kind contributions within Benin City and across Nigeria. Reach out to arrange delivery.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={`https://wa.me/${DONATION_CONFIG.partnershipContact.whatsapp}?text=${encodeURIComponent("Hello Arise CSF, I would like to arrange an in-kind donation or partnership.")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 px-5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
                    >
                      <FaWhatsapp className="w-4 h-4" />
                      <span>Chat on WhatsApp</span>
                    </a>
                    <a
                      href={`mailto:${DONATION_CONFIG.partnershipContact.email}?subject=${encodeURIComponent("In-Kind Donation Inquiry")}`}
                      className="flex-1 py-3 px-5 rounded-full border border-gray-300 hover:border-[#1E4D97] text-gray-700 hover:text-[#1E4D97] text-xs font-semibold flex items-center justify-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Email Giving Desk</span>
                    </a>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Credibility, Real Photos & FAQ */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Real Outreach Photo */}
            <div className="relative aspect-[16/11] rounded-3xl overflow-hidden shadow-md border border-gray-100 group">
              <Image 
                src="/images/educational-support/3.JPG" 
                alt="Students benefiting from Arise CSF educational scholarships in Nigeria" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                <p className="text-white text-sm font-medium leading-snug">
                  &ldquo;When caring hearts connect with lives in need, real transformations happen.&rdquo;
                </p>
              </div>
            </div>

            {/* Transparency Commitment */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#E8EFF8] to-white border border-[#1E4D97]/15 shadow-xs space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#1E4D97] text-white flex items-center justify-center shadow-xs">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900">Financial Integrity</h3>
                  <p className="text-xs text-gray-500">100% Dedicated to Direct Impact</p>
                </div>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Arise Community Support Foundation operates with complete transparency. Public donations go directly into grassroots initiatives in Benin City and surrounding communities.
              </p>
            </div>

            {/* Quick Giving FAQ */}
            <div className="p-6 rounded-3xl border border-gray-200/80 bg-gray-50/50 space-y-4">
              <h4 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#1E4D97]" />
                <span>Common Questions</span>
              </h4>

              <div className="space-y-3 text-xs text-gray-600">
                <div>
                  <strong className="block text-gray-800 mb-0.5">Do I get an official receipt?</strong>
                  <span>Yes. Receipts are sent instantly for online gifts, and within 24 hours for confirmed bank transfers.</span>
                </div>
                <div className="pt-2 border-t border-gray-200/60">
                  <strong className="block text-gray-800 mb-0.5">Can international donors give?</strong>
                  <span>Yes. We accept international wires to our Zenith Bank Domiciliary USD & GBP accounts, as well as online international cards.</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}
