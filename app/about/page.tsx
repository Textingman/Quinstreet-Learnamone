import Link from 'next/link';
import { Bot, ShieldCheck, BookOpen } from 'lucide-react';

export default function AboutPage() {
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
                <Link href="/about" style={{ color: '#000000' }} className="hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium">
                  About
                </Link>
                <Link href="/privacy" style={{ color: '#555555' }} className="hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium">
                  Privacy
                </Link>
                <Link href="/terms" style={{ color: '#555555' }} className="hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium">
                  Terms
                </Link>
                <Link href="/signup" className="text-white px-4 py-2 rounded-md text-sm font-medium" style={{ backgroundColor: '#000000' }}>
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: '#F5F5F5', color: '#000000' }}>
              <Bot className="w-4 h-4" />
              AI-Powered — 100% Independent
            </div>
            <h1 className="text-5xl font-extrabold mb-6" style={{ color: '#000000' }}>
              An AI Agent Built to Educate,<br />Not to Sell
            </h1>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#555555' }}>
              LearnAmone is an AI-powered platform that guides people through their financial journey with honest, unbiased education. We&apos;re not a financial product seller. We&apos;re your independent advisor.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#000000' }}>Why We Built This</h2>
            <p className="text-lg mb-4" style={{ color: '#555555' }}>
              The personal finance industry is full of product sellers, but short on educators. People are bombarded with confusing offers, high-pressure tactics, and conflicting information — and most don&apos;t know who to trust.
            </p>
            <p className="text-lg mb-4" style={{ color: '#555555' }}>
              We built an AI agent that acts as your personal financial advisor — one that has no financial incentive to push you toward any particular product or service. It simply helps you understand your options and make the best decision for your needs.
            </p>
            <p className="text-lg" style={{ color: '#555555' }}>
              Think of it as having a knowledgeable friend who happens to know everything about personal finance — available 24/7, completely free, and always on your side.
            </p>
          </div>
          <div className="rounded-2xl p-8 border" style={{ backgroundColor: '#FFFFFF', borderColor: '#DDDDDD' }}>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F5F5F5' }}>
                  <Bot className="w-5 h-5" style={{ color: '#000000' }} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-1" style={{ color: '#000000' }}>AI-Powered, Always Available</h3>
                  <p style={{ color: '#555555' }}>
                    Our AI agent is available 24/7 to answer your financial questions instantly — no waiting, no appointments.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F5F5F5' }}>
                  <ShieldCheck className="w-5 h-5" style={{ color: '#000000' }} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-1" style={{ color: '#000000' }}>Zero Conflicts of Interest</h3>
                  <p style={{ color: '#555555' }}>
                    We receive no commissions or referral fees from financial product providers. Our AI&apos;s only job is to help you.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F5F5F5' }}>
                  <BookOpen className="w-5 h-5" style={{ color: '#000000' }} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-1" style={{ color: '#000000' }}>Education First</h3>
                  <p style={{ color: '#555555' }}>
                    We believe informed people make better financial decisions. Our AI educates before you ever talk to a product provider.
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
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#000000' }}>What Our AI Agent Covers</h2>
            <p className="text-xl" style={{ color: '#555555' }}>
              Comprehensive financial education tailored to your needs and situation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl border" style={{ borderColor: '#DDDDDD' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#F5F5F5' }}>
                <span className="text-xl">💰</span>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#000000' }}>Budgeting & Saving</h3>
              <p style={{ color: '#555555' }}>
                How to create a budget, build an emergency fund, and develop healthy saving habits.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl border" style={{ borderColor: '#DDDDDD' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#F5F5F5' }}>
                <span className="text-xl">📈</span>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#000000' }}>Investing Basics</h3>
              <p style={{ color: '#555555' }}>
                Understanding stocks, bonds, index funds, retirement accounts, and how to start investing.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl border" style={{ borderColor: '#DDDDDD' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#F5F5F5' }}>
                <span className="text-xl">🏦</span>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#000000' }}>Debt Management</h3>
              <p style={{ color: '#555555' }}>
                Strategies for paying off debt, understanding interest rates, and improving your credit score.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl border" style={{ borderColor: '#DDDDDD' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#F5F5F5' }}>
                <span className="text-xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#000000' }}>Financial Planning</h3>
              <p style={{ color: '#555555' }}>
                Setting financial goals, planning for retirement, and building long-term wealth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #000000 0%, #333333 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Bot className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Talk to Your AI Financial Advisor?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.9)' }}>
            Get instant, unbiased answers to all your financial questions — completely free, with zero sales pressure.
          </p>
          <Link
            href="/signup"
            className="inline-block px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#FFFFFF', color: '#000000' }}
          >
            Talk to the AI Agent — Free
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white py-12" style={{ backgroundColor: '#000000' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">LearnAmone</h3>
              <p style={{ color: '#888888' }}>
                Your AI agent for unbiased financial education.
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
                    Talk to AI
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
