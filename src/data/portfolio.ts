// ─── Types ──────────────────────────────────────────────────────────────────

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  email: string;
  bio: string;
  profileImage: string;
  socialLinks: SocialLink[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string; // lucide icon name
}

export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  logoInitial?: string;
  logoColor?: string;
  logoUrl?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Project {
  name: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  featured: boolean;
}

export interface Achievement {
  date: string;
  title: string;
  organization: string;
  location: string;
  description: string;
  result?: string;
}

export interface Education {
  institution: string;
  degree: string;
  startYear: string;
  endYear: string;
  logoInitial?: string;
  logoColor?: string;
  logoUrl?: string;
}

// ─── Data ───────────────────────────────────────────────────────────────────

export const personalInfo: PersonalInfo = {
  name: "Prithwi Singh",
  title: "Software Engineer & AI Builder",
  tagline: "I build AI-powered products and scalable full-stack systems.",
  email: "theprithwisingh@gmail.com",
  bio: `Software engineer focused on building **AI-powered products** and **production-grade full-stack systems**. I work across the stack, from designing intuitive interfaces to architecting backend services and integrating large language models into real workflows. My interests lie at the intersection of **developer tooling**, **applied AI**, and **systems that scale**. I enjoy solving hard problems that require both deep technical thinking and thoughtful product design.`,
  profileImage: "/profile.jpg",
  socialLinks: [
    { label: "GitHub", href: "https://github.com/theprithwisingh", icon: "github" },
    { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
    { label: "X", href: "https://x.com/theprithwisingh", icon: "twitter" },
    { label: "Calendar", href: "https://cal.com", icon: "calendar" },
  ],
};

export const experiences: Experience[] = [
  {
    company: "LeadingKart",
    role: "AI Full Stack Engineer",
    startDate: "Jan 2026",
    endDate: "Present",
    logoInitial: "LK",
    logoColor: "#000000ff",
  },

  {
    company: "Freelancing",
    role: "AI Full Stack Engineer",
    startDate: "Jan 2024",
    endDate: "Present",
    logoInitial: "F",
    logoColor: "#000000ff",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["C++", "JavaScript", "TypeScript", "Python", "Go", "SQL"],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "FastAPI",
      "Shadcn UI",
      "GraphQL",
      "React Query",
      "Redux",
      "Recoil",
    ],
  },
  {
    category: "Database & ORMs",
    skills: [
      "MongoDB",
      "PostgreSQL",
      "Redis",
      "MySQL",
      "SQLAlchemy",
      "Prisma",
      "Psycopg2",
    ],
  },
  {
    category: "Developer Tools & Cloud",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Kubernetes",
      "AWS (S3, CloudFront)",
      "Firebase",
      "Serverless",
      "ESLint",
      "Mapbox",
    ],
  },
  {
    category: "AI Engineering",
    skills: [
      "Neural Networks & Transformers",
      "PyTorch + Model Training",
      "LLM APIs & Agents",
      "RAG",
      "Fine-tuning",
      "RLVR / RL for LLMs",
      "Evals & AI Harnesses",
      "LLM Memory",
      "LangGraph",
      "LangChain",
      "Hugging Face",
      "Vector Databases",
      "Research Paper Reading",
      "Building AI Agents from Scratch",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "Cortex",
    description:
      "An AI-powered SaaS platform that automates document processing workflows. Extracts structured data from unstructured documents using fine-tuned LLMs, routes tasks via intelligent agents, and integrates with existing enterprise tools through a plugin system.",
    tags: ["TypeScript", "Next.js", "Python", "FastAPI", "PostgreSQL", "OpenAI"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },

  {
    name: "SyncBoard",
    description:
      "Real-time collaborative whiteboard for distributed teams. Features WebSocket-based CRDT synchronization, infinite canvas with vector rendering, and sub-50ms latency across geographies. Handles 500+ concurrent users per room.",
    tags: ["TypeScript", "React", "WebSocket", "Redis", "CRDT"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },

  {
    name: "Forge CLI",
    description:
      "A developer CLI tool that scaffolds production-ready full-stack projects with pre-configured CI/CD, testing, linting, and deployment pipelines. Supports multiple frameworks and generates type-safe API contracts automatically.",
    tags: ["Go", "TypeScript", "Docker", "GitHub Actions"],
    github: "https://github.com",
    featured: true,
  },

  {
    name: "AgentKit",
    description:
      "Framework for building multi-step AI agent workflows. Provides composable primitives for tool calling, memory management, and chain-of-thought reasoning. Used in production to power automated customer support pipelines.",
    tags: ["Python", "LangChain", "Redis", "OpenAI", "FastAPI"],
    github: "https://github.com",
    featured: false,
  },

  {
    name: "Vaultkey",
    description:
      "Secrets management service with end-to-end encryption, RBAC, and audit logging. Provides SDK support for Node.js and Python with automatic secret rotation and environment-aware configuration injection.",
    tags: ["Go", "PostgreSQL", "AES-256", "Docker", "gRPC"],
    github: "https://github.com",
    featured: false,
  },

  {
    name: "Pulse Analytics",
    description:
      "Lightweight, privacy-first web analytics dashboard. Tracks pageviews, events, and user journeys without cookies. Self-hostable with a single Docker command and under 5KB client-side script.",
    tags: ["TypeScript", "Next.js", "ClickHouse", "Docker"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },

];

export const achievements: Achievement[] = [
  {
    date: "Mar 2025",
    title: "AI Agents Hackathon — 1st Place",
    organization: "TechCrunch Disrupt",
    location: "San Francisco, CA",
    description:
      "Built an autonomous code review agent that analyzes PRs, identifies bugs, suggests fixes, and generates test cases. Processed 200+ repos during the 36-hour event.",
    result: "1st Place",
  },
  {
    date: "Nov 2024",
    title: "Open Source Contribution — LangChain",
    organization: "LangChain",
    location: "Remote",
    description:
      "Contributed a new retrieval strategy for multi-document RAG pipelines, improving retrieval accuracy by 23% on benchmark datasets. Merged into core library.",
  },
];

export const education: Education[] = [
  {
    institution: "University of Mumbai",
    degree: "B.E. Electrical & Software Engineering",
    startYear: "2021",
    endYear: "2025",
    logoInitial: "MU",
    logoColor: "#1a1a1a",
    logoUrl: "/mumbai-university.png",
  },
];
