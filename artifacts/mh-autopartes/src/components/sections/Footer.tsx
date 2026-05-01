import { MessageCircle } from "lucide-react";
import { Link } from "wouter";
import { SiInstagram, SiFacebook } from "react-icons/si";
import mhLogo from "@assets/mh_logo.png";

export function Footer() {
  const pixelColors = ["#F5C518","#F5C518","#E91E8C","#E91E8C","#FFFFFF","#FFFFFF","#215BE1","#215BE1"];

  return (
    <>
      <footer className="bg-[#0B1526] pt-0 pb-8 relative">
        {/* Top pixel stripe */}
        <div className="flex w-full mb-16">
          {Array.from({ length: 64 }).map((_, i) => (
            <div 
              key={i} 
              className="h-2 flex-1"
              style={{ backgroundColor: pixelColors[i % pixelColors.length], minWidth: 4 }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-white/10 pb-12">
            
            <div className="md:col-span-1">
              <Link href="/" className="mb-4 inline-block">
                <img
                  src={mhLogo}
                  alt="MH Autopartes"
                  className="h-16 w-auto object-contain"
                />
              </Link>
              <p className="text-white/70 text-sm font-light leading-relaxed">
                Expertos en comercialización de repuestos originales y homologados. Confianza y precisión para tu vehículo.
              </p>
              <p className="text-white/70 text-sm font-light mt-4">
                NIT: 900262357
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Enlaces</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-white hover:text-[#215BE1] transition-colors text-sm">Inicio</a></li>
                <li><a href="#catalogo" className="text-white/70 hover:text-white hover:text-[#215BE1] transition-colors text-sm">Catálogo</a></li>
                <li><a href="#tiendas" className="text-white/70 hover:text-white hover:text-[#215BE1] transition-colors text-sm">Tiendas</a></li>
                <li><a href="#nosotros" className="text-white/70 hover:text-white hover:text-[#215BE1] transition-colors text-sm">Nosotros</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Redes Sociales</h4>
              <div className="flex gap-4 items-center">
                <a href="https://instagram.com/mhautopartes" target="_blank" rel="noreferrer" aria-label="Instagram"
                  className="text-white/60 hover:text-[#E1306C] transition-colors">
                  <SiInstagram size={28} />
                </a>
                <a href="https://facebook.com/Mhautopartes" target="_blank" rel="noreferrer" aria-label="Facebook"
                  className="text-white/60 hover:text-[#1877F2] transition-colors">
                  <SiFacebook size={28} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Contacto</h4>
              <ul className="space-y-3">
                <li className="text-white/70 text-sm">
                  <span className="block text-white font-semibold mb-1">Línea Única</span>
                  (604) 444 56 65
                </li>
                <li className="text-white/70 text-sm mt-3">
                  <span className="block text-white font-semibold mb-1">Sede Palace</span>
                  Carrera 50 #40-64, Medellín<br/>
                  Cel: 324 593 45 59
                </li>
                <li className="text-white/70 text-sm mt-3">
                  <span className="block text-white font-semibold mb-1">Sede Chagualo</span>
                  Calle 65 #52-34, Medellín<br/>
                  Cel: 314 893 62 36
                </li>
              </ul>
            </div>

          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50 font-light">
            <p>&copy; {new Date().getFullYear()} MH Autopartes. Todos los derechos reservados.</p>
            <p>Desarrollado para la precisión automotriz.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/573245934559?text=Hola%20MH%20Autopartes%2C%20quisiera%20hacer%20una%20consulta"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_4px_25px_rgba(37,211,102,0.6)] hover:-translate-y-1 transition-all duration-300"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle size={32} />
      </a>
    </>
  );
}