/**
 * ─────────────────────────────────────────────────────────────
 *  ALL PORTFOLIO CONTENT LIVES HERE.
 *  Edit this file to update text, links, experience and projects.
 *  Icon names are Lucide icon names in kebab-case and must also be
 *  registered in src/app/app.config.ts.
 * ─────────────────────────────────────────────────────────────
 */

export interface SocialLinks {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  location: string;
}

export interface SkillGroup {
  title: string;
  icon: string;
  blurb: string;
  skills: string[];
}

export interface ExperienceProject {
  name: string;
  period: string;
  domain: string;
  summary: string;
  stack: string[];
  highlights: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  projects: ExperienceProject[];
}

export interface Project {
  title: string;
  tag: string;
  icon: string;
  overview: string;
  role: string;
  features: string[];
  stack: string[];
  github: string;
  demo: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  year: string;
  notes: string;
}

export const PROFILE = {
  name: 'Kunal Karde',
  firstName: 'Kunal',
  title: 'Full Stack .NET Developer',
  rotatingRoles: ['scalable REST APIs', 'enterprise workflows', 'Angular & React UIs', 'Azure cloud services'],
  intro:
    'I am a passionate .NET Full Stack Developer with hands-on experience building scalable web applications, ' +
    'REST APIs, and responsive user interfaces using C#, ASP.NET Core, Angular, and SQL Server.',
  yearsOfExperience: '3.9',
  resumeUrl: 'Kunal_Karde_Resume.pdf',
  availability: 'Open to new opportunities',
};

export const SOCIALS: SocialLinks = {
  email: 'kunalkarde.dev@gmail.com',
  phone: '+91 7249644388',
  linkedin: 'https://www.linkedin.com/in/kunal-karde-8a1789217',
  github: 'https://github.com/kunalkarde',
  location: 'Pune, Maharashtra, India',
};

/**
 * Optional: paste a Formspree (https://formspree.io) endpoint such as
 * 'https://formspree.io/f/abcdwxyz' to receive messages directly.
 * Leave empty and the contact form opens the visitor's email app instead.
 */
export const CONTACT_FORM_ENDPOINT = '';

export const ABOUT = {
  paragraphs: [
    'I build enterprise web applications end to end, from SQL Server schemas and ASP.NET Core APIs to the Angular and React interfaces people use every day. Since January 2023 I have shipped production software at Web Minds IT Solutions across fintech, healthcare and procurement.',
    'On the backend I design clean, layered C# services with Entity Framework Core, JWT authentication and role-based access control. On the frontend I build reusable, typed components with Angular and TypeScript. In the cloud I work with Azure App Services, Functions, Service Bus and Key Vault, delivered through CI/CD pipelines.',
    'I care about code that the next developer can read, test and extend. I enjoy tracking down hard production bugs, tuning slow queries, and working closely with my team in Agile sprints.',
  ],
  stats: [
    { value: '3.9+', label: 'Years of experience' },
    { value: '3', label: 'Enterprise platforms shipped' },
    { value: '3', label: 'Business domains' },
    { value: '20+', label: 'Technologies in daily use' },
  ],
  strengths: [
    { icon: 'server', title: 'Backend engineering', text: 'C#, ASP.NET Core Web API, EF Core, LINQ and microservices.' },
    { icon: 'layout-dashboard', title: 'Frontend craft', text: 'Angular, React and TypeScript with reusable, responsive components.' },
    { icon: 'database', title: 'Data design', text: 'SQL Server schemas, stored procedures, indexing and query tuning.' },
    { icon: 'users', title: 'Team player', text: 'Agile delivery, code reviews and calm production support.' },
  ],
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Backend',
    icon: 'server',
    blurb: 'APIs and services built for scale',
    skills: ['C#', 'ASP.NET Core', 'ASP.NET Web API', 'Entity Framework Core', 'LINQ', 'ASP.NET MVC', 'Dependency Injection', 'ADO.NET', 'Microservices', 'SOLID / OOP'],
  },
  {
    title: 'Frontend',
    icon: 'code-xml',
    blurb: 'Responsive, component-driven UIs',
    skills: ['Angular', 'TypeScript', 'JavaScript', 'React', 'HTML5', 'CSS3', 'Bootstrap', 'Responsive Design'],
  },
  {
    title: 'Database',
    icon: 'database',
    blurb: 'Reliable data and fast queries',
    skills: ['SQL Server', 'T-SQL', 'Stored Procedures', 'Joins', 'Indexing', 'Views & CTEs', 'Query Optimization', 'Database Design'],
  },
  {
    title: 'Cloud & Security',
    icon: 'cloud',
    blurb: 'Secure delivery on Microsoft Azure',
    skills: ['Azure App Services', 'Azure Functions', 'Azure Service Bus', 'Azure Key Vault', 'Blob Storage', 'JWT', 'RBAC', 'OAuth'],
  },
  {
    title: 'Tools & DevOps',
    icon: 'wrench',
    blurb: 'Everyday workflow and delivery',
    skills: ['Git', 'GitHub', 'Azure DevOps', 'CI/CD', 'Docker', 'Visual Studio', 'VS Code', 'Postman', 'Swagger'],
  },
];

