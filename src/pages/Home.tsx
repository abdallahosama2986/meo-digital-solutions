import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import { HelmetProvider, Helmet } from "react-helmet-async";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  CheckCircle2,
  BarChart3,
  Shield,
  Settings,
  Users,
  BookOpen,
  TrendingUp,
  Award,
  Lock,
  Cpu,
  ArrowLeft,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/logo.png";

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
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, inView]);
  return count;
};

const AnimatedStat: React.FC<{
  value: number;
  label: string;
  fontClass: string;
  inView: boolean;
  light?: boolean;
}> = ({ value, label, fontClass, inView, light }) => {
  const count = useCounter(value, 2000, inView);
  return (
    <div className="text-center">
      <div
        className={`text-4xl font-bold ${light ? "text-white" : "text-[#e4a703]"} ${fontClass}`}
      >
        {count}+
      </div>
      <div
        className={`text-sm mt-1 ${light ? "text-white/70" : "text-[#7a8bb5]"} ${fontClass}`}
      >
        {label}
      </div>
    </div>
  );
};

const StatsSection: React.FC<{
  stats: { value: number; label: string }[];
  fontClass: string;
}> = ({ stats, fontClass }) => {
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
        <AnimatedStat
          key={i}
          value={stat.value}
          label={stat.label}
          fontClass={fontClass}
          inView={statsInView}
          light
        />
      ))}
    </motion.div>
  );
};

const rotatingWordsAr = ["باحتراف", "بدقة عالية", "مع دعم مستمر", "بأمان"];
const rotatingWordsEn = [
  "Professionally",
  "With Precision",
  "With Ongoing Support",
  "Securely",
];

