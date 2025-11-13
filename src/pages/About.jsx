import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#02040A] to-[#050814] py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-[#FF4A00] bg-clip-text text-transparent">
              About Pryima
            </span>
          </h1>
          <p className="text-gray-400 text-xl">
            Building the future of personalized health
          </p>
        </div>

        <div className="space-y-12">
          <div className="rounded-2xl border border-[#FF4A00]/30 bg-gradient-to-br from-black/80 to-[#050814]/80 backdrop-blur-md p-8">
            <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Pryima is building the world's first true Health OS—a system that transforms raw health data from genetics, labs, microbiome, and wearables into actionable intelligence. We believe everyone deserves to understand their biology at a deep level and have the tools to optimize their health on their own terms.
            </p>
          </div>

          <div className="rounded-2xl border border-[#FF4A00]/30 bg-gradient-to-br from-black/80 to-[#050814]/80 backdrop-blur-md p-8">
            <h2 className="text-3xl font-bold text-white mb-4">Why We're Different</h2>
            <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
              <p>
                Unlike traditional health apps that focus on a single data source, Pryima integrates everything—your DNA, blood biomarkers, gut microbiome, continuous glucose, and wearable data—into one unified operating system.
              </p>
              <p>
                Our AI doesn't just show you numbers. It decodes patterns across your entire biology and translates them into daily actions: what to eat, when to train, how to recover, and how to track your progress over time.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-[#FF4A00]/30 bg-gradient-to-br from-black/80 to-[#050814]/80 backdrop-blur-md p-8">
            <h2 className="text-3xl font-bold text-white mb-4">Founding Cohort Benefits</h2>
            <ul className="space-y-3 text-gray-400 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-[#FF4A00] font-bold">•</span>
                <span>Lock in founding member pricing (save up to 50%)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FF4A00] font-bold">•</span>
                <span>Lifetime access option (Full Omics tier)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FF4A00] font-bold">•</span>
                <span>Priority access to new features and testing pilots</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FF4A00] font-bold">•</span>
                <span>Direct feedback channel to shape the product</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FF4A00] font-bold">•</span>
                <span>Exclusive Founding Member badge in the app</span>
              </li>
            </ul>
          </div>

          <div className="text-center pt-8">
            <Link to="/signup">
              <Button className="bg-gradient-to-r from-[#FF4A00] to-[#FF6B00] hover:from-[#FF5A10] hover:to-[#FF7B10] text-white px-12 py-6 text-xl font-bold shadow-2xl shadow-[#FF4A00]/50">
                Join the Founding Cohort
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}