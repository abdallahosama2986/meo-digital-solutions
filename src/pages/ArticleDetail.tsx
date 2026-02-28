import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ChevronLeft, Calendar, Tag, ArrowLeft, ArrowRight, Clock, ChevronRight } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { useLanguage } from '@/contexts/LanguageContext';

const articleBodyAr = [
  // 0: كيف تأسس مطعمك
  `تعتبر المطاعم من المشاريع الناجحة، والتي تتطلب تفكيراً دقيقاً وتخطيطاً محكماً، حيث يرتبط هذا النوع من المشاريع بشكل وثيق بالجودة، والإبداع، وخدمة العملاء.

**الخطوة الأولى: دراسة السوق**
قبل البدء في أي مشروع، لا بد من دراسة السوق المستهدف جيداً. يجب أن تعرف منافسيك، وتحدد الفجوة التي يمكنك ملؤها في السوق. تحليل أماكن تواجد المطاعم المماثلة، وأسعارها، وجودتها يعطيك ميزة تنافسية.

**الخطوة الثانية: الموقع الاستراتيجي**
الموقع هو أحد أهم عوامل نجاح المطعم. اختر موقعاً يتميز بكثافة المرور، وسهولة الوصول، وتوفر مواقف السيارات. قرب المطعم من المراكز التجارية أو المكاتب يزيد من فرص النجاح.

**الخطوة الثالثة: التراخيص والتصاريح**
تأكد من الحصول على كافة التراخيص اللازمة من الجهات المعنية مثل البلدية وهيئة الغذاء والدواء. هذه الخطوة ضرورية لتجنب أي مشاكل قانونية لاحقاً.

**الخطوة الرابعة: التصميم الداخلي**
التصميم الداخلي للمطعم يعكس هويته ويؤثر على تجربة الزبائن. اختر تصميماً يتناسب مع نوع الطعام الذي تقدمه، ويخلق أجواءً مريحة تشجع العملاء على البقاء.

**الخطوة الخامسة: اختيار الفريق المناسب**
كادر المطعم هو عمود فقراته. اختر طاقماً متمرساً في الطهي وخدمة العملاء، وتأكد من تدريبهم باستمرار على أعلى المعايير المهنية.

**الخطوة السادسة: التسويق الذكي**
استخدم منصات التواصل الاجتماعي للترويج لمطعمك قبل الافتتاح وبعده. صور جذابة للأطباق، وعروض ترويجية، وتفاعل مع الزبائن عبر الإنترنت تصنع فرقاً كبيراً.`,

  // 1: أهمية تجربة العميل
  `تعتبر تجربة العميل في صناعة المطاعم واحدة من العوامل الأساسية التي تحدد نجاح أو فشل المطعم في السوق التنافسي اليوم.

**ما هي تجربة العميل؟**
تجربة العميل هي مجموع التفاعلات والمشاعر التي يمر بها الزبون من لحظة دخوله المطعم حتى خروجه منه. تشمل جودة الطعام، وسرعة الخدمة، ونظافة المكان، وطريقة تعامل الموظفين.

**لماذا تجربة العميل مهمة؟**
الزبون الراضي يعود مجدداً ويوصي أصدقاءه بمطعمك. في عصر وسائل التواصل الاجتماعي، تجربة واحدة سلبية يمكن أن تنتشر بسرعة وتضر بسمعة مطعمك.

**عناصر تجربة عميل مميزة:**
- **الترحيب الحار**: الانطباع الأول يدوم. استقبل زبائنك بابتسامة وترحيب حار.
- **سرعة الخدمة**: لا أحد يحب الانتظار طويلاً. تأكد من كفاءة خطوط الخدمة.
- **جودة الطعام**: هذا هو جوهر تجربة المطعم. لا تساوم على جودة المكونات.
- **الاستماع للشكاوى**: تعامل مع الشكاوى بجدية وإيجابية. كل شكوى فرصة للتحسن.
- **المتابعة بعد الزيارة**: استخدم وسائل التواصل للتواصل مع زبائنك وتلقي تقييماتهم.

**قياس رضا العميل**
استخدم استبيانات الرضا، وراجع تقييمات جوجل ومنصات التقييم الأخرى باستمرار. البيانات هي مرشدك لتحسين تجربة العميل.`,

  // 2: قائمة التدفقات النقدية
  `إعداد قائمة التدفقات النقدية هي أداة مالية مهمة توضح كيفية تدفق الأموال إلى ومن شركتك.

**ما هي قائمة التدفقات النقدية؟**
هي تقرير مالي يوضح التدفقات النقدية الداخلة والخارجة خلال فترة زمنية محددة. تنقسم إلى ثلاثة أقسام: الأنشطة التشغيلية، والأنشطة الاستثمارية، والأنشطة التمويلية.

**أهمية قائمة التدفقات النقدية**
- تساعد على معرفة مدى قدرة الشركة على سداد التزاماتها
- توضح مصادر النقد واستخداماته
- تساعد في التخطيط المالي المستقبلي
- تكشف عن مشاكل السيولة قبل حدوثها

**مكونات القائمة:**

**1. الأنشطة التشغيلية**
تشمل التدفقات النقدية من الأنشطة الرئيسية للشركة مثل المبيعات وتحصيل الديون ودفع المصروفات التشغيلية.

**2. الأنشطة الاستثمارية**
تشمل شراء أو بيع الأصول الثابتة والاستثمارات طويلة الأمد.

**3. الأنشطة التمويلية**
تشمل الحصول على قروض أو سداد ديون أو توزيع أرباح.

**كيف تعد القائمة؟**
ابدأ برصيد النقد في بداية الفترة، ثم أضف التدفقات الداخلة واطرح التدفقات الخارجة في كل قسم، لتصل إلى رصيد النقد في نهاية الفترة.`,

  // 3: كيف تقلل تكاليف منشأتك
  `استراتيجيات فعّالة ومجربة لتقليل التكاليف التشغيلية وزيادة هامش الربح لمنشأتك الصغيرة أو المتوسطة.

**تحليل التكاليف أولاً**
قبل البدء في خفض التكاليف، يجب أن تفهم بنيتها جيداً. قسّم تكاليفك إلى ثابتة (إيجار، رواتب) ومتغيرة (مواد خام، طاقة). ركّز جهودك على التكاليف الأكبر أثراً.

**استراتيجيات تقليل التكاليف:**

**1. المفاوضة مع الموردين**
لا تقبل أول سعر تُعرض عليه. قارن بين الموردين وفاوض للحصول على أفضل الشروط. الشراء بكميات أكبر يمنحك قوة تفاوضية أعلى.

**2. ترشيد استهلاك الطاقة**
استبدل الإضاءة التقليدية بـ LED، وضع أجهزة حساسة للطاقة، وراقب استهلاك الكهرباء والمياه. هذا الاستثمار الصغير يوفر لك مبالغ كبيرة على المدى البعيد.

**3. تحسين إدارة المخزون**
الإسراف في المخزون يكلف كثيراً. استخدم نظاماً لإدارة المخزون يحدد الكميات المثلى لكل صنف ويتجنب التلف أو الفائض.

**4. التدريب ورفع الكفاءة**
الموظف المدرب جيداً يرتكب أخطاء أقل ويعمل بكفاءة أعلى. الاستثمار في التدريب يقلل الأخطاء التشغيلية ويرفع الإنتاجية.

**5. الاستعانة بخدمات خارجية**
بدلاً من توظيف موظفين بدوام كامل لكل وظيفة، فكّر في الاستعانة بمزودي خدمات خارجيين للمحاسبة والتسويق والتقنية. هذا ما يقدمه مكتب الخبرات المتعددة.`,

  // 4: التقارير المالية
  `التقارير المالية ليست مجرد أرقام، بل هي أداة استراتيجية تساعدك على فهم وضع منشأتك واتخاذ القرارات الصحيحة.

**أنواع التقارير المالية الأساسية:**

**1. قائمة الدخل (الأرباح والخسائر)**
توضح الإيرادات والمصروفات وصافي الربح أو الخسارة خلال فترة معينة. هي مرآة أداء شركتك التشغيلي.

**2. الميزانية العمومية**
تعكس الوضع المالي للشركة في لحظة معينة، وتوضح الأصول والخصوم وحقوق الملاك.

**3. قائمة التدفقات النقدية**
تبيّن تدفق الأموال داخل وخارج الشركة، وتساعد في قياس السيولة.

**كيف تقرأ التقارير المالية؟**
ركّز على الاتجاهات عبر الزمن، لا على الأرقام المجردة. مقارنة هذا الشهر بالشهر الماضي والسنة الماضية تعطيك صورة أوضح.

**مؤشرات يجب متابعتها:**
- هامش الربح الإجمالي والصافي
- معدل دوران المخزون
- نسبة السيولة
- العائد على الاستثمار

**دور مكتب الخبرات المتعددة**
نحن نعد لك هذه التقارير بدقة واحترافية، ونقدمها بصورة بسيطة تساعدك على اتخاذ القرار الصحيح في الوقت المناسب.`,

  // 5: التسويق الرقمي
  `كيف تستخدم منصات التواصل الاجتماعي والتسويق الرقمي لزيادة عدد زوار مطعمك وتعزيز ولاء العملاء.

**لماذا التسويق الرقمي ضروري للمطاعم؟**
أكثر من 80% من الناس يبحثون عن المطاعم عبر الإنترنت قبل الزيارة. الحضور الرقمي القوي يعني المزيد من الزيارات.

**منصات التواصل الاجتماعي الأهم للمطاعم:**

**إنستغرام**
الصور الشهية هي سلاحك الأقوى. استثمر في تصوير احترافي لأطباقك. استخدم القصص اليومية للتفاعل مع متابعيك وأظهر الكواليس.

**سناب شات**
ممتاز للتواصل مع الفئة العمرية الشبابية في السوق السعودي. البث المباشر من المطبخ أو الافتتاح يخلق ضجة إيجابية.

**جوجل أعمالي (Google Business)**
تأكد من تسجيل مطعمك وإضافة صور حديثة وساعات العمل ورقم التواصل. التقييمات على جوجل تؤثر بشكل مباشر على قرار الزيارة.

**استراتيجيات تسويق فعّالة:**
- العروض الخاصة والباقات الترويجية
- مسابقات التفاعل وإعادة النشر
- التعاون مع المؤثرين المحليين
- برامج الولاء والمكافآت
- الإعلانات المدفوعة الموجّهة`,
];

