import React from "react";
import AnimatedHero from "../components/home/AnimatedHero";
import CityVisual from "../components/home/CityVisual";

import FeatureShowcase from "../components/home/FeatureShowcase";
import PersonasSection from "../components/home/PersonasSection";
import WhyPryima from "../components/home/WhyPryima";
import DataStackSection from "../components/home/DataStackSection";
import HowPryimaLearnsYou from "../components/home/HowPryimaLearnsYou";
import PricingSection from "../components/home/PricingSection";
import WearablesIntegration from "../components/home/WearablesIntegration";
import BottomCTA from "../components/home/BottomCTA";

export default function Home() {
  return (
    <div className="bg-[#02040A]">
      <AnimatedHero />
      <CityVisual />
      <FeatureShowcase />
      <PersonasSection />
      <WhyPryima />
      <DataStackSection />
      <HowPryimaLearnsYou />
      <PricingSection />
      <WearablesIntegration />
      <BottomCTA />
    </div>
  );
}