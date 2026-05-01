import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ChevronDown, ChevronRight } from "lucide-react";
import { catalogCategories, type Category } from "@/lib/catalogData";

function buildWhatsAppLink(category: string, subcategory?: string) {
  const text = subcategory
    ? `Hola MH Autopartes, estoy buscando *${subcategory}* (${category}). ¿Tienen disponibilidad?`
    : `Hola MH Autopartes, estoy buscando repuestos de *${category}*. ¿Tienen disponibilidad?`;
  return `https://wa.me/573245934559?text=${encodeURIComponent(text)}`;
}

function SubcategoryGrid({ category }: { category: Category }) {
  if (category.subcategories.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="mt-2 mb-6 flex justify-center"
      >
        <a
          href={buildWhatsAppLink(category.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-8 py-4 rounded-xl transition-colors shadow-lg text-base"
        >
          <MessageCircle size={22} />
          Consultar disponibilidad de {category.name}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25 }}
      className="mt-2 mb-6"
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {category.subcategories.map((sub, i) => (
          <motion.div
            key={sub.name}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.04 }}
            className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-[#215BE1]/50 hover:shadow-lg transition-all flex flex-col"
          >
            <div className="aspect-[4/3] overflow-hidden bg-gray-100">
              <img
                src={sub.image}
                alt={sub.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  const t = e.target as HTMLImageElement;
                  t.src = "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=500&q=80&auto=format";
                }}
              />
            </div>
            <div className="p-3 flex-1 flex flex-col justify-between gap-2">
              <p className="text-sm font-bold text-gray-800 leading-tight">{sub.name}</p>
              <a
                href={buildWhatsAppLink(category.name, sub.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-2 px-3 rounded-lg transition-colors text-xs"
              >
                <MessageCircle size={13} />
                Consultar
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export function Catalog() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => setOpenId(prev => prev === id ? null : id);

  return (
    <section id="catalogo" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">

        <div className="mb-10">
          <p className="text-[#215BE1] text-xs font-bold uppercase tracking-widest mb-2">Lo que tenemos para ti</p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">Catálogo de Repuestos</h2>
          <p className="text-gray-500 mt-1">Selecciona una categoría para ver los repuestos disponibles</p>
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-2">
          {catalogCategories.map((cat) => {
            const isOpen = openId === cat.id;
            return (
              <motion.button
                key={cat.id}
                onClick={() => toggle(cat.id)}
                whileTap={{ scale: 0.97 }}
                className={`relative group overflow-hidden rounded-xl aspect-[4/3] text-left focus:outline-none border-2 transition-all duration-200 ${
                  isOpen
                    ? "border-[#215BE1] shadow-[0_0_0_3px_rgba(33,91,225,0.2)]"
                    : "border-transparent hover:border-[#215BE1]/40"
                }`}
              >
                <img
                  src={cat.coverImage}
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute inset-0 transition-all duration-300 ${
                  isOpen
                    ? "bg-[#215BE1]/80"
                    : "bg-gradient-to-t from-[#0B1526]/85 via-[#0B1526]/50 to-[#0B1526]/20 group-hover:from-[#215BE1]/70 group-hover:via-[#215BE1]/40 group-hover:to-[#215BE1]/10"
                }`} />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center">
                  <span className="text-2xl mb-1">{cat.icon}</span>
                  <p className="text-white font-black text-sm leading-tight drop-shadow">{cat.name}</p>
                  <div className={`mt-1.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
                    <ChevronDown size={16} className="text-white/80" />
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Subcategory panel — renders below the full grid */}
        <AnimatePresence mode="wait">
          {openId && (
            <SubcategoryGrid
              key={openId}
              category={catalogCategories.find(c => c.id === openId)!}
            />
          )}
        </AnimatePresence>

        {/* No selection hint */}
        {!openId && (
          <p className="text-center text-gray-400 text-sm mt-6 pb-2">
            ↑ Haz clic en una categoría para ver sus repuestos
          </p>
        )}
      </div>
    </section>
  );
}
