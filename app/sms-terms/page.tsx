import Link from 'next/link';
import Image from 'next/image';
import SiteFooter from '../components/SiteFooter';

export default function SmsTermsPage() {
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
                <Link href="/business" className="border border-[#FFA97E] bg-[#FFA97E] text-white hover:bg-[#FFC6AE] px-4 py-2 rounded-md text-sm font-medium">
                  For Businesses
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-gradient-to-b from-[#FEE5D9] to-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-[#4A4A4A] mb-4">SMS Terms &amp; Conditions</h1>
          <p className="text-lg text-[#757575]">
            Last Updated: December 30, 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. SMS Opt-In</h2>
          <p className="text-gray-600 mb-6">
            By opting in to receive SMS messages from Peachy Verify, you agree to receive account notification text messages. These messages may include account setup confirmations, opt-in/opt-out confirmations, verification codes, and service updates.
          </p>
          <p className="text-gray-600 mb-6">
            Opting in to SMS is <strong>optional</strong> and is not required to submit any form or to use our services. All messages will be handled by Peachy Verify, a DBA of Bume International LLC.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Message Frequency</h2>
          <p className="text-gray-600 mb-6">
            Message frequency varies based on your account activity and the services you use. You may receive messages for account setup, verification events, opt-in/opt-out confirmations, and service updates.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Message &amp; Data Rates</h2>
          <p className="text-gray-600 mb-6">
            Message and data rates may apply depending on your mobile carrier and plan. Peachy Verify is not responsible for any charges incurred from your mobile carrier for receiving SMS messages.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. How to Opt Out</h2>
          <p className="text-gray-600 mb-6">
            You may opt out of SMS communications at any time by replying <strong>STOP</strong> to any message you receive from us. After opting out, you will receive a one-time confirmation message and no further SMS messages will be sent to you unless you opt back in.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. How to Get Help</h2>
          <p className="text-gray-600 mb-6">
            Reply <strong>HELP</strong> to any SMS message for assistance. You may also contact us directly:
          </p>
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <p className="text-gray-600 mb-2"><strong>Email:</strong> <a href="mailto:support@peachyverify.com" className="text-[#FFA97E] hover:text-[#FFC6AE]">support@peachyverify.com</a></p>
            <p className="text-gray-600 mb-2"><strong>Phone:</strong> <a href="tel:+18886895163" className="text-[#FFA97E] hover:text-[#FFC6AE]">1-888-689-5163</a></p>
            <p className="text-gray-600"><strong>Address:</strong> 1309 Coffeen Avenue, Suite 1200, Sheridan, WY 82801, USA</p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. No Third-Party Sharing</h2>
          <p className="text-gray-600 mb-6">
            <strong>No mobile information will be shared with or sold to third parties for marketing or promotional purposes.</strong> SMS opt-in data and consent will not be shared with any third parties. All mobile data is used solely to provide the Peachy Verify service.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Carrier Liability</h2>
          <p className="text-gray-600 mb-6">
            Carriers are not liable for delayed or undelivered messages. Peachy Verify is not responsible for any delays or failures in SMS delivery caused by your mobile carrier or network conditions.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Supported Carriers</h2>
          <p className="text-gray-600 mb-6">
            SMS messaging is available through most major U.S. carriers, including but not limited to AT&amp;T, Verizon, T-Mobile, and Sprint. Carrier support may vary. Contact your carrier for details on SMS availability and rates.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Privacy</h2>
          <p className="text-gray-600 mb-6">
            Your use of our SMS service is also governed by our{' '}
            <Link href="/privacy" className="text-[#FFA97E] hover:text-[#FFC6AE] font-medium">
              Privacy Policy
            </Link>
            . We are committed to protecting your personal information and will never sell or share your mobile data with third parties for marketing purposes.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Changes to These Terms</h2>
          <p className="text-gray-600 mb-6">
            We reserve the right to modify these SMS Terms at any time. We will notify you of material changes by posting the updated terms on our website and updating the &quot;Last Updated&quot; date. Continued use of our SMS service after changes become effective constitutes acceptance of the modified terms.
          </p>

          <div className="bg-[#FEE5D9] rounded-2xl p-8 mt-10">
            <h3 className="text-xl font-bold text-[#4A4A4A] mb-3">Quick Reference</h3>
            <ul className="space-y-2 text-[#757575]">
              <li><strong>To opt out:</strong> Reply <strong>STOP</strong> to any message</li>
              <li><strong>For help:</strong> Reply <strong>HELP</strong> or email <a href="mailto:support@peachyverify.com" className="text-[#FFA97E] hover:text-[#FFC6AE]">support@peachyverify.com</a></li>
              <li><strong>Message frequency:</strong> Varies</li>
              <li><strong>Rates:</strong> Message and data rates may apply</li>
              <li><strong>Data sharing:</strong> No mobile data shared with third parties for marketing</li>
            </ul>
          </div>

        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
