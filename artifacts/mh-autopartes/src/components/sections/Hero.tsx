import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiChevrolet, SiMazda, SiRenault, SiKia, SiHyundai, SiFord } from "react-icons/si";
import { ChevronLeft, ChevronRight } from "lucide-react";
import palaceImg from "@assets/palace_1776826722701.JPG";
import chagualoImg from "@assets/chagualo_1776826722702.JPG";
import mazdaImg from "@assets/mazda_banner.png";
import renaultImg from "@assets/renault_banner.png";

const brandIcons = [
  { name: "Mazda", icon: SiMazda },
  { name: "Chevrolet", icon: SiChevrolet },
  { name: "Renault", icon: SiRenault },
  { name: "Kia", icon: SiKia },
  { name: "Hyundai", icon: SiHyundai },
  { name: "Ford", icon: SiFord },
];

const pixelColors = ["#F5C518","#F5C518","#E91E8C","#E91E8C","#FFFFFF","#FFFFFF","#215BE1","#215BE1"];

const slides = [
  {
    src: palaceImg,
    label: "Sede Palace",
    caption: "Carrera 50 #40-64, Medellín",
    isLocal: true,
  },
  {
    src: chagualoImg,
    label: "Sede Chagualo",
    caption: "Calle 65 #52-34, Medellín",
    isLocal: true,
  },
  {
    src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1600&q=80&auto=format",
    label: "Repuestos Originales",
    caption: "Garantía de fábrica para tu vehículo",
    isLocal: false,
  },
  {
    src: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1600&q=80&auto=format",
    label: "Suspensión & Dirección",
    caption: "Especialistas en sistemas de suspensión",
    isLocal: false,
  },
  {
    src: mazdaImg,
    label: "Mazda · Kia · Hyundai",
    caption: "Repuestos para las marcas más confiables",
    isLocal: true,
  },
  {
    src: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1600&q=80&auto=format",
    label: "Motor & Transmisión",
    caption: "Filtros, bandas, embragues y más",
    isLocal: false,
  },
  {
    src: renaultImg,
    label: "Chevrolet · Renault · Ford",
    caption: "21+ años siendo tu aliado en el taller",
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
    const timer = setInterval(next, 4500);
    return () => clearInterval(timer);
  }, [next, paused]);

  return (
    <section
      className="relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slide images */}
      <div className="relative h-[55vh] md:h-[70vh] min-h-[420px]">
        <AnimatePresence mode="sync">
          <motion.div
            key={current}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={slides[current].src}
              alt={slides[current].label}
              className="w-full h-full object-cover"
            />
            {/* Dark overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1526]/85 via-[#0B1526]/60 to-[#0B1526]/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1526]/70 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Branding overlay */}
        <div className="absolute inset-0 z-10 flex items-center">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-14">

              {/* MH circle icon */}
              <div className="flex-shrink-0 hidden sm:block">
                <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-[#0B1526]/80 border-4 border-white/20 flex items-center justify-center shadow-2xl">
                  <img
                    src="https://mhautopartes.com/wp-content/uploads/2015/09/icon_mh.png"
                    alt="MH"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Text content */}
              <div className="flex-1 text-center md:text-left">
                <motion.h1
                  key={`title-${current}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-2 drop-shadow-lg"
                >
                  MH Autopartes
                </motion.h1>

                {/* Pixel stripe */}
                <div className="flex mb-4 mt-2 max-w-md mx-auto md:mx-0">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-3 flex-1"
                      style={{ backgroundColor: pixelColors[i % pixelColors.length], minWidth: 6 }}
                    />
                  ))}
                </div>

                {/* Slide caption */}
                <motion.div
                  key={`caption-${current}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="mb-6"
                >
                  <p className="text-white font-bold text-xl md:text-2xl drop-shadow">{slides[current].label}</p>
                  <p className="text-white/70 text-sm md:text-base">{slides[current].caption}</p>
                </motion.div>

                {/* Línea Única */}
                <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
                  <span className="text-white/50 text-xs uppercase tracking-widest">Línea Única</span>
                  <span className="text-white font-black text-2xl md:text-3xl tracking-wide drop-shadow">(604) 444 56 65</span>
                </div>

                {/* Brand logos */}
                <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start">
                  {brandIcons.map(({ name, icon: Icon }) => (
                    <div key={name} className="flex flex-col items-center gap-0.5 group cursor-pointer">
                      <Icon size={32} color="white" className="opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all drop-shadow" />
                      <span className="text-[9px] text-white/60 font-semibold uppercase tracking-wide">{name}</span>
                    </div>
                  ))}
                </div>
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
