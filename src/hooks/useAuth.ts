import { useState, useCallback, createContext, useContext } from 'react';
import { User, AuthState } from '../types/user';

const AuthContext = createContext<{
  authState: AuthState;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: Partial<User> & { password: string }) => Promise<void>;
  logout: () => void;
  updateProfile: (profileData: Partial<User>) => Promise<void>;
} | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const useAuthState = () => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: false
  });

  const login = useCallback(async (email: string, password: string) => {
    setAuthState(prev => ({ ...prev, isLoading: true }));
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock user data - in real app, this would come from API
      const user: User = {
        id: '1',
        email,
        firstName: 'John',
        lastName: 'Doe',
        accountType: 'applicant', // This would be determined by the API
        profileComplete: false,
        resumeUploaded: false,
        createdAt: new Date()
      };
      
      setAuthState({
        user,
        isAuthenticated: true,
        isLoading: false
      });
      
      localStorage.setItem('briio_user', JSON.stringify(user));
    } catch (error) {
      setAuthState(prev => ({ ...prev, isLoading: false }));
      throw error;
    }
  }, []);

  const register = useCallback(async (userData: Partial<User> & { password: string }) => {
    setAuthState(prev => ({ ...prev, isLoading: true }));
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const user: User = {
        id: Date.now().toString(),
        email: userData.email!,
        firstName: userData.firstName!,
        lastName: userData.lastName!,
        phone: userData.phone,
        location: userData.location,
        accountType: userData.accountType!,
        profileComplete: false,
        resumeUploaded: userData.accountType === 'applicant' ? false : undefined,
        companyName: userData.companyName,
        companySize: userData.companySize,
        industry: userData.industry,
        website: userData.website,
        createdAt: new Date()
      };
      
      setAuthState({
        user,
        isAuthenticated: true,
        isLoading: false
      });
      
      localStorage.setItem('briio_user', JSON.stringify(user));
    } catch (error) {
      setAuthState(prev => ({ ...prev, isLoading: false }));
      throw error;
    }
  }, []);

  const logout = useCallback(() => {
    setAuthState({
      user: null,
      isAuthenticated: false,
      isLoading: false
    });
    localStorage.removeItem('briio_user');
  }, []);

  const updateProfile = useCallback(async (profileData: Partial<User>) => {
    if (!authState.user) return;
    
    setAuthState(prev => ({ ...prev, isLoading: true }));
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const updatedUser = { ...authState.user, ...profileData };
      
      setAuthState({
        user: updatedUser,
        isAuthenticated: true,
        isLoading: false
      });
      
      localStorage.setItem('briio_user', JSON.stringify(updatedUser));
    } catch (error) {
      setAuthState(prev => ({ ...prev, isLoading: false }));
      throw error;
    }
  }, [authState.user]);

  return {
    authState,
    login,
    register,
    logout,
    updateProfile
  };
};