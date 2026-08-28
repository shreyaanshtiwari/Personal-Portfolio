export interface Milestone {
  number: string;
  year: string;
  phase: string;
  title: string;
  role: string;
  description: string;
  highlights: string[];
  techStack: string[];
}

export interface SkillItem {
  name: string;
  category: 'frontend' | 'backend' | 'mobile' | 'systems' | 'database' | 'cloud';
  capabilityTag: string;
  description: string;
  highlight?: boolean;
}

export interface SkillCategory {
  id: 'frontend' | 'backend' | 'mobile' | 'systems' | 'database' | 'cloud';
  name: string;
  label: string;
  description: string;
  iconName: string;
  skills: SkillItem[];
}

export interface ProjectShowcase {
  number: string;
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  problem: string;
  solution: string;
  outcome: string;
  role: string;
  tech: string[];
  github: string;
  liveDemo?: string;
  status: string;
  category: string;
  featured: boolean;
  metrics: { label: string; value: string }[];
}

export interface SwaddeshJourneyStep {
  id: string;
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  techDetails: string[];
  keyFeatures: string[];
  flowDirection: string;
  status: string;
}

export interface ArchitectureNode {
  id: string;
  layer: string;
  title: string;
  category: string;
  technologies: string[];
  description: string;
  role: string;
  latencyTarget?: string;
  protocols: string[];
}

