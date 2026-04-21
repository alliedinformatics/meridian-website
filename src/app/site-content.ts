export interface NavLink {
  label: string;
  path: string;
}

export type IconName =
  | 'applications'
  | 'analytics'
  | 'cloud'
  | 'managed'
  | 'workflow'
  | 'growth'
  | 'crm'
  | 'supply-chain'
  | 'infrastructure'
  | 'development'
  | 'manufacturing'
  | 'distribution'
  | 'finance'
  | 'healthcare'
  | 'professional-services'
  | 'energy'
  | 'discovery'
  | 'roadmap'
  | 'governance'
  | 'microsoft'
  | 'integration'
  | 'global'
  | 'reliability'
  | 'collaboration'
  | 'planning'
  | 'delivery'
  | 'check'
  | 'arrow-right'
  | 'phone'
  | 'email'
  | 'location';

export interface HeroAction {
  label: string;
  path: string;
  variant?: 'primary' | 'secondary';
}

export interface HeroContent {
  eyebrow?: string;
  title: string;
  description: string;
  actions?: HeroAction[];
  highlights?: string[];
}

export interface PillarItem {
  icon: IconName;
  title: string;
  description: string;
  path: string;
}

export interface OutcomeItem {
  icon: IconName;
  title: string;
  description: string;
}

export interface ServiceCard {
  id: string;
  icon: IconName;
  title: string;
  description: string;
  bullets: string[];
}

export interface IndustryCard {
  icon: IconName;
  title: string;
  description: string;
}

export interface CaseStudyCard {
  category: string;
  title: string;
  challenge: string;
  solution: string;
  outcome: string;
}

export interface PrincipleCard {
  icon: IconName;
  title: string;
  description: string;
}

export interface RoleCard {
  title: string;
  location: string;
  type: string;
  summary: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const siteMeta = {
  companyName: 'Meridian Software Solutions',
  shortName: 'Meridian',
  tagline: 'Microsoft consulting and enterprise solutions',
};

export const mainNavigation: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Industries', path: '/industries' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'About', path: '/about' },
  { label: 'Careers', path: '/careers' },
  // { label: 'Contact', path: '/contact' },
];

export const contactDetails = {
  phone: '(270) 205-4500',
  fax: '(865) 691-3663',
  email: 'contact@meridiansoftsol.com',
  website: 'www.meridiansoftsol.com',
  addressLines: ['3300 Holcomb Bridge Road, Ste 230', 'Peach Tree City, GA 30092', 'United States'],
};

export const homePage = {
  hero: {
    eyebrow: 'Global IT consultancy on the Microsoft platform',
    title: 'Helping enterprises achieve profitable growth with Microsoft solutions',
    description:
      'Meridian Software Solutions is a global IT consultancy dedicated to using the Microsoft platform and proven solutions that help enterprises increase revenue, reduce costs, and reinvest in innovation.',
    actions: [
      { label: 'Contact Us', path: '/contact', variant: 'primary' },
      { label: 'View Services', path: '/services', variant: 'secondary' },
    ],
    highlights: [
      'Microsoft Platform Focus',
      'US and India Delivery',
      'Onsite, Offsite, Offshore Model',
      'Industry-Specific Solutions',
    ],
  } satisfies HeroContent,
  pillars: [
    {
      icon: 'applications',
      title: 'Business Applications',
      description:
        'Plan and improve enterprise workflows across ERP, CRM, and supply chain with consulting aligned to business requirements.',
      path: '/services#business-applications',
    },
    {
      icon: 'analytics',
      title: 'Data & Intelligence',
      description:
        'Strengthen reporting and decision support with data analytics and business intelligence services.',
      path: '/services#data-intelligence',
    },
    {
      icon: 'cloud',
      title: 'Cloud & Infrastructure',
      description:
        'Support cloud advisory, infrastructure optimization, and operating model improvement for enterprise environments.',
      path: '/services#cloud-infrastructure',
    },
    {
      icon: 'managed',
      title: 'Managed Services',
      description:
        'Extend delivery capacity through application outsourcing, infrastructure outsourcing, and BPO services.',
      path: '/services#managed-services',
    },
  ] satisfies PillarItem[],
  outcomes: [
    {
      icon: 'workflow',
      title: 'Reduce operational friction',
      description: 'Align technology and process decisions around a clearer IT operating model.',
    },
    {
      icon: 'analytics',
      title: 'Improve reporting visibility',
      description:
        'Use analytics and BI to provide better insight for business and leadership teams.',
    },
    {
      icon: 'planning',
      title: 'Modernize legacy workflows',
      description:
        'Transform legacy operating models while maintaining continuity across core functions.',
    },
    {
      icon: 'growth',
      title: 'Support profitable growth',
      description:
        'Support growth goals through cost optimization and stronger technology execution.',
    },
  ] satisfies OutcomeItem[],
  featuredEngagement: {
    category: 'Global Engagement Model (GEM)',
    title: 'Onsite, offsite, and offshore delivery across US and India',
    challenge:
      'Enterprises need transformation support without disrupting day-to-day operations or client commitments.',
    solution:
      'Meridian uses an onsite, offsite, and offshore delivery structure with teams in the United States and India to provide round-the-clock support.',
    outcome:
      'Organizations gain flexible resourcing, continuity, and an implementation model that supports long-term modernization.',
  } satisfies CaseStudyCard,
  aboutPreview: {
    title: 'About Meridian Software Solutions',
    description:
      'Meridian is a global consulting and technology services company delivering industry-specific solutions, strategic outsourcing, and integration services.',
    bullets: [
      'Global IT consultancy dedicated to the Microsoft platform',
      'Exclusive onsite, offsite, and offshore delivery model',
      'Offices in the United States and India',
    ],
  },
};

