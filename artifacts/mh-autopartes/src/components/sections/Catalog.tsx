import { useState, useMemo } from "react";
import { products, brands, categories } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Wrench, Settings, Zap, Filter, ChevronDown, X } from "lucide-react";

interface CatalogProps {
  searchQuery: string;
  selectedBrand: string | null;
  setSelectedBrand: (brand: string | null) => void;
}

export function Catalog({ searchQuery, selectedBrand, setSelectedBrand }: CatalogProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchesSearch = 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        p.model.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesBrand = selectedBrand ? p.brand === selectedBrand : true;
      const matchesCategory = selectedCategories.length > 0 ? selectedCategories.includes(p.category) : true;
      const matchesType = selectedTypes.length > 0 ? selectedTypes.includes(p.type) : true;
      
      return matchesSearch && matchesBrand && matchesCategory && matchesType;
    });
  }, [searchQuery, selectedBrand, selectedCategories, selectedTypes]);

  const toggleCategory = (cat: string) => {
    setSelectedCategories(prev => prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]);
  };

  const toggleType = (type: string) => {
    setSelectedTypes(prev => prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]);
  };

  const generateWhatsAppLink = (productName: string, brand: string, model: string) => {
    const text = `Hola MH Autopartes, deseo consultar disponibilidad del repuesto: ${productName} para el vehículo ${brand} ${model}`;
    return `https://wa.me/573001234567?text=${encodeURIComponent(text)}`;
  };

  const getProductIcon = (index: number) => {
    const icons = [Wrench, Settings, Zap];
    const Icon = icons[index % icons.length];
    return <Icon size={48} className="text-muted-foreground opacity-30" />;
  };

  return (
    <section id="catalogo" className="py-24 bg-background min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Mobile Filter Toggle */}
          <button 
            className="md:hidden flex items-center justify-between w-full bg-card p-4 rounded-lg border border-border"
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
          >
            <span className="flex items-center gap-2 font-bold"><Filter size={20} /> Filtros</span>
            <ChevronDown size={20} className={`transition-transform ${mobileFiltersOpen ? "rotate-180" : ""}`} />
          </button>

          {/* Sidebar Filters */}
          <div className={`md:w-64 flex-shrink-0 flex flex-col gap-8 ${mobileFiltersOpen ? "block" : "hidden md:block"}`}>
            <div>
              <h3 className="text-lg font-bold text-white mb-4 border-b border-border pb-2">Marca</h3>
              <div className="flex flex-col gap-2">
                {brands.map(brand => (
                  <label key={brand} className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative flex items-center justify-center">
                      <input 
                        type="checkbox" 
                        checked={selectedBrand === brand}
                        onChange={() => setSelectedBrand(selectedBrand === brand ? null : brand)}
                        className="peer sr-only"
                      />
                      <div className="w-5 h-5 border-2 border-muted-foreground rounded group-hover:border-primary peer-checked:bg-primary peer-checked:border-primary transition-colors"></div>
                      <div className="absolute opacity-0 peer-checked:opacity-100 text-white">
                        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 5L4.5 8.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round"/></svg>
                      </div>
                    </div>
                    <span className="text-muted-foreground group-hover:text-white transition-colors">{brand}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-4 border-b border-border pb-2">Categoría</h3>
              <div className="flex flex-col gap-2">
                {categories.map(cat => (
                  <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative flex items-center justify-center">
                      <input 
                        type="checkbox" 
                        checked={selectedCategories.includes(cat)}
                        onChange={() => toggleCategory(cat)}
                        className="peer sr-only"
                      />
                      <div className="w-5 h-5 border-2 border-muted-foreground rounded group-hover:border-primary peer-checked:bg-primary peer-checked:border-primary transition-colors"></div>
                      <div className="absolute opacity-0 peer-checked:opacity-100 text-white">
                        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 5L4.5 8.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round"/></svg>
                      </div>
                    </div>
                    <span className="text-muted-foreground group-hover:text-white transition-colors">{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-4 border-b border-border pb-2">Tipo</h3>
              <div className="flex flex-col gap-2">
                {["Original", "Homologado"].map(type => (
                  <label key={type} className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative flex items-center justify-center">
                      <input 
                        type="checkbox" 
                        checked={selectedTypes.includes(type)}
                        onChange={() => toggleType(type)}
                        className="peer sr-only"
                      />
                      <div className="w-5 h-5 border-2 border-muted-foreground rounded group-hover:border-primary peer-checked:bg-primary peer-checked:border-primary transition-colors"></div>
                      <div className="absolute opacity-0 peer-checked:opacity-100 text-white">
                        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 5L4.5 8.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round"/></svg>
                      </div>
                    </div>
                    <span className="text-muted-foreground group-hover:text-white transition-colors">{type}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="mb-6 flex justify-between items-end">
              <h2 className="text-3xl font-black text-white">Catálogo de Repuestos</h2>
              <span className="text-muted-foreground text-sm">{filteredProducts.length} resultados</span>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="bg-card border border-border rounded-xl p-12 text-center flex flex-col items-center">
                <Settings size={48} className="text-muted-foreground mb-4 opacity-50" />
                <h3 className="text-xl font-bold text-white mb-2">No se encontraron repuestos</h3>
                <p className="text-muted-foreground">Intenta ajustar los filtros o el término de búsqueda.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence>
                  {filteredProducts.map((product, i) => (
                    <motion.div
                      key={product.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                      className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] group flex flex-col"
                    >
                      <div className="aspect-[4/3] bg-secondary flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent z-10"></div>
                        {getProductIcon(product.id)}
                        <div className="absolute top-4 left-4 z-20">
                          <span className={`px-2 py-1 text-xs font-bold uppercase rounded ${
                            product.type === "Original" ? "bg-blue-900 text-blue-200" : "bg-orange-900 text-orange-200"
                          }`}>
                            {product.type}
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-5 flex-1 flex flex-col">
                        <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">
                          {product.brand} {product.model}
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2 leading-tight flex-1">
                          {product.name}
                        </h3>
                        <div className="text-xl font-black text-white mb-4">
                          {product.price}
                        </div>
                        
                        <a 
                          href={generateWhatsAppLink(product.name, product.brand, product.model)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 px-4 rounded-lg transition-colors mt-auto"
                        >
                          <MessageCircle size={20} />
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
