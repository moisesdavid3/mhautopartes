import { motion } from "framer-motion";
import chevroletBg from "@assets/marcas/chevrolet.jpg";

export function About() {
  const timeline = [
    { year: "2000", title: "Fundación", desc: "Iniciamos operaciones en el centro de Medellín con la razón social Metromazda, especializados en partes originales Mazda y otras marcas." },
    { year: "2009", title: "Expansión de Marcas", desc: "Estabilizamos nuestro catálogo a 6 marcas principales para cubrir las necesidades de los talleres locales en productos originales y homologados.\nChevrolet, Renault, Mazda, Kia, Hyundai, Ford" },
    { year: "2018", title: "Rebranding a MH Autopartes", desc: "Nueva identidad visual y estructura organizativa para soportar nuestro crecimiento en la ciudad, garantizando un inventario multimarca." },
    { year: "2024", title: "Especialización del servicio", desc: "Lanzamiento de nuevas plataformas de atención para agilizar pedidos y consultas, un equipo de trabajo enfocado en generar el mejor servicio al cliente." }
  ];

  return (
    <section id="nosotros" className="py-24 relative overflow-hidden border-t border-gray-200">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={chevroletBg} alt="" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-white/88" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Nuestra Historia</h2>
            <div className="w-20 h-2 bg-[#215BE1] mb-8 rounded-full"></div>

            <div className="prose prose-lg text-gray-600 font-light leading-relaxed">
              <p>
                MH Autopartes nació hace más de dos décadas con un objetivo claro: ofrecer repuestos de alta calidad con la precisión técnica que los mecánicos exigen.
              </p>
              <p>
                Sabemos que en el taller no hay margen para el error. Una pieza equivocada significa tiempo perdido y clientes insatisfechos. Por eso, hemos construido un equipo de asesores que conocen los manuales de despiece como la palma de su mano.
              </p>
              <p>
                Hoy, como MH Autopartes, mantenemos intacto nuestro compromiso fundacional: ser el aliado estratégico en el que confían los profesionales del sector automotriz en Medellín.
              </p>
            </div>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-[15px] md:left-8 top-2 bottom-2 w-0.5 bg-gray-200"></div>

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-12 md:pl-20"
                >
                  <div className="absolute left-0 md:left-[21px] top-1 w-8 h-8 rounded-full bg-white border-4 border-white flex items-center justify-center shadow-sm">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#215BE1]"></div>
                  </div>

                  <div className="bg-white/90 border border-gray-200 p-6 rounded-xl hover:border-[#215BE1]/30 transition-colors shadow-sm">
                    <span className="text-[#215BE1] font-black text-xl block mb-1">{item.year}</span>
                    <h4 className="text-gray-900 font-bold text-lg mb-2">{item.title}</h4>
                    <p className="text-gray-600 whitespace-pre-line">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
