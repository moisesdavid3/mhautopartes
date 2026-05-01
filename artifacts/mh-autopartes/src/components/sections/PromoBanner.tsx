import { ShieldCheck, Wrench, Zap } from "lucide-react";

const items = [
  { icon: ShieldCheck, text: "Garantía de fábrica en todos los repuestos" },
  { icon: Wrench, text: "Asesoría técnica gratuita" },
  { icon: Zap, text: "+2.000 referencias disponibles en stock" },
];

export function PromoBanner() {
  return (
    <section className="bg-[#F5C518] py-5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 flex-wrap">
          {items.map(({ icon: Icon, text }, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="bg-[#0B1526] rounded-full p-2 flex-shrink-0">
                <Icon size={18} className="text-[#F5C518]" />
              </div>
              <span className="text-[#0B1526] font-bold text-sm">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
