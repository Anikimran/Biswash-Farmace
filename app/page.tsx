import About from "@/components/about/About";
import Home from "@/components/home/Home";
import Contact from "@/components/contact/Contact";

import React from "react";

const page = () => {
  return (
    <div>
      <Home />
      <About />

      <Contact />
    </div>
  );
};

export default page;
