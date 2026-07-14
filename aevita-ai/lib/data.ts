import {
    Package, MessageSquare, FileText, CalendarCheck, Shield, ShoppingCart,
    BarChart3, Users, Truck, Brain, Database, Mail, Cloud, Server, GitBranch,
    Zap, RefreshCw, Lock, Globe, Search, Palette, Code, Smartphone, Book, Settings, User, CreditCard, HelpCircle
} from "lucide-react";

export const projects = [
    {
        title: "TechFlow Automation",
        slug: "techflow-automation",
        category: "Automation",
        description: "Reduced manual data entry by 85% with RPA workflows for a fintech company.",
        metrics: "85% time saved",
        tags: ["RPA", "Python", "AWS"],
        challenge: "The client was processing over 500 invoices daily manually, leading to errors and delays.",
        solution: "We implemented an end-to-end RPA solution using Python and AWS Lambda to extract data, validate it, and update the ERP system automatically.",
        outcomes: [
            "Reduced processing time from 3 days to 4 hours",
            "Eliminated manual entry errors",
            "Freed up 3 FTEs for higher-value tasks"
        ],
        images: ["/projects/techflow-1.jpg", "/projects/techflow-2.jpg"]
    },
    {
        title: "DataScale Cloud Migration",
        slug: "datascale-cloud",
        category: "Cloud",
        description: "Migrated 50TB of data to AWS with zero downtime. Achieved 30% cost reduction.",
        metrics: "30% cost reduction",
        tags: ["AWS", "Terraform", "Docker"],
        challenge: "Legacy on-premise infrastructure was costly and unreliable, causing frequent outages.",
        solution: "Architected a lift-and-shift migration to AWS, utilizing S3 for storage and EC2 auto-scaling groups for compute, managed via Terraform.",
        outcomes: [
            "Zero downtime during migration",
            "30% reduction in monthly infrastructure costs",
            "Improved system availability to 99.99%"
        ],
        images: ["/projects/datascale-1.jpg"]
    },
    {
        title: "GrowthLabs E-commerce",
        slug: "growthlabs-ecommerce",
        category: "Web",
        description: "Built a Next.js e-commerce platform that increased conversions by 2x.",
        metrics: "2x conversion rate",
        tags: ["Next.js", "Stripe", "Vercel"],
        challenge: "The client's existing WooCommerce site was slow and difficult to customize, leading to high cart abandonment.",
        solution: "Developed a headless commerce solution using Next.js and Stripe, providing a lightning-fast frontend and seamless checkout experience.",
        outcomes: [
            "Page load times under 1 second",
            "Doubled conversion rate within 3 months",
            "Simplified inventory management workflow"
        ]
    },
    {
        title: "HealthTech API Platform",
        slug: "healthtech-api",
        category: "Cloud",
        description: "Designed and deployed a HIPAA-compliant API infrastructure on Azure.",
        metrics: "99.99% uptime",
        tags: ["Azure", "Node.js", "PostgreSQL"],
        challenge: "Need for a secure, scalable API to handle sensitive patient data while adhering to strict HIPAA regulations.",
        solution: "Built a secure API gateway on Azure APIM, with encrypted PostgreSQL databases and automated compliance auditing.",
        outcomes: [
            "Reviewers approved HIPAA compliance in record time",
            "Scaled to handle 1M+ requests per day",
            "Zero security incidents post-launch"
        ]
    },
    {
        title: "RetailMax Inventory System",
        slug: "retailmax-inventory",
        category: "Automation",
        description: "Automated inventory management reducing stockouts by 60%.",
        metrics: "60% fewer stockouts",
        tags: ["Python", "MongoDB", "REST API"],
        challenge: "Inventory discrepancies between online and offline stores resulted in lost sales and overstocking.",
        solution: "Created a centralized inventory sync engine connecting POS and e-commerce platforms in real-time.",
        outcomes: [
            "Real-time stock visibility across all channels",
            "60% reduction in OOS events",
            "Automated reordering workflow implementation"
        ]
    },
    {
        title: "SaaS Dashboard",
        slug: "saas-dashboard",
        category: "Web",
        description: "Real-time analytics dashboard with 50+ charts and custom reporting.",
        metrics: "50+ visualizations",
        tags: ["React", "D3.js", "GraphQL"],
        challenge: "Users struggled to derive insights from raw data exports.",
        solution: "Designed an interactive dashboard with D3.js and GraphQL, allowing users to build custom reports and visualize trends instantly.",
        outcomes: [
            "Increased user engagement by 40%",
            "Reduced support requests for data reports by 90%",
            "Enabled feature-gated tiered subscription plans"
        ]
    }
];

