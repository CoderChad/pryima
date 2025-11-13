import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function BottomCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#02040A] via-[#1a0a00] to-[#02040A] relative overflow-hidden">
      {/* Ambient glow effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF4A00] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FF4A00] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-white via-[#FF4A00] to-white bg-clip-text text-transparent">
            Your Health, Decoded.
          </span>
        </h2>
        <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
          Join the founding cohort and transform how you understand your body.
        </p>
        <Link to="/signup">
          <Button className="bg-gradient-to-r from-[#FF4A00] to-[#FF6B00] hover:from-[#FF5A10] hover:to-[#FF7B10] text-white px-12 py-6 text-xl font-bold shadow-2xl shadow-[#FF4A00]/50 hover:shadow-[#FF4A00]/70 transition-all duration-300">
            Get Started Today
          </Button>
        </Link>
      </div>
    </section>
  );
}