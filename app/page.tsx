import Link from 'next/link';
import { Bot, BookOpen, ShieldCheck } from 'lucide-react';

export default function HomePage() {
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
                <Link href="/" style={{ color: '#000000' }} className="hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link href="/about" style={{ color: '#555555' }} className="hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium">
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
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: '#F5F5F5', color: '#000000' }}>
              <Bot className="w-4 h-4" />
              Powered by AI — 100% Independent
            </div>
            <h1 className="text-5xl font-extrabold sm:text-6xl md:text-7xl" style={{ color: '#000000' }}>
              Your Personal AI Agent
              <span className="block" style={{ color: '#000000' }}>for Financial Education</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl" style={{ color: '#555555' }}>
              Meet your AI financial advisor. Ask anything about personal finance — budgeting, investing, saving, debt, and more — and get honest, unbiased answers instantly. No salespeople. No pressure. Just clarity.
            </p>
            <div className="mt-10 flex justify-center gap-4 flex-wrap">
              <Link
                href="/signup"
                className="px-8 py-4 text-white text-lg font-semibold rounded-lg shadow-lg transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#000000' }}
              >
                Talk to the AI Agent — Free
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 text-lg font-semibold rounded-lg transition-opacity hover:opacity-90 border-2"
                style={{ color: '#000000', borderColor: '#000000', backgroundColor: '#FFFFFF' }}
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
            <h2 className="text-4xl font-bold" style={{ color: '#000000' }}>What Our AI Agent Does For You</h2>
            <p className="mt-4 text-xl" style={{ color: '#555555' }}>
              A knowledgeable financial expert available 24/7 — with zero agenda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ borderColor: '#DDDDDD' }}>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F5F5F5' }}>
                  <Bot className="w-8 h-8" style={{ color: '#000000' }} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3" style={{ color: '#000000' }}>
                Answers Your Financial Questions
              </h3>
              <p className="text-center" style={{ color: '#555555' }}>
                Ask our AI anything — "How do I start investing?", "How do I pay off debt faster?", "What's the best way to build an emergency fund?" — and get clear, honest answers in seconds.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ borderColor: '#DDDDDD' }}>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F5F5F5' }}>
                  <BookOpen className="w-8 h-8" style={{ color: '#000000' }} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3" style={{ color: '#000000' }}>
                Educates You Step by Step
              </h3>
              <p className="text-center" style={{ color: '#555555' }}>
                Our AI walks you through every aspect of personal finance — from understanding compound interest to evaluating investment options — so you're never in the dark.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ borderColor: '#DDDDDD' }}>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F5F5F5' }}>
                  <ShieldCheck className="w-8 h-8" style={{ color: '#000000' }} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3" style={{ color: '#000000' }}>
                Protects You from Bad Decisions
              </h3>
              <p className="text-center" style={{ color: '#555555' }}>
                Our AI flags financial red flags, identifies predatory products, and tells you exactly what questions to ask before making any major financial decision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold" style={{ color: '#000000' }}>How the AI Agent Helps You</h2>
            <p className="mt-4 text-xl" style={{ color: '#555555' }}>
              Three simple steps to becoming a confident, informed financial decision-maker
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white" style={{ backgroundColor: '#000000' }}>
                1
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#000000' }}>Tell the AI About Your Needs</h3>
              <p style={{ color: '#555555' }}>
                Share what you want to learn about finance — budgeting, investing, saving, or debt. The AI instantly tailors its guidance to your specific situation — no generic advice.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white" style={{ backgroundColor: '#000000' }}>
                2
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#000000' }}>Get Your Personalized Education</h3>
              <p style={{ color: '#555555' }}>
                The AI explains financial concepts, investment strategies, budgeting methods, and what to watch out for — all in plain language you can actually understand.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white" style={{ backgroundColor: '#000000' }}>
                3
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#000000' }}>Make a Confident Decision</h3>
              <p style={{ color: '#555555' }}>
                Armed with unbiased knowledge, you can confidently evaluate financial products, negotiate better terms, and choose the right options for your financial goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Conversation Preview Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold" style={{ color: '#000000' }}>Ask the AI Anything About Finance</h2>
            <p className="mt-4 text-xl" style={{ color: '#555555' }}>
              Here&apos;s a taste of what our AI agent can help you with
            </p>
          </div>

          <div className="space-y-4">
            {[
              { q: "How do I start investing with a small amount of money?", a: "You can start investing with as little as $1 through fractional shares or index funds. The key is to start early and be consistent. I can walk you through the best beginner-friendly options based on your goals..." },
              { q: "What's the fastest way to pay off credit card debt?", a: "The two most effective strategies are the avalanche method (highest interest first) and the snowball method (smallest balance first). Each has pros and cons depending on your psychology and situation. Here's how to choose..." },
              { q: "How much should I have in an emergency fund?", a: "Most financial experts recommend 3–6 months of living expenses. However, the right amount depends on your job stability, income variability, and dependents. Let me help you calculate your specific target..." },
              { q: "What's the difference between a Roth IRA and a Traditional IRA?", a: "The key difference is when you pay taxes. With a Roth IRA, you contribute after-tax dollars and withdrawals are tax-free. With a Traditional IRA, contributions may be tax-deductible but withdrawals are taxed. Here's which one makes more sense for you..." },
            ].map((item, i) => (
              <div key={i} className="rounded-xl overflow-hidden border" style={{ borderColor: '#DDDDDD' }}>
                <div className="p-4 flex items-start gap-3" style={{ backgroundColor: '#F5F5F5' }}>
                  <span className="text-lg">💰</span>
                  <p className="font-semibold" style={{ color: '#000000' }}>{item.q}</p>
                </div>
                <div className="p-4 flex items-start gap-3 bg-white">
                  <Bot className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#000000' }} />
                  <p style={{ color: '#555555' }}>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl shadow-2xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #000000 0%, #333333 100%)' }}>
            <div className="px-6 py-16 sm:px-12 sm:py-20 text-center">
              <Bot className="w-16 h-16 text-white mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-white mb-6">
                Your AI Financial Advisor is Ready
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.9)' }}>
                Get instant, unbiased answers to all your financial questions. No sales calls. No pressure. Just an AI that&apos;s 100% on your side.
              </p>
              <Link
                href="/signup"
                className="inline-block px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#FFFFFF', color: '#000000' }}
              >
                Talk to the AI Agent — Free
              </Link>
            </div>
          </div>
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
              <p className="mt-2" style={{ color: '#888888' }}>
                1166 E Warner Rd<br />
                Gilbert, AZ 85296<br />
                United States
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
