import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function HIWFoundingMemberCTA() {
  return (
    <section className="relative py-32 bg-[#02040A] overflow-hidden flex items-center justify-center min-h-[80vh]">
        <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/60 z-10" />
            <img 
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=1200" 
                alt="Hero DNA" 
                className="w-full h-full object-cover"
            />
        </div>
        
        <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
                This Is the Future of <br /><span className="text-[#FF4A00]">Human Health.</span>
            </h2>
            <p className="text-2xl text-gray-300 mb-12 font-light">
                And it starts with one decision.
            </p>
            
            <div className="flex flex-col items-center gap-4">
                <Link to="/signup" className="group relative px-10 py-5 bg-[#FF4A00] hover:bg-[#FF5A10] text-white text-xl font-bold rounded-full transition-all hover:scale-105 shadow-xl shadow-[#FF4A00]/30 flex items-center gap-3">
                    Join the Founding Member Launch
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <span className="text-sm text-white/60 tracking-widest uppercase border-b border-white/10 pb-1">
                    Limited Presale. 100 Members Only.
                </span>
            </div>
        </div>
    </section>
  );
}