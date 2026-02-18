import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import {
  ChevronLeft, ChevronRight, Star, CheckCircle2,
  BarChart3, Shield, Settings, Users, BookOpen,
  TrendingUp, Award, Lock, Cpu
} from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { useLanguage } from '@/contexts/LanguageContext';
import heroIllustration from '@/assets/hero-illustration.jpg';

const serviceIcons = [
  <BarChart3 size={28} />,
  <Settings size={28} />,
  <TrendingUp size={28} />,
  <Users size={28} />,
  <BookOpen size={28} />,
  <Cpu size={28} />,
];

const whyIcons = [
  <Award size={32} />,
  <Users size={32} />,
  <Lock size={32} />,
  <Cpu size={32} />,
];

const Home: React.FC = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const testimonials = t('testimonials.items', { returnObjects: true }) as Array<{ name: string; role: string; text: string }>;
  const serviceKeys = ['accounting', 'admin', 'operational', 'marketing', 'restaurant', 'systems'] as const;
  const whyKeys = ['accuracy', 'experience', 'confidentiality', 'systems'] as const;

  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const fontClass = isRTL ? 'font-tajawal' : 'font-poppins';

  return (
    <HelmetProvider>
      <Helmet>
        <title>مكتب الخبرات المتعددة | Multiple Experiences Office - MEO</title>
        <meta name="description" content="مكتب الخبرات المتعددة للاستشارات التجارية - خدمات محاسبية وإدارية وتشغيلية وتسويقية متكاملة للمنشآت الصغيرة والمتوسطة في المملكة العربية السعودية" />
      </Helmet>

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-hero">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={heroIllustration}
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-hero/60 via-hero/40 to-hero" />
        </div>

        {/* Decorative gold shapes */}
        <div className="absolute top-1/4 start-1/4 w-64 h-64 rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute bottom-1/3 end-1/4 w-96 h-96 rounded-full bg-gold/8 blur-3xl" />
        <div className="absolute top-0 end-0 w-px h-2/3 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />

        <div className="container-custom relative z-10 pt-28 pb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left / Text */}
            <div className={isRTL ? 'order-1' : 'order-1'}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/40 bg-gold/10 mb-6"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                <span className={`text-gold text-sm font-medium ${fontClass}`}>{t('hero.badge')}</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className={`text-hero text-white mb-6 leading-tight ${fontClass}`}
              >
                {t('hero.title')}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`text-white/70 text-lg mb-10 leading-relaxed max-w-lg ${fontClass}`}
              >
                {t('hero.subtitle')}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className={`flex flex-wrap gap-4 ${isRTL ? 'flex-row' : 'flex-row'}`}
              >
                <Link
                  to="/contact"
                  className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-gold text-white font-semibold text-sm shadow-gold hover:shadow-xl transition-all duration-300 hover:scale-105 ${fontClass}`}
                >
                  {t('hero.cta1')}
                </Link>
                <Link
                  to="/services"
                  className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/30 text-white font-semibold text-sm hover:border-gold hover:text-gold transition-all duration-300 ${fontClass}`}
                >
                  {t('hero.cta2')}
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex gap-8 mt-14 pt-10 border-t border-white/10"
              >
                {[
                  { value: '10+', label: t('hero.stats.years') },
                  { value: '20+', label: t('hero.stats.cafes') },
                  { value: '15+', label: t('hero.stats.restaurants') },
                ].map((stat, i) => (
                  <div key={i}>
                    <div className={`text-3xl font-bold text-gradient-gold ${fontClass}`}>{stat.value}</div>
                    <div className={`text-white/50 text-xs mt-1 ${fontClass}`}>{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right / Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: isRTL ? -40 : 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
              className="hidden lg:block relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-gold/20 shadow-2xl">
                <img
                  src={heroIllustration}
                  alt="Financial Growth"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hero/60 to-transparent" />
              </div>
              {/* Floating card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                className="absolute -bottom-6 -start-8 bg-card/90 backdrop-blur-sm border border-gold/20 rounded-xl p-4 shadow-gold"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center">
                    <TrendingUp size={18} className="text-white" />
                  </div>
                  <div>
                    <div className={`text-sm font-bold text-foreground ${fontClass}`}>+35%</div>
                    <div className={`text-xs text-muted-foreground ${fontClass}`}>{isRTL ? 'نمو الأرباح' : 'Profit Growth'}</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-px h-10 bg-gradient-to-b from-gold to-transparent mx-auto" />
        </motion.div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className={`section-label ${fontClass}`}>{t('services.label')}</span>
            <h2 className={`text-display font-bold text-foreground mt-3 mb-4 ${fontClass}`}>{t('services.title')}</h2>
            <p className={`text-muted-foreground max-w-2xl mx-auto text-lg ${fontClass}`}>{t('services.subtitle')}</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceKeys.map((key, i) => (
              <AnimatedSection key={key} delay={i * 0.07}>
                <motion.div
                  className="card-premium card-gold-hover group p-7 rounded-2xl border border-border bg-card h-full cursor-pointer"
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center text-gold mb-5 group-hover:bg-gold group-hover:text-white transition-all duration-300">
                    {serviceIcons[i]}
                  </div>
                  <h3 className={`text-lg font-bold text-foreground mb-3 ${fontClass}`}>
                    {t(`services.items.${key}.title`)}
                  </h3>
                  <p className={`text-muted-foreground text-sm leading-relaxed mb-5 ${fontClass}`}>
                    {t(`services.items.${key}.desc`)}
                  </p>
                  <Link
                    to="/services"
                    className={`inline-flex items-center gap-1 text-gold text-sm font-semibold hover:gap-2 transition-all ${fontClass}`}
                  >
                    {t('services.learnMore')}
                    {isRTL ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
                  </Link>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY US ─── */}
      <section className="section-padding dark-section">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className={`section-label ${fontClass}`}>{t('why.label')}</span>
            <h2 className={`text-display font-bold text-white mt-3 ${fontClass}`}>{t('why.title')}</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyKeys.map((key, i) => (
              <AnimatedSection key={key} delay={i * 0.1}>
                <div className="text-center p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-gold/40 hover:bg-gold/5 transition-all duration-300 group h-full">
                  <div className="text-gold mx-auto mb-5 inline-block group-hover:scale-110 transition-transform duration-300">
                    {whyIcons[i]}
                  </div>
                  <h3 className={`text-white font-bold text-lg mb-3 ${fontClass}`}>{t(`why.items.${key}.title`)}</h3>
                  <p className={`text-white/50 text-sm leading-relaxed ${fontClass}`}>{t(`why.items.${key}.desc`)}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PACKAGES ─── */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className={`section-label ${fontClass}`}>{t('packages.label')}</span>
            <h2 className={`text-display font-bold text-foreground mt-3 mb-4 ${fontClass}`}>{t('packages.title')}</h2>
            <p className={`text-muted-foreground max-w-xl mx-auto ${fontClass}`}>{t('packages.subtitle')}</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Launch Package */}
            <AnimatedSection delay={0.1}>
              <div className="bg-card border border-border rounded-2xl p-8 h-full card-premium card-gold-hover">
                <div className={`text-sm font-semibold text-muted-foreground mb-2 ${fontClass}`}>{t('packages.launch.name')}</div>
                <p className={`text-muted-foreground text-sm mb-8 ${fontClass}`}>{t('packages.launch.desc')}</p>
                <ul className="space-y-3 mb-8">
                  {(t('packages.launch.features', { returnObjects: true }) as string[]).map((f, i) => (
                    <li key={i} className={`flex items-center gap-3 text-sm text-foreground ${isRTL ? 'flex-row-reverse' : ''} ${fontClass}`}>
                      <CheckCircle2 size={16} className="text-gold flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block text-center py-3 px-6 rounded-full border-2 border-gold text-gold font-semibold text-sm hover:bg-gold hover:text-white transition-all duration-300 ${fontClass}`}
                >
                  {t('packages.contact')}
                </Link>
              </div>
            </AnimatedSection>

            {/* Business Package */}
            <AnimatedSection delay={0.2}>
              <div className="relative bg-hero border border-gold/40 rounded-2xl p-8 h-full shadow-gold overflow-hidden">
                {/* Popular badge */}
                <div className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} px-3 py-1 rounded-full bg-gradient-gold text-white text-xs font-bold ${fontClass}`}>
                  {t('packages.popular')}
                </div>
                <div className={`text-sm font-semibold text-gold mb-2 ${fontClass}`}>{t('packages.business.name')}</div>
                <p className={`text-white/60 text-sm mb-8 ${fontClass}`}>{t('packages.business.desc')}</p>
                <ul className="space-y-3 mb-8">
                  {(t('packages.business.features', { returnObjects: true }) as string[]).map((f, i) => (
                    <li key={i} className={`flex items-center gap-3 text-sm text-white/80 ${isRTL ? 'flex-row-reverse' : ''} ${fontClass}`}>
                      <CheckCircle2 size={16} className="text-gold flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block text-center py-3 px-6 rounded-full bg-gradient-gold text-white font-semibold text-sm hover:shadow-gold transition-all duration-300 hover:scale-105 ${fontClass}`}
                >
                  {t('packages.cta')}
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <span className={`section-label ${fontClass}`}>{t('testimonials.label')}</span>
            <h2 className={`text-display font-bold text-foreground mt-3 ${fontClass}`}>{t('testimonials.title')}</h2>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-card border border-border rounded-2xl p-10 text-center card-premium"
              >
                {/* Gold line */}
                <div className="w-12 h-0.5 bg-gradient-gold mx-auto mb-6" />
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="text-gold fill-gold" />
                  ))}
                </div>
                <p className={`text-foreground/80 text-lg leading-relaxed mb-8 italic ${fontClass}`}>
                  "{testimonials[testimonialIndex]?.text}"
                </p>
                <div>
                  <div className={`font-bold text-foreground ${fontClass}`}>{testimonials[testimonialIndex]?.name}</div>
                  <div className={`text-muted-foreground text-sm mt-1 ${fontClass}`}>{testimonials[testimonialIndex]?.role}</div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="flex items-center justify-center gap-3 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTestimonialIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === testimonialIndex ? 'w-8 bg-gold' : 'w-2 bg-border hover:bg-gold/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative py-28 dark-section overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
        <div className="container-custom relative z-10 text-center">
          <AnimatedSection>
            <span className={`section-label ${fontClass}`}>{isRTL ? 'ابدأ الآن' : "Start Now"}</span>
            <h2 className={`text-display font-bold text-white mt-4 mb-6 max-w-2xl mx-auto ${fontClass}`}>
              {t('cta.title')}
            </h2>
            <p className={`text-white/60 max-w-xl mx-auto mb-10 text-lg ${fontClass}`}>{t('cta.subtitle')}</p>
            <Link
              to="/contact"
              className={`inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-gold text-white font-bold text-base shadow-gold hover:shadow-xl hover:scale-105 transition-all duration-300 ${fontClass}`}
            >
              {t('cta.button')}
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </HelmetProvider>
  );
};

export default Home;
