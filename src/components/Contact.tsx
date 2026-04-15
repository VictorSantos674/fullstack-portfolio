import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, GitFork, MapPin, Link, Copy, Check, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../contexts/LanguageContext';

interface FormState {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = t.contact.nameRequired;
    if (!form.email.trim()) {
      newErrors.email = t.contact.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = t.contact.emailInvalid;
    }
    if (!form.message.trim()) newErrors.message = t.contact.messageRequired;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSending(true);
    setError(null);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          reply_to: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setSent(true);
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setSent(false), 4000);
    } catch {
      setError(t.contact.errorMsg);
    } finally {
      setSending(false);
    }
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText('3.victorsouza@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const infoCards = [
    {
      icon: Mail,
      label: 'Email',
      value: '3.victorsouza@gmail.com',
      href: 'mailto:3.victorsouza@gmail.com',
    },
    {
      icon: GitFork,
      label: 'GitHub',
      value: 'github.com/VictorSantos674',
      href: 'https://github.com/VictorSantos674',
    },
    {
      icon: Link,
      label: 'LinkedIn',
      value: 'linkedin.com/in/vicsantosdev',
      href: 'https://www.linkedin.com/in/vicsantosdev/',
    },
    {
      icon: MapPin,
      label: t.contact.locationLabel,
      value: 'Recife, Pernambuco',
      href: null,
    },
  ];

  return (
    <section id="contato" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0F172A]/50">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F1F5F9] mb-4">{t.contact.title}</h2>
          <div className="w-16 h-1 bg-[#3B82F6] mx-auto rounded-full mb-4" />
          <p className="text-[#94A3B8] max-w-xl mx-auto">{t.contact.subtitle}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left: info cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {infoCards.map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="bg-[#1E293B] border border-[#334155] rounded-xl p-4 flex items-center gap-4 hover:border-[#3B82F6]/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[#3B82F6]/10 border border-[#3B82F6]/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="text-[#3B82F6]" size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[#94A3B8] text-xs mb-0.5">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-[#F1F5F9] text-sm font-medium hover:text-[#60A5FA] transition-colors truncate block"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-[#F1F5F9] text-sm font-medium">{value}</p>
                  )}
                </div>
                {label === 'Email' && (
                  <button
                    onClick={copyEmail}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-[#0B1121] border border-[#334155] hover:border-[#3B82F6]/50 rounded-lg text-xs text-[#94A3B8] hover:text-[#F1F5F9] transition-all"
                    title={t.contact.copy}
                  >
                    {copied ? <Check size={12} className="text-green-400" /> : <Copy size={12} />}
                    {copied ? t.contact.copied : t.contact.copy}
                  </button>
                )}
              </div>
            ))}
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-[#1E293B] border border-[#334155] rounded-2xl p-6 space-y-4"
            >
              <div>
                <label className="block text-[#94A3B8] text-sm mb-1.5">{t.contact.nameLabel}</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder={t.contact.namePlaceholder}
                  className="w-full bg-[#0B1121] border border-[#334155] rounded-lg px-4 py-2.5 text-[#F1F5F9] text-sm placeholder-[#475569] focus:outline-none focus:border-[#3B82F6] transition-colors"
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-[#94A3B8] text-sm mb-1.5">{t.contact.emailLabel}</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="seu@email.com"
                  className="w-full bg-[#0B1121] border border-[#334155] rounded-lg px-4 py-2.5 text-[#F1F5F9] text-sm placeholder-[#475569] focus:outline-none focus:border-[#3B82F6] transition-colors"
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-[#94A3B8] text-sm mb-1.5">{t.contact.messageLabel}</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder={t.contact.messagePlaceholder}
                  rows={5}
                  className="w-full bg-[#0B1121] border border-[#334155] rounded-lg px-4 py-2.5 text-[#F1F5F9] text-sm placeholder-[#475569] focus:outline-none focus:border-[#3B82F6] transition-colors resize-none"
                />
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={sending || sent}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#3B82F6] hover:bg-[#2563EB] disabled:bg-[#3B82F6]/50 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                {sent ? (
                  <>
                    <Check size={18} />
                    {t.contact.sent}
                  </>
                ) : sending ? (
                  <span className="animate-pulse">{t.contact.sending}</span>
                ) : (
                  <>
                    <Send size={18} />
                    {t.contact.send}
                  </>
                )}
              </button>
              {error && (
                <p className="text-red-400 text-sm text-center">{error}</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
