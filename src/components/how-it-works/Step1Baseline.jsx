import React from "react";
import { Dna, Activity, Microscope, FlaskConical } from "lucide-react";

export default function Step1Baseline() {
  return (
    <section className="py-24 bg-[#02040A] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Left */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-[#FF4A00]"></span>
              Step 1 · Your Biological Baseline
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              We start by understanding <br />
              <span className="text-[#FF4A00]">your biology.</span>
            </h2>
            
            <p className="text-gray-400 text-lg leading-relaxed">
              Before Pryima ever tells you what to do, it listens. Your journey begins with at-home testing that builds your core biological signature:
            </p>
            
            <ul className="space-y-4">
              {[
                "1200-marker genetic blueprint (via SelfDecode)",
                "Gut microbiome insights (Biomes.world)",
                "Facial microbiome mapping (HelloBiome)",
                "Hormone, cortisol, and food sensitivity panels (myLAB Box)",
                "Optional continuous glucose monitor (Stelo) for real-time metabolic patterns"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF4A00] mt-2.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <p className="text-gray-400 text-lg leading-relaxed">
              This foundation gives Pryima a deep, long-term view of your DNA, gut, skin, hormones, and metabolism. It’s like handing your AI its first map of how your body is wired.
            </p>
            
            <div className="p-6 rounded-xl bg-[#0A0F1E] border border-[#FF4A00]/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#FF4A00]" />
              <p className="text-gray-300 italic relative z-10">
                “Pryima uses this data to build your initial ‘health fingerprint’ — a unique profile that no generic app or one-size-fits-all program can match.”
              </p>
            </div>
          </div>

          {/* Image Right */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-white/[0.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF4A00]/5 to-transparent z-0" />
              <img 
                src="https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=2669&auto=format&fit=crop"
                alt="Pryima At-Home Testing Kit"
                className="w-full h-auto object-cover relative z-10 opacity-90 hover:scale-105 transition-transform duration-500"
              />
              
              {/* Overlay Icons */}
              <div className="absolute top-6 right-6 flex flex-col gap-3 z-20">
                {[Dna, Microscope, FlaskConical].map((Icon, i) => (
                  <div key={i} className="w-10 h-10 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white shadow-lg">
                    <Icon className="w-5 h-5" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}