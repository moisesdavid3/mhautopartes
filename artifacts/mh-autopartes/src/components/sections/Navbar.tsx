import { useState } from "react";
import { Menu, X, Phone, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SiInstagram, SiFacebook } from "react-icons/si";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "INICIO", href: "#" },
    { name: "NOSOTROS", href: "#nosotros" },
    { name: "PRODUCTOS", href: "#catalogo" },
    { name: "TIENDAS", href: "#tiendas" },
    { name: "CONTACTO", href: "#tiendas" },
  ];

  return (
    <header className="sticky top-0 w-full z-50 shadow-lg">
      {/* Top announcement bar */}
      <div className="bg-[#215BE1] text-white text-xs py-2 px-4">
        <div className="container mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 font-semibold">
              <Phone size={12} />
              Línea Única: (604) 444 56 65
            </span>
            <span className="hidden sm:flex items-center gap-1.5 text-white/80">
              <Clock size={12} />
              Lun–Sáb 8am–6pm
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://instagram.com/mhautopartes" target="_blank" rel="noreferrer" aria-label="Instagram"
              className="text-white/80 hover:text-white transition-colors">
              <SiInstagram size={14} />
            </a>
            <a href="https://facebook.com/Mhautopartes" target="_blank" rel="noreferrer" aria-label="Facebook"
              className="text-white/80 hover:text-white transition-colors">
              <SiFacebook size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="bg-[#0B1526]">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16">
          <a href="#" className="flex items-center">
            <img
              src="https://mhautopartes.com/wp-content/uploads/2018/06/logo-MH.png"
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