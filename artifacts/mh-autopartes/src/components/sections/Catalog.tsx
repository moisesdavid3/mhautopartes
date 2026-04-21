import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, MessageCircle, ChevronRight } from "lucide-react";

interface CatalogProps {
  searchQuery: string;
  selectedBrand: string | null;
  setSelectedBrand: (brand: string | null) => void;
}

const portfolioItems = [
  {
    name: "NPR®",
    logo: "https://mhautopartes.com/wp-content/uploads/2015/09/THE-GLOBAL-STANDARD.jpg",
    tier: "Premium",
    description: "El estándar global en repuestos de motor y transmisión.",
    whatsapp: "Repuestos NPR",
  },
  {
    name: "SPICER®",
    logo: "https://mhautopartes.com/wp-content/uploads/2015/09/spicer.jpg",
    tier: "Premium",
    description: "Líder mundial en sistemas de transmisión y cardanes.",
    whatsapp: "Repuestos SPICER",
  },
  {
    name: "INCOLBEST®",
    logo: "https://mhautopartes.com/wp-content/uploads/2015/09/incolbest.jpg",
    tier: "Óptimo",
    description: "Fabricante colombiano de repuestos de suspensión y dirección.",
    whatsapp: "Repuestos INCOLBEST",
  },
  {
    name: "SHIBUMI®",
    logo: "https://mhautopartes.com/wp-content/uploads/2015/09/shibumi.jpg",
    tier: "Óptimo",
    description: "Especialista en filtros y lubricantes de alta calidad.",
    whatsapp: "Repuestos SHIBUMI",
  },
  {
    name: "THREE FIVE™",
    logo: "https://mhautopartes.com/wp-content/uploads/2015/09/threefive.jpg",
    tier: "Óptimo",
    description: "Repuestos de calidad homologada para todas las marcas.",
    whatsapp: "Repuestos THREE FIVE",
  },
  {
    name: "Línea Frenos",
    logo: null,
    tier: "Premium",
    description: "Pastillas, discos y tambores para Chevrolet, Mazda, Renault, Kia, Hyundai y Ford.",
    whatsapp: "Repuestos de frenos",
    category: "Frenos",
  },
  {
    name: "Suspensión & Dirección",
    logo: null,
    tier: "Óptimo",
    description: "Amortiguadores, soportes, puntas, cremalleras y buje de suspensión.",
    whatsapp: "Repuestos de suspensión",
    category: "Suspensión",
  },
  {
    name: "Línea Motor",
    logo: null,
    tier: "Premium",
    description: "Filtros, bujías, termostatos, bandas de distribución y bombas de agua.",
    whatsapp: "Repuestos de motor",
    category: "Motor",
  },
  {
    name: "Aceites & Lubricantes",
    logo: null,
    tier: "Óptimo",
    description: "Aceites sintéticos 5W-30 y 10W-40 para todas las marcas especializadas.",
    whatsapp: "Aceites y lubricantes",
    category: "Lubricantes",
  },
];

const exclusiveBrands = [
  "NPR®",
  "SPICER®",
  "INCOLBEST®",
  "SHIBUMI®",
  "THREE FIVE™",
];

const categories = [
  "Motor",
  "Dirección",
  "Afinación",
  "Distribución",
  "Frenado",
  "Refrigeración",
  "Suspensión",
  "Transmisión",
  "Eléctrico",
  "Aceites y lubricantes",
];

type TabFilter = "Todos" | "Óptimo" | "Premium";

