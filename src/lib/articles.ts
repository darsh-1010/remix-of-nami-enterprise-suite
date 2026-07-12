export interface ArticleContentBlock {
  type: "p" | "h2" | "h3" | "blockquote" | "list";
  text?: string;
  items?: string[];
}

export interface Article {
  slug: string;
  title: string;
  cat: string;
  date: string;
  author: string;
  readTime: string;
  excerpt: string;
  keywords: string[];
  content: ArticleContentBlock[];
}

export const ARTICLES: Article[] = [
  {
    slug: "gift-city-fund-structures-tax-exemptions-2026",
    title: "Deciphering the 20-Year Tax Holiday: Why Fund Managers are Redrawing Offshore Maps for GIFT City",
    cat: "GIFT IFSC",
    date: "Q3 · 2026",
    author: "Dipen U. Shah",
    readTime: "7 min read",
    excerpt: "With the latest Union Budget extending key tax incentives, GIFT City IFSC has transitioned from a regional initiative into a globally competitive powerhouse for fund structures.",
    keywords: [
      "GIFT City fund management",
      "GIFT IFSC AIF tax exemption",
      "offshore fund relocation India",
      "IFSCA family offices",
      "Category I II AIF",
      "Dipen U Shah"
    ],
    content: [
      {
        type: "p",
        text: "The landscape of global asset management is undergoing a significant structural shift. For decades, Indian fund managers and international sponsors looking to pool capital for Indian investments anchored their vehicles in offshore jurisdictions like Mauritius, Singapore, and Luxembourg. Today, that map is being redrawn. Gujarat International Finance Tec-City (GIFT City) IFSC has reached a critical tipping point in operational maturity and regulatory competitiveness, driven by a series of legislative enhancements culminating in the latest Union Budget incentives."
      },
      {
        type: "h2",
        text: "The Core Tax Arbitrage: Unpacking the 100% Tax Holiday"
      },
      {
        type: "p",
        text: "At the heart of the GIFT IFSC appeal is a pristine, statutory tax framework designed to match or exceed traditional offshore hubs. Registered units—including fund management entities and investment managers—benefit from a 100% corporate income tax holiday for any 10 consecutive years out of a 15-year block. Furthermore, the concessional Minimum Alternative Tax (MAT) rate is set at 9% for companies, and completely exempted for entities opting for the new tax regime."
      },
      {
        type: "blockquote",
        text: "We are building an institutional platform that combines the trust of traditional finance with the precision of modern technology — a corridor for global capital, advisory, and execution. The tax benefits of GIFT IFSC are no longer just temporary exemptions; they are the permanent foundation of India's capital corridor."
      },
      {
        type: "h2",
        text: "Fund-Level Advantages and Pass-Through Status"
      },
      {
        type: "p",
        text: "Category I and Category II Alternative Investment Funds (AIFs) registered with the IFSCA enjoy a statutory pass-through status for Indian tax purposes. This means that any income (other than business income) earned by the fund is not taxed at the fund level but is instead passed directly to investors, matching their individual tax profiles. Additionally:"
      },
      {
        type: "list",
        items: [
          "Non-resident investors are completely exempt from capital gains tax on the transfer of foreign currency-denominated bonds, derivatives, and specified offshore securities traded on IFSC exchanges.",
          "Interest income earned by non-residents on capital lent to IFSC units is tax-exempt.",
          "Transactions executed within the IFSC are fully exempt from Securities Transaction Tax (STT), Commodities Transaction Tax (CTT), and state stamp duties."
        ]
      },
      {
        type: "h2",
        text: "Strategic Relocation of Offshore Funds"
      },
      {
        type: "p",
        text: "One of the most powerful provisions implemented by the IFSCA is the tax-neutral relocation framework. Offshore funds currently operating in jurisdictions like Mauritius or Singapore can relocate their assets, shares, or units to a newly established AIF in GIFT City without triggering capital gains tax for either the fund itself or its underlying shareholders. This provides a clean, compliance-approved path to bring capital structures onshore, closer to the actual assets being managed."
      },
      {
        type: "h3",
        text: "NAMI Group's GIFT City Advisory Footprint"
      },
      {
        type: "p",
        text: "Structuring offshore-to-onshore transitions requires deep regulatory alignment. At NAMI Group, our dedicated GIFT IFSC Desk helps global fund managers, sovereign wealth networks, and family offices design capital paths that are optimized for both compliance and yield. By aligning structural models directly with IFSCA guidelines, we help clients unlock the full potential of India's premier international financial corridor."
      }
    ]
  },
  {
    slug: "structuring-aviation-leasing-gift-city-2026",
    title: "Structuring Aviation Leasing and Fleet Finance in India's Booming Aerospace Corridor",
    cat: "Aviation Leasing",
    date: "Q3 · 2026",
    author: "Dhiren Panchal",
    readTime: "6 min read",
    excerpt: "With Indian airlines ordering hundreds of aircraft, GIFT City IFSC provides a highly competitive tax-neutral hub for operating leases, sale-and-leasebacks, and fleet finance.",
    keywords: [
      "GIFT City aircraft leasing",
      "India aviation finance",
      "lessor tax exemption GIFT IFSC",
      "aircraft asset-backed securitization",
      "Dhiren Panchal",
      "IALFS summit"
    ],
    content: [
      {
        type: "p",
        text: "India possesses one of the fastest-growing commercial aviation markets in the world, with domestic carriers holding order books that exceed 1,500 aircraft to be delivered over the next decade. Traditionally, financing and leasing these massive fleets was a business dominated by offshore hubs—most notably Ireland and Singapore. However, the operationalization of the aviation leasing framework at GIFT City IFSC has established a viable, domestic alternative that is rapidly capturing market share."
      },
      {
        type: "h2",
        text: "The Regulatory Milestones of 2026"
      },
      {
        type: "p",
        text: "The regulatory momentum surrounding aviation leasing in GIFT IFSC has accelerated dramatically. The India Aircraft Leasing and Financing Summit (IALFS 2.0) highlighted the scale of the domestic ecosystem: over 40 registered lessors now manage a combined portfolio of more than 220 aircraft, helicopters, and engines directly from the IFSC. This growth is underpinned by key tax exemptions that insulate aircraft lessors and airlines from frictional transaction costs."
      },
      {
        type: "blockquote",
        text: "The transition from localized experimental leasing to a globally competitive aviation finance node is complete. By eliminating TDS on lease rentals and extending tax holidays, India has created an aircraft leasing ecosystem that is structurally on par with Dublin."
      },
      {
        type: "h2",
        text: "Key Tax Incentives for Aircraft Lessors"
      },
      {
        type: "p",
        text: "To incentivize global lessors to set up shop in GIFT City, the government has structured a highly specialized tax framework:"
      },
      {
        type: "list",
        items: [
          "Zero Tax on Lease Rentals: Eligible lessors enjoy a 100% tax holiday on income derived from leasing aircraft, engines, or auxiliary equipment.",
          "TDS Exemption on Payments: Indian airlines are exempt from deducting Tax Deducted at Source (TDS) on lease payments made to registered GIFT IFSC lessors, solving a major cash flow bottleneck.",
          "GST Neutrality: Import of aircraft on lease into the IFSC is exempt from Basic Customs Duty, and GST on lease transactions is fully structured to be credit-neutral."
        ]
      },
      {
        type: "h2",
        text: "Customized Fleet Finance Structuring"
      },
      {
        type: "p",
        text: "Aviation finance is capital-intensive and requires multi-tiered capital structures. NAMI Group's Aviation Desk specializes in structuring bespoke operating leases, sale-and-leaseback (SLB) transactions, and mezzanine debt layers. By leveraging the IFSC's tax-neutral environment, we advise airlines and leasing corporations on how to pool international bank syndicates and private credit funds to optimize the overall cost of capital."
      },
      {
        type: "p",
        text: "As the market matures, we anticipate the introduction of complex financial structures such as aircraft asset-backed securitization (ABS) and domestic aviation debt funds within the GIFT City corridor, providing institutional investors with direct exposure to India's aviation expansion."
      }
    ]
  },
  {
    slug: "duration-positioning-indian-corporate-bond-market",
    title: "Navigating Duration Positioning and Yield Curve Dynamics in the Indian Corporate Bond Market",
    cat: "Treasury",
    date: "Q2 · 2026",
    author: "Dipen U. Shah",
    readTime: "5 min read",
    excerpt: "An in-depth analysis of yield curve steepening in G-Secs and SDLs, and how corporate treasuries are using structured hedging frameworks to optimize portfolio yields.",
    keywords: [
      "India corporate bond market yield curve",
      "G-Sec SDL duration positioning",
      "fixed income treasury strategy",
      "interest rate swaps",
      "Dipen U Shah"
    ],
    content: [
      {
        type: "p",
        text: "The Indian fixed-income landscape in 2026 is defined by shifting yield curve dynamics, driven by evolving central bank signals, fiscal consolidation targets, and robust supply in State Development Loans (SDLs). For corporate treasuries and institutional asset managers, managing duration risk while maximizing yield spreads has become a highly sophisticated balancing act that requires continuous tactical adjustments."
      },
      {
        type: "h2",
        text: "Yield Curve Steepening and Allocation Strategies"
      },
      {
        type: "p",
        text: "We are observing a selective steepening of the sovereign yield curve. Short-term rates remain anchored by liquid banking system parameters, while long-term yields reflect the market's digestion of infrastructure spend pipelines and global debt index inclusions. Treasuries are increasingly shifting allocations toward mid-duration assets (5 to 7 years) to capture optimal roll-down benefits, while selectively adding high-quality corporate bonds and G-Secs to lock in nominal yields."
      },
      {
        type: "blockquote",
        text: "Duration management in a steepening curve requires moving away from static buy-and-hold approaches. Treasuries must implement active, rule-based portfolio adjustments to insulate balance sheets from sudden interest rate movements."
      },
      {
        type: "h2",
        text: "Hedging Volatility: The Role of Derivatives"
      },
      {
        type: "p",
        text: "Active portfolio insulation is achieved through structured derivatives overlays. Treasuries utilize Interest Rate Swaps (IRS) and Overnight Indexed Swaps (OIS) to manage duration exposure without disrupting underlying asset allocations. Key features of a modern treasury risk framework include:"
      },
      {
        type: "list",
        items: [
          "Tactical Swaps: Converting floating-rate liabilities to fixed rate during low-rate windows to lock in financing costs.",
          "OIS Overlays: Using OIS curves to hedge against unexpected inflation or liquidity tightening cycles.",
          "SDL-G-Sec Spread Trade: Exploiting seasonal spread widening between central government securities and state-issued debt to enhance yield."
        ]
      },
      {
        type: "h2",
        text: "NAMI's Bond and Treasury Desk Operations"
      },
      {
        type: "p",
        text: "At NAMI Group, our Bond and Treasury Desk supports institutional treasuries with sovereign fixed-income execution, corporate bond placement, and structured portfolio advisory. With over 18 active hedging frameworks deployed, we help client organizations model cash flows and structure interest rate risk mitigation strategies that preserve capital while unlocking incremental yield across volatile market cycles."
      }
    ]
  },
  {
    slug: "mid-market-ma-industrial-corridors-india",
    title: "Strategic M&A and Private Placement Landscapes in India's Mid-Market Industrial Corridors",
    cat: "Investment Banking",
    date: "Q2 · 2026",
    author: "Shail Shah",
    readTime: "6 min read",
    excerpt: "How strategic buyer interest, founder-led transitions, and cross-border corridors (including BRICS and UK-India trade) are driving deal volumes in precision engineering and specialty chemicals.",
    keywords: [
      "mid-market mergers and acquisitions India",
      "debt syndication models",
      "public SME listings",
      "Shail Shah",
      "cross-border investment banking"
    ],
    content: [
      {
        type: "p",
        text: "While headline-making mega-mergers often dominate the financial press, the real engine of India's corporate consolidation and capital flow is the mid-market segment. In particular, the industrial and manufacturing corridors spanning Western and Southern India are seeing unprecedented transaction volumes, driven by a combination of generational founder exits, multinational corporation (MNC) supply-chain diversification, and active private equity participation."
      },
      {
        type: "h2",
        text: "The Drivers of Mid-Market Consolidation"
      },
      {
        type: "p",
        text: "Several structural drivers are keeping mid-market deal pipelines highly active:"
      },
      {
        type: "list",
        items: [
          "Generation Transitions: Many founder-led industrial businesses established in the 1980s and 1990s are reaching points of generational transition, opting for strategic exits or partnerships rather than family succession.",
          "Supply Chain Re-mapping: Global buyers seeking resilient supply chains are actively acquiring or joint-venturing with Indian precision engineering, specialty chemicals, and electronic component manufacturers.",
          "Private Equity Dry Powder: Mid-market private equity funds are actively seeking control transactions, looking to institutionalize operations and drive digital transformations in traditional manufacturing setups."
        ]
      },
      {
        type: "blockquote",
        text: "Successful mid-market M&A is not just about matching buyers and sellers; it is about rigorous valuation validation, tax structuring, and setting up clean transaction governance that survives deep institutional diligence."
      },
      {
        type: "h2",
        text: "Cross-Border Corridors: BRICS & UK-India Initiatives"
      },
      {
        type: "p",
        text: "Cross-border capital flow is being accelerated by strategic trade corridors. Strong alignments with the BRICS Chamber and the UK Department of Trade have established clear structural pathways for cross-border joint ventures and capital syndication. These partnerships provide mid-market Indian enterprises with direct access to European and global technology partnerships, while providing international capital with pre-vetted, high-governance entry points into the Indian industrial growth story."
      },
      {
        type: "h3",
        text: "NAMI's Investment Banking Execution Model"
      },
      {
        type: "p",
        text: "NAMI Group's Investment Banking division, led by Shail Shah and Piyush Akhaja, brings institutional-grade execution support to mid-market transactions. Having advised on 245+ M&A deals and structured 45+ LBO transactions, we manage the entire transaction lifecycle—from granular cash flow modeling and Comp/DCF valuation reports to target screening and data room setup—ensuring transactions close efficiently and deliver long-term strategic value."
      }
    ]
  }
];
