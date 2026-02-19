import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import {
  ChevronLeft, ChevronRight, Star, CheckCircle2,
  BarChart3, Shield, Settings, Users, BookOpen,
  TrendingUp, Award, Lock, Cpu, ArrowLeft, ArrowRight
} from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { useLanguage } from '@/contexts/LanguageContext';
import heroIllustration from '@/assets/hero-illustration.jpg';

const serviceIcons = [
  <BarChart3 size={24} />,
  <Settings size={24} />,
  <TrendingUp size={24} />,
  <Users size={24} />,
  <BookOpen size={24} />,
  <Cpu size={24} />,
];

const whyIcons = [
  <Award size={32} />,
  <Users size={32} />,
  <Lock size={32} />,
  <Cpu size={32} />,
];

const partnerLogos = [
  'https://alkhebrat.sa/wp-content/uploads/2024/11/3.jpg',
  'https://alkhebrat.sa/wp-content/uploads/2024/11/3-Copy.jpg',
  'https://alkhebrat.sa/wp-content/uploads/2024/11/3-Copy-9.jpg',
  'https://alkhebrat.sa/wp-content/uploads/2024/11/3-Copy-8.jpg',
  'https://alkhebrat.sa/wp-content/uploads/2024/11/3-Copy-7.jpg',
  'https://alkhebrat.sa/wp-content/uploads/2024/11/3-Copy-6.jpg',
  'https://alkhebrat.sa/wp-content/uploads/2024/11/3-Copy-5.jpg',
  'https://alkhebrat.sa/wp-content/uploads/2024/11/3-Copy-4.jpg',
  'https://alkhebrat.sa/wp-content/uploads/2024/11/3-Copy-3.jpg',
  'https://alkhebrat.sa/wp-content/uploads/2024/11/3-Copy-2.jpg',
];

