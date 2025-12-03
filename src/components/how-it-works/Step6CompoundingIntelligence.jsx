import React from "react";
import { motion } from "framer-motion";
import { Rocket, Zap, ShieldAlert, TrendingUp } from "lucide-react";

export default function Step6CompoundingIntelligence() {
  return (
    <section className="py-24 bg-[#050814] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/20 text-[#00F0FF] text-sm font-medium mb-6">
            <span>Step 6 · Compounding Intelligence</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            The longer you stay, the smarter it gets.
        </h2>

        <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto mb-12">
            Most health apps give you a snapshot. Pryima gives you a trajectory. Over months, your AI health twin becomes predictive — not just reactive.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
                { icon: TrendingUp, title: "Predictive", text: "Anticipating glucose responses before they happen" },
                { icon: ShieldAlert, title: "Early Detection", text: "Detecting early signs of burnout or overtraining" },
                { icon: Zap, title: "Optimization", text: "Suggesting the best times for your hardest work" },
                { icon: Rocket, title: "Adaptation", text: "Adjusting for seasonal and lifestyle shifts" },
            ].map((item, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-[#02040A] border border-white/10 p-6 rounded-2xl hover:border-[#FF4A00]/30 transition-all hover:-translate-y-1 group"
                >
                    <item.icon className="w-8 h-8 text-[#FF4A00] mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-white font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.text}</p>
                </motion.div>
            ))}
        </div>

        <div className="relative h-1 bg-white/10 rounded-full max-w-3xl mx-auto mb-8">
            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-[#00F0FF] to-[#FF4A00] opacity-50 blur-sm"></div>
            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-[#00F0FF] to-[#FF4A00]"></div>
            <div className="absolute -top-1 left-0 w-3 h-3 bg-[#00F0FF] rounded-full shadow-[0_0_10px_#00F0FF]"></div>
            <div className="absolute -top-1 right-0 w-3 h-3 bg-[#FF4A00] rounded-full shadow-[0_0_10px_#FF4A00]"></div>
        </div>

        <p className="text-xl text-white font-medium italic">
            “This is what it feels like when your health finally has its own AI lab.”
        </p>
      </div>
    </section>
  );
}