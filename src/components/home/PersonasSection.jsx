import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function PersonasSection() {
  const personas = [
    {
      title: "Founders",
      description: "Optimize cognition, stress resilience, and energy to sustain your vision.",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=800&fit=crop",
    },
    {
      title: "Athletes",
      description: "Decode recovery markers, nutrition timing, and performance metrics.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=800&fit=crop",
    },
    {
      title: "Longevity Biohackers",
      description: "Track biological age, inflammation, and mitochondrial health.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=800&fit=crop",
    },
    {
      title: "Health Nerds",
      description: "Deep-dive into your multi-omic data and understand your biology.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=800&fit=crop",
    },
  ];

  const phoneCards = [
    { stat: "23% boost in focus", position: "top" },
    { stat: "18% faster recovery", position: "middle" },
    { stat: "5 years younger bio-age", position: "middle2" },
    { stat: "50+ biomarkers tracked", position: "bottom" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#050814] to-[#02040A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Built for </span>
            <span className="bg-gradient-to-r from-[#FF4A00] to-[#FF6B00] bg-clip-text text-transparent">
              High Performers
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-8">
            Whether you're building companies, breaking records, or breaking aging—Pryima decodes your biology.
          </p>
          <Link to="/signup">
            <Button
              variant="outline"
              className="border-2 border-[#FF4A00] text-[#FF4A00] hover:bg-[#FF4A00] hover:text-white px-8 py-3 text-lg transition-all"
            >
              Find Your Persona
            </Button>
          </Link>
        </div>

        {/* Staggered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Persona Cards */}
          {personas.map((persona, index) => (
            <div
              key={persona.title}
              className={`relative group rounded-2xl overflow-hidden border border-[#FF4A00]/30 shadow-xl hover:shadow-2xl hover:shadow-[#FF4A00]/20 transition-all duration-500 ${
                index % 2 === 0 ? "lg:mt-0" : "lg:mt-12"
              }`}
              style={{ height: "400px" }}
            >
              <img
                src={persona.image}
                alt={persona.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                style={{ filter: "grayscale(40%) sepia(20%) hue-rotate(-10deg) saturate(130%)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-white to-[#FF4A00] bg-clip-text text-transparent">
                  {persona.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">{persona.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Phone Cards with Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phoneCards.map((card, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden border border-[#FF4A00]/30 bg-black/40 backdrop-blur-md shadow-xl p-6 hover:shadow-2xl hover:shadow-[#FF4A00]/20 transition-all duration-500"
            >
              <div className="flex flex-col items-center justify-center h-full min-h-[200px]">
                <div className="w-20 h-32 mb-4 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-[#FF4A00]/30 overflow-hidden">
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_69156ba898a329326e2742c5/5780c4f0e_mockup.png"
                    alt="Dashboard preview"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <p className="text-xl font-bold text-[#FF4A00] text-center">{card.stat}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}