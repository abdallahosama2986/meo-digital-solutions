import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Calendar, Tag } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { useLanguage } from '@/contexts/LanguageContext';

const articleColors = [
  'from-navy/80 to-navy',
  'from-gold-dark/80 to-gold-dark',
  'from-hero to-hero-surface',
  'from-navy/70 to-hero',
  'from-gold-dark/60 to-hero',
  'from-hero-surface to-hero',
];

const Articles: React.FC = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const fontClass = isRTL ? 'font-tajawal' : 'font-poppins';
  const articles = t('articles.items', { returnObjects: true }) as Array<{
    title: string;
    excerpt: string;
    category: string;
  }>;

  return (
    <HelmetProvider>
      <Helmet>
        <title>{isRTL ? 'المقالات | مكتب الخبرات المتعددة' : 'Articles | Multiple Experiences Office'}</title>
        <meta name="description" content={t('articles.subtitle')} />
      </Helmet>

      {/* ─── Hero (Light) ─── */}
      <section className="relative pt-40 pb-28 overflow-hidden bg-background">
        {/* Blobs */}
        <div className="absolute top-0 end-0 w-[500px] h-[500px] rounded-full bg-gold/8 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 start-0 w-[400px] h-[400px] rounded-full bg-gold/5 blur-[100px] pointer-events-none" />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(hsl(var(--gold)) 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
        {/* Bottom arc */}
        <svg className="absolute bottom-0 left-0 right-0 w-full text-gold/10 pointer-events-none" viewBox="0 0 1440 80" fill="none">
          <path d="M0 80 Q720 0 1440 80" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>

        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className={`section-label ${fontClass}`}>{t('articles.label')}</span>
            <h1 className={`text-display font-bold text-foreground mt-4 ${fontClass}`}>{t('articles.title')}</h1>
            <p className={`text-muted-foreground max-w-xl mx-auto mt-4 ${fontClass}`}>{t('articles.subtitle')}</p>
            <div className="w-16 h-1 rounded-full mx-auto mt-6" style={{ background: 'var(--gradient-gold)' }} />
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, i) => (
              <AnimatedSection key={i} delay={i * 0.07}>
                <motion.article
                  className="card-premium card-gold-hover rounded-2xl border border-border bg-card overflow-hidden group cursor-pointer h-full flex flex-col"
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {/* Card header gradient */}
                  <div className={`h-44 bg-gradient-to-br ${articleColors[i % articleColors.length]} relative flex items-end p-5`}>
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/20 border border-gold/30 text-gold text-xs font-semibold ${fontClass}`}>
                      <Tag size={11} />
                      {article.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className={`p-6 flex flex-col flex-1 ${isRTL ? 'text-right' : 'text-left'}`}>
                    <div className={`flex items-center gap-2 text-muted-foreground text-xs mb-3 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
                      <Calendar size={12} />
                      <span className={fontClass}>2024</span>
                    </div>
                    <h3 className={`text-lg font-bold text-foreground mb-3 leading-snug group-hover:text-gold transition-colors ${fontClass}`}>
                      {article.title}
                    </h3>
                    <p className={`text-muted-foreground text-sm leading-relaxed flex-1 mb-5 ${fontClass}`}>
                      {article.excerpt}
                    </p>
                    <Link
                      to={`/articles/${i}`}
                      className={`inline-flex items-center gap-1 text-gold text-sm font-semibold hover:gap-2 transition-all self-start ${isRTL ? 'self-end flex-row-reverse' : ''} ${fontClass}`}
                    >
                      {t('articles.readMore')}
                      {isRTL ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
                    </Link>
                  </div>
                </motion.article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};

export default Articles;
