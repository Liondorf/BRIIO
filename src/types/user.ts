export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  location?: string;
  accountType: 'applicant' | 'employer';
  profileComplete: boolean;
  resumeUploaded?: boolean; // Only for applicants
  companyName?: string; // Only for employers
  companySize?: string; // Only for employers
  industry?: string; // Only for employers
  website?: string; // Only for employers
  createdAt: Date;
}

export interface UserProfile {
  id: string;
  userId: string;
  title?: string;
  summary?: string;
  experience?: string;
  education?: string;
  skills?: string[];
  languages?: string[];
  resumeUrl?: string;
  resumeFileName?: string;
  updatedAt: Date;
}

export interface CompanyProfile {
  id: string;
  userId: string;
  companyName: string;
  companySize: string;
  industry: string;
  website?: string;
  description?: string;
  logo?: string;
  updatedAt: Date;
}

export interface JobPosting {
  id: string;
  employerId: string;
  title: string;
  description: string;
  requirements: string;
  location: string;
  salaryRange?: string;
  jobType: 'full-time' | 'part-time' | 'contract' | 'internship';
  status: 'active' | 'closed' | 'draft';
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}