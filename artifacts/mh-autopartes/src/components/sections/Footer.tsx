import { MessageCircle } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <>
      <footer className="bg-card border-t border-border pt-16 pb-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-border pb-12">
            
            <div className="md:col-span-1">
              <Link href="/" className="flex flex-col items-start gap-0 mb-4 inline-block">
                <span className="text-2xl font-black tracking-tight text-white uppercase leading-none">
                  MH<span className="text-primary">AUTOPARTES</span>
                </span>
              </Link>
              <p className="text-muted-foreground text-sm font-light leading-relaxed">
                Expertos en comercialización de repuestos originales y homologados. Confianza y precisión para tu vehículo.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Enlaces</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-white transition-colors text-sm">Inicio</a></li>
                <li><a href="#catalogo" className="text-muted-foreground hover:text-white transition-colors text-sm">Catálogo</a></li>
                <li><a href="#tiendas" className="text-muted-foreground hover:text-white transition-colors text-sm">Tiendas</a></li>
                <li><a href="#nosotros" className="text-muted-foreground hover:text-white transition-colors text-sm">Nosotros</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Marcas</h4>
              <ul className="space-y-2">
                {["Chevrolet", "Mazda", "Renault", "Kia", "Hyundai", "Ford"].map(brand => (
                  <li key={brand}>
                    <a href="#catalogo" className="text-muted-foreground hover:text-white transition-colors text-sm">
                      Repuestos {brand}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Contacto</h4>
              <ul className="space-y-3">
                <li className="text-muted-foreground text-sm">
                  <span className="block text-white font-semibold mb-1">Sede Palace</span>
                  Calle 50 #45-30, Medellín
                </li>
                <li className="text-muted-foreground text-sm">
                  <span className="block text-white font-semibold mb-1">Sede Chagualo</span>
                  Carrera 65 #62-15, Medellín
                </li>
              </ul>
            </div>

          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground font-light">
            <p>&copy; {new Date().getFullYear()} MH Autopartes. Todos los derechos reservados.</p>
            <p>Desarrollado para la precisión automotriz.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/573001234567?text=Hola%20MH%20Autopartes%2C%20quisiera%20hacer%20una%20consulta"
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
