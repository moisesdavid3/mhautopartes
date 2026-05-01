import { ShieldCheck, Headset, LifeBuoy, Zap, LayoutGrid } from "lucide-react";
import { motion } from "framer-motion";

const points = [
  { icon: ShieldCheck, label: "Calidad Garantizada" },
  { icon: Headset,     label: "Asesoría Experta" },
  { icon: LifeBuoy,   label: "Respaldo Continuo" },
  { icon: Zap,         label: "Entregas Ágiles" },
  { icon: LayoutGrid,  label: "Portafolio Amplio" },
];

export function Trust() {
  return (
    <section className="py-20 bg-[#0B1526] relative overflow-hidden">
      {/* Diagonal stripes — top left */}
      <svg className="absolute top-0 left-0 w-72 h-72 pointer-events-none opacity-20" viewBox="0 0 288 288" fill="none">
        <line x1="-20" y1="120" x2="120" y2="-20" stroke="#215BE1" strokeWidth="50"/>
        <line x1="-20" y1="210" x2="210" y2="-20" stroke="#F5C518" strokeWidth="28"/>
        <line x1="-20" y1="290" x2="290" y2="-20" stroke="#215BE1" strokeWidth="16"/>
      </svg>
      {/* Diagonal stripes — bottom right */}
      <svg className="absolute bottom-0 right-0 w-72 h-72 pointer-events-none opacity-20" viewBox="0 0 288 288" fill="none">
        <line x1="308" y1="168" x2="168" y2="308" stroke="#215BE1" strokeWidth="50"/>
        <line x1="308" y1="78"  x2="78"  y2="308" stroke="#F5C518" strokeWidth="28"/>
        <line x1="308" y1="-2"  x2="-2"  y2="308" stroke="#215BE1" strokeWidth="16"/>
      </svg>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-14">
<h2 className="text-3xl md:text-4xl font-black text-white">Por qué elegirnos</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-10 md:gap-16">
          {points.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="w-36 h-36 rounded-full border-2 border-[#215BE1] bg-[#215BE1]/10 flex items-center justify-center hover:bg-[#215BE1] hover:border-[#215BE1] transition-all duration-300 group">
                <Icon size={64} className="text-[#215BE1] group-hover:text-white transition-colors duration-300" />
              </div>
              <p className="text-white font-bold text-base text-center max-w-[120px] leading-tight">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
