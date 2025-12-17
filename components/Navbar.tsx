"use client";

import Image from "next/image";
import Logo from "../public/Screenshot 2025-12-16 112922.png";
import { Button, Dropdown, Switch, Drawer } from "antd";
import type { MenuProps } from "antd";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { Modal } from "antd";

const dropdownItems: MenuProps["items"] = [
  { key: "/products", label: <Link href="/products">Products</Link> },
  { key: "/services", label: <Link href="/services">Services</Link> },
  { key: "/offers", label: <Link href="/offers">Offers</Link> },
];

const Navbar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const navItemClass = (path: string) =>
    `cursor-pointer ${
      pathname === path ? "text-red-600" : "text-gray-600"
    } hover:text-red-600`;

  return (
    <header className="w-full bg-gray-200 shadow-2xl sticky top-0 z-50 ">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Modal
          title="Biswash Farmace"
          closable={{ "aria-label": "Custom Close Button" }}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p className="text-md">NAME: MD ANIK IMRAN</p>
          <p className="text-md">PHONE:01312171995</p>
          <p className="text-md">GMAIL:mdanikimran17@gmail.com</p>
        </Modal>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src={Logo} alt="Logo" width={45} height={45} />
          <h1 className="font-bold text-2xl">
            <span className="text-red-600">
              <span className="text-green-800">B</span>iswash
            </span>{" "}
            <span className="text-blue-600">Farmace</span>
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center font-bold">
          <li className={navItemClass("/")}>
            <Link href="/">Home</Link>
          </li>

          <li className={navItemClass("/about")}>
            <Link href="/about">About</Link>
          </li>

          <li>
            <Dropdown menu={{ items: dropdownItems }} trigger={["hover"]}>
              <button
                className={`flex items-center gap-1 ${
                  ["/products", "/services", "/offers"].includes(pathname)
                    ? "text-red-600"
                    : "text-gray-600"
                } hover:text-red-600`}
              >
                Menu <ChevronDown size={18} />
              </button>
            </Dropdown>
          </li>

          <li className={navItemClass("/contact")}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Button onClick={showModal}>Get Started</Button>

          <Link
            href="/login"
            className="border border-blue-600 bg-blue-600 px-2 p-1 rounded"
          >
            Login
          </Link>

          <Switch checkedChildren="🌙" unCheckedChildren="☀️" />
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setOpen(true)}>
            <Menu size={28} className="text-blue-600" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        title="Menu"
        placement="right"
        open={open}
        onClose={() => setOpen(false)}
        closeIcon={<X />}
      >
        {[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
          { name: "Products", path: "/products" },
          { name: "Services", path: "/services" },
          { name: "Offers", path: "/offers" },
          { name: "Contact", path: "/contact" },
        ].map((item) => (
          <Link
            key={item.path}
            href={item.path}
            onClick={() => setOpen(false)}
            className={`block py-2 text-lg font-semibold ${
              pathname === item.path ? "text-red-600" : "text-gray-700"
            }`}
          >
            {item.name}
          </Link>
        ))}

        <Button type="primary" block className="mt-4">
          Get Started
        </Button>
        <Button block className="mt-2">
          Login
        </Button>

        <div className="flex items-center justify-between mt-4">
          <span>Dark Mode</span>
          <Switch checkedChildren="🌙" unCheckedChildren="☀️" />
        </div>
      </Drawer>
    </header>
  );
};

export default Navbar;
