import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Plus, Pencil, Trash2, Search, X } from 'lucide-react';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  status: 'published' | 'draft';
  date: string;
}

const initialArticles: Article[] = [
  { id: 1, title: 'أفضل الممارسات المحاسبية للشركات الناشئة', excerpt: 'تعرف على أهم الممارسات المحاسبية...', category: 'محاسبة', status: 'published', date: '2026-03-01' },
  { id: 2, title: 'كيف تبني فريق عمل ناجح', excerpt: 'استراتيجيات بناء فرق العمل الفعالة...', category: 'إدارة', status: 'published', date: '2026-02-20' },
  { id: 3, title: 'التحول الرقمي في المؤسسات', excerpt: 'أهمية التحول الرقمي وخطوات التنفيذ...', category: 'تقنية', status: 'draft', date: '2026-02-15' },
  { id: 4, title: 'استراتيجيات التسويق الحديثة', excerpt: 'أحدث طرق التسويق الرقمي...', category: 'تسويق', status: 'published', date: '2026-01-28' },
];

const ArticlesManager: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>(initialArticles);
  const [search, setSearch] = useState('');
  const [editing, setEditing] = useState<Article | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ title: '', excerpt: '', category: '', status: 'draft' as const });

  const filtered = articles.filter(
    (a) => a.title.includes(search) || a.category.includes(search)
  );

  const handleSave = () => {
    if (editing) {
      setArticles(articles.map((a) => (a.id === editing.id ? { ...a, ...form } : a)));
    } else {
      setArticles([...articles, { ...form, id: Date.now(), date: new Date().toISOString().split('T')[0] }]);
    }
    resetForm();
  };

  const handleEdit = (article: Article) => {
    setEditing(article);
    setForm({ title: article.title, excerpt: article.excerpt, category: article.category, status: article.status });
    setShowForm(true);
  };

  const handleDelete = (id: number) => {
    setArticles(articles.filter((a) => a.id !== id));
  };

  const resetForm = () => {
    setEditing(null);
    setShowForm(false);
    setForm({ title: '', excerpt: '', category: '', status: 'draft' });
  };

  return (
    <div className="space-y-6 font-tajawal">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h2 className="text-2xl font-bold text-foreground">إدارة المقالات</h2>
        <Button onClick={() => { resetForm(); setShowForm(true); }} className="gap-2">
          <Plus size={16} /> إضافة مقال
        </Button>
      </div>

      {/* Form */}
      {showForm && (
        <Card className="border-border">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-base font-tajawal">
              {editing ? 'تعديل المقال' : 'مقال جديد'}
            </CardTitle>
            <Button variant="ghost" size="icon" onClick={resetForm}>
              <X size={18} />
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              placeholder="عنوان المقال"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="font-tajawal"
            />
            <Textarea
              placeholder="ملخص المقال"
              value={form.excerpt}
              onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
              className="font-tajawal min-h-[100px]"
            />
            <div className="flex gap-4 flex-wrap">
              <Input
                placeholder="التصنيف"
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="font-tajawal w-48"
              />
              <select
                value={form.status}
                onChange={(e) => setForm({ ...form, status: e.target.value as 'published' | 'draft' })}
                className="px-3 py-2 rounded-md border border-input bg-background text-sm"
              >
                <option value="draft">مسودة</option>
                <option value="published">منشور</option>
              </select>
            </div>
            <Button onClick={handleSave} className="gap-2">
              {editing ? 'حفظ التعديلات' : 'نشر المقال'}
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Search */}
      <div className="relative max-w-sm">
        <Search size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="بحث في المقالات..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pr-9 font-tajawal"
        />
      </div>

      {/* Table */}
      <Card className="border-border">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="text-right py-3 px-4 font-medium text-muted-foreground">العنوان</th>
                  <th className="text-right py-3 px-4 font-medium text-muted-foreground">التصنيف</th>
                  <th className="text-right py-3 px-4 font-medium text-muted-foreground">الحالة</th>
                  <th className="text-right py-3 px-4 font-medium text-muted-foreground">التاريخ</th>
                  <th className="text-right py-3 px-4 font-medium text-muted-foreground">إجراءات</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((article) => (
                  <tr key={article.id} className="border-b border-border/50 hover:bg-muted/20">
                    <td className="py-3 px-4 text-foreground font-medium">{article.title}</td>
                    <td className="py-3 px-4 text-muted-foreground">{article.category}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                          article.status === 'published'
                            ? 'bg-green-500/10 text-green-600'
                            : 'bg-yellow-500/10 text-yellow-600'
                        }`}
                      >
                        {article.status === 'published' ? 'منشور' : 'مسودة'}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">{article.date}</td>
                    <td className="py-3 px-4">
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" onClick={() => handleEdit(article)}>
                          <Pencil size={14} />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => handleDelete(article.id)} className="text-destructive">
                          <Trash2 size={14} />
                        </Button>
                      </div>
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

export default ArticlesManager;
