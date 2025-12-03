import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LogoRain = () => {
  const canvasRef = useRef(null);
  const logoImageRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Load the logo image
    const logoImage = new Image();
    logoImage.src = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69156bec7bead1484355f40e/9f96dd451_pryima.png";
    logoImageRef.current = logoImage;

    const drops = [];
    const dropCount = 30;

    for (let i = 0; i < dropCount; i++) {
      drops.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        speed: 1 + Math.random() * 2,
        size: 15 + Math.random() * 25,
        opacity: 0.3 + Math.random() * 0.4,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drops.forEach((drop) => {
        if (logoImage.complete) {
          ctx.save();
          ctx.globalAlpha = drop.opacity;
          ctx.drawImage(logoImage, drop.x - drop.size / 2, drop.y - drop.size / 2, drop.size, drop.size);
          ctx.restore();
        }
        
        drop.y += drop.speed;

        if (drop.y > canvas.height + 50) {
          drop.y = -50;
          drop.x = Math.random() * canvas.width;
        }
      });

      requestAnimationFrame(animate);
    };

    // Wait for image to load before starting animation
    logoImage.onload = () => {
      animate();
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />;
};

const TypewriterTitle = () => {
  const [text, setText] = useState("");
  const fullText = "Pryima";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 200);

    return () => clearInterval(timer);
  }, []);

  return (
    <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
      {text}
      <span className="animate-pulse text-[#FF4A00]">|</span>
    </span>
  );
};

const Lightning = () => {
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    const triggerFlash = () => {
      setFlash(true);
      setTimeout(() => setFlash(false), 150);
      setTimeout(triggerFlash, 5000 + Math.random() * 5000);
    };

    const initialDelay = setTimeout(triggerFlash, 5000);
    return () => clearTimeout(initialDelay);
  }, []);

  return (
    <div
      className={`absolute inset-0 pointer-events-none transition-opacity duration-150 ${
        flash ? "opacity-20" : "opacity-0"
      }`}
      style={{
        background: "radial-gradient(circle at 50% 50%, #FF4A00 0%, transparent 60%)",
      }}
    />
  );
};

