import React from "react";
import { Dna, Activity, Apple, Watch, Microscope } from "lucide-react";

export default function DataStackSection() {
  const dataTypes = [
    { icon: Dna, label: "Genetics", color: "from-[#FF4A00] to-[#FF6B00]" },
    { icon: Activity, label: "Labs & Hormones", color: "from-[#FF4A00] to-[#FF6B00]" },
    { icon: Apple, label: "Food Sensitivity", color: "from-[#FF4A00] to-[#FF6B00]" },
    { icon: Watch, label: "Wearables & CGM", color: "from-[#FF4A00] to-[#FF6B00]" },
    { icon: Microscope, label: "Gut Microbiome", color: "from-[#FF4A00] to-[#FF6B00]" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#050814] to-[#02040A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Your Complete </span>
            <span className="bg-gradient-to-r from-[#FF4A00] to-[#FF6B00] bg-clip-text text-transparent">
              Health Data Stack
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Five integrated domains, one unified OS
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {dataTypes.map((dataType, index) => {
            const Icon = dataType.icon;
            return (
              <div
                key={index}
                className="group relative rounded-2xl bg-gradient-to-br from-black/80 to-[#050814]/80 border border-[#FF4A00]/30 p-8 hover:border-[#FF4A00] transition-all duration-500 hover:shadow-xl hover:shadow-[#FF4A00]/20 cursor-pointer"
              >
                <div className="flex flex-col items-center justify-center space-y-4">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${dataType.color} shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-white font-semibold text-center text-sm md:text-base leading-tight">
                    {dataType.label}
                  </h3>
                </div>
                <div className="absolute inset-0 rounded-2xl bg-[#FF4A00]/0 group-hover:bg-[#FF4A00]/5 transition-all duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}