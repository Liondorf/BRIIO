import React, { useState } from 'react';
import { Building, Plus, Edit, Eye, Users, Briefcase, LogOut, FileText, Settings } from 'lucide-react';
import { User as UserType } from '../types/user';

interface EmployerDashboardProps {
  user: UserType;
  onLogout: () => void;
  onUpdateProfile: (data: Partial<UserType>) => Promise<void>;
}

const EmployerDashboard: React.FC<EmployerDashboardProps> = ({ user, onLogout, onUpdateProfile }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    phone: user.phone || '',
    location: user.location || '',
    companyName: user.companyName || '',
    companySize: user.companySize || '',
    industry: user.industry || '',
    website: user.website || ''
  });

  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await onUpdateProfile(profileData);
      setIsEditing(false);
    } catch (error) {
      console.error('Profile update error:', error);
    }
  };

  const tabs = [
    { id: 'overview', name: 'Overview', icon: Building },
    { id: 'jobs', name: 'Job Postings', icon: Briefcase },
    { id: 'candidates', name: 'Candidates', icon: Users },
    { id: 'profile', name: 'Company Profile', icon: Settings }
  ];

  const mockJobs = [
    {
      id: '1',
      title: 'Senior Software Engineer',
      location: 'Douala, Cameroon',
      type: 'Full-time',
      status: 'Active',
      applications: 12,
      posted: '2 days ago'
    },
    {
      id: '2',
      title: 'Marketing Manager',
      location: 'Yaoundé, Cameroon',
      type: 'Full-time',
      status: 'Active',
      applications: 8,
      posted: '1 week ago'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm">
          <div className="border-b border-gray-200 px-6 py-4">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {user.companyName || 'Company Dashboard'}
                </h1>
                <p className="text-gray-600 mt-1">Manage your job postings and candidates</p>
              </div>
              <button
                onClick={onLogout}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                <LogOut size={18} />
                <span>Sign Out</span>
              </button>
            </div>
          </div>

          <div className="flex">
            {/* Sidebar */}
            <div className="w-64 border-r border-gray-200">
              <nav className="p-4 space-y-2">
                {tabs.map((tab) => {
                  const IconComponent = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                        activeTab === tab.id
                          ? 'bg-blue-50 text-blue-600 border border-blue-200'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <IconComponent size={20} />
                      <span className="font-medium">{tab.name}</span>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6">
              {activeTab === 'overview' && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Dashboard Overview</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Briefcase className="text-blue-600" size={24} />
                        <div>
                          <p className="text-sm text-blue-600 font-medium">Active Jobs</p>
                          <p className="text-2xl font-bold text-blue-900">2</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 p-6 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Users className="text-green-600" size={24} />
                        <div>
                          <p className="text-sm text-green-600 font-medium">Total Applications</p>
                          <p className="text-2xl font-bold text-green-900">20</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-purple-50 p-6 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Eye className="text-purple-600" size={24} />
                        <div>
                          <p className="text-sm text-purple-600 font-medium">Profile Views</p>
                          <p className="text-2xl font-bold text-purple-900">45</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold text-gray-900">Recent Job Postings</h3>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
                        <Plus size={16} />
                        <span>Post New Job</span>
                      </button>
                    </div>
                    
                    <div className="space-y-4">
                      {mockJobs.map((job) => (
                        <div key={job.id} className="border border-gray-200 rounded-lg p-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-semibold text-gray-900">{job.title}</h4>
                              <p className="text-gray-600 text-sm">{job.location} • {job.type}</p>
                              <p className="text-gray-500 text-sm">Posted {job.posted}</p>
                            </div>
                            <div className="text-right">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                job.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                              }`}>
                                {job.status}
                              </span>
                              <p className="text-sm text-gray-600 mt-1">{job.applications} applications</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'jobs' && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-gray-900">Job Postings</h2>
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
                      <Plus size={18} />
                      <span>Post New Job</span>
                    </button>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg">
                    <div className="p-6">
                      <div className="space-y-6">
                        {mockJobs.map((job) => (
                          <div key={job.id} className="border border-gray-200 rounded-lg p-6">
                            <div className="flex justify-between items-start mb-4">
                              <div>
                                <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                                <p className="text-gray-600">{job.location} • {job.type}</p>
                                <p className="text-gray-500 text-sm">Posted {job.posted}</p>
                              </div>
                              <div className="flex items-center space-x-2">
                                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                                  job.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                                }`}>
                                  {job.status}
                                </span>
                                <button className="p-2 text-gray-400 hover:text-gray-600">
                                  <Edit size={16} />
                                </button>
                              </div>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-4">
                                <div className="flex items-center space-x-2">
                                  <Users size={16} className="text-gray-400" />
                                  <span className="text-sm text-gray-600">{job.applications} applications</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Eye size={16} className="text-gray-400" />
                                  <span className="text-sm text-gray-600">View details</span>
                                </div>
                              </div>
                              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                                Manage Applications
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'candidates' && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Candidate Applications</h2>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="text-center py-12">
                      <FileText className="mx-auto text-gray-400 mb-4" size={48} />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">No Applications Yet</h3>
                      <p className="text-gray-600">
                        When candidates apply to your job postings, they'll appear here.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'profile' && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-gray-900">Company Profile</h2>
                    <button
                      onClick={() => setIsEditing(!isEditing)}
                      className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <Edit size={18} />
                      <span>{isEditing ? 'Cancel' : 'Edit Profile'}</span>
                    </button>
                  </div>

                  {isEditing ? (
                    <form onSubmit={handleProfileUpdate} className="space-y-6">
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Company Name
                          </label>
                          <input
                            type="text"
                            value={profileData.companyName}
                            onChange={(e) => setProfileData(prev => ({ ...prev, companyName: e.target.value }))}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Industry
                          </label>
                          <input
                            type="text"
                            value={profileData.industry}
                            onChange={(e) => setProfileData(prev => ({ ...prev, industry: e.target.value }))}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Company Size
                          </label>
                          <input
                            type="text"
                            value={profileData.companySize}
                            onChange={(e) => setProfileData(prev => ({ ...prev, companySize: e.target.value }))}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Website
                          </label>
                          <input
                            type="url"
                            value={profileData.website}
                            onChange={(e) => setProfileData(prev => ({ ...prev, website: e.target.value }))}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Contact Person
                          </label>
                          <input
                            type="text"
                            value={`${profileData.firstName} ${profileData.lastName}`}
                            onChange={(e) => {
                              const [firstName, ...lastNameParts] = e.target.value.split(' ');
                              setProfileData(prev => ({ 
                                ...prev, 
                                firstName: firstName || '', 
                                lastName: lastNameParts.join(' ') || '' 
                              }));
                            }}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            value={profileData.phone}
                            onChange={(e) => setProfileData(prev => ({ ...prev, phone: e.target.value }))}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Location
                        </label>
                        <input
                          type="text"
                          value={profileData.location}
                          onChange={(e) => setProfileData(prev => ({ ...prev, location: e.target.value }))}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <div className="flex space-x-4">
                        <button
                          type="submit"
                          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                        >
                          Save Changes
                        </button>
                        <button
                          type="button"
                          onClick={() => setIsEditing(false)}
                          className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  ) : (
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Company Name
                          </label>
                          <p className="text-gray-900">{user.companyName || 'Not provided'}</p>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Industry
                          </label>
                          <p className="text-gray-900">{user.industry || 'Not provided'}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Company Size
                          </label>
                          <p className="text-gray-900">{user.companySize || 'Not provided'}</p>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Website
                          </label>
                          <p className="text-gray-900">{user.website || 'Not provided'}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Contact Person
                          </label>
                          <p className="text-gray-900">{user.firstName} {user.lastName}</p>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address
                          </label>
                          <p className="text-gray-900">{user.email}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number
                          </label>
                          <p className="text-gray-900">{user.phone || 'Not provided'}</p>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Location
                          </label>
                          <p className="text-gray-900">{user.location || 'Not provided'}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerDashboard;