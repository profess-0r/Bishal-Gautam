import React, { useState } from 'react';
import { PageRoute, InquiryFormData, FormErrors } from '../types';
import { PERSONAL_INFO, INQUIRY_OPTIONS } from '../data/content';
import {
  validateInquiryForm,
  buildMailtoUrl,
  formatInquirySummary,
} from '../utils/contact';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Copy,
  Check,
  AlertCircle,
  ExternalLink,
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (path: PageRoute) => void;
  initialInquiryType?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  initialInquiryType,
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    email: '',
    company: '',
    inquiryType: (initialInquiryType as any) || 'Business Development',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for field once edited
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validation = validateInquiryForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    // Form is valid!
    setIsSubmitted(true);

    // Open user's default email client safely with prefilled content
    const mailtoUri = buildMailtoUrl(formData);
    window.location.href = mailtoUri;
  };

  const handleCopy = () => {
    const text = formatInquirySummary(formData);
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      company: '',
      inquiryType: 'Business Development',
      message: '',
    });
  };

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-[#FBFBF9] py-16 sm:py-20 border-b border-[#EBEBE6]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#64748B] block">
              Contact & Inquiries
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl text-[#0F172A] font-normal tracking-tight leading-tight">
              {PERSONAL_INFO.contactHeadline}
            </h1>
            <p className="text-base sm:text-lg text-[#4B5563] font-light leading-relaxed">
              {PERSONAL_INFO.contactSupporting}
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Contact Information */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#EBEBE6]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Direct Communication Channels & Context */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h2 className="font-serif text-2xl sm:text-3xl text-[#0F172A] font-normal">
                  Direct Contact Information
                </h2>
                <p className="text-sm text-[#4B5563] leading-relaxed font-light">
                  For formal discussions, partnership proposals, or advisory engagements, reach out
                  directly via email or phone. I aim to review and respond to serious business inquiries
                  within 24 business hours.
                </p>
              </div>

              {/* Contact Details Cards */}
              <div className="space-y-4">
                {/* Email Card */}
                <div className="p-6 bg-[#FBFBF9] border border-[#E5E5E0] space-y-2">
                  <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-[#64748B]">
                    <Mail className="w-4 h-4 text-[#0F172A]" />
                    <span>Email Address</span>
                  </div>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="font-serif text-lg text-[#0F172A] hover:text-[#1E40AF] transition-colors block font-medium"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                  <p className="text-xs text-[#64748B]">
                    Best for proposals, collaboration scopes, and meeting requests.
                  </p>
                </div>

                {/* Phone Card */}
                <div className="p-6 bg-[#FBFBF9] border border-[#E5E5E0] space-y-2">
                  <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-[#64748B]">
                    <Phone className="w-4 h-4 text-[#0F172A]" />
                    <span>Direct Telephone</span>
                  </div>
                  <a
                    href={`tel:${PERSONAL_INFO.phoneRaw}`}
                    className="font-serif text-lg text-[#0F172A] hover:text-[#1E40AF] transition-colors block font-medium"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                  <p className="text-xs text-[#64748B]">
                    Available during Nepal standard business hours (UTC+5:45).
                  </p>
                </div>

                {/* Location Card */}
                <div className="p-6 bg-[#FBFBF9] border border-[#E5E5E0] space-y-2">
                  <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-[#64748B]">
                    <MapPin className="w-4 h-4 text-[#0F172A]" />
                    <span>Location & Timezone</span>
                  </div>
                  <p className="font-serif text-lg text-[#0F172A] font-medium">
                    {PERSONAL_INFO.location}
                  </p>
                  <p className="text-xs text-[#64748B]">
                    Conducting client engagements locally in Kathmandu and remotely across global
                    markets.
                  </p>
                </div>
              </div>

              {/* Note on Transparency */}
              <div className="p-5 bg-[#F1F5F9] border border-[#CBD5E1] rounded-xs space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#475569]">
                  Privacy & Discretion
                </p>
                <p className="text-xs text-[#334155] leading-relaxed">
                  All shared business concepts, strategic plans, and commercial information are
                  treated with strict professional confidentiality.
                </p>
              </div>
            </div>

            {/* Right Column: Inquiry Form */}
            <div className="lg:col-span-7 bg-[#FBFBF9] border border-[#E5E5E0] p-8 sm:p-12 shadow-xs">
              {!isSubmitted ? (
                <div>
                  <div className="border-b border-[#E5E5E0] pb-6 mb-8">
                    <h3 className="font-serif text-2xl text-[#0F172A] font-normal">
                      Send a Commercial Inquiry
                    </h3>
                    <p className="text-xs text-[#64748B] mt-1.5 font-light">
                      Complete this form to draft your inquiry. Upon submitting, your default email
                      application will open with these details formatted for immediate review.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} noValidate className="space-y-6">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#0F172A] mb-2"
                      >
                        Full Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g., Sarah Jenkins"
                        className={`w-full px-4 py-3 bg-white text-sm text-[#0F172A] border rounded-xs focus:outline-none transition-colors ${
                          errors.fullName
                            ? 'border-red-500 focus:border-red-600 ring-1 ring-red-500/20'
                            : 'border-[#CBD5E1] focus:border-[#0F172A]'
                        }`}
                        aria-invalid={!!errors.fullName}
                        aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                      />
                      {errors.fullName && (
                        <p
                          id="fullName-error"
                          className="mt-1.5 text-xs text-red-600 flex items-center gap-1"
                        >
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    {/* Email & Company Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Business Email */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs font-semibold uppercase tracking-wider text-[#0F172A] mb-2"
                        >
                          Business Email <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="sjenkins@company.com"
                          className={`w-full px-4 py-3 bg-white text-sm text-[#0F172A] border rounded-xs focus:outline-none transition-colors ${
                            errors.email
                              ? 'border-red-500 focus:border-red-600 ring-1 ring-red-500/20'
                              : 'border-[#CBD5E1] focus:border-[#0F172A]'
                          }`}
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? 'email-error' : undefined}
                        />
                        {errors.email && (
                          <p
                            id="email-error"
                            className="mt-1.5 text-xs text-red-600 flex items-center gap-1"
                          >
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{errors.email}</span>
                          </p>
                        )}
                      </div>

                      {/* Company or Organization */}
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-xs font-semibold uppercase tracking-wider text-[#0F172A] mb-2"
                        >
                          Company / Organization{' '}
                          <span className="text-xs font-normal text-[#64748B] normal-case">
                            (Optional)
                          </span>
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="e.g., Enterprise Ventures"
                          className="w-full px-4 py-3 bg-white text-sm text-[#0F172A] border border-[#CBD5E1] rounded-xs focus:outline-none focus:border-[#0F172A] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Inquiry Type */}
                    <div>
                      <label
                        htmlFor="inquiryType"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#0F172A] mb-2"
                      >
                        Inquiry Type <span className="text-red-600">*</span>
                      </label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-white text-sm text-[#0F172A] border rounded-xs focus:outline-none transition-colors ${
                          errors.inquiryType
                            ? 'border-red-500 focus:border-red-600'
                            : 'border-[#CBD5E1] focus:border-[#0F172A]'
                        }`}
                      >
                        {INQUIRY_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      {errors.inquiryType && (
                        <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.inquiryType}</span>
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#0F172A] mb-2"
                      >
                        Briefly Describe Your Opportunity <span className="text-red-600">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please share context regarding your business situation, objectives, target market, or proposed timeline..."
                        className={`w-full px-4 py-3 bg-white text-sm text-[#0F172A] border rounded-xs focus:outline-none transition-colors ${
                          errors.message
                            ? 'border-red-500 focus:border-red-600 ring-1 ring-red-500/20'
                            : 'border-[#CBD5E1] focus:border-[#0F172A]'
                        }`}
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                      />
                      {errors.message && (
                        <p
                          id="message-error"
                          className="mt-1.5 text-xs text-red-600 flex items-center gap-1"
                        >
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-semibold uppercase tracking-wider bg-[#0F172A] text-white hover:bg-[#1E293B] active:bg-[#020617] rounded-xs transition-colors shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0F172A]"
                      >
                        <span>Open Email Draft & Send Inquiry</span>
                        <Send className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Static Architecture Disclosure */}
                    <div className="flex items-start gap-2 pt-2 text-xs text-[#64748B]">
                      <ExternalLink className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[#94A3B8]" />
                      <span>
                        Note: Because this is a static personal website, clicking submit opens your
                        default email application directly with your drafted details addressed to{' '}
                        <strong>{PERSONAL_INFO.email}</strong>.
                      </span>
                    </div>
                  </form>
                </div>
              ) : (
                /* Submission Confirmation State */
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="flex items-center gap-3 text-emerald-700">
                    <CheckCircle2 className="w-6 h-6 shrink-0" />
                    <h3 className="font-serif text-2xl text-[#0F172A] font-medium">
                      Inquiry Draft Prepared
                    </h3>
                  </div>

                  <p className="text-sm text-[#334155] leading-relaxed">
                    Your email client should now have opened with your inquiry addressed to{' '}
                    <strong className="text-[#0F172A]">{PERSONAL_INFO.email}</strong>. If your email
                    software did not launch automatically, you can copy the full inquiry text below or
                    send it manually.
                  </p>

                  {/* Summary Box */}
                  <div className="p-4 bg-white border border-[#CBD5E1] rounded-xs text-xs font-mono text-[#334155] space-y-2 whitespace-pre-wrap">
                    <div className="font-sans text-xs text-[#64748B] uppercase tracking-wider font-semibold pb-1 border-b border-[#E5E5E0]">
                      Inquiry Summary
                    </div>
                    <div>
                      <strong>To:</strong> {PERSONAL_INFO.email}
                    </div>
                    <div>
                      <strong>Subject:</strong> [Business Inquiry] {formData.inquiryType} —{' '}
                      {formData.fullName}
                    </div>
                    <div>
                      <strong>Company:</strong> {formData.company || 'Not provided'}
                    </div>
                    <div className="pt-2 border-t border-[#F1F5F9]">
                      <strong>Details:</strong>
                      <p className="mt-1 font-sans text-xs text-[#4B5563]">
                        {formData.message}
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                    <button
                      onClick={handleCopy}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-white border border-[#CBD5E1] text-[#0F172A] hover:bg-[#F8FAFC] rounded-xs transition-colors"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-600" />
                          <span>Copied to Clipboard</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span>Copy Inquiry Details</span>
                        </>
                      )}
                    </button>

                    <a
                      href={buildMailtoUrl(formData)}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#0F172A] text-white hover:bg-[#1E293B] rounded-xs transition-colors"
                    >
                      <span>Re-open Email App</span>
                      <Send className="w-3.5 h-3.5" />
                    </a>

                    <button
                      onClick={handleReset}
                      className="px-4 py-2.5 text-xs text-[#64748B] hover:text-[#0F172A] transition-colors"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
