import EmailForm from '@/components/EmailForm';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="text-center max-w-3xl mx-auto">
          {/* Hero Section */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Turn Your Ideas Into
            <span className="text-blue-600"> Reality</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            An innovative service is launching soon. 
            Be the first to know and get exclusive early access.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Fast Launch</h3>
              <p className="text-sm text-gray-600">Get started instantly without complex setup</p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Customizable</h3>
              <p className="text-sm text-gray-600">Perfectly tailored to your needs</p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Secure</h3>
              <p className="text-sm text-gray-600">Your data is always protected</p>
            </div>
          </div>

          {/* Email Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Get Early Access
            </h2>
            <p className="text-gray-600 mb-6">
              Leave your email and we'll notify you first when we launch
            </p>
            
            <EmailForm />
          </div>

          {/* Footer */}
          <p className="mt-12 text-sm text-gray-500">
            Have questions? Feel free to leave feedback below.
          </p>
        </div>
      </div>
    </main>
  );
}
