import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import {
  ChevronLeft, ChevronRight, Star, CheckCircle2,
  BarChart3, Shield, Settings, Users, BookOpen,
  TrendingUp, Award, Lock, Cpu, ArrowLeft, ArrowRight
} from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { useLanguage } from '@/contexts/LanguageContext';
import HeroIllustration from '@/components/HeroIllustration';

// Animated counter hook
const useCounter = (target: number, duration = 2000, inView: boolean) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, inView]);
  return count;
};

const AnimatedStat: React.FC<{ value: number; label: string; fontClass: string; inView: boolean }> = ({ value, label, fontClass, inView }) => {
  const count = useCounter(value, 2000, inView);
  return (
    <div>
      <div className={`text-3xl font-bold text-gradient-gold ${fontClass}`}>{count}+</div>
      <div className={`text-muted-foreground text-xs mt-1 ${fontClass}`}>{label}</div>
    </div>
  );
};

const StatsSection: React.FC<{ stats: { value: number; label: string }[]; fontClass: string }> = ({ stats, fontClass }) => {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true });
  return (
    <motion.div
      ref={statsRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: statsInView ? 1 : 0 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className="flex gap-10 mt-14 pt-10 border-t border-border"
    >
      {stats.map((stat, i) => (
        <AnimatedStat key={i} value={stat.value} label={stat.label} fontClass={fontClass} inView={statsInView} />
      ))}
    </motion.div>
  );
};
const rotatingWordsAr = ['باحتراف', 'بدقة عالية', 'مع دعم مستمر', 'بأمان'];
const rotatingWordsEn = ['Professionally', 'With Precision', 'With Ongoing Support', 'Securely'];

