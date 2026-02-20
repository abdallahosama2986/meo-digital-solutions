import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Settings, TrendingUp, Users, BookOpen, Cpu, Phone, Shield } from 'lucide-react';

interface FloatingLabelProps {
  icon: React.ReactNode;
  label: string;
  angle: number;
  radius: number;
  delay: number;
}

const FloatingLabel: React.FC<FloatingLabelProps> = ({ icon, label, angle, radius, delay }) => {
  const rad = (angle * Math.PI) / 180;
  const x = Math.cos(rad) * radius;
  const y = Math.sin(rad) * radius;

  return (
    <motion.div
      className="absolute flex items-center gap-2 bg-card border border-gold/20 rounded-full px-4 py-2 shadow-card whitespace-nowrap z-10"
      style={{
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
        transform: 'translate(-50%, -50%)',
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 + delay, duration: 0.5, ease: 'easeOut' }}
    >
      <div className="w-7 h-7 rounded-full bg-gold/10 flex items-center justify-center text-gold flex-shrink-0">
        {icon}
      </div>
      <span className="text-xs font-semibold text-foreground">{label}</span>
    </motion.div>
  );
};

interface HeroIllustrationProps {
  isRTL: boolean;
}

const HeroIllustration: React.FC<HeroIllustrationProps> = ({ isRTL }) => {
  const labels = isRTL
    ? [
        { icon: <BarChart3 size={14} />, label: 'المحاسبة المالية', angle: -60, delay: 0 },
        { icon: <Settings size={14} />, label: 'الإدارة التشغيلية', angle: -10, delay: 0.1 },
        { icon: <TrendingUp size={14} />, label: 'نمو الأرباح', angle: 40, delay: 0.2 },
        { icon: <Users size={14} />, label: 'إدارة الموارد', angle: 130, delay: 0.3 },
        { icon: <BookOpen size={14} />, label: 'التقارير المالية', angle: 190, delay: 0.4 },
        { icon: <Shield size={14} />, label: 'السرية التامة', angle: 240, delay: 0.5 },
      ]
    : [
        { icon: <BarChart3 size={14} />, label: 'Financial Accounting', angle: -60, delay: 0 },
        { icon: <Settings size={14} />, label: 'Operations Mgmt', angle: -10, delay: 0.1 },
        { icon: <TrendingUp size={14} />, label: 'Profit Growth', angle: 40, delay: 0.2 },
        { icon: <Users size={14} />, label: 'HR Management', angle: 130, delay: 0.3 },
        { icon: <BookOpen size={14} />, label: 'Financial Reports', angle: 190, delay: 0.4 },
        { icon: <Shield size={14} />, label: 'Full Confidentiality', angle: 240, delay: 0.5 },
      ];

  return (
    <div className="relative w-full aspect-square max-w-[520px] mx-auto">
      {/* Outer ring */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-dashed border-gold/15"
        initial={{ opacity: 0, scale: 0.8, rotate: -30 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      />

      {/* Middle ring */}
      <motion.div
        className="absolute inset-[12%] rounded-full border border-gold/10"
        style={{ background: 'radial-gradient(circle, hsl(var(--gold) / 0.04), transparent)' }}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />

      {/* Inner ring */}
      <motion.div
        className="absolute inset-[24%] rounded-full"
        style={{ background: 'radial-gradient(circle, hsl(var(--gold) / 0.08), hsl(var(--gold) / 0.02))' }}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />

      {/* Center logo area */}
      <motion.div
        className="absolute inset-[32%] rounded-full bg-card border border-gold/20 shadow-gold flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4, type: 'spring', stiffness: 200 }}
      >
        <div className="text-center p-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-gold flex items-center justify-center mx-auto mb-2">
            <BarChart3 size={28} className="text-white" />
          </div>
          <div className="text-xs font-bold text-foreground leading-tight">
            {isRTL ? 'الخبرات' : 'MEO'}
          </div>
        </div>
      </motion.div>

      {/* Floating labels */}
      {labels.map((item, i) => (
        <FloatingLabel
          key={i}
          icon={item.icon}
          label={item.label}
          angle={item.angle}
          radius={195}
          delay={item.delay}
        />
      ))}

      {/* Decorative connecting lines (subtle) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 520 520">
        <motion.circle
          cx="260" cy="260" r="120"
          fill="none"
          stroke="hsl(38 50% 57% / 0.1)"
          strokeWidth="1"
          strokeDasharray="8 6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
      </svg>

      {/* Animated orbiting dot */}
      <motion.div
        className="absolute w-3 h-3 rounded-full bg-gold shadow-gold"
        style={{ top: '50%', left: '50%' }}
        animate={{
          x: [0, 180, 0, -180, 0],
          y: [-180, 0, 180, 0, -180],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  );
};

export default HeroIllustration;
