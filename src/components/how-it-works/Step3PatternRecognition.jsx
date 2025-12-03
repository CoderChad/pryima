import React from "react";
import { GitGraph, Zap, TrendingUp } from "lucide-react";

export default function Step3PatternRecognition() {
  return (
    <section className="py-24 bg-[#02040A] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content - First on Mobile, Left on Desktop */}
          <div>
            <div className="inline-block px-3 py-1 mb-4 rounded bg-white/5 border border-white/10 text-cyan-400 text-xs font-mono uppercase tracking-wider">
              Step 3 · Pattern Recognition
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Your AI begins to see <br/>
              <span className="text-[#FF4A00]">your unique patterns.</span>
            </h2>
            
            <div className="prose prose-invert max-w-none mb-8 text-gray-400 text-lg leading-relaxed">
              <p className="mb-4">
                After a few weeks, Pryima starts recognizing your personal rhythms:
              </p>
              <ul className="space-y-3 list-none pl-0">
                {[
                  "Which foods consistently spike your glucose",
                  "What days and times you sleep best",
                  "Which workouts drain you vs. energize you",
                  "What supplements actually move the needle",
                  "How stress, environment, and habits shape your recovery"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FF4A00] flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Instead of guessing, Pryima maps your inputs (choices, behaviors, environment) to your outputs (energy, recovery, glucose, sleep, and more).
              </p>
            </div>

            <div className="flex items-center gap-3 text-cyan-400 font-medium border-t border-white/10 pt-4">
              <Zap className="w-5 h-5" />
              <span>This is where Pryima graduates from data collection to true understanding.</span>
            </div>
          </div>

          {/* Image Content - Second on Mobile, Right on Desktop */}
          <div>
            <div className="bg-[#0A0F1E] rounded-2xl border border-white/10 p-8 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF4A00]/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="flex items-center justify-between mb-8 relative z-10">
                <h3 className="text-white font-bold flex items-center gap-2">
                  <TrendingUp size={18} className="text-cyan-400" />
                  Correlation Detected
                </h3>
                <span className="px-2 py-1 bg-[#FF4A00]/10 border border-[#FF4A00]/20 text-[#FF4A00] text-xs rounded font-bold animate-pulse-slow">
                  HIGH CONFIDENCE
                </span>
              </div>
              
              {/* Stylized Graph Mockup */}
              <div className="space-y-8 relative z-10">
                {/* Graph 1 */}
                <div>
                  <div className="flex justify-between text-xs text-gray-400 mb-2">
                    <span className="uppercase tracking-wider font-bold">Late Meal (Impact)</span>
                    <span className="text-[#FF4A00]">+2h Sleep Onset</span>
                  </div>
                  <div className="h-24 flex items-end gap-1 pb-1 border-b border-white/10">
                     {[40, 60, 30, 80, 45, 90, 50, 60, 70, 80, 45, 55].map((h, i) => (
                       <div key={i} className={`flex-1 rounded-t-sm transition-all duration-500 ${h > 70 ? 'bg-[#FF4A00] shadow-[0_0_10px_rgba(255,74,0,0.5)]' : 'bg-gray-800'}`} style={{height: `${h}%`}} />
                     ))}
                  </div>
                </div>

                {/* Graph 2 */}
                <div>
                  <div className="flex justify-between text-xs text-gray-400 mb-2">
                    <span className="uppercase tracking-wider font-bold">Deep Sleep (Result)</span>
                    <span className="text-cyan-400">-15% vs Baseline</span>
                  </div>
                  <div className="h-24 flex items-end gap-1 pb-1 border-b border-white/10">
                     {[70, 65, 80, 40, 75, 30, 65, 50, 45, 40, 70, 60].map((h, i) => (
                       <div key={i} className={`flex-1 rounded-t-sm transition-all duration-500 ${h < 50 ? 'bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]' : 'bg-gray-800'}`} style={{height: `${h}%`}} />
                     ))}
                  </div>
                </div>

                <div className="p-4 bg-white/5 rounded-lg border border-white/10 text-sm text-gray-300 flex gap-3 items-start">
                  <GitGraph className="text-cyan-400 w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-1">Pattern Found:</strong> 
                    Eating after 8PM correlates with a 15% reduction in Deep Sleep duration.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}