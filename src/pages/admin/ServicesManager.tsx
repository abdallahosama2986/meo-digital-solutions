import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Plus, Pencil, Trash2, X, GripVertical } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  active: boolean;
}

const initialServices: Service[] = [
  { id: 1, title: 'الخدمات المحاسبية', description: 'إعداد القوائم المالية والتقارير المحاسبية', icon: '📊', active: true },
  { id: 2, title: 'الخدمات الإدارية', description: 'التخطيط الاستراتيجي وإدارة الموارد البشرية', icon: '⚙️', active: true },
  { id: 3, title: 'الخدمات التشغيلية', description: 'تحسين العمليات وإدارة سلسلة التوريد', icon: '📈', active: true },
  { id: 4, title: 'الخدمات التسويقية', description: 'التسويق الرقمي وبناء العلامة التجارية', icon: '👥', active: true },
  { id: 5, title: 'إدارة المطاعم', description: 'حلول شاملة لإدارة المطاعم والمقاهي', icon: '📖', active: true },
  { id: 6, title: 'الأنظمة والتقنية', description: 'تطوير البرمجيات والحلول التقنية', icon: '💻', active: false },
];

const ServicesManager: React.FC = () => {
  const [services, setServices] = useState<Service[]>(initialServices);
  const [editing, setEditing] = useState<Service | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ title: '', description: '', icon: '', active: true });

  const handleSave = () => {
    if (editing) {
      setServices(services.map((s) => (s.id === editing.id ? { ...s, ...form } : s)));
    } else {
      setServices([...services, { ...form, id: Date.now() }]);
    }
    resetForm();
  };

  const handleEdit = (service: Service) => {
    setEditing(service);
    setForm({ title: service.title, description: service.description, icon: service.icon, active: service.active });
    setShowForm(true);
  };

  const handleDelete = (id: number) => setServices(services.filter((s) => s.id !== id));
  const toggleActive = (id: number) => setServices(services.map((s) => (s.id === id ? { ...s, active: !s.active } : s)));

  const resetForm = () => {
    setEditing(null);
    setShowForm(false);
    setForm({ title: '', description: '', icon: '', active: true });
  };

  return (
    <div className="space-y-6 font-tajawal">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h2 className="text-2xl font-bold text-foreground">إدارة الخدمات</h2>
        <Button onClick={() => { resetForm(); setShowForm(true); }} className="gap-2">
          <Plus size={16} /> إضافة خدمة
        </Button>
      </div>

      {showForm && (
        <Card className="border-border">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-base font-tajawal">
              {editing ? 'تعديل الخدمة' : 'خدمة جديدة'}
            </CardTitle>
            <Button variant="ghost" size="icon" onClick={resetForm}><X size={18} /></Button>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-4 flex-wrap">
              <Input placeholder="أيقونة (emoji)" value={form.icon} onChange={(e) => setForm({ ...form, icon: e.target.value })} className="w-24 text-center text-xl" />
              <Input placeholder="اسم الخدمة" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="flex-1 font-tajawal" />
            </div>
            <Textarea placeholder="وصف الخدمة" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="font-tajawal" />
            <div className="flex items-center gap-3">
              <label className="flex items-center gap-2 text-sm text-foreground cursor-pointer">
                <input type="checkbox" checked={form.active} onChange={(e) => setForm({ ...form, active: e.target.checked })} className="rounded" />
                مفعّلة
              </label>
            </div>
            <Button onClick={handleSave}>{editing ? 'حفظ التعديلات' : 'إضافة الخدمة'}</Button>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <Card key={service.id} className={`border-border transition-opacity ${!service.active ? 'opacity-50' : ''}`}>
            <CardContent className="p-5">
              <div className="flex items-start justify-between mb-3">
                <span className="text-3xl">{service.icon}</span>
                <div className="flex gap-1">
                  <Button variant="ghost" size="icon" onClick={() => handleEdit(service)}><Pencil size={14} /></Button>
                  <Button variant="ghost" size="icon" onClick={() => handleDelete(service.id)} className="text-destructive"><Trash2 size={14} /></Button>
                </div>
              </div>
              <h3 className="font-semibold text-foreground mb-1">{service.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{service.description}</p>
              <Button variant="outline" size="sm" onClick={() => toggleActive(service.id)} className="text-xs">
                {service.active ? 'إيقاف' : 'تفعيل'}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ServicesManager;
