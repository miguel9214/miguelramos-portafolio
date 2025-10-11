import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';
import developerData from '../data/developerData';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'es';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  const t = translations[language];
  const data = developerData[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, data }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;