"use client";

import { Battery, SignalHigh, Wifi } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 text-black">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 h-[600px]">
        {/* Status Bar */}
        <div className="flex items-center justify-between mb-6 text-sm font-medium">
          <span>9:41</span>
          <div className="flex items-center gap-2">
            <SignalHigh size={18} />
            <Wifi size={18} />
            <Battery size={18} />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-center mb-6 mt-20">
          Forgot Password
        </h1>
        <p className="text-center">
          No worries! Enter your email address below and we will send you a code
          to reset password.
        </p>

        {/* Email */}
        <div className="mb-4 mt-10">
          <label htmlFor="terms" className="text-sm font-medium text-gray-700">
            E-mail
          </label>
          <div className="relative mt-1">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full pl-2 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        {/* Password */}

        {/* Login Button */}
        <div className="mt-50">
          <Link
            href="/verify"
            className="w-full py-2 rounded-full bg-[#2B8761] text-white font-semibold hover:bg-green-700 transition p-5 text-center ml-20"
          >
            Send Reset Instruction
          </Link>
        </div>
        {/* Divider */}
      </div>
    </div>
  );
}
