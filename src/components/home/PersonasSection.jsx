import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function PersonasSection() {
  const personas = [
    {
      title: "Founders",
      description: "Elevate cognition, build ironclad stress resilience, and harness unlimited energy to propel your visionary empire.",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=800&fit=crop",
      gradient: "from-amber-500/20 to-orange-600/20"
    },
    {
      title: "Athletes",
      description: "Unpack recovery algorithms, fine-tune nutritional strategies, and optimize performance biomarkers for championship-level results.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=800&fit=crop",
      gradient: "from-cyan-500/20 to-blue-600/20"
    },
    {
      title: "Longevity Biohackers",
      description: "Monitor biological clock, eradicate inflammation, and supercharge mitochondrial power for a longer, vibrant life.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=800&fit=crop",
      gradient: "from-emerald-500/20 to-green-600/20"
    },
    {
      title: "Health Nerds",
      description: "Explore your multi-omic universe—genetics, epigenetics, metabolomics—to master the science of your body.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=800&fit=crop",
      gradient: "from-purple-500/20 to-violet-600/20"
    },
  ];

  return (
    <section className="py-24 bg-[#02040A] relative overflow-hidden">
      {/* Ambient Background Effects */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF4A00]/10 rounded-full blur-[100px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF4A00]/10 border border-[#FF4A00]/20 text-[#FF4A00] mb-6 backdrop-blur-md">
              <Sparkles size={14} className="animate-pulse" />
              <span className="text-sm font-bold tracking-wide uppercase">Who is Pryima for?</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-white">Designed for </span>
              <span className="bg-gradient-to-r from-[#FF4A00] via-[#FF6B00] to-[#FF8C42] bg-clip-text text-transparent relative inline-block">
                Elite Performers
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#FF4A00] opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                   <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </span>
            </h2>
            
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10">
              Whether you're launching groundbreaking ventures, smashing world records, or hacking the code of aging—Pryima's <span className="text-white font-semibold">AI-powered platform</span> decodes your biology to unleash peak performance.
            </p>
            
            <Link to="/signup">
              <Button
                className="bg-white text-black hover:bg-gray-200 px-8 py-6 text-lg font-bold rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all transform hover:-translate-y-1"
              >
                Discover Your Persona
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Staggered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {personas.map((persona, index) => (
            <motion.div
              key={persona.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative rounded-2xl overflow-hidden border border-white/10 hover:border-[#FF4A00]/50 shadow-2xl transition-all duration-500 cursor-default ${
                index % 2 === 0 ? "lg:mt-0" : "lg:mt-12"
              }`}
              style={{ height: "480px" }}
            >
              {/* Image & Gradients */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={persona.image}
                  alt={persona.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
                  style={{ filter: "grayscale(20%) contrast(110%)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#02040A] via-[#02040A]/70 to-transparent opacity-90" />
                <div className={`absolute inset-0 bg-gradient-to-b ${persona.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay`} />
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <div className="transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-[#FF4A00] transition-colors">
                    {persona.title}
                  </h3>
                  <div className="w-12 h-1 bg-[#FF4A00] rounded-full mb-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {persona.description}
                  </p>
                  
                  {/* Mobile visual cue for interaction since hover doesn't exist */}
                  <div className="lg:hidden mt-4 text-[#FF4A00] text-xs font-bold uppercase tracking-widest opacity-60">
                    Tap to reveal
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}