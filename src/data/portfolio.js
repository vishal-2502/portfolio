const env = import.meta.env;

export const profile = {
  name: "Vishal Chaudhari",
  role: "Backend Software Engineer",
  location: env.VITE_LOCATION || "Pune, India",
  experience: "2.5+ years",
  tagline: "Building reliable backend systems. Designing for scale. Engineering beyond the API.",
  intro:
    "I build backend services, API integrations, and data-intensive workflows. My work and learning focus on Node.js, TypeScript, microservices, search infrastructure, caching, and the engineering decisions behind reliable systems.",
  email: env.VITE_CONTACT_EMAIL || "your.email@example.com",
  phone: env.VITE_CONTACT_PHONE || "+91-00000-00000",
  github: env.VITE_GITHUB_URL || "https://github.com/your-username",
  linkedin: env.VITE_LINKEDIN_URL || "https://www.linkedin.com/in/your-profile/",
  resume: env.VITE_RESUME_URL || "",
  showEmail: (env.VITE_SHOW_EMAIL || "true").toLowerCase() === "true",
  siteUrl: env.VITE_SITE_URL || "",
};

export const skills = [
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Java", "Python", "SQL"],
    note: "JavaScript/TypeScript are the primary backend focus; Java and Python are used in other backend and AI/ML learning contexts.",
  },
  {
    title: "Backend engineering",
    items: ["Node.js", "Express.js", "Spring Boot", "REST APIs", "Microservices", "Socket.IO"],
    note: "API implementation, request validation, service contracts, error handling, and integration workflows.",
  },
  {
    title: "Data and search",
    items: ["PostgreSQL", "MySQL", "DynamoDB", "Elasticsearch", "Redis", "Prisma", "Sequelize"],
    note: "Relational and NoSQL data access, search queries, filtering, pagination, caching, and query optimization.",
  },
  {
    title: "Integration engineering",
    items: ["REST", "SOAP", "JSON", "XML", "SDKs", "Adapters", "Provider gateways"],
    note: "Provider-specific connectors, response mapping, transport abstractions, and external API workflows.",
  },
  {
    title: "Infrastructure and tooling",
    items: ["AWS", "AWS SDK", "Docker", "PM2", "Git", "GitHub", "Verdaccio", "Postman"],
    note: "Development, service operations, package publishing workflows, and cloud-backed application work.",
  },
  {
    title: "AI and applied research",
    items: ["RAG", "Embeddings", "Vector search", "Python data processing", "Neural-network experiments"],
    note: "Project and learning experience; not positioned as a production ML specialization.",
  },
];

export const experience = [
  {
    company: "Custom Travel Solutions",
    role: "Software Developer",
    period: "Dec 2025 — Present",
    summary:
      "Working in a travel technology environment involving hotel search, mapping, content, availability, booking workflows, and supplier integrations.",
    bullets: [
      "Work with provider connectors and reusable integration abstractions for supplier-specific APIs.",
      "Work with REST/SOAP communication and JSON/XML request or response handling.",
      "Contribute to Elasticsearch-backed search, autocomplete, filtering, relevance, and pagination workflows.",
      "Work with Redis caching, Protobuf/LZ4 serialization approaches, DynamoDB, and AWS SDK integrations.",
      "Investigate integration failures, data inconsistencies, search behaviour, and service connectivity issues.",
    ],
    tags: ["Node.js", "TypeScript", "Elasticsearch", "Redis", "DynamoDB", "Microservices"],
  },
  {
    company: "Netfotech Solutions",
    role: "Junior Software Engineer",
    period: "Jul 2024 — Dec 2025",
    summary:
      "Worked on backend applications, REST APIs, and database-backed business functionality.",
    bullets: [
      "Developed and maintained backend functionality using Node.js and Express.js.",
      "Worked with PostgreSQL and Prisma ORM for database-backed workflows.",
      "Contributed to booking/rental-related business workflows and real-time communication using Socket.IO.",
      "Worked on database query performance, API request handling, and backend maintenance.",
    ],
    tags: ["Node.js", "Express.js", "PostgreSQL", "Prisma", "Socket.IO"],
  },
];

