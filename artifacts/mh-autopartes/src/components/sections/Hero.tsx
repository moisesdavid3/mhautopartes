import { motion } from "framer-motion";
import { SiChevrolet, SiMazda, SiRenault, SiKia, SiHyundai, SiFord } from "react-icons/si";
import palaceImg from "@assets/palace_1776826722701.JPG";
import chagualoImg from "@assets/chagualo_1776826722702.JPG";

const brandIcons = [
  { name: "Mazda", icon: SiMazda },
  { name: "Chevrolet", icon: SiChevrolet },
  { name: "Renault", icon: SiRenault },
  { name: "Kia", icon: SiKia },
  { name: "Hyundai", icon: SiHyundai },
  { name: "Ford", icon: SiFord },
];

const pixelColors = ["#F5C518","#F5C518","#E91E8C","#E91E8C","#FFFFFF","#FFFFFF","#215BE1","#215BE1"];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0B1526] via-[#0F2052] to-[#215BE1]">
      {/* Diagonal decorative shape */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-[#215BE1]/20 skew-x-[-12deg] translate-x-1/4 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">

          {/* Left: MH Circle icon only */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <div className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-[#0B1526] border-4 border-white/20 flex items-center justify-center overflow-hidden shadow-2xl">
              <img
                src="https://mhautopartes.com/wp-content/uploads/2015/09/icon_mh.png"
                alt="MH"
                className="w-28 h-28 md:w-40 md:h-40 object-contain"
              />
            </div>
          </motion.div>

          {/* Right: Headline, pixel stripe, brand logos */}
          <div className="flex-1 text-center md:text-left">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
              <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-2">
                MH <span className="text-white">Autopartes</span>
              </h1>

              {/* Pixel stripe */}
              <div className="flex mb-6 mt-2">
                {Array.from({ length: 32 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-4 flex-1"
                    style={{ backgroundColor: pixelColors[i % pixelColors.length], minWidth: 8 }}
                  />
                ))}
              </div>

              <p className="text-white/80 text-lg mb-8 max-w-xl">
                Especialistas en repuestos originales y homologados para las marcas más confiables. 21+ años de experiencia en Medellín.
              </p>
            </motion.div>

            {/* Brand logos */}
            <motion.div
              className="flex flex-wrap gap-6 items-center justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {brandIcons.map(({ name, icon: Icon }) => (
                <div key={name} className="flex flex-col items-center gap-1 group cursor-pointer">
                  <Icon size={40} color="white" className="opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                  <span className="text-[10px] text-white/70 font-semibold uppercase">{name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Store photos strip */}
        <motion.div
          className="mt-12 grid grid-cols-2 gap-4 md:gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="relative rounded-lg overflow-hidden shadow-2xl group">
            <img
              src={palaceImg}
              alt="Sede Palace"
              className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-4">
              <span className="text-white font-black text-lg drop-shadow">Sede Palace</span>
              <p className="text-white/80 text-xs">Calle 65 #52-34, Medellín</p>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden shadow-2xl group">
            <img
              src={chagualoImg}
              alt="Sede Chagualo"
              className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-4">
              <span className="text-white font-black text-lg drop-shadow">Sede Chagualo</span>
              <p className="text-white/80 text-xs">Carrera 65, Chagualo, Medellín</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom pixel stripe */}
      <div className="flex w-full">
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