const RotatingHeroTitle: React.FC<{ isRTL: boolean; fontClass: string }> = ({
  isRTL,
  fontClass,
}) => {
  const words = isRTL ? rotatingWordsAr : rotatingWordsEn;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((prev) => (prev + 1) % words.length),
      1800,
    );
    return () => clearInterval(timer);
  }, [words.length]);

  return (
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight ${fontClass}`}
    >
      <span style={{ color: "#e4a703" }}>{isRTL ? "ندير " : "We Manage "}</span>
      {isRTL ? "حساباتك المالية " : "Your Financial Operations "}
      <br />
      <span
        className="inline-block relative overflow-hidden align-bottom"
        style={{ minWidth: isRTL ? "300px" : "200px", height: "1.2em" }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            className="absolute inset-0"
            style={{ color: "#e4a703" }}
            initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -30, filter: "blur(6px)" }}
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
  "https://alkhebrat.sa/wp-content/uploads/2024/11/3.jpg",
  "https://alkhebrat.sa/wp-content/uploads/2024/11/3-Copy.jpg",
  "https://alkhebrat.sa/wp-content/uploads/2024/11/3-Copy-9.jpg",
  "https://alkhebrat.sa/wp-content/uploads/2024/11/3-Copy-8.jpg",
  "https://alkhebrat.sa/wp-content/uploads/2024/11/3-Copy-7.jpg",
  "https://alkhebrat.sa/wp-content/uploads/2024/11/3-Copy-6.jpg",
  "https://alkhebrat.sa/wp-content/uploads/2024/11/3-Copy-5.jpg",
  "https://alkhebrat.sa/wp-content/uploads/2024/11/3-Copy-4.jpg",
  "https://alkhebrat.sa/wp-content/uploads/2024/11/3-Copy-3.jpg",
  "https://alkhebrat.sa/wp-content/uploads/2024/11/3-Copy-2.jpg",
  "https://alkhebrat.sa/wp-content/uploads/2024/11/101.jpeg",
  "https://alkhebrat.sa/wp-content/uploads/2024/11/105.jpeg",
  "https://alkhebrat.sa/wp-content/uploads/2024/11/102.jpeg",
  "https://alkhebrat.sa/wp-content/uploads/2024/11/103.jpeg",
  "https://alkhebrat.sa/wp-content/uploads/2024/11/104.jpeg",
];

// Infinite Marquee Component
const InfiniteMarquee: React.FC<{ logos: string[]; speed?: number }> = ({
  logos,
  speed = 35,
}) => {
  const doubled = [...logos, ...logos];
  return (
    <div className="relative overflow-hidden w-full" dir="ltr">
      <div
        className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, hsl(var(--background)), transparent)",
        }}
      />
      <div
        className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to left, hsl(var(--background)), transparent)",
        }}
      />
      <div
        className="flex gap-8 items-center"
        style={{
          animation: `marquee-scroll ${speed}s linear infinite`,
          width: "max-content",
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

const PartnersGrid: React.FC<{ logos: string[]; isRTL: boolean }> = ({
  logos,
  isRTL,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-80px" });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % logos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [logos.length]);

  return (
    <div ref={gridRef} className="relative">
      <div
        className="absolute inset-0 pointer-events-none rounded-3xl opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(29,59,136,0.06) 0%, transparent 70%)",
        }}
      />
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-5 items-stretch relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: gridInView ? 1 : 0, y: gridInView ? 0 : 30 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-4 xl:grid-cols-5 gap-2.5">
            {logos.map((src, i) => (
              <motion.button
                key={i}
                onClick={() => setActiveIndex(i)}
                onHoverStart={() => setHoveredIndex(i)}
                onHoverEnd={() => setHoveredIndex(null)}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{
                  opacity: gridInView ? 1 : 0,
                  scale: gridInView ? 1 : 0.8,
                  y: gridInView ? 0 : 20,
                }}
                transition={{
                  duration: 0.5,
                  delay: gridInView ? 0.2 + i * 0.04 : 0,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -4, scale: 1.04 }}
                whileTap={{ scale: 0 }}
                className="relative rounded-2xl overflow-hidden flex items-center justify-center"
                style={{
                  border:
                    activeIndex === i
                      ? "2px solid #1d3b88"
                      : hoveredIndex === i
                        ? "2px solid rgba(29,59,136,0.35)"
                        : "2px solid rgba(29,59,136,0.10)",
                  transition:
                    "border-color 0.25s, background 0.25s, box-shadow 0.25s",
                  boxShadow:
                    activeIndex === i
                      ? "0 6px 24px rgba(29,59,136,0.18), inset 0 1px 0 rgba(255,255,255,0.8)"
                      : hoveredIndex === i
                        ? "0 4px 16px rgba(29,59,136,0.12)"
                        : "0 1px 4px rgba(0,0,0,0.05)",
                }}
              >
                <AnimatePresence>
                  {activeIndex === i && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-0 right-0 w-6 h-6 overflow-hidden"
                    >
                      <div
                        className="absolute top-0 right-0"
                        style={{
                          width: 0,
                          height: 0,
                          borderStyle: "solid",
                          borderWidth: "0 22px 22px 0",
                          borderColor:
                            "transparent #e4a703 transparent transparent",
                        }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
                <AnimatePresence>
                  {hoveredIndex === i && activeIndex !== i && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.7 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.7 }}
                      className="absolute bottom-1.5 right-1.5 w-4 h-4 rounded-full flex items-center justify-center"
                      style={{ background: "rgba(29,59,136,0.12)" }}
                    >
                      <span style={{ fontSize: "8px", color: "#1d3b88", fontWeight: 700 }}>
                        {i + 1}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
                <img
                  src={src}
                  alt={`Partner ${i + 1}`}
                  className="w-full object-contain rounded-2xl"
                  loading="lazy"
                />
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  const { t } = useTranslation();
  const [activePartner, setActivePartner] = useState<number | null>(null);
  const { isRTL } = useLanguage();
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const testimonials = t("testimonials.items", {
    returnObjects: true,
  }) as Array<{ name: string; role: string; text: string }>;
  const serviceKeys = [
    "accounting",
    "admin",
    "operational",
    "marketing",
    "restaurant",
    "systems",
  ] as const;
  const whyKeys = [
    "accuracy",
    "experience",
    "confidentiality",
    "systems",
  ] as const;
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true });

  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const fontClass = isRTL ? "font-tajawal" : "font-poppins";

  // PDF-sourced service data
  const pdfServices = isRTL ? [
    {
      title: "هندسة الأطباق",
      desc: "تقرير مفصل وشامل يوضح الأصناف الأكثر مبيعاً والأعلى والأقل تكلفة، مع تحليل دقيق لتكاليفها الفعلية ومقارنتها بهوامش الربح المحققة لتعزيز القرارات الاستراتيجية.",
    },
    {
      title: "إعادة هيكلة تكلفة المخزون",
      desc: "تقرير شهري يوضح تكلفة مخزون البضاعة المعدة للبيع بهدف معرفة حجم المبيعات المتوقعة آخر الشهر ونسبة ربحيتها.",
    },
    {
      title: "إعادة هيكلة تكاليف الأقسام",
      desc: "تقرير يوضح تكلفة وربح أو خسارة الأقسام التي تقدم خدمة للعملاء مثل المشويات والعصائر والمعجنات، مع نسبة مساهمة كل قسم في الربح الكلي شهرياً.",
    },
    {
      title: "متابعة أرصدة الدائنين والمدينين",
      desc: "تقرير يوضح أرصدة الموردين الفعلية والدائنون الآخرين والمدينين مثل شركات توصيل الطعام هنقرستيشن ومرسول والشركات التي يتعامل معها العميل.",
    },
    {
      title: "إعادة هيكلة المبيعات والمصروفات والمشتريات",
      desc: "تقرير يوضح مبيعاتك ومشترياتك ومصروفاتك مع تزويدك بأهم الملاحظات التي يجب الاهتمام بها بهدف تخفيض التكاليف.",
    },
    {
      title: "نصائح ومقترحات مالية وتشغيلية",
      desc: "خدمة تهدف إلى مساعدة العملاء على تحسين جميع العمليات المالية والإدارية والتشغيلية، يتم تنفيذها من خلال اجتماع شهري مع مالك المنشأة.",
    },
  ] : [
    {
      title: "Dish Engineering",
      desc: "A detailed report showing best-selling and highest/lowest-cost items with precise cost analysis and profit margin comparison to support strategic decisions.",
    },
    {
      title: "Inventory Cost Restructuring",
      desc: "A monthly report showing the cost of inventory ready for sale, to determine expected end-of-month sales volume and profitability rate.",
    },
    {
      title: "Department Cost Restructuring",
      desc: "A report showing the cost, profit or loss of departments serving customers (grills, juices, pastries, etc.) and each department's contribution to total profit monthly.",
    },
    {
      title: "Creditors & Debtors Tracking",
      desc: "A report showing actual supplier balances, other creditors, and debtors such as delivery companies (HungerStation, Mrsool) and other business partners.",
    },
    {
      title: "Sales, Expenses & Purchases Restructuring",
      desc: "A report showing your sales, purchases, and expenses with key observations to help reduce costs and improve financial performance.",
    },
    {
      title: "Financial & Operational Advisory",
      desc: "A service aimed at improving all financial, administrative, and operational processes through a monthly meeting with the business owner.",
    },
  ];

  // PDF-sourced Why Us data
  const pdfWhyUs = isRTL ? [
    {
      title: "الدقة والامتثال",
      desc: "نؤكد أن تكون السجلات والتقارير المالية دقيقة وكاملة ومتسقة مع المعايير والمبادئ المالية، مما يساعد عملاءنا على تجنب الأخطاء والتحديات التي قد تؤدي إلى إغلاق المنشأة.",
    },
    {
      title: "الخبرة والتجربة",
      desc: "نوفر لعملائنا إمكانية الوصول إلى مختصين مؤهلين من ذوي الخبرة لديهم المعرفة والمهارات اللازمة للتعامل مع مختلف القضايا والتحديات التشغيلية والمالية والتسويقية الخاصة بالمطاعم والمقاهي.",
    },
    {
      title: "الثقة والسرية",
      desc: "نؤكد السرية التامة لجميع المعلومات الخاصة بعملائنا وحمايتها من خلال اتفاقية سرية المعلومات المذكورة بعقد الاتفاق الذي يوقع بين المكتب والعميل.",
    },
    {
      title: "الكفاءة والراحة",
      desc: "نوفر الوقت والجهد على العميل ونتعامل مع مهامهم المالية والتشغيلية اليومية بطريقة مهنية عالية، مما يساعد عملاءنا على تقليل تكاليفهم التشغيلية وزيادة إنتاجيتهم وربحيتهم.",
    },
  ] : [
    {
      title: "Accuracy & Compliance",
      desc: "We ensure financial records and reports are accurate, complete, and consistent with financial standards, helping clients avoid errors that could harm their business.",
    },
    {
      title: "Expertise & Experience",
      desc: "We provide access to qualified specialists with the knowledge and skills to handle various operational, financial, and marketing challenges specific to restaurants and cafes.",
    },
    {
      title: "Trust & Confidentiality",
      desc: "We guarantee full confidentiality of all client information through a non-disclosure agreement included in the signed contract between the office and client.",
    },
    {
      title: "Efficiency & Convenience",
      desc: "We save clients time and effort by handling their daily financial and operational tasks professionally, reducing operating costs and increasing productivity and profitability.",
    },
  ];

  // PDF-sourced packages data
  const launchPackageFeatures = isRTL ? [
    "تقرير مبيعات المنشأة الأسبوعي والشهري",
    "تقرير مشتريات المنشأة الأسبوعي والشهري",
    "تقرير مصروفات المنشأة الأسبوعي والشهري",
    "تقرير قائمة الدخل الشهرية",
    "تقرير تكلفة المخزون الشهري",
    "نصائح مالية وتشغيلية شهرية",
  ] : [
    "Weekly & Monthly Sales Report",
    "Weekly & Monthly Purchases Report",
    "Weekly & Monthly Expenses Report",
    "Monthly Income Statement",
    "Monthly Inventory Cost Report",
    "Monthly Financial & Operational Advice",
  ];

  const businessPackageFeatures = isRTL ? [
    "جميع تقارير باقة الانطلاق (٦ تقارير)",
    "تقرير تكلفة الأطباق الشهري",
    "تقرير هندسة تكلفة الأطباق الشهري",
    "تقرير الجرد وتقييم المخزون الشهري",
    "تقرير تكلفة البضاعة المباعة الشهري",
    "تقرير العجز والزيادة الشهري",
    "تقرير الهالك الشهري",
    "تقرير الموردين الفعليين الشهري",
    "مراجعة عملية البيع اليومي والتقفيل",
    "١٤ تقرير أسبوعي وشهري متكامل",
  ] : [
    "All Launch Package reports (6 reports)",
    "Monthly Dish Cost Report",
    "Monthly Dish Engineering Cost Report",
    "Monthly Inventory Count & Valuation",
    "Monthly Cost of Goods Sold Report",
    "Monthly Shortage & Surplus Report",
    "Monthly Waste Report",
    "Monthly Actual Suppliers Report",
    "Daily Sales & Closing Review",
    "14 comprehensive weekly & monthly reports",
  ];

  return (
    <HelmetProvider>
      <Helmet>
        <title>مكتب الخبرات المتعددة | Multiple Experiences Office - MEO</title>
        <meta
          name="description"
          content="مكتب الخبرات المتعددة للاستشارات التجارية - خدمات محاسبية وإدارية وتشغيلية وتسويقية متكاملة للمنشآت الصغيرة والمتوسطة في المملكة العربية السعودية"
        />
      </Helmet>

      {/* ─── HERO ─── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(29,59,136,0.92) 0%, rgba(37,61,122,0.85) 50%, rgba(52,70,114,0.80) 100%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #e4a703 0px, #e4a703 1px, transparent 1px, transparent 60px)",
          }}
        />
        <div
          className="absolute top-20 right-20 w-64 h-64 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(228,167,3,0.15) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute bottom-32 left-10 w-80 h-80 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(228,167,3,0.10) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        <div className="container-custom relative z-10 pt-28 pb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 mt-12"
                style={{
                  background: "rgba(228,167,3,0.15)",
                  border: "1px solid rgba(228,167,3,0.4)",
                }}
              >
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ background: "#e4a703" }}
                />
                <span
                  className={`text-sm font-semibold ${fontClass}`}
                  style={{ color: "#e4a703" }}
                >
                  {isRTL ? "العميل أولاً والجودة دائماً" : "Client First, Quality Always"}
                </span>
              </motion.div>

              <RotatingHeroTitle isRTL={isRTL} fontClass={fontClass} />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`text-white/75 text-lg mb-10 leading-relaxed max-w-lg ${fontClass}`}
              >
                {isRTL
                  ? "نقدم لعملائنا من المطاعم والمقاهي خدمات محاسبية واستشارات مالية وتشغيلية تحقق لهم التميز والتفرد، بأقل تكلفة وبأعلى جودة."
                  : "We provide restaurants and cafes with accounting services and financial & operational consulting that achieve distinction, at the lowest cost and highest quality."}
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
                  style={{ background: "#e4a703", color: "#1d3b88" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#d5ab2a")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#e4a703")}
                >
                  {isRTL ? "تواصل معنا الآن" : "Contact Us Now"}
                </a>
                <Link
                  to="/services"
                  className={`inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm transition-all duration-300 border-2 text-white hover:text-[#1d3b88] hover:bg-white ${fontClass}`}
                  style={{ borderColor: "rgba(255,255,255,0.5)" }}
                >
                  {isRTL ? "اكتشف خدماتنا" : "Explore Services"}
                </Link>
              </motion.div>

              {/* Stats — from PDF: 10+ years, 20+ cafes, 15+ restaurants */}
              <StatsSection
                stats={[
                  { value: 10, label: isRTL ? "سنوات خبرة" : "Years Experience" },
                  { value: 20, label: isRTL ? "مقهى وكوفي شوب" : "Cafes Served" },
                  { value: 15, label: isRTL ? "مطعم" : "Restaurants Served" },
                ]}
                fontClass={fontClass}
              />
            </div>

            {/* RIGHT: Photo Card */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? -60 : 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
              className="hidden lg:block relative"
            >
              <div
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                style={{ border: "3px solid rgba(228,167,3,0.4)" }}
              >
                <img
                  src="https://kshouf.com/wp-content/uploads/2025/05/%D9%85%D8%AD%D8%A7%D8%B3%D8%A8-%D9%82%D8%A7%D9%86%D9%88%D9%86%D9%8A.png"
                  alt="Professional business team"
                  className="w-full h-[480px] object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, rgba(29,59,136,0.6) 0%, transparent 60%)",
                  }}
                />
                <motion.div
                  className="absolute bottom-6 left-6 rounded-xl px-5 py-4 shadow-xl"
                  style={{ background: "rgba(255,255,255,0.95)", backdropFilter: "blur(12px)" }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className={`text-2xl font-bold ${fontClass}`} style={{ color: "#1d3b88" }}>
                    98%
                  </div>
                  <div className={`text-xs text-gray-500 ${fontClass}`}>
                    {isRTL ? "نسبة رضا العملاء" : "Client Satisfaction"}
                  </div>
                </motion.div>
                <motion.div
                  className="absolute top-6 right-6 rounded-xl px-4 py-3 shadow-xl"
                  style={{ background: "#e4a703" }}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <div className={`text-sm font-bold text-white ${fontClass}`}>
                    {isRTL ? "١٠+ سنوات خبرة" : "10+ Years Experience"}
                  </div>
                </motion.div>
              </div>
              <motion.div
                className="absolute -bottom-8 -right-8 w-40 h-40 rounded-2xl overflow-hidden shadow-xl"
                style={{ border: "3px solid #e4a703" }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <img
                  src="https://cdn-ildkhmb.nitrocdn.com/LHnqhVLRtrQdyWKBnlqZWwWNyTtgNTSG/assets/images/optimized/rev-bbe3859/alameenksa.com/wp-content/uploads/2025/01/1626479454.png"
                  alt="Business professional"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div
                className="absolute -top-6 -left-6 w-24 h-24 rounded-full border-4 border-dashed pointer-events-none"
                style={{ borderColor: "rgba(228,167,3,0.3)" }}
              />
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div
            className="w-px h-10 mx-auto"
            style={{ background: "linear-gradient(to bottom, #e4a703, transparent)" }}
          />
        </motion.div>
      </section>

      {/* ─── PARTNERS MARQUEE ─── */}
      <section className="section-padding bg-[#F8F6F0]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <span className={`section-label ${fontClass}`}>
              {isRTL ? "شركاء نجاحنا" : "Our Success Partners"}
            </span>
            <h2 className={`text-display font-bold text-foreground mt-3 ${fontClass}`}>
              {isRTL ? "موثوق من قبل شركات رائدة" : "Trusted by Leading Companies"}
            </h2>
          </AnimatedSection>
          <div className="xl:scale-90">
            <PartnersGrid logos={partnerLogos} isRTL={isRTL} />
          </div>
          {/* <InfiniteMarquee logos={partnerLogos} isRTL={isRTL} /> */}
        </div>
      </section>

      {/* ─── SERVICES — PDF content ─── */}
      <section className="section-padding" style={{ background: "#253d7a" }}>
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span
              className={`inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 ${fontClass}`}
              style={{
                background: "rgba(228,167,3,0.15)",
                color: "#e4a703",
                border: "1px solid rgba(228,167,3,0.3)",
              }}
            >
              {isRTL ? "خدماتنا" : "Our Services"}
            </span>
            <h2 className={`text-3xl md:text-4xl font-bold text-white mt-3 mb-3 ${fontClass}`}>
              {isRTL ? (
                <>
                  <span style={{ color: "#e4a703" }}>خدماتنا</span> المالية والمحاسبية المتكاملة
                </>
              ) : (
                <>
                  <span style={{ color: "#e4a703" }}>Our</span> Integrated Financial & Accounting Services
                </>
              )}
            </h2>
            <p className={`text-white/60 text-base leading-relaxed max-w-2xl mx-auto ${fontClass}`}>
              {isRTL
                ? "نقدم مجموعة واسعة من الخدمات المالية والمحاسبية للعملاء بهدف تحسين أداء أعمالهم وزيادة ربحيتهم."
                : "We offer a wide range of financial and accounting services aimed at improving business performance and increasing profitability."}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pdfServices.map((service, i) => (
              <AnimatedSection key={i} delay={i * 0.07}>
                <div
                  className="relative rounded-2xl p-8 min-h-[260px] overflow-hidden group transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(228,167,3,0.10)";
                    e.currentTarget.style.borderColor = "rgba(228,167,3,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 text-white group-hover:scale-110 transition-transform duration-300"
                    style={{ background: "#e4a703" }}
                  >
                    {serviceIcons[i]}
                  </div>
                  <h3 className={`text-lg font-bold text-white mb-3 leading-snug ${fontClass}`}>
                    {service.title}
                  </h3>
                  <p className={`text-sm text-white/60 leading-relaxed ${fontClass}`}>
                    {service.desc}
                  </p>
                  <Link
                    to="/services"
                    className={`inline-block mt-5 text-sm font-semibold transition-colors ${fontClass}`}
                    style={{ color: "#e4a703" }}
                  >
                    {isRTL ? "معرفة المزيد ←" : "Learn more →"}
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY US — PDF values ─── */}
      <section
        className="section-padding relative overflow-hidden"
        style={{ background: "#f8f6f0" }}
      >
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(228,167,3,0.08) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span
              className={`inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 ${fontClass}`}
              style={{
                background: "rgba(29,59,136,0.08)",
                color: "#1d3b88",
                border: "1px solid rgba(29,59,136,0.2)",
              }}
            >
              {isRTL ? "قيمنا" : "Our Values"}
            </span>
            <h2
              className={`text-3xl md:text-4xl font-bold mt-3 ${fontClass}`}
              style={{ color: "#1d3b88" }}
            >
              {isRTL ? "لماذا تختار مكتب الخبرات المتعددة؟" : "Why Choose Multiple Experiences Office?"}
            </h2>
          </AnimatedSection>

          <div className={`grid lg:grid-cols-2 gap-16 items-center`}>
            <AnimatedSection direction={isRTL ? "right" : "left"}>
              <div className="relative">
                <div
                  className="rounded-2xl overflow-hidden shadow-2xl"
                  style={{ border: "3px solid rgba(228,167,3,0.3)" }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=700&q=80"
                    alt="Business consulting team"
                    className="w-full h-[480px] object-cover"
                  />
                </div>
                <motion.div
                  className="absolute -bottom-6 -right-6 rounded-2xl p-5 shadow-xl"
                  style={{ background: "#1d3b88", minWidth: "180px" }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className={`text-3xl font-bold ${fontClass}`} style={{ color: "#e4a703" }}>
                    15+
                  </div>
                  <div className={`text-sm text-white/80 ${fontClass}`}>
                    {isRTL ? "سنة في السوق" : "Years in Market"}
                  </div>
                </motion.div>
                <div
                  className="absolute -top-4 -left-4 w-16 h-16 rounded-full"
                  style={{ background: "#e4a703", opacity: 0.2 }}
                />
              </div>
            </AnimatedSection>

            <div className="space-y-6">
              {pdfWhyUs.map((item, i) => (
                <AnimatedSection key={i} delay={i * 0.12}>
                  <div className={`flex gap-5 items-start`}>
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "rgba(29,59,136,0.08)",
                        color: "#1d3b88",
                        border: "1px solid rgba(29,59,136,0.15)",
                      }}
                    >
                      {whyIcons[i]}
                    </div>
                    <div>
                      <h3
                        className={`font-bold text-lg mb-1.5 ${fontClass}`}
                        style={{ color: "#1d3b88" }}
                      >
                        {item.title}
                      </h3>
                      <p className={`text-sm leading-relaxed text-gray-600 ${fontClass}`}>
                        {item.desc}
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
                  style={{ background: "#1d3b88" }}
                >
                  {isRTL ? "تواصل معنا" : "Get In Touch"}
                  {isRTL ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
                </a>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PACKAGES — PDF: باقة الانطلاق & باقة ريادة الأعمال ─── */}
      <section className="section-padding" style={{ background: "#344672" }}>
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span
              className={`inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 ${fontClass}`}
              style={{
                background: "rgba(228,167,3,0.2)",
                color: "#e4a703",
                border: "1px solid rgba(228,167,3,0.4)",
              }}
            >
              {isRTL ? "باقاتنا" : "Our Packages"}
            </span>
            <h2 className={`text-3xl md:text-4xl font-bold text-white mt-3 mb-4 ${fontClass}`}>
              {isRTL ? "باقات الخدمات التي نقدمها" : "Our Service Packages"}
            </h2>
            <p className={`text-white/60 max-w-xl mx-auto ${fontClass}`}>
              {isRTL
                ? "الاشتراك في الباقة يغنيك عن استقدام محاسب، ويساعدك على تخفيض تكاليفك وزيادة أرباحك."
                : "Subscribing to a package eliminates the need to hire an accountant and helps you reduce costs and increase profits."}
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* باقة الانطلاق — Launch Package */}
            <AnimatedSection delay={0.1}>
              <div
                className="rounded-2xl p-8 h-full transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.15)",
                }}
              >
                <div className={`text-xl font-bold text-white mb-1 ${fontClass}`}>
                  {isRTL ? "باقة الانطلاق" : "Launch Package"}
                </div>
                <div className={`text-sm font-semibold mb-2 ${fontClass}`} style={{ color: "#e4a703" }}>
                  {isRTL ? "٦ تقارير شهرية وأسبوعية" : "6 Monthly & Weekly Reports"}
                </div>
                <p className={`text-white/50 text-sm mb-8 ${fontClass}`}>
                  {isRTL
                    ? "رحلة النمو المالي والتشغيلي تبدأ من هنا. متابعة مالية يومية بتقارير واضحة وبسعر منافس."
                    : "Your financial and operational growth journey starts here. Daily financial monitoring with clear reports at a competitive price."}
                </p>
                <ul className="space-y-3 mb-8">
                  {launchPackageFeatures.map((f, i) => (
                    <li
                      key={i}
                      className={`flex items-center gap-3 text-sm text-white/80 ${fontClass}`}
                    >
                      <CheckCircle2 size={16} style={{ color: "#e4a703", flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/966539606358"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center py-3 px-6 rounded-full border-2 font-semibold text-sm transition-all duration-300 hover:scale-105 ${fontClass}`}
                  style={{ borderColor: "#e4a703", color: "#e4a703" }}
                >
                  {isRTL ? "اتصل بنا لمعرفة التكلفة" : "Call Us for Pricing"}
                </a>
              </div>
            </AnimatedSection>

            {/* باقة ريادة الأعمال — Business Package */}
            <AnimatedSection delay={0.2}>
              <div
                className="relative rounded-2xl p-8 h-full transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                style={{ background: "#e4a703" }}
              >
                <div
                  className="absolute top-0 right-0 w-40 h-40 rounded-full pointer-events-none"
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    transform: "translate(30%, -30%)",
                  }}
                />
                <div
                  className={`absolute top-4 ${isRTL ? "left-4" : "right-4"} px-3 py-1 rounded-full text-xs font-bold ${fontClass}`}
                  style={{ background: "#1d3b88", color: "white" }}
                >
                  {isRTL ? "الأكثر شمولاً" : "Most Comprehensive"}
                </div>
                <div className={`text-xl font-bold mb-1 ${fontClass}`} style={{ color: "#1d3b88" }}>
                  {isRTL ? "باقة ريادة الأعمال" : "Entrepreneurship Package"}
                </div>
                <div className={`text-sm font-semibold mb-2 ${fontClass}`} style={{ color: "#1d3b88" }}>
                  {isRTL ? "١٤ تقريراً أسبوعياً وشهرياً" : "14 Weekly & Monthly Reports"}
                </div>
                <p
                  className={`text-sm mb-8 ${fontClass}`}
                  style={{ color: "rgba(29,59,136,0.75)" }}
                >
                  {isRTL
                    ? "الحل الشامل لضبط تكاليف ونمو أرباح مشروعك بطريقة فريدة ودقيقة ومميزة."
                    : "The comprehensive solution to control costs and grow your project's profits in a unique, precise, and distinctive way."}
                </p>
                <ul className="space-y-3 mb-8">
                  {businessPackageFeatures.map((f, i) => (
                    <li
                      key={i}
                      className={`flex items-center gap-3 text-sm ${fontClass}`}
                      style={{ color: "#1d3b88" }}
                    >
                      <CheckCircle2 size={16} style={{ color: "#1d3b88", flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/966539606358"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center py-3 px-6 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105 shadow-lg ${fontClass}`}
                  style={{ background: "#1d3b88", color: "white" }}
                >
                  {isRTL ? "اتصل بنا لمعرفة التكلفة" : "Call Us for Pricing"}
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── ABOUT / WHO WE ARE — PDF content ─── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span
                className={`inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 ${fontClass}`}
                style={{
                  background: "rgba(228,167,3,0.1)",
                  color: "#e4a703",
                  border: "1px solid rgba(228,167,3,0.3)",
                }}
              >
                {isRTL ? "من نحن؟" : "Who Are We?"}
              </span>
              <h2
                className={`text-3xl md:text-4xl font-bold mb-6 ${fontClass}`}
                style={{ color: "#1d3b88" }}
              >
                {isRTL
                  ? "مكتب الخبرات المتعددة — شريكك الأكثر ثقة"
                  : "Multiple Experiences Office — Your Most Trusted Partner"}
              </h2>
              <p className={`text-gray-600 leading-relaxed mb-4 ${fontClass}`}>
                {isRTL
                  ? "مكتب الخبرات متخصص في إعادة تأهيل وهيكلة العمليات الإدارية والمالية والتشغيلية للمنشآت. نقدم حالياً خدماتنا للمنشآت الصغيرة وبالتحديد المطاعم والمقاهي."
                  : "MEO specializes in rehabilitating and restructuring administrative, financial, and operational processes for businesses. We currently serve small establishments, specifically restaurants and cafes."}
              </p>
              <p className={`text-gray-600 leading-relaxed mb-6 ${fontClass}`}>
                {isRTL
                  ? "هدفنا منح مالك المطعم أو المقهى صورة واضحة عن وضع منشأته المالي والتشغيلي، مما يمكنه من معرفة التحديات التي تواجه منشأته واتخاذ القرارات المناسبة المبنية على أرقام واقعية."
                  : "Our goal is to give restaurant and cafe owners a clear picture of their financial and operational status, enabling them to identify challenges and make the right decisions based on real numbers."}
              </p>

           

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: <Award size={20} />, text: isRTL ? "فريق محاسبين متخصصين" : "Specialized Accounting Team" },
                  { icon: <Shield size={20} />, text: isRTL ? "سرية تامة للبيانات" : "Full Data Confidentiality" },
                  { icon: <TrendingUp size={20} />, text: isRTL ? "نظام أوراكل السحابي" : "Oracle Cloud System" },
                  { icon: <Users size={20} />, text: isRTL ? "دعم مستمر ومتابعة يومية" : "Continuous Daily Support" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(228,167,3,0.1)", color: "#e4a703" }}
                    >
                      {item.icon}
                    </div>
                    <span className={`text-sm font-medium text-gray-700 ${fontClass}`}>
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
              <Link
                to="/about"
                className={`inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white transition-all duration-300 hover:scale-105 ${fontClass}`}
                style={{ background: "#1d3b88" }}
              >
                {isRTL ? "اعرف أكثر عنّا" : "Learn More About Us"}
                {isRTL ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
              </Link>
            </AnimatedSection>

            <AnimatedSection>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.pexels.com/photos/7984733/pexels-photo-7984733.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt={isRTL ? "رجل أعمال سعودي يعمل في مكتبه" : "Saudi businessman working in his office"}
                    className="w-full h-[480px] object-cover"
                  />
                </div>
                <div
                  className="absolute -bottom-6 -left-6 rounded-2xl shadow-xl px-6 py-4 flex items-center gap-3"
                  style={{ background: "#1d3b88" }}
                >
                  <span className="text-4xl font-extrabold text-white">10+</span>
                  <span className={`text-sm font-semibold text-white/90 leading-tight ${fontClass}`}>
                    {isRTL ? "سنوات من الخبرة" : "Years of Experience"}
                  </span>
                </div>
                <div
                  className="absolute -top-6 -right-6 rounded-2xl shadow-xl px-6 py-4 flex items-center gap-3"
                  style={{ background: "#e4a703" }}
                >
                  <span className="text-4xl font-extrabold text-white">500+</span>
                  <span className={`text-sm font-semibold text-white/90 leading-tight ${fontClass}`}>
                    {isRTL ? "عميل راضٍ" : "Happy Clients"}
                  </span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="section-padding" style={{ background: "#4d6090" }}>
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span
              className={`inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 ${fontClass}`}
              style={{
                background: "rgba(228,167,3,0.2)",
                color: "#e4a703",
                border: "1px solid rgba(228,167,3,0.4)",
              }}
            >
              {t("testimonials.label")}
            </span>
            <h2 className={`text-3xl md:text-4xl font-bold text-white mt-3 ${fontClass}`}>
              {t("testimonials.title")}
            </h2>
            <p className={`text-white/60 text-base mt-3 ${fontClass}`}>
              {isRTL
                ? "تجارب حقيقية من عملاء يثقون بخدماتنا."
                : "Real experiences from clients who trust our services."}
            </p>
          </AnimatedSection>

          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out gap-6"
                style={{
                  transform: `translateX(${isRTL ? testimonialIndex * (100 / Math.min(testimonials.length, 3)) : -(testimonialIndex * (100 / Math.min(testimonials.length, 3)))}%)`,
                }}
              >
                {testimonials.map((item, i) => (
                  <div
                    key={i}
                    className="min-w-0 shrink-0 grow-0 basis-full md:basis-[calc(33.333%-1rem)] my-4"
                  >
                    <div
                      className="relative h-full rounded-2xl px-6 pt-10 pb-6 transition-all duration-300"
                      style={{
                        background: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.15)",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        className={`absolute top-6 ${isRTL ? "left-6" : "right-6"}`}
                        fill="#e4a703"
                        stroke="#e4a703"
                        strokeWidth="0.5"
                      >
                        <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                        <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                      </svg>
                      <div className="my-5 flex gap-1">
                        {[...Array(5)].map((_, si) => (
                          <Star key={si} size={16} style={{ color: "#e4a703", fill: "#e4a703" }} />
                        ))}
                      </div>
                      <p className={`mb-10 text-[15px] leading-[1.9] text-white/80 ${fontClass}`}>
                        "{item.text}"
                      </p>
                      <div className="flex items-center gap-3">
                        <div
                          className="h-10 w-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                          style={{ background: "#e4a703" }}
                        >
                          {item.name?.charAt(0)}
                        </div>
                        <div className={isRTL ? "text-right" : "text-left"}>
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
                onClick={() => setTestimonialIndex((prev) => Math.max(0, prev - 1))}
                className="absolute -start-12 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full flex items-center justify-center transition-colors"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  color: "white",
                }}
              >
                {isRTL ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
              </button>
              <button
                onClick={() =>
                  setTestimonialIndex((prev) =>
                    Math.min(Math.max(0, testimonials.length - 3), prev + 1),
                  )
                }
                className="absolute -end-12 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full flex items-center justify-center transition-colors"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  color: "white",
                }}
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
                    width: i === testimonialIndex ? "24px" : "8px",
                    background: i === testimonialIndex ? "#e4a703" : "rgba(255,255,255,0.3)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTACT INFO STRIP ─── */}
      <section style={{ background: "#e4a703" }} className="py-10">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { icon: <Phone size={24} />, label: isRTL ? "اتصل بنا" : "Call Us", value: "00966 53 960 6358" },
              { icon: <Mail size={24} />, label: isRTL ? "راسلنا" : "Email Us", value: "Sales@alkhebrat.sa" },
              { icon: <MapPin size={24} />, label: isRTL ? "موقعنا" : "Location", value: isRTL ? "جازان، المملكة العربية السعودية" : "Jazan, Saudi Arabia" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-[#e4a703]"
                  style={{ background: "#1d3b88" }}
                >
                  {item.icon}
                </div>
                <div className={`text-xs font-semibold text-[#1d3b88]/70 uppercase tracking-wide ${fontClass}`}>
                  {item.label}
                </div>
                <div className={`font-bold text-[#1d3b88] ${fontClass}`}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="" style={{ background: "#1d3b88" }}>
        <div className="">
          <AnimatedSection>
            <div
              className="relative rounded-2xl py-16 px-6 overflow-hidden text-center"
              style={{
                background: "linear-gradient(135deg, #253d7a 0%, #344672 100%)",
                border: "1px solid rgba(228,167,3,0.2)",
              }}
            >
              <div
                className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
                style={{
                  background: "radial-gradient(circle, rgba(228,167,3,0.1) 0%, transparent 70%)",
                  filter: "blur(40px)",
                }}
              />
              <div
                className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none"
                style={{
                  background: "radial-gradient(circle, rgba(228,167,3,0.08) 0%, transparent 70%)",
                  filter: "blur(50px)",
                }}
              />
              <div className="relative z-10 max-w-3xl mx-auto">
                <div
                  className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 ${fontClass}`}
                  style={{
                    background: "rgba(228,167,3,0.15)",
                    color: "#e4a703",
                    border: "1px solid rgba(228,167,3,0.4)",
                  }}
                >
                  {isRTL ? "ابدأ رحلتك معنا" : "Start Your Journey With Us"}
                </div>
                <h2 className={`text-2xl md:text-4xl font-bold text-white mb-6 ${fontClass}`}>
                  {isRTL
                    ? "نجاحك لا يحتاج حظاً... بل إدارة ذكية"
                    : "Your Success Doesn't Need Luck... Just Smart Management"}
                </h2>
                <p className={`text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto ${fontClass}`}>
                  {isRTL
                    ? "نحلل تكاليفك، نكشف الهدر، نعيد هيكلة التشغيل، ونحوّل الأرقام إلى أرباح ملموسة."
                    : "We analyze your costs, reveal waste, restructure operations, and turn numbers into tangible profits."}
                </p>
                <a
                  href="https://wa.me/966539606358"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 text-lg px-12 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-xl ${fontClass}`}
                  style={{ background: "#e4a703", color: "#1d3b88" }}
                >
                  {isRTL ? "تواصل معنا الآن" : "Contact Us Now"}
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