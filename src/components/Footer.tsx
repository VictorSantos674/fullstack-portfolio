import { Heart } from 'lucide-react';

const quickLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato', href: '#contato' },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B1121] border-t border-[#1E293B] py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-[#3B82F6] flex items-center justify-center font-bold text-white text-xs">
                VS
              </div>
              <span className="text-[#F1F5F9] font-semibold">Victor Souza Santos</span>
            </div>
            <p className="text-[#94A3B8] text-sm leading-relaxed">
              Desenvolvedor Fullstack .NET | React — Recife, PE
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-[#F1F5F9] font-semibold text-sm mb-3">Links Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="text-[#94A3B8] hover:text-[#3B82F6] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech */}
          <div>
            <h4 className="text-[#F1F5F9] font-semibold text-sm mb-3">Feito com</h4>
            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'].map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 bg-[#1E293B] border border-[#334155] rounded text-xs text-[#94A3B8]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-[#1E293B] flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-[#94A3B8]">
          <p>© 2026 Victor Souza Santos. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1.5">
            Feito com <Heart size={14} className="text-red-400 fill-red-400" /> e React + TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}
