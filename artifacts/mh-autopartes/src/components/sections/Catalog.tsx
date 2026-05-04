import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { catalogCategories, type Category } from "@/lib/catalogData";
import mazdaBgImg from "@assets/marcas/mazda_catalog.jpg";
import { randomWaLink, randomWaNumber } from "@/lib/whatsapp";

function buildWhatsAppLink(category: string, subcategory?: string) {
  const text = subcategory
    ? `Hola MH Autopartes, estoy buscando *${subcategory}* (${category}). ¿Tienen disponibilidad?`
    : `Hola MH Autopartes, estoy buscando repuestos de *${category}*. ¿Tienen disponibilidad?`;
  return randomWaLink(text);
}

function SubcategoryPanel({ category }: { category: Category }) {
  if (category.subcategories.length === 0) {
    return (
      <div className="flex justify-center py-8">
        <a
          href={buildWhatsAppLink(category.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-8 py-4 rounded-xl transition-colors shadow-lg text-base"
        >
          <MessageCircle size={22} />
          Consultar disponibilidad de {category.name}
        </a>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
      {category.subcategories.map((sub, i) => (
        <motion.a
          key={sub.name}
          href={buildWhatsAppLink(category.name, sub.name)}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.035, duration: 0.2 }}
          className="relative group overflow-hidden rounded-xl aspect-[3/4] focus:outline-none"
        >
          <img
            src={sub.image}
            alt={sub.name}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=500&q=80&auto=format";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 group-hover:from-[#215BE1]/80 group-hover:via-[#215BE1]/30 transition-all duration-300" />
          <div className="absolute bottom-0 left-0 p-3">
            <p className="text-white font-black text-sm leading-tight drop-shadow">{sub.name}</p>
            <span className="inline-flex items-center gap-1 mt-2 bg-[#215BE1] text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-md tracking-wide">
              <MessageCircle size={11} />
              Consultar
            </span>
          </div>
        </motion.a>
      ))}
    </div>
  );
}

export function Catalog() {
  const [activeId, setActiveId] = useState<string>(catalogCategories[0].id);
  const [userSelected, setUserSelected] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAuto = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveId(prev => {
        const idx = catalogCategories.findIndex(c => c.id === prev);
        return catalogCategories[(idx + 1) % catalogCategories.length].id;
      });
    }, 5000);
  };

  useEffect(() => {
    if (!userSelected) startAuto();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [userSelected]);

  const handleSelect = (id: string) => {
    setActiveId(id);
    setUserSelected(true);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const activeCategory = catalogCategories.find(c => c.id === activeId)!;

  return (
    <section id="catalogo" className="py-16 bg-white relative overflow-hidden">
      {/* Faded Mazda background */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <img
          src={mazdaBgImg}
          alt=""
          className="w-full h-full object-cover object-center opacity-[0.30]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-white/20" />
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">

        <div className="mb-8">
<h2 className="text-3xl md:text-4xl font-black text-gray-900">Encuentra tu repuesto y pregúntanos</h2>
          <p className="text-gray-500 mt-1">Selecciona una categoría para ver los repuestos disponibles</p>
        </div>

        {/* Category buttons */}
        <div className="flex flex-wrap gap-2 mb-8">
          {catalogCategories.map((cat) => {
            const isActive = activeId === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleSelect(cat.id)}
                className={`px-4 py-2.5 rounded-lg font-bold text-sm transition-all duration-200 border-2 focus:outline-none ${
                  isActive
                    ? "bg-[#215BE1] border-[#215BE1] text-white shadow-md"
                    : "bg-white border-gray-200 text-gray-700 hover:border-[#215BE1]/50 hover:text-[#215BE1]"
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <SubcategoryPanel category={activeCategory} />
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
