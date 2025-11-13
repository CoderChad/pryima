import React from "react";
import AnimatedHero from "../components/home/AnimatedHero";
import DNASection from "../components/home/DNASection";
import PersonasSection from "../components/home/PersonasSection";
import QuizPreview from "../components/home/QuizPreview";
import DataStackSection from "../components/home/DataStackSection";
import PricingSection from "../components/home/PricingSection";
import BottomCTA from "../components/home/BottomCTA";

export default function Home() {
  return (
    <div className="bg-[#02040A]">
      <AnimatedHero />
      <DNASection />
      <PersonasSection />
      <QuizPreview />
      <DataStackSection />
      <PricingSection />
      <BottomCTA />
    </div>
  );
}