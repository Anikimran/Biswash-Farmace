"use client";

import { Battery, Eye, EyeOff, SignalHigh, Wifi } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

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

        <h1 className="text-2xl font-bold text-center mb-6 mt-20 text-black">
          Login
        </h1>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            E-mail
          </label>
          <div className="relative mt-1">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full pl-2 pr-3 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        {/* Password */}
        <div className="mb-2 text-black">
          <label className="text-sm font-medium text-gray-700">Password</label>
          <div className="relative mt-1">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full pl-2 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        <div className="text-right mb-5">
          <Link href="/forgot" className="text-[#3C9AFB] text-md">
            Forgot Password?
          </Link>
        </div>

        {/* Login Button */}
        <button className="w-full py-2 text-black rounded-full bg-green-600 text-white font-semibold hover:bg-green-700 transition">
          Login
        </button>

        {/* Divider */}
        <div className="my-6 text-center text-sm text-gray-400 mt-20">
          or login with
        </div>

        {/* Google Button */}
        <button className="w-full flex items-center justify-center gap-2 py-2 border rounded-full hover:bg-gray-50 transition ">
          <Image
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            width={20}
            height={20}
          />
          <span className="font-medium text-black">Login with Google</span>
        </button>
      </div>
    </div>
  );
}
