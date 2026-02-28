import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { BarChart3, Settings, TrendingUp, Users, BookOpen, Cpu, ChevronLeft, ChevronRight } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { useLanguage } from '@/contexts/LanguageContext';

const serviceIcons = [
  <BarChart3 size={32} />,
  <Settings size={32} />,
  <TrendingUp size={32} />,
  <Users size={32} />,
  <BookOpen size={32} />,
  <Cpu size={32} />,
];

const serviceKeys = ['accounting', 'admin', 'operational', 'marketing', 'restaurant', 'systems'] as const;

const Services: React.FC = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const fontClass = isRTL ? 'font-tajawal' : 'font-poppins';

  return (
    <HelmetProvider>
      <Helmet>
        <title>{isRTL ? 'الخدمات | مكتب الخبرات المتعددة' : 'Services | Multiple Experiences Office'}</title>
        <meta name="description" content={t('services.subtitle')} />
      </Helmet>

      {/* ─── Hero (Dark — matching Home) ─── */}
      <section
        className="relative min-h-[60vh] flex items-center overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(29,59,136,0.92) 0%, rgba(37,61,122,0.85) 50%, rgba(52,70,114,0.80) 100%)' }}
        />
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, #e4a703 0px, #e4a703 1px, transparent 1px, transparent 60px)' }}
        />
        <div className="absolute bottom-32 left-10 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(228,167,3,0.10) 0%, transparent 70%)', filter: 'blur(60px)' }} />

        <div className="container-custom relative z-10 text-center pt-28 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ background: 'rgba(228,167,3,0.15)', border: '1px solid rgba(228,167,3,0.4)' }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#e4a703' }} />
              <span className={`text-sm font-semibold ${fontClass}`} style={{ color: '#e4a703' }}>{t('services.label')}</span>
            </div>
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 max-w-2xl mx-auto ${fontClass}`}>
              {t('services.title')}
            </h1>
            <p className={`text-white/70 max-w-xl mx-auto mt-6 text-lg ${fontClass}`}>{t('services.subtitle')}</p>
            <div className="w-16 h-1 rounded-full mx-auto mt-6" style={{ background: 'linear-gradient(135deg, #e4a703, #d5ab2a)' }} />
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-px h-10 mx-auto" style={{ background: 'linear-gradient(to bottom, #e4a703, transparent)' }} />
        </motion.div>
      </section>

      {/* ─── Services Grid ─── */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {serviceKeys.map((key, i) => (
              <AnimatedSection key={key} delay={i * 0.08}>
                <motion.div
                  className="group relative bg-card rounded-2xl border border-border hover:border-gold/40 p-8 flex gap-6 transition-all duration-300 shadow-card hover:shadow-card-hover h-full"
                  whileHover={{ y: -3 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {/* Gold left accent bar */}
                  <div className="absolute top-8 bottom-8 start-0 w-1 rounded-full bg-gold/20 group-hover:bg-gradient-gold transition-all duration-300" />

                  {/* Icon */}
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gradient-gold group-hover:text-white transition-all duration-300 mt-1">
                    {serviceIcons[i]}
                  </div>

                  {/* Content */}
                  <div className={`flex-1 ${isRTL ? 'text-right' : 'text-left'}`}>
                    <h3 className={`text-xl font-bold text-foreground mb-3 ${fontClass}`}>
                      {t(`services.items.${key}.title`)}
                    </h3>
                    <div className="h-0.5 w-12 rounded-full bg-gold/30 mb-3 group-hover:w-20 transition-all duration-500" />
                    <p className={`text-muted-foreground leading-relaxed mb-4 text-sm ${fontClass}`}>
                      {t(`services.items.${key}.desc`)}
                    </p>
                    <a
                      href="https://wa.me/966539606358"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 text-gold text-sm font-semibold hover:gap-2.5 transition-all duration-300 ${fontClass}`}
                    >
                      {t('services.learnMore')}
                      {isRTL ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
                    </a>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA (light) ─── */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom text-center">
          <AnimatedSection>
            <div className="max-w-2xl mx-auto p-12 rounded-3xl border border-gold/20 bg-card shadow-card relative overflow-hidden">
              {/* Blob inside card */}
              <div className="absolute top-0 end-0 w-48 h-48 rounded-full bg-gold/5 blur-3xl pointer-events-none" />
              <span className={`section-label ${fontClass}`}>{isRTL ? 'هل أنت مستعد؟' : 'Ready to Start?'}</span>
              <h2 className={`text-display font-bold text-foreground mb-4 mt-3 ${fontClass}`}>{t('cta.title')}</h2>
              <p className={`text-muted-foreground mb-8 ${fontClass}`}>{t('cta.subtitle')}</p>
              <a
                href="https://wa.me/966539606358"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-gold text-white font-bold shadow-gold hover:scale-105 transition-all duration-300 ${fontClass}`}
              >
                {t('cta.button')}
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </HelmetProvider>
  );
};

export default Services;
