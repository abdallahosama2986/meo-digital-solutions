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

      {/* Hero */}
      <section className="relative pt-40 pb-24 dark-section">
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className={`section-label ${fontClass}`}>{t('services.label')}</span>
            <h1 className={`text-display font-bold text-white mt-4 max-w-2xl mx-auto ${fontClass}`}>
              {t('services.title')}
            </h1>
            <p className={`text-white/60 max-w-xl mx-auto mt-4 ${fontClass}`}>{t('services.subtitle')}</p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceKeys.map((key, i) => (
              <AnimatedSection key={key} delay={i * 0.08}>
                <motion.div
                  className="card-premium card-gold-hover group flex gap-6 p-8 rounded-2xl border border-border bg-card"
                  whileHover={{ y: -3 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gradient-gold group-hover:text-white transition-all duration-300">
                    {serviceIcons[i]}
                  </div>
                  <div className={isRTL ? 'text-right' : 'text-left'}>
                    <h3 className={`text-xl font-bold text-foreground mb-3 ${fontClass}`}>
                      {t(`services.items.${key}.title`)}
                    </h3>
                    <p className={`text-muted-foreground leading-relaxed mb-4 ${fontClass}`}>
                      {t(`services.items.${key}.desc`)}
                    </p>
                    <Link
                      to="/contact"
                      className={`inline-flex items-center gap-1 text-gold text-sm font-semibold hover:gap-2 transition-all ${fontClass}`}
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

      {/* CTA */}
      <section className="py-20 dark-section">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className={`text-display font-bold text-white mb-6 ${fontClass}`}>{t('cta.title')}</h2>
            <Link
              to="/contact"
              className={`inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-gold text-white font-bold shadow-gold hover:scale-105 transition-all duration-300 ${fontClass}`}
            >
              {t('cta.button')}
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </HelmetProvider>
  );
};

export default Services;
