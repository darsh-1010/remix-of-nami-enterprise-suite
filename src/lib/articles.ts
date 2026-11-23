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
    title:
      "Deciphering the 20-Year Tax Holiday: Why Fund Managers are Redrawing Offshore Maps for GIFT City",
    cat: "GIFT IFSC",
    date: "Q3 · 2026",
    author: "Dipen U. Shah",
    readTime: "7 min read",
    excerpt:
      "With the latest Union Budget extending key tax incentives, GIFT City IFSC has transitioned from a regional initiative into a globally competitive powerhouse for fund structures.",
    keywords: [
      "GIFT City fund management",
      "GIFT IFSC AIF tax exemption",
      "offshore fund relocation India",
      "IFSCA family offices",
      "Category I II AIF",
      "Dipen U Shah",
    ],
    content: [
      {
        type: "p",
        text: "The landscape of global asset management is undergoing a significant structural shift. For decades, Indian fund managers and international sponsors looking to pool capital for Indian investments anchored their vehicles in offshore jurisdictions like Mauritius, Singapore, and Luxembourg. Today, that map is being redrawn. Gujarat International Finance Tec-City (GIFT City) IFSC has reached a critical tipping point in operational maturity and regulatory competitiveness, driven by a series of legislative enhancements culminating in the latest Union Budget incentives.",
      },
      {
        type: "h2",
        text: "The Core Tax Arbitrage: Unpacking the 100% Tax Holiday",
      },
      {
        type: "p",
        text: "At the heart of the GIFT IFSC appeal is a pristine, statutory tax framework designed to match or exceed traditional offshore hubs. Registered units—including fund management entities and investment managers—benefit from a 100% corporate income tax holiday for any 10 consecutive years out of a 15-year block. Furthermore, the concessional Minimum Alternative Tax (MAT) rate is set at 9% for companies, and completely exempted for entities opting for the new tax regime.",
      },
      {
        type: "blockquote",
        text: "We are building an institutional platform that combines the trust of traditional finance with the precision of modern technology — a corridor for global capital, advisory, and execution. The tax benefits of GIFT IFSC are no longer just temporary exemptions; they are the permanent foundation of India's capital corridor.",
      },
      {
        type: "h2",
        text: "Fund-Level Advantages and Pass-Through Status",
      },
      {
        type: "p",
        text: "Category I and Category II Alternative Investment Funds (AIFs) registered with the IFSCA enjoy a statutory pass-through status for Indian tax purposes. This means that any income (other than business income) earned by the fund is not taxed at the fund level but is instead passed directly to investors, matching their individual tax profiles. Additionally:",
      },
      {
        type: "list",
        items: [
          "Non-resident investors are completely exempt from capital gains tax on the transfer of foreign currency-denominated bonds, derivatives, and specified offshore securities traded on IFSC exchanges.",
          "Interest income earned by non-residents on capital lent to IFSC units is tax-exempt.",
          "Transactions executed within the IFSC are fully exempt from Securities Transaction Tax (STT), Commodities Transaction Tax (CTT), and state stamp duties.",
        ],
      },
      {
        type: "h2",
        text: "Strategic Relocation of Offshore Funds",
      },
      {
        type: "p",
        text: "One of the most powerful provisions implemented by the IFSCA is the tax-neutral relocation framework. Offshore funds currently operating in jurisdictions like Mauritius or Singapore can relocate their assets, shares, or units to a newly established AIF in GIFT City without triggering capital gains tax for either the fund itself or its underlying shareholders. This provides a clean, compliance-approved path to bring capital structures onshore, closer to the actual assets being managed.",
      },
      {
        type: "h3",
        text: "NAMI Group's GIFT City Advisory Footprint",
      },
      {
        type: "p",
        text: "Structuring offshore-to-onshore transitions requires deep regulatory alignment. At NAMI Group, our dedicated GIFT IFSC Desk helps global fund managers, sovereign wealth networks, and family offices design capital paths that are optimized for both compliance and yield. By aligning structural models directly with IFSCA guidelines, we help clients unlock the full potential of India's premier international financial corridor.",
      },
    ],
  },
  {
    slug: "structuring-aviation-leasing-gift-city-2026",
    title: "Structuring Aviation Leasing and Fleet Finance in India's Booming Aerospace Corridor",
    cat: "Aviation Leasing",
    date: "Q3 · 2026",
    author: "Dhiren Panchal",
    readTime: "6 min read",
    excerpt:
      "With Indian airlines ordering hundreds of aircraft, GIFT City IFSC provides a highly competitive tax-neutral hub for operating leases, sale-and-leasebacks, and fleet finance.",
    keywords: [
      "GIFT City aircraft leasing",
      "India aviation finance",
      "lessor tax exemption GIFT IFSC",
      "aircraft asset-backed securitization",
      "Dhiren Panchal",
      "IALFS summit",
    ],
    content: [
      {
        type: "p",
        text: "India possesses one of the fastest-growing commercial aviation markets in the world, with domestic carriers holding order books that exceed 1,500 aircraft to be delivered over the next decade. Traditionally, financing and leasing these massive fleets was a business dominated by offshore hubs—most notably Ireland and Singapore. However, the operationalization of the aviation leasing framework at GIFT City IFSC has established a viable, domestic alternative that is rapidly capturing market share.",
      },
      {
        type: "h2",
        text: "The Regulatory Milestones of 2026",
      },
      {
        type: "p",
        text: "The regulatory momentum surrounding aviation leasing in GIFT IFSC has accelerated dramatically. The India Aircraft Leasing and Financing Summit (IALFS 2.0) highlighted the scale of the domestic ecosystem: over 40 registered lessors now manage a combined portfolio of more than 220 aircraft, helicopters, and engines directly from the IFSC. This growth is underpinned by key tax exemptions that insulate aircraft lessors and airlines from frictional transaction costs.",
      },
      {
        type: "blockquote",
        text: "The transition from localized experimental leasing to a globally competitive aviation finance node is complete. By eliminating TDS on lease rentals and extending tax holidays, India has created an aircraft leasing ecosystem that is structurally on par with Dublin.",
      },
      {
        type: "h2",
        text: "Key Tax Incentives for Aircraft Lessors",
      },
      {
        type: "p",
        text: "To incentivize global lessors to set up shop in GIFT City, the government has structured a highly specialized tax framework:",
      },
      {
        type: "list",
        items: [
          "Zero Tax on Lease Rentals: Eligible lessors enjoy a 100% tax holiday on income derived from leasing aircraft, engines, or auxiliary equipment.",
          "TDS Exemption on Payments: Indian airlines are exempt from deducting Tax Deducted at Source (TDS) on lease payments made to registered GIFT IFSC lessors, solving a major cash flow bottleneck.",
          "GST Neutrality: Import of aircraft on lease into the IFSC is exempt from Basic Customs Duty, and GST on lease transactions is fully structured to be credit-neutral.",
        ],
      },
      {
        type: "h2",
        text: "Customized Fleet Finance Structuring",
      },
      {
        type: "p",
        text: "Aviation finance is capital-intensive and requires multi-tiered capital structures. NAMI Group's Aviation Desk specializes in structuring bespoke operating leases, sale-and-leaseback (SLB) transactions, and mezzanine debt layers. By leveraging the IFSC's tax-neutral environment, we advise airlines and leasing corporations on how to pool international bank syndicates and private credit funds to optimize the overall cost of capital.",
      },
      {
        type: "p",
        text: "As the market matures, we anticipate the introduction of complex financial structures such as aircraft asset-backed securitization (ABS) and domestic aviation debt funds within the GIFT City corridor, providing institutional investors with direct exposure to India's aviation expansion.",
      },
    ],
  },
  {
    slug: "duration-positioning-indian-corporate-bond-market",
    title:
      "Navigating Duration Positioning and Yield Curve Dynamics in the Indian Corporate Bond Market",
    cat: "Treasury",
    date: "Q2 · 2026",
    author: "Dipen U. Shah",
    readTime: "5 min read",
    excerpt:
      "An in-depth analysis of yield curve steepening in G-Secs and SDLs, and how corporate treasuries are using structured hedging frameworks to optimize portfolio yields.",
    keywords: [
      "India corporate bond market yield curve",
      "G-Sec SDL duration positioning",
      "fixed income treasury strategy",
      "interest rate swaps",
      "Dipen U Shah",
    ],
    content: [
      {
        type: "p",
        text: "The Indian fixed-income landscape in 2026 is defined by shifting yield curve dynamics, driven by evolving central bank signals, fiscal consolidation targets, and robust supply in State Development Loans (SDLs). For corporate treasuries and institutional asset managers, managing duration risk while maximizing yield spreads has become a highly sophisticated balancing act that requires continuous tactical adjustments.",
      },
      {
        type: "h2",
        text: "Yield Curve Steepening and Allocation Strategies",
      },
      {
        type: "p",
        text: "We are observing a selective steepening of the sovereign yield curve. Short-term rates remain anchored by liquid banking system parameters, while long-term yields reflect the market's digestion of infrastructure spend pipelines and global debt index inclusions. Treasuries are increasingly shifting allocations toward mid-duration assets (5 to 7 years) to capture optimal roll-down benefits, while selectively adding high-quality corporate bonds and G-Secs to lock in nominal yields.",
      },
      {
        type: "blockquote",
        text: "Duration management in a steepening curve requires moving away from static buy-and-hold approaches. Treasuries must implement active, rule-based portfolio adjustments to insulate balance sheets from sudden interest rate movements.",
      },
      {
        type: "h2",
        text: "Hedging Volatility: The Role of Derivatives",
      },
      {
        type: "p",
        text: "Active portfolio insulation is achieved through structured derivatives overlays. Treasuries utilize Interest Rate Swaps (IRS) and Overnight Indexed Swaps (OIS) to manage duration exposure without disrupting underlying asset allocations. Key features of a modern treasury risk framework include:",
      },
      {
        type: "list",
        items: [
          "Tactical Swaps: Converting floating-rate liabilities to fixed rate during low-rate windows to lock in financing costs.",
          "OIS Overlays: Using OIS curves to hedge against unexpected inflation or liquidity tightening cycles.",
          "SDL-G-Sec Spread Trade: Exploiting seasonal spread widening between central government securities and state-issued debt to enhance yield.",
        ],
      },
      {
        type: "h2",
        text: "NAMI's Bond and Treasury Desk Operations",
      },
      {
        type: "p",
        text: "At NAMI Group, our Bond and Treasury Desk supports institutional treasuries with sovereign fixed-income execution, corporate bond placement, and structured portfolio advisory. With over 18 active hedging frameworks deployed, we help client organizations model cash flows and structure interest rate risk mitigation strategies that preserve capital while unlocking incremental yield across volatile market cycles.",
      },
    ],
  },
  {
    slug: "mid-market-ma-industrial-corridors-india",
    title:
      "Strategic M&A and Private Placement Landscapes in India's Mid-Market Industrial Corridors",
    cat: "Investment Banking",
    date: "Q2 · 2026",
    author: "Shail Shah",
    readTime: "6 min read",
    excerpt:
      "How strategic buyer interest, founder-led transitions, and cross-border corridors (including BRICS and UK-India trade) are driving deal volumes in precision engineering and specialty chemicals.",
    keywords: [
      "mid-market mergers and acquisitions India",
      "debt syndication models",
      "public SME listings",
      "Shail Shah",
      "cross-border investment banking",
    ],
    content: [
      {
        type: "p",
        text: "While headline-making mega-mergers often dominate the financial press, the real engine of India's corporate consolidation and capital flow is the mid-market segment. In particular, the industrial and manufacturing corridors spanning Western and Southern India are seeing unprecedented transaction volumes, driven by a combination of generational founder exits, multinational corporation (MNC) supply-chain diversification, and active private equity participation.",
      },
      {
        type: "h2",
        text: "The Drivers of Mid-Market Consolidation",
      },
      {
        type: "p",
        text: "Several structural drivers are keeping mid-market deal pipelines highly active:",
      },
      {
        type: "list",
        items: [
          "Generation Transitions: Many founder-led industrial businesses established in the 1980s and 1990s are reaching points of generational transition, opting for strategic exits or partnerships rather than family succession.",
          "Supply Chain Re-mapping: Global buyers seeking resilient supply chains are actively acquiring or joint-venturing with Indian precision engineering, specialty chemicals, and electronic component manufacturers.",
          "Private Equity Dry Powder: Mid-market private equity funds are actively seeking control transactions, looking to institutionalize operations and drive digital transformations in traditional manufacturing setups.",
        ],
      },
      {
        type: "blockquote",
        text: "Successful mid-market M&A is not just about matching buyers and sellers; it is about rigorous valuation validation, tax structuring, and setting up clean transaction governance that survives deep institutional diligence.",
      },
      {
        type: "h2",
        text: "Cross-Border Corridors: BRICS & UK-India Initiatives",
      },
      {
        type: "p",
        text: "Cross-border capital flow is being accelerated by strategic trade corridors. Strong alignments with the BRICS Chamber and the UK Department of Trade have established clear structural pathways for cross-border joint ventures and capital syndication. These partnerships provide mid-market Indian enterprises with direct access to European and global technology partnerships, while providing international capital with pre-vetted, high-governance entry points into the Indian industrial growth story.",
      },
      {
        type: "h3",
        text: "NAMI's Investment Banking Execution Model",
      },
      {
        type: "p",
        text: "NAMI Group's Investment Banking division, led by Shail Shah and Piyush Akhaja, brings institutional-grade execution support to mid-market transactions. Having advised on 245+ M&A deals and structured 45+ LBO transactions, we manage the entire transaction lifecycle—from granular cash flow modeling and Comp/DCF valuation reports to target screening and data room setup—ensuring transactions close efficiently and deliver long-term strategic value.",
      },
    ],
  },
  {
    slug: "family-offices-gift-city-ifsc-fund-structures",
    title: "Family Offices in GIFT City: Why Single-Family Vehicles Are Moving to the IFSC",
    cat: "GIFT IFSC",
    date: "Q4 · 2026",
    author: "Dipen U. Shah",
    readTime: "6 min read",
    excerpt:
      "A dedicated IFSCA framework for family investment funds is giving wealthy Indian and non-resident families a regulated, tax-efficient home for global portfolios.",
    keywords: [
      "family office GIFT City",
      "IFSCA family investment fund",
      "single family office India",
      "global wealth structuring",
      "Dipen U Shah",
    ],
    content: [
      {
        type: "p",
        text: "For decades, families with cross-border wealth have parked their global portfolios in vehicles domiciled in Singapore, Dubai, Mauritius or the Channel Islands. The IFSC at GIFT City now offers a regulated alternative that sits inside India's own policy perimeter while operating in foreign currency, and family offices are paying attention.",
      },
      {
        type: "h2",
        text: "What the IFSC Framework Offers",
      },
      {
        type: "p",
        text: "The IFSCA's fund management regulations provide a dedicated route for family investment funds: a pooling vehicle set up to manage the wealth of a single family, with the family members as investors and a registered fund manager running it. The framework was designed to give families the governance of an institutional platform without the cost of building one from scratch.",
      },
      {
        type: "list",
        items: [
          "A regulated vehicle with clear governance, reporting and fund-manager obligations, which banks and counterparties recognise.",
          "Foreign-currency operations, allowing the portfolio to be held and reported in USD or other major currencies.",
          "A tax regime for IFSC units and eligible investors that is designed to be competitive with traditional offshore hubs.",
          "A single regulator, the IFSCA, for licensing, supervision and ongoing compliance.",
        ],
      },
      {
        type: "h2",
        text: "Who Should Consider It",
      },
      {
        type: "p",
        text: "The structure is most relevant to promoter families with listed or operating businesses, returning non-resident Indians and global families with meaningful India exposure. The common thread is a need to consolidate holdings, plan succession in an orderly way and invest across geographies through a vehicle that regulators and banks can underwrite.",
      },
      {
        type: "h3",
        text: "How NAMI Group Supports Family Office Set-Ups",
      },
      {
        type: "p",
        text: "NAMI Group's GIFT IFSC Desk works with families and their advisers on entity selection, fund-manager registration, banking and ongoing compliance. Every family's tax residency, asset mix and succession goals differ, so the right structure is always specific to the case and should be confirmed with qualified tax and legal counsel before any commitment is made.",
      },
    ],
  },
  {
    slug: "aircraft-sale-and-leaseback-indian-airlines",
    title: "Sale-and-Leaseback for Indian Carriers: Unlocking Balance-Sheet Capacity",
    cat: "Aviation Leasing",
    date: "Q4 · 2026",
    author: "Dhiren Panchal",
    readTime: "6 min read",
    excerpt:
      "As airlines take delivery of large aircraft orders, sale-and-leaseback structures help convert owned fleet into liquidity while keeping aircraft in service.",
    keywords: [
      "sale and leaseback aircraft",
      "operating lease vs finance lease",
      "airline fleet financing India",
      "aircraft lessor structuring",
      "Dhiren Panchal",
    ],
    content: [
      {
        type: "p",
        text: "Large aircraft orders create a financing challenge: pre-delivery payments, delivery funding and long-term ownership all draw heavily on an airline's balance sheet. Sale-and-leaseback (SLB) lets a carrier sell an aircraft it has just taken delivery of to a lessor and lease it straight back, releasing capital without grounding a single flight.",
      },
      {
        type: "h2",
        text: "How an SLB Works",
      },
      {
        type: "p",
        text: "The airline either takes delivery and sells the aircraft on, or assigns its purchase rights to the lessor before delivery. The lessor pays the purchase price, becomes the owner and leases the aircraft back to the airline under a long-term lease. The airline keeps operational control; the lessor takes the asset and residual-value risk.",
      },
      {
        type: "list",
        items: [
          "Liquidity: sale proceeds can fund further deliveries, working capital or debt reduction.",
          "Flexibility: lease terms and return conditions can be matched to the airline's fleet plan.",
          "Predictability: fixed lease rentals make cost forecasting simpler than variable ownership costs.",
          "Access to capital: lessors can bring diversified funding sources, including global banks and capital-market investors.",
        ],
      },
      {
        type: "h2",
        text: "Operating Lease or Finance Lease?",
      },
      {
        type: "p",
        text: "An operating lease keeps the residual-value risk with the lessor and suits airlines that want fleet flexibility. A finance lease behaves more like asset ownership and may suit carriers planning to keep an aircraft for most of its life. The accounting, tax and regulatory treatment of each differs, and the choice should be modelled before documents are signed.",
      },
      {
        type: "h3",
        text: "Structuring Through GIFT IFSC",
      },
      {
        type: "p",
        text: "NAMI Aviation structures lease and financing transactions out of GIFT IFSC, working with airlines, lessors and lenders on the commercial terms, the legal structure and the funding stack. Applicable incentives and eligibility conditions change over time, so each transaction should be reviewed against the latest IFSCA and tax provisions.",
      },
    ],
  },
  {
    slug: "corporate-treasury-liquidity-management-money-markets",
    title: "Surplus Liquidity Done Right: A Practical Ladder for Corporate Treasuries",
    cat: "Treasury",
    date: "Q3 · 2026",
    author: "Dipen U. Shah",
    readTime: "5 min read",
    excerpt:
      "Idle cash is a cost. A tiered liquidity ladder lets treasuries earn more on surplus funds without compromising safety or access.",
    keywords: [
      "corporate treasury liquidity",
      "money market instruments India",
      "treasury bills commercial paper",
      "cash ladder strategy",
      "Dipen U Shah",
    ],
    content: [
      {
        type: "p",
        text: "Many corporate treasuries hold large balances in operating accounts out of habit rather than design. Because every rupee kept at near-zero yield has an opportunity cost, the first step in treasury optimisation is simply knowing how much cash is needed when, and how much is genuinely surplus.",
      },
      {
        type: "h2",
        text: "Building a Three-Tier Ladder",
      },
      {
        type: "list",
        items: [
          "Tier 1, operating cash: balances needed for payroll, vendors and statutory payments over the next few weeks, held for immediate access.",
          "Tier 2, near-term reserves: funds required within roughly one to six months, placed in short-dated, high-quality instruments such as treasury bills or liquid and overnight funds.",
          "Tier 3, strategic surplus: cash with no foreseeable call on it, which can be invested for longer to capture a higher yield at an acceptable risk.",
        ],
      },
      {
        type: "h2",
        text: "Policy Before Products",
      },
      {
        type: "p",
        text: "An investment policy approved by the board should set limits on issuer credit quality, concentration, tenor and instrument type before any money moves. The goal is to make decisions repeatable and defensible, so that a treasurer is never choosing under pressure or chasing yield beyond the company's risk appetite.",
      },
      {
        type: "h3",
        text: "Forecasting Is the Real Edge",
      },
      {
        type: "p",
        text: "A reliable thirteen-week cash forecast, refreshed weekly, does more for returns than any product choice. NAMI's Bond and Treasury desk helps clients design the ladder, write the policy and review portfolios against it. Returns and risks vary with market conditions, and nothing here is an investment recommendation for any specific entity.",
      },
    ],
  },
  {
    slug: "vendor-due-diligence-sell-side-readiness",
    title: "Selling Your Company: Why Sell-Side Readiness Decides the Price",
    cat: "Investment Banking",
    date: "Q3 · 2026",
    author: "Shail Shah",
    readTime: "6 min read",
    excerpt:
      "Buyers pay for certainty. Vendor due diligence, clean financials and an organised data room shorten timelines and protect valuation.",
    keywords: [
      "sell-side M&A advisory",
      "vendor due diligence",
      "data room preparation",
      "quality of earnings",
      "Shail Shah",
    ],
    content: [
      {
        type: "p",
        text: "In mid-market transactions, price is rarely lost in the headline negotiation. It is lost later, when buyer diligence uncovers surprises and the discussion turns to price chips, escrows and indemnities. Founders who prepare before going to market negotiate from a position of strength.",
      },
      {
        type: "h2",
        text: "The Sell-Side Readiness Checklist",
      },
      {
        type: "list",
        items: [
          "Clean, reconciled financials with a clear bridge from reported to adjusted earnings.",
          "A vendor due diligence report that identifies and explains issues before a buyer finds them.",
          "A documented tax and regulatory compliance position, including FEMA filings where overseas investors are involved.",
          "Organised contracts, licences, IP records and employee documentation.",
          "A credible, evidence-backed business plan that supports the valuation story.",
        ],
      },
      {
        type: "h2",
        text: "The Role of the Data Room",
      },
      {
        type: "p",
        text: "A well-indexed virtual data room, populated in stages and with access controlled by bidder, signals professionalism and speeds up diligence. It also lets the advisory team see exactly what each bidder has reviewed, which helps manage the process and the information flow.",
      },
      {
        type: "h3",
        text: "Running a Competitive Process",
      },
      {
        type: "p",
        text: "NAMI Group's investment banking team supports sellers from valuation and positioning through buyer outreach, management presentations and closing mechanics. Outcomes depend on market conditions and the quality of the underlying business, and no particular price or timeline can be guaranteed.",
      },
    ],
  },
  {
    slug: "debt-capital-markets-private-placement-vs-public-issue",
    title: "Private Placement or Public Issue? Choosing the Right Route to Raise Debt",
    cat: "Capital Markets",
    date: "Q3 · 2026",
    author: "Dipen U. Shah",
    readTime: "6 min read",
    excerpt:
      "Both routes can raise bond capital, but cost, speed, investor base and disclosure burden differ widely. Match the route to the mandate.",
    keywords: [
      "debt capital markets India",
      "NCD private placement",
      "public issue of bonds",
      "corporate bond issuance",
      "Dipen U Shah",
    ],
    content: [
      {
        type: "p",
        text: "A company raising debt through the capital markets generally chooses between a private placement to a limited set of institutional investors and a public issue open to a wider base, including retail. The best route depends on size, timing, investor mix and how much disclosure the issuer is willing to take on.",
      },
      {
        type: "h2",
        text: "Comparing the Two Routes",
      },
      {
        type: "list",
        items: [
          "Speed: private placements are usually faster to execute and can be timed closely to market windows.",
          "Investor base: public issues reach retail and a broader set of investors, which can help larger programmes.",
          "Cost and process: public offers carry heavier documentation, intermediary and compliance requirements.",
          "Flexibility: private placements allow tailored covenants, tenors and structures negotiated with a small group of investors.",
        ],
      },
      {
        type: "h2",
        text: "Ratings, Structure and Investor Appetite",
      },
      {
        type: "p",
        text: "A credit rating is central to either route. Structure matters too: security package, covenants, call and put options and the repayment profile all affect pricing. Early conversations with anchor investors help calibrate size and price before launch.",
      },
      {
        type: "h3",
        text: "Our Role",
      },
      {
        type: "p",
        text: "NAMI Group advises issuers on route selection, structuring and investor outreach across debt capital markets. Market conditions move quickly, so any programme should be reviewed against current regulations and pricing before execution.",
      },
    ],
  },
  {
    slug: "ipo-readiness-governance-financial-track-record",
    title: "IPO Readiness: The Governance and Reporting Work That Starts Years Before Listing",
    cat: "Capital Markets",
    date: "Q4 · 2026",
    author: "Shail Shah",
    readTime: "7 min read",
    excerpt:
      "Successful listings are built on boards, controls and audited numbers that investors trust. Start preparing long before the draft offer document.",
    keywords: [
      "IPO readiness India",
      "pre-IPO preparation",
      "listing governance",
      "equity capital markets advisory",
      "Shail Shah",
    ],
    content: [
      {
        type: "p",
        text: "An initial public offering is a company's most public moment, and the market rewards those that arrive prepared. The hardest parts of the process, such as reporting discipline, board quality and internal controls, cannot be fixed in the last few weeks.",
      },
      {
        type: "h2",
        text: "What Investors Look For",
      },
      {
        type: "list",
        items: [
          "A consistent, audited financial track record that meets the eligibility conditions of the chosen listing platform.",
          "An independent, experienced board with functioning audit and risk committees.",
          "Strong internal financial controls and timely management reporting.",
          "Clean related-party arrangements and a clear capital structure.",
          "A credible equity story supported by evidence rather than projections alone.",
        ],
      },
      {
        type: "h2",
        text: "Pre-IPO Planning",
      },
      {
        type: "p",
        text: "The twelve to twenty-four months before filing are best used to tidy the cap table, resolve legacy disputes, formalise policies and professionalise finance and compliance teams. A pre-IPO round can also bring in institutional investors whose presence strengthens the story at launch.",
      },
      {
        type: "h3",
        text: "Choosing the Platform and Advisers",
      },
      {
        type: "p",
        text: "The choice between the main board and an SME platform, and the selection of merchant bankers, counsel and auditors, shapes both cost and timetable. NAMI Group helps companies assess readiness honestly, build a remediation plan and decide whether and when to proceed, since a postponed listing is often better than a poorly prepared one.",
      },
    ],
  },
  {
    slug: "export-factoring-receivables-finance-for-exporters",
    title: "Export Factoring: Turning Overseas Receivables into Working Capital",
    cat: "Trade Finance",
    date: "Q3 · 2026",
    author: "Dhiren Panchal",
    readTime: "5 min read",
    excerpt:
      "Exporters selling on open-account terms can release cash early and shift buyer-credit risk, without waiting 60 to 120 days for payment.",
    keywords: [
      "export factoring",
      "receivables finance",
      "open account trade",
      "international factoring",
      "Dhiren Panchal",
    ],
    content: [
      {
        type: "p",
        text: "Global buyers increasingly insist on open-account terms, leaving exporters to fund production and shipment long before they are paid. Export factoring converts approved invoices into immediate cash, easing the working-capital squeeze that comes with long payment cycles.",
      },
      {
        type: "h2",
        text: "How International Factoring Works",
      },
      {
        type: "p",
        text: "The exporter ships goods and assigns the invoice to a factor. The factor advances a large share of the invoice value up front, then collects from the overseas buyer and releases the balance, less fees, once payment arrives. In many structures a partner factor in the buyer's country assesses and monitors the buyer's credit.",
      },
      {
        type: "list",
        items: [
          "Faster cash conversion against approved receivables.",
          "Credit-risk cover on buyers, depending on whether the facility is with or without recourse.",
          "Collection and ledger support from a local partner in the buyer's market.",
          "Funding that grows with sales rather than being capped by fixed credit lines.",
        ],
      },
      {
        type: "h3",
        text: "Is It Right for Your Business?",
      },
      {
        type: "p",
        text: "Factoring suits exporters with recurring invoices to creditworthy buyers and thin margins for tying up capital. NAMI's 1Factor Global platform connects exporters with a network of supply chain lenders. Pricing, advance rates and eligibility depend on the buyer, the country and the transaction, and each case is assessed individually.",
      },
    ],
  },
  {
    slug: "import-finance-supply-chain-finance-structures",
    title:
      "Import Finance and Supply Chain Finance: Letters of Credit, Reverse Factoring and Beyond",
    cat: "Trade Finance",
    date: "Q4 · 2026",
    author: "Dhiren Panchal",
    readTime: "6 min read",
    excerpt:
      "Importers can stretch payment terms, secure supply and lower funding costs by choosing the right mix of trade finance instruments.",
    keywords: [
      "import finance",
      "supply chain finance",
      "letter of credit",
      "reverse factoring",
      "Dhiren Panchal",
    ],
    content: [
      {
        type: "p",
        text: "Importers face the opposite problem to exporters: suppliers want to be paid early while the importer wants to preserve cash. A range of trade finance instruments bridges the gap, each with its own cost, documentation and risk profile.",
      },
      {
        type: "h2",
        text: "Core Instruments",
      },
      {
        type: "list",
        items: [
          "Letters of credit: a bank undertaking to pay the supplier on presentation of compliant documents, giving the seller comfort and the buyer control over shipment terms.",
          "Usance and buyer's credit: extended payment terms funded by a bank, allowing the importer to pay months after shipment.",
          "Reverse factoring: the buyer's credit strength is used to let suppliers draw early payment at a rate based on the buyer's risk rather than their own.",
          "Vendor and dealer finance programmes that support the wider supply chain.",
        ],
      },
      {
        type: "h2",
        text: "Choosing the Right Mix",
      },
      {
        type: "p",
        text: "The best structure depends on supplier concentration, the buyer's credit profile, currency exposure and the regulatory framework governing overseas borrowing. Combining instruments, for example an LC for new suppliers and reverse factoring for long-standing ones, often works better than relying on one.",
      },
      {
        type: "h3",
        text: "NAMI's Approach",
      },
      {
        type: "p",
        text: "NAMI Group arranges import finance and supply chain finance across its lender network, advising on structure, documentation and compliance. Applicable rules and pricing vary by jurisdiction and change over time, so each facility is checked against the current regime before it is put in place.",
      },
    ],
  },
  {
    slug: "rss-feeds-regulatory-monitoring-finance-teams",
    title: "RSS Feeds for Finance Teams: A Quiet Way to Track Regulatory and Market Updates",
    cat: "RSS Feeds",
    date: "Q4 · 2026",
    author: "Dipen U. Shah",
    readTime: "5 min read",
    excerpt:
      "Regulators and exchanges publish circulars constantly. A simple feed reader can surface the ones that matter without inbox overload.",
    keywords: [
      "RSS feeds finance",
      "regulatory monitoring",
      "circulars and notifications",
      "compliance updates",
      "Dipen U Shah",
    ],
    content: [
      {
        type: "p",
        text: "Regulation in cross-border finance moves in small, frequent steps: a circular here, a notification there. Missing one can mean a missed deadline or a changed condition on a structure already in flight. RSS, a plain, open format for subscribing to website updates, remains one of the most reliable ways to follow them.",
      },
      {
        type: "h2",
        text: "Why RSS Still Works",
      },
      {
        type: "list",
        items: [
          "Pull, not push: you decide what to follow and when to read it, instead of managing an email flood.",
          "No algorithm: items appear in order, so important updates are not buried.",
          "Open standard: any feed reader can subscribe, with no vendor lock-in.",
          "Low overhead: a single reader can follow dozens of sources.",
        ],
      },
      {
        type: "h2",
        text: "Sources Worth Following",
      },
      {
        type: "p",
        text: "Where they publish feeds, regulators, stock exchanges, central banks, tax authorities and trade bodies are natural sources. Many sites list a feed link in the footer or page source. Where no feed exists, a feed-generation or page-monitoring tool can often fill the gap. Always confirm the official source before acting on any update.",
      },
      {
        type: "h3",
        text: "Start Small",
      },
      {
        type: "p",
        text: "Begin with five to ten sources tied directly to the work your team does, organise them into folders by topic, and set a fixed time each day to review. NAMI Group's Insights section is also where we publish our own commentary on GIFT IFSC, treasury, aviation, capital markets and trade finance developments.",
      },
    ],
  },
  {
    slug: "rss-feeds-compliance-workflow-alerts-archive",
    title: "From Feed to Workflow: Building Alerts and an Audit Trail Around RSS",
    cat: "RSS Feeds",
    date: "Q4 · 2026",
    author: "Shail Shah",
    readTime: "5 min read",
    excerpt:
      "Subscribing is only step one. Filters, keyword alerts and a searchable archive turn raw feeds into a defensible compliance process.",
    keywords: [
      "RSS workflow automation",
      "keyword alerts compliance",
      "regulatory change management",
      "audit trail",
      "Shail Shah",
    ],
    content: [
      {
        type: "p",
        text: "A feed reader solves collection. Compliance and advisory teams also need triage, ownership and evidence: who saw an update, what it affected and what was done. A few simple additions to an RSS setup can provide all three.",
      },
      {
        type: "h2",
        text: "Four Building Blocks",
      },
      {
        type: "list",
        items: [
          "Filters and keywords: surface items mentioning your products, jurisdictions or counterparties and mute the rest.",
          "Routing: forward high-priority items to the right owner by email or a team chat channel.",
          "A daily or weekly digest: bundle lower-priority items so the team reads them in one sitting.",
          "A searchable archive: keep every item so you can show what was available and when.",
        ],
      },
      {
        type: "h2",
        text: "Linking Updates to Action",
      },
      {
        type: "p",
        text: "For each relevant update, record a short note covering what changed, which clients or structures are affected, who is responsible and the deadline. A shared register of these notes becomes a regulatory change log that is useful in internal reviews and external audits.",
      },
      {
        type: "h3",
        text: "Keep a Human in the Loop",
      },
      {
        type: "p",
        text: "Automation can find and route updates but cannot judge their impact. Treat feed alerts as prompts for qualified review, and rely on the official text of a regulation rather than a summary. Where our teams support clients on regulatory change, that review is always done by qualified professionals.",
      },
    ],
  },
];

