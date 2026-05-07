import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { User, Briefcase, Code2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const techBadges = ['.NET', 'React', 'TypeScript', 'ASP.NET Core', 'PostgreSQL', 'Clean Architecture'];

export default function About() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const facts = [
    { icon: Briefcase, label: t.about.yearsExp, sub: t.about.yearsExpLabel },
    { icon: Code2, label: '10+', sub: t.about.projectsLabel },
    { icon: User, label: '2', sub: t.about.companiesLabel },
  ];

  return (
    <section id="sobre" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F1F5F9] mb-4">{t.about.title}</h2>
          <div className="w-16 h-1 bg-[#3B82F6] mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <p className="text-[#94A3B8] text-base sm:text-lg leading-relaxed">{t.about.p1}</p>
            <p className="text-[#94A3B8] text-base sm:text-lg leading-relaxed">{t.about.p2}</p>
            <p className="text-[#94A3B8] text-base sm:text-lg leading-relaxed">{t.about.p3}</p>

            <div className="flex flex-wrap gap-2 pt-2">
              {techBadges.map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1 bg-[#1E293B] border border-[#334155] rounded-full text-xs font-medium text-[#60A5FA]"
                >
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: facts card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-[#1E293B] border border-[#334155] rounded-2xl p-8 space-y-6">
              <h3 className="text-[#F1F5F9] font-semibold text-lg mb-4">{t.about.quickFacts}</h3>
              {facts.map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#3B82F6]/10 border border-[#3B82F6]/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="text-[#3B82F6]" size={20} />
                  </div>
                  <div>
                    <div className="text-[#F1F5F9] font-bold text-2xl">{label}</div>
                    <div className="text-[#94A3B8] text-sm">{sub}</div>
                  </div>
                </div>
              ))}

              <div className="pt-4 border-t border-[#334155]">
                <p className="text-[#94A3B8] text-sm leading-relaxed">{t.about.educationNote}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
