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
    <section className="py-14 bg-gray-50 border-y border-gray-200 relative overflow-hidden">

      {/* Animated vertical lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <style>{`
          @keyframes bsDown { 0% { transform: translateY(-110%); } 100% { transform: translateY(110vh); } }
          @keyframes bsUp   { 0% { transform: translateY(110vh); } 100% { transform: translateY(-110%); } }
        `}</style>
        {[
          { color: "#215BE1", opacity: 0.13, width: 28, duration: 6,  delay: 0,    dir: "Down", left: "5%"  },
          { color: "#5BA4F5", opacity: 0.11, width: 16, duration: 7,  delay: 0.5,  dir: "Up",   left: "12%" },
          { color: "#215BE1", opacity: 0.10, width: 40, duration: 5,  delay: 1.2,  dir: "Down", left: "20%" },
          { color: "#5BA4F5", opacity: 0.13, width: 20, duration: 8,  delay: 0.3,  dir: "Up",   left: "28%" },
          { color: "#215BE1", opacity: 0.11, width: 34, duration: 6,  delay: 1.8,  dir: "Down", left: "36%" },
          { color: "#5BA4F5", opacity: 0.12, width: 14, duration: 7,  delay: 0.9,  dir: "Up",   left: "44%" },
          { color: "#215BE1", opacity: 0.13, width: 44, duration: 5,  delay: 2.4,  dir: "Down", left: "52%" },
          { color: "#5BA4F5", opacity: 0.10, width: 22, duration: 9,  delay: 0,    dir: "Up",   left: "60%" },
          { color: "#215BE1", opacity: 0.11, width: 18, duration: 6,  delay: 1.5,  dir: "Down", left: "68%" },
          { color: "#5BA4F5", opacity: 0.12, width: 36, duration: 7,  delay: 0.7,  dir: "Up",   left: "76%" },
          { color: "#215BE1", opacity: 0.10, width: 24, duration: 5,  delay: 3.0,  dir: "Down", left: "84%" },
          { color: "#5BA4F5", opacity: 0.13, width: 30, duration: 8,  delay: 1.1,  dir: "Up",   left: "92%" },
        ].map((line, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: 0,
              left: line.left,
              width: `${line.width}px`,
              height: "100%",
              background: `linear-gradient(180deg, transparent 0%, ${line.color} 10%, ${line.color} 90%, transparent 100%)`,
              opacity: line.opacity,
              animation: `bs${line.dir} ${line.duration}s linear ${line.delay}s infinite`,
            }}
          />
        ))}
      </div>

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