export const servicesPage = {
  hero: {
    eyebrow: 'Services',
    title: 'Consulting, outsourcing, and e-business services',
    description:
      'Meridian service offerings are organized across consulting, outsourcing, and e-business capabilities designed to improve operational performance and business outcomes.',
  } satisfies HeroContent,
  serviceCards: [
    {
      id: 'business-applications',
      icon: 'applications',
      title: 'ERP Solutions',
      description:
        'Align enterprise processes and core workflows through ERP solution consulting and implementation support.',
      bullets: [
        'Enterprise process and workflow alignment',
        'Support for financial and operational functions',
        'Integration-oriented solution planning',
      ],
    },
    {
      id: 'crm-solutions',
      icon: 'crm',
      title: 'CRM Solutions',
      description:
        'Improve customer processes with CRM strategy and solution support that helps teams meet and exceed expectations.',
      bullets: [
        'Customer relationship management strategy',
        'Customer-facing process optimization',
        'Sales and service workflow improvement',
      ],
    },
    {
      id: 'supply-chain',
      icon: 'supply-chain',
      title: 'Supply Chain Solutions',
      description:
        'Support supply chain planning and execution across purchasing, distribution, fulfillment, and related operations.',
      bullets: [
        'Planning and process coordination',
        'Order and fulfillment visibility',
        'Operational responsiveness for changing demand',
      ],
    },
    {
      id: 'cloud-infrastructure',
      icon: 'cloud',
      title: 'Cloud Advisory',
      description:
        'Guide cloud planning with attention to cost, architecture, and operational readiness.',
      bullets: [
        'Cloud advisory services',
        'Roadmap and architecture planning',
        'Migration and operations considerations',
      ],
    },
    {
      id: 'data-intelligence',
      icon: 'analytics',
      title: 'Data Analytics / BI',
      description:
        'Strengthen reporting and decision support through data analytics and business intelligence services.',
      bullets: [
        'Analytics for business decisions',
        'Business intelligence enablement',
        'Reporting visibility improvements',
      ],
    },
    {
      id: 'infrastructure-optimization',
      icon: 'infrastructure',
      title: 'Infrastructure Optimization',
      description:
        'Assess and optimize enterprise infrastructure to improve performance, resilience, and cost control.',
      bullets: [
        'Infrastructure assessment and optimization',
        'Performance and reliability improvements',
        'Cost-aware platform modernization',
      ],
    },
    {
      id: 'managed-services',
      icon: 'managed',
      title: 'Outsourcing / BPO',
      description:
        'Scale delivery through application outsourcing, infrastructure outsourcing, and specialized BPO services.',
      bullets: [
        'Application and infrastructure outsourcing',
        'Finance, procurement, healthcare, and insurance BPO',
        'Global delivery and round-the-clock support',
      ],
    },
    {
      id: 'application-solutions',
      icon: 'development',
      title: 'Application / E-Business Solutions',
      description:
        'Deliver application development and e-business solutions for B2B and B2C use cases.',
      bullets: [
        'Application development services',
        'B2B and B2C solution support',
        'Integration with enterprise systems',
      ],
    },
  ] satisfies ServiceCard[],
};

