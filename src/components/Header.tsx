"use client";

import { useState } from "react";
import Link from "next/link";
import NextImage from "next/image";
import { Menu, X, GraduationCap } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Register", href: "#register" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed w-full bg-white/100 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            {/* <GraduationCap className="h-8 w-8 text-primary" /> */}
            <NextImage
              src="/photo_2025-11-22_09-49-24 (1).ico"
              alt="Elite Education Logo"
              width={150}
              height={40}
              className="h-16 w-auto object-contain"
              priority
            />
            <span className="font-bold text-2xl text-green-600 tracking-tight">
              Elite Education
            </span>
          </div>

          {/* Desktop Navigation */}
          {/* <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-primary font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div> */}


          {/* Call Us button */}
          <a
            href="tel:+91 9061248661"
            className="
              absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0
              bg-white
              border border-black
              text-black
              hover:bg-black
              hover:text-white
              rounded-lg
              transition-colors
              duration-200
              py-2 px-4
              text-sm md:text-base
              whitespace-nowrap
            "
          >
            Call Us +91 9061248661
          </a>


          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
