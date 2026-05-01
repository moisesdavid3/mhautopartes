import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import mhLogo from "@assets/mh_logo.png";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "REPUESTOS", href: "#catalogo" },
    { name: "NOSOTROS", href: "#nosotros" },
    { name: "CONTACTO", href: "#tiendas" },
  ];

  return (
    <header className="sticky top-0 w-full z-50 shadow-lg">
      {/* Main navbar */}
      <div className="bg-[#0B1526]">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16">
          <a href="#" className="flex items-center">
            <img
              src={mhLogo}
              alt="MH Autopartes"
              className="h-12 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-white/90 hover:text-white hover:bg-[#215BE1] px-5 py-5 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-[#0B1526] border-t border-white/10 flex flex-col md:hidden overflow-hidden"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white/90 hover:text-white hover:bg-[#215BE1] px-6 py-4 text-sm font-semibold transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}