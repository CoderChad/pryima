import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Activity, Globe, Database, Shield, Zap, Heart } from "lucide-react";

export default function About() {
  const visionPoints = [
    { icon: Brain, text: "AI coaches that adapt like real clinicians" },
    { icon: Activity, text: "Predictive engines that detect health issues before symptoms appear" },
    { icon: Database, text: "Multi-agent systems that negotiate nutrition, training, sleep, stress, and recovery recommendations on your behalf" },
    { icon: Globe, text: "A Health OS that personalizes itself around your biology the way Netflix personalizes content" },
    { icon: Zap, text: "Continuous learning models that refine your protocol daily, not yearly" }
  ];

  const whyPoints = [
    "Connects genetics, blood work, microbiome, wearable data, and real-time physiology into one system",
    "Gives people the type of personalized coaching that was once only available to elite athletes and concierge medicine clients",
    "Adapts to your life situation, stress levels, environment, and goals over time",
    "Makes data feel human, not clinical—something you can use, not something that overwhelms you",
    "Protects your privacy with HIPAA-aware flows, consent-based data sharing, and optional zero-knowledge modes",
    "Grows more intelligent with every input, turning into a lifelong precision-health companion"
  ];

  return (
    <div className="min-h-screen bg-[#02040A] text-white">
      {/* Hero / Header */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#FF4A00]/5 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About the Creator — <br/>
              <span className="bg-gradient-to-r from-[#FF4A00] to-[#FF6B00] bg-clip-text text-transparent">
                Chad Thomas
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light italic">
              "I built Pryima because I was tired of the guesswork."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-24">
        
        {/* Introduction & Portrait */}
        <section className="grid md:grid-cols-2 gap-12 items-start">
          <div className="order-2 md:order-1 space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              For years, I obsessed over understanding why some people seem to unlock high-performance lives—stable energy, better recovery, sharper cognition, faster fat loss—while others with the same discipline couldn’t.
            </p>
            <p>
              I realized the difference wasn’t motivation or willpower. <strong className="text-white">The difference was information.</strong> Some people had access to structured data, clinical insight, and personalized coaching. Most people didn’t.
            </p>
            <p className="text-white font-medium border-l-4 border-[#FF4A00] pl-4">
              Pryima was born to close that gap.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FF4A00]/10 to-transparent mix-blend-overlay z-10" />
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69156bec7bead1484355f40e/454a8138f_pryimapic.pdf" 
                alt="Chad Thomas" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-white">A Personal Mission Turned Global Vision</h2>
          <div className="prose prose-invert max-w-none text-gray-400 text-lg leading-relaxed space-y-6">
            <p>
              I started Pryima out of a personal desire to know exactly what was happening in my body—from hormones to genetics to microbiome activity—and to have a system that could translate that raw complexity into simple, actionable steps I could actually follow.
            </p>
            <p>
              What I wanted did not exist. Not in a single platform. Not in a way that honored privacy. Not in a way that used AI responsibly. Not in a way that understood that human health is a living system, not a one-time test.
            </p>
            <p>
              <strong className="text-white">So I built it.</strong>
            </p>
            <p>
              Pryima is my attempt to create the world’s first adaptive Health OS: <span className="text-cyan-400">a platform that doesn’t just measure you, but learns you… and gets smarter the longer you use it.</span>
            </p>
          </div>
        </section>

        {/* Why I Created Pryima */}
        <section className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-white mb-8">Why I Created Pryima</h2>
          <p className="text-gray-300 mb-8">I wanted an experience that:</p>
          
          <div className="grid gap-4">
            {whyPoints.map((point, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FF4A00] flex-shrink-0" />
                <p className="text-gray-400">{point}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-white font-medium italic">
              "This isn’t just an app. It’s a framework for how health optimization should work in the age of AI."
            </p>
          </div>
        </section>

        {/* The Future */}
        <section className="space-y-8">
          <div className="flex items-center gap-3 text-cyan-400 mb-2">
            <Brain size={20} />
            <span className="text-sm font-mono uppercase tracking-widest">The Vision</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">The Future: Pryima as an AI Studio</h2>
          
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              Pryima is only the beginning.
            </p>
            <p>
              My long-term vision is to transform Pryima into an AI studio of its own—a pipeline where breakthroughs in agentic systems, digital coaching, federated learning, and real-time physiology modeling evolve into new products, new health experiences, and new ways for humans to understand themselves.
            </p>
            <p className="text-white font-medium">Imagine:</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {visionPoints.map((item, i) => (
              <div key={i} className="p-6 rounded-xl bg-[#0A0F1E] border border-white/5 hover:border-cyan-500/30 transition-colors group">
                <item.icon className="w-8 h-8 text-cyan-500 mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-gray-300">{item.text}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-400 text-lg leading-relaxed mt-6">
            This is where Pryima is heading—toward a future where health is no longer reactive but fully optimized, autonomous, and deeply personal.
          </p>
        </section>

        {/* Who I Am */}
        <section className="relative p-8 md:p-12 rounded-3xl overflow-hidden bg-[#0A0F1E] border border-white/10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF4A00]/5 to-[#FF6B00]/5" />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-6">Who I Am</h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                I’m an engineer, researcher, and founder who lives at the intersection of AI, health optimization, and human performance. I’ve spent years building AI-driven pipelines, experimenting with biomarker systems, analyzing lifestyle data, and obsessing over how to use machine intelligence to make people stronger, healthier, happier, and more self-aware.
              </p>
              <p>
                Pryima is the culmination of that journey—my attempt to build the tool I needed, and in the process, offer it to the world.
              </p>
            </div>
            
            <div className="mt-10">
              <Link to="/signup">
                <Button className="bg-[#FF4A00] hover:bg-[#FF5A10] text-white px-8 py-6 text-lg font-bold shadow-lg shadow-[#FF4A00]/20 w-full md:w-auto">
                  Join Me in the Founding Cohort
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}