import React from "react";
import { motion } from "framer-motion";

export default function CityVisual() {
  return (
    <section className="relative w-full h-[60vh] min-h-[400px] overflow-hidden bg-[#02040A]">
      {/* Image Container */}
      <div className="absolute inset-0">
        <img 
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69156bec7bead1484355f40e/369f084c5_IMG_0160.jpg" 
          alt="City Life Data" 
          className="w-full h-full object-cover opacity-60"
        />
        {/* Gradient Overlays for blending */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#02040A] via-transparent to-[#02040A]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#02040A]/80 via-transparent to-[#02040A]/80" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-2xl">
            Health in the Context of <span className="text-[#FF4A00]">Real Life</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto drop-shadow-lg">
            Your biology doesn't happen in a lab. It happens here. Amidst the stress, the movement, and the noise of the real world.
          </p>
        </motion.div>
      </div>
    </section>
  );
}