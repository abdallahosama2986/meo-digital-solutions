import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/contexts/LanguageContext';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  const quickLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/about', label: t('nav.about') },
    { href: '/services', label: t('nav.services') },
    { href: '/articles', label: t('nav.articles') },
    { href: '/contact', label: t('nav.contact') },
  ];

  return (
    <footer className="bg-hero text-white/80" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Gold top line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-60" />

      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <img src={logo} alt="MEO" className="h-14 w-auto mb-5 brightness-200" />
            <p className={`text-sm leading-relaxed text-white/60 ${isRTL ? 'font-tajawal' : 'font-poppins'}`}>
              {t('footer.aboutText')}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className={`text-white font-semibold mb-5 text-base ${isRTL ? 'font-tajawal' : 'font-poppins'}`}>
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className={`text-sm text-white/60 hover:text-gold transition-colors ${isRTL ? 'font-tajawal' : 'font-poppins'}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className={`text-white font-semibold mb-5 text-base ${isRTL ? 'font-tajawal' : 'font-poppins'}`}>
              {t('footer.contactInfo')}
            </h4>
            <ul className="space-y-3">
              <li className={`flex items-center gap-3 text-sm text-white/60 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Phone size={15} className="text-gold flex-shrink-0" />
                <span dir="ltr">+966 539 606 358</span>
              </li>
              <li className={`flex items-center gap-3 text-sm text-white/60 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Mail size={15} className="text-gold flex-shrink-0" />
                <span>sales@alkhebrat.sa</span>
              </li>
              <li className={`flex items-start gap-3 text-sm text-white/60 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <MapPin size={15} className="text-gold flex-shrink-0 mt-0.5" />
                <span className={isRTL ? 'font-tajawal' : 'font-poppins'}>{t('contact.addressValue')}</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className={`text-white font-semibold mb-5 text-base ${isRTL ? 'font-tajawal' : 'font-poppins'}`}>
              {t('footer.followUs')}
            </h4>
            <div className="flex items-center gap-3 flex-wrap">
              {[
                { icon: <Facebook size={18} />, href: '#', label: 'Facebook' },
                { icon: <Instagram size={18} />, href: '#', label: 'Instagram' },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.22 8.22 0 004.82 1.55V6.78a4.85 4.85 0 01-1.05-.09z"/>
                    </svg>
                  ),
                  href: '#',
                  label: 'TikTok',
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  ),
                  href: '#',
                  label: 'X (Twitter)',
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-gold hover:text-gold transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Gold divider */}
      <div className="h-px bg-white/10" />

      <div className="container-custom py-5">
        <p className={`text-center text-xs text-white/40 ${isRTL ? 'font-tajawal' : 'font-poppins'}`}>
          © {new Date().getFullYear()} {t('footer.meo')} — {t('footer.rights')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
