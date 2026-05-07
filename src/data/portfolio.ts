export interface Project {
  id: number;
  title: string;
  tech: string[];
  tags: string[];
  github: string | null;
  demo: string | null;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
}

export interface Language {
  name: string;
  level: string;
}

export const projects: Project[] = [
  {
    id: 6,
    title: 'Auditrek',
    tech: [
      'Next.js',
      'React',
      'TypeScript',
      'Fastify',
      'tRPC',
      'Zod',
      'Prisma',
      'PostgreSQL',
      'Clerk',
      'Turborepo',
      'Tailwind CSS',
    ],
    tags: ['Next.js', 'tRPC', 'PostgreSQL', 'Prisma'],
    github: 'https://github.com/VictorSantos674/auditrek',
    demo: 'https://auditrek-web.vercel.app/',
  },
  {
    id: 5,
    title: 'FeedbackLoop',
    tech: [
      '.NET 8',
      'ASP.NET Core',
      'Entity Framework Core',
      'PostgreSQL',
      'JWT',
      'React',
      'TypeScript',
      'TanStack Query',
      'Zustand',
      'Docker',
      'GitHub Actions',
    ],
    tags: ['.NET', 'React', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/VictorSantos674/FeedbackLoop',
    demo: null,
  },
  {
    id: 3,
    title: 'Sistema de Controle de Gastos Residenciais',
    tech: [
      'C#',
      'ASP.NET Core',
      'Entity Framework Core',
      'SQLite',
      'JWT',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Axios',
      'React Router',
      'jsPDF',
      'Vite',
    ],
    tags: ['.NET', 'React', 'SQLite'],
    github: 'https://github.com/VictorSantos674/sistema-controle-gastos-residenciais',
    demo: 'https://sistema-controle-gastos-residencial.vercel.app/login',
  },
  {
    id: 1,
    title: 'TenantFlow',
    tech: [],
    tags: ['WIP'],
    github: null,
    demo: null,
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: 'Backend',
    icon: 'Server',
    skills: ['C#', '.NET 9', 'ASP.NET Core', 'Entity Framework 9', 'REST APIs', 'DDD', 'TDD', 'Repository Pattern', 'CQRS'],
  },
  {
    category: 'Frontend',
    icon: 'Monitor',
    skills: ['React', 'TypeScript', 'Vue.js', 'React Query', 'Ant Design', 'Tailwind CSS', 'HTML/CSS'],
  },
  {
    category: 'Database & DevOps',
    icon: 'Database',
    skills: ['SQL Server', 'Git', 'GitLab', 'Azure DevOps', 'Docker'],
  },
  {
    category: 'Tools',
    icon: 'Wrench',
    skills: ['jsPDF', 'jsCanvas', 'Swagger', 'Postman'],
  },
];

export const education: Education[] = [
  {
    degree: 'Bacharelado em Ciência da Computação',
    institution: 'UNICAP',
    period: '2022 – 2026',
    location: 'Recife, PE',
  },
];

export const languages: Language[] = [
  { name: 'Inglês', level: 'Profissional' },
  { name: 'Espanhol', level: 'Intermediário' },
];
