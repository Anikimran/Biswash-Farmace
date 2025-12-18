"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Logo from "../../public/young-female-pharmacist-giving-prescription-260nw-2106885479.jpg";
import { Check } from "lucide-react";

const About = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Image */}
            <div className="w-full md:w-1/2">
              <Image
                src={Logo}
                alt="Pharmacist"
                className="rounded-2xl shadow-xl w-full h-auto"
                priority
              />
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2">
              <button className="mb-3 text-xs md:text-sm font-semibold bg-green-500 text-white px-4 py-1 rounded-full">
                ABOUT US
              </button>

              <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-3 text-gray-800 leading-snug">
                Experience the future of healthcare with our secure and reliable
                pharmacy services
              </h2>

              {/* 4 line on mobile */}
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-5 line-clamp-4 md:line-clamp-none">
                We provide high quality medicines and professional healthcare
                support. Our mission is to ensure safe, reliable and affordable
                pharmacy services for everyone across all communities with
                trusted medical solutions.
              </p>

              <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-3">
                Key Values & Vision
              </h3>

              <div className="space-y-3">
                {[
                  "High quality medicines",
                  "Trusted healthcare support",
                  "Affordable pharmacy services",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-green-500">
                      <Check size={14} className="text-white" />
                    </span>
                    <p className="text-sm md:text-base text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
