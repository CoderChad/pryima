import React, { useState } from "react";
import { Button } from "@/components/ui/button";

export default function QuizPreview() {
  const [selected, setSelected] = useState(null);

  const goals = [
    { id: 1, label: "Mental clarity & focus", icon: "🧠" },
    { id: 2, label: "Athletic performance", icon: "💪" },
    { id: 3, label: "Healthspan & longevity", icon: "⏳" },
    { id: 4, label: "Understanding my biology", icon: "🔬" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#02040A] to-[#050814]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border-2 border-[#FF4A00]/30 bg-gradient-to-br from-black/80 to-[#050814]/80 backdrop-blur-md shadow-2xl shadow-[#FF4A00]/10 overflow-hidden">
          {/* Progress Bar */}
          <div className="h-2 bg-black/50">
            <div className="h-full bg-gradient-to-r from-[#FF4A00] to-[#FF6B00] transition-all duration-500" style={{ width: "32%" }} />
          </div>

          {/* Quiz Content */}
          <div className="p-8 md:p-12">
            <div className="mb-8">
              <p className="text-[#FF4A00] text-sm font-medium mb-2">Step 1 of 3</p>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What's your primary optimization goal?
              </h3>
              <p className="text-gray-400">Select the area you want to focus on first</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {goals.map((goal) => (
                <button
                  key={goal.id}
                  onClick={() => setSelected(goal.id)}
                  className={`p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                    selected === goal.id
                      ? "border-[#FF4A00] bg-[#FF4A00]/10 shadow-lg shadow-[#FF4A00]/30"
                      : "border-[#FF4A00]/20 bg-black/30 hover:border-[#FF4A00]/50 hover:bg-black/50"
                  }`}
                >
                  <div className="text-3xl mb-2">{goal.icon}</div>
                  <p className="text-white font-medium text-lg">{goal.label}</p>
                </button>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <Button variant="ghost" className="text-gray-400 hover:text-white">
                Skip
              </Button>
              <Button
                disabled={!selected}
                className="bg-[#FF4A00] hover:bg-[#FF5A10] text-white px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#FF4A00]/30"
              >
                Continue
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}