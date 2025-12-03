import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Dna, Activity, Apple, Watch, Microscope, ShoppingCart } from "lucide-react";

export default function Marketplace() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => base44.entities.Product.list(),
  });

  const categories = [
    { id: "all", label: "All Products", icon: ShoppingCart },
    { id: "genetics", label: "Genetics", icon: Dna },
    { id: "labs_hormones", label: "Labs & Hormones", icon: Activity },
    { id: "food_sensitivity", label: "Food Sensitivity", icon: Apple },
    { id: "wearables_cgm", label: "Wearables & CGM", icon: Watch },
    { id: "gut_microbiome", label: "Gut Microbiome", icon: Microscope },
  ];

  const filteredProducts = selectedCategory === "all"
    ? products
    : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#02040A] to-[#050814] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-[#FF4A00] bg-clip-text text-transparent">
              Marketplace
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our curated selection of genetics, lab tests, and health monitoring devices
          </p>
        </div>

        {/* Coming Soon State */}
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-24 h-24 mb-8 rounded-full bg-[#FF4A00]/10 border border-[#FF4A00]/30 flex items-center justify-center animate-pulse">
            <ShoppingCart className="w-10 h-10 text-[#FF4A00]" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Marketplace Coming Soon</h2>
          <p className="text-gray-400 text-lg max-w-xl">
            We are curating the best-in-class health testing and wearable devices for our founding members. Check back soon for exclusive access to genetics, labs, and continuous monitoring tools.
          </p>
          <div className="mt-10">
            <Link to="/signup">
              <Button className="bg-[#FF4A00] hover:bg-[#FF5A10] text-white px-8 py-6">
                Join Waitlist
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}