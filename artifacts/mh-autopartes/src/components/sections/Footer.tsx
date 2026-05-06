import { MessageCircle, Phone } from "lucide-react";
import { Link } from "wouter";
import { SiInstagram, SiFacebook } from "react-icons/si";
import mhLogo from "@assets/mh_logo.png";
import { randomWaLink } from "@/lib/whatsapp";

export function Footer() {
  const pixelColors = ["#F5C518","#F5C518","#CC0000","#CC0000","#FFFFFF","#FFFFFF","#215BE1","#215BE1"];

  return (
    <>
      <footer className="bg-[#0B1526] pt-0 pb-8 relative overflow-hidden">

        {/* Diagonal stripes — top left */}
        <svg className="absolute top-0 left-0 w-72 h-72 pointer-events-none" viewBox="0 0 288 288" fill="none">
          <line x1="-40" y1="140" x2="140" y2="-40" stroke="#215BE1" strokeWidth="50" strokeOpacity="0.20"/>
          <line x1="-40" y1="230" x2="230" y2="-40" stroke="#F5C518" strokeWidth="30" strokeOpacity="0.12"/>
          <line x1="-40" y1="300" x2="300" y2="-40" stroke="#215BE1" strokeWidth="16" strokeOpacity="0.10"/>
        </svg>
        {/* Diagonal stripes — bottom right */}
        <svg className="absolute bottom-0 right-0 w-72 h-72 pointer-events-none" viewBox="0 0 288 288" fill="none">
          <line x1="328" y1="148" x2="148" y2="328" stroke="#215BE1" strokeWidth="50" strokeOpacity="0.20"/>
          <line x1="328" y1="58"  x2="58"  y2="328" stroke="#F5C518" strokeWidth="30" strokeOpacity="0.12"/>
          <line x1="328" y1="-12" x2="-12" y2="328" stroke="#215BE1" strokeWidth="16" strokeOpacity="0.10"/>
        </svg>

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

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-white/10 pb-12">

            {/* Logo + descripción */}
            <div className="md:col-span-1">
              <Link href="/" className="mb-4 inline-block">
                <img src={mhLogo} alt="MH Autopartes" className="h-16 w-auto object-contain" />
              </Link>
              <p className="text-white/70 text-sm font-light leading-relaxed">
                Expertos en comercialización de repuestos originales y homologados. Confianza y precisión para tu vehículo.
              </p>
              <p className="text-white/70 text-sm font-light mt-4">NIT: 900262357</p>
            </div>

            {/* Enlaces */}
            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Enlaces</h4>
              <ul className="space-y-2">
                <li><a href="#catalogo" className="text-white/70 hover:text-[#215BE1] transition-colors text-sm">Repuestos</a></li>
                <li><a href="#nosotros" className="text-white/70 hover:text-[#215BE1] transition-colors text-sm">Nosotros</a></li>
                <li><a href="#tiendas"  className="text-white/70 hover:text-[#215BE1] transition-colors text-sm">Contacto</a></li>
              </ul>
            </div>

            {/* Redes Sociales */}
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

            {/* Contacto */}
            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Contacto</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="tel:6044445665"
                    className="inline-flex items-center gap-2 text-white font-semibold text-sm hover:text-[#215BE1] transition-colors"
                  >
                    <Phone size={14} />
                    Línea Única: (604) 444 56 65
                  </a>
                </li>
                <li className="text-white/70 text-sm mt-2">
                  <span className="block text-white font-semibold mb-0.5">Sede Palace</span>
                  Carrera 50 #40-64, Medellín
                </li>
                <li className="text-white/70 text-sm mt-2">
                  <span className="block text-white font-semibold mb-0.5">Sede Chagualo</span>
                  Calle 65 #52-34, Medellín
                </li>
                <li className="mt-3">
                  <a
                    href={randomWaLink("Hola MH Autopartes, quisiera hacer una consulta")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm px-4 py-2 rounded-lg transition-colors"
                  >
                    <MessageCircle size={15} />
                    Escríbenos por WhatsApp
                  </a>
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
    </>
  );
}
