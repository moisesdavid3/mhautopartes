import { motion } from "framer-motion";
import { SiChevrolet, SiMazda, SiRenault, SiKia, SiHyundai, SiFord } from "react-icons/si";

interface BrandSelectorProps {
  selectedBrand: string | null;
  setSelectedBrand: (brand: string | null) => void;
}

const brandsData = [
  { name: "Chevrolet", icon: SiChevrolet },
  { name: "Mazda", icon: SiMazda },
  { name: "Renault", icon: SiRenault },
  { name: "Kia", icon: SiKia },
  { name: "Hyundai", icon: SiHyundai },
  { name: "Ford", icon: SiFord },
];

export function BrandSelector({ selectedBrand, setSelectedBrand }: BrandSelectorProps) {
  const handleSelect = (brand: string) => {
    setSelectedBrand(selectedBrand === brand ? null : brand);
    const catalog = document.getElementById("catalogo");
    if (catalog) catalog.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-sm font-bold tracking-widest text-muted-foreground uppercase mb-2">Especialistas en</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {brandsData.map((brand, i) => {
            const Icon = brand.icon;
            const isSelected = selectedBrand === brand.name;
            
            return (
              <motion.button
                key={brand.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => handleSelect(brand.name)}
                className={`flex flex-col items-center justify-center p-6 rounded-xl border-2 transition-all duration-300 ${
                  isSelected 
                    ? "border-primary bg-primary/10 shadow-[0_0_20px_rgba(255,100,0,0.15)]" 
                    : "border-border bg-background hover:border-muted-foreground/50 hover:bg-secondary"
                }`}
              >
                <Icon size={48} className={`mb-4 transition-colors ${isSelected ? "text-primary" : "text-muted-foreground"}`} />
                <span className={`font-semibold ${isSelected ? "text-white" : "text-muted-foreground"}`}>
                  {brand.name}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
