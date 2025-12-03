import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function HIWClosingCTA() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#050814] to-[#02040A] text-center border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 leading-tight">
          Every day, Pryima becomes more you — <br className="hidden md:block"/>
          so every decision can move you closer to the life and health you’re actually built for.
        </h2>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link to="/signup">
            <Button className="bg-[#FF4A00] hover:bg-[#FF6B00] text-white px-10 py-6 text-lg rounded-full shadow-lg shadow-[#FF4A00]/20 transition-all hover:scale-105">
              Start My Pryima Journey
            </Button>
          </Link>
          
          <Link to="/technology" className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors">
            Learn more about our AI technology
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}