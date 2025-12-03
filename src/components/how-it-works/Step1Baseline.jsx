import React from "react";
import { motion } from "framer-motion";
import { Dna, FlaskConical, ScanFace, Activity } from "lucide-react";

export default function Step1Baseline() {
  return (
    <section className="py-24 bg-[#02040A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/20 text-[#00F0FF] text-sm font-medium mb-6">
              <span>Step 1 · Your Biological Baseline</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              We start by understanding your biology.
            </h2>
            
            <div className="text-gray-400 text-lg space-y-6 leading-relaxed">
              <p>
                Before Pryima ever tells you what to do, it listens. Your journey begins with at-home testing that builds your core biological signature:
              </p>
              
              <ul className="space-y-3">
                {[
                  "1200-marker genetic blueprint (via SelfDecode)",
                  "Gut microbiome insights (Biomes.world)",
                  "Facial microbiome mapping (HelloBiome)",
                  "Hormone, cortisol, and food sensitivity panels (myLAB Box)",
                  "Optional continuous glucose monitor (Stelo) for real-time metabolic patterns"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF4A00] mt-2.5 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              
              <p>
                This foundation gives Pryima a deep, long-term view of your DNA, gut, skin, hormones, and metabolism. It’s like handing your AI its first map of how your body is wired.
              </p>
            </div>
            
            <div className="mt-8 p-6 rounded-xl bg-white/5 border border-white/10 border-l-4 border-l-[#FF4A00]">
              <p className="text-gray-300 text-sm">
                <strong className="text-white block mb-1">Unique Health Fingerprint</strong>
                Pryima uses this data to build your initial 'health fingerprint' — a unique profile that no generic app or one-size-fits-all program can match.
              </p>
            </div>
          </motion.div>

          {/* Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FF4A00]/10 to-transparent rounded-3xl blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1579165466741-7f35a4755657?auto=format&fit=crop&w=800&q=80" 
                alt="Pryima Test Kits" 
                className="w-full aspect-[4/3] object-cover"
              />
              
              {/* Floating Icons Overlay */}
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full p-8">
                <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
                    <div className="bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10 flex flex-col items-center gap-2">
                        <Dna className="text-[#00F0FF] w-8 h-8" />
                        <span className="text-white text-xs font-medium">Genetics</span>
                    </div>
                    <div className="bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10 flex flex-col items-center gap-2">
                        <FlaskConical className="text-[#FF4A00] w-8 h-8" />
                        <span className="text-white text-xs font-medium">Hormones</span>
                    </div>
                    <div className="bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10 flex flex-col items-center gap-2">
                        <Activity className="text-[#00F0FF] w-8 h-8" />
                        <span className="text-white text-xs font-medium">Metabolism</span>
                    </div>
                    <div className="bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10 flex flex-col items-center gap-2">
                        <ScanFace className="text-[#FF4A00] w-8 h-8" />
                        <span className="text-white text-xs font-medium">Microbiome</span>
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