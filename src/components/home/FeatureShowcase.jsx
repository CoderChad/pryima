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

        {/* Horizontal Carousel */}
        <div className="relative overflow-x-auto pb-12 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
          <div className="flex gap-8 w-max">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-[85vw] md:w-[600px] flex-shrink-0 relative group rounded-3xl border border-white/10 bg-[#050814] overflow-hidden"
              >
                {/* Image Top */}
                <div className="relative aspect-video overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050814] to-transparent opacity-80 z-10" />
                    <img 
                        src={feature.image} 
                        alt={feature.title}
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                    />
                </div>

                {/* Content Bottom */}
                <div className="p-8 relative z-20 -mt-20">
                    <div className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 ${feature.color} backdrop-blur-md`}>
                        <feature.icon size={24} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3">
                        {feature.title}
                    </h3>
                    
                    <p className="text-gray-400 leading-relaxed mb-6">
                        {feature.description}
                    </p>

                    <button className="text-sm font-bold text-white hover:text-[#FF4A00] transition-colors flex items-center gap-2 group">
                        Explore Feature
                        <div className="w-8 h-[1px] bg-white/30 group-hover:w-12 group-hover:bg-[#FF4A00] transition-all" />
                    </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}