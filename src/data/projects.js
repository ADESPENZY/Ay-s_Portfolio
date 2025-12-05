// src/data/projects.js

export const projects = [
  {
    title: "StyleMart: Next-Gen Fashion E-commerce",
    slug: "ecommerce",
    image: "/EcommerceAi.png",
    technologies: ["React", "Redux", "Tailwind"],
    tags: ["E-commerce", "UI/UX", "Performance"],
    brandName: "StyleMart",
    location: "California, USA",
    client: "StyleMart Co.",
    clutchReview: 4.8,
    budget: "$5,000 - $8,000",
    industry: "Retail",
    stack: "React",
    live: "https://e-commerce-navy-nine.vercel.app/",

    insights: {
      problem:
        "The client struggled with low conversions and a high bounce rate due to slow interface performance and poor mobile optimization.",
      solution:
        "We redesigned the storefront with a blazing-fast UI, improved product discovery experience, and integrated Shopify Storefront API for real-time product data.",
      value:
        "Conversions increased by 45% and average session duration improved by 60% after launch."
    },

    ceo: {
      review:
        "Partnering with this team transformed our online store. The modern, mobile-first design increased conversions massively.",
      name: "Daniel Reeds",
      position: "Founder & CEO, LuxeThreads Apparel"
    },

    milestones: [
      { title: "Discovery", description: "Analyzed funnel & user behavior drop-off points." },
      { title: "Design", description: "Created modern UI/UX with mobile-first patterns." },
      { title: "Development", description: "Built with React, Redux & Shopify API." },
      { title: "Launch", description: "Optimized with lazy-loading, caching, and SEO fixes." }
    ],

    metrics: [
      { value: "45%", label: "Increase in Conversions" },
      { value: "60%", label: "Longer Session Time" },
      { value: "99%", label: "Uptime Achieved" }
    ],

    team: [
      { role: "UI/UX Designer" },
      { role: "Frontend Developer" },
      { role: "Backend Developer" }
    ]
  },

  // -----------------------------
  // TRAVELBUDGET
  // -----------------------------
  {
    title: "TravelBudget: Smart Travel Expense Companion",
    slug: "travel-budget",
    image: "/TravelBudgetAi.png",
    technologies: ["Django", "Tailwind", "Git"],
    tags: ["Dashboard", "Analytics", "Travel"],
    brandName: "TravelBudget",
    location: "London, UK",
    client: "Wanderlytics Ltd.",
    clutchReview: 4.9,
    budget: "$10,000 - $15,000",
    industry: "Travel",
    stack: "Django",
    live: null,

    insights: {
      problem:
        "Travelers lacked an intuitive tool to track expenses in real-time, leading to overspending and poor trip budgeting.",
      solution:
        "We built a responsive analytics dashboard with budgeting tools, smart alerts, maps, and category insights.",
      value:
        "Users reported 60% better budget adherence and 45% more confidence in planning future trips."
    },

    ceo: {
      review:
        "The dashboard feels effortless. This product transformed our platform.",
      name: "Daniel Carter",
      position: "Founder & CEO, Wanderlytics Ltd."
    },

    milestones: [
      { title: "Planning", description: "Defined core budgeting experience." },
      { title: "Design", description: "Created responsive dashboard UI." },
      { title: "Development", description: "Built with Django + real-time analytics." },
      { title: "Testing", description: "Conducted multiple UX iterations." }
    ],

    metrics: [
      { value: "60%", label: "Better Budget Adherence" },
      { value: "45%", label: "Planning Confidence Increase" }
    ],

    team: [
      { role: "Product Manager" },
      { role: "Frontend Developer" },
      { role: "Backend Developer" }
    ]
  },

  // -----------------------------------------
  // ALLSEEK
  // -----------------------------------------
  {
    title: "AllSeek: Smart JobBoard Platform",
    slug: "allseek-search",
    image: "/AllSeekAi.png",
    technologies: ["Vue", "Firebase", "Tailwind"],
    tags: ["Job Board", "Real-time Search", "Instant Filtering"],
    brandName: "AllSeek",
    location: "Texas, USA",
    client: "AllSeek Inc.",
    clutchReview: 4.0,
    budget: "$7,000 - $10,000",
    industry: "Tech",
    stack: "Vue + Firebase",
    live: null,

    insights: {
      problem:
        "Traditional job platforms were slow, cluttered, and disconnected, leading to poor employer–candidate matches.",
      solution:
        "We built a modern job search tool with blazing-fast filtering, live updates, and recruiter dashboards.",
      value:
        "Applications increased by 35% and employers filled roles 40% faster."
    },

    ceo: {
      review:
        "Their design and responsiveness exceeded expectations. The platform is fast and scales beautifully.",
      name: "Peter Hulsbourgh",
      position: "Founder & CEO, AllSeek Inc."
    },

    milestones: [
      { title: "Discovery", description: "Analyzed user needs & job browsing behavior." },
      { title: "Design", description: "Created clean modern UI for fast scanning." },
      { title: "Development", description: "Integrated Firebase for real-time search." },
      { title: "Deployment", description: "Released scalable backend-ready platform." }
    ],

    metrics: [
      { value: "35%", label: "More Applications" },
      { value: "40%", label: "Faster Hiring Time" }
    ],

    team: [
      { role: "UI Designer" },
      { role: "Frontend Developer" },
      { role: "Database Engineer" }
    ]
  },

  // -----------------------------------------
  // Ads Automation System
  // -----------------------------------------
  {
    title: "Ads Automation System for Dental Clinics",
    slug: "ads-automation-system",
    image: "/AdsAutoAi.png",
    technologies: ["n8n", "Meta Ads API", "Twilio", "SendGrid", "React", "Node.js"],
    tags: ["Automation", "Pipeline", "AI Follow-Ups"],
    brandName: "DentalTurbo Automation Suite",
    location: "USA",
    client: "Multiple Dental Clinics",
    clutchReview: 4.9,
    budget: "$5,000 - $12,000",
    industry: "Healthcare",
    stack: "n8n + React + Node.js",

    insights: {
      problem:
        "Dental clinics were losing leads because follow-up was slow, inconsistent, or entirely missed.",
      solution:
        "We built a fully automated engine for SMS follow-up, auto-calling, email sequences, CRM syncing, and pipeline tracking.",
      value:
        "3× more booked appointments, 90% less manual work, and 50% reduction in no-shows."
    },

    ceo: {
      review:
        "Our bookings increased dramatically. The automation paid for itself within a week.",
      name: "Clinic Director",
      position: "Owner, Dental Practice"
    },

    milestones: [
      { title: "Discovery", description: "Mapped lead journey & bottlenecks." },
      { title: "Automation Build", description: "Created advanced n8n flows." },
      { title: "Dashboard", description: "Built analytics for full visibility." },
      { title: "Deployment", description: "Integrated Meta API, Twilio, SendGrid & CRM." }
    ],

    metrics: [
      { value: "3×", label: "More Bookings" },
      { value: "10 sec", label: "Lead Response Time" },
      { value: "50%", label: "Fewer No-Shows" },
      { value: "6–8 hrs", label: "Daily Staff Time Saved" }
    ],

    team: [
      { role: "Automation Engineer" },
      { role: "Frontend Developer" },
      { role: "Backend Developer" }
    ]
  },

  // -----------------------------------------
  // Job Automation System
  // -----------------------------------------
  {
    title: "Job Outreach Automation System",
    slug: "job-automation-system",
    image: "/JobAutoAi.png",
    technologies: [
      "LinkedIn API",
      "Google Sheets",
      "Telegram Bot",
      "Gmail API",
      "OpenAI",
      "Node.js",
      "n8n"
    ],
    tags: ["Automation", "AI Outreach", "Job Applications"],
    brandName: "Recruitment Automator",
    location: "Global",
    client: "Internal & Beta Testers",
    clutchReview: 4.7,
    budget: "$3,000 - $7,000",
    industry: "Recruitment",
    stack: "Node.js + n8n",

    insights: {
      problem:
        "Job seekers manually applied to hundreds of roles, missed deadlines, and couldn’t track responses.",
      solution:
        "We built a full automation engine that sends applications, drafts answers with AI, tracks recruiter replies, and sends daily Telegram updates.",
      value:
        "Users achieved 5× more interviews and eliminated 90% of the manual workload."
    },

    ceo: {
      review:
        "This system replaced our entire job outreach process. It's like hiring a full-time assistant.",
      name: "Operations Lead",
      position: "Job Outreach Pilot Program"
    },

    milestones: [
      { title: "Discovery", description: "Mapped job search workflow." },
      { title: "AI Writing Engine", description: "Built OpenAI-powered auto drafting." },
      { title: "Automation", description: "Created n8n flows for sending & follow-ups." },
      { title: "Deployment", description: "Integrated LinkedIn, Sheets, Gmail, Telegram." }
    ],

    metrics: [
      { value: "100+", label: "Applications Weekly" },
      { value: "90%", label: "Manual Work Reduced" },
      { value: "5–7×", label: "More Recruiter Replies" },
      { value: "4×", label: "More Interviews" }
    ],

    team: [
      { role: "Automation Engineer" },
      { role: "Backend Developer" },
      { role: "AI Writer" }
    ]
  }
];
