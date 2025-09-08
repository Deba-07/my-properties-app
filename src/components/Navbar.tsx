"use client";

import { useEffect, useState } from "react";
import { Search, X } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

interface NavbarProps {
  onSearch: (query: string) => void;
}

export default function Navbar({ onSearch }: NavbarProps) {
  const [query, setQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-white/70 shadow-lg"
          : "backdrop-blur-none bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-md">
            P
          </div>
          <span className="text-xl font-bold text-gray-800">PropMarket</span>
        </Link>

        {/* Desktop Search Bar */}
        <div className="hidden md:flex flex-1 justify-center px-6">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              value={query}
              onChange={handleInput}
              placeholder="Search properties..."
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 
                focus:ring-2 focus:ring-indigo-500 focus:outline-none shadow-sm
                text-gray-900 placeholder-gray-400 bg-white/70 backdrop-blur-md"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
        </div>

        {/* Right Actions (desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <button className="px-4 py-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition">
            Login
          </button>
          <button className="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition shadow">
            Sign Up
          </button>
        </div>

        {/* Mobile Search Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileSearchOpen((prev) => !prev)}
            className="p-2 rounded-full hover:bg-gray-100 transition"
          >
            {mobileSearchOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Search className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {mobileSearchOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="md:hidden px-6 pb-4"
        >
          <div className="relative w-full">
            <input
              type="text"
              value={query}
              onChange={handleInput}
              placeholder="Search properties..."
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 
                focus:ring-2 focus:ring-indigo-500 focus:outline-none shadow-sm
                text-gray-900 placeholder-gray-400 bg-white/70 backdrop-blur-md"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
