import React from "react";
import { Watch, Activity, Brain, Zap } from "lucide-react";

export default function HIWProcessSteps() {
  const steps = [
    {
      number: "01",
      title: "Connect Your Devices & Profile",
      description: "Pryima instantly connects to your Apple Watch, fitness apps, sleep trackers, and any wearable you use. This gives the AI real-time access to heart rate, HRV, sleep cycles, strain, glucose trends, movement, and stress indicators.",
      image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&q=80&w=800",
      icon: Watch
    },
    {
      number: "02",
      title: "Complete Your Biological Baseline",
      description: "Your genetics, blood biomarkers, gut microbiome, and facial microbiome create your initial biological profile. Pryima uses white-labeled partners to collect precise molecular data.",
      image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=800",
      icon: Activity
    },
    {
      number: "03",
      title: "The AI Learns Your Patterns",
      description: "As your data streams in, Pryima’s AI begins mapping your metabolic rhythms, recovery cycles, hormonal behavior, gut fluctuations, and lifestyle impacts. This creates your personalized ‘Health Model’.",
      image: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?auto=format&fit=crop&q=80&w=800",
      icon: Brain
    },
    {
      number: "04",
      title: "Actionable, Precision Recommendations",
      description: "Pryima takes everything it has learned—DNA, biomarkers, wearables, habits—and produces hyper-personalized daily guidance. Nutrition, recovery, supplements, workouts, skincare, stress management… all optimized in real time.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      icon: Zap
    }
  ];

  return (
    <section className="py-20 bg-[#050814]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {steps.map((step, index) => (
            <div key={index} className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FF4A00]/10 flex items-center justify-center text-[#FF4A00]">
                    <step.icon size={24} />
                  </div>
                  <span className="text-5xl font-bold text-white/10">{step.number}</span>
                </div>
                <h3 className="text-3xl font-bold text-white">{step.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed">{step.description}</p>
              </div>
              <div className="flex-1">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-[#FF4A00]/10 group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#FF4A00]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                    <img src={step.image} alt={step.title} className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}