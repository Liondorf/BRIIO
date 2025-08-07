import React from 'react';
import { Users, Briefcase, FileText, MessageSquare, Search, Shield, Lightbulb, UserCheck } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const Services: React.FC = () => {
  const { t } = useTranslation();

  const jobSeekerServices = [
    {
      icon: Lightbulb,
      title: t('services.talent.career'),
      description: t('services.talent.careerDesc'),
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: FileText,
      title: t('services.talent.resume'),
      description: t('services.talent.resumeDesc'),
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: MessageSquare,
      title: t('services.talent.interview'),
      description: t('services.talent.interviewDesc'),
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: UserCheck,
      title: t('services.talent.placement'),
      description: t('services.talent.placementDesc'),
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  const employerServices = [
    {
      icon: Search,
      title: t('services.employer.recruitment'),
      description: t('services.employer.recruitmentDesc'),
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Shield,
      title: t('services.employer.screening'),
      description: t('services.employer.screeningDesc'),
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: Briefcase,
      title: t('services.employer.consulting'),
      description: t('services.employer.consultingDesc'),
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      icon: Users,
      title: t('services.employer.outsourcing'),
      description: t('services.employer.outsourcingDesc'),
      color: 'bg-indigo-100 text-indigo-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Job Seekers Services */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              {t('services.talent.title')}
            </h3>
            <div className="space-y-6">
              {jobSeekerServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg ${service.color}`}>
                        <IconComponent size={24} />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          {service.title}
                        </h4>
                        <p className="text-gray-600">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Employer Services */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              {t('services.employer.title')}
            </h3>
            <div className="space-y-6">
              {employerServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg ${service.color}`}>
                        <IconComponent size={24} />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          {service.title}
                        </h4>
                        <p className="text-gray-600">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;