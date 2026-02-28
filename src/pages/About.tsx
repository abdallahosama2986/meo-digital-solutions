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

      {/* ─── Hero (Dark — matching Home) ─── */}
      <section
        className="relative min-h-[60vh] flex items-center overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80')`,
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
              <span className={`text-sm font-semibold ${fontClass}`} style={{ color: '#e4a703' }}>{t('about.badge')}</span>
            </div>
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 max-w-3xl mx-auto ${fontClass}`}>
              {t('about.title')}
            </h1>
            <p className={`text-white/70 max-w-xl mx-auto mt-6 text-lg ${fontClass}`}>{t('about.story')}</p>
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

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className={`grid lg:grid-cols-2 gap-16 items-center`}>
            <AnimatedSection direction={isRTL ? 'right' : 'left'}>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img src={aboutImage} alt="MEO Office" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                {/* Stats overlay */}
                <div className="absolute bottom-4 start-4 end-4 grid grid-cols-3 gap-3">
                  {[
                    { v: '10+', l: isRTL ? 'سنوات' : 'Years' },
                    { v: '20+', l: isRTL ? 'مقهى' : 'Cafes' },
                    { v: '15+', l: isRTL ? 'مطعم' : 'Restaurants' },
                  ].map((s, i) => (
                    <div key={i} className="bg-white/90 backdrop-blur-sm rounded-xl p-3 text-center border border-gold/20">
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

      {/* Vision & Mission — light version */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <span className={`section-label ${fontClass}`}>{isRTL ? 'رؤيتنا ورسالتنا' : 'Vision & Mission'}</span>
            <h2 className={`text-display font-bold text-foreground mt-3 ${fontClass}`}>
              {isRTL ? 'ما نسعى إليه' : 'What We Strive For'}
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="p-8 rounded-2xl border border-gold/20 bg-card hover:border-gold/50 hover:shadow-card-hover transition-all duration-300 h-full group card-premium">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold mb-6 group-hover:bg-gradient-gold group-hover:text-white transition-all duration-300">
                  <Eye size={24} />
                </div>
                <h3 className={`text-xl font-bold text-foreground mb-4 ${fontClass}`}>{t('about.vision.label')}</h3>
                <p className={`text-muted-foreground leading-relaxed ${fontClass}`}>{t('about.vision.text')}</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="p-8 rounded-2xl border border-gold/30 bg-gold/5 hover:border-gold/60 hover:shadow-card-hover transition-all duration-300 h-full group card-premium">
                <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center text-white mb-6">
                  <Target size={24} />
                </div>
                <h3 className={`text-xl font-bold text-foreground mb-4 ${fontClass}`}>{t('about.mission.label')}</h3>
                <p className={`text-muted-foreground leading-relaxed ${fontClass}`}>{t('about.mission.text')}</p>
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
