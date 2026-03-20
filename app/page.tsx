import Link from 'next/link';
import Image from 'next/image';
import { Bot, BookOpen, ShieldCheck } from 'lucide-react';

export default function HomePage() {
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
                  priority
                />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" style={{ color: '#1F3A6D' }} className="hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link href="/about" style={{ color: '#6B7280' }} className="hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium">
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
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: '#EEF2FF', color: '#C62828' }}>
              <Bot className="w-4 h-4" />
              Powered by AI — 100% Independent
            </div>
            <h1 className="text-5xl font-extrabold sm:text-6xl md:text-7xl" style={{ color: '#1F2937' }}>
              Your Personal AI Agent
              <span className="block" style={{ color: '#C62828' }}>for Gold Education</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl" style={{ color: '#6B7280' }}>
              Meet your AI gold advisor. Ask anything about gold — pricing, storage, coins, bars, purity, and dealers — and get honest, unbiased answers instantly. No salespeople. No pressure. Just clarity.
            </p>
            <div className="mt-10 flex justify-center gap-4 flex-wrap">
              <Link
                href="/signup"
                className="px-8 py-4 text-white text-lg font-semibold rounded-lg shadow-lg transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#C62828' }}
              >
                Talk to the AI Agent — Free
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 text-lg font-semibold rounded-lg transition-opacity hover:opacity-90 border-2"
                style={{ color: '#2E5B9A', borderColor: '#2E5B9A', backgroundColor: '#FFFFFF' }}
              >
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What the AI Does Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold" style={{ color: '#1F2937' }}>What Our AI Agent Does For You</h2>
            <p className="mt-4 text-xl" style={{ color: '#6B7280' }}>
              A knowledgeable gold expert available 24/7 — with zero agenda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ borderColor: '#E5E7EB' }}>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#EEF2FF' }}>
                  <Bot className="w-8 h-8" style={{ color: '#C62828' }} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3" style={{ color: '#1F2937' }}>
                Answers Your Gold Questions
              </h3>
              <p className="text-center" style={{ color: '#6B7280' }}>
                Ask our AI anything — "What's the difference between coins and bars?", "How do I store gold safely?", "What purity should I look for?" — and get clear, honest answers in seconds.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ borderColor: '#E5E7EB' }}>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#E8EDF7' }}>
                  <BookOpen className="w-8 h-8" style={{ color: '#2E5B9A' }} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3" style={{ color: '#1F2937' }}>
                Educates You Step by Step
              </h3>
              <p className="text-center" style={{ color: '#6B7280' }}>
                Our AI walks you through every aspect of gold ownership — from understanding spot prices to evaluating dealers — so you're never in the dark.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ borderColor: '#E5E7EB' }}>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#EEF2FF' }}>
                  <ShieldCheck className="w-8 h-8" style={{ color: '#C62828' }} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3" style={{ color: '#1F2937' }}>
                Protects You from Bad Deals
              </h3>
              <p className="text-center" style={{ color: '#6B7280' }}>
                Our AI flags red flags in gold purchases, identifies overpriced premiums, and tells you exactly what questions to ask before buying anything.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold" style={{ color: '#1F2937' }}>How the AI Agent Helps You</h2>
            <p className="mt-4 text-xl" style={{ color: '#6B7280' }}>
              Three simple steps to becoming a confident, informed gold buyer
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white" style={{ backgroundColor: '#C62828' }}>
                1
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#1F2937' }}>Tell the AI About Your Needs</h3>
              <p style={{ color: '#6B7280' }}>
                Share what you want to learn about gold — coins, bars, storage, purity, or dealers. The AI instantly tailors its guidance to your specific situation — no generic advice.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white" style={{ backgroundColor: '#2E5B9A' }}>
                2
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#1F2937' }}>Get Your Personalized Education</h3>
              <p style={{ color: '#6B7280' }}>
                The AI explains gold types, purity standards, storage strategies, dealer red flags, and what to expect — all in plain language you can actually understand.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white" style={{ backgroundColor: '#C62828' }}>
                3
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#1F2937' }}>Make a Confident Decision</h3>
              <p style={{ color: '#6B7280' }}>
                Armed with unbiased knowledge, you can confidently evaluate dealer quotes, negotiate better deals, and choose the right gold products for your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Conversation Preview Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold" style={{ color: '#1F2937' }}>Ask the AI Anything About Gold</h2>
            <p className="mt-4 text-xl" style={{ color: '#6B7280' }}>
              Here's a taste of what our AI agent can help you with
            </p>
          </div>

          <div className="space-y-4">
            {[
              { q: "What's the difference between gold coins and gold bars?", a: "Gold coins typically carry higher premiums over spot price but offer greater liquidity and collectible value. Bars are more cost-efficient for larger purchases. Here's how to decide which is right for you..." },
              { q: "How do I know if I'm paying a fair price for gold?", a: "The key is understanding the spot price and the dealer's premium. Typical premiums range from 3–8% for bars and 5–15% for coins. I can help you evaluate any specific quote you've received..." },
              { q: "What gold purity should I look for when buying?", a: "For bullion, 24-karat (99.9% pure) is the standard for bars and many coins. Some coins like the American Gold Eagle are 22-karat. I can explain what each purity level means and which products are most widely accepted..." },
              { q: "Where and how should I store physical gold?", a: "Storage options include home safes, bank safe deposit boxes, and third-party vault services. Each has trade-offs in cost, accessibility, and insurance. Here's how to choose the right option for your situation..." },
            ].map((item, i) => (
              <div key={i} className="rounded-xl overflow-hidden border" style={{ borderColor: '#E5E7EB' }}>
                <div className="p-4 flex items-start gap-3" style={{ backgroundColor: '#EEF2FF' }}>
                  <span className="text-lg">🥇</span>
                  <p className="font-semibold" style={{ color: '#1F2937' }}>{item.q}</p>
                </div>
                <div className="p-4 flex items-start gap-3 bg-white">
                  <Bot className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#C62828' }} />
                  <p style={{ color: '#6B7280' }}>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl shadow-2xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #1F3A6D 0%, #C62828 100%)' }}>
            <div className="px-6 py-16 sm:px-12 sm:py-20 text-center">
              <Bot className="w-16 h-16 text-white mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-white mb-6">
                Your AI Gold Advisor is Ready
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.9)' }}>
                Get instant, unbiased answers to all your gold questions. No sales calls. No pressure. Just an AI that's 100% on your side.
              </p>
              <Link
                href="/signup"
                className="inline-block px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#FFFFFF', color: '#C62828' }}
              >
                Talk to the AI Agent — Free
              </Link>
            </div>
          </div>
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
              <p className="mt-2" style={{ color: '#9CA3AF' }}>
                1166 E Warner Rd<br />
                Gilbert, AZ 85296<br />
                United States
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
