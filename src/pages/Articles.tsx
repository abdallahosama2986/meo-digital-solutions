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

      {/* ─── Hero (Dark — matching Home) ─── */}
      <section
        className="relative min-h-[60vh] flex items-center overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=1920&q=80')`,
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
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(228,167,3,0.15) 0%, transparent 70%)', filter: 'blur(40px)' }} />

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
              <span className={`text-sm font-semibold ${fontClass}`} style={{ color: '#e4a703' }}>{t('articles.label')}</span>
            </div>
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 ${fontClass}`}>{t('articles.title')}</h1>
            <p className={`text-white/70 max-w-xl mx-auto mt-6 text-lg ${fontClass}`}>{t('articles.subtitle')}</p>
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
