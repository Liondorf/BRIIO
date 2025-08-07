import React from 'react';
import { Search, ArrowRight } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 pt-24 lg:pt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            {t('hero.subtitle')}
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder={t('hero.searchPlaceholder')}
                className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
                <span>{t('hero.searchButton')}</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              {t('hero.registerTalent')}
            </button>
            <button className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors">
              {t('hero.postJob')}
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-3xl font-bold text-white mb-2">2,500+</div>
            <div className="text-blue-100">{t('stats.jobsPlaced')}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-3xl font-bold text-white mb-2">150+</div>
            <div className="text-blue-100">{t('stats.companies')}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-3xl font-bold text-white mb-2">5,000+</div>
            <div className="text-blue-100">{t('stats.candidates')}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-3xl font-bold text-white mb-2">25+</div>
            <div className="text-blue-100">{t('stats.countries')}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;