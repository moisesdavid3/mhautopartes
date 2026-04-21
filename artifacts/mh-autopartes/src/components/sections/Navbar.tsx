import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "/#" },
    { name: "Catálogo", href: "#catalogo" },
    { name: "Tiendas", href: "#tiendas" },
    { name: "Nosotros", href: "#nosotros" },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm py-3" : "bg-transparent py-5"}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex flex-col items-start gap-0">
          <span className="text-2xl font-black tracking-tight text-white uppercase leading-none">
            MH<span className="text-primary">AUTOPARTES</span>
          </span>
          <span className="text-[10px] text-muted-foreground uppercase font-semibold tracking-widest">
            Precisión en cada repuesto
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-card border-b border-border shadow-lg py-4 px-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium text-muted-foreground hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
