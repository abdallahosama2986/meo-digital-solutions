import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Save, Check } from 'lucide-react';

const AdminSettings: React.FC = () => {
  const [saved, setSaved] = useState(false);
  const [settings, setSettings] = useState({
    siteName: 'مكتب الخبرات المتعددة',
    siteNameEn: 'Multiple Experiences Office',
    adminEmail: 'admin@alkhebrat.sa',
    adminPassword: '',
    whatsappNumber: '966539606358',
    googleAnalyticsId: '',
    maintenanceMode: false,
  });

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-6 font-tajawal">
      <h2 className="text-2xl font-bold text-foreground">الإعدادات</h2>

      <Card className="border-border">
        <CardHeader>
          <CardTitle className="text-base font-tajawal">إعدادات الموقع</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">اسم الموقع (عربي)</label>
              <Input value={settings.siteName} onChange={(e) => setSettings({ ...settings, siteName: e.target.value })} className="font-tajawal" />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">Site Name (English)</label>
              <Input value={settings.siteNameEn} onChange={(e) => setSettings({ ...settings, siteNameEn: e.target.value })} />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">رقم الواتساب</label>
              <Input value={settings.whatsappNumber} onChange={(e) => setSettings({ ...settings, whatsappNumber: e.target.value })} dir="ltr" />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">Google Analytics ID</label>
              <Input value={settings.googleAnalyticsId} onChange={(e) => setSettings({ ...settings, googleAnalyticsId: e.target.value })} dir="ltr" placeholder="G-XXXXXXXXXX" />
            </div>
          </div>
          <div className="flex items-center gap-3 pt-2">
            <label className="flex items-center gap-2 text-sm text-foreground cursor-pointer">
              <input
                type="checkbox"
                checked={settings.maintenanceMode}
                onChange={(e) => setSettings({ ...settings, maintenanceMode: e.target.checked })}
                className="rounded"
              />
              وضع الصيانة
            </label>
          </div>
        </CardContent>
      </Card>

      <Card className="border-border">
        <CardHeader>
          <CardTitle className="text-base font-tajawal">حساب المسؤول</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">البريد الإلكتروني</label>
              <Input value={settings.adminEmail} onChange={(e) => setSettings({ ...settings, adminEmail: e.target.value })} dir="ltr" />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">كلمة المرور الجديدة</label>
              <Input type="password" value={settings.adminPassword} onChange={(e) => setSettings({ ...settings, adminPassword: e.target.value })} dir="ltr" placeholder="••••••••" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Button onClick={handleSave} className="gap-2" size="lg">
        {saved ? <><Check size={16} /> تم الحفظ</> : <><Save size={16} /> حفظ الإعدادات</>}
      </Button>
    </div>
  );
};

export default AdminSettings;
