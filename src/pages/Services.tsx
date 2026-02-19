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

      {/* ─── Hero (Light) ─── */}
      <section className="relative pt-40 pb-28 overflow-hidden bg-background">
        {/* Blobs */}
        <div className="absolute top-0 start-0 w-[450px] h-[450px] rounded-full bg-gold/8 blur-[110px] pointer-events-none" />
        <div className="absolute bottom-0 end-0 w-[400px] h-[400px] rounded-full bg-gold/5 blur-[100px] pointer-events-none" />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(hsl(var(--gold)) 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
        {/* Diagonal lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="diag" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="40" stroke="hsl(var(--gold))" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diag)" />
        </svg>
        {/* Gold bottom line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className={`section-label ${fontClass}`}>{t('services.label')}</span>
            <h1 className={`text-display font-bold text-foreground mt-4 max-w-2xl mx-auto ${fontClass}`}>
              {t('services.title')}
            </h1>
            <p className={`text-muted-foreground max-w-xl mx-auto mt-4 ${fontClass}`}>{t('services.subtitle')}</p>
            <div className="w-16 h-1 rounded-full mx-auto mt-6" style={{ background: 'var(--gradient-gold)' }} />
          </motion.div>
        </div>
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
                    <Link
                      to="/contact"
                      className={`inline-flex items-center gap-1.5 text-gold text-sm font-semibold hover:gap-2.5 transition-all duration-300 ${fontClass}`}
                    >
                      {t('services.learnMore')}
                      {isRTL ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
                    </Link>
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
              <Link
                to="/contact"
                className={`inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-gold text-white font-bold shadow-gold hover:scale-105 transition-all duration-300 ${fontClass}`}
              >
                {t('cta.button')}
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </HelmetProvider>
  );
};

export default Services;
