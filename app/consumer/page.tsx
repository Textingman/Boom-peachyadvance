'use client';

import { useState, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, CheckCircle, XCircle, ShieldCheck, LogOut, ChevronRight } from 'lucide-react';

// Mock data for demonstration — in production this would come from an API
const MOCK_APP_SUBSCRIPTIONS: Record<string, { id: string; name: string; description: string; optedIn: boolean; lastActivity: string }[]> = {
  '5551234567': [
    { id: '1', name: 'ShopEasy', description: 'Order updates & promotions', optedIn: true, lastActivity: 'May 28, 2026' },
    { id: '2', name: 'FitTrack Pro', description: 'Workout reminders & tips', optedIn: true, lastActivity: 'May 30, 2026' },
    { id: '3', name: 'QuickLoans', description: 'Loan status notifications', optedIn: false, lastActivity: 'Apr 12, 2026' },
    { id: '4', name: 'LocalEats', description: 'Restaurant deals & delivery updates', optedIn: true, lastActivity: 'Jun 1, 2026' },
  ],
  '5559876543': [
    { id: '5', name: 'TravelNow', description: 'Flight & hotel alerts', optedIn: true, lastActivity: 'May 15, 2026' },
    { id: '6', name: 'HealthHub', description: 'Appointment reminders', optedIn: true, lastActivity: 'May 22, 2026' },
  ],
};

type AppSubscription = {
  id: string;
  name: string;
  description: string;
  optedIn: boolean;
  lastActivity: string;
};

type Step = 'enter-phone' | 'verify-code' | 'manage-apps';

