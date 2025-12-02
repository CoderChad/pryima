import React from "react";
import HIWHero from "../components/how-it-works/HIWHero";
import Step1Baseline from "../components/how-it-works/Step1Baseline";
import Step2RealTimeData from "../components/how-it-works/Step2RealTimeData";
import Step3PatternRecognition from "../components/how-it-works/Step3PatternRecognition";
import Step4ContinuousRetraining from "../components/how-it-works/Step4ContinuousRetraining";
import Step5PrecisionInsights from "../components/how-it-works/Step5PrecisionInsights";
import Step6CompoundingIntelligence from "../components/how-it-works/Step6CompoundingIntelligence";
import HIWClosingCTA from "../components/how-it-works/HIWClosingCTA";

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-[#02040A]">
      <HIWHero />
      <Step1Baseline />
      <Step2RealTimeData />
      <Step3PatternRecognition />
      <Step4ContinuousRetraining />
      <Step5PrecisionInsights />
      <Step6CompoundingIntelligence />
      <HIWClosingCTA />
    </div>
  );
}