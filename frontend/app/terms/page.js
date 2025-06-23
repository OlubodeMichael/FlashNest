import Link from "next/link";

export default function Terms() {
  return (
    <div className="min-h-screen bg-white font-[family-name:var(--font-geist-sans)] text-gray-900">
      {/* Navigation - Matching main page style */}
      <nav className="bg-white/95 backdrop-blur-sm py-4 px-6 fixed w-full z-50 border-b border-gray-100 shadow-sm">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="h-9 w-9 bg-yellow-400 rounded-lg flex items-center justify-center shadow-sm">
              <span className="font-bold text-sm">FN</span>
            </div>
            <span className="font-bold text-xl tracking-tight">FlashNest</span>
          </div>
          <Link
            href="/"
            className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-medium">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Header Section - Matching main page style */}
      <header className="pt-32 pb-16 px-6 md:px-8 bg-gradient-to-b from-yellow-50 to-white relative overflow-hidden">
        {/* Abstract Background Shapes - Matching main page */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-yellow-400 rounded-full filter blur-3xl"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-yellow-400 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-yellow-400 rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-8">
            <div className="inline-block mb-6 border border-yellow-300 bg-yellow-100 px-4 py-1.5 rounded-full">
              <span className="font-medium text-xs text-yellow-700">
                Terms & Conditions
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
              📄 Terms and Conditions — FlashNest
            </h1>
            <p className="text-lg text-gray-600">Effective Date: June 2025</p>
          </div>
        </div>
      </header>

      {/* Content Section */}
      <section className="py-16 px-6 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-8 text-lg">
                Welcome to FlashNest! These Terms and Conditions ("Terms")
                govern your use of our mobile and web application (collectively,
                the "Service"). By accessing or using FlashNest, you agree to be
                bound by these Terms. If you don't agree, please do not use our
                app.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                1. Who Can Use FlashNest
              </h2>
              <p className="text-gray-700 mb-3">To use FlashNest, you must:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
                <li>
                  Be at least 13 years old (or have parental consent if younger)
                </li>
                <li>
                  Provide accurate and complete information during registration
                </li>
                <li>Be responsible for all activity under your account</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                2. Your FlashNest Account
              </h2>
              <p className="text-gray-700 mb-3">You are responsible for:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>
                  Maintaining the confidentiality of your login credentials
                </li>
                <li>All activity that occurs under your account</li>
                <li>Immediately notifying us of unauthorized use</li>
              </ul>
              <p className="text-gray-700 mb-8">
                We reserve the right to suspend or terminate accounts for
                violations of these Terms.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                3. Acceptable Use
              </h2>
              <p className="text-gray-700 mb-3">You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Use FlashNest for illegal, harmful, or abusive behavior</li>
                <li>
                  Post or create flashcards that are offensive, hateful, or
                  infringe on copyrights
                </li>
                <li>
                  Use bots, scripts, or automated tools to scrape or misuse the
                  platform
                </li>
                <li>Reverse-engineer, modify, or hack our app</li>
              </ul>
              <p className="text-gray-700 mb-8">
                Violation may result in account suspension or permanent ban.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                4. Subscription & Payments
              </h2>
              <p className="text-gray-700 mb-3">
                Some features require a paid subscription ("Pro").
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>
                  Payments are processed securely via RevenueCat and the App
                  Store/Google Play
                </li>
                <li>
                  Subscriptions automatically renew unless canceled before the
                  billing date
                </li>
                <li>
                  No refunds are offered unless required by law or the app
                  store's policy
                </li>
                <li>
                  You can manage or cancel your subscription in your
                  Apple/Google settings
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                5. AI Features
              </h2>
              <p className="text-gray-700 mb-3">
                FlashNest includes AI-generated content features.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>
                  You agree not to misuse AI for unethical, harmful, or
                  misleading purposes
                </li>
                <li>
                  While we strive for accuracy, AI-generated flashcards may
                  contain errors or biases. Always verify important content
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                6. Intellectual Property
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>You own the flashcards and decks you create</li>
                <li>
                  We reserve the right to use anonymized data for research,
                  analytics, or feature improvement
                </li>
                <li>
                  FlashNest, its logo, design, code, and brand assets are our
                  property and protected by intellectual property laws
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                7. Termination
              </h2>
              <p className="text-gray-700 mb-3">
                You may stop using the app at any time. We may terminate or
                suspend access if:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>You breach these Terms</li>
                <li>You misuse our services</li>
                <li>We are required to by law</li>
              </ul>
              <p className="text-gray-700 mb-8">
                Upon termination, your access and data may be removed
                permanently.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                8. Limitation of Liability
              </h2>
              <p className="text-gray-700 mb-3">
                To the fullest extent allowed by law:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>FlashNest is provided "as is" without warranties</li>
                <li>
                  We are not liable for any indirect, incidental, or
                  consequential damages, including data loss, service
                  interruptions, or study outcomes
                </li>
                <li>You use FlashNest at your own risk</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                9. Modifications to the Service
              </h2>
              <p className="text-gray-700 mb-8">
                We may change, suspend, or discontinue any feature of the app at
                any time without notice. We may also update these Terms, and
                your continued use after changes means you accept them.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                10. Governing Law
              </h2>
              <p className="text-gray-700 mb-8">
                These Terms are governed by the laws of the State of Delaware,
                USA, without regard to conflict of laws principles.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                11. Contact Us
              </h2>
              <p className="text-gray-700 mb-4">
                If you have questions about these Terms, contact us at:
              </p>
              <p className="text-gray-700 mb-8">
                📧{" "}
                <a
                  href="mailto:support@flashnest.com"
                  className="text-yellow-600 hover:text-yellow-700 font-medium">
                  support@flashnest.com
                </a>
              </p>

              <div className="mt-16 pt-8 border-t border-gray-200 bg-gray-50 rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">
                      <strong>Last updated:</strong> June 2025
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      <strong>Contact:</strong>{" "}
                      <a
                        href="mailto:support@flashnest.com"
                        className="text-yellow-600 hover:text-yellow-700 font-medium">
                        support@flashnest.com
                      </a>
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="h-8 w-8 bg-yellow-400 rounded-lg flex items-center justify-center">
                      <span className="font-bold text-sm text-gray-900">
                        FN
                      </span>
                    </div>
                    <span className="font-bold text-gray-900">FlashNest</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Matching main page style */}
      <footer className="bg-gray-50 py-16 px-6 md:px-8 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="pt-6 border-t border-gray-200 flex flex-col md:flex-row md:justify-between items-center">
            <p className="text-gray-500 text-xs mb-4 md:mb-0">
              © 2024 FlashNest. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="/privacy"
                className="text-gray-500 hover:text-gray-700 text-xs">
                Privacy
              </a>
              <a
                href="/terms"
                className="text-yellow-600 hover:text-yellow-700 text-xs font-medium">
                Terms
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700 text-xs">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
