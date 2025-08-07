import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t('contact.office')}
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-blue-600 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Address</h4>
                    <p className="text-gray-600">
                      123 Business District<br />
                      Douala, Cameroon<br />
                      Central Africa
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="text-green-600 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('contact.phone')}</h4>
                    <p className="text-gray-600">+237 650 123 456</p>
                    <p className="text-gray-600">+237 670 789 012</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="text-purple-600 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('contact.email')}</h4>
                    <p className="text-gray-600">info@briio.com</p>
                    <p className="text-gray-600">careers@briio.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="text-orange-600 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('contact.hours')}</h4>
                    <p className="text-gray-600">{t('contact.hoursText')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>I'm looking for talent</option>
                    <option>I'm seeking employment</option>
                    <option>Partnership inquiry</option>
                    <option>General information</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell us about your needs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;