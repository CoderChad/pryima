import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { base44 } from "@/api/base44Client";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/CartContext";

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const { getCartItemCount } = useCart();
  const [user, setUser] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const cartItemCount = getCartItemCount();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const currentUser = await base44.auth.me();
        setUser(currentUser);
      } catch (error) {
        setUser(null);
      }
    };
    checkAuth();
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Marketplace", path: "/marketplace" },
    { name: "Technology", path: "/technology" },
    { name: "Pricing", path: "/pricing" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-[#02040A] text-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#02040A]/95 backdrop-blur-lg border-b border-[#FF4A00]/10" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69156bec7bead1484355f40e/9f96dd451_pryima.png" 
                  alt="Pryima Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Pryima Health OS
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-all hover:text-[#FF4A00] ${
                    isActive(link.path) ? "text-[#FF4A00]" : "text-gray-300"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Auth & Dashboard Links */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Cart Icon */}
              <Link to="/cart" className="relative">
                <button className="p-2 hover:bg-[#FF4A00]/10 rounded-lg transition-colors relative">
                  <ShoppingCart className="w-5 h-5 text-gray-300 hover:text-[#FF4A00]" />
                  {cartItemCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-[#FF4A00] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                      {cartItemCount > 9 ? '9+' : cartItemCount}
                    </span>
                  )}
                </button>
              </Link>
              {user ? (
                <>
                  <Link to="/app">
                    <Button variant="ghost" className="text-gray-300 hover:text-[#FF4A00] hover:bg-[#FF4A00]/10">
                      Dashboard
                    </Button>
                  </Link>
                  {user.role === "admin" && (
                    <Link to="/admin">
                      <Button variant="ghost" className="text-gray-300 hover:text-[#FF4A00] hover:bg-[#FF4A00]/10">
                        Admin
                      </Button>
                    </Link>
                  )}
                  <Button
                    onClick={() => base44.auth.logout()}
                    variant="outline"
                    className="border-[#FF4A00] text-[#FF4A00] hover:bg-[#FF4A00] hover:text-white"
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <Button variant="ghost" className="text-gray-300 hover:text-[#FF4A00] hover:bg-[#FF4A00]/10">
                      Login
                    </Button>
                  </Link>
                  <Link to="/signup">
                    <Button className="bg-[#FF4A00] hover:bg-[#FF5A10] text-white shadow-lg shadow-[#FF4A00]/30">
                      Sign Up
                    </Button>
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-white">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#050814] border-t border-[#FF4A00]/10">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 text-sm font-medium transition-colors ${
                    isActive(link.path) ? "text-[#FF4A00]" : "text-gray-300 hover:text-[#FF4A00]"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              {/* Cart Link for Mobile */}
              <Link
                to="/cart"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 py-2 text-sm font-medium text-gray-300 hover:text-[#FF4A00] transition-colors"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Cart</span>
                {cartItemCount > 0 && (
                  <span className="bg-[#FF4A00] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItemCount > 9 ? '9+' : cartItemCount}
                  </span>
                )}
              </Link>
              <div className="pt-3 border-t border-[#FF4A00]/10 space-y-2">
                {user ? (
                  <>
                    <Link to="/app" onClick={() => setMobileMenuOpen(false)}>
                      <Button variant="ghost" className="w-full text-gray-300 hover:text-[#FF4A00] hover:bg-[#FF4A00]/10">
                        Dashboard
                      </Button>
                    </Link>
                    {user.role === "admin" && (
                      <Link to="/admin" onClick={() => setMobileMenuOpen(false)}>
                        <Button variant="ghost" className="w-full text-gray-300 hover:text-[#FF4A00] hover:bg-[#FF4A00]/10">
                          Admin
                        </Button>
                      </Link>
                    )}
                    <Button
                      onClick={() => {
                        base44.auth.logout();
                        setMobileMenuOpen(false);
                      }}
                      variant="outline"
                      className="w-full border-[#FF4A00] text-[#FF4A00] hover:bg-[#FF4A00] hover:text-white"
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                      <Button variant="ghost" className="w-full text-gray-300 hover:text-[#FF4A00] hover:bg-[#FF4A00]/10">
                        Login
                      </Button>
                    </Link>
                    <Link to="/signup" onClick={() => setMobileMenuOpen(false)}>
                      <Button className="w-full bg-[#FF4A00] hover:bg-[#FF5A10] text-white">
                        Sign Up
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-16 md:pt-20">{children}</main>

      {/* Footer */}
      <footer className="bg-[#050814] border-t border-[#FF4A00]/10 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center">
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69156bec7bead1484355f40e/9f96dd451_pryima.png" 
                    alt="Pryima Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xl font-bold">Pryima Health OS</span>
              </div>
              <p className="text-gray-400 text-sm max-w-md">
                Your AI-powered Health OS. Decode genetics, labs, microbiome, and wearables into daily actions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-[#FF4A00]">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/pricing" className="text-gray-400 hover:text-[#FF4A00] transition-colors">Pricing</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-[#FF4A00] transition-colors">About</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-[#FF4A00] transition-colors">Contact</Link></li>
                <li><Link to="/faq" className="text-gray-400 hover:text-[#FF4A00] transition-colors">FAQ</Link></li>
                </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-[#FF4A00]">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-[#FF4A00] transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#FF4A00] transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#FF4A00] transition-colors">Medical Disclaimer</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-[#FF4A00]/10 text-center text-sm text-gray-500">
            <p>© 2025 Pryima Health OS. All rights reserved. Not a medical device. For wellness optimization only.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}