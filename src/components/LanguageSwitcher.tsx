import React, { useState } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { languages } from '../data/translations';
import { useTranslation } from '../hooks/useTranslation';

const LanguageSwitcher: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentLanguage, changeLanguage } = useTranslation();

  const currentLang = languages.find(lang => lang.code === currentLanguage);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
      >
        <Globe size={18} />
        <span className="text-sm font-medium">{currentLang?.flag} {currentLang?.name}</span>
        <ChevronDown size={16} className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[150px] z-50">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => {
                changeLanguage(language.code);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors flex items-center space-x-2 ${
                currentLanguage === language.code ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
              }`}
            >
              <span>{language.flag}</span>
              <span>{language.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;