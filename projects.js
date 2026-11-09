window.portfolioCv = null;

window.portfolioProjects = [
  {
    number: '01',
    reverse: false,
    status: 'Academic final-year thesis project',
    category: 'WEB APPLICATION',
    title: 'Kibaza Rwanda Heritage System',
    subtitle: 'A web-based genealogy and digital archive system',
    description: 'Academic work exploring how digital tools can preserve Rwandan family histories, genealogy, clan information, and cultural heritage.',
    visual: {
      kind: 'image',
      src: 'assets/images/kibaza-preview.svg',
      alt: 'Illustrative concept preview of a family genealogy archive interface; not a product screenshot',
      label: '01 / FINAL-YEAR THESIS',
      note: 'Illustrative concept, not a deployed product screenshot',
    },
    details: [
      {
        heading: 'Project scope',
        items: [
          'Family information and genealogy management',
          'Recursive family-tree visualization',
          'Digital heritage archiving',
          'User roles and access management',
        ],
      },
      {
        heading: 'Contribution',
        text: 'Designed and built independently as my final-year thesis project.',
        kind: 'contribution',
      },
      {
        heading: 'Technologies',
        items: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
        kind: 'technologies',
      },
    ],
    repository: {
      href: 'https://github.com/Alimence-dev/FAMILT-TREE-HERTAGE',
      label: 'View public repository',
    },
  },
  {
    number: '02',
    reverse: true,
    status: 'Under development',
    statusType: 'progress',
    category: 'DATA & MACHINE LEARNING',
    title: 'Customer Churn Analytics System',
    subtitle: 'Customer insights and churn prediction',
    description: 'An application in development to analyze customer behavior, identify churn patterns, and support data-informed business decisions.',
    visual: {
      kind: 'image',
      src: 'assets/images/churn-preview.svg',
      alt: 'Illustrative concept preview of a customer churn analytics dashboard; no live data or production application',
      label: '02 / UNDER DEVELOPMENT',
      note: 'Illustrative concept, not a product screenshot',
    },
    details: [
      {
        heading: 'Planned features',
        items: [
          'Customer analytics dashboard and data visualization',
          'Churn prediction with explainable model insights',
          'Role-based access',
          'AI API integration',
        ],
      },
      {
        heading: 'Contribution & current status',
        text: 'Built independently and still under development; listed features remain planned and are not presented as production-ready.',
        kind: 'contribution',
      },
      {
        heading: 'Planned technologies',
        items: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'XGBoost', 'SHAP', 'AI API integration'],
        kind: 'technologies',
      },
    ],
    repository: null,
  },
  {
    number: '03',
    reverse: true,
    status: 'Academic dissertation project',
    category: 'RESOURCE DISTRIBUTION',
    title: 'Mahama Camp Resource Distribution System',
    subtitle: 'A documented system for managing family resource distribution',
    description: 'The repository user manual describes role-based workflows for coordinating resources in Mahama Camp, from family registration and inventory through request review and recorded distribution.',
    visual: {
      kind: 'panel',
      kicker: 'MAHAMA CAMP',
      heading: 'Resources\nto families,\ntracked.',
      stack: 'FAMILIES / INVENTORY / DISTRIBUTION',
      label: '03 / PUBLIC ACADEMIC REPOSITORY',
      note: 'System overview, not a product screenshot',
    },
    details: [
      {
        heading: 'Documented capabilities',
        items: [
          'Admin, Volunteer, Manager, and Donor roles',
          'Family records, inventory, and resource requests',
          'Request approval and distribution tracking',
          'CSV reports and SMS or printable voucher notifications',
        ],
      },
      {
        heading: 'Contribution',
        text: 'Designed and built independently as an academic dissertation project.',
        kind: 'contribution',
      },
      {
        heading: 'Repository stack',
        items: ['React', 'Vite', 'Node.js', 'Express', 'MySQL', 'Socket.IO'],
        kind: 'technologies',
      },
    ],
    repository: {
      href: 'https://github.com/Alimence-dev/mahama',
      label: 'View public repository',
    },
  },
];