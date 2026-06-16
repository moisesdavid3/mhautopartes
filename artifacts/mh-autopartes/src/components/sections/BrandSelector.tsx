import { motion } from "framer-motion";
import { SiChevrolet, SiMazda, SiRenault, SiKia, SiHyundai, SiFord } from "react-icons/si";
import { AnimatedBars } from "@/components/ui/AnimatedBars";

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
    <section className="py-14 bg-gray-50 border-y border-gray-200 relative overflow-hidden">

      <AnimatedBars />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-8">
<h2 className="text-2xl md:text-3xl font-black text-gray-900">Pregúntanos Por Estas Marcas</h2>
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
                transition={{ delay: i * 0.08 }}
                onClick={() => handleSelect(brand.name)}
                className={`flex flex-col items-center justify-center p-6 rounded-xl border-2 transition-all duration-300 ${
                  isSelected
                    ? "border-[#215BE1] bg-[#215BE1]/50 shadow-lg"
                    : "border-gray-200 bg-white/50 hover:border-[#215BE1]/40 hover:shadow-md"
                }`}
              >
                <Icon size={80} className={`mb-4 transition-colors ${isSelected ? "text-white" : "text-gray-500"}`} />
                <span className={`font-bold text-lg ${isSelected ? "text-white" : "text-gray-700"}`}>
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