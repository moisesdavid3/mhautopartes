import { Search } from "lucide-react";
import { motion } from "framer-motion";

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

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-20 overflow-hidden bg-background">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800/40 via-background to-background"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-[120px]"></div>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDQwaDQwVjBIMHoiLz48L2c+PC9zdmc+')] opacity-50"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">21+ años de experiencia en Medellín, Colombia</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6 leading-[1.1]">
            El repuesto que necesitas,<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
              en el momento exacto.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light">
            Especialistas en autopartes originales y homologadas para las marcas más confiables del mercado. Encuentra lo que buscas y recíbelo rápido.
          </p>

          <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto w-full group">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl transition-all duration-500 group-hover:bg-primary/30 opacity-0 group-hover:opacity-100"></div>
            <div className="relative flex items-center bg-card border-2 border-border focus-within:border-primary/50 rounded-full overflow-hidden shadow-2xl transition-all">
              <div className="pl-6 text-muted-foreground">
                <Search size={24} />
              </div>
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="¿Qué repuesto buscas? Ej: Pastillas Mazda 3" 
                className="w-full bg-transparent border-none py-5 px-4 text-lg text-white placeholder:text-muted-foreground focus:outline-none focus:ring-0"
              />
              <button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-5 px-8 transition-colors">
                Buscar
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
