import { MapPin, Clock, Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import palaceImg from "@assets/palace_1776826722701.JPG";
import chagualoImg from "@assets/chagualo_1776826722702.JPG";

const stores = [
  {
    name: "Sede Palace",
    address: "Carrera 50 #40-64, Medellín",
    hours: "Lunes–Sábado 8am–6pm",
    phones: ["324 593 45 59", "324 593 45 57", "302 402 78 58"],
    lineaUnica: "(604) 444 56 65",
    mapsLink: "https://maps.app.goo.gl/PDTbERvQ6eU1nrR38",
    whatsappLink: "https://wa.me/573245934559",
    photo: palaceImg,
  },
  {
    name: "Sede Chagualo",
    address: "Calle 65 #52-34, Medellín",
    hours: "Lunes–Sábado 8am–6pm",
    phones: ["314 893 62 36", "320 681 09 78", "324 593 45 55", "301 170 86 36"],
    lineaUnica: "(604) 444 56 65",
    mapsLink: "https://maps.app.goo.gl/5kp2AwsNyhGsMRaR7",
    whatsappLink: "https://wa.me/573148936236",
    photo: chagualoImg,
  },
];

export function Stores() {
  return (
    <section id="tiendas" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Nuestras Tiendas</h2>
          <p className="text-gray-500">
            Visítanos en nuestras sedes en Medellín. Inventario completo y entrega inmediata en mostrador.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {stores.map((store, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
            >
              {/* Store photo */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={store.photo}
                  alt={store.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-black text-white drop-shadow">{store.name}</h3>
                </div>
              </div>

              {/* Store info */}
              <div className="p-6">
                <div className="space-y-3 mb-6 text-gray-600 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-[#215BE1] mt-0.5 flex-shrink-0" />
                    <span>{store.address}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock size={18} className="text-[#215BE1] mt-0.5 flex-shrink-0" />
                    <span>{store.hours}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone size={18} className="text-[#215BE1] mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-bold text-gray-900">Línea Única: {store.lineaUnica}</div>
                      <div className="text-gray-500 mt-0.5">{store.phones.join(" · ")}</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={store.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`maps-btn-${i}`}
                    className="flex-1 flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold py-3 px-4 rounded-lg transition-colors border border-gray-200 text-sm"
                  >
                    <MapPin size={18} />
                    Ver en Maps
                  </a>
                  <a
                    href={store.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`whatsapp-store-btn-${i}`}
                    className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 px-4 rounded-lg transition-colors text-sm"
                  >
                    <MessageCircle size={18} />
                    WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
