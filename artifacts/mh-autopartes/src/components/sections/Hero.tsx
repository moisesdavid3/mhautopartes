import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { SiChevrolet, SiMazda, SiRenault, SiKia, SiHyundai, SiFord } from "react-icons/si";

interface HeroProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}

export function Hero({ searchQuery, setSearchQuery }: HeroProps) {
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const catalog = document.getElementById("catalogo");
    if (catalog) catalog.scrollIntoView({ behavior: "smooth" });
  };

  const brandIcons = [
    { name: "Mazda", icon: SiMazda, color: "#cc0000" },
    { name: "Chevrolet", icon: SiChevrolet, color: "#CC0000" },
    { name: "Renault", icon: SiRenault, color: "#FFCC00" },
    { name: "Kia", icon: SiKia, color: "#BB162B" },
    { name: "Hyundai", icon: SiHyundai, color: "#002C5F" },
    { name: "Ford", icon: SiFord, color: "#003478" },
  ];

  // Pixel stripe colors
  const pixelColors = ["#F5C518","#F5C518","#E91E8C","#E91E8C","#FFFFFF","#FFFFFF","#215BE1","#215BE1"];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0B1526] via-[#0F2052] to-[#215BE1]">
      {/* Diagonal decorative shape */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-[#215BE1]/20 skew-x-[-12deg] translate-x-1/4 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          
          {/* Left: MH Logo circle */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <div className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-[#0B1526] border-4 border-white/20 flex items-center justify-center overflow-hidden shadow-2xl">
              <img 
                src="https://mhautopartes.com/wp-content/uploads/2018/06/logo-MH.png"
                alt="MH Autopartes"
                className="w-32 h-32 md:w-44 md:h-44 object-contain"
              />
            </div>
          </motion.div>

          {/* Right: Headline, pixel stripe, brand logos, search */}
          <div className="flex-1 text-center md:text-left">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
              <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-2">
                MH <span className="text-white">Autopartes</span>
              </h1>
              
              {/* Pixel stripe - brand identity */}
              <div className="flex mb-6 mt-2">
                {Array.from({ length: 32 }).map((_, i) => (
                  <div 
                    key={i} 
                    className="h-4 flex-1"
                    style={{ backgroundColor: pixelColors[i % pixelColors.length], minWidth: 8 }}
                  />
                ))}
              </div>

              <p className="text-white/80 text-lg mb-6 max-w-xl">
                Especialistas en repuestos originales y homologados para las marcas más confiables. 21+ años de experiencia en Medellín.
              </p>
            </motion.div>
            
            {/* Search bar */}
            <motion.form 
              onSubmit={handleSearch} 
              className="flex max-w-xl mb-8 shadow-xl"
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="¿Qué repuesto buscas? Ej: Pastillas Mazda 3" 
                  className="w-full bg-white border-none py-4 pl-12 pr-4 text-base text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#215BE1] rounded-none"
                />
              </div>
              <button 
                type="submit" 
                className="bg-[#215BE1] hover:bg-[#1a4bc7] text-white font-bold py-4 px-8 transition-colors uppercase text-sm tracking-wide flex-shrink-0"
              >
                Buscar
              </button>
            </motion.form>

            {/* Brand logos */}
            <motion.div 
              className="flex flex-wrap gap-6 items-center justify-center md:justify-start"
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {brandIcons.map(({ name, icon: Icon, color }) => (
                <div key={name} className="flex flex-col items-center gap-1 group cursor-pointer">
                  <Icon size={40} color="white" className="opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                  <span className="text-[10px] text-white/70 font-semibold uppercase">{name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom pixel stripe */}
      <div className="flex w-full">
        {Array.from({ length: 64 }).map((_, i) => (
          <div 
            key={i} 
            className="h-3 flex-1"
            style={{ backgroundColor: pixelColors[i % pixelColors.length], minWidth: 4 }}
          />
        ))}
      </div>
    </section>
  );
}