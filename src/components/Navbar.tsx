import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import logo from '@/assets/logo.png';

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const { lang, isRTL, toggleLanguage } = useLanguage();
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/about', label: t('nav.about') },
    { href: '/services', label: t('nav.services') },
    { href: '/articles', label: t('nav.articles') },
  
  ];

  const isActive = (href: string) =>
    href === '/' ? location.pathname === '/' : location.pathname.startsWith(href);

  return (
    <>
      <motion.header
        className={` absolute top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-blue-100  backdrop-blur-md shadow-card border-b border-border'
            : ' bg-transparent backdrop-blur-sm border-b border-border/30'
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <nav className="container-custom flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="">
            <img src={logo} alt="MEO Logo" className=" h-16 mt-1" />
          </Link>

          {/* Desktop nav links */}
          <div className={`hidden md:flex items-center gap-8 ${isRTL ? '' : ''}`}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`nav-link text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? 'text-gold active'
                    : 'text-white hover:text-gold'
                } ${isRTL ? 'font-tajawal' : 'font-poppins'}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Controls */}
          <div className={`hidden md:flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
            {/* Language toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border border-border text-white hover:border-gold hover:text-gold transition-all duration-200"
            >
              <Globe size={14} />
              {lang === 'ar' ? 'EN' : 'عر'}
            </button>

            {/* Theme toggle */}
           

            {/* CTA */}
            <a
              href="https://wa.me/966539606358"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full text-sm font-semibold bg-gradient-gold text-white shadow-gold hover:shadow-lg transition-all duration-200 hover:scale-105"
            >
              {t('nav.contact')}
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-card/98 backdrop-blur-xl flex flex-col pt-24 px-6 pb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    to={link.href}
                    className={`block py-4 text-xl font-semibold border-b border-border/50 transition-colors ${
                      isActive(link.href) ? 'text-gold' : 'text-white hover:text-gold'
                    } ${isRTL ? 'text-right font-tajawal' : 'text-left font-poppins'}`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="flex items-center gap-4 mt-8">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm font-semibold hover:border-gold hover:text-gold transition-colors"
              >
                <Globe size={16} />
                {lang === 'ar' ? 'English' : 'عربي'}
              </button>
         
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
