import React from "react";

export default function HealthGraph() {
  return (
    <section className="py-24 bg-[#050814] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            The Multimodal <br/>
            <span className="text-[#FF4A00]">Health Graph</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Real-time diagnostics connecting your wearables, labs, and genetics in one view.
          </p>
        </div>
        <div className="flex justify-center">
          <img 
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69156bec7bead1484355f40e/deb6da8c5_ChatGPTImageDec2202509_06_30PM.png" 
            alt="Multimodal Health Dashboard" 
            className="w-full max-w-6xl h-auto object-contain rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}