import React, { useState } from 'react';
import { Menu, X, User, LogIn } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import LanguageSwitcher from './LanguageSwitcher';
import AuthModal from './AuthModal';
import { useAuthState } from '../hooks/useAuth';

interface HeaderProps {
  onShowDashboard?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onShowDashboard }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { t } = useTranslation();
  const { authState, login, register, logout } = useAuthState();

  const navigation = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.jobSeekers'), href: '#job-seekers' },
    { name: t('nav.employers'), href: '#employers' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <header className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-24 lg:h-28">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img 
              src="/Brio Full Rouge png.png" 
              alt="BRIIO Logo" 
              className="h-16 w-auto lg:h-20"
            />
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">BRIIO</h1>
              <p className="text-sm lg:text-base text-gray-600 font-medium">Experience, Expertise, Excellence</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-semibold text-lg transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Language Switcher & Mobile Menu Button */}
          <div className="flex items-center space-x-6">
            {authState.isAuthenticated ? (
              <div className="flex items-center space-x-6">
                <button
                  onClick={onShowDashboard}
                  className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors text-lg font-medium"
                >
                  <User size={20} />
                  <span className="hidden sm:inline">Dashboard</span>
                </button>
                <button
                  onClick={logout}
                  className="text-gray-700 hover:text-blue-600 transition-colors text-lg font-medium"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsAuthModalOpen(true)}
                className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
              >
                <LogIn size={20} />
                <span>Sign In</span>
              </button>
            )}
            
            <LanguageSwitcher />
            
            <button
              className="lg:hidden p-3 rounded-lg text-gray-700 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-6 py-4 space-y-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLogin={login}
        onRegister={register}
      />
    </header>
  );
};

export default Header;