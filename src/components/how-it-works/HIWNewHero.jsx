import React from "react";

export default function HIWNewHero() {
  return (
    <section className="relative pt-32 pb-20 bg-[#02040A] text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                How Pryima <br />
                <span className="text-[#FF4A00]">Learns You Over Time</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Your biology, your data, your habits — unified into one intelligent health operating system.
            </p>
        </div>
    </section>
  );
}