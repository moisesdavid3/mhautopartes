import { MapPin, Clock, Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function Stores() {
  const stores = [
    {
      name: "Sede Palace",
      address: "Calle 85 #52-34, Medellín",
      hours: "Lunes–Sábado 8am–6pm",
      phones: ["324 593 45 59", "324 593 45 57", "302 402 78 58"],
      lineaUnica: "(604) 444 56 65",
      mapsLink: "https://maps.google.com/?q=Calle+85+52-34+Medellin",
      whatsappLink: "https://wa.me/573245934559"
    },
    {
      name: "Sede Chagualo",
      address: "Carrera 65 sector Chagualo, Medellín",
      hours: "Lunes–Sábado 8am–6pm",
      phones: ["314 893 62 36", "320 681 09 78", "324 593 45 55", "301 170 86 36"],
      lineaUnica: "(604) 444 56 65",
      mapsLink: "https://maps.google.com/?q=Chagualo+Medellin",
      whatsappLink: "https://wa.me/573148936236"
    }
  ];

  return (
    <section id="tiendas" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Nuestras Tiendas</h2>
          <p className="text-lg text-gray-600 font-light">
            Visítanos en nuestras sedes en Medellín. Inventario completo y entrega inmediata en mostrador.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {stores.map((store, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 p-8 rounded-xl relative overflow-hidden group hover:border-[#215BE1]/50 transition-colors shadow-sm"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#215BE1]/5 rounded-bl-full pointer-events-none group-hover:bg-[#215BE1]/10 transition-colors"></div>
              
              <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
                <MapPin className="text-[#215BE1]" size={28} />
                {store.name}
              </h3>
              
              <div className="space-y-4 mb-8 text-gray-600">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="mt-1 flex-shrink-0" />
                  <span>{store.address}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={20} className="mt-1 flex-shrink-0" />
                  <span>{store.hours}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={20} className="mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Línea Única: {store.lineaUnica}</div>
                    <div className="text-sm">Celulares: {store.phones.join(" / ")}</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={store.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold py-3 px-4 rounded-lg transition-colors border border-gray-200"
                >
                  <MapPin size={20} />
                  Ver en Maps
                </a>
                <a 
                  href={store.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 px-4 rounded-lg transition-colors"
                >
                  <MessageCircle size={20} />
                  WhatsApp
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}