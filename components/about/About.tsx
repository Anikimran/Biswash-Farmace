"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Logo from "../../public/young-female-pharmacist-giving-prescription-260nw-2106885479.jpg";
import { Check } from "lucide-react";

const About = () => {
  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 3, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col md:flex-row items-center gap-10"
        >
          {/* Image */}
          <Image
            src={Logo}
            alt="Pharmacist"
            width={500}
            height={500}
            className="rounded-xl shadow-lg"
            priority
          />

          {/* Text */}
          <div>
            <button className="mb-4 font-bold bg-green-500 text-white px-4 py-1 rounded">
              ABOUT US
            </button>

            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Experience the future of finance <br />
              with our secure, efficient, and <br />
              user-friendly financial services
            </h2>

            <p className="text-gray-600 leading-relaxed">
              We provide high quality medicines and professional healthcare{" "}
              <br />
              support. Our mission is to ensure safe, reliable and affordable{" "}
              <br />
              pharmacy services for everyone.
            </p>
            <div className="text-black mt-5">
              <h1>Key Values and Vision</h1>
              <div className="flex items-center gap-2 mt-3">
                <Check
                  size={15}
                  className="text-white border-2 border-green-500 bg-green-500"
                />
                <p>High quality medicines</p>
              </div>
              <div className="flex items-center gap-2 ">
                <Check
                  size={15}
                  className="text-white border-2 border-green-500 bg-green-500"
                />
                <p>High quality medicines</p>
              </div>
              <div className="flex items-center gap-2">
                <Check
                  size={15}
                  className="text-white border-2 border-green-500 bg-green-500"
                />
                <p>High quality medicines</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
