import React from "react";
import { motion } from "framer-motion";
import { Dna, Activity, Watch, Zap, Brain, Database, Lock, ShieldCheck } from "lucide-react";

export default function TechHero() {
  return (
    <section className="relative pt-32 pb-20 bg-[#02040A] overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
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