// Infinite Marquee Component
const InfiniteMarquee: React.FC<{ logos: string[]; speed?: number }> = ({ logos, speed = 35 }) => {
  const doubled = [...logos, ...logos];
  return (
    <div className="relative overflow-hidden w-full" dir="ltr">
      {/* Left fade */}
      <div className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, hsl(var(--background)), transparent)' }} />
      {/* Right fade */}
      <div className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, hsl(var(--background)), transparent)' }} />

      <div
        className="flex gap-8 items-center"
        style={{
          animation: `marquee-scroll ${speed}s linear infinite`,
          width: 'max-content',
        }}
      >
        {doubled.map((src, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-28 h-20 flex items-center justify-center bg-white rounded-xl border border-border p-3 shadow-sm"
          >
            <img
              src={src}
              alt={`Partner ${(i % logos.length) + 1}`}
              className="max-h-full max-w-full object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

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

      {/* ─── HERO (Light) ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(hsl(var(--gold)) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        {/* Gold accent blobs */}
        <div className="absolute top-1/4 end-1/3 w-72 h-72 rounded-full bg-gold/8 blur-3xl" />
        <div className="absolute bottom-1/4 start-1/4 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute top-0 end-0 w-1/2 h-full bg-gradient-to-l from-gold/5 to-transparent" />

        <div className="container-custom relative z-10 pt-28 pb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/8 mb-6"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                <span className={`text-gold text-sm font-semibold ${fontClass}`}>{t('hero.badge')}</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className={`text-hero text-foreground mb-6 leading-tight ${fontClass}`}
              >
                <span className="text-gradient-gold">{isRTL ? 'ندير' : 'We Manage'} </span>
                {isRTL
                  ? 'حساباتك المالية باحتراف'
                  : 'Your Financial Operations Professionally'}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`text-muted-foreground text-lg mb-10 leading-relaxed max-w-lg ${fontClass}`}
              >
                {t('hero.subtitle')}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  to="/contact"
                  className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-gold text-white font-semibold text-sm shadow-gold hover:shadow-xl transition-all duration-300 hover:scale-105 ${fontClass}`}
                >
                  {t('hero.cta1')}
                </Link>
                <Link
                  to="/services"
                  className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-gold/40 text-foreground font-semibold text-sm hover:border-gold hover:text-gold transition-all duration-300 ${fontClass}`}
                >
                  {t('hero.cta2')}
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex gap-10 mt-14 pt-10 border-t border-border"
              >
                {[
                  { value: '10+', label: t('hero.stats.years') },
                  { value: '20+', label: t('hero.stats.cafes') },
                  { value: '15+', label: t('hero.stats.restaurants') },
                ].map((stat, i) => (
                  <div key={i}>
                    <div className={`text-3xl font-bold text-gradient-gold ${fontClass}`}>{stat.value}</div>
                    <div className={`text-muted-foreground text-xs mt-1 ${fontClass}`}>{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: isRTL ? -40 : 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
              className="hidden lg:block relative"
            >
              <div className="relative rounded-3xl overflow-hidden border border-gold/20 shadow-card">
                <img
                  src={heroIllustration}
                  alt="Financial Growth"
                  className="w-full h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              </div>
              {/* Floating card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                className="absolute -bottom-6 -start-8 bg-card border border-gold/20 rounded-2xl p-4 shadow-gold"
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

      {/* ─── SERVICES (Reference Style) ─── */}
      <section className="section-padding bg-muted/20">
        <div className="container-custom">
          <AnimatedSection className="mb-12">
            <span className={`section-label ${fontClass}`}>{t('services.label')}</span>
            <h2 className={`text-display font-bold text-foreground mt-3 mb-3 max-w-xl ${fontClass}`}>
              {isRTL
                ? <><span className="text-gradient-gold">خدماتنا</span> {' '}المتكاملة لنمو منشأتك</>
                : <><span className="text-gradient-gold">Our</span> Integrated Services</>
              }
            </h2>
            <p className={`text-muted-foreground text-base leading-relaxed ${fontClass}`}>{t('services.subtitle')}</p>
          </AnimatedSection>

          {/* Horizontal scroll cards — reference style */}
          <div className="overflow-x-auto scrollbar-hide pb-4">
            <div className="flex gap-5 flex-wrap lg:flex-nowrap" style={{ minWidth: 'max-content' }}>
              {serviceKeys.map((key, i) => (
                <AnimatedSection key={key} delay={i * 0.07} className="flex-shrink-0 w-full sm:w-[420px]">
                  <div className="bg-card rounded-2xl border border-border/60 hover:border-gold/40 p-6 flex flex-col h-full transition-all duration-300 group shadow-card hover:shadow-card-hover"
                    style={{ paddingBottom: 0 }}>
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex flex-col gap-2">
                        <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all duration-300">
                          {serviceIcons[i]}
                        </div>
                        <div>
                          <h3 className={`text-xl font-bold text-foreground leading-tight tracking-tight ${fontClass}`}>
                            {t(`services.items.${key}.title`)}
                          </h3>
                          <div className="h-0.5 w-20 rounded-full bg-gold/40 mt-1.5" />
                        </div>
                      </div>
                      <Link
                        to="/services"
                        className={`flex items-center gap-1 text-muted-foreground font-medium hover:text-gold transition-colors text-sm whitespace-nowrap hover:underline ${fontClass}`}
                      >
                        <span>{isRTL ? 'اعرف المزيد' : 'Learn More'}</span>
                        <span>{isRTL ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}</span>
                      </Link>
                    </div>

                    {/* Body + image */}
                    <div className="flex flex-col sm:flex-row gap-4 flex-1">
                      <div className={`flex-1 mb-4 text-muted-foreground text-sm leading-relaxed ${fontClass}`}>
                        <p>{t(`services.items.${key}.desc`)}</p>
                      </div>
                      {/* Decorative image strip */}
                      <div className="flex items-end justify-end sm:w-[40%]">
                        <div className="bg-gold/5 rounded-xl rounded-bl-none rounded-br-none p-4 pb-0 w-full">
                          <div className="w-full h-24 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-2xl bg-gold/15 flex items-center justify-center text-gold opacity-60">
                              {serviceIcons[i]}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
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

      {/* ─── PARTNERS MARQUEE ─── */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <span className={`section-label ${fontClass}`}>{isRTL ? 'شركاؤنا' : 'Our Partners'}</span>
            <h2 className={`text-display font-bold text-foreground mt-3 ${fontClass}`}>
              {isRTL ? 'موثوق من قبل شركات رائدة' : 'Trusted by Leading Companies'}
            </h2>
          </AnimatedSection>

          <InfiniteMarquee logos={partnerLogos} speed={30} />
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
                <div className="w-12 h-0.5 bg-gradient-gold mx-auto mb-6" />
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
            <span className={`section-label ${fontClass}`}>{isRTL ? 'ابدأ الآن' : 'Start Now'}</span>
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
