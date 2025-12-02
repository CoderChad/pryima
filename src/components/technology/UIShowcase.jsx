import React from "react";

export default function UIShowcase() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#050814] to-[#02040A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            The Interface of <br/>
            <span className="bg-gradient-to-r from-[#FF4A00] to-[#FF6B00] bg-clip-text text-transparent">
              Your Biology
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Dashboard Card */}
          <div className="rounded-3xl border-8 border-gray-900 bg-black overflow-hidden shadow-2xl">
            <div className="p-4 bg-[#111] border-b border-gray-800 flex justify-between items-center">
              <span className="text-xs font-bold text-gray-400">HOME</span>
              <div className="flex gap-1"><div className="w-2 h-2 rounded-full bg-red-500"/><div className="w-2 h-2 rounded-full bg-yellow-500"/><div className="w-2 h-2 rounded-full bg-green-500"/></div>
            </div>
            <div className="p-6 space-y-4">
              <div className="h-32 rounded-xl bg-gradient-to-r from-[#FF4A00]/20 to-purple-500/20 border border-white/10 relative">
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-xs text-gray-400">Today's Focus</div>
                  <div className="text-lg font-bold">Stabilize Glucose</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-gray-900 border border-gray-800">
                  <div className="text-xs text-gray-500">Sleep</div>
                  <div className="text-xl font-mono text-white">88%</div>
                </div>
                <div className="p-4 rounded-xl bg-gray-900 border border-gray-800">
                  <div className="text-xs text-gray-500">HRV</div>
                  <div className="text-xl font-mono text-[#FF4A00]">42ms</div>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Card */}
          <div className="rounded-3xl border-8 border-gray-900 bg-black overflow-hidden shadow-2xl lg:translate-y-12">
            <div className="p-4 bg-[#111] border-b border-gray-800 flex justify-between items-center">
              <span className="text-xs font-bold text-gray-400">AI COACH</span>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-800 flex-shrink-0"/>
                <div className="p-3 rounded-2xl rounded-tl-none bg-gray-800 text-xs text-gray-300">
                  My glucose spiked after lunch. What should I change?
                </div>
              </div>
              <div className="flex gap-3 flex-row-reverse">
                <div className="w-8 h-8 rounded-full bg-[#FF4A00] flex items-center justify-center flex-shrink-0 text-xs font-bold text-white">AI</div>
                <div className="p-3 rounded-2xl rounded-tr-none bg-[#FF4A00]/10 border border-[#FF4A00]/20 text-xs text-gray-200">
                  Your spike hit 145 mg/dL. It was likely the white rice. Try swapping for quinoa or walking 10 mins after eating.
                </div>
              </div>
            </div>
          </div>

          {/* Lab Card */}
          <div className="rounded-3xl border-8 border-gray-900 bg-black overflow-hidden shadow-2xl">
            <div className="p-4 bg-[#111] border-b border-gray-800 flex justify-between items-center">
              <span className="text-xs font-bold text-gray-400">GENETICS</span>
            </div>
            <div className="p-6 space-y-4">
              <div className="space-y-3">
                {[
                  { label: "Caffeine Metabolism", val: "Slow", color: "text-red-400" },
                  { label: "Insulin Sensitivity", val: "Moderate", color: "text-yellow-400" },
                  { label: "Endurance Potential", val: "High", color: "text-green-400" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center p-3 rounded-lg bg-gray-900">
                    <span className="text-xs text-gray-300">{item.label}</span>
                    <span className={`text-xs font-bold ${item.color}`}>{item.val}</span>
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