export const portfolioData = {
  personal: {
    name: "Shreyansh Kumar Tiwari",
    shortName: "Shreyansh",
    title: "Full Stack Vibe Coder & Founder of SwadDesh",
    statement: "Building thoughtful digital products where modern software engineering meets Indian cultural roots.",
    email: "shreyanshtiwari812@gmail.com",
    github: "https://github.com/shreyaanshtiwari",
    linkedin: "https://linkedin.com/in/shreyansh-kumar-tiwari",
    instagram: "https://instagram.com/shreyaansh.tiwari",
    swaddeshWebsite: "https://swaddesh.in",
    swaddeshInstagram: "https://instagram.com/swaddesh.in",
    resumeUrl: "/resume.pdf",
    location: "India",
    timezone: "Asia/Kolkata",
    status: {
      state: "Active Building",
      focus: "SwadDesh Pre-Launch Live (swaddesh.in) & Engineering Flutter Mobile App",
      badge: "PRE-LAUNCH LIVE",
    },
  },

  hero: {
    eyebrow: "01 / CAPABILITIES • BUILDER IDENTITY",
    namePart1: "SHREYANSH",
    namePart2: "KUMAR TIWARI",
    role: "Full Stack Vibe Coder & Founder of SwadDesh",
    tagline: "I can engineer scalable full-stack web applications, Java Spring Boot backends, Flutter mobile apps, and distributed PostgreSQL ecosystems.",
    statsPill: "Founder • Product Engineer • CS Student",
    ctaPrimary: "EXPLORE WHAT I CAN BUILD",
    ctaSecondary: "VIEW RESUME",
  },

  about: {
    eyebrow: "02 / ABOUT • WHAT I BRING TO THE TABLE",
    heading: "Technical mind. Cultural soul.",
    bioLeading: "I am a Full Stack Vibe Coder and product builder driven by execution, clean architecture, and delivering software that solves real commercial and human problems.",
    bioParagraph1: "I don't just write code or memorize syntax; I build complete functional engines from the database schema up to high-performance reactive web interfaces and native Flutter mobile apps.",
    bioParagraph2: "I can take any idea from zero to a live, production-grade ecosystem with sub-second performance, Java Spring Boot APIs, and scalable PostgreSQL infrastructure on Supabase.",
    imagePath: "/Shreyansh Tiwari.png",
    imageAlt: "Shreyansh Kumar Tiwari — Full Stack Vibe Coder & Founder",
    principles: [
      {
        number: "01",
        title: "I Build with Purpose",
        description: "I can transform high-level concepts into working software that solves genuine operational and commercial needs.",
      },
      {
        number: "02",
        title: "I Engineer for Scale",
        description: "I can architect clean domain boundaries, reliable API contracts, and high-concurrency relational schemas.",
      },
      {
        number: "03",
        title: "I Deliver for Users",
        description: "I can craft sub-second, highly polished web & mobile interfaces with fluid motion and zero layout shift.",
      },
    ],
    verifiedStats: [
      { label: "Production Platforms", value: "5+", detail: "Full-stack apps engineered & deployed" },
      { label: "Core Technologies", value: "15+", detail: "Java, Spring Boot, Flutter, Next.js, Postgres" },
      { label: "Execution Capability", value: "100%", detail: "From schema design to live deployment" },
      { label: "Flagship Venture", value: "1", detail: "SwadDesh 4-Portal Ecosystem & Flutter App" },
    ],
  },

  journey: [
    {
      number: "01",
      year: "2023",
      phase: "SYSTEM CORE",
      title: "Core Computing & Algorithmic Rigor",
      role: "B.Tech CSE & Computational Problem Solver",
      description:
        "Built core computational capabilities in data structures, algorithm optimization, low-level memory management, and systems thinking in C and C++.",
      highlights: [
        "I can solve complex algorithmic and data structure problems with optimal time complexity",
        "I can manage memory, pointers, and low-level system interactions efficiently",
        "I can design normalized relational database architectures with strict constraints",
      ],
      techStack: ["C", "C++", "Data Structures", "Algorithms", "Linux"],
    },
    {
      number: "02",
      year: "2023",
      phase: "FRONTEND ENGINEERING",
      title: "Modern Frontend & Reactive UX Engineering",
      role: "Frontend Engineer",
      description:
        "Engineered reactive component architectures, type-safe data flows, and fluid micro-interactions with TypeScript, React, and Next.js.",
      highlights: [
        "I can build SSR/SSG web applications with Next.js App Router and Server Components",
        "I can create strictly typed, robust component libraries with TypeScript",
        "I can orchestrate 60fps gesture physics and layout animations with Tailwind & Framer Motion",
      ],
      techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    {
      number: "03",
      year: "2024",
      phase: "FULL-STACK PRODUCTION",
      title: "Scalable Full-Stack & E-Commerce Systems",
      role: "Full Stack Vibe Coder",
      description:
        "Shipped production-ready applications like Grab e-commerce with reactive state machines, Supabase persistence, authentication, and REST APIs.",
      highlights: [
        "I can architect complete end-to-end e-commerce workflows from catalog to checkout",
        "I can implement secure JWT/OAuth authentication and Row Level Security policies",
        "I can optimize high-concurrency cart states and transactional checkout flows",
      ],
      techStack: ["React", "Node.js", "Express", "Supabase", "PostgreSQL", "REST APIs"],
    },
    {
      number: "04",
      year: "2024",
      phase: "FOUNDER & ARCHITECT",
      title: "Founding SwadDesh — 4-Portal Ecosystem",
      role: "Founder & Lead System Architect",
      description:
        "Conceived, architected, and engineered SwadDesh — an end-to-end 4-portal digital commerce ecosystem connecting heritage Indian food artisans with urban consumers, powered by Java Spring Boot and PostgreSQL on Supabase.",
      highlights: [
        "I can architect 4 dedicated portal surfaces: Customer Storefront, Vendor Portal, Admin Workspace, and Agent Logistics Portal",
        "I can engineer high-concurrency Java Spring Boot backend services with REST APIs and JPA persistence",
        "I can design transactional PostgreSQL schemas on Supabase with strict constraints, indexes, and RLS",
      ],
      techStack: ["Java", "Spring Boot", "Next.js", "PostgreSQL", "Supabase", "Tailwind CSS"],
    },
    {
      number: "05",
      year: "2025+",
      phase: "IN PROGRESS • MOBILE APP",
      title: "SwadDesh Mobile App in Flutter",
      role: "Mobile & Full Stack Engineer",
      description:
        "Currently engineering the cross-platform native SwadDesh mobile application in Flutter and Dart, connecting directly to the unified Java Spring Boot backend and PostgreSQL on Supabase.",
      highlights: [
        "I can build 60fps native mobile apps for Android & iOS using Flutter & Dart",
        "I can connect mobile apps seamlessly with the unified Java Spring Boot REST API and Supabase database",
        "I can engineer offline catalog caching, push notifications, and frictionless mobile checkout",
      ],
      techStack: ["Flutter", "Dart", "Java", "Spring Boot", "PostgreSQL", "Supabase", "REST APIs"],
    },
  ] as Milestone[],

  skills: {
    eyebrow: "04 / WHAT I CAN BUILD • CAPABILITIES MATRIX",
    heading: "What I Can Build & Engineer",
    description:
      "Here is exactly what I can architect, build, and deploy for you — from sub-second reactive frontends and native Flutter mobile apps to enterprise Java Spring Boot backend systems and PostgreSQL databases.",
    categories: [
      {
        id: "frontend",
        name: "Frontend Engineering",
        label: "WEB CLIENT CAPABILITIES",
        description: "I can craft sub-second, fully accessible, and reactive user interfaces with type safety and fluid motion.",
        iconName: "Layout",
        skills: [
          { name: "Next.js 15 (App Router)", category: "frontend", capabilityTag: "I can build", description: "I can build server-rendered, streaming web applications with Server Actions and dynamic routing", highlight: true },
          { name: "React 19", category: "frontend", capabilityTag: "I can build", description: "I can build concurrent interactive UIs with custom hook state machines and zero unnecessary re-renders", highlight: true },
          { name: "TypeScript", category: "frontend", capabilityTag: "I can build", description: "I can design strictly type-safe codebases with generics, domain contracts, and zero runtime surprises", highlight: true },
          { name: "Tailwind CSS", category: "frontend", capabilityTag: "I can build", description: "I can craft custom design systems, responsive layouts, glassmorphism, and dark luxury themes", highlight: true },
          { name: "Framer Motion & Animation", category: "frontend", capabilityTag: "I can build", description: "I can orchestrate 60fps scroll animations, gesture physics, and cinematic micro-interactions", highlight: true },
          { name: "HTML5, CSS3 & Canvas", category: "frontend", capabilityTag: "I can build", description: "I can engineer semantic accessible markup, responsive grids, and lightweight HTML5 Canvas effects" },
        ],
      },
      {
        id: "backend",
        name: "Backend & APIs",
        label: "SERVER CAPABILITIES",
        description: "I can design and deploy high-throughput enterprise REST APIs in Java Spring Boot and asynchronous microservices.",
        iconName: "Server",
        skills: [
          { name: "Java & Spring Boot", category: "backend", capabilityTag: "I can build", description: "I can engineer robust enterprise backend microservices with Spring Boot, Spring Security, JPA/Hibernate, and Maven", highlight: true },
          { name: "Python", category: "backend", capabilityTag: "I can build", description: "I can build asynchronous backend services, data processing pipelines, and automation tools", highlight: true },
          { name: "FastAPI", category: "backend", capabilityTag: "I can build", description: "I can create high-speed asynchronous REST endpoints with Pydantic validation and automatic OpenAPI docs", highlight: true },
          { name: "Node.js & Express", category: "backend", capabilityTag: "I can build", description: "I can build event-driven backend services, middleware auth pipelines, and REST APIs", highlight: true },
          { name: "RESTful Architecture", category: "backend", capabilityTag: "I can build", description: "I can architect stateless API contracts, standard error handling, and predictable data payloads", highlight: true },
          { name: "C / C++", category: "backend", capabilityTag: "I can build", description: "I can implement low-level algorithms, data structures, and memory-efficient computational logic" },
        ],
      },
      {
        id: "mobile",
        name: "Mobile & Flutter App",
        label: "MOBILE CLIENT CAPABILITIES",
        description: "I can build native 60fps cross-platform mobile apps in Flutter and mobile-first responsive web interfaces.",
        iconName: "Smartphone",
        skills: [
          { name: "Flutter", category: "mobile", capabilityTag: "I can build", description: "I can engineer 60fps native mobile apps for Android and iOS with clean widget trees and state management", highlight: true },
          { name: "Dart", category: "mobile", capabilityTag: "I can build", description: "I can write clean, strictly-typed object-oriented Dart code with asynchronous streams and models", highlight: true },
          { name: "Mobile API Integration", category: "mobile", capabilityTag: "I can build", description: "I can connect mobile apps to Java Spring Boot REST endpoints, secure token stores, and Supabase", highlight: true },
          { name: "Responsive Mobile UX", category: "mobile", capabilityTag: "I can build", description: "I can build pixel-perfect interfaces that adapt fluidly across mobile, tablet, and ultrawide screens", highlight: true },
          { name: "Progressive Web Apps (PWA)", category: "mobile", capabilityTag: "I can build", description: "I can make web apps installable on mobile devices with offline caching and service workers" },
          { name: "Touch & Swipe Physics", category: "mobile", capabilityTag: "I can build", description: "I can implement smooth touch swipe listeners, bottom sheets, and mobile drawer interactions" },
        ],
      },
      {
        id: "database",
        name: "Database & Storage",
        label: "PERSISTENCE CAPABILITIES",
        description: "I can model relational database schemas, write optimized queries, and guarantee ACID consistency in PostgreSQL & Supabase.",
        iconName: "Database",
        skills: [
          { name: "PostgreSQL", category: "database", capabilityTag: "I can build", description: "I can design normalized schemas, write complex joins, configure indexes, and optimize query latency", highlight: true },
          { name: "Supabase", category: "database", capabilityTag: "I can build", description: "I can build Postgres backends with Row Level Security (RLS), real-time subscriptions, and auth", highlight: true },
          { name: "SQL & Query Tuning", category: "database", capabilityTag: "I can build", description: "I can craft performant SQL queries, transactional triggers, and foreign key relationship rules", highlight: true },
          { name: "Data Architecture", category: "database", capabilityTag: "I can build", description: "I can model entity-relationship diagrams, catalog schemas, and multi-tenant data structures" },
        ],
      },
      {
        id: "systems",
        name: "System Architecture",
        label: "SYSTEM DESIGN CAPABILITIES",
        description: "I can architect multi-portal architectures, multi-client synchronizations, and robust domain models.",
        iconName: "Layers",
        skills: [
          { name: "4-Portal Architectures", category: "systems", capabilityTag: "I can build", description: "I can design and coordinate multi-portal platforms (Customer, Vendor, Admin, Agent)", highlight: true },
          { name: "Multi-Client Sync", category: "systems", capabilityTag: "I can build", description: "I can unify Web (Next.js) and Mobile (Flutter) clients under a single Java Spring Boot API", highlight: true },
          { name: "Domain-Driven Design", category: "systems", capabilityTag: "I can build", description: "I can structure clean domain boundaries, DTO contracts, and transactional services", highlight: true },
          { name: "Security & Auth Workflows", category: "systems", capabilityTag: "I can build", description: "I can implement JWT authorization, role-based access control, and endpoint protections" },
        ],
      },
      {
        id: "cloud",
        name: "Cloud & DevOps",
        label: "INFRASTRUCTURE CAPABILITIES",
        description: "I can containerize services, configure CI/CD pipelines, and deploy web applications to production.",
        iconName: "Cloud",
        skills: [
          { name: "Git & GitHub Workflows", category: "cloud", capabilityTag: "I can build", description: "I can manage branch strategies, clean commits, pull requests, and multi-developer codebases", highlight: true },
          { name: "Vercel & Edge Deployment", category: "cloud", capabilityTag: "I can build", description: "I can deploy full-stack apps to global edge networks with environment variable security", highlight: true },
          { name: "Docker Containerization", category: "cloud", capabilityTag: "I can build", description: "I can containerize backend services for reproducible production deployment" },
          { name: "CI / CD & Linting", category: "cloud", capabilityTag: "I can build", description: "I can configure automated TypeScript checks, ESLint quality rules, and automated build verification" },
        ],
      },
    ] as SkillCategory[],
  },

  projects: [
    {
      number: "01",
      id: "swaddesh",
      title: "SwadDesh Web Platform",
      subtitle: "4-Portal Regional Food Commerce Ecosystem",
      tagline: "Desh ka Swaad, Tradition ke Saath — connecting genuine Indian food heritage with digital scale.",
      category: "FLAGSHIP VENTURE • 4 PORTALS",
      status: "Active Development",
      role: "Founder & Lead Developer",
      featured: true,
      problem:
        "Authentic regional sweets and savory delicacies in India are deeply localized. In urban cities, consumers get mass-produced, chemically preserved imitations, while traditional multi-generational artisans lack direct digital reach.",
      solution:
        "Engineered a dedicated 4-portal regional commerce ecosystem (Customer Storefront, Vendor Portal, Admin Portal, Agent Logistics) powered by Java Spring Boot backend microservices and PostgreSQL on Supabase.",
      outcome:
        "Created an end-to-end multi-portal architecture handling vendor onboarding, artisan batch control, order state transitions, and agent dispatch operations with transactional integrity.",
      tech: ["Java", "Spring Boot", "Next.js 15", "PostgreSQL", "Supabase", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/shreyaanshtiwari/SwaadDesh",
      liveDemo: "https://swaddesh.in",
      metrics: [
        { label: "Architecture", value: "4 Portals" },
        { label: "Backend", value: "Java Spring Boot" },
        { label: "Database", value: "Postgres • Supabase" },
        { label: "Frontend", value: "Next.js 15" },
      ],
    },
    {
      number: "02",
      id: "swaddesh-app",
      title: "SwadDesh Mobile App",
      subtitle: "Native Cross-Platform Experience in Flutter",
      tagline: "On-the-go regional food discovery and sub-second checkout powered by Flutter & Java Spring Boot.",
      category: "MOBILE APP • FLUTTER & DART",
      status: "In Progress (Active Development)",
      role: "Mobile & Full Stack Developer",
      featured: true,
      problem:
        "Consumers exploring regional delicacies on mobile devices need a silky smooth 60fps native touch interface with offline caching, fast catalog searching, and frictionless 1-tap checkout.",
      solution:
        "Currently engineering the cross-platform mobile application in Flutter and Dart, integrating directly with the unified Java Spring Boot backend microservices and PostgreSQL on Supabase.",
      outcome:
        "Delivering an ultra-responsive native shopping experience with real-time order state updates, dynamic regional filters, and unified user authentication across web and mobile.",
      tech: ["Flutter", "Dart", "Java", "Spring Boot", "PostgreSQL", "Supabase", "REST APIs"],
      github: "https://github.com/shreyaanshtiwari/SwaadDesh",
      metrics: [
        { label: "Status", value: "In Progress" },
        { label: "Mobile Framework", value: "Flutter • Dart" },
        { label: "Backend API", value: "Java Spring Boot" },
        { label: "Database", value: "PostgreSQL & Supabase" },
      ],
    },
    {
      number: "03",
      id: "grab",
      title: "Grab E-Commerce",
      subtitle: "Modern Feature-Rich E-Commerce Platform",
      tagline: "High-performance online shopping platform with scalable state management.",
      category: "E-COMMERCE SYSTEM",
      status: "Completed",
      role: "Full Stack Vibe Coder",
      featured: true,
      problem:
        "Traditional shopping interfaces often suffer from sluggish client re-renders, complex checkout state synchronization issues, and inconsistent product catalog updates.",
      solution:
        "Architected a responsive shopping platform utilizing React component hierarchies, reactive cart context, secure Supabase authentication, and optimized database queries.",
      outcome:
        "Delivered a seamless shopping experience with instant cart updates, real-time product filtering, and a clean user-centric interface.",
      tech: ["React", "TypeScript", "Node.js", "Supabase", "Tailwind CSS", "PostgreSQL"],
      github: "https://github.com/princecomewada55/grab",
      metrics: [
        { label: "Platform", value: "Web App" },
        { label: "State Logic", value: "Context & Hooks" },
        { label: "Auth & DB", value: "Supabase" },
        { label: "Performance", value: "High FPS" },
      ],
    },
    {
      number: "04",
      id: "portfolio",
      title: "Personal Digital Canvas",
      subtitle: "Cinematic Narrative & Portfolio System",
      tagline: "Apple + Linear inspired editorial digital journey merging technology with Indian soul.",
      category: "CINEMATIC WEB EXPERIENCE",
      status: "Live & Continuously Evolving",
      role: "Designer & Developer",
      featured: false,
      problem:
        "Standard developer portfolios feel like generic resume templates that lack identity, emotional storytelling, and architectural depth.",
      solution:
        "Engineered an Awwwards-grade luxury dark portfolio using Lenis smooth scrolling, lightweight HTML5 ambient particle canvas, interactive system architecture maps, and 3D card physics.",
      outcome:
        "Achieved 60fps cinematic storytelling that clearly presents verified technical achievements, SwadDesh flagship narrative, and engineering philosophy.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Lenis", "Framer Motion", "Canvas API"],
      github: "https://github.com/shreyaanshtiwari/Personal-Portfolio.git",
      metrics: [
        { label: "Frame Target", value: "60 FPS" },
        { label: "Scroll Engine", value: "Lenis" },
        { label: "Palette", value: "Obsidian & Gold" },
        { label: "Chapters", value: "8 Sections" },
      ],
    },
  ] as ProjectShowcase[],

  swaddesh: {
    eyebrow: "06 / FLAGSHIP VENTURE • CULTURAL TECH",
    tag: "THE FLAGSHIP VENTURE",
    title: "SwadDesh",
    motto: "Desh ka Swaad, Tradition ke Saath",
    headline: "India's regional taste, engineered into a modern 4-portal digital ecosystem & Flutter mobile app.",
    summary:
      "Bridging the vast divide between authentic multi-generational Indian culinary artisans and urban consumers through modern web engineering, native Flutter mobile apps, Java Spring Boot microservices, and PostgreSQL persistence on Supabase.",
    philosophy:
      "Indian food traditions are centuries old; our software is built for the next century. We honor the taste by respecting the craftsmanship, eliminating artificial preservatives, and providing artisans direct digital dignity.",
    github: "https://github.com/shreyaanshtiwari/SwaadDesh",
    website: "https://swaddesh.in",
    instagram: "https://instagram.com/swaddesh.in",

    prelaunch: {
      eyebrow: "06 / PRE-LAUNCH LIVE • FLAGSHIP VENTURE",
      badge: "PRE-LAUNCH ACTIVE",
      headline: "SwadDesh is in Pre-Launch",
      subheadline: "Experience the vision connecting heritage Indian food artisans with digital scale.",
      url: "https://swaddesh.in",
      domain: "swaddesh.in",
      tagline: "Desh ka Swaad, Tradition ke Saath",
      description:
        "Our dedicated pre-launch website is live at swaddesh.in! Explore our early taste collections, discover our mission to deliver preservative-free heritage sweets to urban doorsteps, and join our early access waitlist while the 4-portal system and Flutter mobile app are engineered for full launch.",
      highlights: [
        "100% Pure Desi Ghee & Preservative-Free Recipes",
        "Direct Heritage Kitchen & Artisan Sourcing",
        "Sub-48-Hour Fresh Climate-Controlled Transit",
        "4-Portal Unified Digital Commerce Architecture",
      ],
      metrics: [
        { label: "Current Phase", value: "Pre-Launch Live" },
        { label: "Live Website", value: "swaddesh.in" },
        { label: "Artisan Network", value: "100+ Regional Kitchens" },
        { label: "Mobile Framework", value: "Flutter & Dart" },
      ],
    },

    journeySteps: [
      {
        id: "vendor",
        stepNumber: "01",
        title: "Vendor & Artisan Portal",
        subtitle: "Onboarding Heritage Kitchens",
        description:
          "Traditional halwais and regional confectioners access VendorPortal to manage fresh seasonal batches, shelf-life metadata, and authentic ingredients without technical friction.",
        techDetails: ["VendorPortal React UI", "Batch Lifecycle Schemas", "Dynamic Catalog Controls", "Mobile-Ready UI"],
        keyFeatures: [
          "Preservative-free shelf life tracking",
          "Regional origin verification stamps",
          "Automated batch availability signals",
        ],
        flowDirection: "Syncs inventory to Java Spring Boot & Logistics Hub",
        status: "Core Modules Built",
      },
      {
        id: "logistics",
        stepNumber: "02",
        title: "Agent & Logistics Dispatch Hub",
        subtitle: "Temperature & Transit Precision",
        description:
          "Because authentic sweets contain no harsh chemical preservatives, transit time is critical. The dedicated AgentPortal handles micro-batch pickups, rapid dispatch routing, and cold-pack packaging protocols.",
        techDetails: ["AgentPortal Dashboard", "Java Spring Boot State Engine", "PostgreSQL Transaction Locks"],
        keyFeatures: [
          "Sub-48-hour delivery routing windows",
          "Protected micro-batch handling",
          "Live temperature & transit state tracking",
        ],
        flowDirection: "Dispatches directly to Customers",
        status: "Architecture Defined",
      },
      {
        id: "customer",
        stepNumber: "03",
        title: "Customer Web Storefront & Flutter App",
        subtitle: "Sub-Second Regional Exploration",
        description:
          "Urban consumers explore regional India through map-based web catalogs and the native Flutter mobile app with instant checkout, live order updates, and genuine heritage taste delivered to their doorstep.",
        techDetails: ["Flutter Mobile App", "Next.js 15 App Router", "Java Spring Boot APIs", "PostgreSQL • Supabase"],
        keyFeatures: [
          "Cross-platform Web & Flutter mobile sync",
          "Transparent ingredient & origin listings",
          "Seamless checkout and real-time tracking",
        ],
        flowDirection: "Complete End-to-End Fulfilled Experience",
        status: "Web Live • Flutter App In Progress",
      },
    ] as SwaddeshJourneyStep[],

    architectureTiers: [
      {
        id: "client-portal",
        name: "4 Dedicated Portals & Flutter App",
        tech: "Customer • Vendor • Admin • Agent Portals + Flutter App",
        role: "4 specialized web apps (Next.js/React) and a cross-platform mobile app (Flutter/Dart) tailored for ordering, vendor batch control, operations, and agent logistics.",
      },
      {
        id: "api-gateway",
        name: "Java Spring Boot Backend Services",
        tech: "Java 17/21 • Spring Boot • Spring Security • JPA/Hibernate",
        role: "Unified enterprise backend services delivering high-concurrency order lifecycle, artisan catalog management, secure auth, and REST endpoints for web and mobile.",
      },
      {
        id: "db-layer",
        name: "PostgreSQL & Supabase Persistence Tier",
        tech: "PostgreSQL • Supabase RLS • Relational Indexes",
        role: "Transactional storage for product catalogs, artisan profiles, multi-tier orders, and secure session management shared across web and mobile.",
      },
      {
        id: "operations",
        name: "Admin & Operations Governance",
        tech: "AdminPortal • AgentPortal • Analytics",
        role: "Central oversight for artisan KYC verification, catalog approvals, financial settlements, and field agent dispatch routing.",
      },
    ],
  },

  architecture: {
    eyebrow: "07 / SYSTEM DESIGN • INTERACTIVE ARCHITECTURE",
    heading: "The Technical Ecosystem",
    description:
      "Interactive representation of how data, authentication, business logic, web portals, and the Flutter mobile app flow through the production applications I build.",
    nodes: [
      {
        id: "frontend-layer",
        layer: "01",
        title: "4-Portal Web Client Layer",
        category: "WEB CLIENTS",
        technologies: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion"],
        description:
          "4 specialized web applications (Customer, Vendor, Admin, Agent) providing sub-second initial load, fluid 60fps animations, and responsive touch UX.",
        role: "Multi-portal user interaction, state hydration, dynamic batch management, and operations dashboard.",
        latencyTarget: "< 100ms TTI",
        protocols: ["HTTPS", "WSS", "HTTP/2", "REST"],
      },
      {
        id: "mobile-tier",
        layer: "02",
        title: "Flutter Mobile Client Tier",
        category: "MOBILE CLIENT",
        technologies: ["Flutter", "Dart", "HTTP Client", "Secure Storage", "Push Notifications"],
        description:
          "Cross-platform native mobile application providing silky 60fps rendering, offline catalog caching, and frictionless mobile ordering on Android & iOS.",
        role: "Mobile customer discovery, push notifications, touch-first catalog navigation, and unified cart synchronization.",
        latencyTarget: "< 50ms Native Render",
        protocols: ["HTTPS", "WSS", "REST", "JSON"],
      },
      {
        id: "gateway-layer",
        layer: "03",
        title: "API Gateway & Security Layer",
        category: "GATEWAY",
        technologies: ["Spring Security", "JWT Auth", "Rate Limiter", "CORS Middleware"],
        description:
          "High-speed API entry points handling request authentication, rate-limiting tokens, payload validation, and route dispatch for web and mobile.",
        role: "Request validation, authentication tokens, payload filtering, and endpoint protection.",
        latencyTarget: "< 15ms Overhead",
        protocols: ["REST", "OAuth 2.0", "JWT", "JSON"],
      },
      {
        id: "backend-layer",
        layer: "04",
        title: "Java Spring Boot Backend Services",
        category: "COMPUTE",
        technologies: ["Java 17/21", "Spring Boot", "JPA / Hibernate", "Maven", "REST APIs"],
        description:
          "Enterprise backend services executing order state machines, vendor batch validation, pricing logic, and notification dispatches.",
        role: "Core business logic, batch state machines, checkout workflows, and domain rules.",
        latencyTarget: "< 50ms Execution",
        protocols: ["HTTP/REST", "gRPC", "Async Event Loops"],
      },
      {
        id: "database-layer",
        layer: "05",
        title: "PostgreSQL & Supabase Database Tier",
        category: "DATA",
        technologies: ["PostgreSQL", "Supabase", "Row Level Security (RLS)", "ACID Transactions"],
        description:
          "ACID-compliant relational database modeling catalogs, orders, user sessions, and inventory with strict constraints, indexes, and automated triggers.",
        role: "Data persistence, row-level access control, foreign key relational integrity, and search indexes shared by web and mobile.",
        latencyTarget: "< 10ms Query Time",
        protocols: ["PostgreSQL Wire Protocol", "SQL", "TCP/IP"],
      },
    ] as ArchitectureNode[],
  },

  contact: {
    eyebrow: "08 / FINAL CONNECTION • TERMINAL",
    heading: "Let's Build Something Meaningful.",
    tagline: "Tell me what you want to build. I can design the architecture, build the full-stack web system, develop Flutter mobile apps, or collaborate on high-impact products.",
    email: "shreyanshtiwari812@gmail.com",
    github: "https://github.com/shreyaanshtiwari",
    linkedin: "https://linkedin.com/in/shreyansh-kumar-tiwari",
    instagram: "https://instagram.com/shreyaansh.tiwari",
    swaddeshWebsite: "https://swaddesh.in",
    swaddeshInstagram: "https://instagram.com/swaddesh.in",
    resumeUrl: "/resume.pdf",
    location: "India [IST • UTC+5:30]",
    availability: "Available for high-impact software engineering & builder opportunities",
  },

  footer: {
    name: "Shreyansh Kumar Tiwari",
    identity: "Full Stack Vibe Coder & Founder of SwadDesh",
    motto: "Technical mind. Cultural soul.",
    note: "Crafted with intention. Powered by Next.js, TypeScript, Flutter & Lenis.",
    copyrightYear: "2026",
  },
};