export const useCases = [
    // Automation
    { icon: Package, title: "Inventory Management", description: "Real-time tracking with auto-reorders", purpose: "Reduce stockouts by 60%", slug: "inventory-management", category: "Automation" },
    { icon: MessageSquare, title: "Customer Feedback Analysis", description: "AI sorts reviews and generates reports", purpose: "Improve product decisions", slug: "customer-feedback", category: "Automation" },
    { icon: FileText, title: "Invoice Processing", description: "OCR matching and automated payments", purpose: "40% faster accounting", slug: "invoice-processing", category: "Automation" },
    { icon: CalendarCheck, title: "Event Registration", description: "Confirmations and reminders on autopilot", purpose: "Streamline event management", slug: "event-registration", category: "Automation" },
    { icon: Shield, title: "Compliance Auditing", description: "Scheduled checks and automatic flags", purpose: "Avoid fines & stay compliant", slug: "compliance-auditing", category: "Automation" },
    { icon: ShoppingCart, title: "E-commerce Order Sync", description: "Sync orders across platforms instantly", purpose: "Zero manual data entry", slug: "ecommerce-sync", category: "Automation" },
    { icon: BarChart3, title: "Sales Pipeline Automation", description: "Auto-qualify and route leads", purpose: "Close deals 30% faster", slug: "sales-pipeline", category: "Automation" },
    { icon: Users, title: "HR Onboarding", description: "Create accounts, send welcomes automatically", purpose: "Reduce onboarding time by 50%", slug: "hr-onboarding", category: "Automation" },
    { icon: Truck, title: "Supply Chain Tracking", description: "Real-time shipment visibility", purpose: "Reduce delays & improve planning", slug: "supply-chain", category: "Automation" },
    { icon: Brain, title: "Predictive Maintenance", description: "AI predicts equipment failures", purpose: "Prevent costly downtime", slug: "predictive-maintenance", category: "Automation" },
    { icon: Database, title: "Data Migration", description: "Move data between systems safely", purpose: "Zero data loss migrations", slug: "data-migration", category: "Automation" },
    { icon: Mail, title: "Email Campaign Automation", description: "Trigger campaigns based on behavior", purpose: "Increase engagement 2x", slug: "email-campaigns", category: "Automation" },

    // Cloud
    { icon: Cloud, title: "Multi-Cloud Migration", description: "Seamlessly move workloads across cloud providers", purpose: "50% cost reduction", slug: "multi-cloud-migration", category: "Cloud" },
    { icon: Server, title: "Kubernetes Orchestration", description: "Container management at scale", purpose: "3x deployment speed", slug: "kubernetes-orchestration", category: "Cloud" },
    { icon: GitBranch, title: "CI/CD Pipeline Setup", description: "Automated testing and deployment", purpose: "10x faster releases", slug: "cicd-pipeline", category: "Cloud" },
    { icon: Shield, title: "Infrastructure Security Audit", description: "Identify and fix vulnerabilities", purpose: "90% risk reduction", slug: "infrastructure-security", category: "Cloud" },
    { icon: Database, title: "Database Optimization", description: "Faster queries, lower costs", purpose: "10x query speed", slug: "database-optimization", category: "Cloud" },
    { icon: Zap, title: "Auto-Scaling Infrastructure", description: "Scale resources based on demand", purpose: "40% cost savings", slug: "auto-scaling", category: "Cloud" },
    { icon: RefreshCw, title: "Disaster Recovery Planning", description: "Business continuity assurance", purpose: "99.99% availability", slug: "disaster-recovery", category: "Cloud" },
    { icon: Lock, title: "IAM & Access Control", description: "Secure identity management", purpose: "Zero credential incidents", slug: "iam-implementation", category: "Cloud" },
    { icon: Globe, title: "CDN & Edge Optimization", description: "Faster global content delivery", purpose: "50% faster loads", slug: "cdn-optimization", category: "Cloud" },
    { icon: BarChart3, title: "Monitoring & Observability", description: "Full-stack visibility", purpose: "80% faster MTTR", slug: "monitoring-observability", category: "Cloud" },
    { icon: Users, title: "Cloud Cost Optimization", description: "Reduce your cloud bill", purpose: "30-50% savings", slug: "cost-optimization", category: "Cloud" },
    { icon: Shield, title: "DevSecOps Implementation", description: "Security-first development", purpose: "90% fewer vulnerabilities", slug: "devsecops", category: "Cloud" },

    // Web
    { icon: ShoppingCart, title: "E-commerce Platform", description: "Custom storefronts with payment processing", purpose: "Increase conversions by 2x", slug: "ecommerce-platform", category: "Web" },
    { icon: Globe, title: "Corporate Website", description: "Professional sites with CMS integration", purpose: "Establish brand authority", slug: "corporate-website", category: "Web" },
    { icon: Smartphone, title: "Progressive Web App", description: "App-like experience in the browser", purpose: "Engage mobile users", slug: "progressive-web-app", category: "Web" },
    { icon: BarChart3, title: "Performance Optimization", description: "Speed up slow websites", purpose: "Achieve 90+ Lighthouse scores", slug: "performance-optimization", category: "Web" },
    { icon: Users, title: "Customer Portal", description: "Self-service dashboards for clients", purpose: "Reduce support tickets", slug: "customer-portal", category: "Web" },
    { icon: Search, title: "SEO-Optimized Landing Pages", description: "High-converting pages for campaigns", purpose: "Lower CAC, higher rankings", slug: "seo-landing-pages", category: "Web" },
    { icon: Lock, title: "Member-Only Content", description: "Gated content with subscriptions", purpose: "Monetize expertise", slug: "member-content", category: "Web" },
    { icon: Palette, title: "Brand Redesign", description: "Modern UI/UX refresh", purpose: "Improve brand perception", slug: "brand-redesign", category: "Web" },
    { icon: BarChart3, title: "Analytics Dashboard", description: "Real-time data visualization", purpose: "Make data-driven decisions", slug: "analytics-dashboard", category: "Web" },
    { icon: RefreshCw, title: "Legacy Modernization", description: "Migrate old sites to modern stack", purpose: "Reduce maintenance costs", slug: "legacy-modernization", category: "Web" },
    { icon: Code, title: "API Development", description: "RESTful or GraphQL backends", purpose: "Power your applications", slug: "api-development", category: "Web" },
    { icon: Zap, title: "Headless CMS", description: "Content management with flexibility", purpose: "Empower content teams", slug: "headless-cms", category: "Web" },
];

