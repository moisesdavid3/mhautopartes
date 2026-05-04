import { MapPin, Clock, Phone, MessageCircle, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";
import palaceImg from "@assets/palace_1776826722701.JPG";
import chagualoImg from "@assets/chagualo_nueva.JPG";
import { randomWaLink } from "@/lib/whatsapp";

const stores = [
  {
    name: "Sede Palace",
    address: "Carrera 50 #40-64, Medellín",
    hours: "Lunes–Viernes 8am–6pm · Sábado 8am–2pm",
    phones: [
      { number: "324 593 45 59", wa: "573245934559" },
      { number: "324 593 45 57", wa: "573245934557" },
      { number: "302 402 78 58", wa: "573024027858" },
    ],
    lineaUnica: "(604) 444 56 65",
    mapsLink: "https://maps.app.goo.gl/PDTbERvQ6eU1nrR38",
    photo: palaceImg,
  },
  {
    name: "Sede Chagualo",
    address: "Calle 65 #52-34, Medellín",
    hours: "Lunes–Domingo 7am–9pm",
    phones: [
      { number: "314 893 62 36", wa: "573148936236" },
      { number: "320 681 09 78", wa: "573206810978" },
      { number: "324 593 45 55", wa: "573245934555" },
      { number: "301 170 86 36", wa: "573011708636" },
    ],
    lineaUnica: "(604) 444 56 65",
    mapsLink: "https://maps.app.goo.gl/5kp2AwsNyhGsMRaR7",
    photo: chagualoImg,
  },
];

export function Stores() {
  return (
    <section id="tiendas" className="py-20 bg-white relative overflow-hidden">

      {/* Animated diagonal lines — z-0, behind cards */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <style>{`
          @keyframes lineFwd { 0% { transform: rotate(-6deg) scaleX(1.8) translateX(-110%); } 100% { transform: rotate(-6deg) scaleX(1.8) translateX(110%); } }
          @keyframes lineRev { 0% { transform: rotate(-6deg) scaleX(1.8) translateX(110%);  } 100% { transform: rotate(-6deg) scaleX(1.8) translateX(-110%); } }
        `}</style>
        {[
          { color: "#215BE1", opacity: 0.20, width: 32, duration: 7,  delay: 0,    dir: "Fwd", top: "3%"  },
          { color: "#5BA4F5", opacity: 0.18, width: 18, duration: 6,  delay: 0.6,  dir: "Rev", top: "9%"  },
          { color: "#215BE1", opacity: 0.15, width: 44, duration: 8,  delay: 1.2,  dir: "Fwd", top: "15%" },
          { color: "#5BA4F5", opacity: 0.22, width: 22, duration: 5,  delay: 0.3,  dir: "Rev", top: "21%" },
          { color: "#215BE1", opacity: 0.17, width: 36, duration: 9,  delay: 1.8,  dir: "Fwd", top: "27%" },
          { color: "#5BA4F5", opacity: 0.14, width: 14, duration: 6,  delay: 0.9,  dir: "Rev", top: "33%" },
          { color: "#215BE1", opacity: 0.20, width: 48, duration: 7,  delay: 2.4,  dir: "Fwd", top: "39%" },
          { color: "#5BA4F5", opacity: 0.16, width: 20, duration: 5,  delay: 0,    dir: "Rev", top: "45%" },
          { color: "#215BE1", opacity: 0.13, width: 28, duration: 8,  delay: 1.5,  dir: "Fwd", top: "51%" },
          { color: "#5BA4F5", opacity: 0.21, width: 38, duration: 6,  delay: 0.7,  dir: "Rev", top: "57%" },
          { color: "#215BE1", opacity: 0.18, width: 16, duration: 7,  delay: 3.0,  dir: "Fwd", top: "63%" },
          { color: "#5BA4F5", opacity: 0.15, width: 42, duration: 5,  delay: 1.1,  dir: "Rev", top: "69%" },
          { color: "#215BE1", opacity: 0.22, width: 24, duration: 9,  delay: 2.0,  dir: "Fwd", top: "75%" },
          { color: "#5BA4F5", opacity: 0.17, width: 34, duration: 6,  delay: 0.4,  dir: "Rev", top: "81%" },
          { color: "#215BE1", opacity: 0.14, width: 20, duration: 7,  delay: 1.7,  dir: "Fwd", top: "87%" },
          { color: "#5BA4F5", opacity: 0.19, width: 46, duration: 5,  delay: 2.8,  dir: "Rev", top: "93%" },
          { color: "#215BE1", opacity: 0.16, width: 26, duration: 8,  delay: 0.2,  dir: "Fwd", top: "6%"  },
          { color: "#5BA4F5", opacity: 0.13, width: 30, duration: 6,  delay: 1.4,  dir: "Rev", top: "18%" },
          { color: "#215BE1", opacity: 0.19, width: 40, duration: 7,  delay: 2.2,  dir: "Fwd", top: "48%" },
          { color: "#5BA4F5", opacity: 0.20, width: 18, duration: 5,  delay: 3.5,  dir: "Rev", top: "72%" },
        ].map((line, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: line.top,
              left: 0,
              width: "100%",
              height: `${line.width}px`,
              background: `linear-gradient(90deg, transparent 0%, ${line.color} 10%, ${line.color} 90%, transparent 100%)`,
              opacity: line.opacity,
              animation: `line${line.dir} ${line.duration}s linear ${line.delay}s infinite`,
            }}
          />
        ))}
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Nuestras Sedes</h2>
          <p className="text-gray-500">
            Visítanos en Medellín. Inventario completo y entrega inmediata en mostrador.
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
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group flex flex-col"
            >
              {/* Store photo */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={store.photo}
                  alt={store.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
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
                    <span className="text-base">{store.hours}</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <PhoneCall size={20} className="text-[#215BE1] mt-0.5 flex-shrink-0" />
                    <a
                      href="tel:6044445665"
                      className="font-bold text-gray-900 text-base hover:text-[#215BE1] transition-colors"
                    >
                      Línea Única: {store.lineaUnica}
                    </a>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone size={20} className="text-[#215BE1] mt-0.5 flex-shrink-0" />
                    <div className="flex flex-col gap-2 w-full">
                      <span className="font-semibold text-gray-700 text-sm">WhatsApp</span>
                      <ul className="space-y-1.5">
                        {store.phones.map((p) => (
                          <li key={p.wa}>
                            <a
                              href={randomWaLink(`Hola MH Autopartes, quisiera hacer una consulta`)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-[#25D366] hover:text-white bg-[#25D366]/10 hover:bg-[#25D366] border border-[#25D366]/30 hover:border-[#25D366] font-semibold text-sm px-3 py-1.5 rounded-lg transition-all w-full"
                            >
                              <MessageCircle size={14} />
                              {p.number}
                            </a>
                          </li>
                        ))}
                      </ul>
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
