import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";
import { Button } from "@/components/ui/button";
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

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl border-2 transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "border-[#FF4A00] bg-[#FF4A00]/10 text-[#FF4A00]"
                    : "border-[#FF4A00]/20 text-gray-400 hover:border-[#FF4A00]/50 hover:text-white"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{category.label}</span>
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        {isLoading ? (
          <div className="text-center text-gray-400 py-20">Loading products...</div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg mb-4">No products available yet.</p>
            <p className="text-gray-500 text-sm">Check back soon for exciting health testing options!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group rounded-2xl border border-[#FF4A00]/30 bg-gradient-to-br from-black/80 to-[#050814]/80 backdrop-blur-md overflow-hidden hover:border-[#FF4A00] transition-all duration-500 hover:shadow-xl hover:shadow-[#FF4A00]/20"
              >
                {product.image_url && (
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={product.image_url}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[#FF4A00]">
                      ${product.price}
                      {product.is_subscription && (
                        <span className="text-sm text-gray-400 ml-1">/{product.subscription_interval}</span>
                      )}
                    </span>
                    <Button className="bg-[#FF4A00] hover:bg-[#FF5A10] text-white">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}