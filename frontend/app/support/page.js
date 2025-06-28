import Link from "next/link";

export default function Support() {
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
                Support & Help
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
              🚀 FlashNest Support
            </h1>
            <p className="text-lg text-gray-600">
              Need help using the app or have feedback? We're here for you.
            </p>
          </div>
        </div>
      </header>

      {/* Content Section */}
      <section className="py-16 px-6 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              {/* Contact Section */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="mr-3">📧</span>
                  Contact Us
                </h2>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <p className="text-gray-700 mb-4">
                    Have a question or need assistance? Reach out to our support
                    team:
                  </p>
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-600 font-medium">Email:</span>
                    <a
                      href="mailto:support@flashnest.app"
                      className="text-blue-600 hover:text-blue-800 underline font-medium">
                      support@flashnest.app
                    </a>
                  </div>
                  <p className="text-sm text-gray-600 mt-3">
                    We typically respond within 24 hours during business days.
                  </p>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="mr-3">📋</span>
                  Frequently Asked Questions
                </h2>

                <div className="space-y-6">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      How do I generate flashcards?
                    </h3>
                    <p className="text-gray-700">
                      Go to the Home tab, tap "Generate", and enter a topic or
                      upload text/PDF. Our AI will create personalized
                      flashcards for you.
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Is FlashNest free to use?
                    </h3>
                    <p className="text-gray-700">
                      Yes! FlashNest is free during early access. A Pro version
                      with advanced features is coming soon.
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      My flashcards aren't loading. What should I do?
                    </h3>
                    <p className="text-gray-700">
                      Make sure you're connected to the internet and try
                      restarting the app. If the issue persists, contact our
                      support team.
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      How do I create my own flashcards?
                    </h3>
                    <p className="text-gray-700">
                      You can manually create flashcards by going to the "Decks"
                      section and tapping the "+" button to add new cards.
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Can I share my flashcards with others?
                    </h3>
                    <p className="text-gray-700">
                      Currently, sharing features are in development. We're
                      working on making it easy to share decks with friends and
                      classmates.
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      How do I track my study progress?
                    </h3>
                    <p className="text-gray-700">
                      Your study progress is automatically tracked. You can view
                      your statistics and streaks in the dashboard section.
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional Resources */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="mr-3">🌐</span>
                  More Resources
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link
                    href="/privacy"
                    className="block p-4 border border-gray-200 rounded-lg hover:border-yellow-300 hover:bg-yellow-50 transition-colors">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Privacy Policy
                    </h3>
                    <p className="text-sm text-gray-600">
                      Learn how we protect your data and privacy.
                    </p>
                  </Link>
                  <Link
                    href="/terms"
                    className="block p-4 border border-gray-200 rounded-lg hover:border-yellow-300 hover:bg-yellow-50 transition-colors">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Terms & Conditions
                    </h3>
                    <p className="text-sm text-gray-600">
                      Read our terms of service and usage guidelines.
                    </p>
                  </Link>
                </div>
              </div>

              {/* Footer Message */}
              <div className="text-center pt-8 border-t border-gray-200">
                <p className="text-gray-600 mb-2">
                  Thank you for using FlashNest! 🚀
                </p>
                <p className="text-sm text-gray-500">
                  We're constantly improving based on your feedback.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