const ArticleDetail: React.FC = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const { id } = useParams<{ id: string }>();
  const fontClass = isRTL ? 'font-tajawal' : 'font-poppins';

  const articles = t('articles.items', { returnObjects: true }) as Array<{
    title: string;
    excerpt: string;
    category: string;
  }>;

  const articleIndex = parseInt(id || '0', 10);
  const article = articles[articleIndex];
  const bodyText = articleBodyAr[articleIndex] || articleBodyAr[0];

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className={`text-2xl font-bold text-foreground mb-4 ${fontClass}`}>
            {isRTL ? 'المقال غير موجود' : 'Article not found'}
          </h1>
          <Link to="/articles" className="text-gold hover:underline">
            {isRTL ? 'العودة للمقالات' : 'Back to Articles'}
          </Link>
        </div>
      </div>
    );
  }

  // Parse markdown-like **bold** text
  const renderBody = (text: string) => {
    return text.split('\n').map((line, i) => {
      if (!line.trim()) return <div key={i} className="h-4" />;
      // Bold heading lines
      if (line.startsWith('**') && line.endsWith('**')) {
        return (
          <h3 key={i} className={`text-xl font-bold text-foreground mt-8 mb-3 ${fontClass}`}>
            {line.replace(/\*\*/g, '')}
          </h3>
        );
      }
      // Inline bold
      const parts = line.split(/\*\*(.*?)\*\*/g);
      return (
        <p key={i} className={`text-muted-foreground leading-relaxed mb-3 text-base ${fontClass}`}>
          {parts.map((part, j) =>
            j % 2 === 1 ? <strong key={j} className="text-foreground font-semibold">{part}</strong> : part
          )}
        </p>
      );
    });
  };

  const prevIndex = articleIndex > 0 ? articleIndex - 1 : null;
  const nextIndex = articleIndex < articles.length - 1 ? articleIndex + 1 : null;

  return (
    <HelmetProvider>
      <Helmet>
        <title>{article.title} | مكتب الخبرات المتعددة</title>
        <meta name="description" content={article.excerpt} />
      </Helmet>

      {/* ─── Hero (Light) ─── */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-background">
        <div className="absolute top-0 end-0 w-[500px] h-[500px] rounded-full bg-gold/8 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 start-0 w-[350px] h-[350px] rounded-full bg-gold/5 blur-[90px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(hsl(var(--gold)) 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
        <div className="absolute bottom-0 left-0 start-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        <div className="  max-w-3xl mx-auto  bg-background relative z-10">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className={`flex items-center gap-2 text-sm text-muted-foreground mb-8 ${isRTL ? '     ' : ''}`}
          >
            <Link to="/" className="hover:text-gold transition-colors">{isRTL ? 'الرئيسية' : 'Home'}</Link>
            <span>{isRTL ? <ChevronLeft size={14} /> : <ChevronRight size={14} />}</span>
            <Link to="/articles" className="hover:text-gold transition-colors">{isRTL ? 'المقالات' : 'Articles'}</Link>
            <span>{isRTL ? <ChevronLeft size={14} /> : <ChevronRight size={14} />}</span>
            <span className="text-foreground font-medium truncate max-w-xs">{article.title}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={isRTL ? 'text-start' : 'text-left'}
          >
            {/* Category badge */}
            <div className={`flex items-center gap-2 mb-4 ${isRTL ? ' ' : ''}`}>
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold ${fontClass}`}>
                <Tag size={11} />
                {article.category}
              </span>
              <span className={`flex items-center gap-1 text-xs text-muted-foreground ${fontClass}`}>
                <Calendar size={12} />
                2024
              </span>
              <span className={`flex items-center gap-1 text-xs text-muted-foreground ${fontClass}`}>
                <Clock size={12} />
                {isRTL ? '5 دقائق قراءة' : '5 min read'}
              </span>
            </div>

            <h1 className={`text-hero font-bold text-foreground  leading-tight ${fontClass} ${isRTL ? 'mr-auto' : ''}`}>
              {article.title}
            </h1>
            <p className={`text-muted-foreground text-lg mt-4 max-w-2xl ${fontClass}`}>{article.excerpt}</p>
          </motion.div>
        </div>
      </section>

      {/* ─── Article Body ─── */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              {/* Article content */}
              <div
                className={`prose-custom ${isRTL ? 'text-start' : 'text-left'}`}
              >
                {renderBody(bodyText)}
              </div>

              {/* Gold divider */}
              <div className="my-12 flex items-center gap-4">
                <div className="flex-1 h-px bg-border" />
                <div className="w-2 h-2 rounded-full bg-gold" />
                <div className="flex-1 h-px bg-border" />
              </div>

              {/* CTA box */}
              <div className="rounded-2xl border border-gold/20 bg-gold/5 p-8 text-center relative overflow-hidden">
                <div className="absolute top-0 end-0 w-32 h-32 rounded-full bg-gold/10 blur-3xl" />
                <h3 className={`text-xl font-bold text-foreground mb-3 ${fontClass}`}>
                  {isRTL ? 'هل تريد مساعدة متخصصة؟' : 'Need Expert Help?'}
                </h3>
                <p className={`text-muted-foreground mb-5 text-sm ${fontClass}`}>
                  {isRTL
                    ? 'فريقنا من الخبراء جاهز لمساعدتك في تطوير منشأتك وتحقيق أهدافك'
                    : 'Our team of experts is ready to help you develop your business and achieve your goals'}
                </p>
                <a
                  href="https://wa.me/966539606358"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-gold text-white font-semibold text-sm shadow-gold hover:scale-105 transition-all duration-300 ${fontClass}`}
                >
                  {isRTL ? 'تواصل معنا' : 'Contact Us'}
                </a>
              </div>
            </AnimatedSection>

            {/* Navigation between articles */}
            <AnimatedSection delay={0.2} className="mt-12">
              <div className={`grid grid-cols-2 gap-4`}>
                {prevIndex !== null ? (
                  <Link
                    to={`/articles/${prevIndex}`}
                    className={`group p-4 rounded-xl border border-border hover:border-gold/40 bg-card transition-all duration-200 hover:shadow-card ${isRTL ? 'text-start' : 'text-left'}`}
                  >
                    <div className={`flex items-center gap-2 text-xs text-muted-foreground mb-2 ${isRTL ? '     ' : ''}`}>
                      {isRTL ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
                      <span className={fontClass}>{isRTL ? 'المقال السابق' : 'Previous'}</span>
                    </div>
                    <p className={`text-sm font-semibold text-foreground group-hover:text-gold transition-colors line-clamp-2 ${fontClass}`}>
                      {articles[prevIndex].title}
                    </p>
                  </Link>
                ) : <div />}

                {nextIndex !== null ? (
                  <Link
                    to={`/articles/${nextIndex}`}
                    className={`group p-4 rounded-xl border border-border hover:border-gold/40 bg-card transition-all duration-200 hover:shadow-card ${isRTL ? 'text-left' : 'text-start'}`}
                  >
                    <div className={`flex items-center gap-2 text-xs text-muted-foreground mb-2 ${isRTL ? '' : ' '} ${isRTL ? '       ' : ''}`}>
                      <span className={fontClass}>{isRTL ? 'المقال التالي' : 'Next'}</span>
                      {isRTL ? <ChevronLeft size={14} /> : <ChevronRight size={14} />}
                    </div>
                    <p className={``}>
                      {articles[nextIndex].title}
                    </p>
                  </Link>
                ) : <div />}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Related articles */}
      <section className="pb-24 bg-background">
        <div className="container-custom">
          <AnimatedSection className="mb-8">
            <h2 className={`text-2xl font-bold text-foreground ${fontClass} ${isRTL ? 'text-start' : ''}`}>
              {isRTL ? 'مقالات ذات صلة' : 'Related Articles'}
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {articles
              .filter((_, i) => i !== articleIndex)
              .slice(0, 3)
              .map((rel, i) => {
                const relIndex = articles.findIndex((a) => a.title === rel.title);
                return (
                  <AnimatedSection key={i} delay={i * 0.08}>
                    <Link to={`/articles/${relIndex}`} className="group block p-5 rounded-2xl border border-border hover:border-gold/40 bg-card transition-all duration-300 hover:shadow-card h-full">
                      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gold/10 text-gold text-xs font-medium mb-3 ${fontClass}`}>
                        <Tag size={10} />
                        {rel.category}
                      </span>
                      <h3 className={`font-bold text-foreground group-hover:text-gold transition-colors mb-2 text-sm leading-snug ${fontClass} ${isRTL ? 'text-start' : ''}`}>
                     
                      </h3>
                      <p className={`text-muted-foreground text-xs leading-relaxed line-clamp-3 ${fontClass} ${isRTL ? 'text-start' : ''}`}>
                        {rel.excerpt}
                      </p>
                    </Link>
                  </AnimatedSection>
                );
              })}
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};

export default ArticleDetail;
