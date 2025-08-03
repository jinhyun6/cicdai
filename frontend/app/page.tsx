import EmailForm from '@/components/EmailForm';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="text-center max-w-3xl mx-auto">
          {/* Hero Section */}
          <div className="mb-4">
            <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">
              🚀 Beta Launch - Limited Access
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            CI/CD Setup in
            <span className="text-blue-600"> 30 Seconds</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Automate your GitHub Actions workflow setup in minutes, not hours.
            No more environment variable hell. No more configuration nightmares.
          </p>

          {/* Problem Statement */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-12">
            <h3 className="text-lg font-semibold text-red-900 mb-3">Sound Familiar?</h3>
            <ul className="space-y-2 text-sm text-red-700">
              <li>• Spending hours configuring GitHub Actions workflows</li>
              <li>• Managing secrets across GitHub, Vercel, Railway, AWS...</li>
              <li>• Debugging failed deployments due to missing env variables</li>
              <li>• Copy-pasting the same configs for every new project</li>
            </ul>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">One-Click Setup</h3>
              <p className="text-sm text-gray-600">Upload your workflow, we handle all the configuration</p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Auto Environment Variables</h3>
              <p className="text-sm text-gray-600">Automatically configure secrets and variables across platforms</p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Secure & Reliable</h3>
              <p className="text-sm text-gray-600">Your secrets are encrypted and never stored</p>
            </div>
          </div>

          {/* Email Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Join the Beta
            </h2>
            <p className="text-gray-600 mb-6">
              Be among the first to automate your CI/CD setup effortlessly
            </p>
            
            <EmailForm />
          </div>

          {/* Footer */}
          <p className="mt-12 text-sm text-gray-500">
            Currently frustrated with CI/CD setup? Tell us your pain points in the feedback.
          </p>
        </div>
      </div>
    </main>
  );
}
