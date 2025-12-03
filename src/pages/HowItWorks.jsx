import React from "react";
import HIWNewHero from "../components/how-it-works/HIWNewHero";
import HIWProcessSteps from "../components/how-it-works/HIWProcessSteps";
import HIWAIEngine from "../components/how-it-works/HIWAIEngine";
import HIWDigitalTwin from "../components/how-it-works/HIWDigitalTwin";
import HIWWhyItChangesEverything from "../components/how-it-works/HIWWhyItChangesEverything";
import HIWFoundingMemberCTA from "../components/how-it-works/HIWFoundingMemberCTA";

export default function HowItWorks() {
  return (
    <div className="bg-[#02040A] min-h-screen">
      <HIWNewHero />
      <HIWProcessSteps />
      <HIWAIEngine />
      <HIWDigitalTwin />
      <HIWWhyItChangesEverything />
      <HIWFoundingMemberCTA />
    </div>
  );
}