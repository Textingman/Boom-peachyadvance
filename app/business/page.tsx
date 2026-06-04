'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { CheckCircle, Zap, Users, Shield, Target, Mail, Building, Phone, User } from 'lucide-react';
import SiteFooter from '../components/SiteFooter';

export default function BusinessPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [accountNotifications, setAccountNotifications] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // TODO: Integrate with Web3Forms later
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', phone: '', message: '' });
      setAccountNotifications(false);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FEE5D9] to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-32">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <Image
                  src="/peachy-logo.png"
                  alt="Peachy Verify"
                  width={500}
                  height={167}
                  className="h-24 w-auto"
                  priority
                />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/about" className="text-[#757575] hover:text-[#FFA97E] px-3 py-2 rounded-md text-sm font-medium">
                  About
                </Link>
                <Link href="/privacy" className="text-[#757575] hover:text-[#FFA97E] px-3 py-2 rounded-md text-sm font-medium">
                  Privacy
                </Link>
                <Link href="/terms" className="text-[#757575] hover:text-[#FFA97E] px-3 py-2 rounded-md text-sm font-medium">
                  Terms
                </Link>
                <Link href="/contact" className="text-[#757575] hover:text-[#FFA97E] px-3 py-2 rounded-md text-sm font-medium">
                  Contact
                </Link>
                <Link href="/consumer" className="border border-[#FFA97E] text-[#FFA97E] hover:bg-[#FEE5D9] px-4 py-2 rounded-md text-sm font-medium">
                  For Consumers
                </Link>
                <Link href="/business" className="bg-[#FFA97E] text-white hover:bg-[#FFC6AE] px-4 py-2 rounded-md text-sm font-medium">
                  For Businesses
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-[#4A4A4A] sm:text-6xl md:text-7xl">
            Know Your Customers
            <span className="block text-[#FFA97E]">For Real</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-[#757575]">
            Cut through the noise. Verify identities instantly via SMS and keep your customer connections authentic and secure.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <a
              href="#signup"
              className="px-8 py-4 bg-[#FFA97E] text-white text-lg font-semibold rounded-lg hover:bg-[#FFC6AE] transition-colors shadow-lg"
            >
              Get Started Free
            </a>
            <Link
              href="/about"
              className="px-8 py-4 bg-white text-[#FFA97E] text-lg font-semibold rounded-lg hover:bg-[#FEE5D9] transition-colors border-2 border-[#FFA97E]"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#4A4A4A]">Why Peachy Verify Rocks</h2>
          <p className="mt-4 text-xl text-[#757575]">
            Built for businesses that value real connections over fake accounts
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-4">
              <CheckCircle className="w-12 h-12 text-[#FFA97E]" />
            </div>
            <h3 className="text-xl font-semibold text-[#4A4A4A] text-center mb-3">Dead Simple</h3>
            <p className="text-[#757575] text-center">
              Your customers verify in seconds. No friction, no confusion, just smooth sailing.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-4">
              <Zap className="w-12 h-12 text-[#FFA97E]" />
            </div>
            <h3 className="text-xl font-semibold text-[#4A4A4A] text-center mb-3">Blazing Fast</h3>
            <p className="text-[#757575] text-center">
              Sub-2-second load times. Because nobody&apos;s got time to wait around.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-4">
              <Users className="w-12 h-12 text-[#FFA97E]" />
            </div>
            <h3 className="text-xl font-semibold text-[#4A4A4A] text-center mb-3">Your Brand, Your Way</h3>
            <p className="text-[#757575] text-center">
              White-label ready with custom styling. Make it yours without the dev headache.
            </p>
          </div>
        </div>
      </section>

      {/* Our Solutions Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#4A4A4A]">What We Do</h2>
            <p className="mt-4 text-xl text-[#757575]">
              Three ways to level up your customer game
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-[#4A4A4A] mb-4">Instant Identity Checks</h3>
                <p className="text-lg text-[#757575] leading-relaxed">
                  Send a quick verification ping. Your users confirm who they are in seconds, and you get peace of mind.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#4A4A4A] mb-4">Smart Document Delivery</h3>
                <p className="text-lg text-[#757575] leading-relaxed">
                  Drop docs straight into your customers&apos; texts for e-signatures. Way better conversion than email ever dreamed of.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#4A4A4A] mb-4">Win Back Drop-Offs</h3>
                <p className="text-lg text-[#757575] leading-relaxed">
                  Customers bail on your form? Fire off automated nudges that actually bring them back to finish what they started.
                </p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden sticky top-8 flex items-start justify-center">
              <Image
                src="/f0641aa7-b2ec-4a16-a15f-28e2ea1ca119.png"
                alt="Peachy Verify Solutions"
                width={350}
                height={350}
                className="w-auto h-auto object-contain max-w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#4A4A4A]">Why Businesses Choose Us</h2>
          <p className="mt-4 text-xl text-[#757575]">
            Trusted by companies that value compliance, security, and reliability
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-[#FFA97E]" />
            </div>
            <h3 className="text-lg font-semibold text-[#4A4A4A] mb-2">Reliable Service</h3>
            <p className="text-[#757575]">Built with industry best practices for maximum reliability.</p>
          </div>
          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-[#FFA97E]" />
            </div>
            <h3 className="text-lg font-semibold text-[#4A4A4A] mb-2">Multi-Brand Support</h3>
            <p className="text-[#757575]">Support multiple brands with customizable styling options.</p>
          </div>
          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-[#FFA97E]" />
            </div>
            <h3 className="text-lg font-semibold text-[#4A4A4A] mb-2">High Performance</h3>
            <p className="text-[#757575]">Global CDN ensures fast load times worldwide.</p>
          </div>
          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-[#FFA97E]" />
            </div>
            <h3 className="text-lg font-semibold text-[#4A4A4A] mb-2">Easy Integration</h3>
            <p className="text-[#757575]">Simple URL-based integration with comprehensive documentation.</p>
          </div>
        </div>
      </section>

      {/* ── SIGNUP FORM ── */}
      <section id="signup" className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-[#4A4A4A] mb-4">Get Started with Peachy Verify</h2>
            <p className="text-xl text-[#757575]">
              Fill out the form below and we&apos;ll get back to you within 24 hours to set up your account.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
            {submitStatus === 'success' ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
                <p className="text-lg text-gray-600 mb-8">
                  We&apos;ve received your request. Our team will contact you within 24 hours to get you started.
                </p>
                <Link
                  href="/"
                  className="inline-block px-6 py-3 bg-[#FFA97E] text-white font-semibold rounded-lg hover:bg-[#FFC6AE] transition-colors"
                >
                  Return to Home
                </Link>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Sign Up for Peachy Verify</h3>
                  <p className="text-gray-600">
                    Complete the form below to start verifying your customers with confidence.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFA97E] focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Business Email *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFA97E] focus:border-transparent"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  {/* Company Field */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Building className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFA97E] focus:border-transparent"
                        placeholder="Acme Inc."
                      />
                    </div>
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number (Optional)
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFA97E] focus:border-transparent"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Tell us about your use case (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFA97E] focus:border-transparent"
                      placeholder="How do you plan to use Peachy Verify?"
                    />
                  </div>

                  {/* Consent Checkboxes */}
                  <div className="space-y-4">
                    {/* SMS Opt-in Checkbox */}
                    <div className="bg-gray-50 border border-gray-300 rounded-lg p-6">
                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          id="account-notifications"
                          checked={accountNotifications}
                          onChange={(e) => setAccountNotifications(e.target.checked)}
                          className="mt-1 h-4 w-4 text-[#FFA97E] focus:ring-[#FFA97E] border-gray-300 rounded flex-shrink-0"
                        />
                        <label htmlFor="account-notifications" className="ml-3 text-sm leading-relaxed text-gray-700">
                          By checking this box and submitting this form, you agree to receive account notification text messages from Peachy Verify. I understand I may opt out of SMS communication by replying &apos;STOP&apos;. Reply HELP or email support@peachyverify.com for help. Message and Data rates may apply. Message frequency varies. Carriers are not liable for delayed or undelivered messages. Opting in to SMS is optional and not required to submit this form or to use our services. All messages will be handled by Peachy Verify.
                        </label>
                      </div>
                    </div>

                    {/* Terms & Privacy Policy Checkbox */}
                    <div className="bg-gray-50 border border-gray-300 rounded-lg p-6">
                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          id="terms-consent"
                          required
                          className="mt-1 h-4 w-4 text-[#FFA97E] focus:ring-[#FFA97E] border-gray-300 rounded flex-shrink-0"
                        />
                        <label htmlFor="terms-consent" className="ml-3 text-sm leading-relaxed text-gray-700">
                          I agree with the{' '}
                          <Link href="/terms" className="text-[#FFA97E] hover:text-[#FFC6AE] font-medium underline">
                            Terms & Conditions
                          </Link>{' '}
                          and{' '}
                          <Link href="/privacy" className="text-[#FFA97E] hover:text-[#FFC6AE] font-medium underline">
                            Privacy Policy
                          </Link>
                          .
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 rounded-lg text-lg font-semibold transition-all ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-[#FFA97E] hover:bg-[#FFC6AE] text-white shadow-lg hover:shadow-xl'
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      'Get Started'
                    )}
                  </button>

                  <p className="text-center text-sm text-gray-500">
                    Note: Web3Forms integration will be added in a future update.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
