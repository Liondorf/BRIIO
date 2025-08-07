import { useState, useCallback } from 'react';
import { translations } from '../data/translations';

export const useTranslation = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const t = useCallback((key: string): string => {
    return translations[currentLanguage]?.[key] || key;
  }, [currentLanguage]);

  const changeLanguage = useCallback((languageCode: string) => {
    setCurrentLanguage(languageCode);
  }, []);

  return {
    t,
    currentLanguage,
    changeLanguage
  };
};