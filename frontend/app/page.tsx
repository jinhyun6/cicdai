import EmailForm from '@/components/EmailForm';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center max-w-2xl mx-auto">
          {/* Hero Section */}
          <div className="mb-4">
            <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">
              🚀 Beta Launch - Limited Access
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            CI/CD Setup in
            <span className="text-blue-600"> 30 Seconds</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 mb-8">
            Stop wasting hours on GitHub Actions configuration.
            <br />
            <span className="text-gray-500">Upload your workflow → We handle everything else</span>
          </p>

          {/* Email Form - Now the main focus */}
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 mb-8">
            <EmailForm />
          </div>

          {/* Simplified Problem Statement */}
          <div className="text-sm text-gray-500 space-y-1">
            <p>✓ Auto-configure environment variables across platforms</p>
            <p>✓ Generate GitHub Actions workflows instantly</p>
            <p>✓ Secure handling of your secrets</p>
          </div>
        </div>
      </div>
    </main>
  );
}
