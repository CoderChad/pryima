import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LogoRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const drops = [];
    const dropCount = 30;

    for (let i = 0; i < dropCount; i++) {
      drops.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        speed: 1 + Math.random() * 2,
        size: 15 + Math.random() * 25,
        opacity: 0.1 + Math.random() * 0.3,
      });
    }

    const drawLogo = (x, y, size, opacity) => {
      ctx.save();
      ctx.globalAlpha = opacity;
      ctx.strokeStyle = "#FF4A00";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(x, y, size * 0.7, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x, y - size * 0.7);
      ctx.lineTo(x, y + size * 0.7);
      ctx.moveTo(x, y - size * 0.7);
      ctx.lineTo(x + size * 0.3, y - size * 0.4);
      ctx.moveTo(x, y - size * 0.7);
      ctx.lineTo(x - size * 0.3, y - size * 0.4);
      ctx.stroke();
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drops.forEach((drop) => {
        drawLogo(drop.x, drop.y, drop.size, drop.opacity);
        drop.y += drop.speed;

        if (drop.y > canvas.height + 50) {
          drop.y = -50;
          drop.x = Math.random() * canvas.width;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />;
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

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-block">
              <div className="px-4 py-2 rounded-full bg-[#FF4A00]/20 border border-[#FF4A00]/30 backdrop-blur-sm">
                <span className="text-white text-sm font-medium">Your Health, Decoded</span>
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Pryima
                </span>
                <span className="block bg-gradient-to-r from-[#FF4A00] to-[#FF6B00] bg-clip-text text-transparent">
                  Health OS
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed">
                An AI Health OS that turns genetics, labs, microbiome, and wearables into daily actions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/signup">
                <Button className="bg-[#FF4A00] hover:bg-[#FF5A10] text-white px-8 py-6 text-lg font-semibold shadow-lg shadow-[#FF4A00]/30 hover:shadow-[#FF4A00]/50 transition-all">
                  Get Early Access
                </Button>
              </Link>
              <Link to="/marketplace">
                <Button
                  variant="outline"
                  className="border-2 border-[#FF4A00] text-[#FF4A00] hover:bg-[#FF4A00] hover:text-white px-8 py-6 text-lg font-semibold transition-all"
                >
                  Explore Marketplace
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content - Phone Mockup with Watch & CGM */}
          <div className="relative flex items-center justify-center">
            {/* Main Phone Mockup */}
            <div className="relative z-10">
              <div className="w-[300px] md:w-[350px] rounded-[3rem] border-8 border-gray-800 overflow-hidden shadow-2xl shadow-[#FF4A00]/20">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_69156ba898a329326e2742c5/5780c4f0e_mockup.png"
                  alt="Pryima Health OS Dashboard"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Apple Watch - Top Right */}
            <div className="absolute top-0 right-0 md:top-8 md:right-8 z-20 transform rotate-12">
              <div className="w-20 h-24 md:w-24 md:h-28 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 shadow-xl flex items-center justify-center p-2">
                <div className="w-full h-full rounded-xl bg-black flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-10 h-10">
                    <circle cx="50" cy="50" r="30" fill="none" stroke="#FF4A00" strokeWidth="3" />
                    <path d="M 50 25 L 50 75 M 50 25 L 62 37 M 50 25 L 38 37" stroke="#FF4A00" strokeWidth="3" strokeLinecap="round" />
                  </svg>
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