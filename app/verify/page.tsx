'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

function VerifyPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [phone, setPhone] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    // Get phone parameter from URL
    const phoneParam = searchParams.get('phone');
    
    if (!phoneParam) {
      setError('Invalid verification link. Phone number is missing.');
      return;
    }

    setPhone(phoneParam);
  }, [searchParams]);

  // Mask phone number to show only last 4 digits
  const maskPhone = (phoneNumber: string): string => {
    if (!phoneNumber) return '';
    
    // Remove any non-digit characters
    const digits = phoneNumber.replace(/\D/g, '');
    
    if (digits.length < 4) return phoneNumber;
    
    const lastFour = digits.slice(-4);
    return `(***) ***-${lastFour}`;
  };

  const handleConfirm = () => {
    setIsRedirecting(true);

    // Build redirect URL with all parameters except 'phone'
    const params = new URLSearchParams();
    
    searchParams.forEach((value, key) => {
      if (key !== 'phone') {
        params.append(key, value);
      }
    });

    // Get destination URL
    const destination = searchParams.get('destination');
    
    if (destination) {
      // Redirect to explicit destination with parameters
      const redirectUrl = `${destination}?${params.toString()}`;
      window.location.href = redirectUrl;
    } else {
      // If no destination, show error
      setError('Invalid verification link. Destination is missing.');
      setIsRedirecting(false);
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
        {/* Logo/Brand */}
        <div className="flex justify-center mb-8">
          <Image 
            src="/NRCVerify.png" 
            alt="Peachy Advance" 
            width={320} 
            height={107}
            className="h-24 w-auto"
          />
        </div>

        {/* Verification Content */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-[#FB923C]" />
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Verify Your Number
          </h2>
          
          {/* Phone Input Field */}
          <div className="mb-8">
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter phone number"
              className="w-full bg-gray-50 rounded-lg p-6 text-3xl font-bold text-gray-900 tracking-wider text-center border-2 border-gray-200 focus:border-[#FB923C] focus:outline-none transition-colors"
            />
          </div>

          {/* Confirm Button */}
          <button
            onClick={handleConfirm}
            disabled={isRedirecting}
            className={`w-full py-4 px-6 rounded-lg text-lg font-semibold transition-all ${
              isRedirecting
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-[#FB923C] hover:bg-[#F97316] text-white shadow-lg hover:shadow-xl'
            }`}
          >
            {isRedirecting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Redirecting...
              </span>
            ) : (
              "Submit"
            )}
          </button>
        </div>

        {/* Footer */}
        <div className="text-center pt-6 border-t border-gray-200">
          <p className="text-xs text-gray-500">
            Secured by Peachy Advance
          </p>
        </div>
      </div>
    </div>
  );
}

export default function VerifyPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FB923C] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <VerifyPageContent />
    </Suspense>
  );
}
