import { MapPin, Clock, Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function Stores() {
  const stores = [
    {
      name: "Sede Palace",
      address: "Calle 50 #45-30, El Centro, Medellín",
      hours: "Lunes–Sábado 8am–6pm",
      phone: "+57 300 123 4567",
      mapsLink: "https://maps.google.com/?q=Calle+50+45-30+Medellin",
      whatsappLink: "https://wa.me/573001234567"
    },
    {
      name: "Sede Chagualo",
      address: "Carrera 65 #62-15, Chagualo, Medellín",
      hours: "Lunes–Sábado 8am–6pm",
      phone: "+57 300 987 6543",
      mapsLink: "https://maps.google.com/?q=Carrera+65+62-15+Medellin",
      whatsappLink: "https://wa.me/573009876543"
    }
  ];

  return (
    <section id="tiendas" className="py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Nuestras Tiendas</h2>
          <p className="text-lg text-muted-foreground font-light">
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
              className="bg-background border border-border p-8 rounded-xl relative overflow-hidden group hover:border-primary/50 transition-colors"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none group-hover:bg-primary/10 transition-colors"></div>
              
              <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                <MapPin className="text-primary" size={28} />
                {store.name}
              </h3>
              
              <div className="space-y-4 mb-8 text-muted-foreground">
                <div className="flex items-center gap-3">
                  <MapPin size={20} />
                  <span>{store.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={20} />
                  <span>{store.hours}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={20} />
                  <span>{store.phone}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={store.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/80 text-white font-bold py-3 px-4 rounded-lg transition-colors border border-border"
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
