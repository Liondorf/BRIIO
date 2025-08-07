import React, { useState } from 'react';
import { User, FileText, Upload, Edit, CheckCircle, AlertCircle, LogOut } from 'lucide-react';
import { User as UserType } from '../types/user';

interface UserDashboardProps {
  user: UserType;
  onLogout: () => void;
  onUpdateProfile: (data: Partial<UserType>) => Promise<void>;
}

const UserDashboard: React.FC<UserDashboardProps> = ({ user, onLogout, onUpdateProfile }) => {
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    phone: user.phone || '',
    location: user.location || ''
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await onUpdateProfile(profileData);
      setIsEditing(false);
    } catch (error) {
      console.error('Profile update error:', error);
    }
  };

  const handleResumeUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!resumeFile) return;

    setIsUploading(true);
    try {
      // Simulate file upload
      await new Promise(resolve => setTimeout(resolve, 2000));
      await onUpdateProfile({ resumeUploaded: true });
      setResumeFile(null);
    } catch (error) {
      console.error('Resume upload error:', error);
    } finally {
      setIsUploading(false);
    }
  };

  const tabs = [
    { id: 'profile', name: 'Profile', icon: User },
    { id: 'resume', name: 'Resume', icon: FileText }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm">
          <div className="border-b border-gray-200 px-6 py-4">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Welcome, {user.firstName} {user.lastName}
                </h1>
                <p className="text-gray-600 mt-1">Manage your profile and job applications</p>
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

              {/* Profile Completion */}
              <div className="p-4 border-t border-gray-200">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 mb-2">Profile Completion</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="text-green-500" size={16} />
                      <span className="text-sm text-gray-600">Basic Info</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      {user.resumeUploaded ? (
                        <CheckCircle className="text-green-500" size={16} />
                      ) : (
                        <AlertCircle className="text-orange-500" size={16} />
                      )}
                      <span className="text-sm text-gray-600">Resume Upload</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6">
              {activeTab === 'profile' && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-gray-900">Profile Information</h2>
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
                            First Name
                          </label>
                          <input
                            type="text"
                            value={profileData.firstName}
                            onChange={(e) => setProfileData(prev => ({ ...prev, firstName: e.target.value }))}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Last Name
                          </label>
                          <input
                            type="text"
                            value={profileData.lastName}
                            onChange={(e) => setProfileData(prev => ({ ...prev, lastName: e.target.value }))}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
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
                            First Name
                          </label>
                          <p className="text-gray-900">{user.firstName}</p>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Last Name
                          </label>
                          <p className="text-gray-900">{user.lastName}</p>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <p className="text-gray-900">{user.email}</p>
                      </div>

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
                  )}
                </div>
              )}

              {activeTab === 'resume' && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Resume Management</h2>

                  {user.resumeUploaded ? (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <CheckCircle className="text-green-600" size={24} />
                        <h3 className="text-lg font-medium text-green-800">Resume Uploaded Successfully</h3>
                      </div>
                      <p className="text-green-700 mb-4">
                        Your resume has been uploaded and is ready for employers to view.
                      </p>
                      <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                        Update Resume
                      </button>
                    </div>
                  ) : (
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8">
                      <form onSubmit={handleResumeUpload} className="text-center">
                        <Upload className="mx-auto text-gray-400 mb-4" size={48} />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">Upload Your Resume</h3>
                        <p className="text-gray-600 mb-6">
                          Upload your resume in PDF, DOC, or DOCX format (max 5MB)
                        </p>

                        <div className="mb-6">
                          <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={(e) => setResumeFile(e.target.files?.[0] || null)}
                            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                          />
                        </div>

                        {resumeFile && (
                          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                            <p className="text-sm text-gray-700">
                              Selected file: <span className="font-medium">{resumeFile.name}</span>
                            </p>
                            <p className="text-xs text-gray-500">
                              Size: {(resumeFile.size / 1024 / 1024).toFixed(2)} MB
                            </p>
                          </div>
                        )}

                        <button
                          type="submit"
                          disabled={!resumeFile || isUploading}
                          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isUploading ? 'Uploading...' : 'Upload Resume'}
                        </button>
                      </form>
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

export default UserDashboard;