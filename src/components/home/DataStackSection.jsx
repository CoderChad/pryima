import React from "react";
import { Dna, Activity, Apple, Watch, Microscope } from "lucide-react";

export default function DataStackSection() {
  const dataTypes = [
    { 
      icon: Dna, 
      label: "Genetics", 
      description: "DNA insights from 23andMe, Ancestry, Nebula & more",
      color: "from-[#FF4A00] to-[#FF6B00]" 
    },
    { 
      icon: Activity, 
      label: "Labs & Hormones", 
      description: "Blood panels, cortisol, thyroid, HbA1c",
      color: "from-[#FF4A00] to-[#FF6B00]" 
    },
    { 
      icon: Apple, 
      label: "Food Sensitivity", 
      description: "IgG, IgE, lectin reactivity, histamine load",
      color: "from-[#FF4A00] to-[#FF6B00]" 
    },
    { 
      icon: Watch, 
      label: "Wearables & CGM", 
      description: "Oura, Whoop, Apple, Levels, Freestyle Libre",
      color: "from-[#FF4A00] to-[#FF6B00]" 
    },
    { 
      icon: Microscope, 
      label: "Gut Microbiome", 
      description: "Viome, DayTwo, Tiny Health, uBiome",
      color: "from-[#FF4A00] to-[#FF6B00]" 
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-[#02040A]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#02040A]/80 z-10" />
        <img 
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69156bec7bead1484355f40e/6dc6b8c71_IMG_0157.jpg" 
          alt="Health Stack Background" 
          className="w-full h-full object-cover opacity-60 grayscale"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Your </span>
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#FF8C42] to-[#FF3B6E] bg-clip-text text-transparent">
                Complete AI Health Stack
              </span>
              <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF8C42] to-[#FF3B6E] rounded-full transform origin-left animate-expand-underline" />
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto mt-6">
            Five data domains. One intelligent OS.{' '}
            <span className="inline-block px-3 py-1 rounded-full bg-[#FF4A00]/20 border border-[#FF4A00]/30 text-[#FF4A00] text-sm font-semibold ml-2">
              Powered by Pryima AI
            </span>
          </p>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
          {dataTypes.map((dataType, index) => {
            const Icon = dataType.icon;
            return (
              <div
                key={index}
                className="group relative rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-7 hover:bg-white/8 transition-all duration-500 hover:-translate-y-3 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF4A00]/20 hover:border-[#FF4A00]/40 overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF8C42]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  {/* Icon wrapper */}
                  <div className="w-16 h-16 mb-5 rounded-2xl bg-[#FF4A00]/15 flex items-center justify-center group-hover:bg-[#FF4A00]/30 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-8 h-8 text-[#FF8C42] group-hover:text-white transition-colors duration-300 group-hover:animate-pulse" />
                  </div>

                  {/* Label */}
                  <h3 className="text-white font-semibold text-lg mb-2 leading-tight">
                    {dataType.label}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {dataType.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Hint */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-400">
            <span className="text-2xl mr-2">🔮</span>
            <em className="text-[#FF8C42]">Pryima AI synthesizes all 5 domains in real time</em>
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          from { transform: translate(0, 0); }
          to { transform: translate(100px, -100px); }
        }
        
        @keyframes expand-underline {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        
        .animate-expand-underline {
          animation: expand-underline 1.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
}