import React from "react";
import { RotateCw, Brain, User } from "lucide-react";

export default function Step4ContinuousRetraining() {
  return (
    <section className="py-24 bg-[#050814] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Left (AI Brain Loop) */}
          <div className="order-2 lg:order-1 relative flex justify-center">
            <div className="relative w-[400px] h-[400px] flex items-center justify-center">
               {/* Rotating Rings */}
               <div className="absolute inset-0 rounded-full border border-cyan-500/20 animate-[spin_10s_linear_infinite]" />
               <div className="absolute inset-10 rounded-full border border-dashed border-cyan-500/30 animate-[spin_15s_linear_infinite_reverse]" />
               <div className="absolute inset-20 rounded-full border border-white/5 animate-pulse" />
               
               {/* Central Core */}
               <div className="relative z-10 w-40 h-40 bg-gradient-to-br from-cyan-900/50 to-black rounded-full border border-cyan-500/50 backdrop-blur-md flex items-center justify-center shadow-[0_0_50px_rgba(6,182,212,0.2)]">
                  <Brain className="w-16 h-16 text-cyan-400" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-30">
                     <User className="w-8 h-8 text-white" />
                  </div>
               </div>
               
               {/* Orbiting Data Points */}
               <div className="absolute top-0 left-1/2 w-4 h-4 bg-[#FF4A00] rounded-full blur-sm animate-bounce" />
               <div className="absolute bottom-10 right-10 w-2 h-2 bg-cyan-400 rounded-full blur-[1px]" />
            </div>
          </div>

          {/* Text Right */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              Step 4 · Continuous Retraining
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              The AI behind Pryima literally <br />
              <span className="text-cyan-400">becomes more you.</span>
            </h2>
            
            <p className="text-gray-400 text-lg leading-relaxed">
              Each user gets their own evolving AI model. It isn’t a generic engine — it’s trained and retrained on your data only.
            </p>
            
            <ul className="space-y-4">
              {[
                "Weekly updates as new data comes in",
                "Model weights subtly adjusted for better accuracy",
                "No two models are identical",
                "Your data is never used to train other users’ models (zero-knowledge style)"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                   <RotateCw className="w-5 h-5 text-cyan-400 mt-0.5" />
                   <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <p className="text-gray-400 text-lg leading-relaxed">
              Over time, this creates a living ‘digital twin’ of your health — an AI whose only job is to understand you better.
            </p>
            
            <div className="text-xl font-light text-white border-l-2 border-cyan-400 pl-4 py-1">
              Most apps stay the same. Pryima upgrades itself around you.
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}