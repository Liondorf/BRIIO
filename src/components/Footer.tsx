import React from 'react';
import { Users, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/Brio Full Rouge png.png" 
                alt="BRIIO Logo" 
                className="h-10 w-auto"
              />
              <div>
                <h3 className="text-lg font-bold">BRIIO</h3>
                <p className="text-sm text-gray-400">Recruiting Agency</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">{t('nav.home')}</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">{t('nav.about')}</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">{t('nav.services')}</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">{t('nav.contact')}</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.services')}</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('services.talent.career')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('services.talent.placement')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('services.employer.recruitment')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('services.employer.consulting')}</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Douala, Cameroon</li>
              <li>+237 650 123 456</li>
              <li>info@cameroontalent.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Cameroon Talent Recruiting Agency. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;