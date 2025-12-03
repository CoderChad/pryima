import React from "react";

export default function HIWDigitalTwin() {
  return (
    <section className="py-24 bg-[#050814] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Pryima Becomes a <span className="text-[#FF4A00]">Digital Clone</span> of Your Physiology
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                        After 30 days of continuous learning, Pryima’s AI forms a highly accurate metabolic profile—a digital representation of who you are physiologically. This enables pinpoint prediction and targeted recommendations that compound over time.
                    </p>
                    <div className="inline-block px-6 py-3 bg-[#FF4A00]/10 border border-[#FF4A00]/30 rounded-full text-[#FF4A00] font-medium">
                        Achievement: Full Metabolic Profile Unlocked (Day 30)
                    </div>
                </div>
                <div className="relative h-[600px] rounded-2xl overflow-hidden border border-white/10">
                    <img 
                        src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&q=80&w=800" 
                        alt="Digital Twin" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10 mix-blend-multiply" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-20">
                         <div className="text-white font-mono text-xs tracking-[0.3em] opacity-70">SYNCING DATA...</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}