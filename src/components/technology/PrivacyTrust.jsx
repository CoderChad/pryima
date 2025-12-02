import React from "react";
import { Shield, Lock, FileCheck, EyeOff } from "lucide-react";

export default function PrivacyTrust() {
  return (
    <section className="py-20 bg-[#02040A]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-16 h-16 mx-auto bg-[#FF4A00]/10 rounded-2xl flex items-center justify-center mb-8 border border-[#FF4A00]/20">
          <Shield className="w-8 h-8 text-[#FF4A00]" />
        </div>
        
        <h2 className="text-3xl font-bold text-white mb-4">Your Body, Your Data.</h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          We believe health data is sensitive property. Pryima is built on a foundation of privacy and user control.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Lock, title: "Encrypted & Secure", desc: "AES-256 encryption at rest and in transit. Your data is safe." },
            { icon: EyeOff, title: "No Data Sales", desc: "We never sell your personal health data to third parties or advertisers." },
            { icon: FileCheck, title: "Vetted Partners", desc: "We only work with CLIA/CAP-certified labs and HIPAA-compliant partners." }
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 text-left hover:bg-white/8 transition-colors">
              <item.icon className="w-6 h-6 text-gray-300 mb-4" />
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}