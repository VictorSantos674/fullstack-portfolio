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
    entries: Array<{ role: string; activities: string[] }>;
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
        'Especializado em construir aplicações web robustas com .NET 9 e React/TypeScript. Apaixonado por Clean Architecture, DDD e código de qualidade.',
      viewProjects: 'Ver Projetos',
      contact: 'Contato',
    },
    about: {
      title: 'Sobre Mim',
      p1: 'Sou um desenvolvedor fullstack apaixonado por tecnologia, com foco em .NET 9 e React/TypeScript. Tenho experiência sólida na construção de aplicações web modernas, desde APIs RESTful até interfaces de usuário sofisticadas.',
      p2: 'Durante meu estágio no TJPE/SETIC, participei ativamente da modernização de sistemas legados em Delphi para plataformas web modernas com .NET 9 e React, desenvolvendo módulos críticos de gestão.',
      p3: 'Na Blue Technology, atuei como Desenvolvedor Fullstack Jr, aplicando Clean Architecture, DDD e melhores práticas de engenharia de software em projetos reais.',
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
      subtitle: 'Tecnologias e ferramentas que utilizo no dia a dia para construir soluções completas.',
    },
    projects: {
      title: 'Projetos',
      subtitle: 'Uma seleção de projetos que demonstram minhas habilidades e experiências.',
      all: 'Todos',
      details: 'Detalhes',
      techStack: 'Stack Tecnológico',
      viewDemo: 'Ver Demo',
      items: {
        1: { description: 'Em breve.', longDescription: 'Em breve.' },
        2: { description: 'Em breve.', longDescription: 'Em breve.' },
        3: {
          description:
            'Sistema web fullstack para controle de gastos residenciais com autenticação JWT, isolamento de dados por usuário, relatórios financeiros e exportação em PDF.',
          longDescription:
            'Aplicação fullstack com Web API em C#/ASP.NET Core 10 e frontend em React + TypeScript. Possui autenticação com JWT e senhas hasheadas via BCrypt, isolamento completo de dados por perfil, CRUD de pessoas e categorias, registro de transações com regras de validação por tipo e faixa etária, relatórios por pessoa e por categoria, e exportação de relatórios em PDF com jsPDF. Backend hospedado no Railway via Dockerfile customizado; frontend no Vercel com SPA routing configurado.',
        },
        4: {
          description: 'Este próprio portfolio, desenvolvido como vitrine de habilidades frontend modernas.',
          longDescription:
            'Portfolio desenvolvido com React + TypeScript + Vite + Tailwind CSS, apresentando animações suaves com Framer Motion e design responsivo. O projeto demonstra domínio de componentização, tipagem forte com TypeScript e estilização moderna com Tailwind CSS.',
        },
      },
    },
    experience: {
      title: 'Experiência',
      subtitle: 'Minha trajetória profissional construindo soluções de software reais.',
      entries: [
        {
          role: 'Desenvolvedor Fullstack Jr',
          activities: [
            'Desenvolvimento de aplicações fullstack com .NET 9 e React/TypeScript',
            'Implementação de APIs REST com ASP.NET Core e Entity Framework 9',
            'Aplicação de Clean Architecture e Domain-Driven Design',
            'Colaboração em equipe com GitLab e Azure DevOps',
          ],
        },
        {
          role: 'Estagiário de Desenvolvimento',
          activities: [
            'Participação na migração de sistemas Delphi legados para .NET 9 e React',
            'Desenvolvimento de módulos de gestão de estoque, patrimônio e chamados',
            'Criação de interfaces modernas com React + TypeScript + Ant Design',
            'Geração de relatórios com jsPDF e jsCanvas',
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
      subtitle: 'Tem um projeto em mente ou quer conversar? Entre em contato!',
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
        'Specialized in building robust web applications with .NET 9 and React/TypeScript. Passionate about Clean Architecture, DDD, and quality code.',
      viewProjects: 'View Projects',
      contact: 'Contact',
    },
    about: {
      title: 'About Me',
      p1: "I'm a fullstack developer passionate about technology, focused on .NET 9 and React/TypeScript. I have solid experience building modern web applications, from RESTful APIs to sophisticated user interfaces.",
      p2: 'During my internship at TJPE/SETIC, I actively participated in modernizing legacy Delphi systems to modern web platforms with .NET 9 and React, developing critical management modules.',
      p3: 'At Blue Technology, I worked as a Junior Fullstack Developer, applying Clean Architecture, DDD and software engineering best practices on real projects.',
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
      subtitle: 'Technologies and tools I use daily to build complete solutions.',
    },
    projects: {
      title: 'Projects',
      subtitle: 'A selection of projects showcasing my skills and experience.',
      all: 'All',
      details: 'Details',
      techStack: 'Tech Stack',
      viewDemo: 'View Demo',
      items: {
        1: { description: 'Coming soon.', longDescription: 'Coming soon.' },
        2: { description: 'Coming soon.', longDescription: 'Coming soon.' },
        3: {
          description:
            'Fullstack web system for residential expense tracking with JWT authentication, per-user data isolation, financial reports and PDF export.',
          longDescription:
            'Fullstack application with a Web API in C#/ASP.NET Core 10 and a React + TypeScript frontend. Features JWT authentication with BCrypt-hashed passwords, complete per-profile data isolation, CRUD for people and categories, transaction recording with validation rules by type and age group, per-person and per-category reports, and PDF report export via jsPDF. Backend hosted on Railway via a custom Dockerfile; frontend on Vercel with SPA routing configured.',
        },
        4: {
          description: 'This very portfolio, built as a showcase of modern frontend skills.',
          longDescription:
            'Portfolio built with React + TypeScript + Vite + Tailwind CSS, featuring smooth animations with Framer Motion and responsive design. The project demonstrates mastery of componentization, strong TypeScript typing, and modern styling with Tailwind CSS.',
        },
      },
    },
    experience: {
      title: 'Experience',
      subtitle: 'My professional journey building real software solutions.',
      entries: [
        {
          role: 'Junior Fullstack Developer',
          activities: [
            'Fullstack application development with .NET 9 and React/TypeScript',
            'REST API implementation with ASP.NET Core and Entity Framework 9',
            'Application of Clean Architecture and Domain-Driven Design',
            'Team collaboration using GitLab and Azure DevOps',
          ],
        },
        {
          role: 'Development Intern',
          activities: [
            'Participated in migrating legacy Delphi systems to .NET 9 and React',
            'Developed inventory, asset management, and ticketing modules',
            'Built modern interfaces with React + TypeScript + Ant Design',
            'Generated reports with jsPDF and jsCanvas',
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
      subtitle: 'Have a project in mind or want to chat? Get in touch!',
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
