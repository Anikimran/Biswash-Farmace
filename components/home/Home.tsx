"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Logo from "../../public/original-117967f48ca0426a2223f137bf06aa4c.png";
import { Button } from "antd";
import Link from "next/link";

const Home = () => {
  return (
    <div className="w-full bg-[#4A8C41] py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          {/* TEXT SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <p className="text-white font-medium">
              Innovative Fintech Solutions
            </p>

            <h1 className="text-white text-2xl md:text-4xl font-semibold mt-3">
              Secure, Efficient, and <br />
              User-Friendly Financial Services
            </h1>

            <p className="text-white text-sm mt-5 max-w-md">
              Experience the future of finance with our secure, efficient, and
              user-friendly financial services.
            </p>

            <div className="flex gap-4 mt-6 justify-center md:justify-start">
              <Link href="/cart">
                <Button type="primary" size="large">
                  Get Started
                </Button>
              </Link>
              <Button size="large">Learn More</Button>
            </div>
          </motion.div>

          {/* IMAGE SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full md:w-[500px]"
          >
            <Image
              src={Logo}
              alt="Fintech illustration"
              quality={100}
              priority
              className="w-full h-auto object-contain rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
