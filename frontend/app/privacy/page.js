import Link from "next/link";

export default function Privacy() {
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
                Privacy Policy
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
              🔒 Privacy Policy — FlashNest
            </h1>
            <p className="text-lg text-gray-600">
              Effective Date: December 2024
            </p>
          </div>
        </div>
      </header>

      {/* Content Section */}
      <section className="py-16 px-6 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-8 text-lg">
                This Privacy Policy explains how FlashNest ("we", "our", "us")
                collects, uses, shares, and protects your information. By using
                our app and website, you agree to the practices described below.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                1. Information We Collect
              </h2>
              <p className="text-gray-700 mb-4">
                We collect the following types of information when you use
                FlashNest:
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                a. Personal Information
              </h3>
              <p className="text-gray-700 mb-3">
                When you create an account or interact with the app, we may
                collect:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Full name</li>
                <li>Email address</li>
                <li>Password (encrypted)</li>
                <li>Profile photo (optional)</li>
                <li>Subscription status</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                b. Usage Data
              </h3>
              <p className="text-gray-700 mb-3">
                We automatically collect certain technical data:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>IP address</li>
                <li>Device type, OS, and browser</li>
                <li>App version</li>
                <li>Features accessed, time spent, and interactions</li>
                <li>Error logs and crash data</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                c. Learning Data
              </h3>
              <p className="text-gray-700 mb-3">
                We collect the content you interact with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Created decks and flashcards</li>
                <li>AI-generated flashcards and prompts</li>
                <li>Study session history (time studied, cards reviewed)</li>
                <li>Progress metrics and streaks</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                d. Third-Party Integrations
              </h3>
              <p className="text-gray-700 mb-8">
                If you use sign-in services (Google OAuth, Apple ID), we collect
                basic profile info as permitted by those services.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                2. How We Use Your Information
              </h2>
              <p className="text-gray-700 mb-3">We use your data to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
                <li>Create and manage your account</li>
                <li>
                  Enable flashcard creation, study sessions, and AI features
                </li>
                <li>Track your study habits and personalize your experience</li>
                <li>Respond to feedback and support requests</li>
                <li>Improve performance, fix bugs, and develop new features</li>
                <li>
                  Send important updates and product news (with opt-out options)
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                3. How We Share Information
              </h2>
              <p className="text-gray-700 mb-4">
                We do <strong>not sell</strong> your personal data. However, we
                may share data with:
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                a. Service Providers
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>
                  <strong>Supabase</strong> (authentication, database, file
                  storage)
                </li>
                <li>
                  <strong>RevenueCat</strong> (subscription management)
                </li>
                <li>
                  <strong>OpenAI / DeepSeek</strong> (AI flashcard generation,
                  pseudonymized prompt data)
                </li>
                <li>
                  <strong>Expo / React Native / Sentry</strong> (error tracking
                  and analytics)
                </li>
              </ul>
              <p className="text-gray-700 mb-6">
                These partners are under strict data protection agreements.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                b. Legal Compliance
              </h3>
              <p className="text-gray-700 mb-3">
                We may disclose information if:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Required by law, regulation, subpoena, or court order</li>
                <li>Necessary to protect rights, safety, or prevent fraud</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                c. Business Transfers
              </h3>
              <p className="text-gray-700 mb-8">
                If FlashNest is involved in a merger, acquisition, or asset
                sale, your data may be transferred — we'll notify you before it
                happens.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                4. Cookies and Tracking Technologies
              </h2>
              <p className="text-gray-700 mb-3">
                We use cookies and local storage for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Authentication and session management</li>
                <li>Analytics and usage tracking</li>
                <li>Remembering your study preferences</li>
              </ul>
              <p className="text-gray-700 mb-8">
                You may adjust cookie settings via your browser, but some
                features may not work as intended.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                5. Data Retention
              </h2>
              <p className="text-gray-700 mb-3">We retain your data:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
                <li>As long as your account is active</li>
                <li>Until you request deletion</li>
                <li>
                  For a limited period after deletion (for backup and legal
                  purposes)
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                6. Data Security
              </h2>
              <p className="text-gray-700 mb-3">
                We use industry-standard security measures to protect your
                information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>End-to-end encryption where possible</li>
                <li>Secure HTTPS connections</li>
                <li>Encrypted credentials and sensitive data</li>
                <li>Access controls on our servers</li>
              </ul>
              <p className="text-gray-700 mb-8">
                Despite our efforts, no system is 100% secure. You are
                responsible for keeping your password confidential.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                7. Your Rights
              </h2>
              <p className="text-gray-700 mb-3">
                Depending on your location, you may have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Access the personal data we hold about you</li>
                <li>Correct or update your information</li>
                <li>Request deletion of your account and data</li>
                <li>Object to or restrict certain types of processing</li>
              </ul>
              <p className="text-gray-700 mb-8">
                To exercise these rights, email us at{" "}
                <a
                  href="mailto:support@flashnest.com"
                  className="text-yellow-600 hover:text-yellow-700 font-medium">
                  support@flashnest.com
                </a>
                .
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                8. Children's Privacy
              </h2>
              <p className="text-gray-700 mb-8">
                FlashNest is not intended for children under 13 without parental
                consent. We do not knowingly collect data from children under
                this age. If we learn that we've collected such data, we will
                delete it promptly.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                9. International Data Transfers
              </h2>
              <p className="text-gray-700 mb-8">
                FlashNest operates in the United States and may process data
                globally. If you are located outside the U.S., your data may be
                transferred and stored in countries with different data
                protection laws.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                10. Changes to This Policy
              </h2>
              <p className="text-gray-700 mb-8">
                We may update this Privacy Policy as we improve the app or
                comply with new laws. If the changes are significant, we'll
                notify you via email or in-app alerts.
              </p>

              <div className="mt-16 pt-8 border-t border-gray-200 bg-gray-50 rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">
                      <strong>Last updated:</strong> December 2024
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
                className="text-yellow-600 hover:text-yellow-700 text-xs font-medium">
                Privacy
              </a>
              <a
                href="/terms"
                className="text-gray-500 hover:text-gray-700 text-xs">
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