export default function AnimatedHero() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#02040A] via-[#050814] to-[#02040A]">
      {/* Background Effects */}
      <LogoRain />
      <Lightning />
      
      {/* Background Logo */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none -translate-y-32">
        <img 
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69156bec7bead1484355f40e/876b3378f_20250914_2023_BlackBackgroundLogo_remix_01k55fe37weqq81p9zc23pxbc61.png" 
          alt="Pryima Background Logo" 
          className="w-[150%] max-w-none object-contain opacity-30 mix-blend-screen"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
          <div className="inline-block">
            <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-[#FF4A00]/10 border border-[#FF4A00]/30 backdrop-blur-sm animate-pulse-slow">
              <div className="w-2 h-2 rounded-full bg-[#FF4A00] animate-pulse"></div>
              <span className="text-white text-sm font-medium">Join 10,000+ High Performers</span>
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Unlock Peak Performance and <br/>
              <span className="bg-gradient-to-r from-[#FF4A00] to-[#FF6B00] bg-clip-text text-transparent">
                Extend Your Healthspan
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
              Our AI decodes your unique biology—genetics, labs, microbiome, and wearables—to deliver personalized daily actions that reduce biological age, skyrocket energy, and optimize longevity.
            </p>

            {/* Enhanced Social Proof Stats */}
            <div className="grid grid-cols-3 gap-4 py-4 border-y border-white/5 bg-white/5 rounded-xl p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#FF4A00]">80%</div>
                <div className="text-xs text-gray-400">Optimize Biomarkers<br/>in 30 Days</div>
              </div>
              <div className="text-center border-l border-white/10">
                <div className="text-2xl font-bold text-[#FF4A00]">65%</div>
                <div className="text-xs text-gray-400">Reduce Biological<br/>Age in 3 Mos</div>
              </div>
              <div className="text-center border-l border-white/10">
                <div className="text-2xl font-bold text-[#FF4A00]">92%</div>
                <div className="text-xs text-gray-400">Boost Stress<br/>Resilience</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/signup">
              <Button className="relative w-full sm:w-auto bg-[#FF4A00] hover:bg-[#FF5A10] text-white px-8 py-6 text-lg font-bold shadow-lg shadow-[#FF4A00]/30 hover:shadow-[#FF4A00]/50 transition-all overflow-hidden group animate-pulse-slow">
                <span className="relative z-10">Claim Your Spot Now – Save 50%</span>
              </Button>
            </Link>
          </div>

          <div className="flex items-center gap-2 text-sm text-[#FF4A00]">
            <div className="w-2 h-2 rounded-full bg-[#FF4A00] animate-pulse" />
            <span className="font-bold">Offer Ends in 48 Hours</span>
            <span className="text-gray-500">– Join Before Spots Fill Up!</span>
          </div>
          </div>

          {/* Right Content - Video/App Demo */}
          <div className="relative flex items-center justify-center lg:translate-x-12">
            {/* Main App Demo - Floating with Parallax */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <div className="w-[300px] md:w-[380px] rounded-[2rem] border border-[#FF4A00]/30 bg-black/90 overflow-hidden shadow-2xl shadow-[#FF4A00]/20 backdrop-blur-xl">
                {/* Faux Video Player UI */}
                <div className="relative aspect-[9/16] bg-gray-900">
                  <div className="absolute inset-0 flex items-center justify-center">
                     {/* Placeholder for video loop - using image for now but styled as video */}
                     <img
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69156bec7bead1484355f40e/1e17eb06a_20250914_1827_FuturisticHealthDashboard_simple_compose_01k558rrn8f89v9e3wnjm47490.png"
                      alt="App Demo"
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                    
                    {/* Play Button Overlay indicating video */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-[#FF4A00]/90 flex items-center justify-center shadow-lg shadow-[#FF4A00]/50 animate-pulse">
                            <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                        </div>
                    </div>

                    {/* Floating UI Elements to simulate live data */}
                    <div className="absolute bottom-6 left-4 right-4">
                        <div className="bg-white/10 backdrop-blur-md p-3 rounded-lg border border-white/10 mb-2">
                            <div className="text-xs text-cyan-400 mb-1">Real-time Analysis</div>
                            <div className="text-sm text-white font-bold">Glucose Spike Detected</div>
                            <div className="text-xs text-gray-400">Take a 10min walk to optimize.</div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Apple Watch - Top Right */}
            <div className="absolute top-0 right-0 md:top-8 md:right-8 z-20 transform rotate-12">
              <div className="w-20 h-24 md:w-24 md:h-28 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 shadow-xl flex items-center justify-center p-2">
                <div className="w-full h-full rounded-xl bg-black flex items-center justify-center">
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69156bec7bead1484355f40e/9f96dd451_pryima.png" 
                    alt="Pryima on Watch" 
                    className="w-10 h-10 object-contain"
                  />
                </div>
              </div>
            </div>

            {/* CGM Sensor - Bottom Left */}
            <div className="absolute bottom-8 left-0 md:bottom-16 md:left-8 z-20 transform -rotate-12">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 border-2 border-gray-600 shadow-xl flex items-center justify-center">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-black flex items-center justify-center border-2 border-[#FF4A00]/30">
                  <div className="w-2 h-2 bg-[#FF4A00] rounded-full animate-pulse" />
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#FF4A00] rounded-full border-2 border-gray-800" />
            </div>

            {/* Floating Stats */}
            <div className="hidden lg:block absolute top-20 left-0 z-20">
              <div className="px-4 py-2 rounded-xl bg-black/80 border border-[#FF4A00]/30 backdrop-blur-md">
                <p className="text-xs text-gray-400">HRV</p>
                <p className="text-lg font-bold text-[#FF4A00]">68 ms</p>
              </div>
            </div>

            <div className="hidden lg:block absolute bottom-32 right-0 z-20">
              <div className="px-4 py-2 rounded-xl bg-black/80 border border-[#FF4A00]/30 backdrop-blur-md">
                <p className="text-xs text-gray-400">Sleep</p>
                <p className="text-lg font-bold text-[#FF4A00]">74%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}