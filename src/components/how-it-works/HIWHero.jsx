import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Activity, Dna } from "lucide-react";
import { motion } from "framer-motion";

export default function HIWHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-[#02040A] overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#02040A] via-transparent to-[#02040A] z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content - Desktop Right for Image, so text is Left? 
             User said: "On the right side (desktop), include a hero illustration."
             So text is Left.
          */}
          <div className="order-2 lg:order-1">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight mb-6">
              How Pryima <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4A00] to-cyan-400">
                Learns You
              </span> <br />
              Over Time
            </h1>
            
            <h2 className="text-xl md:text-2xl text-gray-300 font-light mb-8 leading-relaxed">
              A living AI health twin that becomes more accurate, more personal, and more effective every week.
            </h2>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl">
              Pryima isn’t a static dashboard. It’s a self-advancing, self-adapting health intelligence system built on a custom-trained Anthropic model that continuously learns your biology, your behaviors, and your responses. The longer you use it, the more it feels like a digital twin that truly understands you.
            </p>
            
            <div className="flex flex-wrap gap-6 items-center">
              <Link to="/signup">
                <button className="px-8 py-4 bg-[#FF4A00] hover:bg-[#FF6B00] text-white rounded-full font-semibold transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,74,0,0.3)] flex items-center gap-2">
                  See the Journey <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <Link to="/technology" className="text-gray-400 hover:text-white transition-colors border-b border-gray-700 hover:border-white pb-1">
                Why our AI is different
              </Link>
            </div>
          </div>

          {/* Hero Image - Right Side */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-cyan-500/10 bg-[#0A0F1E]/50 backdrop-blur-xl">
               <img 
                 src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
                 alt="Futuristic Health OS Interface"
                 className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700"
               />
               {/* Overlay UI Mockup hints */}
               <div className="absolute inset-0 bg-gradient-to-tr from-[#02040A]/80 via-transparent to-cyan-900/20 pointer-events-none" />
               
               <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/60 backdrop-blur-md rounded-xl border border-white/10 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Brain className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-cyan-400 font-mono uppercase tracking-widest">System Status</div>
                    <div className="text-white font-semibold">Neural Model Active • Learning Phase</div>
                  </div>
               </div>
            </div>
            
            {/* Glow Effects */}
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#FF4A00]/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
          </div>
          
        </div>
      </div>
    </section>
  );
}