export const EXPERIENCE: Experience[] = [
  {
    company: 'Web Minds IT Solutions',
    role: 'Full Stack .NET Developer',
    period: 'Jan 2023 – Present',
    location: 'Pune',
    summary:
      'Designing, building, testing and deploying enterprise web applications across procurement, healthcare and fintech using the Microsoft .NET stack, Angular, React and Azure.',
    projects: [
      {
        name: 'Procurement Workflow Intelligence Platform',
        period: 'Oct 2025 – Present',
        domain: 'Procurement',
        summary: 'Enterprise platform for supplier operations, purchasing workflows, approvals and business reporting.',
        stack: ['ASP.NET Core', 'React', 'TypeScript', 'SQL Server', 'Azure Service Bus', 'Azure Functions', 'Key Vault', 'Docker', 'Azure DevOps'],
        highlights: [
          'Built modular ASP.NET Core Web APIs for supplier management, purchase requests, procurement workflows and approvals.',
          'Implemented microservice integrations and asynchronous messaging with REST APIs and Azure Service Bus.',
          'Secured delivery with JWT, RBAC, API validation, Azure Key Vault configuration and Docker.',
          'Supported Azure DevOps CI/CD pipelines, SQL optimization, code reviews and production issue resolution.',
        ],
      },
      {
        name: 'Patient Care Coordination Platform',
        period: 'Mar 2024 – Sep 2025',
        domain: 'Healthcare',
        summary: 'Healthcare platform for patients, appointments, doctor workflows, medical records and prescriptions.',
        stack: ['ASP.NET Core', 'EF Core', 'React', 'TypeScript', 'SQL Server', 'Azure Functions', 'Blob Storage', 'JWT'],
        highlights: [
          'Developed Web APIs for patient management, appointment scheduling, medical records and prescriptions.',
          'Integrated Azure Functions, notification services and Blob Storage for reminders, alerts and secure documents.',
          'Implemented JWT authentication and role-based authorization to protect sensitive healthcare data.',
          'Optimized SQL Server and EF Core operations to keep high-traffic screens responsive.',
        ],
      },
      {
        name: 'Transaction Reconciliation Management Platform',
        period: 'Mar 2023 – Feb 2024',
        domain: 'Fintech',
        summary: 'Financial application for transaction processing, payment reconciliation and reporting.',
        stack: ['ASP.NET Core', 'Angular', 'TypeScript', 'SQL Server', 'EF Core', 'Bootstrap', 'Azure App Services'],
        highlights: [
          'Built ASP.NET Core REST APIs for transaction processing, payment workflows and reconciliation.',
          'Created Angular dashboards, forms and reusable UI modules for finance and operations users.',
          'Designed stored procedures, views, indexes and complex joins for transactional workloads.',
          'Integrated internal and external APIs and handled deployment and production support.',
        ],
      },
    ],
  },
];

/**
 * Featured projects. The text below is starter content: replace it with your
 * own project details, and point `github` / `demo` at real URLs.
 * An empty string hides that link.
 */
export const PROJECTS: Project[] = [
  {
    title: 'Employee Management System',
    tag: 'HR · Internal tool',
    icon: 'users',
    overview:
      'A web application for managing employee records, departments, attendance and leave requests, with role-based dashboards for HR, managers and employees.',
    role: 'Designed the database schema, built the ASP.NET Core Web API and created the Angular admin dashboard.',
    features: ['Employee CRUD with search, filter and pagination', 'Leave requests with approval workflow', 'JWT login with Admin / HR / Employee roles', 'Department and attendance reports'],
    stack: ['ASP.NET Core', 'Angular', 'EF Core', 'SQL Server', 'JWT', 'Bootstrap'],
    github: 'https://github.com/kunalkarde/employee-management-system',
    demo: '',
  },
  {
    title: 'ERP Management Application',
    tag: 'Enterprise · Operations',
    icon: 'layers',
    overview:
      'A modular ERP for inventory, purchase orders, sales invoices and vendor management, giving operations teams one place to track stock and orders.',
    role: 'Built the inventory and purchase modules, wrote stored procedures for reporting and designed reusable Angular form components.',
    features: ['Inventory tracking with low-stock alerts', 'Purchase order and invoice generation', 'Vendor and customer management', 'Sales and stock reports from stored procedures'],
    stack: ['ASP.NET Core', 'Angular', 'TypeScript', 'SQL Server', 'Stored Procedures', 'LINQ'],
    github: 'https://github.com/kunalkarde/erp-management',
    demo: '',
  },
  {
    title: 'E-commerce Web Application',
    tag: 'Retail · Customer facing',
    icon: 'layout-dashboard',
    overview:
      'An online store with product catalogue, cart, checkout and order tracking, plus an admin panel for products, categories and orders.',
    role: 'Built the product and order APIs, the cart and checkout flow in Angular, and the admin order dashboard.',
    features: ['Product catalogue with categories and search', 'Cart, checkout and order history', 'Admin panel for products and orders', 'Secure authentication and input validation'],
    stack: ['ASP.NET Core Web API', 'Angular', 'EF Core', 'SQL Server', 'Bootstrap', 'Azure'],
    github: 'https://github.com/kunalkarde/ecommerce-app',
    demo: '',
  },
  {
    title: 'Dynamic Payment Link Generation System',
    tag: 'Fintech · Payments',
    icon: 'zap',
    overview:
      'A service that generates secure, expiring payment links for invoices and tracks each payment from creation to settlement, with status updates via webhooks.',
    role: 'Designed the link generation API, payment status tracking and the Angular screen used by finance teams.',
    features: ['Unique, expiring payment links per invoice', 'Payment gateway webhook handling', 'Real-time payment status tracking', 'Audit trail and reconciliation reports'],
    stack: ['ASP.NET Core', 'C#', 'Angular', 'SQL Server', 'REST APIs', 'Azure Functions'],
    github: 'https://github.com/kunalkarde/payment-link-generator',
    demo: '',
  },
];

export const EDUCATION: Education[] = [
  {
    degree: 'Bachelor of Engineering in Information Technology',
    institution: 'Priyadarshini College of Engineering',
    location: 'Nagpur, Maharashtra',
    year: '2023', // TODO: add your graduation year
    notes: 'Core coursework in data structures, database management systems, software engineering and web technologies.',
  },
];

export const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];
