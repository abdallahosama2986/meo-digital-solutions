import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Save, Check } from 'lucide-react';

const SiteContent: React.FC = () => {
  const [saved, setSaved] = useState<string | null>(null);

  const [hero, setHero] = useState({
    titleAr: 'مكتب الخبرات المتعددة',
    subtitleAr: 'شريكك في النجاح والتميز المؤسسي',
    titleEn: 'Multiple Experiences Office',
    subtitleEn: 'Your Partner in Institutional Excellence',
  });

  const [about, setAbout] = useState({
    titleAr: 'من نحن',
    descriptionAr: 'نحن مكتب استشاري متخصص في تقديم الحلول المتكاملة...',
    titleEn: 'About Us',
    descriptionEn: 'We are a consulting office specialized in providing integrated solutions...',
  });

  const [contact, setContact] = useState({
    phone: '966539606358',
    email: 'info@alkhebrat.sa',
    addressAr: 'المملكة العربية السعودية',
    addressEn: 'Saudi Arabia',
    whatsapp: '966539606358',
  });

  const [social, setSocial] = useState({
    twitter: '',
    linkedin: '',
    instagram: '',
  });

  const handleSave = (section: string) => {
    setSaved(section);
    setTimeout(() => setSaved(null), 2000);
  };

  return (
    <div className="space-y-6 font-tajawal">
      <h2 className="text-2xl font-bold text-foreground">محتوى الموقع</h2>

      {/* Hero Section */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle className="text-base font-tajawal">قسم الهيرو</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">العنوان (عربي)</label>
              <Input value={hero.titleAr} onChange={(e) => setHero({ ...hero, titleAr: e.target.value })} className="font-tajawal" />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">Title (English)</label>
              <Input value={hero.titleEn} onChange={(e) => setHero({ ...hero, titleEn: e.target.value })} />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">العنوان الفرعي (عربي)</label>
              <Input value={hero.subtitleAr} onChange={(e) => setHero({ ...hero, subtitleAr: e.target.value })} className="font-tajawal" />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">Subtitle (English)</label>
              <Input value={hero.subtitleEn} onChange={(e) => setHero({ ...hero, subtitleEn: e.target.value })} />
            </div>
          </div>
          <Button onClick={() => handleSave('hero')} className="gap-2">
            {saved === 'hero' ? <><Check size={16} /> تم الحفظ</> : <><Save size={16} /> حفظ</>}
          </Button>
        </CardContent>
      </Card>

      {/* About Section */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle className="text-base font-tajawal">قسم من نحن</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">العنوان (عربي)</label>
              <Input value={about.titleAr} onChange={(e) => setAbout({ ...about, titleAr: e.target.value })} className="font-tajawal" />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">Title (English)</label>
              <Input value={about.titleEn} onChange={(e) => setAbout({ ...about, titleEn: e.target.value })} />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">الوصف (عربي)</label>
              <Textarea value={about.descriptionAr} onChange={(e) => setAbout({ ...about, descriptionAr: e.target.value })} className="font-tajawal min-h-[100px]" />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">Description (English)</label>
              <Textarea value={about.descriptionEn} onChange={(e) => setAbout({ ...about, descriptionEn: e.target.value })} className="min-h-[100px]" />
            </div>
          </div>
          <Button onClick={() => handleSave('about')} className="gap-2">
            {saved === 'about' ? <><Check size={16} /> تم الحفظ</> : <><Save size={16} /> حفظ</>}
          </Button>
        </CardContent>
      </Card>

      {/* Contact Info */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle className="text-base font-tajawal">معلومات التواصل</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">رقم الهاتف</label>
              <Input value={contact.phone} onChange={(e) => setContact({ ...contact, phone: e.target.value })} dir="ltr" />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">رقم الواتساب</label>
              <Input value={contact.whatsapp} onChange={(e) => setContact({ ...contact, whatsapp: e.target.value })} dir="ltr" />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">البريد الإلكتروني</label>
              <Input value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })} dir="ltr" />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">العنوان (عربي)</label>
              <Input value={contact.addressAr} onChange={(e) => setContact({ ...contact, addressAr: e.target.value })} className="font-tajawal" />
            </div>
          </div>
          <Button onClick={() => handleSave('contact')} className="gap-2">
            {saved === 'contact' ? <><Check size={16} /> تم الحفظ</> : <><Save size={16} /> حفظ</>}
          </Button>
        </CardContent>
      </Card>

      {/* Social Media */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle className="text-base font-tajawal">وسائل التواصل الاجتماعي</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">Twitter / X</label>
              <Input value={social.twitter} onChange={(e) => setSocial({ ...social, twitter: e.target.value })} dir="ltr" placeholder="https://x.com/..." />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">LinkedIn</label>
              <Input value={social.linkedin} onChange={(e) => setSocial({ ...social, linkedin: e.target.value })} dir="ltr" placeholder="https://linkedin.com/..." />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">Instagram</label>
              <Input value={social.instagram} onChange={(e) => setSocial({ ...social, instagram: e.target.value })} dir="ltr" placeholder="https://instagram.com/..." />
            </div>
          </div>
          <Button onClick={() => handleSave('social')} className="gap-2">
            {saved === 'social' ? <><Check size={16} /> تم الحفظ</> : <><Save size={16} /> حفظ</>}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SiteContent;
