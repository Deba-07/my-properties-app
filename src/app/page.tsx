"use client";

import { useState } from "react";
import propertiesData from "@/data/properties.json";
import PropertyCard from "@/components/PropertyCard";
import { motion, Variants } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProperties = propertiesData.filter((p) =>
    [p.title, p.location].some((field) =>
      field.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-purple-50">
      <Navbar onSearch={setSearchQuery} />

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-12 mt-8"
      >
        Available <span className="text-indigo-600">Properties</span>
        <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mt-4 rounded-full"></div>
      </motion.h1>

      {/* Property Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-6 pb-16"
      >
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <motion.div key={property.id} variants={item}>
              <PropertyCard property={property} />
            </motion.div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No properties found.
          </p>
        )}
      </motion.div>
    </main>
  );
}
