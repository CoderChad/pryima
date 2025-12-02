import React from "react";
import { motion } from "framer-motion";
import { Beaker, Dna } from "lucide-react";

export default function Step1Baseline() {
  return (
    <section className="py-24 bg-[#02040A] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-block px-3 py-1 mb-4 rounded bg-white/5 border border-white/10 text-cyan-400 text-xs font-mono uppercase tracking-wider">
              Step 1 · Your Biological Baseline
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              We start by understanding <br/>
              <span className="text-[#FF4A00]">your biology.</span>
            </h2>
            
            <div className="prose prose-invert max-w-none mb-8 text-gray-400 text-lg leading-relaxed">
              <p className="mb-4">
                Before Pryima ever tells you what to do, it listens. Your journey begins with at-home testing that builds your core biological signature:
              </p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  "1200-marker genetic blueprint (via SelfDecode)",
                  "Gut microbiome insights (Biomes.world)",
                  "Facial microbiome mapping (HelloBiome)",
                  "Hormone, cortisol, and food sensitivity panels (myLAB Box)",
                  "Optional continuous glucose monitor (Stelo) for real-time metabolic patterns"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FF4A00] flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                This foundation gives Pryima a deep, long-term view of your DNA, gut, skin, hormones, and metabolism. It’s like handing your AI its first map of how your body is wired.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-r from-cyan-500/10 to-transparent border-l-4 border-cyan-500">
              <p className="text-cyan-100 italic">
                “Pryima uses this data to build your initial ‘health fingerprint’ — a unique profile that no generic app or one-size-fits-all program can match.”
              </p>
            </div>
          </div>

          {/* Image Content */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-2xl bg-white/5 border border-white/10 p-8 aspect-square flex items-center justify-center overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Abstract Kit Representation */}
              <img 
                src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2030&auto=format&fit=crop" 
                alt="Pryima Test Kits" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:scale-105 transition-transform duration-700"
              />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative bg-black/60 backdrop-blur-xl p-8 rounded-full border border-white/20 shadow-2xl">
                  <Dna className="w-12 h-12 text-cyan-400" />
                </div>
              </div>

              {/* Floating Badges */}
              <div className="absolute top-10 right-10 bg-black/80 backdrop-blur px-3 py-1 rounded border border-[#FF4A00]/30 text-[#FF4A00] text-xs font-bold">
                GENETICS
              </div>
              <div className="absolute bottom-10 left-10 bg-black/80 backdrop-blur px-3 py-1 rounded border border-purple-500/30 text-purple-400 text-xs font-bold">
                HORMONES
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}