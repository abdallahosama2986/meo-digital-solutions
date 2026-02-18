import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, Facebook, Instagram } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const fontClass = isRTL ? 'font-tajawal' : 'font-poppins';
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    { icon: <Phone size={20} />, label: t('contact.phone'), value: '+966 539 606 358', href: 'tel:+966539606358', dir: 'ltr' },
    { icon: <Mail size={20} />, label: t('contact.email'), value: 'sales@alkhebrat.sa', href: 'mailto:sales@alkhebrat.sa', dir: '' },
    { icon: <MapPin size={20} />, label: t('contact.address'), value: t('contact.addressValue'), href: 'https://maps.google.com/?q=16.914064,42.563675', dir: '' },
    { icon: <Clock size={20} />, label: t('contact.hours'), value: t('contact.hoursValue'), href: '', dir: '' },
  ];

  return (
    <HelmetProvider>
      <Helmet>
        <title>{isRTL ? 'اتصل بنا | مكتب الخبرات المتعددة' : 'Contact | Multiple Experiences Office'}</title>
        <meta name="description" content={t('contact.subtitle')} />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-40 pb-24 dark-section">
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className={`section-label ${fontClass}`}>{t('contact.badge')}</span>
            <h1 className={`text-display font-bold text-white mt-4 ${fontClass}`}>{t('contact.title')}</h1>
            <p className={`text-white/60 max-w-xl mx-auto mt-4 ${fontClass}`}>{t('contact.subtitle')}</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Layout */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className={`grid lg:grid-cols-2 gap-16`}>
            {/* Left: Info */}
            <AnimatedSection direction={isRTL ? 'right' : 'left'}>
              <div className={isRTL ? 'text-right' : 'text-left'}>
                <h2 className={`text-2xl font-bold text-foreground mb-8 ${fontClass}`}>
                  {isRTL ? 'معلومات التواصل' : 'Contact Information'}
                </h2>

                <div className="space-y-5 mb-10">
                  {contactInfo.map((item, i) => (
                    <div
                      key={i}
                      className={`flex items-start gap-4 p-4 rounded-xl border border-border bg-card hover:border-gold/40 transition-all duration-200 ${isRTL ? 'flex-row-reverse' : ''}`}
                    >
                      <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold flex-shrink-0">
                        {item.icon}
                      </div>
                      <div className={isRTL ? 'text-right' : ''}>
                        <div className={`text-xs text-muted-foreground mb-1 ${fontClass}`}>{item.label}</div>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith('http') ? '_blank' : undefined}
                            rel="noopener noreferrer"
                            className={`text-foreground font-medium hover:text-gold transition-colors ${fontClass}`}
                            dir={item.dir || undefined}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className={`text-foreground font-medium text-sm ${fontClass}`}>{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social */}
                <div>
                  <h3 className={`font-semibold text-foreground mb-4 ${fontClass}`}>{t('contact.social')}</h3>
                  <div className="flex items-center gap-3">
                    {[
                      { icon: <Facebook size={18} />, href: '#', label: 'Facebook' },
                      { icon: <Instagram size={18} />, href: '#', label: 'Instagram' },
                      {
                        icon: (
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.22 8.22 0 004.82 1.55V6.78a4.85 4.85 0 01-1.05-.09z"/>
                          </svg>
                        ),
                        href: '#',
                        label: 'TikTok',
                      },
                      {
                        icon: (
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                          </svg>
                        ),
                        href: '#',
                        label: 'X',
                      },
                    ].map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        aria-label={s.label}
                        className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-gold hover:text-gold transition-all duration-200"
                      >
                        {s.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Right: Form */}
            <AnimatedSection direction={isRTL ? 'left' : 'right'}>
              <div className="bg-card border border-border rounded-2xl p-8 shadow-card">
                <h2 className={`text-2xl font-bold text-foreground mb-8 ${isRTL ? 'text-right' : ''} ${fontClass}`}>
                  {isRTL ? 'أرسل لنا رسالة' : 'Send Us a Message'}
                </h2>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 rounded-xl bg-gold/10 border border-gold/30 text-gold text-sm font-medium text-center"
                  >
                    {isRTL ? '✅ تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.' : '✅ Message sent successfully! We\'ll contact you soon.'}
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className={`grid sm:grid-cols-2 gap-4`}>
                    <div>
                      <label className={`block text-sm font-medium text-foreground mb-2 ${isRTL ? 'text-right' : ''} ${fontClass}`}>
                        {t('contact.form.name')}
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        placeholder={t('contact.form.namePlaceholder')}
                        className={`input-gold w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground text-sm focus:outline-none transition-all ${isRTL ? 'text-right' : ''} ${fontClass}`}
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium text-foreground mb-2 ${isRTL ? 'text-right' : ''} ${fontClass}`}>
                        {t('contact.form.phone')}
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                        placeholder={t('contact.form.phonePlaceholder')}
                        className={`input-gold w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground text-sm focus:outline-none transition-all ${fontClass}`}
                        dir="ltr"
                      />
                    </div>
                  </div>

                  <div>
                    <label className={`block text-sm font-medium text-foreground mb-2 ${isRTL ? 'text-right' : ''} ${fontClass}`}>
                      {t('contact.form.email')}
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      placeholder={t('contact.form.emailPlaceholder')}
                      className={`input-gold w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground text-sm focus:outline-none transition-all ${fontClass}`}
                      dir="ltr"
                    />
                  </div>

                  <div>
                    <label className={`block text-sm font-medium text-foreground mb-2 ${isRTL ? 'text-right' : ''} ${fontClass}`}>
                      {t('contact.form.message')}
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      placeholder={t('contact.form.messagePlaceholder')}
                      className={`input-gold w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground text-sm focus:outline-none transition-all resize-none ${isRTL ? 'text-right' : ''} ${fontClass}`}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className={`w-full py-4 px-8 rounded-xl bg-gradient-gold text-white font-bold text-sm shadow-gold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 ${fontClass}`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send size={16} className={isRTL ? 'rotate-180' : ''} />
                    {t('contact.form.send')}
                  </motion.button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-20 bg-background">
        <div className="container-custom">
          <AnimatedSection>
            <div className="rounded-2xl overflow-hidden border border-border h-80 shadow-card">
              <iframe
                title="MEO Office Location"
                src="https://maps.google.com/maps?ll=16.914064,42.563675&z=14&t=m&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </HelmetProvider>
  );
};

export default Contact;