export const templates = [
    // Automation
    {
        title: "Notion to Google Calendar Sync",
        slug: "notion-google-calendar",
        category: "Productivity",
        type: "Automation",
        description: "Automatically create Google Calendar events from Notion database items.",
        complexity: "Beginner",
        platform: "n8n",
        image: "/templates/notion-gcal.png",
        votes: 1205
    },
    {
        title: "Shopify Order to Slack Notification",
        slug: "shopify-slack",
        category: "E-commerce",
        type: "Automation",
        description: "Get instant Slack notifications for new Shopify orders with customer details.",
        complexity: "Beginner",
        platform: "Make",
        image: "/templates/shopify-slack.png",
        votes: 982
    },
    {
        title: "Lead Enrichment with Clearbit",
        slug: "lead-enrichment",
        category: "Sales",
        type: "Automation",
        description: "Enrich new CRM leads with Clearbit data automatically.",
        complexity: "Intermediate",
        platform: "n8n",
        image: "/templates/lead-enrichment.png",
        votes: 856
    },
    {
        title: "Automated Invoice Generation",
        slug: "invoice-generation",
        category: "Finance",
        type: "Automation",
        description: "Generate PDF invoices from Stripe payments and email them to customers.",
        complexity: "Advanced",
        platform: "n8n",
        image: "/templates/invoice-gen.png",
        votes: 743
    },
    {
        title: "Social Media Cross-Posting",
        slug: "social-cross-posting",
        category: "Marketing",
        type: "Automation",
        description: "Post content to Twitter, LinkedIn, and Facebook simultaneously from a single form.",
        complexity: "Intermediate",
        platform: "Zapier",
        image: "/templates/social-posting.png",
        votes: 1102
    },
    {
        title: "Weekly Team Status Report",
        slug: "status-report",
        category: "Productivity",
        type: "Automation",
        description: "Collect updates from team members via Slack and compile a weekly digest.",
        complexity: "Intermediate",
        platform: "n8n",
        image: "/templates/status-report.png",
        votes: 654
    },

    // Cloud Templates
    { slug: "terraform-aws-vpc", title: "Production-Ready AWS VPC", description: "Multi-AZ VPC with public/private subnets.", categories: ["AWS", "Terraform"], type: "Cloud", integrations: ["Terraform", "AWS"], votes: 892 },
    { slug: "kubernetes-helm-starter", title: "Kubernetes Helm Starter", description: "Helm chart templates for common workloads.", categories: ["Kubernetes", "Helm"], type: "Cloud", integrations: ["Helm", "Kubernetes"], votes: 756 },
    { slug: "github-actions-cicd", title: "GitHub Actions CI/CD", description: "Complete CI/CD workflow for apps.", categories: ["CI/CD", "GitHub"], type: "Cloud", integrations: ["GitHub Actions", "Docker"], votes: 1245 },
    { slug: "gitlab-ci-pipeline", title: "GitLab CI/CD Pipeline", description: "Multi-stage GitLab pipeline.", categories: ["CI/CD", "GitLab"], type: "Cloud", integrations: ["GitLab CI", "Docker"], votes: 567 },
    { slug: "argocd-gitops", title: "ArgoCD GitOps Setup", description: "GitOps deployment with ArgoCD.", categories: ["GitOps", "Kubernetes"], type: "Cloud", integrations: ["ArgoCD", "Kubernetes"], votes: 623 },
    { slug: "aws-landing-zone", title: "AWS Landing Zone", description: "Multi-account setup with Control Tower.", categories: ["AWS", "Security"], type: "Cloud", integrations: ["AWS Control Tower", "AWS Organizations"], votes: 445 },
    { slug: "docker-compose-stack", title: "Docker Compose Stack", description: "Local development environment.", categories: ["Docker", "Local"], type: "Cloud", integrations: ["Docker Compose", "PostgreSQL"], votes: 934 },
    { slug: "prometheus-monitoring", title: "Prometheus Monitoring", description: "Full observability stack.", categories: ["Monitoring", "Kubernetes"], type: "Cloud", integrations: ["Prometheus", "Grafana"], votes: 789 },
    { slug: "vault-secrets", title: "Vault Secrets Management", description: "Secure secrets with Vault.", categories: ["Security", "Secrets"], type: "Cloud", integrations: ["Vault", "Kubernetes"], votes: 534 },
    { slug: "loki-logging", title: "Loki Logging Stack", description: "Centralized logging with Loki.", categories: ["Logging", "Kubernetes"], type: "Cloud", integrations: ["Loki", "Grafana"], votes: 612 },
    { slug: "cert-manager-ssl", title: "Automated SSL/TLS", description: "Cert-manager with Let's Encrypt.", categories: ["Security", "Kubernetes"], type: "Cloud", integrations: ["cert-manager", "Let's Encrypt"], votes: 878 },
    { slug: "multi-account-networking", title: "Transit Gateway Networking", description: "Hub-and-spoke AWS networking.", categories: ["AWS", "Networking"], type: "Cloud", integrations: ["Transit Gateway", "Terraform"], votes: 423 },

    // Web Templates
    { slug: "nextjs-saas-starter", title: "Next.js SaaS Starter Kit", description: "Full-stack SaaS with auth, billing, and dashboard.", categories: ["SaaS", "Next.js"], type: "Web", integrations: ["Next.js", "Stripe", "Prisma"], votes: 1245 },
    { slug: "ecommerce-storefront", title: "E-commerce Storefront", description: "Shopify-powered custom storefront.", categories: ["E-commerce", "Shopify"], type: "Web", integrations: ["Next.js", "Shopify", "Tailwind"], votes: 987 },
    { slug: "corporate-website", title: "Corporate Website", description: "Professional multi-page company site.", categories: ["Corporate", "CMS"], type: "Web", integrations: ["Next.js", "Contentful", "Sanity"], votes: 756 },
    { slug: "portfolio-showcase", title: "Portfolio Showcase", description: "Stunning portfolio for creatives.", categories: ["Portfolio", "Creative"], type: "Web", integrations: ["Next.js", "Framer Motion"], votes: 892 },
    { slug: "landing-page-kit", title: "Landing Page Kit", description: "High-converting landing page sections.", categories: ["Marketing", "Conversion"], type: "Web", integrations: ["Next.js", "Tailwind"], votes: 1089 },
    { slug: "product-landing", title: "Product Landing Page", description: "Single product showcase page.", categories: ["Product", "Marketing"], type: "Web", integrations: ["Next.js", "Stripe"], votes: 678 },
    { slug: "blog-platform", title: "Blog Platform", description: "Full-featured blog with CMS.", categories: ["Blog", "CMS"], type: "Web", integrations: ["Next.js", "Sanity", "Algolia"], votes: 567 },
    { slug: "docs-portal", title: "Documentation Portal", description: "Developer docs with search.", categories: ["Docs", "Technical"], type: "Web", integrations: ["Docusaurus", "Algolia"], votes: 723 },
    { slug: "dashboard-admin", title: "Admin Dashboard", description: "Full admin dashboard template.", categories: ["Dashboard", "Admin"], type: "Web", integrations: ["React", "Tailwind"], votes: 934 },
    { slug: "analytics-dashboard", title: "Analytics Dashboard", description: "Real-time metrics visualization.", categories: ["Analytics", "Charts"], type: "Web", integrations: ["React", "D3.js"], votes: 645 },
    { slug: "membership-site", title: "Membership Site", description: "Gated content with subscriptions.", categories: ["Membership", "Subscription"], type: "Web", integrations: ["Next.js", "Stripe", "NextAuth"], votes: 512 },
    { slug: "course-platform", title: "Online Course Platform", description: "Video courses with progress tracking.", categories: ["Education", "LMS"], type: "Web", integrations: ["Next.js", "Mux", "Prisma"], votes: 478 },
];