export const projects = [
  {
    number: "01",
    title: "Travel Supplier Integration Platform",
    category: "Integration architecture",
    summary:
      "Reusable provider integration patterns for a travel platform where external suppliers expose different API contracts, protocols, and response structures.",
    problem:
      "Provider-specific behaviour can spread across business logic when every integration is built independently, increasing coupling and maintenance cost.",
    approach: [
      "Use provider-specific connectors to isolate supplier API details.",
      "Apply adapter and mapping layers to translate application requests and supplier responses.",
      "Separate transport concerns from provider-specific mapping and business rules.",
      "Use reusable gateway/SDK abstractions where they reduce duplication without hiding behaviour.",
      "Keep error handling and response contracts consistent where provider behaviour permits.",
    ],
    stack: ["Node.js", "TypeScript", "REST", "SOAP", "JSON/XML", "SDKs", "Adapters"],
    outcome:
      "The architectural goal is to make provider differences explicit and keep integration changes localized. No quantified impact is claimed here.",
    featured: true,
  },
  {
    number: "02",
    title: "Hotel Search & Location Autocomplete",
    category: "Search engineering",
    summary:
      "Search and autocomplete workflows involving Elasticsearch mappings, relevance scoring, geographic queries, filtering, and pagination.",
    problem:
      "Search quality requires balancing relevant matches, geographic context, filters, and response-time constraints as indexed data grows.",
    approach: [
      "Use Elasticsearch query and mapping design for text and geographic search.",
      "Evaluate autocomplete field strategies and match behaviour.",
      "Combine filters with ranking signals rather than relying on a single text match.",
      "Use pagination approaches such as search_after when appropriate to the result workflow.",
      "Measure representative query latency and relevance before changing ranking logic.",
    ],
    stack: ["Elasticsearch", "Node.js", "TypeScript", "Geo queries", "Redis"],
    outcome:
      "The focus is relevance and predictable query behaviour. Publish measured benchmarks only after reproducing them on a documented dataset.",
    featured: true,
  },
  {
    number: "03",
    title: "Hotel Booking Backend Workflows",
    category: "Distributed workflows",
    summary:
      "Backend workflows coordinating booking operations with external suppliers and service boundaries across search, content, configuration, and booking responsibilities.",
    problem:
      "External supplier timeouts and partial failures can leave a booking outcome uncertain; a timeout does not always mean the operation failed.",
    approach: [
      "Keep service contracts and booking state transitions explicit.",
      "Validate inputs before calling supplier APIs.",
      "Use timeouts and bounded retries only where the operation is safe to retry.",
      "Design idempotency controls to reduce duplicate-operation risk.",
      "Use correlation identifiers and structured logs to trace failures across service boundaries.",
    ],
    stack: ["Node.js", "TypeScript", "Microservices", "DynamoDB", "Redis", "AWS"],
    outcome:
      "This case study presents engineering considerations and patterns; it does not imply every listed safeguard is implemented in the current production platform.",
    featured: true,
  },
  {
    number: "04",
    title: "AI Knowledge Assistant",
    category: "AI application exploration",
    summary:
      "A RAG-oriented application concept for retrieving relevant knowledge and grounding language-model responses in source content.",
    problem:
      "A language model alone may not have access to private or changing knowledge and can produce unsupported answers.",
    approach: [
      "Ingest and process source documents.",
      "Split documents into searchable chunks and generate embeddings.",
      "Retrieve relevant content using query and metadata filters.",
      "Pass retrieved context to the language model and return source references where available.",
      "Evaluate retrieval quality, latency, cost, access controls, and factual grounding.",
    ],
    stack: ["Python", "RAG", "Embeddings", "Vector search", "LLM APIs"],
    outcome:
      "Presented as an applied AI project area and learning direction, not as a claim of operating a large production AI platform.",
    featured: false,
  },
  {
    number: "05",
    title: "Resume Screening Tool",
    category: "Applied AI",
    summary:
      "A project exploring structured resume information extraction and evidence-based matching against role requirements.",
    problem:
      "Recruiting teams need to compare candidate evidence with role criteria without treating an opaque model score as a final hiring decision.",
    approach: [
      "Extract text and relevant structured fields from resumes.",
      "Process role requirements into searchable criteria.",
      "Retrieve supporting evidence for skill and experience matches.",
      "Present summaries for human review and preserve appropriate privacy controls.",
      "Evaluate quality and potential bias rather than assuming automated scores are objective.",
    ],
    stack: ["Python", "Text processing", "Embeddings", "RAG"],
    outcome:
      "A human-in-the-loop decision-support concept; specific evaluation metrics should be added only when available.",
    featured: false,
  },
  {
    number: "06",
    title: "EV Anomaly Detection Research",
    category: "Machine learning research",
    summary:
      "An applied research area involving EV-related data, preprocessing, feature extraction, and neural-network experimentation.",
    problem:
      "Anomaly detection depends on representative data, sensible features, reliable labels where available, and evaluation against a suitable baseline.",
    approach: [
      "Prepare and inspect the dataset.",
      "Explore feature engineering and preprocessing choices.",
      "Experiment with a neural-network-based approach.",
      "Evaluate using metrics appropriate to the data and class distribution.",
    ],
    stack: ["Python", "Data preprocessing", "Neural networks"],
    outcome:
      "Add dataset details, exact model design, your contribution, and reproducible evaluation results before presenting this as a completed research result.",
    featured: false,
  },
];

export const principles = [
  {
    title: "Design for clarity",
    description: "Give each service a clear responsibility, stable contract, and explicit dependencies.",
  },
  {
    title: "Expect failure",
    description: "Treat networks, databases, and external APIs as fallible; make timeout, retry, and recovery behaviour deliberate.",
  },
  {
    title: "Measure before optimizing",
    description: "Use profiling, query plans, representative workloads, and repeatable benchmarks instead of assumptions.",
  },
  {
    title: "Protect data integrity",
    description: "Think about transactions, concurrency, idempotency, and explicit state transitions where business correctness matters.",
  },
  {
    title: "Make trade-offs visible",
    description: "Explain the operational cost, failure modes, and maintenance implications of architecture decisions.",
  },
  {
    title: "Build security in",
    description: "Consider authorization, input validation, least privilege, secret handling, and auditability from the beginning.",
  },
];

export const learning = [
  "Node.js runtime internals and performance",
  "Advanced TypeScript and reusable package design",
  "Database indexing, query plans, transactions, and concurrency",
  "Distributed systems, idempotency, consistency, and event-driven architecture",
  "High-level and low-level system design",
  "AWS architecture, IAM, networking, observability, and resilience",
  "API security, threat modelling, and incident response",
];
