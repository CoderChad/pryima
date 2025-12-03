import React from "react";
import { Database, Brain, MessageSquare } from "lucide-react";

export default function AIArchitecture() {
  const layers = [
    {
      icon: MessageSquare,
      title: "Layer 3: AI Coach & Explanation",
      description: "Translates complex patterns into plain English actions. Powered by models tuned for empathy and clarity.",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Brain,
      title: "Layer 2: Health OS Intelligence",
      description: "Custom model running on Anthropic architecture. Builds your longitudinal profile and detects deviations.",
      color: "from-[#FF4A00] to-[#FF6B00]"
    },
    {
      icon: Database,
      title: "Layer 1: Ingestion & Quality",
      description: "Normalizes raw data from labs, genomics, and devices. Checks ranges, units, and data integrity.",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <section className="py-24 bg-[#02040A] relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#02040A]/85 z-10" />
        <img 
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69156bec7bead1484355f40e/0e5fa9935_IMG_0169.jpg" 
          alt="AI Architecture Background" 
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Custom AI Built on <br/>
            <span className="text-[#FF4A00]">Anthropic Architecture</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We don't just use off-the-shelf chatbots. Our 3-layer stack is engineered for medical-grade data processing and personalized coaching.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Connecting Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-[#FF4A00] to-purple-500 opacity-30"></div>

          <div className="space-y-8">
            {layers.map((layer, index) => (
              <div key={index} className="relative flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center group">
                
                {/* Icon Marker */}
                <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${layer.color} flex items-center justify-center shadow-xl z-10 mx-auto md:mx-0`}>
                  <layer.icon className="text-white w-8 h-8" />
                </div>

                {/* Card */}
                <div className="flex-1 w-full">
                  <div className="bg-[#0A0F1E] border border-white/10 p-8 rounded-2xl hover:border-[#FF4A00]/50 transition-colors duration-300">
                    <h3 className={`text-xl font-bold bg-gradient-to-r ${layer.color} bg-clip-text text-transparent mb-2`}>
                      {layer.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {layer.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}