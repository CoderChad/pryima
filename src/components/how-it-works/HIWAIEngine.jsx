import React from "react";
import { Network, Cpu, RefreshCw } from "lucide-react";

export default function HIWAIEngine() {
  return (
    <section className="py-24 bg-[#02040A] relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">Inside the AI That <span className="text-[#FF4A00]">Understands Your Biology</span></h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
                {[
                    {
                        icon: Network,
                        title: "Multi-Modal Integration",
                        desc: "Pryima combines genetics, blood biomarkers, microbiome data, wearables, and lifestyle logs into a unified data graph. Correlating glucose, cortisol, gut health, and HRV baselines."
                    },
                    {
                        icon: Cpu,
                        title: "Reinforcement Learning",
                        desc: "The AI continuously learns from your behavior. Every day it tests micro-hypotheses and adapts your plan based on what works best for your unique biology."
                    },
                    {
                        icon: RefreshCw,
                        title: "Closed-Loop Feedback",
                        desc: "When your sleep, stress, nutrition, or training changes, Pryima recalibrates instantly. The platform never stops learning—your model evolves every 24 hours."
                    }
                ].map((item, i) => (
                    <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FF4A00]/30 transition-all group">
                        <div className="w-14 h-14 rounded-full bg-[#0A0F1E] border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <item.icon className="text-cyan-400 w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                        <p className="text-gray-400 leading-relaxed text-sm">{item.desc}</p>
                    </div>
                ))}
            </div>

            <div className="relative rounded-3xl overflow-hidden border border-white/10 h-[500px]">
                <div className="absolute inset-0 bg-gradient-to-t from-[#02040A] via-transparent to-transparent z-10" />
                <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200" alt="AI Engine" className="w-full h-full object-cover opacity-80" />
                <div className="absolute bottom-0 left-0 w-full p-8 z-20 text-center">
                    <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase">Processing Biological Data...</p>
                </div>
            </div>
        </div>
    </section>
  );
}