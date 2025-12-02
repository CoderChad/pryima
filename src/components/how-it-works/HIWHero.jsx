import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Activity } from "lucide-react";

export default function HIWHero() {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#02040A] to-[#0A0F1E] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#00F0FF]/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-mono">
              <Activity size={14} />
              <span>Pryima AI Core</span>
            </div>
            
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                How Pryima <br/>
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Learns You Over Time
                </span>
              </h1>
              <h2 className="text-xl text-gray-300 font-light">
                A living AI health twin that becomes more accurate, more personal, and more effective every week.
              </h2>
            </div>

            <p className="text-gray-400 leading-relaxed text-lg">
              Pryima isn't a static dashboard. It's a self-advancing, self-adapting health intelligence system built on a custom-trained Anthropic model that continuously learns your biology, your behaviors, and your responses. The longer you use it, the more it feels like a digital twin that truly understands you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/signup" className="inline-flex items-center justify-center px-8 py-4 bg-[#FF4A00] hover:bg-[#FF5A10] text-white font-bold rounded-xl transition-all shadow-lg shadow-[#FF4A00]/20 group">
                See the Journey
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/technology" className="inline-flex items-center justify-center px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-xl transition-all">
                Why our AI is different
              </Link>
            </div>
          </motion.div>

          {/* Hero Image - Futuristic Interface */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#050814] shadow-2xl shadow-cyan-500/10">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-[#FF4A00]/5 pointer-events-none" />
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop" 
                alt="Futuristic Health Interface" 
                className="w-full h-auto object-cover opacity-80 hover:scale-105 transition-transform duration-700"
              />
              
              {/* Overlay UI Elements */}
              <div className="absolute top-1/4 left-8 p-4 bg-black/80 backdrop-blur-md border border-cyan-500/30 rounded-lg shadow-lg">
                <div className="text-xs text-cyan-400 font-mono mb-1">GLUCOSE PREDICTION</div>
                <div className="text-white font-bold text-lg">Stable (85-95 mg/dL)</div>
              </div>

              <div className="absolute bottom-1/4 right-8 p-4 bg-black/80 backdrop-blur-md border border-[#FF4A00]/30 rounded-lg shadow-lg text-right">
                <div className="text-xs text-[#FF4A00] font-mono mb-1">METABOLIC SCORE</div>
                <div className="text-white font-bold text-lg">Optimizing...</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}