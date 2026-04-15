import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Header() {
  const { language, toggleLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: t.nav.home, href: '#inicio' },
    { label: t.nav.about, href: '#sobre' },
    { label: t.nav.skills, href: '#habilidades' },
    { label: t.nav.projects, href: '#projetos' },
    { label: t.nav.experience, href: '#experiencia' },
    { label: t.nav.contact, href: '#contato' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0B1121] shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => { e.preventDefault(); handleNavClick('#inicio'); }}
            className="flex items-center gap-2"
          >
            <div className="w-9 h-9 rounded-lg bg-[#3B82F6] flex items-center justify-center font-bold text-white text-sm">
              VS
            </div>
            <span className="text-[#F1F5F9] font-semibold hidden sm:block">Victor Souza</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {/* Language toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2.5 py-1 rounded-md border border-[#334155] hover:border-[#3B82F6]/60 transition-colors duration-200 text-xs font-semibold"
              aria-label="Toggle language"
            >
              <span className={language === 'pt' ? 'text-[#3B82F6]' : 'text-[#475569]'}>PT</span>
              <span className="text-[#334155]">|</span>
              <span className={language === 'en' ? 'text-[#3B82F6]' : 'text-[#475569]'}>EN</span>
            </button>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="text-[#94A3B8] hover:text-[#3B82F6] transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile: language toggle + hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2 py-0.5 rounded-md border border-[#334155] hover:border-[#3B82F6]/60 transition-colors duration-200 text-xs font-semibold"
              aria-label="Toggle language"
            >
              <span className={language === 'pt' ? 'text-[#3B82F6]' : 'text-[#475569]'}>PT</span>
              <span className="text-[#334155]">|</span>
              <span className={language === 'en' ? 'text-[#3B82F6]' : 'text-[#475569]'}>EN</span>
            </button>
            <button
              className="text-[#94A3B8] hover:text-[#F1F5F9] transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0B1121] border-t border-[#334155]">
          <nav className="flex flex-col px-4 py-4 gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="text-[#94A3B8] hover:text-[#3B82F6] transition-colors duration-200 text-sm font-medium py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