export const docsCategories = [
    {
        title: "Getting Started",
        icon: Book,
        description: "Everything you need to know to get up and running.",
        articles: [
            { title: "Quick Start Guide", slug: "quick-start" },
            { title: "Platform Overview", slug: "platform-overview" },
            { title: "Key Concepts", slug: "key-concepts" }
        ],
    },
    {
        title: "API Reference",
        icon: Code,
        description: "Detailed documentation for our API endpoints.",
        articles: [
            { title: "Authentication", slug: "authentication" },
            { title: "Rate Limits", slug: "rate-limits" },
            { title: "Endpoints", slug: "endpoints" }
        ],
    },
    {
        title: "Account Management",
        icon: User,
        description: "Manage your account settings and preferences.",
        articles: [
            { title: "Profile Settings", slug: "profile-settings" },
            { title: "Team Members", slug: "team-members" },
            { title: "Security", slug: "security" }
        ],
    },
    {
        title: "Billing & Plans",
        icon: CreditCard,
        description: "Information about pricing, billing, and plans.",
        articles: [
            { title: "Pricing Models", slug: "pricing-models" },
            { title: "Invoices", slug: "invoices" },
            { title: "Upgrading", slug: "upgrading" }
        ],
    },
    {
        title: "Configuration",
        icon: Settings,
        description: "Customize the platform to fit your needs.",
        articles: [
            { title: "Integrations", slug: "integrations" },
            { title: "Webhooks", slug: "webhooks" },
            { title: "Custom Domains", slug: "custom-domains" }
        ],
    },
    {
        title: "Troubleshooting",
        icon: HelpCircle,
        description: "Solutions to common problems and errors.",
        articles: [
            { title: "Common Errors", slug: "common-errors" },
            { title: "Status Page", slug: "status-page" },
            { title: "Contact Support", slug: "contact-support" }
        ],
    },
];
