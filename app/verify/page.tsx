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

  // Mask resume to show only last 4 digits
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
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
        {/* Logo/Brand */}
        <div className="flex justify-center mb-8">
          <Image 
            src="/Broadstreetlogo.png" 
            alt="Broad Street" 
            width={320} 
            height={107}
            className="h-32 w-auto"
          />
        </div>

        {/* Verification Content */}
        <div className="text-center mb-8">
          {/* Check icon */}
          <div className="w-20 h-20 bg-[#E8EDF7] rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-[#1F3A6D]" strokeWidth={1.5} />
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Thanks for calling!
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-6">
            Verify your number and we&apos;ll connect you with a gold education advisor who can answer your questions right away.
          </p>

          {/* Info banner */}
          <div className="flex items-center gap-3 bg-[#EEF2FF] rounded-2xl px-5 py-4 mb-8 text-left">
            <svg className="w-6 h-6 text-[#1F3A6D] shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
              <path strokeLinecap="round" d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
            <p className="text-[#1F3A6D] font-semibold text-base">
              A gold advisor is standing by. Verify to connect.
            </p>
          </div>

          {/* Phone Input Field */}
          <div className="mb-6">
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
              className="w-full bg-white rounded-lg p-5 text-2xl font-bold text-gray-900 tracking-wider text-center border-2 border-gray-200 focus:border-[#1F3A6D] focus:outline-none transition-colors"
            />
          </div>

          {/* Confirm Button */}
          <button
            onClick={handleConfirm}
            disabled={isRedirecting}
            className={`w-full py-4 px-6 rounded-xl text-lg font-semibold transition-all ${
              isRedirecting
                ? 'bg-gray-400 cursor-not-allowed text-white'
                : 'bg-[#1F3A6D] hover:bg-[#C62828] text-white shadow-md hover:shadow-lg'
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
              "Verify and Connect"
            )}
          </button>
        </div>

        {/* Footer */}
        <div className="text-center pt-6 border-t border-gray-200">
          <p className="text-xs text-gray-500">
            Secured by Broad Street
          </p>
        </div>
      </div>
    </div>
  );
}

export default function VerifyPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1F3A6D] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <VerifyPageContent />
    </Suspense>
  );
}
