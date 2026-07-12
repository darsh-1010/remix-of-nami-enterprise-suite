// Navigation
export const NAVIGATION = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/businesses", label: "Businesses" },
  { href: "/who-we-serve", label: "Who We Serve" },
  { href: "/leadership", label: "Leadership" },
  { href: "/careers", label: "Careers" },
  { href: "/insights", label: "Insights" },
] as const;

// Marquee Items
export const MARQUEE_ITEMS = [
  "INVESTMENT BANKING",
  "TREASURY & BONDS",
  "AVIATION LEASING",
  "MARITIME FINANCE",
  "TRADE FINANCE",
  "GIFT IFSC",
  "HEALTHCARE FINANCE",
] as const;

// Business Verticals
export const VERTICALS = [
  {
    icon: "Briefcase",
    name: "Investment Banking",
    slug: "ib",
  },
  {
    icon: "Landmark",
    name: "Bond & Treasury",
    slug: "treasury",
  },
  {
    icon: "Plane",
    name: "Aviation Leasing",
    slug: "aviation",
  },
  {
    icon: "Ship",
    name: "Maritime Finance",
    slug: "maritime",
  },
  {
    icon: "Globe2",
    name: "Trade Finance",
    slug: "trade",
  },
  {
    icon: "Building2",
    name: "GIFT IFSC",
    slug: "gift",
  },
  {
    icon: "HeartPulse",
    name: "Healthcare Finance",
    slug: "healthcare",
  },
  {
    icon: "Cpu",
    name: "Technology",
    slug: "tech",
  },
] as const;

// Industries
export const INDUSTRIES = [
  "Healthcare & Life Sciences",
  "Energy & Infrastructure",
  "Technology & Software",
  "Financial Services",
  "Consumer & Retail",
  "Industrial & Manufacturing",
  "Real Estate & Infrastructure",
  "Education & Not-for-profit",
] as const;

// Contact Form Options
export const INTEREST_OPTIONS = [
  "Investment Banking",
  "Treasury & Bonds",
  "Aviation Leasing",
  "Maritime Finance",
  "GIFT IFSC",
  "Trade Finance",
  "Healthcare Finance",
  "Other",
] as const;

// Footer Links
export const FOOTER_VERTICALS = [
  { name: "Investment Banking", href: "/businesses#ib" },
  { name: "Bond & Treasury", href: "/businesses#treasury" },
  { name: "Aviation Leasing", href: "/businesses#aviation" },
  { name: "Maritime Finance", href: "/businesses#maritime" },
  { name: "Trade Finance", href: "/businesses#trade" },
] as const;

export const FOOTER_COMPANY = [
  { name: "About", href: "/about" },
  { name: "Who We Serve", href: "/who-we-serve" },
  { name: "Leadership & Awards", href: "/leadership" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/#contact" },
] as const;

export const FOOTER_LOCATIONS = [
  { name: "India", href: "#" },
  { name: "UAE", href: "#" },
  { name: "USA", href: "#" },
  { name: "UK", href: "#" },
] as const;

// Social Links
export const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    icon: "LinkedinIcon",
    href: "https://linkedin.com/company/nami-group",
  },
  {
    name: "Instagram",
    icon: "InstagramIcon",
    href: "https://instagram.com/namigroup",
  },
  {
    name: "Email",
    icon: "Mail",
    href: "mailto:contact@namigroup.com",
  },
  {
    name: "Phone",
    icon: "Phone",
    href: "tel:+1234567890",
  },
] as const;

// Contact Information
export const CONTACT_INFO = {
  email: "contact@namigroup.com",
  phone: "+1 (234) 567-8900",
  headquarters: "New York, USA",
} as const;

// Meta Information
export const SITE_CONFIG = {
  name: "NAMI Group",
  description:
    "Institutional Investment Banking, Treasury, Aviation & Maritime Leasing, Trade Finance and GIFT IFSC advisory",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://namigroup.com",
  ogImage: "/og-image.png",
} as const;
