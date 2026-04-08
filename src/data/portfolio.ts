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
    title: 'Sistema de Gestão TJPE',
    description:
      'Modernização de sistema legado Delphi para plataforma web moderna no TJPE/SETIC.',
    longDescription:
      'Projeto de grande escala que envolveu a migração completa de módulos de gestão do Tribunal de Justiça de Pernambuco. Utilizamos Clean Architecture e Domain-Driven Design para garantir escalabilidade, com .NET 9 no backend e React + TypeScript no frontend. Módulos incluem gestão de estoque, patrimônio e abertura de chamados.',
    tech: ['.NET 9', 'React', 'TypeScript', 'SQL Server', 'Clean Architecture', 'DDD'],
    tags: ['.NET', 'React', 'TypeScript', 'SQL Server'],
    github: '#',
    demo: null,
  },
  {
    id: 2,
    title: 'Plataforma Blue Technology',
    description:
      'Sistema fullstack desenvolvido na Blue Technology com arquitetura limpa e integrações REST.',
    longDescription:
      'Sistema fullstack corporativo desenvolvido durante atuação na Blue Technology. A plataforma utiliza .NET 9 com ASP.NET Core no backend e Vue.js + TypeScript no frontend. Implementa Clean Architecture, Entity Framework Core para persistência, e integrações REST com serviços externos.',
    tech: ['.NET 9', 'Vue.js', 'TypeScript', 'EF Core', 'REST API'],
    tags: ['.NET', 'Vue.js', 'TypeScript', 'EF Core'],
    github: '#',
    demo: null,
  },
  {
    id: 3,
    title: 'Portfolio Pessoal',
    description:
      'Este próprio portfolio, desenvolvido como vitrine de habilidades frontend modernas.',
    longDescription:
      'Portfolio desenvolvido com React + TypeScript + Vite + Tailwind CSS, apresentando animações suaves com Framer Motion e design responsivo. O projeto demonstra domínio de componentização, tipagem forte com TypeScript e estilização moderna com Tailwind CSS.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/victorss14/fullstack-portfolio',
    demo: '#',
  },
  {
    id: 4,
    title: 'API E-commerce REST',
    description:
      'API RESTful completa com autenticação JWT, documentação Swagger e arquitetura em camadas.',
    longDescription:
      'API RESTful completa para e-commerce construída com ASP.NET Core e .NET 9. Implementa autenticação e autorização via JWT, documentação automática com Swagger/OpenAPI, persistência com SQL Server e Entity Framework Core, e arquitetura em camadas (Controller, Service, Repository).',
    tech: ['.NET 9', 'ASP.NET Core', 'JWT', 'Swagger', 'SQL Server'],
    tags: ['.NET', 'REST API', 'JWT', 'Swagger'],
    github: '#',
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
