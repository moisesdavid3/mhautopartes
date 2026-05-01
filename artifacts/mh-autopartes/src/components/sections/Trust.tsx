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
    <section className="py-20 bg-[#0B1526]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <p className="text-[#F5C518] text-xs font-bold uppercase tracking-widest mb-2">Nuestra promesa</p>
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
              <div className="w-24 h-24 rounded-full border-2 border-[#215BE1] bg-[#215BE1]/10 flex items-center justify-center hover:bg-[#215BE1] hover:border-[#215BE1] transition-all duration-300 group">
                <Icon size={36} className="text-[#215BE1] group-hover:text-white transition-colors duration-300" />
              </div>
              <p className="text-white font-bold text-sm text-center max-w-[100px] leading-tight">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
