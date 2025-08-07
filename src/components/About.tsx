import React from 'react';
import { Target, Eye, Globe, Award } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('about.title')}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {t('about.description')}
            </p>
            <div className="flex items-center space-x-4 mb-4">
              <Globe className="text-blue-600" size={24} />
              <span className="text-gray-700">Global Reach, Local Expertise</span>
            </div>
            <div className="flex items-center space-x-4">
              <Award className="text-green-600" size={24} />
              <span className="text-gray-700">Certified Excellence in Recruitment</span>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-lg">
            <img 
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Professional team meeting"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-blue-50 p-8 rounded-lg">
            <div className="flex items-center space-x-3 mb-4">
              <Target className="text-blue-600" size={28} />
              <h3 className="text-2xl font-bold text-gray-900">
                {t('about.mission')}
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {t('about.missionText')}
            </p>
          </div>

          <div className="bg-green-50 p-8 rounded-lg">
            <div className="flex items-center space-x-3 mb-4">
              <Eye className="text-green-600" size={28} />
              <h3 className="text-2xl font-bold text-gray-900">
                {t('about.vision')}
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {t('about.visionText')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;