const RotatingHeroTitle: React.FC<{ isRTL: boolean; fontClass: string }> = ({ isRTL, fontClass }) => {
  const words = isRTL ? rotatingWordsAr : rotatingWordsEn;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex(prev => (prev + 1) % words.length), 2800);
    return () => clearInterval(timer);
  }, [words.length]);

  return (
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className={`text-hero text-foreground mb-6 leading-tight ${fontClass}`}
    >
      <span className="text-gradient-gold">{isRTL ? 'ندير ' : 'We Manage '}</span>
      {isRTL ? 'حساباتك المالية ' : 'Your Financial Operations '}
      <span className="inline-block relative overflow-hidden align-bottom" style={{ minWidth: isRTL ? '140px' : '200px', height: '1.2em' }}>
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            className="absolute inset-0 text-gradient-gold"
            initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -30, filter: 'blur(6px)' }}
            transition={{ duration: 0.45 }}
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    </motion.h1>
  );
};

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

              <RotatingHeroTitle isRTL={isRTL} fontClass={fontClass} />

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
              <StatsSection
                stats={[
                  { value: 10, label: t('hero.stats.years') },
                  { value: 20, label: t('hero.stats.cafes') },
                  { value: 15, label: t('hero.stats.restaurants') },
                ]}
                fontClass={fontClass}
              />
            </div>

            {/* Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
              className="hidden lg:block relative"
            >
              <HeroIllustration isRTL={isRTL} />
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

      {/* ─── SERVICES (Reference Card Style) ─── */}
      <section className="section-padding bg-muted/20">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className={`section-label ${fontClass}`}>{t('services.label')}</span>
            <h2 className={`text-display font-bold text-foreground mt-3 mb-3 ${fontClass}`}>
              {isRTL
                ? <><span className="text-gradient-gold">خدماتنا</span>{' '}المتكاملة لنمو منشأتك</>
                : <><span className="text-gradient-gold">Our</span> Integrated Services</>
              }
            </h2>
            <p className={`text-muted-foreground text-base leading-relaxed max-w-2xl mx-auto ${fontClass}`}>{t('services.subtitle')}</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceKeys.map((key, i) => (
              <AnimatedSection key={key} delay={i * 0.07}>
                <div className="relative rounded-[20px] p-8 min-h-[260px] overflow-hidden shadow-[0px_8px_24px_rgba(0,0,0,0.04)] hover:shadow-[0px_12px_32px_rgba(0,0,0,0.06)] transition-all duration-300 bg-card border border-border group">
                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: 'linear-gradient(235.96deg, hsl(var(--gold) / 0.08) 0%, transparent 101.21%)' }}
                  />
                  <div className="relative z-10">
                    {/* Icon box */}
                    <div className="w-14 h-14 rounded-xl bg-gold flex items-center justify-center mb-5 text-white group-hover:scale-110 transition-transform duration-300">
                      {serviceIcons[i]}
                    </div>
                    <h3 className={`text-lg font-bold text-foreground mb-3 leading-snug ${fontClass}`}>
                      {t(`services.items.${key}.title`)}
                    </h3>
                    <p className={`text-sm text-muted-foreground leading-relaxed ${fontClass}`}>
                      {t(`services.items.${key}.desc`)}
                    </p>
                    <Link
                      to="/services"
                      className={`inline-block mt-5 text-sm font-medium text-gold hover:underline ${fontClass}`}
                    >
                      {isRTL ? 'معرفة المزيد ←' : 'Learn more →'}
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY US (Light) ─── */}
      <section className="section-padding bg-muted/30 relative overflow-hidden">
        {/* Subtle blob */}
        <div className="absolute top-0 end-0 w-72 h-72 rounded-full bg-gold/6 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 start-0 w-64 h-64 rounded-full bg-gold/4 blur-3xl pointer-events-none" />
        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className={`section-label ${fontClass}`}>{t('why.label')}</span>
            <h2 className={`text-display font-bold text-foreground mt-3 ${fontClass}`}>{t('why.title')}</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyKeys.map((key, i) => (
              <AnimatedSection key={key} delay={i * 0.1}>
                <div className="text-center p-8 rounded-2xl border border-border bg-card hover:border-gold/40 hover:shadow-card-hover transition-all duration-300 group h-full card-premium card-gold-hover">
                  <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center text-gold mx-auto mb-5 group-hover:bg-gradient-gold group-hover:text-white transition-all duration-300">
                    {whyIcons[i]}
                  </div>
                  <h3 className={`text-foreground font-bold text-lg mb-3 ${fontClass}`}>{t(`why.items.${key}.title`)}</h3>
                  <p className={`text-muted-foreground text-sm leading-relaxed ${fontClass}`}>{t(`why.items.${key}.desc`)}</p>
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
              <div className="relative bg-card border-2 border-gold/50 rounded-2xl p-8 h-full shadow-gold overflow-hidden card-premium">
                {/* Decorative blob */}
                <div className="absolute top-0 end-0 w-40 h-40 rounded-bl-full bg-gold/8 pointer-events-none" />
                <div className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} px-3 py-1 rounded-full bg-gradient-gold text-white text-xs font-bold ${fontClass}`}>
                  {t('packages.popular')}
                </div>
                <div className={`text-sm font-semibold text-gold mb-2 ${fontClass}`}>{t('packages.business.name')}</div>
                <p className={`text-muted-foreground text-sm mb-8 ${fontClass}`}>{t('packages.business.desc')}</p>
                <ul className="space-y-3 mb-8">
                  {(t('packages.business.features', { returnObjects: true }) as string[]).map((f, i) => (
                    <li key={i} className={`flex items-center gap-3 text-sm text-foreground ${isRTL ? 'flex-row-reverse' : ''} ${fontClass}`}>
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

      {/* ─── TESTIMONIALS (Card Carousel) ─── */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className={`section-label ${fontClass}`}>{t('testimonials.label')}</span>
            <h2 className={`text-display font-bold text-foreground mt-3 ${fontClass}`}>{t('testimonials.title')}</h2>
            <p className={`text-muted-foreground text-base mt-3 ${fontClass}`}>
              {isRTL ? 'تجارب حقيقية من عملاء يثقون بخدماتنا ويشهدون بجودتها.' : 'Real experiences from clients who trust our services.'}
            </p>
          </AnimatedSection>

          <div className="relative">
            {/* Cards container */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out gap-6"
                style={{ transform: `translateX(${isRTL ? testimonialIndex * (100 / Math.min(testimonials.length, 3)) : -(testimonialIndex * (100 / Math.min(testimonials.length, 3)))}%)` }}
              >
                {testimonials.map((item, i) => (
                  <div
                    key={i}
                    className="min-w-0 shrink-0 grow-0 basis-full md:basis-[calc(33.333%-1rem)] my-4"
                  >
                    <div className="relative h-full rounded-[18px] border border-gold/20 bg-card px-6 pt-10 pb-6 shadow-card hover:shadow-card-hover transition-all duration-300">
                      {/* Quote icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className={`absolute top-6 ${isRTL ? 'left-6' : 'right-6'} h-8 w-8`}
                        fill="hsl(var(--gold))"
                        stroke="hsl(var(--gold))"
                        strokeWidth="0.5"
                      >
                        <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                        <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                      </svg>

                      {/* Stars */}
                      <div className="my-5 flex gap-1">
                        {[...Array(5)].map((_, si) => (
                          <Star key={si} size={16} className="text-gold fill-gold" />
                        ))}
                      </div>

                      {/* Text */}
                      <p className={`mb-10 text-[15px] leading-[1.9] text-foreground ${fontClass}`}>
                        "{item.text}"
                      </p>

                      {/* Author */}
                      <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <div className="h-10 w-10 rounded-full bg-gradient-gold flex items-center justify-center text-white font-bold text-sm">
                          {item.name?.charAt(0)}
                        </div>
                        <div className={isRTL ? 'text-right' : 'text-left'}>
                          <p className={`text-sm font-semibold text-foreground ${fontClass}`}>{item.name}</p>
                          <p className={`text-xs text-muted-foreground ${fontClass}`}>{item.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation arrows (desktop) */}
            <div className="hidden lg:flex">
              <button
                onClick={() => setTestimonialIndex(prev => Math.max(0, prev - 1))}
                className="absolute -start-12 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full border border-border bg-card shadow-card hover:bg-accent transition-colors flex items-center justify-center"
              >
                {isRTL ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
              </button>
              <button
                onClick={() => setTestimonialIndex(prev => Math.min(Math.max(0, testimonials.length - 3), prev + 1))}
                className="absolute -end-12 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full border border-border bg-card shadow-card hover:bg-accent transition-colors flex items-center justify-center"
              >
                {isRTL ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
              </button>
            </div>

            {/* Dots */}
            <div className="mt-10 flex justify-center gap-2.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTestimonialIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === testimonialIndex ? 'w-6 bg-gold' : 'w-2 bg-border hover:bg-gold/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA (Gold Card) ─── */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <AnimatedSection>
            <div
              className="relative rounded-2xl py-14 px-6 overflow-hidden text-center"
              style={{
                background: 'linear-gradient(135deg, hsl(38 50% 57%), hsl(36 55% 42%))',
              }}
            >
              {/* Decorative pattern overlay */}
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 40%), radial-gradient(circle at 60% 80%, rgba(255,255,255,0.12) 0%, transparent 45%)`,
                }}
              />
              {/* Geometric shapes */}
              <div className="absolute top-0 start-0 w-32 h-32 rounded-full bg-white/10 -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 end-0 w-48 h-48 rounded-full bg-white/5 translate-x-1/3 translate-y-1/3" />
              <div className="absolute top-1/2 end-10 w-20 h-20 rounded-full border border-white/10" />

              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className={`text-2xl md:text-4xl font-bold text-white mb-6 ${fontClass}`}>
                  {t('cta.title')}
                </h2>
                <p className={`text-lg md:text-xl text-white/85 mb-8 max-w-2xl mx-auto ${fontClass}`}>
                  {t('cta.subtitle')}
                </p>
                <Link
                  to="/contact"
                  className={`inline-flex items-center gap-2 bg-white text-gold-dark hover:bg-white/90 text-lg px-10 py-3.5 rounded-full shadow-xl font-bold transition-all duration-300 hover:scale-105 ${fontClass}`}
                >
                  {t('cta.button')}
                  {isRTL ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </HelmetProvider>
  );
};

export default Home;
