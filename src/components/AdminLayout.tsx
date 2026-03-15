import React, { useState } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import {
  LayoutDashboard,
  FileText,
  Briefcase,
  Settings,
  BarChart3,
  Menu,
  X,
  Globe,
  MessageSquare,
  Home,
  ChevronLeft,
} from 'lucide-react';
import logo from '@/assets/logo.png';

const sidebarLinks = [
  { href: '/admin', label: 'لوحة التحكم', labelEn: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/analytics', label: 'التحليلات', labelEn: 'Analytics', icon: BarChart3 },
  { href: '/admin/articles', label: 'المقالات', labelEn: 'Articles', icon: FileText },
  { href: '/admin/services', label: 'الخدمات', labelEn: 'Services', icon: Briefcase },
  { href: '/admin/site-content', label: 'محتوى الموقع', labelEn: 'Site Content', icon: Globe },
  { href: '/admin/messages', label: 'الرسائل', labelEn: 'Messages', icon: MessageSquare },
  { href: '/admin/settings', label: 'الإعدادات', labelEn: 'Settings', icon: Settings },
];

const AdminLayout: React.FC = () => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const isActive = (href: string) =>
    href === '/admin'
      ? location.pathname === '/admin'
      : location.pathname.startsWith(href);

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="p-4 border-b border-border flex items-center justify-between">
        <Link to="/admin" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-10" />
          {sidebarOpen && (
            <span className="text-sm font-bold text-foreground">لوحة التحكم</span>
          )}
        </Link>
      </div>

      {/* Nav Links */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        {sidebarLinks.map((link) => {
          const Icon = link.icon;
          const active = isActive(link.href);
          return (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setMobileSidebarOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                active
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              <Icon size={20} />
              {sidebarOpen && <span className="font-tajawal">{link.label}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Back to site */}
      <div className="p-3 border-t border-border">
        <Link
          to="/"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
        >
          <Home size={20} />
          {sidebarOpen && <span className="font-tajawal">العودة للموقع</span>}
        </Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex bg-muted/30" dir="rtl">
      {/* Desktop Sidebar */}
      <aside
        className={`hidden lg:flex flex-col bg-card border-l border-border transition-all duration-300 ${
          sidebarOpen ? 'w-64' : 'w-[72px]'
        }`}
      >
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar Overlay */}
      {mobileSidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileSidebarOpen(false)}
          />
          <aside className="absolute right-0 top-0 bottom-0 w-64 bg-card shadow-xl">
            <SidebarContent />
          </aside>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
        {/* Top Bar */}
        <header className="h-14 bg-card border-b border-border flex items-center justify-between px-4 lg:px-6 sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                if (window.innerWidth >= 1024) {
                  setSidebarOpen(!sidebarOpen);
                } else {
                  setMobileSidebarOpen(!mobileSidebarOpen);
                }
              }}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
            >
              {mobileSidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <h1 className="text-sm font-semibold text-foreground font-tajawal">
              {sidebarLinks.find((l) => isActive(l.href))?.label || 'لوحة التحكم'}
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold">
              A
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 lg:p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
