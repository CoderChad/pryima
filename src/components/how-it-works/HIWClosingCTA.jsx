import React from "react";
import { Link } from "react-router-dom";

export default function HIWClosingCTA() {
  return (
    <section className="py-20 bg-[#02040A] border-t border-white/10">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
          Every day, Pryima becomes more <span className="text-[#FF4A00]">you</span> — so every decision can move you closer to the life and health you’re actually built for.
        </h2>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link to="/signup">
            <button className="px-8 py-4 bg-[#FF4A00] hover:bg-[#FF6B00] text-white text-lg font-bold rounded-full transition-all hover:scale-105 shadow-lg shadow-[#FF4A00]/30">
              Start My Pryima Journey
            </button>
          </Link>
          
          <Link to="/technology" className="text-gray-400 hover:text-white transition-colors underline underline-offset-4">
            Learn more about our AI technology
          </Link>
        </div>
      </div>
    </section>
  );
}