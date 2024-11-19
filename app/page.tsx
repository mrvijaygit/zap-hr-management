"use client";

import Head from 'next/head';
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>HR Login</title>
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row overflow-hidden max-w-5xl w-full">
          {/* Left Section */}
          
          {/* <div className="relative p-10 md:w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('/background.jpeg')" }}>
            <div className="absolute inset-0 bg-blue-50 opacity-75"></div>
            <div className="relative z-10">
              <h1 className="text-3xl font-bold mb-4 text-blue-800">Step into the Future of HR</h1>
              <p className="text-gray-600">
                The complete HR suite to help enterprises elevate People, Profit, and Planet.
              </p>
              <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                Discover More!
              </button>
            </div>
          </div> */}

          <div className="relative p-10 md:w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('/background.jpeg')" }}>
            <div className="absolute inset-0 bg-blue-50 opacity-15"></div> {/* Optional overlay */}
          </div>
          
          {/* Right Section */}
          <div className="p-8 md:w-1/2 text-black">
            <div className="flex flex-col items-center">
              <img src="/logo.jpeg" alt="Logo" className="w-32 mb-4" />
              <h2 className="text-xl text-black font-semibold mb-6">Login</h2>
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
                <label className="block text-gray-600 mb-2">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex items-center justify-between mt-4">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                  <span className="ml-2 text-gray-600">Remember Me</span>
                </label>
                <a href="/pages/forgot_pin" className="text-blue-500 text-sm">Forgot Password?</a>
              </div>
              <button
                onClick={() => router.push("/pages/dashboard")}
                type="submit"
                className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mt-4"
              >
                Login
              </button>
              <div className="flex space-x-4 mt-6">
                <button className="w-1/2 py-2 bg-gray-100 text-blue-500 rounded-md hover:bg-gray-200">Punch In</button>
                <button className="w-1/2 py-2 bg-gray-100 text-blue-500 rounded-md hover:bg-gray-200">Punch Out</button>
              </div>
              <div className='flex justify-center items-center'>
                <a href="/pages/signup" className="text-blue-500 text-sm">New to Zap? Create an account</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
