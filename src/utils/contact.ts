import { FormErrors, InquiryFormData } from '../types';

export const RECIPIENT_EMAIL = 'zprofessor2077@gmail.com';
export const CONTACT_PHONE = '+977 9749410075';
export const CONTACT_PHONE_RAW = '+9779749410075';
export const LOCATION_LABEL = 'Kathmandu, Nepal';

/**
 * Validates email addresses using RFC 5322 compatible pattern
 */
export function validateEmail(email: string): boolean {
  if (!email || typeof email !== 'string') return false;
  const trimmed = email.trim();
  // Standard robust email validation
  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return regex.test(trimmed);
}

/**
 * Validates inquiry form inputs
 */
export function validateInquiryForm(data: InquiryFormData): {
  isValid: boolean;
  errors: FormErrors;
} {
  const errors: FormErrors = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name (at least 2 characters).';
  }

  if (!data.email || !validateEmail(data.email)) {
    errors.email = 'Please provide a valid business email address.';
  }

  if (!data.inquiryType) {
    errors.inquiryType = 'Please select an inquiry type.';
  }

  if (!data.message || data.message.trim().length < 15) {
    errors.message = 'Please provide a brief description of the opportunity (at least 15 characters).';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Generates an RFC-compliant mailto: URI addressed to iamprofessor2077@gmail.com
 */
export function buildMailtoUrl(data: InquiryFormData): string {
  const subject = `[Business Inquiry] ${data.inquiryType} — ${data.fullName.trim()}${
    data.company ? ` (${data.company.trim()})` : ''
  }`;

  const body = [
    `Dear Bishal,`,
    '',
    `I would like to discuss a business opportunity regarding ${data.inquiryType}.`,
    '',
    `--- INQUIRY DETAILS ---`,
    `Name: ${data.fullName.trim()}`,
    `Email: ${data.email.trim()}`,
    `Company / Organization: ${data.company?.trim() || 'Not specified'}`,
    `Inquiry Type: ${data.inquiryType}`,
    '',
    `--- OPPORTUNITY DESCRIPTION ---`,
    data.message.trim(),
    '',
    `Sent via bishalgautam.com contact channel.`,
  ].join('\n');

  return `mailto:${RECIPIENT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/**
 * Formats inquiry summary text suitable for clipboard copying
 */
export function formatInquirySummary(data: InquiryFormData): string {
  return [
    `To: Bishal Gautam (${RECIPIENT_EMAIL})`,
    `Subject: [Business Inquiry] ${data.inquiryType} — ${data.fullName.trim()}`,
    `Name: ${data.fullName.trim()}`,
    `Email: ${data.email.trim()}`,
    `Company: ${data.company?.trim() || 'N/A'}`,
    `Inquiry Type: ${data.inquiryType}`,
    ``,
    `Opportunity Details:`,
    data.message.trim(),
  ].join('\n');
}
