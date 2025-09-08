"use client";

import properties from "@/data/properties.json";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

interface Props {
  params: { id: string };
}

export default function PropertyDetail({ params }: Props) {
    // Carousel setup
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  
    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const property = properties.find((p) => p.id === Number(params.id));

  if (!property) return notFound();


  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-2xl w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-indigo-100"
      >
        {/* Carousel */}
        <div className="relative">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {property.images.map((src: string, idx: number) => (
                <motion.div
                  key={idx}
                  className="flex-[0_0_100%] h-80 relative"
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <img
                    src={src}
                    alt={`${property.title} image ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Carousel controls */}
          <button
            onClick={scrollPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 backdrop-blur-md shadow-md hover:bg-white transition"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 backdrop-blur-md shadow-md hover:bg-white transition"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 relative">

          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            {property.title}
          </h1>
          <p className="text-gray-600 mt-1 flex items-center gap-1">
            📍 {property.location}
          </p>
          <p className="text-2xl font-bold mt-3 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            {property.price}
          </p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-4 text-gray-700 leading-relaxed"
          >
            {property.description}
          </motion.p>

          {/* Call to Action */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-md transition"
          >
            Book a Visit
          </motion.button>
        </div>
      </motion.div>
    </main>
  );
}
