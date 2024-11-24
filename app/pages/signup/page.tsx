import Head from 'next/head';
import Link from 'next/link';

export default function Signup() {
  return (
    <>
      <Head>
        <title>HR Signup</title>
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row overflow-hidden w-full max-w-5xl mx-4 md:mx-0">
          
          {/* Left Section */}
          <div className="relative p-10 md:w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('/background.jpeg')" }}>
            <div className="absolute inset-0 bg-blue-50 opacity-15"></div> {/* Optional overlay */}
            
          </div>
          
          {/* Right Section - Signup Form */}
          <div className="p-8 md:w-1/2 flex flex-col justify-center text-black">
            <div className="flex flex-col items-center mb-6">
              <img src="/logo.jpeg" alt="Logo" className="w-32 mb-4" />
              <h2 className="text-xl text-black font-semibold">Sign Up</h2>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-600 mb-2">Company Code</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-2">Employee Code</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-2">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-2">Confirm Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mt-4"
              >
                Sign Up
              </button>
              <div className="text-center mt-4">
                <p className="text-gray-600">Already have an account? <Link href="/" className="text-blue-500">Login</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
