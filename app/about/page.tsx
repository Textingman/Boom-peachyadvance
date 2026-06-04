import Link from 'next/link';
import Image from 'next/image';
import { Shield, Target, Users, Lock, Fingerprint, ShieldCheck } from 'lucide-react';
import SiteFooter from '../components/SiteFooter';

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

      <SiteFooter />
    </div>
  );
}