// Helper function to find related articles based on category and keywords
export function getRelatedArticles(
  article: Article,
  allArticles: Article[],
  limit: number = 3,
): Article[] {
  return allArticles
    .filter((a) => a.slug !== article.slug) // Exclude self
    .map((a) => {
      let score = 0;

      // Same category: +50 points
      if (a.cat === article.cat) score += 50;

      // Keyword overlap: +10 points per matching keyword
      const keywordMatches = a.keywords.filter((k) =>
        article.keywords.some((pk) => pk.toLowerCase().includes(k.toLowerCase())),
      );
      score += keywordMatches.length * 10;

      return { article: a, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ article }) => article);
}

// Helper function for search with weighted fields
export function searchArticles(query: string, articles: Article[]): Article[] {
  if (!query.trim()) return articles;

  const lowerQuery = query.toLowerCase();

  return articles
    .map((article) => {
      let score = 0;

      // Title match: weight 3
      if (article.title.toLowerCase().includes(lowerQuery)) score += 30;

      // Excerpt match: weight 2
      if (article.excerpt.toLowerCase().includes(lowerQuery)) score += 20;

      // Keyword match: weight 1
      if (article.keywords.some((k) => k.toLowerCase().includes(lowerQuery))) score += 10;

      // Author match: weight 1
      if (article.author.toLowerCase().includes(lowerQuery)) score += 10;

      return { article, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .map(({ article }) => article);
}
