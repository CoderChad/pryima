import React from "react";
import { Brain, Zap, Shield, Target, Users, Sparkles } from "lucide-react";

export default function WhyPryima() {
  const reasons = [
    {
      icon: Brain,
      title: "AI-Powered Intelligence",
      description: "Our advanced AI doesn't just show you data—it decodes patterns across your entire biology and translates them into actionable daily protocols.",
    },
    {
      icon: Zap,
      title: "Multi-Omic Integration",
      description: "The only platform that truly integrates genetics, labs, microbiome, wearables, and CGM data into one unified health operating system.",
    },
    {
      icon: Target,
      title: "Precision Personalization",
      description: "No generic advice. Every recommendation is tailored to your unique biological data, goals, and lifestyle.",
    },
    {
      icon: Shield,
      title: "CLIA-Certified Testing",
      description: "All lab testing is handled through certified partners, ensuring medical-grade accuracy and reliability.",
    },
    {
      icon: Users,
      title: "Founding Member Benefits",
      description: "Lock in lifetime pricing, get priority access to new features, and shape the product with direct feedback.",
    },
    {
      icon: Sparkles,
      title: "Continuous Optimization",
      description: "Track your progress over time, re-test to measure improvements, and adjust your protocols as your biology evolves.",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-[#02040A]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#02040A] via-[#02040A]/80 to-[#02040A] z-10" />
        <img 
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69156bec7bead1484355f40e/7a07fc3e6_IMG_4330.jpg" 
          alt="Background" 
          className="w-full h-full object-cover opacity-50 grayscale"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Why Use </span>
            <span className="bg-gradient-to-r from-[#FF4A00] to-[#FF6B00] bg-clip-text text-transparent">
              Pryima
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            The world's first true Health OS that turns raw health data into actionable intelligence
          </p>
        </div>

        {/* Grid of Reasons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="group relative rounded-2xl bg-gradient-to-br from-black/80 to-[#050814]/80 border border-[#FF4A00]/30 p-8 hover:border-[#FF4A00] transition-all duration-500 hover:shadow-xl hover:shadow-[#FF4A00]/20"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#FF4A00] to-[#FF6B00] flex items-center justify-center shadow-lg shadow-[#FF4A00]/30 group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
                <p className="text-gray-400 leading-relaxed">{reason.description}</p>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-[#FF4A00]/0 group-hover:bg-[#FF4A00]/5 transition-all duration-500 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}