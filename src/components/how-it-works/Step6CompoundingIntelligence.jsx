import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Sparkles } from "lucide-react";

export default function Step6CompoundingIntelligence() {
  return (
    <section className="py-24 bg-[#050814] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/20 text-[#00F0FF] text-sm font-medium mb-6">
              <span>Step 6 · Compounding Intelligence</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              The longer you stay, the smarter it gets.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Most health apps give you a snapshot. Pryima gives you a trajectory. Over months, your AI health twin becomes predictive — not just reactive.
            </p>
        </div>

        <div className="relative py-12">
             {/* Timeline Visual */}
             <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-white/5 via-[#00F0FF]/50 to-[#FF4A00]/50 hidden lg:block"></div>
             
             <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
                 {[
                     { label: "Day 0", title: "Baseline", desc: "Tests & Ingestion", icon: ShieldCheck, active: true },
                     { label: "Day 30", title: "Patterns", desc: "Correlations Found", icon: ArrowUpRight, active: true },
                     { label: "Day 90", title: "Precision", desc: "Targeted Protocols", icon: Sparkles, active: true },
                     { label: "Day 180+", title: "Prediction", desc: "Anticipatory Health", icon: BrainCircuit, active: true }
                 ].map((step, i) => (
                     <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-[#02040A] border border-white/10 p-6 rounded-2xl text-center relative group hover:border-[#00F0FF]/30 transition-colors"
                     >
                         <div className="w-12 h-12 mx-auto rounded-full bg-[#11141D] border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform z-20 relative">
                             {/* Simplified icon rendering since lucide icons aren't imported in array map scope easily without passing component */}
                             <div className={`w-3 h-3 rounded-full ${i === 3 ? 'bg-[#FF4A00]' : 'bg-[#00F0FF]'}`}></div>
                         </div>
                         <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">{step.label}</div>
                         <h3 className="text-xl font-bold text-white mb-1">{step.title}</h3>
                         <p className="text-sm text-gray-400">{step.desc}</p>
                     </motion.div>
                 ))}
             </div>
        </div>

        <div className="max-w-4xl mx-auto mt-16 grid md:grid-cols-2 gap-8 text-sm text-gray-400 bg-white/5 rounded-2xl p-8 border border-white/5">
            <ul className="space-y-3">
                <li className="flex items-center gap-2"><span className="text-[#00F0FF]">•</span> Anticipating glucose responses before they happen</li>
                <li className="flex items-center gap-2"><span className="text-[#00F0FF]">•</span> Detecting early signs of burnout or overtraining</li>
                <li className="flex items-center gap-2"><span className="text-[#00F0FF]">•</span> Suggesting the best times of day for your hardest work</li>
            </ul>
            <ul className="space-y-3">
                <li className="flex items-center gap-2"><span className="text-[#FF4A00]">•</span> Warning you when your gut or skin microbiome may need support</li>
                <li className="flex items-center gap-2"><span className="text-[#FF4A00]">•</span> Adjusting for seasonal, hormonal, or lifestyle shifts</li>
            </ul>
        </div>
        
        <div className="text-center mt-12">
             <p className="text-xl text-white font-light italic">"This is what it feels like when your health finally has its own AI lab."</p>
        </div>
      </div>
    </section>
  );
}

// Helper for the icon since I couldn't import BrainCircuit in the map scope easily
function BrainCircuit(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
        <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
        <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
        <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
        <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
        <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
        <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
        <path d="M6 18a4 4 0 0 1-1.97-3.284" />
        <path d="M17.97 14.716A4 4 0 0 1 16 18" />
      </svg>
    )
}