export function Catalog({ searchQuery, selectedBrand, setSelectedBrand }: CatalogProps) {
  const [activeTab, setActiveTab] = useState<TabFilter>("Todos");

  const filteredItems = portfolioItems.filter((item) => {
    const matchesTab = activeTab === "Todos" || item.tier === activeTab;
    const matchesSearch =
      !searchQuery ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const generateWhatsAppLink = (productDesc: string) => {
    const text = `Hola MH Autopartes, deseo consultar disponibilidad de: ${productDesc}`;
    return `https://wa.me/573245934559?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="catalogo" className="bg-white">

      {/* Page Banner */}
      <div
        className="relative py-16 md:py-24 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(rgba(10,20,50,0.7), rgba(10,20,50,0.7)), url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1600&q=80&auto=format')",
        }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-2">Productos</h2>
            <p className="text-white/80 text-lg italic">Nuestra calidad es su seguridad</p>
            <div className="flex items-center gap-2 mt-4 text-sm text-white/60">
              <a href="#" className="hover:text-white transition-colors">Home</a>
              <ChevronRight size={14} />
              <span className="text-white/90">Productos</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Two-column content: Nuestros Productos + Marcas Exclusivas */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">

          {/* Left: Nuestros Productos (2/3 width) */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-black text-[#215BE1] uppercase tracking-wide mb-6">
              Nuestros Productos
            </h3>

            <p className="text-gray-700 mb-4 leading-relaxed">
              <span className="float-left text-6xl font-black text-[#215BE1] leading-none mr-2 mt-1">S</span>
              omos Líderes en venta de autopartes en la ciudad de Medellín. Esto nos permite ofrecerle marcas
              exclusivas y garantizadas por sus altos estándares de calidad.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              En nuestras tiendas encontrará{" "}
              <em className="text-[#215BE1] not-italic font-semibold">Marca Exclusiva</em>{" "}
              como sello de calidad para una amplia selección de amortiguadores, soportes, puntas,
              cremalleras, flechas, frenos, filtros, aceites, y mucho más.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Todo en sistema de motor, dirección, afinación, distribución, frenado, refrigeración,
              suspensión, transmisión, eléctrico, aceites y lubricantes.
            </p>

            {/* Category chips */}
            <div className="flex flex-wrap gap-2 mt-6">
              {categories.map((cat) => (
                <span
                  key={cat}
                  className="px-3 py-1 text-xs font-semibold text-[#215BE1] bg-blue-50 border border-blue-200 rounded-full"
                >
                  {cat}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: Marcas Exclusivas (1/3 width) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-black text-[#215BE1] uppercase tracking-wide mb-6">
              Marcas Exclusivas
            </h3>
            <ul className="space-y-3">
              {exclusiveBrands.map((brand) => (
                <li key={brand} className="flex items-center gap-3 text-gray-700 font-semibold">
                  <CheckCircle2 size={20} className="text-[#215BE1] flex-shrink-0" />
                  <span>{brand}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Especialidad = Fortaleza */}
      <div className="bg-gray-50 border-t border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <h3 className="text-3xl font-black text-gray-900 mb-6">Especialidad = Fortaleza</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nos especializamos en los repuestos de suspensión y dirección de vehículos, y eso nos permite
              ofrecerle lo mejor en calidad y precio debido a nuestras relaciones directas con el fabricante.
              Distribuimos marcas pues estas vienen con un respaldo de óptimo rendimiento que excede al equipo
              original de su vehículo.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Ofrecemos diferentes alternativas de productos, tanto premium como económicas, que se acomodan a
              su bolsillo sin comprometer su seguridad de conducción. No solo cuenta con la garantía del
              fabricante sino también con la nuestra, en la selección de marcas de calidad superior para su
              tranquilidad.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Portfolio grid */}
      <div className="container mx-auto px-4 md:px-6 py-16">

        {/* Filter tabs */}
        <div className="flex items-center gap-1 mb-10 flex-wrap">
          <span className="text-sm font-semibold text-gray-500 mr-3">Filtrar por:</span>
          {(["Todos", "Óptimo", "Premium"] as TabFilter[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 text-sm font-bold transition-colors rounded-sm ${
                activeTab === tab
                  ? "bg-[#215BE1] text-white"
                  : "text-gray-600 hover:text-[#215BE1] border border-gray-300 hover:border-[#215BE1] bg-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, i) => (
              <motion.div
                key={item.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2, delay: i * 0.05 }}
                className="bg-white border border-gray-200 rounded overflow-hidden hover:shadow-lg hover:border-[#215BE1]/40 transition-all group flex flex-col"
              >
                {/* Logo/image area */}
                <div className="aspect-[16/9] bg-gray-100 flex items-center justify-center overflow-hidden relative border-b border-gray-100">
                  {item.logo ? (
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        const t = e.target as HTMLImageElement;
                        t.style.display = "none";
                        const parent = t.parentElement;
                        if (parent) {
                          parent.innerHTML = `<span class="text-2xl font-black text-[#215BE1] px-4 text-center">${item.name}</span>`;
                        }
                      }}
                    />
                  ) : (
                    <span className="text-2xl font-black text-[#215BE1] px-4 text-center leading-tight">
                      {item.name}
                    </span>
                  )}

                  {/* Tier badge */}
                  <div className="absolute top-3 right-3">
                    <span
                      className={`px-2 py-0.5 text-xs font-bold rounded ${
                        item.tier === "Premium"
                          ? "bg-[#215BE1] text-white"
                          : "bg-amber-100 text-amber-700 border border-amber-200"
                      }`}
                    >
                      {item.tier}
                    </span>
                  </div>
                </div>

                {/* Card content */}
                <div className="p-5 flex flex-col flex-1">
                  <h4 className="text-lg font-black text-gray-900 mb-2">{item.name}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-4">{item.description}</p>

                  <a
                    href={generateWhatsAppLink(item.whatsapp)}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`whatsapp-btn-${item.name.replace(/\s+/g, "-").toLowerCase()}`}
                    className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 px-4 rounded transition-colors text-sm"
                  >
                    <MessageCircle size={18} />
                    Consultar disponibilidad
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
