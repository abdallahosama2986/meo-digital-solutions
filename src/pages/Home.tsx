import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import {
  ChevronLeft, ChevronRight, Star, CheckCircle2,
  BarChart3, Shield, Settings, Users, BookOpen,
  TrendingUp, Award, Lock, Cpu, ArrowLeft, ArrowRight,
  Phone, Mail, MapPin
} from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.png';

// ─── Color palette ───
// Primary Blue:   #1d3b88
// Mid Blue:       #253d7a / #344672
// Light Blue:     #4d6090 / #7a8bb5
// Gold:           #e4a703 / #d5b550 / #d5ab2a

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

const AnimatedStat: React.FC<{ value: number; label: string; fontClass: string; inView: boolean; light?: boolean }> = ({ value, label, fontClass, inView, light }) => {
  const count = useCounter(value, 2000, inView);
  return (
    <div className="text-center">
      <div className={`text-4xl font-bold ${light ? 'text-white' : 'text-[#e4a703]'} ${fontClass}`}>{count}+</div>
      <div className={`text-sm mt-1 ${light ? 'text-white/70' : 'text-[#7a8bb5]'} ${fontClass}`}>{label}</div>
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
      className="flex gap-10 mt-14 pt-10 border-t border-white/20"
    >
      {stats.map((stat, i) => (
        <AnimatedStat key={i} value={stat.value} label={stat.label} fontClass={fontClass} inView={statsInView} light />
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
    const timer = setInterval(() => setIndex(prev => (prev + 1) % words.length), 1800);
    return () => clearInterval(timer);
  }, [words.length]);

  return (
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight ${fontClass}`}
    >
      <span style={{ color: '#e4a703' }}>{isRTL ? 'ندير ' : 'We Manage '}</span>
      {isRTL ? 'حساباتك المالية ' : 'Your Financial Operations '}
      <br />
      <span className="inline-block relative overflow-hidden align-bottom" style={{ minWidth: isRTL ? '300px' : '200px', height: '1.2em' }}>
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            className="absolute inset-0"
            style={{ color: '#e4a703' }}
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
      <div className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, hsl(var(--background)), transparent)' }} />
      <div className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, hsl(var(--background)), transparent)' }} />
      <div
        className="flex gap-8 items-center"
        style={{ animation: `marquee-scroll ${speed}s linear infinite`, width: 'max-content' }}
      >
        {doubled.map((src, i) => (
          <div key={i} className="flex-shrink-0 w-28 h-20 flex items-center justify-center bg-white rounded-xl border border-border p-3 shadow-sm">
            <img src={src} alt={`Partner ${(i % logos.length) + 1}`} className="max-h-full max-w-full object-contain" loading="lazy" />
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
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true });

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

      {/* ─── HERO — WordPress Style: Full BG Image + Dark Overlay ─── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Dark overlay — deep navy tint */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(29,59,136,0.92) 0%, rgba(37,61,122,0.85) 50%, rgba(52,70,114,0.80) 100%)' }}
        />

        {/* Gold accent diagonal stripe */}
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #e4a703 0px, #e4a703 1px, transparent 1px, transparent 60px)',
          }}
        />

        {/* Glowing gold blobs */}
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(228,167,3,0.15) 0%, transparent 70%)', filter: 'blur(40px)' }} />
        <div className="absolute bottom-32 left-10 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(228,167,3,0.10) 0%, transparent 70%)', filter: 'blur(60px)' }} />

        <div className="container-custom relative z-10 pt-28 pb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* ── LEFT: Text Content ── */}
            <div>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 mt-12"
                style={{ background: 'rgba(228,167,3,0.15)', border: '1px solid rgba(228,167,3,0.4)' }}
              >
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#e4a703' }} />
                <span className={`text-sm font-semibold ${fontClass}`} style={{ color: '#e4a703' }}>{t('hero.badge')}</span>
              </motion.div>

              <RotatingHeroTitle isRTL={isRTL} fontClass={fontClass} />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`text-white/75 text-lg mb-10 leading-relaxed max-w-lg ${fontClass}`}
              >
                {t('hero.subtitle')}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="https://wa.me/966539606358"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105 shadow-lg ${fontClass}`}
                  style={{ background: '#e4a703', color: '#1d3b88' }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#d5ab2a')}
                  onMouseLeave={e => (e.currentTarget.style.background = '#e4a703')}
                >
                  {t('hero.cta1')}
                </a>
                <Link
                  to="/services"
                  className={`inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm transition-all duration-300 border-2 text-white hover:text-[#1d3b88] hover:bg-white ${fontClass}`}
                  style={{ borderColor: 'rgba(255,255,255,0.5)' }}
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

            {/* ── RIGHT: Real Photo Card ── */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? -60 : 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease: 'easeOut' }}
              className="hidden lg:block relative"
            >
              {/* Main photo */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl"
                style={{ border: '3px solid rgba(228,167,3,0.4)' }}>
                <img
                  src="https://kshouf.com/wp-content/uploads/2025/05/%D9%85%D8%AD%D8%A7%D8%B3%D8%A8-%D9%82%D8%A7%D9%86%D9%88%D9%86%D9%8A.png"
                  alt="Professional business team"
                  className="w-full h-[480px] object-cover"
                />
                {/* Photo overlay gradient */}
                <div className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(29,59,136,0.6) 0%, transparent 60%)' }} />

                {/* Floating stat card — bottom left */}
                <motion.div
                  className="absolute bottom-6 left-6 rounded-xl px-5 py-4 shadow-xl"
                  style={{ background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(12px)' }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className={`text-2xl font-bold ${fontClass}`} style={{ color: '#1d3b88' }}>98%</div>
                  <div className={`text-xs text-gray-500 ${fontClass}`}>{isRTL ? 'نسبة رضا العملاء' : 'Client Satisfaction'}</div>
                </motion.div>

                {/* Floating badge — top right */}
                <motion.div
                  className="absolute top-6 right-6 rounded-xl px-4 py-3 shadow-xl"
                  style={{ background: '#e4a703' }}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                >
                  <div className={`text-sm font-bold text-white ${fontClass}`}>
                    {isRTL ? '١٠+ سنوات خبرة' : '10+ Years Experience'}
                  </div>
                </motion.div>
              </div>

              {/* Small accent photo */}
              <motion.div
                className="absolute -bottom-8 -right-8 w-40 h-40 rounded-2xl overflow-hidden shadow-xl"
                style={{ border: '3px solid #e4a703' }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                <img
                  src="https://cdn-ildkhmb.nitrocdn.com/LHnqhVLRtrQdyWKBnlqZWwWNyTtgNTSG/assets/images/optimized/rev-bbe3859/alameenksa.com/wp-content/uploads/2025/01/1626479454.png"
                  alt="Business professional"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Gold ring decoration */}
              <div
                className="absolute -top-6 -left-6 w-24 h-24 rounded-full border-4 border-dashed pointer-events-none"
                style={{ borderColor: 'rgba(228,167,3,0.3)' }}
              />
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-px h-10 mx-auto" style={{ background: 'linear-gradient(to bottom, #e4a703, transparent)' }} />
        </motion.div>
      </section>

      {/* ─── STATS BAR (Brand Blue) ─── */}
    

      {/* ─── PARTNERS MARQUEE ─── */}
      <section className="section-padding  bg-blue-50">
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

      {/* ─── SERVICES — Dark Blue BG ─── */}
      <section className="section-padding" style={{ background: '#253d7a' }}>
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span
              className={`inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 ${fontClass}`}
              style={{ background: 'rgba(228,167,3,0.15)', color: '#e4a703', border: '1px solid rgba(228,167,3,0.3)' }}
            >
              {t('services.label')}
            </span>
            <h2 className={`text-3xl md:text-4xl font-bold text-white mt-3 mb-3 ${fontClass}`}>
              {isRTL
                ? <><span style={{ color: '#e4a703' }}>خدماتنا</span> المتكاملة لنمو منشأتك</>
                : <><span style={{ color: '#e4a703' }}>Our</span> Integrated Services</>
              }
            </h2>
            <p className={`text-white/60 text-base leading-relaxed max-w-2xl mx-auto ${fontClass}`}>{t('services.subtitle')}</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceKeys.map((key, i) => (
              <AnimatedSection key={key} delay={i * 0.07}>
                <div
                  className="relative rounded-2xl p-8 min-h-[260px] overflow-hidden group transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(228,167,3,0.10)'; e.currentTarget.style.borderColor = 'rgba(228,167,3,0.3)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 text-white group-hover:scale-110 transition-transform duration-300"
                    style={{ background: '#e4a703' }}
                  >
                    {serviceIcons[i]}
                  </div>
                  <h3 className={`text-lg font-bold text-white mb-3 leading-snug ${fontClass}`}>
                    {t(`services.items.${key}.title`)}
                  </h3>
                  <p className={`text-sm text-white/60 leading-relaxed ${fontClass}`}>
                    {t(`services.items.${key}.desc`)}
                  </p>
                  <Link
                    to="/services"
                    className={`inline-block mt-5 text-sm font-semibold transition-colors ${fontClass}`}
                    style={{ color: '#e4a703' }}
                  >
                    {isRTL ? 'معرفة المزيد ←' : 'Learn more →'}
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY US — Light + Gold accent ─── */}
      <section className="section-padding relative overflow-hidden" style={{ background: '#f8f6f0' }}>
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(228,167,3,0.08) 0%, transparent 70%)', filter: 'blur(60px)' }}
        />
        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span
              className={`inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 ${fontClass}`}
              style={{ background: 'rgba(29,59,136,0.08)', color: '#1d3b88', border: '1px solid rgba(29,59,136,0.2)' }}
            >
              {t('why.label')}
            </span>
            <h2 className={`text-3xl md:text-4xl font-bold mt-3 ${fontClass}`} style={{ color: '#1d3b88' }}>
              {t('why.title')}
            </h2>
          </AnimatedSection>

          <div className={`grid lg:grid-cols-2 gap-16 items-center`}>
            {/* Real photo side */}
            <AnimatedSection direction={isRTL ? 'right' : 'left'}>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl"
                  style={{ border: '3px solid rgba(228,167,3,0.3)' }}>
                  <img
                    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=700&q=80"
                    alt="Business consulting team"
                    className="w-full h-[480px] object-cover"
                  />
                </div>
                {/* Floating achievement card */}
                <motion.div
                  className="absolute -bottom-6 -right-6 rounded-2xl p-5 shadow-xl"
                  style={{ background: '#1d3b88', minWidth: '180px' }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className={`text-3xl font-bold ${fontClass}`} style={{ color: '#e4a703' }}>15+</div>
                  <div className={`text-sm text-white/80 ${fontClass}`}>{isRTL ? 'سنة في السوق' : 'Years in Market'}</div>
                </motion.div>
                {/* Gold corner accent */}
                <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full"
                  style={{ background: '#e4a703', opacity: 0.2 }} />
              </div>
            </AnimatedSection>

            {/* Content side */}
            <div className="space-y-6">
              {whyKeys.map((key, i) => (
                <AnimatedSection key={key} delay={i * 0.12}>
                  <div className={`flex gap-5 items-start`}>
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(29,59,136,0.08)', color: '#1d3b88', border: '1px solid rgba(29,59,136,0.15)' }}
                    >
                      {whyIcons[i]}
                    </div>
                    <div>
                      <h3 className={`font-bold text-lg mb-1.5 ${fontClass}`} style={{ color: '#1d3b88' }}>
                        {t(`why.items.${key}.title`)}
                      </h3>
                      <p className={`text-sm leading-relaxed text-gray-600 ${fontClass}`}>
                        {t(`why.items.${key}.desc`)}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
              <AnimatedSection delay={0.5}>
                <a
                  href="https://wa.me/966539606358"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white mt-4 transition-all duration-300 hover:scale-105 shadow-lg ${fontClass}`}
                  style={{ background: '#1d3b88' }}
                >
                  {isRTL ? 'تواصل معنا' : 'Get In Touch'}
                  {isRTL ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
                </a>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PACKAGES — Gold/Blue Brand Colors ─── */}
      <section className="section-padding" style={{ background: '#344672' }}>
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span
              className={`inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 ${fontClass}`}
              style={{ background: 'rgba(228,167,3,0.2)', color: '#e4a703', border: '1px solid rgba(228,167,3,0.4)' }}
            >
              {t('packages.label')}
            </span>
            <h2 className={`text-3xl md:text-4xl font-bold text-white mt-3 mb-4 ${fontClass}`}>{t('packages.title')}</h2>
            <p className={`text-white/60 max-w-xl mx-auto ${fontClass}`}>{t('packages.subtitle')}</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Launch Package */}
            <AnimatedSection delay={0.1}>
              <div
                className="rounded-2xl p-8 h-full transition-all duration-300 hover:-translate-y-1"
                style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)' }}
              >
                <div className={`text-sm font-semibold text-white/60 mb-2 ${fontClass}`}>{t('packages.launch.name')}</div>
                <p className={`text-white/50 text-sm mb-8 ${fontClass}`}>{t('packages.launch.desc')}</p>
                <ul className="space-y-3 mb-8">
                  {(t('packages.launch.features', { returnObjects: true }) as string[]).map((f, i) => (
                    <li key={i} className={`flex items-center gap-3 text-sm text-white/80 ${fontClass}`}>
                      <CheckCircle2 size={16} style={{ color: '#e4a703', flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/966539606358"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center py-3 px-6 rounded-full border-2 font-semibold text-sm transition-all duration-300 hover:scale-105 ${fontClass}`}
                  style={{ borderColor: '#e4a703', color: '#e4a703' }}
                >
                  {t('packages.contact')}
                </a>
              </div>
            </AnimatedSection>

            {/* Business Package */}
            <AnimatedSection delay={0.2}>
              <div
                className="relative rounded-2xl p-8 h-full transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                style={{ background: '#e4a703' }}
              >
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full pointer-events-none"
                  style={{ background: 'rgba(255,255,255,0.1)', transform: 'translate(30%, -30%)' }} />
                <div
                  className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} px-3 py-1 rounded-full text-xs font-bold ${fontClass}`}
                  style={{ background: '#1d3b88', color: 'white' }}
                >
                  {t('packages.popular')}
                </div>
                <div className={`text-sm font-semibold mb-2 ${fontClass}`} style={{ color: '#1d3b88' }}>{t('packages.business.name')}</div>
                <p className={`text-sm mb-8 ${fontClass}`} style={{ color: 'rgba(29,59,136,0.75)' }}>{t('packages.business.desc')}</p>
                <ul className="space-y-3 mb-8">
                  {(t('packages.business.features', { returnObjects: true }) as string[]).map((f, i) => (
                    <li key={i} className={`flex items-center gap-3 text-sm ${fontClass}`} style={{ color: '#1d3b88' }}>
                      <CheckCircle2 size={16} style={{ color: '#1d3b88', flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/966539606358"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center py-3 px-6 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105 shadow-lg ${fontClass}`}
                  style={{ background: '#1d3b88', color: 'white' }}
                >
                  {t('packages.cta')}
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── ABOUT / REAL IMAGE SECTION ─── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span
                className={`inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 ${fontClass}`}
                style={{ background: 'rgba(228,167,3,0.1)', color: '#e4a703', border: '1px solid rgba(228,167,3,0.3)' }}
              >
                {isRTL ? 'من نحن' : 'About Us'}
              </span>
              <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${fontClass}`} style={{ color: '#1d3b88' }}>
                {isRTL ? 'مكتب الخبرات المتعددة — شريكك في النجاح' : 'Multiple Experiences Office — Your Success Partner'}
              </h2>
              <p className={`text-gray-600 leading-relaxed mb-6 ${fontClass}`}>
                {isRTL
                  ? 'نحن مكتب متخصص في تقديم الحلول المالية والإدارية المتكاملة للمنشآت الصغيرة والمتوسطة في المملكة العربية السعودية، مع خبرة تتجاوز عشر سنوات في السوق.'
                  : 'We are a specialized office providing comprehensive financial and administrative solutions for small and medium enterprises in Saudi Arabia, with over ten years of market experience.'
                }
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: <Award size={20} />, text: isRTL ? 'فريق معتمد ومحترف' : 'Certified Professional Team' },
                  { icon: <Shield size={20} />, text: isRTL ? 'سرية تامة للبيانات' : 'Full Data Confidentiality' },
                  { icon: <TrendingUp size={20} />, text: isRTL ? 'نتائج مضمونة' : 'Guaranteed Results' },
                  { icon: <Users size={20} />, text: isRTL ? 'دعم مستمر ٢٤/٧' : '24/7 Continuous Support' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(228,167,3,0.1)', color: '#e4a703' }}>
                      {item.icon}
                    </div>
                    <span className={`text-sm font-medium text-gray-700 ${fontClass}`}>{item.text}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/about"
                className={`inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white transition-all duration-300 hover:scale-105 ${fontClass}`}
                style={{ background: '#1d3b88' }}
              >
                {isRTL ? 'اعرف أكثر عنّا' : 'Learn More About Us'}
                {isRTL ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
              </Link>
            </AnimatedSection>

           
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="section-padding" style={{ background: '#4d6090' }}>
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span
              className={`inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 ${fontClass}`}
              style={{ background: 'rgba(228,167,3,0.2)', color: '#e4a703', border: '1px solid rgba(228,167,3,0.4)' }}
            >
              {t('testimonials.label')}
            </span>
            <h2 className={`text-3xl md:text-4xl font-bold text-white mt-3 ${fontClass}`}>{t('testimonials.title')}</h2>
            <p className={`text-white/60 text-base mt-3 ${fontClass}`}>
              {isRTL ? 'تجارب حقيقية من عملاء يثقون بخدماتنا.' : 'Real experiences from clients who trust our services.'}
            </p>
          </AnimatedSection>

          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out gap-6"
                style={{ transform: `translateX(${isRTL ? testimonialIndex * (100 / Math.min(testimonials.length, 3)) : -(testimonialIndex * (100 / Math.min(testimonials.length, 3)))}%)` }}
              >
                {testimonials.map((item, i) => (
                  <div key={i} className="min-w-0 shrink-0 grow-0 basis-full md:basis-[calc(33.333%-1rem)] my-4">
                    <div
                      className="relative h-full rounded-2xl px-6 pt-10 pb-6 transition-all duration-300"
                      style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
                        className={`absolute top-6 ${isRTL ? 'left-6' : 'right-6'}`}
                        fill="#e4a703" stroke="#e4a703" strokeWidth="0.5"
                      >
                        <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                        <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                      </svg>
                      <div className="my-5 flex gap-1">
                        {[...Array(5)].map((_, si) => (
                          <Star key={si} size={16} style={{ color: '#e4a703', fill: '#e4a703' }} />
                        ))}
                      </div>
                      <p className={`mb-10 text-[15px] leading-[1.9] text-white/80 ${fontClass}`}>"{item.text}"</p>
                      <div className="flex items-center gap-3">
                        <div
                          className="h-10 w-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                          style={{ background: '#e4a703' }}
                        >
                          {item.name?.charAt(0)}
                        </div>
                        <div className={isRTL ? 'text-right' : 'text-left'}>
                          <p className={`text-sm font-semibold text-white ${fontClass}`}>{item.name}</p>
                          <p className={`text-xs text-white/50 ${fontClass}`}>{item.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:flex">
              <button
                onClick={() => setTestimonialIndex(prev => Math.max(0, prev - 1))}
                className="absolute -start-12 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full flex items-center justify-center transition-colors"
                style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', color: 'white' }}
              >
                {isRTL ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
              </button>
              <button
                onClick={() => setTestimonialIndex(prev => Math.min(Math.max(0, testimonials.length - 3), prev + 1))}
                className="absolute -end-12 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full flex items-center justify-center transition-colors"
                style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', color: 'white' }}
              >
                {isRTL ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
              </button>
            </div>

            <div className="mt-10 flex justify-center gap-2.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTestimonialIndex(i)}
                  className="h-2 rounded-full transition-all duration-300"
                  style={{
                    width: i === testimonialIndex ? '24px' : '8px',
                    background: i === testimonialIndex ? '#e4a703' : 'rgba(255,255,255,0.3)',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTACT INFO STRIP ─── */}
      <section style={{ background: '#e4a703' }} className="py-10">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { icon: <Phone size={24} />, label: isRTL ? 'اتصل بنا' : 'Call Us', value: '+966 XX XXX XXXX' },
              { icon: <Mail size={24} />, label: isRTL ? 'راسلنا' : 'Email Us', value: 'info@alkhebrat.sa' },
              { icon: <MapPin size={24} />, label: isRTL ? 'موقعنا' : 'Location', value: isRTL ? 'المملكة العربية السعودية' : 'Saudi Arabia' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-[#e4a703]"
                  style={{ background: '#1d3b88' }}>
                  {item.icon}
                </div>
                <div className={`text-xs font-semibold text-[#1d3b88]/70 uppercase tracking-wide ${fontClass}`}>{item.label}</div>
                <div className={`font-bold text-[#1d3b88] ${fontClass}`}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA (Navy + Gold) ─── */}
      <section className="" style={{ background: '#1d3b88' }}>
        <div className="">
          <AnimatedSection>
            <div className="relative rounded-2xl py-16 px-6 overflow-hidden text-center"
              style={{ background: 'linear-gradient(135deg, #253d7a 0%, #344672 100%)', border: '1px solid rgba(228,167,3,0.2)' }}>
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(228,167,3,0.1) 0%, transparent 70%)', filter: 'blur(40px)' }} />
              <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(228,167,3,0.08) 0%, transparent 70%)', filter: 'blur(50px)' }} />

              <div className="relative z-10 max-w-3xl mx-auto">
                <div
                  className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 ${fontClass}`}
                  style={{ background: 'rgba(228,167,3,0.15)', color: '#e4a703', border: '1px solid rgba(228,167,3,0.4)' }}
                >
                  {isRTL ? 'ابدأ رحلتك معنا' : 'Start Your Journey'}
                </div>
                <h2 className={`text-2xl md:text-4xl font-bold text-white mb-6 ${fontClass}`}>
                  {t('cta.title')}
                </h2>
                <p className={`text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto ${fontClass}`}>
                  {t('cta.subtitle')}
                </p>
                <a
                  href="https://wa.me/966539606358"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 text-lg px-12 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-xl ${fontClass}`}
                  style={{ background: '#e4a703', color: '#1d3b88' }}
                >
                  {t('cta.button')}
                  {isRTL ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </HelmetProvider>
  );
};

export default Home;