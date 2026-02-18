import React, { createContext, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface LanguageContextType {
  lang: string;
  isRTL: boolean;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'ar',
  isRTL: true,
  toggleLanguage: () => {},
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language || 'ar');

  const isRTL = lang === 'ar';

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    document.documentElement.classList.toggle('rtl', isRTL);
  }, [lang, isRTL]);

  const toggleLanguage = () => {
    const newLang = lang === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
    setLang(newLang);
    localStorage.setItem('meo-lang', newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, isRTL, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
