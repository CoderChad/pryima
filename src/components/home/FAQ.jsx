import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What exactly is Pryima Health OS?",
      answer: "Pryima is the world's first AI-powered Health Operating System that integrates genetics, lab tests, microbiome data, wearables, and CGM into one unified platform. Our AI decodes your multi-omic data and translates it into daily actions, nutrition targets, and personalized protocols.",
    },
    {
      question: "How is Pryima different from other health apps?",
      answer: "Unlike apps that focus on a single data source, Pryima integrates everything—DNA, blood biomarkers, gut microbiome, continuous glucose, and wearable data. Our AI doesn't just show numbers; it finds patterns across your entire biology and gives you actionable steps to optimize your health.",
    },
    {
      question: "Is Pryima a medical device or diagnostic tool?",
      answer: "No. Pryima is a wellness optimization platform, not a medical device. All lab testing is handled through CLIA-certified partners, but Pryima does not diagnose, treat, or cure any medical condition. Always consult your physician for medical advice.",
    },
    {
      question: "What's included in the founding member tiers?",
      answer: "Core Genome ($500) includes genetics + Health OS access. Systems Deep Dive ($1,499) adds comprehensive hormone panels, stress/cortisol testing, food sensitivity, and metabolic markers. Full Omics Lifetime ($3,499) includes everything plus gut and skin microbiome analysis with lifetime access to the Health OS.",
    },
    {
      question: "How long does it take to get my results?",
      answer: "After you collect your samples and connect your devices, most lab results are processed within 2-3 weeks. Genetic data typically takes 4-6 weeks. Once received, our AI immediately begins analyzing your data and generating personalized protocols.",
    },
    {
      question: "Can I use Pryima if I already have genetic data?",
      answer: "Yes! If you've already done genetic testing through services like 23andMe or AncestryDNA, you can upload your raw data to Pryima. Our AI will integrate it with your other health data for comprehensive analysis.",
    },
    {
      question: "What devices and wearables does Pryima support?",
      answer: "Pryima currently supports Apple Watch, Oura Ring, Whoop, and Dexcom CGM. We're continuously adding support for more devices. If you don't have a wearable, you can still use Pryima—just your insights will be based on genetics, labs, and microbiome data.",
    },
    {
      question: "Is my health data private and secure?",
      answer: "Absolutely. We use bank-level encryption for all data transmission and storage. Your data is never sold to third parties. You maintain full control and can delete your data at any time from your dashboard.",
    },
    {
      question: "What if I'm not satisfied with Pryima?",
      answer: "We're confident you'll love Pryima, but if you're not satisfied within the first 30 days, contact our support team. We'll work with you to address any concerns. Note that lab tests and genetic testing cannot be refunded once processed.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your monthly subscription ($9.99/month for Core Genome tier) at any time. Full Omics Lifetime members have permanent access with no ongoing subscription. Systems Deep Dive is a one-time payment with no recurring charges.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#050814] to-[#02040A]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Frequently Asked </span>
            <span className="bg-gradient-to-r from-[#FF4A00] to-[#FF6B00] bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Everything you need to know about Pryima Health OS
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-[#FF4A00]/30 bg-gradient-to-br from-black/80 to-[#050814]/80 backdrop-blur-md overflow-hidden hover:border-[#FF4A00]/50 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <h3 className="text-lg font-semibold text-white pr-8">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-[#FF4A00] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <a
            href="/contact"
            className="inline-block text-[#FF4A00] hover:text-[#FF5A10] font-semibold transition-colors"
          >
            Get in touch with our team →
          </a>
        </div>
      </div>
    </section>
  );
}