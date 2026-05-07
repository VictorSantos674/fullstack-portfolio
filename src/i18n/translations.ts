export type Language = 'pt' | 'en';

export interface Translations {
  nav: { home: string; about: string; skills: string; projects: string; experience: string; contact: string };
  hero: { greeting: string; subtitle: string; description: string; viewProjects: string; contact: string };
  about: {
    title: string; p1: string; p2: string; p3: string;
    quickFacts: string; yearsExp: string; yearsExpLabel: string;
    projectsLabel: string; companiesLabel: string; educationNote: string;
  };
  skills: { title: string; subtitle: string };
  projects: {
    title: string; subtitle: string; all: string; details: string; techStack: string; viewDemo: string;
    items: Record<number, { description: string; longDescription: string }>;
  };
  experience: {
    title: string; subtitle: string;
    entries: Array<{
      role: string;
      company: string;
      period: string;
      location: string;
      activities: string[];
    }>;
  };
  education: {
    title: string; languagesTitle: string; degree: string;
    languagesList: Array<{ name: string; level: string }>;
  };
  contact: {
    title: string; subtitle: string; locationLabel: string;
    nameLabel: string; namePlaceholder: string; emailLabel: string;
    messagePlaceholder: string; messageLabel: string;
    send: string; sending: string; sent: string; errorMsg: string;
    nameRequired: string; emailRequired: string; emailInvalid: string; messageRequired: string;
    copy: string; copied: string;
  };
  footer: { tagline: string; quickLinks: string; builtWith: string; rights: string; madeWith: string };
}

