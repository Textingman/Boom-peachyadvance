import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, Zap, Users, Building2, UserCircle, ArrowRight, Shield, Phone } from 'lucide-react';

export default function HomePage() {
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
                <Link href="/" className="text-[#4A4A4A] hover:text-[#FFA97E] px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
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
                <Link href="/signup" className="bg-[#FFA97E] text-white hover:bg-[#FFC6AE] px-4 py-2 rounded-md text-sm font-medium">
                  Get Started
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
            <Link
              href="/signup"
              className="px-8 py-4 bg-[#FFA97E] text-white text-lg font-semibold rounded-lg hover:bg-[#FFC6AE] transition-colors shadow-lg"
            >
              Get Started Free
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 bg-white text-[#FFA97E] text-lg font-semibold rounded-lg hover:bg-[#FEE5D9] transition-colors border-2 border-[#FFA97E]"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* ── SPLIT SECTION: Business vs Consumer ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#4A4A4A]">Two Ways to Use Peachy Verify</h2>
          <p className="mt-4 text-xl text-[#757575]">
            Whether you&apos;re a business verifying customers or a consumer managing your subscriptions — we&apos;ve got you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Business Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-transparent hover:border-[#FFA97E] transition-all group">
            <div className="bg-gradient-to-br from-[#FFA97E] to-[#F97316] p-8 text-white">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                <Building2 className="w-9 h-9 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Business Verification</h3>
              <p className="text-white/90 text-lg">
                Verify your customers&apos; phone numbers with a seamless, carrier-compliant SMS flow.
              </p>
            </div>
            <div className="p-8">
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FFA97E] flex-shrink-0 mt-0.5" />
                  <span className="text-[#757575]">Instant phone number verification via SMS link</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FFA97E] flex-shrink-0 mt-0.5" />
                  <span className="text-[#757575]">Carrier-compliant 10DLC infrastructure</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FFA97E] flex-shrink-0 mt-0.5" />
                  <span className="text-[#757575]">White-label ready with custom branding</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FFA97E] flex-shrink-0 mt-0.5" />
                  <span className="text-[#757575]">Seamless redirect with parameter preservation</span>
                </li>
              </ul>
              <div className="flex flex-col gap-3">
                <Link
                  href="/signup"
                  className="w-full py-3 px-6 bg-[#FFA97E] hover:bg-[#F97316] text-white font-semibold rounded-xl text-center transition-colors flex items-center justify-center gap-2"
                >
                  Get Started for Business
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/verify"
                  className="w-full py-3 px-6 border-2 border-[#FFA97E] text-[#FFA97E] hover:bg-[#FEE5D9] font-semibold rounded-xl text-center transition-colors"
                >
                  View Verification Page
                </Link>
              </div>
            </div>
          </div>

          {/* Consumer Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-transparent hover:border-[#FB923C] transition-all group">
            <div className="bg-gradient-to-br from-[#4A4A4A] to-[#3b3a41] p-8 text-white">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                <UserCircle className="w-9 h-9 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Consumer Portal</h3>
              <p className="text-white/90 text-lg">
                Take control of your SMS subscriptions. See every app you&apos;ve opted into and manage them in one place.
              </p>
            </div>
            <div className="p-8">
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#4A4A4A] flex-shrink-0 mt-0.5" />
                  <span className="text-[#757575]">View all apps you&apos;ve opted into via SMS</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#4A4A4A] flex-shrink-0 mt-0.5" />
                  <span className="text-[#757575]">Opt out of individual services with one click</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#4A4A4A] flex-shrink-0 mt-0.5" />
                  <span className="text-[#757575]">Re-subscribe to services you want back</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#4A4A4A] flex-shrink-0 mt-0.5" />
                  <span className="text-[#757575]">Secure phone verification to protect your privacy</span>
                </li>
              </ul>
              <div className="flex flex-col gap-3">
                <Link
                  href="/consumer"
                  className="w-full py-3 px-6 bg-[#4A4A4A] hover:bg-[#3b3a41] text-white font-semibold rounded-xl text-center transition-colors flex items-center justify-center gap-2"
                >
                  Manage My Subscriptions
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <p className="text-center text-sm text-gray-400">
                  No account needed — just your phone number
                </p>
              </div>
            </div>
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
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-4">
              <CheckCircle className="w-12 h-12 text-[#FFA97E]" />
            </div>
            <h3 className="text-xl font-semibold text-[#4A4A4A] text-center mb-3">
              Dead Simple
            </h3>
            <p className="text-[#757575] text-center">
              Your customers verify in seconds. No friction, no confusion, just smooth sailing.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-4">
              <Zap className="w-12 h-12 text-[#FFA97E]" />
            </div>
            <h3 className="text-xl font-semibold text-[#4A4A4A] text-center mb-3">
              Blazing Fast
            </h3>
            <p className="text-[#757575] text-center">
              Sub-2-second load times. Because nobody&apos;s got time to wait around.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-4">
              <Users className="w-12 h-12 text-[#FFA97E]" />
            </div>
            <h3 className="text-xl font-semibold text-[#4A4A4A] text-center mb-3">
              Your Brand, Your Way
            </h3>
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
            {/* Solutions List */}
            <div className="space-y-12">
              {/* Solution 1 */}
              <div>
                <h3 className="text-2xl font-bold text-[#4A4A4A] mb-4">Instant Identity Checks</h3>
                <p className="text-lg text-[#757575] leading-relaxed">
                  Send a quick verification ping. Your users confirm who they are in seconds, and you get peace of mind.
                </p>
              </div>

              {/* Solution 2 */}
              <div>
                <h3 className="text-2xl font-bold text-[#4A4A4A] mb-4">Smart Document Delivery</h3>
                <p className="text-lg text-[#757575] leading-relaxed">
                  Drop docs straight into your customers&apos; texts for e-signatures. Way better conversion than email ever dreamed of.
                </p>
              </div>

              {/* Solution 3 */}
              <div>
                <h3 className="text-2xl font-bold text-[#4A4A4A] mb-4">Win Back Drop-Offs</h3>
                <p className="text-lg text-[#757575] leading-relaxed">
                  Customers bail on your form? Fire off automated nudges that actually bring them back to finish what they started.
                </p>
              </div>
            </div>

            {/* Single Image */}
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

      {/* Consumer Trust Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-[#4A4A4A] to-[#3b3a41] rounded-2xl shadow-2xl overflow-hidden">
          <div className="px-6 py-16 sm:px-12 sm:py-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">
                  Are You a Consumer?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Wondering which apps have your phone number? Take control of your SMS subscriptions — view and manage every service you&apos;ve opted into, all in one place.
                </p>
                <Link
                  href="/consumer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#FFA97E] text-white text-lg font-semibold rounded-lg hover:bg-[#FFC6AE] transition-colors shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  Manage My Subscriptions
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-xl p-6 text-center">
                  <Shield className="w-10 h-10 text-[#FFA97E] mx-auto mb-3" />
                  <h4 className="text-white font-semibold mb-1">Private & Secure</h4>
                  <p className="text-gray-400 text-sm">Your data is never sold or shared</p>
                </div>
                <div className="bg-white/10 rounded-xl p-6 text-center">
                  <CheckCircle className="w-10 h-10 text-[#FFA97E] mx-auto mb-3" />
                  <h4 className="text-white font-semibold mb-1">One-Click Opt-Out</h4>
                  <p className="text-gray-400 text-sm">Unsubscribe from any service instantly</p>
                </div>
                <div className="bg-white/10 rounded-xl p-6 text-center">
                  <Phone className="w-10 h-10 text-[#FFA97E] mx-auto mb-3" />
                  <h4 className="text-white font-semibold mb-1">Phone Verified</h4>
                  <p className="text-gray-400 text-sm">Only you can access your subscriptions</p>
                </div>
                <div className="bg-white/10 rounded-xl p-6 text-center">
                  <Zap className="w-10 h-10 text-[#FFA97E] mx-auto mb-3" />
                  <h4 className="text-white font-semibold mb-1">Instant Access</h4>
                  <p className="text-gray-400 text-sm">No account or password needed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-[#FFA97E] rounded-2xl shadow-2xl overflow-hidden">
          <div className="px-6 py-16 sm:px-12 sm:py-20 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join businesses that trust Peachy Verify for SMS verification and improved customer engagement.
            </p>
            <Link
              href="/signup"
              className="inline-block px-8 py-4 bg-white text-[#FFA97E] text-lg font-semibold rounded-lg hover:bg-[#FEE5D9] transition-colors shadow-lg"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3b3a41] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Peachy Verify</h3>
              <p className="text-gray-400">
                SMS verification for businesses and consumers.
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
                    Get Started
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
