"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface Property {
  id: number;
  title: string;
  price: string;
  location: string;
  image?: string; 
  images?: string[];
}

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link href={`/properties/${property.id}`}>
        <div className="group relative rounded-3xl overflow-hidden bg-white/90 backdrop-blur-lg border border-gray-200 hover:border-transparent hover:bg-white shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
          {/* Image with overlay */}
          <div className="relative">
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-56 object-cover rounded-t-3xl group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-70 group-hover:opacity-60 transition duration-500" />
            {/* Price Badge */}
            <span className="absolute bottom-3 left-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-md">
              {property.price}
            </span>
          </div>

          {/* Content */}
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
              {property.title}
            </h2>
            <p className="text-gray-500 mt-1">{property.location}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
