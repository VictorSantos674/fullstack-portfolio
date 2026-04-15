import { Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { label: t.nav.home, href: '#inicio' },
    { label: t.nav.about, href: '#sobre' },
    { label: t.nav.projects, href: '#projetos' },
    { label: t.nav.contact, href: '#contato' },
  ];

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
            <p className="text-[#94A3B8] text-sm leading-relaxed">{t.footer.tagline}</p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-[#F1F5F9] font-semibold text-sm mb-3">{t.footer.quickLinks}</h4>
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
            <h4 className="text-[#F1F5F9] font-semibold text-sm mb-3">{t.footer.builtWith}</h4>
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
          <p>{t.footer.rights}</p>
          <p className="flex items-center gap-1.5">
            {t.footer.madeWith} <Heart size={14} className="text-red-400 fill-red-400" /> React + TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}
