import Link from 'next/link';
import Image from 'next/image';
import { Shield, Target, Users, Lock, Fingerprint, ShieldCheck } from 'lucide-react';

export default function AboutPage() {
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
                />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/about" className="text-[#4A4A4A] hover:text-[#FFA97E] px-3 py-2 rounded-md text-sm font-medium">
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
                <Link href="/business" className="border border-[#FFA97E] bg-[#FFA97E] text-white hover:bg-[#FFC6AE] px-4 py-2 rounded-md text-sm font-medium">
                  For Businesses
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#FEE5D9] to-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold text-[#4A4A4A] mb-6">
            About Peachy Verify
          </h1>
          <p className="text-xl text-[#757575] max-w-3xl mx-auto">
            We build the infrastructure that connects businesses and consumers through trusted, compliant SMS verification — protecting identities on both sides of every interaction.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[#4A4A4A] mb-6">Our Mission</h2>
            <p className="text-lg text-[#757575] mb-4">
              Peachy Verify was built to solve a fundamental problem: businesses need to verify who their customers are, and consumers deserve to control who can reach them — without sacrificing privacy.
            </p>
            <p className="text-lg text-[#757575] mb-4">
              We provide a platform that sits at the intersection of identity, privacy, and compliance — giving businesses the verification tools they need while giving consumers the protection they deserve.
            </p>
            <p className="text-lg text-[#757575]">
              Every product we build is grounded in carrier compliance, TCPA standards, and 10DLC regulations so neither side ever has to worry about it.
            </p>
          </div>
          <div className="bg-orange-50 rounded-2xl p-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Fingerprint className="w-8 h-8 text-[#FFA97E]" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-[#4A4A4A] mb-2">Identity First</h3>
                  <p className="text-[#757575]">
                    Carrier-compliant phone verification that confirms who your customers really are — in seconds, not days.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Lock className="w-8 h-8 text-[#FFA97E]" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-[#4A4A4A] mb-2">Privacy by Design</h3>
                  <p className="text-[#757575]">
                    A privacy proxy layer that shields consumers&apos; real phone numbers from businesses while keeping communication flowing.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <ShieldCheck className="w-8 h-8 text-[#FFA97E]" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-[#4A4A4A] mb-2">Built for Compliance</h3>
                  <p className="text-[#757575]">
                    10DLC-compliant opt-in management, consent tracking, and STOP/HELP handling built into every interaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="bg-[#4A4A4A] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-white mb-4">What We Stand For</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Three principles guide everything we build.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 rounded-2xl p-8">
              <div className="text-4xl font-extrabold text-[#FFA97E] mb-4">Identity</div>
              <p className="text-gray-300">
                We verify who people are so businesses can trust their customers and consumers can trust the services they use.
              </p>
            </div>
            <div className="bg-white/10 rounded-2xl p-8">
              <div className="text-4xl font-extrabold text-[#FFA97E] mb-4">Privacy</div>
              <p className="text-gray-300">
                We protect personal data at every step — your phone number, your identity, and your choices are always yours.
              </p>
            </div>
            <div className="bg-white/10 rounded-2xl p-8">
              <div className="text-4xl font-extrabold text-[#FFA97E] mb-4">Compliance</div>
              <p className="text-gray-300">
                We build to carrier standards, TCPA requirements, and 10DLC regulations so you never have to worry about it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#4A4A4A] mb-4">Why Businesses & Consumers Choose Us</h2>
          <p className="text-xl text-[#757575]">
            Trusted by companies that value compliance, security, and reliability — and consumers who value their privacy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-[#FFA97E]" />
            </div>
            <h3 className="text-lg font-semibold text-[#4A4A4A] mb-2">Carrier Compliant</h3>
            <p className="text-[#757575]">
              10DLC-registered campaigns and full TCPA compliance built in from day one.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-[#FFA97E]" />
            </div>
            <h3 className="text-lg font-semibold text-[#4A4A4A] mb-2">Two-Sided Platform</h3>
            <p className="text-[#757575]">
              We serve both businesses needing verification and consumers wanting privacy — in one unified system.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-[#FFA97E]" />
            </div>
            <h3 className="text-lg font-semibold text-[#4A4A4A] mb-2">Privacy Proxy</h3>
            <p className="text-[#757575]">
              Consumers&apos; real numbers stay hidden. Businesses get verified contacts. Everyone wins.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-[#FFA97E]" />
            </div>
            <h3 className="text-lg font-semibold text-[#4A4A4A] mb-2">White-Label Ready</h3>
            <p className="text-[#757575]">
              Deploy under your own brand with seamless redirect and parameter passing support.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#FFA97E] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Whether you&apos;re a business looking to verify customers or a consumer protecting your privacy, Peachy Verify has you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/business"
              className="inline-block px-8 py-4 bg-white text-[#FFA97E] text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              For Businesses
            </Link>
            <Link
              href="/consumer"
              className="inline-block px-8 py-4 bg-[#4A4A4A] text-white text-lg font-semibold rounded-lg hover:bg-[#2d2c33] transition-colors shadow-lg"
            >
              For Consumers
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
                Identity, privacy, and compliance solutions for businesses and consumers.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2">
                <li><Link href="/business" className="text-gray-400 hover:text-white">For Businesses</Link></li>
                <li><Link href="/consumer" className="text-gray-400 hover:text-white">For Consumers</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
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
            <div className="flex justify-center gap-6 mb-4">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/80435849/admin/dashboard/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:opacity-80 transition-opacity"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="#0A66C2">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              {/* Google */}
              <a
                href="https://share.google/hzSaajNWRFzeloi0J"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google"
                className="hover:opacity-80 transition-opacity"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </a>
            </div>
            <p>&copy; 2025 Peachy Verify. All rights reserved.</p>
            <p className="mt-2 text-sm">Peachy Verify is a DBA of Bume International LLC</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
