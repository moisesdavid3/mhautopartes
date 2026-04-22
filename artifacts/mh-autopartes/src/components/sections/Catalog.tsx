import { useState, useMemo } from "react";
import { products, brands, categories } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Settings, Filter, ChevronDown } from "lucide-react";

interface CatalogProps {
  selectedBrand: string | null;
  setSelectedBrand: (brand: string | null) => void;
}

export function Catalog({ selectedBrand, setSelectedBrand }: CatalogProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchesBrand = selectedBrand ? p.brand === selectedBrand : true;
      const matchesCategory = selectedCategories.length > 0 ? selectedCategories.includes(p.category) : true;
      const matchesType = selectedTypes.length > 0 ? selectedTypes.includes(p.type) : true;
      return matchesBrand && matchesCategory && matchesType;
    });
  }, [selectedBrand, selectedCategories, selectedTypes]);

  const toggleCategory = (cat: string) => {
    setSelectedCategories(prev => prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]);
  };

  const toggleType = (type: string) => {
    setSelectedTypes(prev => prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]);
  };

  const generateWhatsAppLink = (productName: string, brand: string, model: string) => {
    const text = `Hola MH Autopartes, deseo consultar disponibilidad del repuesto: ${productName} para el vehículo ${brand} ${model}`;
    return `https://wa.me/573245934559?text=${encodeURIComponent(text)}`;
  };

  const CheckIcon = () => (
    <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 5L4.5 8.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <section id="catalogo" className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">

        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">Catálogo de Repuestos</h2>
          <p className="text-gray-500 mt-1">Repuestos originales y homologados para tu vehículo</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">

          {/* Mobile Filter Toggle */}
          <button
            className="md:hidden flex items-center justify-between w-full bg-white p-4 rounded-lg border border-gray-200 text-gray-800"
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
          >
            <span className="flex items-center gap-2 font-bold"><Filter size={20} /> Filtros</span>
            <ChevronDown size={20} className={`transition-transform ${mobileFiltersOpen ? "rotate-180" : ""}`} />
          </button>

          {/* Sidebar Filters */}
          <div className={`md:w-56 flex-shrink-0 flex flex-col gap-6 bg-white p-5 rounded-xl border border-gray-200 self-start ${mobileFiltersOpen ? "block" : "hidden md:block"}`}>
            <div>
              <h3 className="text-sm font-black text-gray-800 mb-3 uppercase tracking-wider border-b border-gray-100 pb-2">Marca</h3>
              <div className="flex flex-col gap-2">
                {brands.map(brand => (
                  <label key={brand} className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative flex items-center justify-center flex-shrink-0">
                      <input
                        type="checkbox"
                        checked={selectedBrand === brand}
                        onChange={() => setSelectedBrand(selectedBrand === brand ? null : brand)}
                        className="peer sr-only"
                      />
                      <div className="w-5 h-5 border-2 border-gray-300 rounded group-hover:border-[#215BE1] peer-checked:bg-[#215BE1] peer-checked:border-[#215BE1] transition-colors flex items-center justify-center">
                        <span className="opacity-0 peer-checked:opacity-100 text-white hidden peer-checked:flex"><CheckIcon /></span>
                      </div>
                    </div>
                    <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">{brand}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-black text-gray-800 mb-3 uppercase tracking-wider border-b border-gray-100 pb-2">Categoría</h3>
              <div className="flex flex-col gap-2">
                {categories.map(cat => (
                  <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative flex items-center justify-center flex-shrink-0">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(cat)}
                        onChange={() => toggleCategory(cat)}
                        className="peer sr-only"
                      />
                      <div className="w-5 h-5 border-2 border-gray-300 rounded group-hover:border-[#215BE1] peer-checked:bg-[#215BE1] peer-checked:border-[#215BE1] transition-colors flex items-center justify-center">
                        <span className="opacity-0 peer-checked:opacity-100 text-white hidden peer-checked:flex"><CheckIcon /></span>
                      </div>
                    </div>
                    <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-black text-gray-800 mb-3 uppercase tracking-wider border-b border-gray-100 pb-2">Tipo</h3>
              <div className="flex flex-col gap-2">
                {["Original", "Homologado"].map(type => (
                  <label key={type} className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative flex items-center justify-center flex-shrink-0">
                      <input
                        type="checkbox"
                        checked={selectedTypes.includes(type)}
                        onChange={() => toggleType(type)}
                        className="peer sr-only"
                      />
                      <div className="w-5 h-5 border-2 border-gray-300 rounded group-hover:border-[#215BE1] peer-checked:bg-[#215BE1] peer-checked:border-[#215BE1] transition-colors flex items-center justify-center">
                        <span className="opacity-0 peer-checked:opacity-100 text-white hidden peer-checked:flex"><CheckIcon /></span>
                      </div>
                    </div>
                    <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {(selectedBrand || selectedCategories.length > 0 || selectedTypes.length > 0) && (
              <button
                onClick={() => { setSelectedBrand(null); setSelectedCategories([]); setSelectedTypes([]); }}
                className="text-sm text-[#215BE1] hover:underline font-semibold text-left"
              >
                Limpiar filtros
              </button>
            )}
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="mb-4 flex justify-between items-center">
              <span className="text-sm text-gray-500">{filteredProducts.length} resultado{filteredProducts.length !== 1 ? "s" : ""}</span>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="bg-white border border-gray-200 rounded-xl p-12 text-center flex flex-col items-center shadow-sm">
                <Settings size={48} className="text-gray-300 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">No se encontraron repuestos</h3>
                <p className="text-gray-500">Intenta ajustar los filtros.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <AnimatePresence>
                  {filteredProducts.map((product) => (
                    <motion.div
                      key={product.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      data-testid={`card-product-${product.id}`}
                      className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-[#215BE1]/40 transition-all hover:shadow-lg group flex flex-col"
                    >
                      {/* Product image */}
                      <div className="aspect-[4/3] overflow-hidden relative bg-gray-100">
                        <img
                          src={product.photo}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            const t = e.target as HTMLImageElement;
                            t.style.display = "none";
                          }}
                        />
                        <div className="absolute top-3 left-3">
                          <span className={`px-2.5 py-1 text-xs font-bold uppercase rounded-full ${
                            product.type === "Original"
                              ? "bg-[#215BE1] text-white"
                              : "bg-amber-100 text-amber-700 border border-amber-200"
                          }`}>
                            {product.type}
                          </span>
                        </div>
                      </div>

                      <div className="p-4 flex-1 flex flex-col">
                        <div className="text-xs font-bold text-[#215BE1] uppercase tracking-wider mb-1">
                          {product.brand} — {product.model}
                        </div>
                        <h3 className="text-base font-bold text-gray-900 mb-2 leading-tight flex-1">
                          {product.name}
                        </h3>
                        <div className="text-xl font-black text-gray-900 mb-4">
                          {product.price}
                        </div>

                        <a
                          href={generateWhatsAppLink(product.name, product.brand, product.model)}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-testid={`whatsapp-btn-${product.id}`}
                          className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 px-4 rounded-lg transition-colors"
                        >
                          <MessageCircle size={18} />
                          Consultar disponibilidad
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
