import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiChevrolet, SiMazda, SiRenault, SiKia, SiHyundai, SiFord } from "react-icons/si";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { randomWaLink } from "@/lib/whatsapp";
import mhLogoImg from "@assets/mh_logo.png";
import palaceImg from "@assets/palace_nueva.jpg";
import chagualoImg from "@assets/chagualo_nueva.JPG";
import mazda2Img from "@assets/marcas/mazda2.jpg";
import mazdacx30Img from "@assets/marcas/mazdacx30.jpg";
import kia_picantoImg from "@assets/marcas/kia_picanto.jpg";
import hyundaiImg from "@assets/marcas/hyundai.jpg";
import chevOnixImg from "@assets/marcas/chev_onix.jpg";
import renaultCapturImg from "@assets/marcas/renault_captur.jpg";
import ford3Img from "@assets/marcas/ford3.jpg";
import palaceVideo from "@assets/video_palace.mp4";

const brandIcons = [
  { name: "Mazda", icon: SiMazda },
  { name: "Chevrolet", icon: SiChevrolet },
  { name: "Renault", icon: SiRenault },
  { name: "Kia", icon: SiKia },
  { name: "Hyundai", icon: SiHyundai },
  { name: "Ford", icon: SiFord },
];

const pixelColors = ["#F5C518","#F5C518","#CC0000","#CC0000","#FFFFFF","#FFFFFF","#215BE1","#215BE1"];

const slides = [
  {
    video: palaceVideo,
    label: "Bienvenido a Nuestra Sede Palace",
    caption: "Tu destino de confianza para repuestos originales y homologados en Medellín",
    isLocal: true,
    duration: 10000,
  },
  {
    src: mazdacx30Img,
    label: "Repuestos Originales y Homologados",
    caption: "Garantía de fábrica para tu vehículo",
    isLocal: true,
  },
  {
    src: renaultCapturImg,
    label: "Servicio, Calidad y Precios Competitivos",
    caption: "Relaciones duraderas con nuestros clientes, respaldadas por productos de calidad",
    isLocal: true,
    flipX: true,
  },
  {
    src: chevOnixImg,
    label: "Dos Sedes en Medellín a tu Servicio",
    caption: "Encuéntranos en Palace y Chagualo",
    isLocal: true,
  },
  {
    src: kia_picantoImg,
    label: "Líderes en Repuestos Automotrices",
    caption: "Más de 20 años de experiencia en comercialización de repuestos",
    isLocal: true,
  },
  {
    src: hyundaiImg,
    label: "Calidad y Durabilidad Garantizada",
    caption: "Productos de calidad para mejorar la seguridad al conducir tu vehículo",
    isLocal: true,
  },
  {
    src: mazda2Img,
    label: "Repuestos Originales y Homologados",
    caption: "Garantía de fábrica para tu vehículo",
    isLocal: true,
    imgStyle: { transform: "scale(1.6) translateX(10%) translateY(8%) rotate(10deg)", transformOrigin: "center" },
  },
  {
    src: ford3Img,
    label: "¡Contáctanos, Estamos Listos para Ti!",
    caption: "El placer de atenderte y los repuestos que tu vehículo necesita",
    isLocal: true,
  },
];

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent(c => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent(c => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    if (paused) return;
    const duration = (slides[current] as any).duration ?? 4500;
    const timer = setTimeout(next, duration);
    return () => clearTimeout(timer);
  }, [next, paused, current]);

  return (
    <section
      className="relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slide images */}
      <div className="relative h-[55vh] md:h-[70vh] min-h-[420px] overflow-hidden">
        <AnimatePresence mode="sync">
          <motion.div
            key={current}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            {(slides[current] as any).video ? (
              <video
                src={(slides[current] as any).video}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
            ) : (
              <img
                src={(slides[current] as any).src}
                alt={slides[current].label}
                className="w-full h-full object-cover"
                style={{
                  filter: "brightness(1.1)",
                  ...((slides[current] as any).imgStyle ?? ((slides[current] as any).flipX ? { transform: "scaleX(-1)" } : {})),
                }}
              />
            )}
            {/* Dark overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1526]/85 via-[#0B1526]/60 to-[#0B1526]/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1526]/70 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Branding overlay */}
        <div className="absolute inset-0 z-10 flex items-center">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col items-center md:items-start gap-4">

              {/* Full MH Autopartes logo — above message */}
              <img
                src={mhLogoImg}
                alt="MH Autopartes"
                className="w-96 md:w-[500px] object-contain drop-shadow-2xl"
              />

              {/* Slide caption */}
              <motion.div
                key={`caption-${current}`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="mb-6 text-center md:text-left"
              >
                <p className="text-white font-bold text-xl md:text-2xl drop-shadow">{slides[current].label}</p>
                <p className="text-white/70 text-sm md:text-base">{slides[current].caption}</p>
              </motion.div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-3 mb-6 justify-center md:justify-start">
                  <a
                    href="#catalogo"
                    className="inline-flex items-center gap-2 bg-[#215BE1] hover:bg-[#1a4bc0] text-white font-bold px-7 py-3 rounded-lg transition-colors shadow-lg text-sm uppercase tracking-wide"
                  >
                    Ver Catálogo
                  </a>
                  <a
                    href={randomWaLink("Hola MH Autopartes, quisiera hacer una consulta")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-7 py-3 rounded-lg transition-colors shadow-lg text-sm uppercase tracking-wide"
                  >
                    Contáctanos
                  </a>
                </div>

                {/* Brand logos */}
                <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start">
                  {brandIcons.map(({ name, icon: Icon }) => (
                    <div key={name} className="flex items-center justify-center group cursor-pointer">
                      <Icon size={32} color="white" className="opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all drop-shadow" />
                    </div>
                  ))}
                </div>
            </div>
          </div>
        </div>

        {/* Prev / Next arrows */}
        <button
          onClick={prev}
          aria-label="Anterior"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={next}
          aria-label="Siguiente"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current ? "bg-white w-6 h-2.5" : "bg-white/40 w-2.5 h-2.5 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Bottom pixel stripe */}
      <div className="flex w-full bg-[#0B1526]">
        {Array.from({ length: 64 }).map((_, i) => (
          <div
            key={i}
            className="h-3 flex-1"
            style={{ backgroundColor: pixelColors[i % pixelColors.length], minWidth: 4 }}
          />
        ))}
      </div>

    </section>
  );
}
