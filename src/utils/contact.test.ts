import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateEmail,
  validateInquiryForm,
  buildMailtoUrl,
  formatInquirySummary,
  RECIPIENT_EMAIL,
} from './contact';
import { InquiryFormData } from '../types';

test('validateEmail accurately validates correct and malformed addresses', () => {
  assert.equal(validateEmail('test@example.com'), true);
  assert.equal(validateEmail('executive.partner@company.co.uk'), true);
  assert.equal(validateEmail('zprofessor2077@gmail.com'), true);
  assert.equal(validateEmail(''), false);
  assert.equal(validateEmail('plainaddress'), false);
  assert.equal(validateEmail('@missingusername.com'), false);
  assert.equal(validateEmail('missingdomain@.com'), false);
});

test('validateInquiryForm catches missing or short fields', () => {
  const invalidData: InquiryFormData = {
    fullName: 'A',
    email: 'bad-email',
    inquiryType: '' as any,
    message: 'short',
  };

  const result = validateInquiryForm(invalidData);
  assert.equal(result.isValid, false);
  assert.ok(result.errors.fullName);
  assert.ok(result.errors.email);
  assert.ok(result.errors.inquiryType);
  assert.ok(result.errors.message);
});

test('validateInquiryForm approves complete and valid data', () => {
  const validData: InquiryFormData = {
    fullName: 'Sarah Jenkins',
    email: 'sjenkins@enterprise-growth.com',
    company: 'Apex Solutions',
    inquiryType: 'Business Development',
    message: 'We are expanding our B2B commercial pipeline and want to discuss partnership opportunities.',
  };

  const result = validateInquiryForm(validData);
  assert.equal(result.isValid, true);
  assert.equal(Object.keys(result.errors).length, 0);
});

test('buildMailtoUrl produces correct RFC-compliant URI with prefilled fields', () => {
  const sampleData: InquiryFormData = {
    fullName: 'Ramesh Adhikari',
    email: 'ramesh@nepalventures.np',
    company: 'Nepal Ventures',
    inquiryType: 'Client Acquisition',
    message: 'Exploring regional market acquisition channels for software services.',
  };

  const mailto = buildMailtoUrl(sampleData);
  assert.ok(mailto.startsWith(`mailto:${RECIPIENT_EMAIL}`));
  assert.ok(mailto.includes('subject='));
  assert.ok(mailto.includes('body='));
  assert.ok(mailto.includes(encodeURIComponent('Client Acquisition')));
  assert.ok(mailto.includes(encodeURIComponent('Ramesh Adhikari')));
});

test('formatInquirySummary produces human-readable text for clipboard', () => {
  const sampleData: InquiryFormData = {
    fullName: 'John Doe',
    email: 'john@example.com',
    inquiryType: 'Market Research',
    message: 'Evaluating consumer demand in Kathmandu market.',
  };

  const formatted = formatInquirySummary(sampleData);
  assert.ok(formatted.includes('zprofessor2077@gmail.com'));
  assert.ok(formatted.includes('Market Research'));
  assert.ok(formatted.includes('Evaluating consumer demand'));
});
