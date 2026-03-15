import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, FileText, Briefcase, Eye, MousePointer, TrendingUp, Users } from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts';

const visitData = [
  { name: 'يناير', visits: 1200, clicks: 400 },
  { name: 'فبراير', visits: 1900, clicks: 600 },
  { name: 'مارس', visits: 2400, clicks: 900 },
  { name: 'أبريل', visits: 1800, clicks: 700 },
  { name: 'مايو', visits: 3200, clicks: 1100 },
  { name: 'يونيو', visits: 2800, clicks: 950 },
];

const pageData = [
  { name: 'الرئيسية', views: 4500 },
  { name: 'الخدمات', views: 2800 },
  { name: 'من نحن', views: 1900 },
  { name: 'المقالات', views: 2200 },
  { name: 'التواصل', views: 1500 },
];

const stats = [
  { label: 'إجمالي الزيارات', value: '12,450', icon: Eye, color: 'text-blue-500', bg: 'bg-blue-500/10' },
  { label: 'النقرات', value: '4,650', icon: MousePointer, color: 'text-primary', bg: 'bg-primary/10' },
  { label: 'المقالات', value: '12', icon: FileText, color: 'text-green-500', bg: 'bg-green-500/10' },
  { label: 'الخدمات', value: '6', icon: Briefcase, color: 'text-purple-500', bg: 'bg-purple-500/10' },
];

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6 font-tajawal">
      <h2 className="text-2xl font-bold text-foreground">نظرة عامة</h2>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <Card key={i} className="border-border">
              <CardContent className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold text-foreground mt-1">{stat.value}</p>
                  </div>
                  <div className={`w-12 h-12 rounded-xl ${stat.bg} flex items-center justify-center`}>
                    <Icon size={24} className={stat.color} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-base font-tajawal">الزيارات والنقرات</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={visitData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis dataKey="name" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip />
                <Area type="monotone" dataKey="visits" stroke="hsl(220, 63%, 29%)" fill="hsl(220, 63%, 29%)" fillOpacity={0.15} name="الزيارات" />
                <Area type="monotone" dataKey="clicks" stroke="hsl(38, 50%, 57%)" fill="hsl(38, 50%, 57%)" fillOpacity={0.15} name="النقرات" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-base font-tajawal">مشاهدات الصفحات</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={pageData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis dataKey="name" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip />
                <Bar dataKey="views" fill="hsl(38, 50%, 57%)" radius={[6, 6, 0, 0]} name="المشاهدات" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle className="text-base font-tajawal">النشاط الأخير</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { text: 'تم تحديث مقال "أفضل الممارسات المحاسبية"', time: 'منذ ساعتين', icon: FileText },
              { text: 'تمت إضافة خدمة جديدة', time: 'منذ 5 ساعات', icon: Briefcase },
              { text: 'زيادة في الزيارات بنسبة 15%', time: 'منذ يوم', icon: TrendingUp },
              { text: '12 رسالة جديدة من العملاء', time: 'منذ يومين', icon: Users },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon size={16} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-foreground">{item.text}</p>
                    <p className="text-xs text-muted-foreground">{item.time}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
