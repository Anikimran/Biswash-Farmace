"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactUs() {
  return (
    <section className="w-full bg-white py-20 text-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}

        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-wider text-emerald-700 bg-emerald-50 px-4 py-1 rounded-full mb-4">
            CONTACT
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Utilize our tools to develop your concepts and bring your vision to
            life. Once complete, effortlessly share your creations.
          </p>
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 3, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Info */}
            <div className="space-y-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full border">
                  <Phone className="w-5 h-5 text-gray-700" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium text-gray-800">(01312171995)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full border">
                  <Mail className="w-5 h-5 text-gray-700" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium text-gray-800">
                    mdanikimran17@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full border">
                  <MapPin className="w-5 h-5 text-gray-700" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Address</p>
                  <p className="font-medium text-gray-800 leading-relaxed">
                    Satkhita kaligonj,
                    <br />
                    zerongasa bazar
                  </p>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-md border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full rounded-md border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full rounded-md border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full rounded-md border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md bg-emerald-700 px-6 py-3 text-white font-medium hover:bg-emerald-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
