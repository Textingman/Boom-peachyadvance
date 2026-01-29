import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, Zap, Users } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-32">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <Image 
                  src="/NRCVerify.png" 
                  alt="Peachy Advance" 
                  width={500} 
                  height={167}
                  className="h-24 w-auto"
                  priority
                />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-gray-900 hover:text-[#FB923C] px-3 py-2 rounded-md text-sm font-medium">
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
                <Link href="/signup" className="bg-[#FB923C] text-white hover:bg-[#F97316] px-4 py-2 rounded-md text-sm font-medium">
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
          <h1 className="text-5xl font-extrabold text-gray-900 sm:text-6xl md:text-7xl">
            Verify Your Customers
            <span className="block text-[#FB923C]">With Confidence</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600">
            Send verification and notifications easily. Ensure your customers are who they say they are with our SMS verification service.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link
              href="/signup"
              className="px-8 py-4 bg-[#FB923C] text-white text-lg font-semibold rounded-lg hover:bg-[#F97316] transition-colors shadow-lg"
            >
              Get Started Free
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 bg-white text-[#FB923C] text-lg font-semibold rounded-lg hover:bg-gray-50 transition-colors border-2 border-[#FB923C]"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Why Choose Peachy Advance?</h2>
          <p className="mt-4 text-xl text-gray-600">
            Trusted by businesses to verify customer identity and improve engagement
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-4">
              <CheckCircle className="w-12 h-12 text-[#FB923C]" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
              Easy Verification
            </h3>
            <p className="text-gray-600 text-center">
              Simple, user-friendly verification flow that customers can complete in seconds.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-4">
              <Zap className="w-12 h-12 text-[#FB923C]" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
              Lightning Fast
            </h3>
            <p className="text-gray-600 text-center">
              Optimized for speed with page loads under 2 seconds, even on mobile networks.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-4">
              <Users className="w-12 h-12 text-[#FB923C]" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
              Multi-Brand Support
            </h3>
            <p className="text-gray-600 text-center">
              Support multiple brands with customizable styling and white-label options.
            </p>
          </div>
        </div>
      </section>

      {/* Our Solutions Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Our Solutions</h2>
            <p className="mt-4 text-xl text-gray-600">
              Streamline your verification and engagement process
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Solutions List */}
            <div className="space-y-12">
              {/* Solution 1 */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Identity Verification</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Begin by dispatching a straightforward verification request to your users, aiming to confirm their identity efficiently.
                </p>
              </div>

              {/* Solution 2 */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Document Link</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Distribute document links directly to your users for electronic signatures. This method significantly enhances conversion rates compared to email and other communication channels.
                </p>
              </div>

              {/* Solution 3 */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Form Submission Process</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Re-engage customers who have abandoned the form process by setting up automated messages designed to recapture their interest and complete their submissions.
                </p>
              </div>
            </div>

            {/* Single Image */}
            <div className="rounded-lg overflow-hidden sticky top-8 flex items-start justify-center">
              <Image 
                src="/Phoneimage.png" 
                alt="Peachy Advance Solutions"
                width={350} 
                height={350}
                className="w-auto h-auto object-contain max-w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-[#FB923C] rounded-2xl shadow-2xl overflow-hidden">
          <div className="px-6 py-16 sm:px-12 sm:py-20 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join businesses that trust Peachy Advance for SMS verification and improved customer engagement.
            </p>
            <Link
              href="/signup"
              className="inline-block px-8 py-4 bg-white text-[#FB923C] text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
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
              <h3 className="text-xl font-bold mb-4">Peachy Advance</h3>
              <p className="text-gray-400">
                SMS verification for businesses.
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
                support@peachyadvance.com
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Peachy Advance. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
