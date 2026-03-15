import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trash2, Mail, MailOpen, ExternalLink } from 'lucide-react';

interface Message {
  id: number;
  name: string;
  email: string;
  phone: string;
  message: string;
  date: string;
  read: boolean;
}

const initialMessages: Message[] = [
  { id: 1, name: 'أحمد محمد', email: 'ahmed@example.com', phone: '0501234567', message: 'أرغب في الاستفسار عن خدمات المحاسبة', date: '2026-03-14', read: false },
  { id: 2, name: 'سارة العلي', email: 'sara@example.com', phone: '0559876543', message: 'هل تقدمون خدمات إدارة المطاعم في جدة؟', date: '2026-03-13', read: false },
  { id: 3, name: 'خالد الأحمدي', email: 'khaled@company.sa', phone: '0541112233', message: 'نحتاج استشارة في التحول الرقمي لشركتنا', date: '2026-03-12', read: true },
  { id: 4, name: 'نورة السعيد', email: 'noura@example.com', phone: '0567778899', message: 'ما هي أسعار الباقات الشهرية؟', date: '2026-03-10', read: true },
];

const Messages: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [selected, setSelected] = useState<Message | null>(null);

  const toggleRead = (id: number) =>
    setMessages(messages.map((m) => (m.id === id ? { ...m, read: !m.read } : m)));

  const handleDelete = (id: number) => {
    setMessages(messages.filter((m) => m.id !== id));
    if (selected?.id === id) setSelected(null);
  };

  const unreadCount = messages.filter((m) => !m.read).length;

  return (
    <div className="space-y-6 font-tajawal">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">
          الرسائل
          {unreadCount > 0 && (
            <span className="mr-2 px-2 py-0.5 text-xs rounded-full bg-destructive text-destructive-foreground">
              {unreadCount} جديدة
            </span>
          )}
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Messages List */}
        <div className="lg:col-span-1 space-y-2">
          {messages.map((msg) => (
            <Card
              key={msg.id}
              className={`border-border cursor-pointer transition-colors hover:bg-muted/30 ${
                selected?.id === msg.id ? 'ring-2 ring-primary' : ''
              } ${!msg.read ? 'border-r-4 border-r-primary' : ''}`}
              onClick={() => { setSelected(msg); if (!msg.read) toggleRead(msg.id); }}
            >
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-sm text-foreground">{msg.name}</span>
                  <span className="text-xs text-muted-foreground">{msg.date}</span>
                </div>
                <p className="text-xs text-muted-foreground line-clamp-1">{msg.message}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Message Detail */}
        <div className="lg:col-span-2">
          {selected ? (
            <Card className="border-border">
              <CardHeader className="flex flex-row items-start justify-between">
                <div>
                  <CardTitle className="text-lg font-tajawal">{selected.name}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">{selected.date}</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" onClick={() => toggleRead(selected.id)}>
                    {selected.read ? <MailOpen size={16} /> : <Mail size={16} />}
                  </Button>
                  <a href={`https://wa.me/${selected.phone.replace(/^0/, '966')}`} target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon"><ExternalLink size={16} /></Button>
                  </a>
                  <Button variant="ghost" size="icon" onClick={() => handleDelete(selected.id)} className="text-destructive">
                    <Trash2 size={16} />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">البريد: </span>
                    <span className="text-foreground">{selected.email}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">الجوال: </span>
                    <span className="text-foreground" dir="ltr">{selected.phone}</span>
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-muted/50 text-foreground text-sm leading-relaxed">
                  {selected.message}
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="border-border">
              <CardContent className="p-12 text-center text-muted-foreground">
                اختر رسالة لعرض تفاصيلها
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Messages;
