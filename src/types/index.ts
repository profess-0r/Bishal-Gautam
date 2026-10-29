/**
 * Core type definitions for Bishal Gautam Personal Brand Website
 */

export type PageRoute = '/' | '/about' | '/expertise' | '/approach' | '/contact';

export type InquiryType =
  | 'Business Development'
  | 'Sales & Marketing'
  | 'Client Acquisition'
  | 'Strategic Partnership'
  | 'Market Research'
  | 'Consulting or Project Discussion'
  | 'Other';

export interface InquiryFormData {
  fullName: string;
  email: string;
  company?: string;
  inquiryType: InquiryType;
  message: string;
}

export interface FormErrors {
  fullName?: string;
  email?: string;
  inquiryType?: string;
  message?: string;
}

export interface ExpertiseSpecialty {
  id: string;
  number: string;
  title: string;
  summary: string;
  description: string;
  situations: string[];
  challenges: string[];
  collaboration: string;
}

export interface ApproachStage {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  activities: string[];
}
