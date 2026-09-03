export interface BankAccount {
  currency: "NGN" | "USD" | "GBP" | "EUR"
  bankName: string
  accountName: string
  accountNumber: string
  sortCode?: string
  swiftBic?: string
  iban?: string
  routingNumber?: string
  branch?: string
}

export interface DonationCause {
  id: string
  title: string
  description: string
  iconName: string
}

export interface PresetAmount {
  amount: number
  impactLabel: string
}

export const DONATION_CONFIG = {
  // Foundation Bank Accounts
  bankAccounts: [
    {
      currency: "NGN",
      bankName: "Zenith Bank Plc",
      accountName: "Arise Community Support Foundation",
      accountNumber: "1234567890",
      branch: "Benin City, Edo State",
    },
    {
      currency: "NGN",
      bankName: "Guaranty Trust Bank (GTBank)",
      accountName: "Arise Community Support Foundation",
      accountNumber: "0987654321",
      branch: "Benin City, Edo State",
    },
    {
      currency: "USD",
      bankName: "Zenith Bank Plc (Domiciliary)",
      accountName: "Arise Community Support Foundation",
      accountNumber: "5070000000",
      swiftBic: "ZEIBNGLA",
      branch: "Benin City, Edo State",
    },
    {
      currency: "GBP",
      bankName: "Zenith Bank Plc (Domiciliary)",
      accountName: "Arise Community Support Foundation",
      accountNumber: "5080000000",
      swiftBic: "ZEIBNGLA",
      branch: "Benin City, Edo State",
    },
  ] as BankAccount[],

  // Online Payment Links / Gateways
  // Replace these with your live merchant links (e.g. Paystack page, Flutterwave link, or Stripe)
  paymentLinks: {
    paystackUrl: "https://paystack.shop/arisecsf",
    flutterwaveUrl: "https://flutterwave.com/pay/arisecsf",
    donorboxUrl: "",
  },

  // Contact for In-Kind & Partnerships
  partnershipContact: {
    email: "info@AriseCSF.org",
    phone: "+234 803 466 4190",
    whatsapp: "2348034664190",
    address: "The Igiogbe, 10 Airport Road, Benin City, Edo State, Nigeria",
  },

  // Specific Initiatives
  causes: [
    {
      id: "general",
      title: "Where Needed Most (General Fund)",
      description: "Direct resources flexibly to the most urgent community needs across education, health, and welfare.",
      iconName: "HeartHandshake",
    },
    {
      id: "education",
      title: "Arise Education Scholarships",
      description: "Cover tuition fees, textbooks, uniforms, and learning supplies for indigent primary & secondary students.",
      iconName: "GraduationCap",
    },
    {
      id: "diabetes",
      title: "Free Diabetes & Health Screenings",
      description: "Provide free blood sugar and BP checks, glucometers, and basic medications to vulnerable residents.",
      iconName: "HeartPulse",
    },
    {
      id: "youth",
      title: "Igiogbe Youth Leadership & Skills",
      description: "Empower youths with digital literacy, leadership training, and vocational empowerment.",
      iconName: "Sparkles",
    },
    {
      id: "seniors",
      title: "Senior Citizens Care & Support",
      description: "Deliver monthly nutritional food boxes and healthcare follow-ups for elderly residents living alone.",
      iconName: "Users",
    },
  ] as DonationCause[],

  // Preset Amounts with Impact Storytelling
  presetAmounts: {
    NGN: [
      { amount: 5000, impactLabel: "Provides notebooks and stationery for 5 primary school pupils" },
      { amount: 15000, impactLabel: "Funds free diabetes test strips and screening for 15 elderly citizens" },
      { amount: 35000, impactLabel: "Sponsors 1 full term of school tuition & uniform for an indigent child" },
      { amount: 75000, impactLabel: "Supplies essential chronic medication for 10 community elders" },
      { amount: 150000, impactLabel: "Funds a full community health outreach session with testing supplies" },
    ] as PresetAmount[],
    USD: [
      { amount: 25, impactLabel: "Covers essential stationery and learning supplies for 3 students" },
      { amount: 50, impactLabel: "Funds free diabetes and vitals testing for 20 vulnerable citizens" },
      { amount: 100, impactLabel: "Sponsors full educational tuition & materials for a term" },
      { amount: 250, impactLabel: "Provides monthly medical supplies and care kits for elderly seniors" },
      { amount: 500, impactLabel: "Directly powers a grassroots community medical outreach" },
    ] as PresetAmount[],
    GBP: [
      { amount: 20, impactLabel: "Provides books and school supplies for children in need" },
      { amount: 40, impactLabel: "Funds diagnostic test kits for vulnerable patients" },
      { amount: 80, impactLabel: "Covers full tuition and school uniform for one student" },
      { amount: 200, impactLabel: "Supports ongoing elderly nutrition and wellness visits" },
      { amount: 400, impactLabel: "Directly funds community outreach logistics and care" },
    ] as PresetAmount[],
    EUR: [
      { amount: 25, impactLabel: "Fournit du matériel scolaire essentiel aux enfants démunis" },
      { amount: 50, impactLabel: "Finance des kits de dépistage du diabète pour 20 personnes" },
      { amount: 100, impactLabel: "Parraine les frais de scolarité et fournitures d'un élève" },
      { amount: 250, impactLabel: "Fournit des kits de soins mensuels aux personnes âgées" },
      { amount: 500, impactLabel: "Finance une campagne médicale communautaire" },
    ] as PresetAmount[],
  },
}
