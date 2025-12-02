import React from "react";
import TechHero from "../components/technology/TechHero";
import HealthGraph from "../components/technology/HealthGraph";
import AIArchitecture from "../components/technology/AIArchitecture";
import ModelUpdates from "../components/technology/ModelUpdates";
import UIShowcase from "../components/technology/UIShowcase";
import PrivacyTrust from "../components/technology/PrivacyTrust";
import BottomCTA from "../components/home/BottomCTA";

export default function Technology() {
  return (
    <div className="min-h-screen bg-[#02040A]">
      <TechHero />
      <HealthGraph />
      <AIArchitecture />
      <ModelUpdates />
      <UIShowcase />
      <PrivacyTrust />
      
      {/* Founder Vision Card */}
      <section className="py-16 bg-[#050814] border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-[#FF4A00]/20 text-center relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF4A00] to-transparent opacity-50"></div>
             <h3 className="text-sm font-mono text-[#FF4A00] mb-4 tracking-widest uppercase">Founder Vision</h3>
             <h2 className="text-2xl font-bold text-white mb-4">From Product to AI Health Lab</h2>
             <p className="text-gray-400 leading-relaxed mb-6">
               "Our long-term dream isn't just to build an app. It's to build the world's largest distributed AI health lab. By connecting thousands of biological profiles, we can discover new patterns in longevity and resilience that no clinical trial could ever detect."
             </p>
             <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-800 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" alt="Founder" className="w-full h-full object-cover grayscale" />
                </div>
                <div className="text-left">
                  <div className="text-white text-sm font-bold">The Pryima Team</div>
                  <div className="text-[#FF4A00] text-xs">Austin, TX</div>
                </div>
             </div>
          </div>
        </div>
      </section>

      <BottomCTA />
    </div>
  );
}