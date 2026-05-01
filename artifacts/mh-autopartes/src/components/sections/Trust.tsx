import { Shield, Award, Truck } from "lucide-react";
import { motion } from "framer-motion";

export function Trust() {
  const features = [
    {
      icon: Shield,
      title: "Calidad Garantizada",
      desc: "Repuestos con garantía de fábrica, respaldando tu inversión y la seguridad del vehículo."
    },
    {
      icon: Award,
      title: "Asesoría Experta",
      desc: "Nuestro equipo técnico te guía para que compres exactamente la pieza correcta, sin errores."
    },
    {
      icon: Truck,
      title: "Entrega Rápida",
      desc: "Sabemos que un carro en el taller es dinero perdido. Gestionamos tus pedidos con agilidad."
    }
  ];

  return (
    <section className="py-24 bg-[#0B1526] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#215BE1]/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#F5C518] text-xs font-bold uppercase tracking-widest mb-3">Nuestra propuesta de valor</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Por qué elegirnos</h2>
          <p className="text-lg text-white/60 font-light">
            Más de dos décadas en el mercado nos han enseñado que en autopartes, la precisión y la confianza lo son todo.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 border-b border-white/10 pb-20">
          {[
            { value: "21+", label: "Años de experiencia" },
            { value: "6", label: "Marcas especializadas" },
            { value: "100%", label: "Garantía de fábrica" },
            { value: "0$", label: "Asesoría técnica" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-black text-[#F5C518] mb-2">{stat.value}</div>
              <div className="text-sm font-bold text-white/50 uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (i * 0.1) }}
                className="bg-white/5 border border-white/10 p-8 rounded-xl hover:border-[#F5C518]/40 hover:bg-white/8 transition-all"
              >
                <div className="w-14 h-14 bg-[#F5C518] rounded-lg flex items-center justify-center mb-6">
                  <Icon size={28} className="text-[#0B1526]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-white/60 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}