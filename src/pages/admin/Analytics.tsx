import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, BarChart, Bar, LineChart, Line,
} from 'recharts';

const clicksBySection = [
  { name: 'الهيرو', clicks: 1850, color: 'hsl(220, 63%, 29%)' },
  { name: 'الخدمات', clicks: 1420, color: 'hsl(38, 50%, 57%)' },
  { name: 'من نحن', clicks: 890, color: 'hsl(160, 50%, 45%)' },
  { name: 'المقالات', clicks: 1200, color: 'hsl(280, 50%, 55%)' },
  { name: 'التواصل', clicks: 760, color: 'hsl(0, 60%, 55%)' },
];

const dailyClicks = Array.from({ length: 30 }, (_, i) => ({
  day: `${i + 1}`,
  clicks: Math.floor(Math.random() * 200) + 50,
  unique: Math.floor(Math.random() * 120) + 30,
}));

const deviceData = [
  { name: 'جوال', value: 62 },
  { name: 'كمبيوتر', value: 30 },
  { name: 'تابلت', value: 8 },
];
const DEVICE_COLORS = ['hsl(220, 63%, 29%)', 'hsl(38, 50%, 57%)', 'hsl(160, 50%, 45%)'];

const buttonClicks = [
  { name: 'تواصل معنا (واتساب)', clicks: 2340 },
  { name: 'اطلب الخدمة', clicks: 1560 },
  { name: 'اقرأ المزيد', clicks: 980 },
  { name: 'تبديل اللغة', clicks: 670 },
  { name: 'عرض الخدمات', clicks: 1120 },
];

const Analytics: React.FC = () => {
  const [period, setPeriod] = useState<'week' | 'month' | 'year'>('month');

  return (
    <div className="space-y-6 font-tajawal">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h2 className="text-2xl font-bold text-foreground">التحليلات</h2>
        <div className="flex gap-2">
          {(['week', 'month', 'year'] as const).map((p) => (
            <Button
              key={p}
              variant={period === p ? 'default' : 'outline'}
              size="sm"
              onClick={() => setPeriod(p)}
              className="text-xs"
            >
              {p === 'week' ? 'أسبوع' : p === 'month' ? 'شهر' : 'سنة'}
            </Button>
          ))}
        </div>
      </div>

      {/* Click stats cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="border-border">
          <CardContent className="p-5 text-center">
            <p className="text-sm text-muted-foreground">إجمالي النقرات</p>
            <p className="text-3xl font-bold text-foreground mt-1">6,120</p>
            <p className="text-xs text-green-500 mt-1">↑ 12% عن الشهر السابق</p>
          </CardContent>
        </Card>
        <Card className="border-border">
          <CardContent className="p-5 text-center">
            <p className="text-sm text-muted-foreground">معدل النقر (CTR)</p>
            <p className="text-3xl font-bold text-foreground mt-1">3.8%</p>
            <p className="text-xs text-green-500 mt-1">↑ 0.5% تحسن</p>
          </CardContent>
        </Card>
        <Card className="border-border">
          <CardContent className="p-5 text-center">
            <p className="text-sm text-muted-foreground">نقرات واتساب</p>
            <p className="text-3xl font-bold text-foreground mt-1">2,340</p>
            <p className="text-xs text-primary mt-1">الأكثر نقراً</p>
          </CardContent>
        </Card>
      </div>

      {/* Daily Clicks Chart */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle className="text-base font-tajawal">النقرات اليومية</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={dailyClicks}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="clicks" stroke="hsl(220, 63%, 29%)" fill="hsl(220, 63%, 29%)" fillOpacity={0.15} name="النقرات" />
              <Area type="monotone" dataKey="unique" stroke="hsl(38, 50%, 57%)" fill="hsl(38, 50%, 57%)" fillOpacity={0.15} name="فريدة" />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Clicks by Section */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-base font-tajawal">النقرات حسب القسم</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {clicksBySection.map((section) => (
                <div key={section.name} className="flex items-center gap-3">
                  <span className="text-sm w-20 text-muted-foreground">{section.name}</span>
                  <div className="flex-1 bg-muted rounded-full h-3 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{
                        width: `${(section.clicks / 1850) * 100}%`,
                        backgroundColor: section.color,
                      }}
                    />
                  </div>
                  <span className="text-sm font-medium w-16 text-left text-foreground">{section.clicks}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Device Breakdown */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-base font-tajawal">الأجهزة المستخدمة</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie
                  data={deviceData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={90}
                  dataKey="value"
                  label={({ name, value }) => `${name} ${value}%`}
                >
                  {deviceData.map((_, i) => (
                    <Cell key={i} fill={DEVICE_COLORS[i]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Button Clicks Table */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle className="text-base font-tajawal">نقرات الأزرار</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-right py-3 px-4 font-medium text-muted-foreground">الزر</th>
                  <th className="text-right py-3 px-4 font-medium text-muted-foreground">النقرات</th>
                  <th className="text-right py-3 px-4 font-medium text-muted-foreground">النسبة</th>
                </tr>
              </thead>
              <tbody>
                {buttonClicks.map((btn) => (
                  <tr key={btn.name} className="border-b border-border/50 hover:bg-muted/30">
                    <td className="py-3 px-4 text-foreground">{btn.name}</td>
                    <td className="py-3 px-4 text-foreground font-medium">{btn.clicks.toLocaleString()}</td>
                    <td className="py-3 px-4 text-muted-foreground">
                      {((btn.clicks / 6670) * 100).toFixed(1)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;
