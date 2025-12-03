import React from "react";
import { motion } from "framer-motion";
import { Dna, Activity, Watch, Zap, Brain, Database, Lock, ShieldCheck } from "lucide-react";

export default function TechHero() {
  return (
    <section className="relative pt-32 pb-20 bg-[#02040A] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69156bec7bead1484355f40e/83df75c6a_IMG_0167.jpg" 
          alt="DNA Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#02040A] via-[#02040A]/90 to-[#02040A]"></div>
      </div>
      
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-[#FF4A00]/30 bg-[#FF4A00]/10 backdrop-blur-md">
          <span className="text-[#FF4A00] font-mono text-sm">Pryima Intelligence Engine</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
          How Pryima's AI <br />
          <span className="bg-gradient-to-r from-[#FF4A00] to-[#FF6B00] bg-clip-text text-transparent">
            Actually Works
          </span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Not just a report. A living, breathing operating system that learns your biology over time using custom models built on Anthropic architecture.
        </p>
      </div>
    </section>
  );
}