import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import UserDashboard from './components/UserDashboard';
import EmployerDashboard from './components/EmployerDashboard';
import { useAuthState } from './hooks/useAuth';

function App() {
  const [showDashboard, setShowDashboard] = useState(false);
  const { authState, logout, updateProfile } = useAuthState();

  // Check for stored user on app load
  useEffect(() => {
    const storedUser = localStorage.getItem('briio_user');
    if (storedUser) {
      // In a real app, you'd validate the token and restore the user state
      console.log('User found in storage');
    }
  }, []);

  if (authState.isAuthenticated && showDashboard) {
    if (authState.user?.accountType === 'employer') {
      return (
        <EmployerDashboard
          user={authState.user}
          onLogout={() => {
            logout();
            setShowDashboard(false);
          }}
          onUpdateProfile={updateProfile}
        />
      );
    }
    
    return (
      <UserDashboard
        user={authState.user!}
        onLogout={() => {
          logout();
          setShowDashboard(false);
        }}
        onUpdateProfile={updateProfile}
      />
    );
  }

  return (
    <div className="min-h-screen">
      <Header onShowDashboard={() => setShowDashboard(true)} />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;