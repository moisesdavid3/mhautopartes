import { motion } from "framer-motion";

interface CategoriesProps {
  onCategorySelect: (category: string) => void;
}

const categories = [
  {
    name: "Frenos",
    desc: "Discos, pastillas y líquidos",
    bg: "https://images.unsplash.com/photo-1563461660947-507ef49e9c47?w=600&q=80&auto=format",
  },
  {
    name: "Motor",
    desc: "Filtros, bandas, bujías y más",
    bg: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&q=80&auto=format",
  },
  {
    name: "Suspensión",
    desc: "Amortiguadores y bujes",
    bg: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600&q=80&auto=format",
  },
  {
    name: "Transmisión",
    desc: "Embragues y cajas",
    bg: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&q=80&auto=format",
  },
  {
    name: "Lubricantes",
    desc: "Aceites y fluidos",
    bg: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=600&q=80&auto=format",
  },
  {
    name: "Refrigeración",
    desc: "Bombas de agua y termostatos",
    bg: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=80&auto=format",
  },
];

export function Categories({ onCategorySelect }: CategoriesProps) {
  const handleClick = (name: string) => {
    onCategorySelect(name);
    const el = document.getElementById("catalogo");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 bg-[#0B1526]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <p className="text-[#215BE1] text-xs font-bold uppercase tracking-widest mb-2">Explora por categoría</p>
          <h2 className="text-3xl md:text-4xl font-black text-white">Encuentra tu repuesto</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {categories.map((cat, i) => (
            <motion.button
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              onClick={() => handleClick(cat.name)}
              className="relative group overflow-hidden rounded-xl aspect-[3/4] text-left focus:outline-none"
            >
              <img
                src={cat.bg}
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 group-hover:from-[#215BE1]/80 group-hover:via-[#215BE1]/30 transition-all duration-300" />
              <div className="absolute bottom-0 left-0 p-4">
                <p className="text-white font-black text-base leading-tight drop-shadow">{cat.name}</p>
                <p className="text-white/70 text-xs mt-0.5 leading-tight">{cat.desc}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
