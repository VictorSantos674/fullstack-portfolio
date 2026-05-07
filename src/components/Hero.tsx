import { motion } from 'framer-motion';
import { GitFork, Link, Mail, ArrowDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const codeSnippet = `// Victor Souza Santos
interface Developer {
  name: string;
  stack: string[];
  passion: string;
}

const victor: Developer = {
  name: "Victor Souza Santos",
  stack: [
    "Modern .NET",
    "React",
    "TypeScript",
  ],
  passion: "Clean Architecture",
};

export default victor;`;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

export default function Hero() {
  const { t } = useLanguage();

  const scrollToProjects = () => {
    document.querySelector('#projetos')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center relative overflow-hidden pt-16"
    >
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3B82F6]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#60A5FA]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.p variants={itemVariants} className="text-[#3B82F6] font-medium text-lg">
              {t.hero.greeting}
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F1F5F9] leading-tight"
            >
              Victor Souza Santos
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl sm:text-2xl font-semibold text-[#60A5FA]"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-[#94A3B8] text-base sm:text-lg leading-relaxed max-w-lg"
            >
              {t.hero.description}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <button
                onClick={scrollToProjects}
                className="px-6 py-3 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold rounded-lg transition-colors duration-200"
              >
                {t.hero.viewProjects}
              </button>
              <button
                onClick={scrollToContact}
                className="px-6 py-3 border border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white font-semibold rounded-lg transition-all duration-200"
              >
                {t.hero.contact}
              </button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-4 pt-2">
              <a
                href="https://github.com/VictorSantos674"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#94A3B8] hover:text-[#3B82F6] transition-colors duration-200"
                aria-label="GitHub"
              >
                <GitFork size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/vicsantosdev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#94A3B8] hover:text-[#3B82F6] transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Link size={22} />
              </a>
              <button
                onClick={scrollToContact}
                className="text-[#94A3B8] hover:text-[#3B82F6] transition-colors duration-200"
                aria-label="Contato"
              >
                <Mail size={22} />
              </button>
            </motion.div>
          </motion.div>

          {/* Right: code snippet decoration */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="bg-[#1E293B] border border-[#334155] rounded-xl overflow-hidden shadow-2xl">
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[#0F172A] border-b border-[#334155]">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-2 text-xs text-[#94A3B8] font-mono">developer.ts</span>
              </div>
              <pre className="p-6 text-sm font-mono leading-relaxed overflow-x-auto">
                <code>
                  {codeSnippet.split('\n').map((line, i) => (
                    <div key={i}>
                      {line.startsWith('//') ? (
                        <span className="text-[#6B7280]">{line}</span>
                      ) : line.includes('interface') || line.includes('const') || line.includes('export') ? (
                        <span>
                          <span className="text-[#C084FC]">{line.split(' ')[0]}</span>
                          <span className="text-[#F1F5F9]">{' ' + line.split(' ').slice(1).join(' ')}</span>
                        </span>
                      ) : line.includes(':') && !line.includes('//') ? (
                        <span>
                          <span className="text-[#60A5FA]">{line.split(':')[0]}</span>
                          <span className="text-[#94A3B8]">:</span>
                          <span className="text-[#34D399]">{line.split(':').slice(1).join(':')}</span>
                        </span>
                      ) : line.includes('"') ? (
                        <span className="text-[#FCD34D]">{line}</span>
                      ) : (
                        <span className="text-[#F1F5F9]">{line}</span>
                      )}
                    </div>
                  ))}
                </code>
              </pre>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="flex justify-center mt-16"
        >
          <button
            onClick={() => document.querySelector('#sobre')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-[#94A3B8] hover:text-[#3B82F6] transition-colors animate-bounce"
            aria-label="Scroll down"
          >
            <ArrowDown size={24} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
