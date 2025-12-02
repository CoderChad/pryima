import React from "react";
import { motion } from "framer-motion";
import { Dna, Activity, Watch, Utensils, Moon } from "lucide-react";

export default function HealthGraph() {
  const nodes = [
    { icon: Dna, label: "Genetics", color: "#FF4A00", x: "50%", y: "10%" },
    { icon: Activity, label: "Labs", color: "#FF4A00", x: "85%", y: "30%" },
    { icon: Utensils, label: "Gut", color: "#FF4A00", x: "85%", y: "70%" },
    { icon: Moon, label: "Sleep", color: "#FF4A00", x: "15%", y: "70%" },
    { icon: Watch, label: "Wearables", color: "#FF4A00", x: "15%", y: "30%" },
  ];

  return (
    <section className="py-24 bg-[#050814] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              The Multimodal <br/>
              <span className="text-[#FF4A00]">Health Graph</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Most doctors only see a snapshot. Pryima builds a "health graph"—a continuous network connecting your DNA, blood biomarkers, microbiome, glucose, and daily habits.
            </p>
            <ul className="space-y-4">
              {["Connects 1,000+ biomarkers", "Syncs real-time wearable data", "Contextualizes genetics with lifestyle"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF4A00]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative h-[400px] md:h-[500px] bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm p-8 flex items-center justify-center">
            {/* Central Node */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#FF4A00] to-[#FF8C42] flex items-center justify-center shadow-2xl shadow-[#FF4A00]/30 animate-pulse">
                <span className="text-white font-bold text-xl">YOU</span>
              </div>
            </div>

            {/* Orbiting Nodes */}
            {nodes.map((node, i) => (
              <div
                key={i}
                className="absolute flex flex-col items-center gap-2 z-10"
                style={{ left: node.x, top: node.y, transform: 'translate(-50%, -50%)' }}
              >
                <div className="w-12 h-12 rounded-xl bg-black/80 border border-[#FF4A00]/30 flex items-center justify-center text-[#FF4A00]">
                  <node.icon size={20} />
                </div>
                <span className="text-xs font-mono text-gray-400">{node.label}</span>
                
                {/* Connection Line (Visual only - simplified) */}
                <svg className="absolute left-1/2 top-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none opacity-20">
                  <line x1="50%" y1="50%" x2={node.x === "50%" ? "50%" : node.x > "50%" ? "0%" : "100%"} y2={node.y === "10%" ? "100%" : node.y > "50%" ? "0%" : "100%"} stroke="#FF4A00" strokeWidth="2" />
                </svg>
              </div>
            ))}
            
            {/* Connecting Lines - simplified SVG overlay */}
             <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
              {nodes.map((node, i) => {
                // Calculate approximate positions for lines connecting to center
                // This is a simplified visual representation
                const cx = "50%";
                const cy = "50%";
                return (
                  <line 
                    key={i} 
                    x1={cx} 
                    y1={cy} 
                    x2={node.x} 
                    y2={node.y} 
                    stroke="#FF4A00" 
                    strokeWidth="1" 
                    strokeDasharray="5,5"
                  />
                );
              })}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}