function ConsumerPageContent() {
  const [step, setStep] = useState<Step>('enter-phone');
  const [phone, setPhone] = useState('');
  const [phoneDisplay, setPhoneDisplay] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [codeSent, setCodeSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [error, setError] = useState('');
  const [apps, setApps] = useState<AppSubscription[]>([]);
  const [optOutConfirm, setOptOutConfirm] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState('');

  const formatPhoneDisplay = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 10);
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, '').slice(0, 10);
    setPhone(raw);
    setPhoneDisplay(formatPhoneDisplay(raw));
    setError('');
  };

  const handleSendCode = () => {
    if (phone.length < 10) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }
    setIsSending(true);
    setError('');
    // Simulate sending verification code
    setTimeout(() => {
      setIsSending(false);
      setCodeSent(true);
      setStep('verify-code');
    }, 1500);
  };

  const handleVerifyCode = () => {
    if (verificationCode.length < 4) {
      setError('Please enter the verification code.');
      return;
    }
    setIsVerifying(true);
    setError('');
    // Simulate code verification — accept any 4+ digit code for demo
    setTimeout(() => {
      setIsVerifying(false);
      // Load mock apps for this phone number (or empty list)
      const userApps = MOCK_APP_SUBSCRIPTIONS[phone] || [];
      setApps(userApps);
      setStep('manage-apps');
    }, 1500);
  };

  const handleOptOut = (appId: string) => {
    setApps(prev =>
      prev.map(app =>
        app.id === appId ? { ...app, optedIn: false } : app
      )
    );
    setOptOutConfirm(null);
    setSuccessMessage('You have been opted out successfully.');
    setTimeout(() => setSuccessMessage(''), 4000);
  };

  const handleOptIn = (appId: string) => {
    setApps(prev =>
      prev.map(app =>
        app.id === appId ? { ...app, optedIn: true } : app
      )
    );
    setSuccessMessage('You have been opted back in successfully.');
    setTimeout(() => setSuccessMessage(''), 4000);
  };

  const maskedPhone = phone
    ? `(***) ***-${phone.slice(-4)}`
    : '';

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/peachy-logo.png"
                alt="Peachy Verify"
                width={320}
                height={107}
                className="h-14 w-auto"
                priority
              />
            </Link>
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="text-gray-600 hover:text-[#FB923C] text-sm font-medium"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-lg mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <ShieldCheck className="w-9 h-9 text-[#FB923C]" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Manage Your Subscriptions
          </h1>
          <p className="text-gray-600">
            Enter your phone number to view and manage all the apps and services you&apos;ve opted into via SMS.
          </p>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {(['enter-phone', 'verify-code', 'manage-apps'] as Step[]).map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
                  step === s
                    ? 'bg-[#FB923C] text-white'
                    : (step === 'verify-code' && s === 'enter-phone') ||
                      (step === 'manage-apps' && (s === 'enter-phone' || s === 'verify-code'))
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                {(step === 'verify-code' && s === 'enter-phone') ||
                (step === 'manage-apps' && (s === 'enter-phone' || s === 'verify-code')) ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  i + 1
                )}
              </div>
              {i < 2 && (
                <div
                  className={`w-8 h-0.5 ${
                    (step === 'verify-code' && i === 0) ||
                    (step === 'manage-apps' && i <= 1)
                      ? 'bg-green-500'
                      : 'bg-gray-200'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8">

          {/* Success Message */}
          {successMessage && (
            <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
              <p className="text-green-800 text-sm font-medium">{successMessage}</p>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3">
              <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          )}

          {/* Step 1: Enter Phone */}
          {step === 'enter-phone' && (
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Enter Your Phone Number</h2>
              <p className="text-gray-500 text-sm mb-6">
                We&apos;ll send a one-time verification code to confirm your identity.
              </p>
              <div className="relative mb-6">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="tel"
                  value={phoneDisplay}
                  onChange={handlePhoneChange}
                  placeholder="(555) 123-4567"
                  className="block w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-[#FB923C] focus:outline-none transition-colors"
                />
              </div>
              <button
                onClick={handleSendCode}
                disabled={isSending}
                className={`w-full py-4 px-6 rounded-xl text-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                  isSending
                    ? 'bg-gray-300 cursor-not-allowed text-gray-500'
                    : 'bg-[#FB923C] hover:bg-[#F97316] text-white shadow-lg hover:shadow-xl'
                }`}
              >
                {isSending ? (
                  <>
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending Code...
                  </>
                ) : (
                  <>
                    Send Verification Code
                    <ChevronRight className="w-5 h-5" />
                  </>
                )}
              </button>
              <p className="text-center text-xs text-gray-400 mt-4">
                Standard message rates may apply. We will only use your number to verify your identity.
              </p>
            </div>
          )}

          {/* Step 2: Verify Code */}
          {step === 'verify-code' && (
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Enter Verification Code</h2>
              <p className="text-gray-500 text-sm mb-6">
                We sent a code to <span className="font-semibold text-gray-700">{maskedPhone}</span>. Enter it below to continue.
              </p>
              <input
                type="text"
                inputMode="numeric"
                maxLength={6}
                value={verificationCode}
                onChange={(e) => {
                  setVerificationCode(e.target.value.replace(/\D/g, '').slice(0, 6));
                  setError('');
                }}
                placeholder="Enter code"
                className="block w-full px-4 py-4 text-2xl font-bold text-center tracking-widest border-2 border-gray-200 rounded-xl focus:border-[#FB923C] focus:outline-none transition-colors mb-6"
              />
              <button
                onClick={handleVerifyCode}
                disabled={isVerifying}
                className={`w-full py-4 px-6 rounded-xl text-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                  isVerifying
                    ? 'bg-gray-300 cursor-not-allowed text-gray-500'
                    : 'bg-[#FB923C] hover:bg-[#F97316] text-white shadow-lg hover:shadow-xl'
                }`}
              >
                {isVerifying ? (
                  <>
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Verifying...
                  </>
                ) : (
                  <>
                    Verify & View My Apps
                    <ChevronRight className="w-5 h-5" />
                  </>
                )}
              </button>
              <button
                onClick={() => { setStep('enter-phone'); setVerificationCode(''); setError(''); }}
                className="w-full mt-3 py-3 px-6 rounded-xl text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors"
              >
                ← Change phone number
              </button>
            </div>
          )}

          {/* Step 3: Manage Apps */}
          {step === 'manage-apps' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Your App Subscriptions</h2>
                  <p className="text-gray-500 text-sm mt-1">
                    Showing subscriptions for <span className="font-semibold text-gray-700">{maskedPhone}</span>
                  </p>
                </div>
                <button
                  onClick={() => { setStep('enter-phone'); setPhone(''); setPhoneDisplay(''); setVerificationCode(''); setApps([]); }}
                  className="text-xs text-gray-400 hover:text-gray-600 flex items-center gap-1"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  Sign out
                </button>
              </div>

              {apps.length === 0 ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">No subscriptions found</h3>
                  <p className="text-gray-500 text-sm">
                    We couldn&apos;t find any app subscriptions associated with this phone number.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {apps.map((app) => (
                    <div
                      key={app.id}
                      className={`border-2 rounded-xl p-4 transition-colors ${
                        app.optedIn ? 'border-orange-200 bg-orange-50' : 'border-gray-200 bg-gray-50'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-gray-900 truncate">{app.name}</h3>
                            <span
                              className={`flex-shrink-0 text-xs font-medium px-2 py-0.5 rounded-full ${
                                app.optedIn
                                  ? 'bg-green-100 text-green-700'
                                  : 'bg-gray-200 text-gray-500'
                              }`}
                            >
                              {app.optedIn ? 'Opted In' : 'Opted Out'}
                            </span>
                          </div>
                          <p className="text-sm text-gray-500">{app.description}</p>
                          <p className="text-xs text-gray-400 mt-1">Last activity: {app.lastActivity}</p>
                        </div>
                        <div className="flex-shrink-0">
                          {app.optedIn ? (
                            optOutConfirm === app.id ? (
                              <div className="flex flex-col gap-2 items-end">
                                <p className="text-xs text-red-600 font-medium text-right">Confirm opt-out?</p>
                                <div className="flex gap-2">
                                  <button
                                    onClick={() => setOptOutConfirm(null)}
                                    className="text-xs px-3 py-1.5 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors"
                                  >
                                    Cancel
                                  </button>
                                  <button
                                    onClick={() => handleOptOut(app.id)}
                                    className="text-xs px-3 py-1.5 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors"
                                  >
                                    Opt Out
                                  </button>
                                </div>
                              </div>
                            ) : (
                              <button
                                onClick={() => setOptOutConfirm(app.id)}
                                className="text-xs px-3 py-2 rounded-lg border-2 border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300 transition-colors font-medium"
                              >
                                Opt Out
                              </button>
                            )
                          ) : (
                            <button
                              onClick={() => handleOptIn(app.id)}
                              className="text-xs px-3 py-2 rounded-lg border-2 border-green-200 text-green-700 hover:bg-green-50 hover:border-green-300 transition-colors font-medium"
                            >
                              Opt Back In
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-xs text-gray-400 text-center">
                  To opt out of all messages from a service, you can also reply <strong>STOP</strong> to any SMS you receive from them.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer note */}
        <p className="text-center text-xs text-gray-400 mt-6">
          Secured by Peachy Verify &bull; Your data is never sold or shared
        </p>
      </div>

      {/* Footer */}
      <footer className="bg-[#3b3a41] text-white py-10 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Peachy Verify</h3>
              <p className="text-gray-400">SMS verification for businesses and consumers.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
                <li><Link href="/signup" className="text-gray-400 hover:text-white">Get Started</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">support@peachyverify.com</p>
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

export default function ConsumerPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FB923C] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <ConsumerPageContent />
    </Suspense>
  );
}
