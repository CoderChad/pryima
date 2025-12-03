import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Activity } from "lucide-react";

export default function HIWHero() {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#02040A] to-[#050814] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#00F0FF]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF4A00]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
              How Pryima <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#FF4A00]">
                Learns You Over Time
              </span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-gray-300 mb-6 font-light leading-relaxed">
              A living AI health twin that becomes more accurate, more personal, and more effective every week.
            </h2>
            
            <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Pryima isn’t a static dashboard. It’s a self-advancing, self-adapting health intelligence system built on a custom-trained Anthropic model that continuously learns your biology, your behaviors, and your responses. The longer you use it, the more it feels like a digital twin that truly understands you.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button className="bg-[#FF4A00] hover:bg-[#FF6B00] text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-[#FF4A00]/20 transition-all hover:scale-105">
                See the Journey
              </Button>
              <Link to="/technology" className="text-gray-400 hover:text-[#00F0FF] flex items-center gap-2 transition-colors group">
                Why our AI is different
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Hero Illustration */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl p-2 shadow-2xl shadow-[#00F0FF]/10">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00F0FF]/5 to-transparent rounded-3xl pointer-events-none"></div>
              
              <div className="relative rounded-2xl overflow-hidden aspect-square bg-[#02040A]">
                 <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop" 
                  alt="AI Health Command Center" 
                  className="w-full h-full object-cover opacity-60 mix-blend-screen"
                />
                
                <div className="absolute top-8 left-8 right-8 bottom-8 border border-[#00F0FF]/30 rounded-xl p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <Activity className="text-[#00F0FF] w-6 h-6" />
                      <span className="text-[#00F0FF] font-mono text-sm tracking-widest">SYSTEM ACTIVE</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#FF4A00] rounded-full animate-pulse"></div>
                      <span className="text-gray-400 text-xs">LIVE DATA</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: "0%" }}
                        animate={{ width: "75%" }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                        className="h-full bg-[#00F0FF]"
                      ></motion.div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 font-mono">
                      <span>GENETICS</span>
                      <span>METABOLISM</span>
                      <span>RECOVERY</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}