export const industriesPage = {
  hero: {
    eyebrow: 'Industries',
    title: 'Industry-specific solutions for enterprise clients',
    description:
      'Meridian highlights delivery experience across sectors including telecommunications, retail, healthcare, and government.',
  } satisfies HeroContent,
  industries: [
    {
      icon: 'manufacturing',
      title: 'Telecommunications',
      description:
        'Support enterprise systems and operations in communication-focused environments with high reliability requirements.',
    },
    {
      icon: 'distribution',
      title: 'Retail',
      description:
        'Improve process visibility, customer operations, and technology-enabled decision making in retail organizations.',
    },
    {
      icon: 'finance',
      title: 'Healthcare',
      description:
        'Enable operational and administrative improvements through integrated applications and process support.',
    },
    {
      icon: 'healthcare',
      title: 'Government',
      description:
        'Deliver consulting and technology support for public-sector organizations with complex systems and process needs.',
    },
    {
      icon: 'professional-services',
      title: 'Corporations and Integrators',
      description:
        'Support corporations, consulting firms, system integrators, and vendors through long-term delivery partnerships.',
    },
    {
      icon: 'energy',
      title: 'Cross-Industry Enterprise Programs',
      description:
        'Apply a common delivery framework across multiple industries where integration, outsourcing, and operational continuity matter.',
    },
  ] satisfies IndustryCard[],
  approach: [
    {
      icon: 'discovery',
      title: 'Industry context first',
      description:
        'Engagements begin with the operating realities and requirements of each client sector.',
    },
    {
      icon: 'roadmap',
      title: 'Integrated service model',
      description:
        'Consulting, outsourcing, and integration services are planned as connected workstreams.',
    },
    {
      icon: 'governance',
      title: 'Global Engagement Model',
      description:
        'Onsite, offsite, and offshore delivery enables flexible execution and round-the-clock support.',
    },
  ] satisfies PrincipleCard[],
};

export const caseStudiesPage = {
  hero: {
    eyebrow: 'Case Studies',
    title: 'Client relationships and delivery themes',
    description:
      'Meridian highlights lasting relationships with corporations, consulting firms, system integrators, and vendors across enterprise transformation programs.',
  } satisfies HeroContent,
  studies: [
    {
      category: 'Business applications',
      title: 'Enterprise process alignment across core systems',
      challenge:
        'Enterprises need ERP, CRM, supply chain, and analytics to work together without fragmented implementation efforts.',
      solution:
        'Meridian combines consulting and integration services to align core platforms around shared business requirements.',
      outcome:
        'Organizations gain clearer execution across applications, processes, and modernization priorities.',
    },
    {
      category: 'Strategic outsourcing',
      title: 'Global delivery support for operational continuity',
      challenge:
        'Large organizations require ongoing application, infrastructure, and BPO support without interrupting operations.',
      solution:
        'Meridian applies its Global Engagement Model with teams in the United States and India to provide onsite, offsite, and offshore support.',
      outcome:
        'Clients gain round-the-clock support, flexible staffing, and stronger continuity across programs.',
    },
    {
      category: 'Client relationships',
      title: 'Consulting shaped around long-term enterprise partnerships',
      challenge:
        'Enterprise initiatives involve varied stakeholders and delivery partners with different process and system needs.',
      solution:
        'Meridian emphasizes persistent support, industry-specific services, and collaboration with client teams and partner organizations.',
      outcome:
        'Engagements are built as durable partnerships with repeatable service quality and delivery alignment.',
    },
  ] satisfies CaseStudyCard[],
};

export const aboutPage = {
  hero: {
    eyebrow: 'About Meridian',
    title: 'A global consulting and technology services company',
    description:
      'Meridian Software Solutions is a global IT consultancy dedicated to using the Microsoft platform to help enterprises achieve profitable growth.',
  } satisfies HeroContent,
  story:
    'As a global consulting and technology services company, Meridian offers industry-specific solutions, strategic outsourcing, and integration services through an exclusive onsite, offsite, offshore delivery model.',
  whyMeridian: [
    {
      icon: 'microsoft',
      title: 'Microsoft-focused consulting',
      description:
        'Meridian is dedicated to helping enterprises use the Microsoft platform to improve business performance and growth.',
    },
    {
      icon: 'integration',
      title: 'Integrated business solution mindset',
      description:
        'The firm combines consulting, integration, and outsourcing services across ERP, CRM, supply chain, analytics, and infrastructure.',
    },
    {
      icon: 'global',
      title: 'Global delivery perspective',
      description:
        'Meridian operates from offices in the United States and India to support global client programs.',
    },
    {
      icon: 'reliability',
      title: 'Reliable, structured delivery',
      description:
        'The delivery model is designed for continuity, responsiveness, and measurable support across enterprise engagements.',
    },
  ] satisfies PrincipleCard[],
  approach: [
    {
      icon: 'collaboration',
      title: 'Understand the environment',
      description:
        'Start with business requirements, current systems, and the client environment before recommending change.',
    },
    {
      icon: 'roadmap',
      title: 'Define the roadmap',
      description:
        'Translate goals into a structured plan spanning applications, reporting, infrastructure, and delivery.',
    },
    {
      icon: 'delivery',
      title: 'Support execution',
      description:
        'Execute through consulting, integration, and outsourcing support tailored to engagement needs.',
    },
    {
      icon: 'planning',
      title: 'Sustain improvement',
      description:
        'Support long-term outcomes through repeatable services and ongoing operational support.',
    },
  ] satisfies PrincipleCard[],
  deliveryProfile:
    'Meridian maintains offices in the United States and India and uses a Global Engagement Model to deliver onsite, offsite, and offshore services.',
};

