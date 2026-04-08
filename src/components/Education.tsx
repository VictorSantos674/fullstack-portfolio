import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Globe } from 'lucide-react';
import { education, languages } from '../data/portfolio';

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="educacao" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F1F5F9] mb-4">Formação & Idiomas</h2>
          <div className="w-16 h-1 bg-[#3B82F6] mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Education cards */}
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1E293B] border border-[#334155] rounded-2xl p-6 hover:border-[#3B82F6]/40 transition-colors duration-300"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#3B82F6]/10 border border-[#3B82F6]/20 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="text-[#3B82F6]" size={20} />
                </div>
                <div>
                  <h3 className="text-[#F1F5F9] font-bold text-base leading-snug">{edu.degree}</h3>
                  <p className="text-[#3B82F6] text-sm font-medium mt-0.5">{edu.institution}</p>
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5 text-[#94A3B8] text-xs">
                  <Calendar size={12} />
                  {edu.period}
                </div>
                <div className="flex items-center gap-1.5 text-[#94A3B8] text-xs">
                  <MapPin size={12} />
                  {edu.location}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Languages card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#1E293B] border border-[#334155] rounded-2xl p-6 hover:border-[#3B82F6]/40 transition-colors duration-300"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-[#3B82F6]/10 border border-[#3B82F6]/20 flex items-center justify-center flex-shrink-0">
                <Globe className="text-[#3B82F6]" size={20} />
              </div>
              <h3 className="text-[#F1F5F9] font-bold text-base">Idiomas</h3>
            </div>
            <div className="space-y-3">
              {languages.map((lang) => (
                <div key={lang.name} className="flex items-center justify-between">
                  <span className="text-[#94A3B8] text-sm">{lang.name}</span>
                  <span className="px-3 py-1 bg-[#3B82F6]/10 text-[#60A5FA] border border-[#3B82F6]/20 rounded-full text-xs font-medium">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
