'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Mail, Phone, User, ShieldCheck, EyeOff, Smartphone, CheckCircle, Lock, ArrowRight } from 'lucide-react';

export default function ConsumerPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [accountNotifications, setAccountNotifications] = useState(false);
  const [termsConsent, setTermsConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // TODO: Integrate with Web3Forms later
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '' });
      setAccountNotifications(false);
      setTermsConsent(false);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white">
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
                <Link href="/" className="text-gray-600 hover:text-[#FB923C] px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link href="/about" className="text-gray-600 hover:text-[#FB923C] px-3 py-2 rounded-md text-sm font-medium">
                  About
                </Link>
                <Link href="/privacy" className="text-gray-600 hover:text-[#FB923C] px-3 py-2 rounded-md text-sm font-medium">
                  Privacy
                </Link>
                <Link href="/terms" className="text-gray-600 hover:text-[#FB923C] px-3 py-2 rounded-md text-sm font-medium">
                  Terms
                </Link>
                <Link href="/contact" className="text-gray-600 hover:text-[#FB923C] px-3 py-2 rounded-md text-sm font-medium">
                  Contact
                </Link>
                <Link href="#signup" className="bg-[#FB923C] text-white hover:bg-[#F97316] px-4 py-2 rounded-md text-sm font-medium">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-orange-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-[#FB923C] text-sm font-semibold px-4 py-2 rounded-full mb-6">
              <ShieldCheck className="w-4 h-4" />
              Consumer Privacy Protection
            </div>
            <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
              Your Phone Number.
              <span className="block text-[#FB923C]">Your Privacy. Your Control.</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Peachy Verify acts as a <strong>privacy proxy</strong> between you and the businesses you interact with. We manage your SMS opt-ins so businesses never see your real phone number — and you stay in control of every subscription.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#signup"
                className="px-8 py-4 bg-[#FB923C] text-white text-lg font-semibold rounded-lg hover:bg-[#F97316] transition-colors shadow-lg flex items-center justify-center gap-2"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#how-it-works"
                className="px-8 py-4 bg-white text-[#FB923C] text-lg font-semibold rounded-lg hover:bg-orange-50 transition-colors border-2 border-[#FB923C]"
              >
                How It Works
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How Peachy Verify Protects You</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We sit between you and every business you text with — keeping your real number private while keeping you connected.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center bg-orange-50 rounded-2xl p-8">
            <div className="w-16 h-16 bg-[#FB923C] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <EyeOff className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Your Number Stays Hidden</h3>
            <p className="text-gray-600">
              Businesses interact with a Peachy Verify proxy number — not your real phone number. Your personal number is never exposed.
            </p>
          </div>

          <div className="text-center bg-orange-50 rounded-2xl p-8">
            <div className="w-16 h-16 bg-[#FB923C] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Smartphone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">One Dashboard, All Your Apps</h3>
            <p className="text-gray-600">
              See every service you&apos;ve opted into in one place. Manage all your SMS subscriptions without hunting through your messages.
            </p>
          </div>

          <div className="text-center bg-orange-50 rounded-2xl p-8">
            <div className="w-16 h-16 bg-[#FB923C] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Instant Opt-Out Control</h3>
            <p className="text-gray-600">
              Opt out of any service with one click. No more texting STOP to a dozen different numbers — we handle it all for you.
            </p>
          </div>
        </div>
      </section>

      {/* Features / Value Props */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                The SMS Privacy Layer You&apos;ve Always Needed
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-[#FB923C]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Privacy by Design</h3>
                    <p className="text-gray-600">Your real phone number is never shared with any business. We act as the intermediary so you stay anonymous.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-[#FB923C]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Centralized Opt-In Management</h3>
                    <p className="text-gray-600">All your SMS subscriptions in one place. Know exactly which apps have permission to text you and revoke it instantly.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                    <Smartphone className="w-5 h-5 text-[#FB923C]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Still Get the Messages You Want</h3>
                    <p className="text-gray-600">Transactional messages, order updates, and alerts you care about still come through — just without exposing your real number.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                    <Lock className="w-5 h-5 text-[#FB923C]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">No Data Selling. Ever.</h3>
                    <p className="text-gray-600">We will never sell or share your mobile information with third parties for marketing purposes. Your data is yours.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl border border-green-200">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">ShopEasy</p>
                    <p className="text-xs text-gray-500">Order updates · Opted In</p>
                  </div>
                  <span className="ml-auto text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">Active</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl border border-green-200">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">FitTrack Pro</p>
                    <p className="text-xs text-gray-500">Workout reminders · Opted In</p>
                  </div>
                  <span className="ml-auto text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">Active</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-500 text-sm">QuickLoans</p>
                    <p className="text-xs text-gray-400">Loan notifications · Opted Out</p>
                  </div>
                  <span className="ml-auto text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded-full font-medium">Paused</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl border border-green-200">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">LocalEats</p>
                    <p className="text-xs text-gray-500">Deals & delivery · Opted In</p>
                  </div>
                  <span className="ml-auto text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">Active</span>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100 text-center">
                  <p className="text-xs text-gray-400">Your real number: <span className="font-mono font-semibold text-gray-600">🔒 Hidden from all businesses</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sign Up Form */}
      <section id="signup" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Join Peachy Verify for Free
          </h2>
          <p className="text-xl text-gray-600">
            Sign up to get your privacy proxy number and start managing your SMS subscriptions in one place.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {submitStatus === 'success' ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">You&apos;re on the list!</h2>
              <p className="text-lg text-gray-600 mb-8">
                Thanks for signing up. We&apos;ll reach out shortly with your Peachy Verify privacy number and account details.
              </p>
              <Link
                href="/"
                className="inline-block px-6 py-3 bg-[#FB923C] text-white font-semibold rounded-lg hover:bg-[#F97316] transition-colors"
              >
                Return to Home
              </Link>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Create Your Consumer Account</h3>
                <p className="text-gray-600">
                  Fill out the form below to get started. We&apos;ll set up your privacy proxy and send you account details.
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
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FB923C] focus:border-transparent"
                      placeholder="Jane Smith"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
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
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FB923C] focus:border-transparent"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Phone Number *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FB923C] focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <p className="mt-1 text-xs text-gray-500">
                    This is the number we&apos;ll protect. Businesses will never see it.
                  </p>
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
                        className="mt-1 h-4 w-4 text-[#FB923C] focus:ring-[#FB923C] border-gray-300 rounded flex-shrink-0"
                      />
                      <label htmlFor="account-notifications" className="ml-3 text-sm leading-relaxed text-gray-700">
                        By checking this box and submitting this form, you agree to receive transactional account notification text messages from Peachy Verify. These messages include account setup confirmations, opt-in/opt-out confirmations, and service updates. I understand I may opt out of SMS communication by replying &apos;STOP&apos;. Reply HELP or email support@peachyverify.com for help. Message and Data rates may apply. Message frequency varies. Carriers are not liable for delayed or undelivered messages. Opting in to SMS is optional and not required to submit this form or to use our services. All messages will be handled by Peachy Verify.
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
                        checked={termsConsent}
                        onChange={(e) => setTermsConsent(e.target.checked)}
                        className="mt-1 h-4 w-4 text-[#FB923C] focus:ring-[#FB923C] border-gray-300 rounded flex-shrink-0"
                      />
                      <label htmlFor="terms-consent" className="ml-3 text-sm leading-relaxed text-gray-700">
                        I agree with the{' '}
                        <Link href="/terms" className="text-[#FB923C] hover:text-[#F97316] font-medium underline">
                          Terms & Conditions
                        </Link>{' '}
                        and{' '}
                        <Link href="/privacy" className="text-[#FB923C] hover:text-[#F97316] font-medium underline">
                          Privacy Policy
                        </Link>
                        . I understand that Peachy Verify will act as a privacy proxy for my SMS communications.
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
                      : 'bg-[#FB923C] hover:bg-[#F97316] text-white shadow-lg hover:shadow-xl'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Creating Your Account...
                    </span>
                  ) : (
                    'Create My Privacy Account'
                  )}
                </button>

                <p className="text-center text-sm text-gray-500">
                  Free to join. No credit card required.
                </p>
              </form>
            </>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3b3a41] text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Peachy Verify</h3>
              <p className="text-gray-400">
                SMS privacy and verification for businesses and consumers.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/signup" className="text-gray-400 hover:text-white">
                    For Businesses
                  </Link>
                </li>
                <li>
                  <Link href="/consumer" className="text-gray-400 hover:text-white">
                    Consumer Portal
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-white">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">
                support@peachyverify.com
              </p>
              <p className="text-gray-400 mt-2">
                1309 Coffeen Avenue, Suite 1200<br />
                Sheridan, WY 82801<br />
                USA
              </p>
              <p className="text-gray-400 mt-2">
                <a href="tel:+18886895163" className="hover:text-white">1-888-689-5163</a>
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Peachy Verify. All rights reserved.</p>
            <p className="mt-2 text-sm">Peachy Verify is a DBA of Bume International LLC</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
