import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Articles from "./pages/Articles";
import ArticleDetail from "./pages/ArticleDetail";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import AdminLayout from "./components/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import Analytics from "./pages/admin/Analytics";
import ArticlesManager from "./pages/admin/ArticlesManager";
import ServicesManager from "./pages/admin/ServicesManager";
import SiteContent from "./pages/admin/SiteContent";
import Messages from "./pages/admin/Messages";
import AdminSettings from "./pages/admin/AdminSettings";
import "./i18n";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ThemeProvider>
        <LanguageProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              {/* Public routes */}
              <Route element={<Layout><Home /></Layout>} path="/" />
              <Route element={<Layout><About /></Layout>} path="/about" />
              <Route element={<Layout><Services /></Layout>} path="/services" />
              <Route element={<Layout><Articles /></Layout>} path="/articles" />
              <Route element={<Layout><ArticleDetail /></Layout>} path="/articles/:id" />
              <Route element={<Layout><Contact /></Layout>} path="/contact" />

              {/* Admin routes */}
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="analytics" element={<Analytics />} />
                <Route path="articles" element={<ArticlesManager />} />
                <Route path="services" element={<ServicesManager />} />
                <Route path="site-content" element={<SiteContent />} />
                <Route path="messages" element={<Messages />} />
                <Route path="settings" element={<AdminSettings />} />
              </Route>

              <Route path="*" element={<Layout><NotFound /></Layout>} />
            </Routes>
          </BrowserRouter>
        </LanguageProvider>
      </ThemeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
