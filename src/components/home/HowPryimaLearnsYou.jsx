import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Dna, 
  Activity, 
  Brain, 
  TrendingUp, 
  Sparkles, 
  ArrowRight,
  TestTube,
  Smartphone,
  BarChart3,
  Zap,
  Target,
  Clock
} from "lucide-react";

export default function HowPryimaLearnsYou() {
  return (
    <div className="bg-gradient-to-b from-[#02040A] via-[#050814] to-[#02040A]">
      {/* SECTION 1 – TITLE & OVERVIEW */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#02040A] via-[#050814] to-[#02040A]"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#FF4A00]/10 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 mb-6 backdrop-blur-md">
                <Sparkles size={14} className="animate-pulse" />
                <span className="text-sm font-bold tracking-wide uppercase">How It Works</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-white">How Pryima </span>
                <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  Learns You Over Time
                </span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                A living AI health twin that becomes more accurate, more personal, and more effective every week.
              </p>
              
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Pryima isn't a static dashboard. It's a self-advancing, self-adapting health intelligence system built on a custom-trained Anthropic model that continuously learns your biology, your behaviors, and your responses. The longer you use it, the more it feels like a digital twin that truly understands you.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#FF4A00] hover:bg-[#FF5A10] text-white px-8 py-6 text-lg font-semibold">
                  See the Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Link to="/technology" className="text-cyan-400 hover:text-cyan-300 text-lg font-medium flex items-center">
                  Why our AI is different
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
            
            {/* Right: Hero Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative bg-gradient-to-br from-[#02040A]/80 to-[#050814]/80 rounded-3xl p-8 border border-cyan-500/20 backdrop-blur-xl">
                {/* Futuristic Health OS Interface Mockup */}
                <div className="space-y-4">
                  {/* DNA Strands */}
                  <div className="flex items-center gap-4">
                    <Dna className="w-8 h-8 text-cyan-400 animate-pulse" />
                    <div className="flex-1 h-2 bg-gradient-to-r from-cyan-500/30 to-transparent rounded-full"></div>
                  </div>
                  
                  {/* Charts */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#02040A]/80 rounded-lg p-4 border border-cyan-500/10">
                      <div className="h-20 bg-gradient-to-t from-cyan-500/20 to-transparent rounded"></div>
                    </div>
                    <div className="bg-[#02040A]/80 rounded-lg p-4 border border-cyan-500/10">
                      <div className="h-20 bg-gradient-to-t from-[#FF4A00]/20 to-transparent rounded"></div>
                    </div>
                  </div>
                  
                  {/* AI Brain Lines */}
                  <div className="relative">
                    <Brain className="w-12 h-12 text-cyan-400 mx-auto opacity-60" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 border-2 border-cyan-500/30 rounded-full animate-ping"></div>
                    </div>
                  </div>
                  
                  {/* Data Streams */}
                  <div className="space-y-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2 – STEP 1: YOUR BIOLOGICAL BASELINE */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#02040A]/80 border border-cyan-500/20 rounded-2xl p-8 lg:p-10 backdrop-blur-sm"
            >
              <div className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-bold mb-6">
                Step 1 · Your Biological Baseline
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                We start by understanding your biology.
              </h3>
              
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Before Pryima ever tells you what to do, it listens. Your journey begins with at-home testing that builds your core biological signature:
              </p>
              
              <ul className="space-y-3 mb-6 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>1200-marker genetic blueprint (via SelfDecode)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Gut microbiome insights (Biomes.world)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Facial microbiome mapping (HelloBiome)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Hormone, cortisol, and food sensitivity panels (myLAB Box)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Optional continuous glucose monitor (Stelo) for real-time metabolic patterns</span>
                </li>
              </ul>
              
              <p className="text-base text-gray-400 mb-6 leading-relaxed">
                This foundation gives Pryima a deep, long-term view of your DNA, gut, skin, hormones, and metabolism. It's like handing your AI its first map of how your body is wired.
              </p>
              
              <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-4">
                <p className="text-cyan-300 text-sm leading-relaxed">
                  <strong className="text-white">Pryima uses this data to build your initial 'health fingerprint'</strong> — a unique profile that no generic app or one-size-fits-all program can match.
                </p>
              </div>
            </motion.div>
            
            {/* Right: Test Kits Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-[#02040A]/80 to-[#050814]/80 rounded-2xl p-8 border border-cyan-500/20">
                <div className="grid grid-cols-2 gap-4">
                  <TestTube className="w-16 h-16 text-cyan-400 mx-auto" />
                  <Dna className="w-16 h-16 text-[#FF4A00] mx-auto" />
                  <Activity className="w-16 h-16 text-cyan-400 mx-auto" />
                  <Brain className="w-16 h-16 text-[#FF4A00] mx-auto" />
                </div>
                <div className="mt-6 text-center text-gray-400 text-sm">
                  At-home testing kits
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3 – STEP 2: REAL-TIME LIFE DATA FEEDS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#02040A]/50">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
          }}
        ></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Wearable Data Stream Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative bg-gradient-to-br from-[#02040A]/80 to-[#050814]/80 rounded-2xl p-8 border border-cyan-500/20">
                <div className="space-y-6">
                  <Smartphone className="w-20 h-20 text-cyan-400 mx-auto" />
                  <div className="space-y-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="h-2 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent rounded-full animate-pulse" style={{ animationDelay: `${i * 0.15}s` }}></div>
                    ))}
                  </div>
                  <Activity className="w-20 h-20 text-[#FF4A00] mx-auto" />
                </div>
              </div>
            </motion.div>
            
            {/* Right: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-bold mb-6">
                Step 2 · Real-Time Life Data
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                We layer in your daily reality.
              </h3>
              
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Your body is not static — and neither is Pryima. Once your baseline is set, the system continuously ingests dynamic signals from your everyday life:
              </p>
              
              <ul className="space-y-3 mb-6 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Apple Health and Terra-connected wearables</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Workouts, movement, and activity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Sleep cycles and recovery patterns</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Heart rate and stress indicators</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Meal timing and check-ins</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Glucose curves from your CGM (if included)</span>
                </li>
              </ul>
              
              <p className="text-base text-gray-400 mb-4 leading-relaxed">
                These streams show how your biology behaves in the real world — not just in a lab report.
              </p>
              
              <p className="text-lg text-cyan-300 font-medium">
                Now, Pryima can start connecting the dots between what you do and how your body responds.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4 – STEP 3: WEEKLY PATTERN RECOGNITION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-bold mb-6">
                Step 3 · Pattern Recognition
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Your AI begins to see your unique patterns.
              </h3>
              
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                After a few weeks, Pryima starts recognizing your personal rhythms:
              </p>
              
              <ul className="space-y-3 mb-6 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Which foods consistently spike your glucose</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>What days and times you sleep best</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Which workouts drain you vs. energize you</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>What supplements actually move the needle</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>How stress, environment, and habits shape your recovery</span>
                </li>
              </ul>
              
              <p className="text-base text-gray-400 mb-6 leading-relaxed">
                Instead of guessing, Pryima maps your inputs (choices, behaviors, environment) to your outputs (energy, recovery, glucose, sleep, and more).
              </p>
              
              <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-4">
                <p className="text-cyan-300 text-sm font-medium">
                  This is where Pryima graduates from data collection to true understanding.
                </p>
              </div>
            </motion.div>
            
            {/* Right: Pattern Graph */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative bg-gradient-to-br from-[#02040A]/80 to-[#050814]/80 rounded-2xl p-8 border border-cyan-500/20">
                <BarChart3 className="w-24 h-24 text-cyan-400 mx-auto mb-4" />
                <div className="space-y-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="relative">
                      <div 
                        className="h-4 bg-gradient-to-r from-cyan-500/40 to-cyan-500/10 rounded-full"
                        style={{ width: `${60 + i * 10}%` }}
                      ></div>
                      {i === 2 && (
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#FF4A00] rounded-full animate-pulse"></div>
                      )}
                    </div>
                  ))}
                </div>
                <p className="text-center text-gray-400 text-sm mt-4">Pattern detection over time</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 5 – STEP 4: CONTINUOUS RETRAINING ON YOU */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#02040A]/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: AI Training Loop Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="relative bg-gradient-to-br from-[#02040A]/80 to-[#050814]/80 rounded-2xl p-12 border border-cyan-500/20">
                <div className="relative w-48 h-48 mx-auto">
                  <Brain className="w-24 h-24 text-cyan-400 mx-auto absolute inset-0 m-auto" />
                  <div className="absolute inset-0 border-2 border-cyan-500/30 rounded-full animate-spin" style={{ animationDuration: '8s' }}></div>
                  <div className="absolute inset-4 border-2 border-cyan-500/20 rounded-full animate-spin" style={{ animationDuration: '12s', animationDirection: 'reverse' }}></div>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#FF4A00] rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>
                <p className="text-center text-gray-400 text-sm mt-6">Continuous model retraining</p>
              </div>
            </motion.div>
            
            {/* Right: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-bold mb-6">
                Step 4 · Continuous Retraining
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                The AI behind Pryima literally becomes more you.
              </h3>
              
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Each user gets their own evolving AI model. It isn't a generic engine — it's trained and retrained on your data only.
              </p>
              
              <ul className="space-y-3 mb-6 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Weekly updates as new data comes in</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Model weights subtly adjusted for better accuracy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>No two models are identical</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Your data is never used to train other users' models (zero-knowledge style)</span>
                </li>
              </ul>
              
              <p className="text-base text-gray-400 mb-4 leading-relaxed">
                Over time, this creates a living 'digital twin' of your health — an AI whose only job is to understand you better.
              </p>
              
              <div className="bg-[#FF4A00]/10 border border-[#FF4A00]/20 rounded-lg p-4">
                <p className="text-[#FF4A00] text-sm font-medium">
                  Most apps stay the same. Pryima upgrades itself around you.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 6 – STEP 5: PRECISION INSIGHTS & RECOMMENDATIONS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-bold mb-6">
                Step 5 · Precision Recommendations
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                From generic advice to hyper-personal coaching.
              </h3>
              
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                After about 30 days, Pryima shifts into high-precision mode. It begins delivering actionable, specific recommendations that are built entirely from your data:
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="bg-charcoal-800/50 border border-cyan-500/20 rounded-lg p-4">
                  <p className="text-gray-300 text-sm">
                    <strong className="text-cyan-400">"You recover 28% faster when you increase Omega-3 intake by 1g."</strong>
                  </p>
                </div>
                <div className="bg-charcoal-800/50 border border-cyan-500/20 rounded-lg p-4">
                  <p className="text-gray-300 text-sm">
                    <strong className="text-cyan-400">"Avoid high-histamine foods after 5PM — your glucose stays elevated into the night."</strong>
                  </p>
                </div>
                <div className="bg-charcoal-800/50 border border-cyan-500/20 rounded-lg p-4">
                  <p className="text-gray-300 text-sm">
                    <strong className="text-cyan-400">"Your deep sleep improves on days when you lift weights before 6PM."</strong>
                  </p>
                </div>
                <div className="bg-charcoal-800/50 border border-cyan-500/20 rounded-lg p-4">
                  <p className="text-gray-300 text-sm">
                    <strong className="text-cyan-400">"Taking magnesium 90 minutes before bed leads to more consistent REM sleep."</strong>
                  </p>
                </div>
              </div>
              
              <p className="text-base text-gray-400 leading-relaxed">
                Every insight is the output of your genetics, labs, microbiome, wearables, and daily choices working together — decoded by your personal AI.
              </p>
            </motion.div>
            
            {/* Right: Recommendation Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="space-y-4">
                {[
                  { icon: Zap, text: "Energy optimization", colorClass: "text-cyan-400" },
                  { icon: Clock, text: "Sleep timing", colorClass: "text-[#FF4A00]" },
                  { icon: Target, text: "Precision dosing", colorClass: "text-cyan-400" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    className="bg-gradient-to-br from-[#02040A]/80 to-[#050814]/80 rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all"
                  >
                    <item.icon className={`w-8 h-8 ${item.colorClass} mb-3`} />
                    <p className="text-white font-medium">{item.text}</p>
                    <p className="text-gray-400 text-sm mt-2">Personalized insights</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 7 – STEP 6: THE LONGER YOU STAY, THE SMARTER IT GETS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-[#02040A]/50 to-[#050814]/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-bold mb-6">
              Step 6 · Compounding Intelligence
            </div>
            
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              The longer you stay, the smarter it gets.
            </h3>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Most health apps give you a snapshot. Pryima gives you a trajectory.
            </p>
          </motion.div>
          
          {/* Timeline */}
          <div className="relative mb-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { label: "Day 0", title: "Baseline", icon: Dna, colorClass: "text-cyan-400" },
                { label: "Day 30", title: "Patterns", icon: BarChart3, colorClass: "text-cyan-400" },
                { label: "Day 90", title: "Precision", icon: Zap, colorClass: "text-[#FF4A00]" },
                { label: "Day 180+", title: "Prediction", icon: Brain, colorClass: "text-cyan-400" },
              ].map((milestone, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-[#02040A]/80 to-[#050814]/80 rounded-xl p-6 border border-cyan-500/20 text-center hover:border-cyan-500/40 transition-all">
                    <milestone.icon className={`w-12 h-12 ${milestone.colorClass} mx-auto mb-4`} />
                    <div className="text-cyan-400 text-xs font-bold mb-2">{milestone.label}</div>
                    <div className="text-white font-semibold">{milestone.title}</div>
                  </div>
                  {i < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Over months, your AI health twin becomes predictive — not just reactive:
            </p>
            
            <ul className="space-y-3 mb-8 text-gray-300 text-left max-w-2xl mx-auto">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Anticipating glucose responses before they happen</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Detecting early signs of burnout or overtraining</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Suggesting the best times of day for your hardest work</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Warning you when your gut or skin microbiome may need support</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Adjusting for seasonal, hormonal, or lifestyle shifts</span>
              </li>
            </ul>
            
            <p className="text-base text-gray-400 mb-6 leading-relaxed">
              Instead of chasing symptoms, you're finally able to get ahead of them.
            </p>
            
            <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-6 text-center">
              <p className="text-cyan-300 text-lg font-medium">
                This is what it feels like when your health finally has its own AI lab.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FINAL MICRO-SECTION – CLOSING CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Every day, Pryima becomes more you — so every decision can move you closer to the life and health you're actually built for.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/pricing">
                <Button className="bg-[#FF4A00] hover:bg-[#FF5A10] text-white px-8 py-6 text-lg font-semibold">
                  Start My Pryima Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/technology" className="text-cyan-400 hover:text-cyan-300 text-lg font-medium flex items-center">
                Learn more about our AI technology
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

