import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { experiences } from '../data/portfolio';

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experiencia" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0F172A]/50">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F1F5F9] mb-4">Experiência</h2>
          <div className="w-16 h-1 bg-[#3B82F6] mx-auto rounded-full mb-4" />
          <p className="text-[#94A3B8] max-w-xl mx-auto">
            Minha trajetória profissional construindo soluções de software reais.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline vertical line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-[#334155] hidden sm:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative sm:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 sm:left-8 top-6 w-3 h-3 rounded-full bg-[#3B82F6] border-2 border-[#0B1121] hidden sm:block -translate-x-1/2 shadow-lg shadow-blue-500/30" />

                <div className="bg-[#1E293B] border border-[#334155] rounded-2xl p-6 hover:border-[#3B82F6]/40 transition-colors duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-[#F1F5F9] font-bold text-lg">{exp.company}</h3>
                      <p className="text-[#3B82F6] font-medium text-sm mt-0.5">{exp.role}</p>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1 text-xs text-[#94A3B8]">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={12} />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.activities.map((activity, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-[#94A3B8] text-sm leading-relaxed">
                        <CheckCircle2 size={15} className="text-[#3B82F6] flex-shrink-0 mt-0.5" />
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
