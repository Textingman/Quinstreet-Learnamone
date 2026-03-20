import Link from 'next/link';
import Image from 'next/image';
import { Bot, ShieldCheck, BookOpen } from 'lucide-react';

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
                  src="/Broadstreetlogo.png" 
                  alt="Broad Street" 
                  width={500} 
                  height={167}
                  className="h-32 w-auto"
                />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" style={{ color: '#6B7280' }} className="hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link href="/about" style={{ color: '#1F3A6D' }} className="hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium">
                  About
                </Link>
                <Link href="/privacy" style={{ color: '#6B7280' }} className="hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium">
                  Privacy
                </Link>
                <Link href="/terms" style={{ color: '#6B7280' }} className="hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium">
                  Terms
                </Link>
                <Link href="/signup" className="text-white px-4 py-2 rounded-md text-sm font-medium" style={{ backgroundColor: '#C62828' }}>
                  Talk to Our AI
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: '#EEF2FF', color: '#C62828' }}>
              <Bot className="w-4 h-4" />
              AI-Powered — 100% Independent
            </div>
            <h1 className="text-5xl font-extrabold mb-6" style={{ color: '#1F2937' }}>
              An AI Agent Built to Educate,<br />Not to Sell
            </h1>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#6B7280' }}>
              Broad Street is an AI-powered platform that guides people through the gold buying process with honest, unbiased education. We&apos;re not a gold dealer. We&apos;re your independent advisor.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#1F2937' }}>Why We Built This</h2>
            <p className="text-lg mb-4" style={{ color: '#6B7280' }}>
              The gold and precious metals industry is full of dealers, but short on educators. Buyers are bombarded with confusing offers, high-pressure tactics, and conflicting information — and most don&apos;t know who to trust.
            </p>
            <p className="text-lg mb-4" style={{ color: '#6B7280' }}>
              We built an AI agent that acts as your personal gold advisor — one that has no financial incentive to push you toward any particular product or dealer. It simply helps you understand your options and make the best decision for your needs.
            </p>
            <p className="text-lg" style={{ color: '#6B7280' }}>
              Think of it as having a knowledgeable friend who happens to know everything about gold — available 24/7, completely free, and always on your side.
            </p>
          </div>
          <div className="rounded-2xl p-8 border" style={{ backgroundColor: '#FFFFFF', borderColor: '#E5E7EB' }}>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#EEF2FF' }}>
                  <Bot className="w-5 h-5" style={{ color: '#C62828' }} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-1" style={{ color: '#1F2937' }}>AI-Powered, Always Available</h3>
                  <p style={{ color: '#6B7280' }}>
                    Our AI agent is available 24/7 to answer your gold questions instantly — no waiting, no appointments.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#E8EDF7' }}>
                  <ShieldCheck className="w-5 h-5" style={{ color: '#2E5B9A' }} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-1" style={{ color: '#1F2937' }}>Zero Conflicts of Interest</h3>
                  <p style={{ color: '#6B7280' }}>
                    We receive no commissions or referral fees from gold dealers. Our AI&apos;s only job is to help you.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#EEF2FF' }}>
                  <BookOpen className="w-5 h-5" style={{ color: '#C62828' }} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-1" style={{ color: '#1F2937' }}>Education First</h3>
                  <p style={{ color: '#6B7280' }}>
                    We believe informed buyers make better decisions. Our AI educates before you ever talk to a dealer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What the AI Covers Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#1F2937' }}>What Our AI Agent Covers</h2>
            <p className="text-xl" style={{ color: '#6B7280' }}>
              Comprehensive gold education tailored to your needs and situation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl border" style={{ borderColor: '#E5E7EB' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#EEF2FF' }}>
                <span className="text-xl">🥇</span>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#1F2937' }}>Gold Basics</h3>
              <p style={{ color: '#6B7280' }}>
                How gold markets work, types of gold products, spot pricing, and what to expect when buying.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl border" style={{ borderColor: '#E5E7EB' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#E8EDF7' }}>
                <span className="text-xl">💰</span>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#1F2937' }}>Pricing & Premiums</h3>
              <p style={{ color: '#6B7280' }}>
                Understanding spot price, dealer premiums, fair pricing benchmarks, and how to avoid overpaying.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl border" style={{ borderColor: '#E5E7EB' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#EEF2FF' }}>
                <span className="text-xl">🏦</span>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#1F2937' }}>Storage & Security</h3>
              <p style={{ color: '#6B7280' }}>
                Home safes, bank vaults, third-party storage, and insurance options explained clearly.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl border" style={{ borderColor: '#E5E7EB' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#E8EDF7' }}>
                <span className="text-xl">📈</span>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#1F2937' }}>Purity & Products</h3>
              <p style={{ color: '#6B7280' }}>
                Understanding gold purity (karats), product types, hallmarks, and how to verify authenticity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #1F3A6D 0%, #C62828 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Bot className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Talk to Your AI Gold Advisor?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.9)' }}>
            Get instant, unbiased answers to all your gold questions — completely free, with zero sales pressure.
          </p>
          <Link
            href="/signup"
            className="inline-block px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#FFFFFF', color: '#C62828' }}
          >
            Talk to the AI Agent — Free
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white py-12" style={{ backgroundColor: '#1F2937' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Broad Street</h3>
              <p style={{ color: '#9CA3AF' }}>
                Your AI agent for unbiased gold education.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" style={{ color: '#9CA3AF' }} className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/signup" style={{ color: '#9CA3AF' }} className="hover:text-white">
                    Talk to AI
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" style={{ color: '#9CA3AF' }} className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" style={{ color: '#9CA3AF' }} className="hover:text-white">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p style={{ color: '#9CA3AF' }}>
                support@learnbroadstreet.com
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 text-center" style={{ borderTop: '1px solid #374151', color: '#9CA3AF' }}>
            <p>&copy; 2025 Broad Street. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
