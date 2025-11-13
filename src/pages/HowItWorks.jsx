import React from "react";
import DNASection from "../components/home/DNASection";
import DataStackSection from "../components/home/DataStackSection";

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#02040A] to-[#050814] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-[#FF4A00] bg-clip-text text-transparent">
              How Pryima Works
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            A complete multi-omic health transformation system powered by AI
          </p>
        </div>
      </div>
      <DNASection />
      <DataStackSection />
    </div>
  );
}