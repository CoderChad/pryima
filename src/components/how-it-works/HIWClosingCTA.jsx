import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function HIWClosingCTA() {
  return (
    <section className="py-20 bg-[#02040A] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 leading-relaxed">
          Every day, Pryima becomes more you — so every decision can move you closer to the life and health you’re actually built for.
        </h2>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link to="/signup" className="px-8 py-4 bg-gradient-to-r from-[#FF4A00] to-[#FF6B00] hover:from-[#FF5A10] hover:to-[#FF7B10] text-white font-bold rounded-xl shadow-lg shadow-[#FF4A00]/30 transition-all hover:scale-105 flex items-center gap-2">
            Start My Pryima Journey
            <ArrowRight size={18} />
          </Link>
          
          <Link to="/technology" className="text-gray-400 hover:text-white transition-colors text-sm border-b border-transparent hover:border-white pb-0.5">
            Learn more about our AI technology
          </Link>
        </div>
      </div>
    </section>
  );
}