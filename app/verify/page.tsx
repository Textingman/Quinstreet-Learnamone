'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

function VerifyPageContent() {
  const searchParams = useSearchParams();
  const [phone, setPhone] = useState<string>('');
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    const phoneParam = searchParams.get('phone');
    if (phoneParam) {
      setPhone(phoneParam);
    }
  }, [searchParams]);

  const handleConfirm = () => {
    setIsRedirecting(true);

    const params = new URLSearchParams();
    searchParams.forEach((value, key) => {
      if (key !== 'phone') {
        params.append(key, value);
      }
    });

    const destination = searchParams.get('destination');
    if (destination) {
      const redirectUrl = `${destination}?${params.toString()}`;
      window.location.href = redirectUrl;
    } else {
      setIsRedirecting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: '#F5F7FA' }}>
      <div className="max-w-sm w-full bg-white rounded-2xl shadow-lg p-8 text-center">

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src="/Broadstreetlogo.png"
            alt="LearnAmone"
            width={200}
            height={67}
            className="h-16 w-auto"
          />
        </div>

        {/* Check Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F5F5F5' }}>
            <CheckCircle className="w-10 h-10" style={{ color: '#000000' }} strokeWidth={1.5} />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-bold mb-6" style={{ color: '#000000' }}>
          Verify Your Number
        </h2>

        {/* Phone Input */}
        <div className="mb-6">
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone number"
            className="w-full rounded-xl p-4 text-2xl font-bold text-center tracking-wider focus:outline-none"
            style={{
              border: '1.5px solid #DDDDDD',
              color: '#000000',
              backgroundColor: '#FFFFFF',
            }}
          />
        </div>

        {/* Submit Button */}
        <button
          onClick={handleConfirm}
          disabled={isRedirecting}
          className="w-full py-4 rounded-xl text-lg font-semibold text-white transition-all"
          style={{
            backgroundColor: isRedirecting ? '#888888' : '#000000',
            cursor: isRedirecting ? 'not-allowed' : 'pointer',
          }}
        >
          {isRedirecting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Redirecting...
            </span>
          ) : (
            'Submit'
          )}
        </button>

        {/* Footer */}
        <p className="mt-6 text-xs" style={{ color: '#888888' }}>
          Secured by LearnAmone
        </p>
      </div>
    </div>
  );
}

export default function VerifyPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 mx-auto" style={{ borderColor: '#000000' }}></div>
          <p className="mt-4" style={{ color: '#555555' }}>Loading...</p>
        </div>
      </div>
    }>
      <VerifyPageContent />
    </Suspense>
  );
}