const translations: Record<Language, Translations> = {
  pt: {
    nav: {
      home: 'Início',
      about: 'Sobre',
      skills: 'Habilidades',
      projects: 'Projetos',
      experience: 'Experiência',
      contact: 'Contato',
    },
    hero: {
      greeting: 'Olá, sou',
      subtitle: 'Desenvolvedor Fullstack .NET',
      description:
        'Construo sistemas fullstack em .NET moderno e React — do modelo de domínio ao deploy, com Clean Architecture, DDD e testes integrados desde o primeiro commit.',
      viewProjects: 'Ver Projetos',
      contact: 'Contato',
    },
    about: {
      title: 'Sobre Mim',
      p1: 'Desenvolvedor fullstack com dois anos de experiência em produção real — não apenas em projetos pessoais. Construí features que passaram a servir usuários internos no TJPE/SETIC e apliquei Clean Architecture e DDD em entregas para clientes na Blue Technology.',
      p2: 'No TJPE/SETIC, contribuí na migração de sistemas Delphi legados para uma stack moderna em .NET 9 e React, entregando módulos de gestão de estoque, patrimônio e chamados que passaram a servir usuários internos do tribunal.',
      p3: 'Na Blue Technology, atuei como Desenvolvedor Fullstack Jr aplicando Clean Architecture, Domain-Driven Design e melhores práticas de engenharia em entregas reais — design de APIs em ASP.NET Core, interfaces em React/TypeScript e colaboração via GitLab e Azure DevOps.',
      quickFacts: 'Fatos Rápidos',
      yearsExp: '2+ anos',
      yearsExpLabel: 'de experiência',
      projectsLabel: 'projetos',
      companiesLabel: 'empresas',
      educationNote:
        'Cursando Bacharelado em Ciência da Computação na UNICAP, Recife/PE — conclusão prevista para 2026.',
    },
    skills: {
      title: 'Habilidades',
      subtitle:
        'Stack que uso para desenhar APIs, painéis administrativos e interfaces internas — do banco de dados à camada de apresentação.',
    },
    projects: {
      title: 'Projetos',
      subtitle:
        'Projetos que entreguei do design do domínio ao deploy — código no GitHub e, quando possível, demos rodando.',
      all: 'Todos',
      details: 'Detalhes',
      techStack: 'Stack Tecnológico',
      viewDemo: 'Ver Demo',
      items: {
        1: {
          description: 'Em construção — atualização em breve.',
          longDescription: 'Em construção — atualização em breve.',
        },
        5: {
          description:
            'Plataforma de feedback de produto multi-tenant com widget embarcável e isolamento de workspace ponta a ponta.',
          longDescription:
            'Coleta de feedback nos moldes do Canny, hospedável pelo cliente. Cada workspace opera como tenant isolado, com painel administrativo separado do widget que cada cliente embeda no próprio site.\n\nA parte interessante é o isolamento real entre workspaces, refresh tokens com hash SHA-256 e testes de integração rodando contra o próprio app via WebApplicationFactory — não mocks. O widget e o admin compartilham backend mas distribuem como bundles separados.\n\nEngenharia: Docker Compose para subir o stack inteiro local, health checks, GitHub Actions com coverage gate e smoke test de containers a cada push.',
        },
        6: {
          description:
            'Log de auditoria corporativo com Event Sourcing e timeline visual de quem alterou o que e quando.',
          longDescription:
            'Sistemas corporativos precisam de uma trilha imutável e replayável de alterações em entidades sensíveis — quem editou, quando e qual era o estado anterior. Auditrek resolve isso com Event Sourcing.\n\nEventos de criação, alteração e exclusão são a fonte de verdade. O estado atual é reconstruído a partir deles, e a timeline mostra ator, data, diff de campos e o estado completo reconstruído em cada ponto. Isso permite responder perguntas como "como esse produto estava em janeiro?" sem snapshots manuais.\n\nStack: monorepo Turborepo + pnpm, frontend Next.js, API Fastify com tRPC e Zod, Prisma Client Extension, PostgreSQL no Neon, Clerk para autenticação. Deploy split entre Vercel (front) e Railway (API). Demo ao vivo disponível.',
        },
        3: {
          description:
            'Controle de gastos residenciais com isolamento de dados por usuário, regras de validação por contexto e exportação em PDF.',
          longDescription:
            'Controle financeiro doméstico onde cada perfil enxerga apenas os próprios dados — pessoas, categorias e transações ficam isolados na camada de API, não só na UI. Importante quando a alternativa seria confiar em filtros do frontend.\n\nA parte interessante são as regras de validação que variam por tipo de transação e faixa etária da pessoa envolvida — lógica de domínio real, não validação de formulário. Relatórios por pessoa e por categoria saem em PDF via jsPDF.\n\nStack: C# / ASP.NET Core 10, EF Core, SQLite, JWT com BCrypt, React + TypeScript + Tailwind. Deploy Railway via Dockerfile customizado para o backend, Vercel com SPA routing para o frontend. Demo ao vivo disponível.',
        },
      },
    },
    experience: {
      title: 'Experiência',
      subtitle: 'Trajetória profissional construindo software que rodou em produção.',
      entries: [
        {
          role: 'Desenvolvedor Fullstack Jr',
          company: 'Blue Technology',
          period: 'Jan 2025 – Abr 2026',
          location: 'Recife, PE',
          activities: [
            'Entreguei features fullstack em .NET 9 + React/TypeScript, da modelagem do domínio ao deploy.',
            'Implementei APIs REST com ASP.NET Core e Entity Framework 9, com foco em separação de camadas e testabilidade.',
            'Apliquei Clean Architecture e Domain-Driven Design em código que rodou em produção, não em estudos isolados.',
            'Colaborei em fluxos de revisão de código e integração contínua via GitLab e Azure DevOps.',
          ],
        },
        {
          role: 'Estagiário de Desenvolvimento',
          company: 'TJPE – SETIC',
          period: 'Jun 2023 – Dez 2024',
          location: 'Recife, PE',
          activities: [
            'Migrei módulos críticos de Delphi legado para .NET 9 + React, sem interromper o uso pelos servidores do tribunal.',
            'Construí interfaces de gestão de estoque, patrimônio e chamados com React, TypeScript e Ant Design.',
            'Modelei endpoints REST e camadas de acesso a dados em ASP.NET Core para sustentar os novos módulos.',
            'Gerei relatórios institucionais com jsPDF e jsCanvas a partir dos dados migrados.',
          ],
        },
      ],
    },
    education: {
      title: 'Formação & Idiomas',
      languagesTitle: 'Idiomas',
      degree: 'Bacharelado em Ciência da Computação',
      languagesList: [
        { name: 'Inglês', level: 'Profissional' },
        { name: 'Espanhol', level: 'Intermediário' },
      ],
    },
    contact: {
      title: 'Contato',
      subtitle:
        'Aberto a oportunidades full-time, projetos por contrato e conversas técnicas — sinta-se à vontade para enviar uma mensagem.',
      locationLabel: 'Localização',
      nameLabel: 'Nome',
      namePlaceholder: 'Seu nome',
      emailLabel: 'Email',
      messagePlaceholder: 'Sua mensagem...',
      messageLabel: 'Mensagem',
      send: 'Enviar Mensagem',
      sending: 'Enviando...',
      sent: 'Mensagem enviada!',
      errorMsg: 'Erro ao enviar mensagem. Tente novamente.',
      nameRequired: 'Nome obrigatório',
      emailRequired: 'Email obrigatório',
      emailInvalid: 'Email inválido',
      messageRequired: 'Mensagem obrigatória',
      copy: 'Copiar',
      copied: 'Copiado!',
    },
    footer: {
      tagline: 'Desenvolvedor Fullstack .NET | React — Recife, PE',
      quickLinks: 'Links Rápidos',
      builtWith: 'Feito com',
      rights: '© 2026 Victor Souza Santos. Todos os direitos reservados.',
      madeWith: 'Feito com',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hello, I'm",
      subtitle: 'Fullstack .NET Developer',
      description:
        'I build fullstack systems in modern .NET and React — from domain model to deploy, with Clean Architecture, DDD, and integration tests in place from the first commit.',
      viewProjects: 'View Projects',
      contact: 'Contact',
    },
    about: {
      title: 'About Me',
      p1: 'Fullstack developer with two years of production experience — not just side projects. I built features that went on to serve internal users at TJPE/SETIC and applied Clean Architecture and DDD on real client deliveries at Blue Technology.',
      p2: 'At TJPE/SETIC, I contributed to migrating legacy Delphi systems to a modern .NET 9 + React stack, shipping inventory, asset, and ticketing modules that now serve internal court users.',
      p3: 'At Blue Technology, I worked as a Junior Fullstack Developer applying Clean Architecture, Domain-Driven Design, and engineering best practices on real deliveries — ASP.NET Core API design, React/TypeScript interfaces, and collaboration through GitLab and Azure DevOps.',
      quickFacts: 'Quick Facts',
      yearsExp: '2+ years',
      yearsExpLabel: 'of experience',
      projectsLabel: 'projects',
      companiesLabel: 'companies',
      educationNote:
        "Pursuing a Bachelor's in Computer Science at UNICAP, Recife/PE — expected graduation 2026.",
    },
    skills: {
      title: 'Skills',
      subtitle:
        'The stack I use to design APIs, admin dashboards, and internal interfaces — from the database to the presentation layer.',
    },
    projects: {
      title: 'Projects',
      subtitle:
        'Projects I shipped from domain design to deploy — code on GitHub and, where possible, live demos.',
      all: 'All',
      details: 'Details',
      techStack: 'Tech Stack',
      viewDemo: 'View Demo',
      items: {
        1: {
          description: 'Under construction — coming soon.',
          longDescription: 'Under construction — coming soon.',
        },
        5: {
          description:
            'Multi-tenant product feedback platform with embeddable widget and end-to-end workspace isolation.',
          longDescription:
            'Canny-style feedback collection, self-hostable by the client. Each workspace runs as an isolated tenant, with an admin dashboard separated from the widget that each customer embeds on their own site.\n\nThe interesting part is real cross-workspace isolation, SHA-256-hashed refresh tokens, and integration tests running against the actual app through WebApplicationFactory — not mocks. The widget and admin share a backend but ship as separate bundles.\n\nEngineering: Docker Compose to bring up the full stack locally, health checks, GitHub Actions with a coverage gate and container smoke tests on every push.',
        },
        6: {
          description:
            'Corporate audit log with Event Sourcing and a visual timeline of who changed what and when.',
          longDescription:
            'Corporate systems need an immutable, replayable trail of changes to sensitive entities — who edited, when, and what the prior state looked like. Auditrek solves this with Event Sourcing.\n\nCreate, update, and delete events are the source of truth. Current state is reconstructed from them, and the timeline shows actor, date, field-level diff, and the full reconstructed state at each point. That makes it possible to answer questions like "how did this product look in January?" without manual snapshots.\n\nStack: Turborepo + pnpm monorepo, Next.js frontend, Fastify API with tRPC and Zod, Prisma Client Extension, PostgreSQL on Neon, Clerk for auth. Deploy split between Vercel (front) and Railway (API). Live demo available.',
        },
        3: {
          description:
            'Residential expense tracker with per-user data isolation, context-aware validation rules, and PDF export.',
          longDescription:
            'Household expense tracking where each profile sees only its own data — people, categories, and transactions are isolated at the API layer, not just in the UI. That matters when the alternative would be trusting frontend filters.\n\nThe interesting part is validation rules that vary by transaction type and the age group of the person involved — real domain logic, not form validation. Per-person and per-category reports export to PDF via jsPDF.\n\nStack: C# / ASP.NET Core 10, EF Core, SQLite, JWT with BCrypt, React + TypeScript + Tailwind. Deploy on Railway via custom Dockerfile for the backend, Vercel with SPA routing for the frontend. Live demo available.',
        },
      },
    },
    experience: {
      title: 'Experience',
      subtitle: 'Professional path building software that ran in production.',
      entries: [
        {
          role: 'Junior Fullstack Developer',
          company: 'Blue Technology',
          period: 'Jan 2025 – Apr 2026',
          location: 'Recife, PE',
          activities: [
            'Shipped fullstack features in .NET 9 + React/TypeScript, from domain modeling to deploy.',
            'Implemented REST APIs with ASP.NET Core and Entity Framework 9, focused on layer separation and testability.',
            'Applied Clean Architecture and Domain-Driven Design in code that ran in production, not in isolated exercises.',
            'Collaborated in code review and continuous integration flows via GitLab and Azure DevOps.',
          ],
        },
        {
          role: 'Development Intern',
          company: 'TJPE – SETIC',
          period: 'Jun 2023 – Dec 2024',
          location: 'Recife, PE',
          activities: [
            'Migrated critical legacy Delphi modules to .NET 9 + React without disrupting use by court staff.',
            'Built inventory, asset, and ticketing management interfaces with React, TypeScript, and Ant Design.',
            'Modeled REST endpoints and data-access layers in ASP.NET Core to back the new modules.',
            'Generated institutional reports with jsPDF and jsCanvas from the migrated data.',
          ],
        },
      ],
    },
    education: {
      title: 'Education & Languages',
      languagesTitle: 'Languages',
      degree: "Bachelor's in Computer Science",
      languagesList: [
        { name: 'English', level: 'Professional' },
        { name: 'Spanish', level: 'Intermediate' },
      ],
    },
    contact: {
      title: 'Contact',
      subtitle:
        'Open to full-time roles, contract projects, and technical conversations — feel free to send a message.',
      locationLabel: 'Location',
      nameLabel: 'Name',
      namePlaceholder: 'Your name',
      emailLabel: 'Email',
      messagePlaceholder: 'Your message...',
      messageLabel: 'Message',
      send: 'Send Message',
      sending: 'Sending...',
      sent: 'Message sent!',
      errorMsg: 'Error sending message. Please try again.',
      nameRequired: 'Name is required',
      emailRequired: 'Email is required',
      emailInvalid: 'Invalid email',
      messageRequired: 'Message is required',
      copy: 'Copy',
      copied: 'Copied!',
    },
    footer: {
      tagline: 'Fullstack .NET Developer | React — Recife, PE',
      quickLinks: 'Quick Links',
      builtWith: 'Built with',
      rights: '© 2026 Victor Souza Santos. All rights reserved.',
      madeWith: 'Built with',
    },
  },
};

export default translations;
