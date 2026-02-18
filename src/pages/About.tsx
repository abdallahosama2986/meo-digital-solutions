import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Eye, Target, Lightbulb, Award, Rocket, TrendingUp } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { useLanguage } from '@/contexts/LanguageContext';
import aboutImage from '@/assets/about-image.jpg';

const valueIcons = [<Lightbulb size={24} />, <Rocket size={24} />, <TrendingUp size={24} />, <Award size={24} />];

const About: React.FC = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const fontClass = isRTL ? 'font-tajawal' : 'font-poppins';
  const values = t('about.values.items', { returnObjects: true }) as Array<{ title: string; desc: string }>;

  return (
    <HelmetProvider>
      <Helmet>
        <title>{isRTL ? 'عن المكتب | مكتب الخبرات المتعددة' : 'About | Multiple Experiences Office'}</title>
        <meta name="description" content={t('about.story')} />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-40 pb-24 dark-section overflow-hidden">
        <div className="absolute inset-0">
          <img src={aboutImage} alt="" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-b from-hero via-hero/80 to-hero" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className={`section-label ${fontClass}`}>{t('about.badge')}</span>
            <h1 className={`text-display font-bold text-white mt-4 max-w-3xl mx-auto ${fontClass}`}>
              {t('about.title')}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className={`grid lg:grid-cols-2 gap-16 items-center`}>
            <AnimatedSection direction={isRTL ? 'right' : 'left'}>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img src={aboutImage} alt="MEO Office" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-hero/40 to-transparent" />
                {/* Stats overlay */}
                <div className="absolute bottom-4 start-4 end-4 grid grid-cols-3 gap-3">
                  {[
                    { v: '10+', l: isRTL ? 'سنوات' : 'Years' },
                    { v: '20+', l: isRTL ? 'مقهى' : 'Cafes' },
                    { v: '15+', l: isRTL ? 'مطعم' : 'Restaurants' },
                  ].map((s, i) => (
                    <div key={i} className="bg-card/80 backdrop-blur-sm rounded-xl p-3 text-center border border-gold/20">
                      <div className={`text-2xl font-bold text-gradient-gold ${fontClass}`}>{s.v}</div>
                      <div className={`text-xs text-foreground/70 ${fontClass}`}>{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction={isRTL ? 'left' : 'right'}>
              <div className={isRTL ? 'text-right' : 'text-left'}>
                <span className={`section-label ${fontClass}`}>{isRTL ? 'من نحن' : 'Who We Are'}</span>
                <h2 className={`text-display font-bold text-foreground mt-3 mb-6 ${fontClass}`}>
                  {isRTL ? 'الخبرة والاحترافية تجعلنا اختيارك الأول' : 'Experience & Professionalism Make Us Your First Choice'}
                </h2>
                <p className={`text-muted-foreground leading-relaxed mb-5 ${fontClass}`}>{t('about.story')}</p>
                <p className={`text-muted-foreground leading-relaxed ${fontClass}`}>{t('about.story2')}</p>
                <p className={`text-muted-foreground leading-relaxed mt-4 ${fontClass}`}>{t('about.location')}</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding dark-section">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-gold/40 transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold mb-6">
                  <Eye size={24} />
                </div>
                <h3 className={`text-xl font-bold text-white mb-4 ${fontClass}`}>{t('about.vision.label')}</h3>
                <p className={`text-white/60 leading-relaxed ${fontClass}`}>{t('about.vision.text')}</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="p-8 rounded-2xl border border-gold/30 bg-gold/5 h-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center text-white mb-6">
                  <Target size={24} />
                </div>
                <h3 className={`text-xl font-bold text-white mb-4 ${fontClass}`}>{t('about.mission.label')}</h3>
                <p className={`text-white/60 leading-relaxed ${fontClass}`}>{t('about.mission.text')}</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className={`section-label ${fontClass}`}>{t('about.values.label')}</span>
            <h2 className={`text-display font-bold text-foreground mt-3 ${fontClass}`}>{t('about.values.title')}</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="text-center p-6 rounded-2xl border border-border hover:border-gold/50 hover:shadow-card transition-all duration-300 bg-card group h-full card-premium card-gold-hover">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold mx-auto mb-4 group-hover:bg-gradient-gold group-hover:text-white transition-all duration-300">
                    {valueIcons[i]}
                  </div>
                  <h3 className={`font-bold text-foreground mb-2 ${fontClass}`}>{val.title}</h3>
                  <p className={`text-muted-foreground text-sm leading-relaxed ${fontClass}`}>{val.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};

export default About;
