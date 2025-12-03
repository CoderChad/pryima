import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function HIWClosingCTA() {
  return (
    <section className="py-24 bg-[#02040A] border-t border-white/5 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#FF4A00]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-10 leading-relaxed">
          Every day, Pryima becomes more you — so every decision can move you closer to the life and health you’re actually built for.
        </h2>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link to="/signup" className="px-10 py-5 bg-gradient-to-r from-[#FF4A00] to-[#FF6B00] hover:from-[#FF5A10] hover:to-[#FF7B10] text-white text-lg font-bold rounded-xl shadow-lg shadow-[#FF4A00]/30 transition-all hover:scale-105 hover:shadow-[#FF4A00]/50 flex items-center gap-2">
            Start My Pryima Journey
            <ArrowRight size={20} />
          </Link>
          
          <Link to="/technology" className="text-gray-400 hover:text-white transition-colors text-sm border-b border-transparent hover:border-white pb-0.5">
            Learn more about our AI technology
          </Link>
        </div>
      </div>
    </section>
  );
}