import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <span className="text-2xl font-extrabold" style={{ color: '#000000' }}>LearnAmone</span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" style={{ color: '#555555' }} className="hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link href="/about" style={{ color: '#555555' }} className="hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium">
                  About
                </Link>
                <Link href="/privacy" style={{ color: '#000000' }} className="hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium">
                  Privacy
                </Link>
                <Link href="/terms" style={{ color: '#555555' }} className="hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium">
                  Terms
                </Link>
                <Link href="/signup" className="text-white px-4 py-2 rounded-md text-sm font-medium" style={{ backgroundColor: '#000000' }}>
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section style={{ background: '#FFFFFF' }} className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold mb-4" style={{ color: '#000000' }}>Privacy Policy</h1>
          <p className="text-lg" style={{ color: '#555555' }}>
            Last Updated: December 30, 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#000000' }}>1. Introduction</h2>
          <p className="mb-6" style={{ color: '#555555' }}>
            LearnAmone (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our financial education and advisory service and website.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#000000' }}>2. Information We Collect</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: '#000000' }}>2.1 Information You Provide</h3>
          <p className="mb-4" style={{ color: '#555555' }}>When you sign up for our service, we may collect:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2" style={{ color: '#555555' }}>
            <li>Name and contact information (email, phone)</li>
            <li>Home address and property information</li>
            <li>Account credentials</li>
            <li>Payment information (processed by third-party payment processors)</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: '#000000' }}>2.2 Information Collected Automatically</h3>
          <p className="mb-4" style={{ color: '#555555' }}>When you use our service, we automatically collect:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2" style={{ color: '#555555' }}>
            <li>Device information (browser type, operating system)</li>
            <li>IP address and location data</li>
            <li>Usage data (pages visited, time spent, click patterns)</li>
            <li>Assessment timestamps and completion rates</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: '#000000' }}>2.3 Phone Number Handling</h3>
          <p className="mb-6" style={{ color: '#555555' }}>
            <strong>Important:</strong> We do NOT store phone numbers used in the verification process beyond what is necessary to provide our service. Phone numbers are only displayed (masked) during the verification flow and are not logged or retained in our systems. All tracking parameters are passed through without storing personal identifiable information.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: '#000000' }}>2.4 Mobile Information Sharing</h3>
          <p className="mb-6" style={{ color: '#555555' }}>
            <strong>No mobile information will be shared or sold to third parties for marketing purposes.</strong> We are committed to protecting your mobile information and will only use it for the purposes outlined in this Privacy Policy, such as providing our gold education service and communicating with you about your account.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#000000' }}>3. How We Use Your Information</h2>
          <p className="mb-4" style={{ color: '#555555' }}>We use the information we collect to:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2" style={{ color: '#555555' }}>
            <li>Provide and maintain our gold education service</li>
            <li>Process your transactions and manage your account</li>
            <li>Send you service-related communications</li>
            <li>Improve our service and develop new features</li>
            <li>Ensure compliance with carrier requirements and regulations</li>
            <li>Detect and prevent fraud or abuse</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#000000' }}>4. Information Sharing and Disclosure</h2>
          <p className="mb-4" style={{ color: '#555555' }}>We may share your information with:</p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: '#000000' }}>4.1 Service Providers</h3>
          <p className="mb-6" style={{ color: '#555555' }}>
            Third-party vendors who perform services on our behalf, such as hosting, analytics, payment processing, and customer support. These providers are contractually obligated to protect your information.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: '#000000' }}>4.2 Business Transfers</h3>
          <p className="mb-6" style={{ color: '#555555' }}>
            In connection with any merger, sale of company assets, financing, or acquisition of all or a portion of our business.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: '#000000' }}>4.3 Legal Requirements</h3>
          <p className="mb-6" style={{ color: '#555555' }}>
            When required by law, court order, or government regulation, or when we believe disclosure is necessary to protect our rights, your safety, or the safety of others.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: '#000000' }}>4.4 With Your Consent</h3>
          <p className="mb-6" style={{ color: '#555555' }}>
            We may share your information for any other purpose with your explicit consent.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#000000' }}>5. Data Security</h2>
          <p className="mb-6" style={{ color: '#555555' }}>
            We implement appropriate technical and organizational security measures to protect your information against unauthorized access, alteration, disclosure, or destruction. These measures include:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2" style={{ color: '#555555' }}>
            <li>Encryption of data in transit (HTTPS/TLS)</li>
            <li>Secure hosting infrastructure with regular security audits</li>
            <li>Access controls and authentication mechanisms</li>
            <li>Regular security assessments and updates</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#000000' }}>6. Data Retention</h2>
          <p className="mb-6" style={{ color: '#555555' }}>
            We retain your information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#000000' }}>7. Your Rights and Choices</h2>
          <p className="mb-4" style={{ color: '#555555' }}>Depending on your location, you may have the following rights:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2" style={{ color: '#555555' }}>
            <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
            <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
            <li><strong>Deletion:</strong> Request deletion of your personal information</li>
            <li><strong>Portability:</strong> Request a copy of your information in a portable format</li>
            <li><strong>Objection:</strong> Object to certain processing of your information</li>
            <li><strong>Opt-out:</strong> Opt out of marketing communications</li>
          </ul>
          <p className="mb-6" style={{ color: '#555555' }}>
            To exercise these rights, please contact us at <a href="mailto:privacy@learnamone.com" className="font-medium" style={{ color: '#000000' }}>privacy@learnamone.com</a>.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#000000' }}>8. Cookies and Tracking Technologies</h2>
          <p className="mb-6" style={{ color: '#555555' }}>
            We use cookies and similar tracking technologies to track activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#000000' }}>9. Third-Party Links</h2>
          <p className="mb-6" style={{ color: '#555555' }}>
            Our service may contain links to third-party websites. We are not responsible for the privacy practices of these external sites.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#000000' }}>10. Children's Privacy</h2>
          <p className="mb-6" style={{ color: '#555555' }}>
            Our service is not intended for individuals under the age of 18. We do not knowingly collect personal information from children.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#000000' }}>11. California Privacy Rights</h2>
          <p className="mb-6" style={{ color: '#555555' }}>
            If you are a California resident, you have specific rights under the California Consumer Privacy Act (CCPA). We do not sell personal information.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#000000' }}>12. Changes to This Privacy Policy</h2>
          <p className="mb-6" style={{ color: '#555555' }}>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#000000' }}>13. Contact Us</h2>
          <p className="mb-4" style={{ color: '#555555' }}>
            If you have any questions about this Privacy Policy or our privacy practices, please contact us:
          </p>
          <div className="rounded-lg p-6 mb-8" style={{ backgroundColor: '#FFFFFF', border: '1px solid #DDDDDD' }}>
            <p className="mb-2" style={{ color: '#555555' }}><strong>Email:</strong> <a href="mailto:privacy@learnamone.com" className="font-medium" style={{ color: '#000000' }}>privacy@learnamone.com</a></p>
            <p className="mb-2" style={{ color: '#555555' }}><strong>Support:</strong> <a href="mailto:support@learnamone.com" className="font-medium" style={{ color: '#000000' }}>support@learnamone.com</a></p>
            <p style={{ color: '#555555' }}><strong>Website:</strong> <a href="/" className="font-medium" style={{ color: '#000000' }}>https://learnamone.com</a></p>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="text-white py-12 mt-20" style={{ backgroundColor: '#000000' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">LearnAmone</h3>
              <p style={{ color: '#888888' }}>
                Unbiased AI-powered financial education for everyone.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" style={{ color: '#888888' }} className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/signup" style={{ color: '#888888' }} className="hover:text-white">
                    Get Started
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" style={{ color: '#888888' }} className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" style={{ color: '#888888' }} className="hover:text-white">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p style={{ color: '#888888' }}>
                support@learnamone.com
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 text-center" style={{ borderTop: '1px solid #333333', color: '#888888' }}>
            <p>&copy; 2025 LearnAmone. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
