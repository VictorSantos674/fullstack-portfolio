export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
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

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  activities: string[];
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
    id: 1,
    title: 'TenantFlow',
    description: 'Em breve.',
    longDescription: 'Em breve.',
    tech: [],
    tags: [],
    github: null,
    demo: null,
  },
  {
    id: 2,
    title: 'App Mobile',
    description: 'Em breve.',
    longDescription: 'Em breve.',
    tech: [],
    tags: [],
    github: null,
    demo: null,
  },
  {
    id: 3,
    title: 'Sistema de Controle de Gastos Residenciais',
    description: 'Em breve.',
    longDescription: 'Em breve.',
    tech: [],
    tags: [],
    github: null,
    demo: null,
  },
  {
    id: 4,
    title: 'Portfolio Pessoal',
    description:
      'Este próprio portfolio, desenvolvido como vitrine de habilidades frontend modernas.',
    longDescription:
      'Portfolio desenvolvido com React + TypeScript + Vite + Tailwind CSS, apresentando animações suaves com Framer Motion e design responsivo. O projeto demonstra domínio de componentização, tipagem forte com TypeScript e estilização moderna com Tailwind CSS.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/VictorSantos674/fullstack-portfolio',
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

export const experiences: Experience[] = [
  {
    company: 'Blue Technology',
    role: 'Desenvolvedor Fullstack Jr',
    period: 'Jan 2025 – Abr 2026',
    location: 'Recife, PE',
    activities: [
      'Desenvolvimento de aplicações fullstack com .NET 9 e React/TypeScript',
      'Implementação de APIs REST com ASP.NET Core e Entity Framework 9',
      'Aplicação de Clean Architecture e Domain-Driven Design',
      'Colaboração em equipe com GitLab e Azure DevOps',
    ],
  },
  {
    company: 'TJPE – SETIC',
    role: 'Estagiário de Desenvolvimento',
    period: 'Jun 2023 – Dez 2024',
    location: 'Recife, PE',
    activities: [
      'Participação na migração de sistemas Delphi legados para .NET 9 e React',
      'Desenvolvimento de módulos de gestão de estoque, patrimônio e chamados',
      'Criação de interfaces modernas com React + TypeScript + Ant Design',
      'Geração de relatórios com jsPDF e jsCanvas',
    ],
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
