import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { GitFork, ExternalLink, X, Tag } from 'lucide-react';
import { projects, Project } from '../data/portfolio';

const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)));

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [activeTag, setActiveTag] = useState<string>('Todos');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered =
    activeTag === 'Todos' ? projects : projects.filter((p) => p.tags.includes(activeTag));

  return (
    <section id="projetos" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F1F5F9] mb-4">Projetos</h2>
          <div className="w-16 h-1 bg-[#3B82F6] mx-auto rounded-full mb-4" />
          <p className="text-[#94A3B8] max-w-xl mx-auto">
            Uma seleção de projetos que demonstram minhas habilidades e experiências.
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {['Todos', ...allTags].map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTag === tag
                  ? 'bg-[#3B82F6] text-white'
                  : 'bg-[#1E293B] text-[#94A3B8] border border-[#334155] hover:border-[#3B82F6]/50 hover:text-[#60A5FA]'
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          <AnimatePresence>
            {filtered.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-[#1E293B] border border-[#334155] rounded-2xl overflow-hidden hover:border-[#3B82F6]/50 transition-all duration-300 group flex flex-col"
              >
                {/* Gradient top border */}
                <div className="h-1 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA]" />

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-[#F1F5F9] font-bold text-lg mb-2 group-hover:text-[#60A5FA] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#94A3B8] text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="flex items-center gap-1 px-2 py-0.5 bg-[#3B82F6]/10 text-[#60A5FA] border border-[#3B82F6]/20 rounded-full text-xs font-medium"
                      >
                        <Tag size={10} />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 mt-auto">
                    {project.github && project.github !== '#' && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-[#94A3B8] hover:text-[#F1F5F9] transition-colors text-sm"
                      >
                        <GitFork size={16} />
                        GitHub
                      </a>
                    )}
                    {project.demo && project.demo !== '#' && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-[#94A3B8] hover:text-[#F1F5F9] transition-colors text-sm"
                      >
                        <ExternalLink size={16} />
                        Demo
                      </a>
                    )}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="ml-auto px-4 py-1.5 bg-[#3B82F6]/10 hover:bg-[#3B82F6] text-[#3B82F6] hover:text-white border border-[#3B82F6]/30 hover:border-[#3B82F6] rounded-lg text-sm font-medium transition-all duration-200"
                    >
                      Detalhes
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-[#1E293B] border border-[#334155] rounded-2xl max-w-xl w-full max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="h-1 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA]" />
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-[#F1F5F9] font-bold text-xl">{selectedProject.title}</h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-[#94A3B8] hover:text-[#F1F5F9] transition-colors ml-4 flex-shrink-0"
                  >
                    <X size={20} />
                  </button>
                </div>

                <p className="text-[#94A3B8] text-sm leading-relaxed mb-5">
                  {selectedProject.longDescription}
                </p>

                <div className="mb-5">
                  <h4 className="text-[#F1F5F9] font-semibold text-sm mb-3">Stack Tecnológico</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-[#0B1121] border border-[#334155] rounded-full text-xs text-[#60A5FA] font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-[#334155]">
                  {selectedProject.github && selectedProject.github !== '#' && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-[#0B1121] border border-[#334155] hover:border-[#3B82F6]/50 rounded-lg text-[#94A3B8] hover:text-[#F1F5F9] transition-all text-sm"
                    >
                      <GitFork size={16} />
                      GitHub
                    </a>
                  )}
                  {selectedProject.demo && selectedProject.demo !== '#' && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-[#3B82F6] hover:bg-[#2563EB] rounded-lg text-white transition-colors text-sm"
                    >
                      <ExternalLink size={16} />
                      Ver Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
