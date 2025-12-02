import React from "react";
import { motion } from "framer-motion";
import { Activity, Zap, Lock, Globe, Dna, Brain } from "lucide-react";

export default function FeatureShowcase() {
  const features = [
    {
      title: "Advanced Biomarker Dashboard",
      description: "Visualize your entire biological profile in one place. Track glucose, inflammation, and hormonal trends over time with AI-driven predictions.",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69156bec7bead1484355f40e/1e17eb06a_20250914_1827_FuturisticHealthDashboard_simple_compose_01k558rrn8f89v9e3wnjm47490.png",
      icon: Activity,
      color: "text-cyan-400"
    },
    {
      title: "Deep Longitudinal Data",
      description: "Connect genetics, epigenetics, and microbiome data. Watch how your biological age and methylation trends shift with every lifestyle change.",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69156bec7bead1484355f40e/ebd908121_20250914_1907_AdvancedHealthDataInterface_simple_compose_01k55b2v8yee8bg8e9e30bmsea.png",
      icon: Dna,
      color: "text-[#FF4A00]"
    },
    {
      title: "Precision Action Plan",
      description: "Stop guessing. Get daily, AI-generated protocols for nutrition, sleep, and training based on your real-time recovery and genetic risks.",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69156bec7bead1484355f40e/4e07f7b91_20250913_0127_FuturisticDataFusion_simple_compose_01k50vzfkpexmsssgg6y0a24rb.png",
      icon: Zap,
      color: "text-amber-400"
    },
    {
      title: "Planet-Scale Impact",
      description: "Join a global network of high performers. Every data point helps refine the model, making the AI smarter for everyone while keeping your data private.",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69156bec7bead1484355f40e/264cd8ddc_20250914_1835_Planet-ScaleHealthVision_simple_compose_01k5596j6dem2vze3mtyee6d5z.png",
      icon: Globe,
      color: "text-blue-400"
    }
  ];

  return (
    <section className="py-24 bg-[#02040A] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#FF4A00]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 mb-6 backdrop-blur-md">
            <Brain size={14} />
            <span className="text-xs font-bold tracking-widest uppercase">The Pryima Interface</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Total Biological <span className="text-[#FF4A00]">Visibility</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            See what's happening inside your body in real-time. No more PDF lab reports. 
            Just live, actionable data.
          </p>
        </div>

        <div className="space-y-32">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
            >
              {/* Image Content */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF4A00] to-cyan-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-700" />
                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#050814] shadow-2xl">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#02040A] via-transparent to-transparent opacity-50" />
                </div>
              </div>

              {/* Text Content */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center ${feature.color}`}>
                  <feature.icon size={24} />
                </div>
                
                <h3 className="text-3xl font-bold text-white">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 text-lg leading-relaxed">
                  {feature.description}
                </p>

                <div className="pt-4">
                  <button className="text-sm font-bold text-white hover:text-[#FF4A00] transition-colors flex items-center gap-2 group">
                    Explore Feature
                    <div className="w-8 h-[1px] bg-white/30 group-hover:w-12 group-hover:bg-[#FF4A00] transition-all" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}