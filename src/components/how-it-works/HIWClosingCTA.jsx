import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HIWClosingCTA() {
  return (
    <section className="py-20 bg-[#02040A] border-t border-white/10">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
          Every day, Pryima becomes more you — so every decision can move you closer to the life and health you’re actually built for.
        </h2>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Link to="/signup">
            <Button className="bg-[#FF4A00] hover:bg-[#FF6B00] text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-[#FF4A00]/20 w-full sm:w-auto">
              Start My Pryima Journey
            </Button>
          </Link>
          <Link to="/technology">
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/5 px-8 py-6 text-lg rounded-full w-full sm:w-auto">
              Learn more about our AI technology
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}