import { MapPin, Clock, Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import palaceImg from "@assets/palace_1776826722701.JPG";
import chagualoImg from "@assets/chagualo_nueva.JPG";

const stores = [
  {
    name: "Sede Palace",
    address: "Carrera 50 #40-64, Medellín",
    hours: "Lunes–Sábado 8am–6pm",
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
    hours: "Lunes–Sábado 8am–6pm",
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
      {/* Diagonal stripes — top left corner */}
      <svg className="absolute top-0 left-0 w-80 h-80 pointer-events-none" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="0,0 320,0 0,320" fill="transparent"/>
        <line x1="-40" y1="160" x2="160" y2="-40" stroke="#215BE1" strokeWidth="60" strokeOpacity="0.30"/>
        <line x1="-40" y1="260" x2="260" y2="-40" stroke="#5BA4F5" strokeWidth="36" strokeOpacity="0.25"/>
        <line x1="-40" y1="340" x2="340" y2="-40" stroke="#215BE1" strokeWidth="20" strokeOpacity="0.15"/>
      </svg>
      {/* Diagonal stripes — bottom right corner */}
      <svg className="absolute bottom-0 right-0 w-80 h-80 pointer-events-none" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="360" y1="160" x2="160" y2="360" stroke="#215BE1" strokeWidth="60" strokeOpacity="0.30"/>
        <line x1="360" y1="60" x2="60" y2="360" stroke="#5BA4F5" strokeWidth="36" strokeOpacity="0.25"/>
        <line x1="360" y1="-20" x2="-20" y2="360" stroke="#215BE1" strokeWidth="20" strokeOpacity="0.15"/>
      </svg>
      <div className="container mx-auto px-4 md:px-6">
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
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group"
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
              <div className="p-8">
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
                    <Phone size={20} className="text-[#215BE1] mt-0.5 flex-shrink-0" />
                    <div className="flex flex-col gap-1.5">
                      <div className="font-bold text-gray-900 text-base">Línea Única: {store.lineaUnica}</div>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {store.phones.map((p) => (
                          <a
                            key={p.wa}
                            href={`https://wa.me/${p.wa}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 bg-[#25D366]/10 hover:bg-[#25D366] text-[#25D366] hover:text-white border border-[#25D366]/30 hover:border-[#25D366] font-semibold text-sm px-3 py-1.5 rounded-lg transition-all"
                          >
                            <MessageCircle size={14} />
                            {p.number}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href={store.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-gray-100 hover:bg-[#215BE1] hover:text-white text-gray-900 font-bold py-3.5 px-4 rounded-xl transition-all border border-gray-200 hover:border-[#215BE1] text-sm"
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
