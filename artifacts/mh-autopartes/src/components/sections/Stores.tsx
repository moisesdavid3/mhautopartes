import { MapPin, Clock, MessageCircle, PhoneCall, Truck } from "lucide-react";
import { motion } from "framer-motion";
import palaceImg from "@assets/palace_nueva.jpg";
import chagualoImg from "@assets/chagualo2.jpg";
import { randomWaLink } from "@/lib/whatsapp";

const stores = [
  {
    name: "Sede Centro (Palace)",
    address: "Carrera 50 #40-64, Medellín",
    hours: ["Lunes - Viernes 8am-6pm", { text: "Sábados 8am-2pm", bold: true }],
    deliveryHours: ["Lunes - Viernes 8am-6pm", { text: "Sábados 8am-2pm", bold: true }],
    phones: [
      { number: "324 593 45 55", wa: "573245934555" },
    ],
    lineaUnica: "(604) 444 56 65",
    mapsLink: "https://maps.app.goo.gl/PDTbERvQ6eU1nrR38",
    photo: palaceImg,
  },
  {
    name: "Sede Norte (Chagualo)",
    address: "Calle 65 #52-34, Medellín",
    hours: ["Lunes - Sábado 8am-8pm", { text: "Domingos y Festivos 8am-3pm", bold: true }],
    deliveryHours: ["Lunes - Viernes 8am-6pm", { text: "Sábados, Domingos y Festivos 8am-3pm", bold: true }],
    phones: [
      { number: "324 593 45 55", wa: "573245934555" },
    ],
    lineaUnica: "(604) 444 56 65",
    mapsLink: "https://maps.app.goo.gl/5kp2AwsNyhGsMRaR7",
    photo: chagualoImg,
    objectPosition: "center 70%",
  },
];

export function Stores() {
  return (
    <section id="puntos-de-venta" className="py-20 bg-[#D6E4F7] relative overflow-hidden">

      {/* Falling bars — right margin only (outside the Chagualo card edge) */}
      <div className="absolute top-0 right-0 h-full pointer-events-none overflow-hidden z-0" style={{ width: "clamp(1rem, calc(50vw - 576px + 1.5rem), 12vw)" }}>
        <style>{`
          @keyframes fallBar { 0% { transform: translateY(-100%); } 100% { transform: translateY(110%); } }
        `}</style>
        {[
          { color: "#215BE1", opacity: 0.22, width: 20, duration: 4,   delay: 0,    left: "8%"  },
          { color: "#1A3FA0", opacity: 0.18, width: 30, duration: 3.5, delay: 0.8,  left: "30%" },
          { color: "#5BA4F5", opacity: 0.20, width: 14, duration: 5,   delay: 0.4,  left: "55%" },
          { color: "#7EC8F7", opacity: 0.16, width: 24, duration: 4.5, delay: 1.4,  left: "75%" },
          { color: "#215BE1", opacity: 0.19, width: 18, duration: 6,   delay: 2.0,  left: "92%" },
        ].map((bar, j) => (
          <div
            key={j}
            style={{
              position: "absolute",
              top: 0,
              left: bar.left,
              width: `${bar.width}px`,
              height: "100%",
              background: `linear-gradient(180deg, transparent 0%, ${bar.color} 15%, ${bar.color} 85%, transparent 100%)`,
              opacity: bar.opacity,
              animation: `fallBar ${bar.duration}s linear ${bar.delay}s infinite`,
            }}
          />
        ))}
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Nuestros Puntos de Venta</h2>
          <p className="text-gray-500">
            Ubicados estratégicamente para ofrecerte cobertura total y rapidez en la entrega.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {stores.map((store, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group flex flex-col relative"
            >
              {/* Store photo */}
              <div className="relative h-64 overflow-hidden">
                <div
                  className="w-full h-full"
                  style={{ transform: (store as any).imgTranslate ?? "none" }}
                >
                  <img
                    src={store.photo}
                    alt={store.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{ objectPosition: (store as any).objectPosition ?? "center center" }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5">
                  <h3 className="text-2xl font-black text-white drop-shadow">{store.name}</h3>
                </div>
              </div>

              {/* Store info */}
              <div className="p-8 flex flex-col flex-1">
                <div className="space-y-5 mb-8 text-gray-600">
                  <div className="flex items-start gap-4">
                    <MapPin size={20} className="text-[#215BE1] mt-0.5 flex-shrink-0" />
                    <span className="text-base">{store.address}</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock size={20} className="text-[#215BE1] mt-0.5 flex-shrink-0" />
                    <span className="text-base flex flex-col gap-0.5">
                      {(Array.isArray(store.hours) ? store.hours : [store.hours]).map((line, i) => (
                        typeof line === "object" && (line as any).bold
                          ? <span key={i} className="font-bold text-gray-800">{(line as any).text}</span>
                          : <span key={i}>{line as string}</span>
                      ))}
                    </span>
                  </div>
                  <div className="flex items-start gap-4">
                    <Truck size={20} className="text-[#215BE1] mt-0.5 flex-shrink-0" />
                    <span className="text-base flex flex-col gap-0.5">
                      <span className="text-gray-500 text-xs font-semibold uppercase tracking-wider">Domicilios</span>
                      {(Array.isArray(store.deliveryHours) ? store.deliveryHours : [store.deliveryHours]).map((line, i) => (
                        typeof line === "object" && (line as any).bold
                          ? <span key={i} className="font-bold text-gray-800">{(line as any).text}</span>
                          : <span key={i}>{line as string}</span>
                      ))}
                    </span>
                  </div>
                  <div className="bg-[#215BE1]/5 border border-[#215BE1]/20 rounded-xl p-4 space-y-3">
                    <div className="flex items-center gap-3">
                      <PhoneCall size={22} className="text-[#215BE1] flex-shrink-0" />
                      <a
                        href="tel:6044445665"
                        className="text-gray-900 hover:text-[#215BE1] transition-colors text-xl"
                      >
                        Línea Única: {store.lineaUnica}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <MessageCircle size={22} className="text-[#25D366] flex-shrink-0" />
                      <span className="text-gray-700 text-xl">WhatsApp</span>
                      {store.phones.map((p) => (
                        <a
                          key={p.wa}
                          href={randomWaLink(`Hola MH Autopartes, quisiera hacer una consulta`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#25D366] hover:text-[#1da851] text-xl transition-colors"
                        >
                          {p.number}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <a
                  href={store.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto flex items-center justify-center gap-2 w-full bg-gray-100 hover:bg-[#215BE1] hover:text-white text-gray-900 font-bold py-3.5 px-4 rounded-xl transition-all border border-gray-200 hover:border-[#215BE1] text-sm"
                >
                  <MapPin size={18} />
                  Ver ubicación
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
