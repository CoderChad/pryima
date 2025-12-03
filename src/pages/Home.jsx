import React from "react";
import AnimatedHero from "../components/home/AnimatedHero";
import DNASection from "../components/home/DNASection";
import FeatureShowcase from "../components/home/FeatureShowcase";
import PersonasSection from "../components/home/PersonasSection";
import WhyPryima from "../components/home/WhyPryima";
import QuizPreview from "../components/home/QuizPreview";
import DataStackSection from "../components/home/DataStackSection";
import PricingSection from "../components/home/PricingSection";
import WearablesIntegration from "../components/home/WearablesIntegration";
import BottomCTA from "../components/home/BottomCTA";

export default function Home() {
  return (
    <div className="bg-[#02040A]">
      <AnimatedHero />
      <FeatureShowcase />
      <DNASection />
      <PersonasSection />
      <WhyPryima />
      <QuizPreview />
      <DataStackSection />
      <PricingSection />
      <WearablesIntegration />
      <BottomCTA />
    </div>
  );
}