import About from "@/components/about/About";
import Home from "@/components/home/Home";
import Contact from "@/components/contact/Contact";

import React from "react";
import Products from "@/components/Products";

const page = () => {
  return (
    <div>
      <Home />
      <About />

      <Contact />
      <Products />
    </div>
  );
};

export default page;
