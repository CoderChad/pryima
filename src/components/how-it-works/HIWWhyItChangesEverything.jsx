import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function HIWWhyItChangesEverything() {
  const benefits = [
    "Personalized interventions with scientific precision",
    "Predictive modeling that shows what will happen before it happens",
    "Unified data (genetics → microbiome → wearables) that no other platform integrates",
    "Continuous coaching powered by an evolving AI",
    "A real-time dashboard of your entire health system"
  ];

  return (
    <section className="py-32 bg-[#000000] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        <div className="absolute right-0 top-0 w-1/2 h-full bg-[#FF4A00]/5 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                    <h2 className="text-5xl font-bold text-white mb-12">Why This <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Changes Everything</span></h2>
                    <ul className="space-y-6">
                        {benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-4">
                                <CheckCircle2 className="w-6 h-6 text-[#FF4A00] flex-shrink-0 mt-1" />
                                <span className="text-xl text-gray-300 font-light">{benefit}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="order-1 lg:order-2 relative">
                     <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 relative">
                        <img 
                            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000" 
                            alt="Future Interface" 
                            className="w-full h-full object-cover opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                     </div>
                </div>
            </div>
        </div>
    </section>
  );
}