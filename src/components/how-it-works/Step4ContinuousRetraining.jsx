import React from "react";
import { Brain, RefreshCw } from "lucide-react";

export default function Step4ContinuousRetraining() {
  return (
    <section className="py-24 bg-[#050814]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Content - Left on Desktop */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md aspect-square">
               {/* Animated Circles */}
               <div className="absolute inset-0 border border-cyan-500/20 rounded-full animate-pulse-slow" />
               <div className="absolute inset-8 border border-[#FF4A00]/20 rounded-full" />
               <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-[#FF4A00]/5 rounded-full blur-3xl" />
               
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-32 h-32 bg-black border border-white/10 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                   <Brain className="w-12 h-12 text-white" />
                 </div>
               </div>

               {/* Orbiting Data Points */}
               <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-black border border-cyan-500/50 rounded-full text-cyan-400 text-xs">
                 Weights Updating...
               </div>
            </div>
          </div>

          {/* Text Content - Right on Desktop */}
          <div>
            <div className="inline-block px-3 py-1 mb-4 rounded bg-white/5 border border-white/10 text-cyan-400 text-xs font-mono uppercase tracking-wider">
              Step 4 · Continuous Retraining
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              The AI behind Pryima <br/>
              <span className="text-[#FF4A00]">literally becomes more you.</span>
            </h2>
            
            <div className="prose prose-invert max-w-none mb-8 text-gray-400 text-lg leading-relaxed">
              <p className="mb-4">
                Each user gets their own evolving AI model. It isn’t a generic engine — it’s trained and retrained on your data only.
              </p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  "Weekly updates as new data comes in",
                  "Model weights subtly adjusted for better accuracy",
                  "No two models are identical",
                  "Your data is never used to train other users’ models (zero-knowledge style)"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <RefreshCw className="mt-1.5 w-4 h-4 text-cyan-400 flex-shrink-0 animate-spin-slow" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Over time, this creates a living ‘digital twin’ of your health — an AI whose only job is to understand you better.
              </p>
            </div>

            <div className="p-4 border-l-2 border-[#FF4A00]">
              <p className="text-white font-bold text-lg">
                Most apps stay the same. Pryima upgrades itself around you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}