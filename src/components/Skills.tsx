import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Server, Monitor, Database, Wrench } from 'lucide-react';
import { skillCategories } from '../data/portfolio';

const iconMap: Record<string, React.ElementType> = {
  Server,
  Monitor,
  Database,
  Wrench,
};

const colorMap: Record<string, string> = {
  Backend: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  Frontend: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  'Database & DevOps': 'bg-green-500/10 text-green-400 border-green-500/20',
  Tools: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
};

const iconColorMap: Record<string, string> = {
  Backend: 'text-blue-400',
  Frontend: 'text-purple-400',
  'Database & DevOps': 'text-green-400',
  Tools: 'text-orange-400',
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="habilidades" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0F172A]/50">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F1F5F9] mb-4">Habilidades</h2>
          <div className="w-16 h-1 bg-[#3B82F6] mx-auto rounded-full mb-4" />
          <p className="text-[#94A3B8] max-w-xl mx-auto">
            Tecnologias e ferramentas que utilizo no dia a dia para construir soluções completas.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, index) => {
            const Icon = iconMap[cat.icon] || Server;
            const badgeClass = colorMap[cat.category] || 'bg-gray-500/10 text-gray-400 border-gray-500/20';
            const iconClass = iconColorMap[cat.category] || 'text-gray-400';

            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#1E293B] border border-[#334155] rounded-2xl p-6 hover:border-[#3B82F6]/40 transition-colors duration-300"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-[#0B1121] flex items-center justify-center">
                    <Icon className={iconClass} size={20} />
                  </div>
                  <h3 className="text-[#F1F5F9] font-semibold text-sm">{cat.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-2.5 py-1 rounded-full text-xs font-medium border ${badgeClass}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
