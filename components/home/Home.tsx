"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Logo from "../../public/Screenshot 2025-12-16 124810.png";
import { Button } from "antd";
import Link from "next/link";

const Home = () => {
  return (
    <div className="w-full px-16 py-16 mx-auto bg-white h-full">
      <div className="max-w-7xl mx-auto md:px-10">
        <div className="flex gap-10 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 3, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="text-green-500">Innovative Fintech Solutions</p>

              <h1 className="text-black md:text-4xl text-2xl sm:whitespace-nowrap">
                Secure, Efficient, and User-Friendly <br />
                Financial Services
              </h1>

              <p className="text-black text-sm mt-5">
                Experience the future of finance with our secure, efficient, and
                user-friendly financial services.
              </p>

              <div className="flex gap-5 text-black mt-6">
                <Link href="/cart">
                  {" "}
                  <Button type="primary">Get Started</Button>
                </Link>
                <Button>Learn More</Button>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 3, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="sm:w-[400px] md:w-[500px]">
              <Image src={Logo} alt="Logo" quality={100} />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