export const careersPage = {
  hero: {
    eyebrow: 'Careers',
    title: 'Grow your career with Meridian',
    description:
      'Meridian careers content highlights professional growth, strong team culture, and opportunities to work on enterprise consulting and technology programs.',
    actions: [
      {
        label: 'Contact Recruiting',
        path: 'mailto:contact@meridiansoftsol.com',
        variant: 'primary',
      },
    ],
  } satisfies HeroContent,
  values: [
    {
      icon: 'growth',
      title: 'Professional growth',
      description:
        'Career opportunities emphasize learning, growth, and exposure to evolving enterprise technologies and client engagements.',
    },
    {
      icon: 'collaboration',
      title: 'Collaborative culture',
      description:
        'The culture emphasizes teamwork, respect, and recognition of individual contributions within a healthy work-life balance.',
    },
    {
      icon: 'global',
      title: 'Global perspective',
      description:
        'Employees collaborate across teams and clients in the United States and India through a global delivery model.',
    },
  ] satisfies PrincipleCard[],
  roles: [
    {
      title: 'Sr. Project Systems Analyst',
      location: 'United States',
      type: 'Full Time',
      summary:
        'Application and infrastructure analysis, technical specification work, and project-oriented delivery support across enterprise IT programs.',
    },
    {
      title: 'Software Engineer',
      location: 'United States',
      type: 'Full Time',
      summary:
        'Software development role covering requirements, solution design, implementation, and lifecycle delivery across enterprise environments.',
    },
    {
      title: 'Computer Systems Analyst',
      location: 'United States',
      type: 'Full Time',
      summary:
        'Systems analysis support spanning network integrity, reporting, troubleshooting, and business process technology alignment.',
    },
    {
      title: 'Computer Systems Engineer',
      location: 'United States',
      type: 'Full Time',
      summary:
        'Systems engineering support for operating systems, applications, architecture verification, and enterprise environment configuration.',
    },
    {
      title: 'Computer Programmer Analyst',
      location: 'United States',
      type: 'Full Time',
      summary:
        'Programming and technical leadership across enterprise software applications, code review, and implementation support.',
    },
  ] satisfies RoleCard[],
  expectations: [
    'Meridian careers content references competitive salary and comprehensive benefits.',
    'Additional benefits in source material include PPO medical coverage and paid holiday policies.',
    'Resume submissions and role inquiries can be directed to contact@meridiansoftsol.com.',
  ],
};

export const contactPage = {
  hero: {
    eyebrow: 'Contact',
    title: 'Contact Meridian Software Solutions',
    description:
      'Whether you are evaluating modernization, business applications, analytics, cloud planning, or managed services, Meridian can help frame the next conversation.',
  } satisfies HeroContent,
  inquiryExpectations: [
    {
      question: 'What should I include in an inquiry?',
      answer:
        'Share your current environment, the services needed, and your timeline so Meridian can route your inquiry to the right team.',
    },
    {
      question: 'What topics can Meridian support?',
      answer:
        'Source services include consulting, outsourcing, and e-business capabilities across ERP, CRM, supply chain, cloud, analytics, infrastructure, application development, and BPO.',
    },
    {
      question: 'Can I ask about careers here as well?',
      answer:
        'Yes. General career inquiries and resume submissions can be sent to contact@meridiansoftsol.com.',
    },
  ] satisfies FaqItem[],
  officeNote:
    'Corporate Office: 3300 Holcomb Bridge Road, Ste 230, Peach Tree City, GA 30092. Meridian also operates from India as part of its global delivery footprint.',
};
