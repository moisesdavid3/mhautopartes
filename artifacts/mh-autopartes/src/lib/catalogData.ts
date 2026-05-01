// Category/subcategory catalog data
// Local images imported via @assets alias → attached_assets/categorias/

import motorAnillos from "@assets/categorias/motor-anillos.png";
import motorBombaAceite from "@assets/categorias/motor-bombaaceite.png";
import motorEjeLevas from "@assets/categorias/motor-ejelevas.png";
import motorEmpaques from "@assets/categorias/motor-empaques.png";
import motorGorros from "@assets/categorias/motor-gorros.png";
import motorPistones from "@assets/categorias/motor-pistones.png";
import motorReten from "@assets/categorias/motor-reten.png";

import refrigBombaAgua from "@assets/categorias/refrigeración-bombaagua.png";
import refrigMangueras from "@assets/categorias/refri-mangueras.png";
import refrigRadiador from "@assets/categorias/Refri-radiador.png";
import refrigTermostato from "@assets/categorias/refri-termostato.png";
import refrigVentilador from "@assets/categorias/refri-ventilador.png";

import suspAmortiguadores from "@assets/categorias/susp-amorriguadores.png";
import suspBarraTensora from "@assets/categorias/susp-barratensora.png";
import suspBujeTijera from "@assets/categorias/susp-bujetijera.png";
import suspEspirales from "@assets/categorias/susp-espirales.png";
import suspTijeras from "@assets/categorias/susp-tijeras.png";

import transmArandelas from "@assets/categorias/transm-arandelas.png";
import transmPuntas from "@assets/categorias/transm-puntas.png";
import transmClutch from "@assets/categorias/transm-clutch.png";
import transmPinones from "@assets/categorias/transm-piñones.jpg";

import electAlternador from "@assets/categorias/electrico-alrernador.jpg";
import electBobina from "@assets/categorias/elect-bobina.jpg";
import electBoquetes from "@assets/categorias/electr-boquetes.jpg";
import electMotorArranque from "@assets/categorias/elect-motorarranque.jpg";
import electBujias from "@assets/categorias/elect-bujias.png";

import aceite from "@assets/categorias/aceitelubricante.jpg";

import dirBarra from "@assets/categorias/direccion-barradir.png";
import dirBrazos from "@assets/categorias/dir-brazos.png";
import dirBiela from "@assets/categorias/dir-bieladireccion.png";
import dirCaja from "@assets/categorias/dir-cajadireccion.png";
import dirTerminales from "@assets/categorias/dir-terminales.png";

import afinFiltroAire from "@assets/categorias/afinacion-filtroaire.jpg";
import afinFiltroGasolina from "@assets/categorias/afinacion-filtrogasolima.png";

import distCadena from "@assets/categorias/cadenadistrib.png";
import distCiguenal from "@assets/categorias/ciguenal.png";
import distCorreas from "@assets/categorias/correadist.png";
import distImpulsadores from "@assets/categorias/impulsadoresdistrib.png";
import distPinon from "@assets/categorias/piñoncigueñal.png";

import frenosBandas from "@assets/categorias/bandasfreno.png";
import frenosBomba from "@assets/categorias/bombafreno.png";
import frenosBooster from "@assets/categorias/boosterfreno.png";
import frenosDiscos from "@assets/categorias/discosfreno.png";
import frenosLiquido from "@assets/categorias/liquidofrenos.jpg";
import frenosMangueras from "@assets/categorias/manguerafreno.jpg";
import frenosPastas from "@assets/categorias/pastasfreno.png";

export type Subcategory = {
  name: string;
  image: string;
};

export type Category = {
  id: string;
  name: string;
  icon: string;
  coverImage: string;
  subcategories: Subcategory[];
};

export const catalogCategories: Category[] = [
  {
    id: "motor",
    name: "Motor",
    icon: "⚙️",
    coverImage: motorPistones,
    subcategories: [
      { name: "Anillos", image: motorAnillos },
      { name: "Bomba de aceite", image: motorBombaAceite },
      { name: "Casquetes", image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&q=80&auto=format" },
      { name: "Eje de levas", image: motorEjeLevas },
      { name: "Empaques", image: motorEmpaques },
      { name: "Gorros", image: motorGorros },
      { name: "Pistones", image: motorPistones },
      { name: "Retenes", image: motorReten },
      { name: "Válvulas", image: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=500&q=80&auto=format" },
    ],
  },
  {
    id: "refrigeracion",
    name: "Refrigeración",
    icon: "🌡️",
    coverImage: refrigRadiador,
    subcategories: [
      { name: "Bomba de agua", image: refrigBombaAgua },
      { name: "Mangueras", image: refrigMangueras },
      { name: "Radiador", image: refrigRadiador },
      { name: "Termostato", image: refrigTermostato },
      { name: "Sensor de temperatura", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80&auto=format" },
      { name: "Ventilador", image: refrigVentilador },
    ],
  },
  {
    id: "suspension",
    name: "Suspensión",
    icon: "🔩",
    coverImage: suspAmortiguadores,
    subcategories: [
      { name: "Amortiguadores", image: suspAmortiguadores },
      { name: "Barra tensora", image: suspBarraTensora },
      { name: "Buje tijera", image: suspBujeTijera },
      { name: "Espirales", image: suspEspirales },
      { name: "Tijeras", image: suspTijeras },
    ],
  },
  {
    id: "transmision",
    name: "Transmisión",
    icon: "🔧",
    coverImage: transmClutch,
    subcategories: [
      { name: "Arandelas de sincronismo", image: transmArandelas },
      { name: "Puntas", image: transmPuntas },
      { name: "Embrague / Clutch", image: transmClutch },
      { name: "Piñonería de caja", image: transmPinones },
    ],
  },
  {
    id: "electrico",
    name: "Eléctrico",
    icon: "⚡",
    coverImage: electAlternador,
    subcategories: [
      { name: "Alternador", image: electAlternador },
      { name: "Batería", image: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=500&q=80&auto=format" },
      { name: "Bobina", image: electBobina },
      { name: "Bujías", image: electBujias },
      { name: "Boquereles eléctricos", image: electBoquetes },
      { name: "Iluminación", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=500&q=80&auto=format" },
      { name: "Inyectores", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=500&q=80&auto=format" },
      { name: "Motor de arranque", image: electMotorArranque },
      { name: "Reguladores", image: "https://images.unsplash.com/photo-1625047509252-ab38fb5c7343?w=500&q=80&auto=format" },
      { name: "Switches de encendido", image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=500&q=80&auto=format" },
      { name: "Sensores", image: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=500&q=80&auto=format" },
      { name: "Switches de parqueo", image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=500&q=80&auto=format" },
      { name: "Switches de luces", image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=500&q=80&auto=format" },
    ],
  },
  {
    id: "aceites",
    name: "Aceites y Lubricantes",
    icon: "🛢️",
    coverImage: aceite,
    subcategories: [],
  },
  {
    id: "direccion",
    name: "Dirección",
    icon: "🎯",
    coverImage: dirCaja,
    subcategories: [
      { name: "Barra de dirección", image: dirBarra },
      { name: "Brazos de dirección", image: dirBrazos },
      { name: "Biela", image: dirBiela },
      { name: "Caja de dirección", image: dirCaja },
      { name: "Rótula", image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=500&q=80&auto=format" },
      { name: "Terminales", image: dirTerminales },
    ],
  },
  {
    id: "afinacion",
    name: "Afinación",
    icon: "🔑",
    coverImage: afinFiltroAire,
    subcategories: [
      { name: "Aceite", image: aceite },
      { name: "Cables de alta", image: "https://images.unsplash.com/photo-1563461660947-507ef49e9c47?w=500&q=80&auto=format" },
      { name: "Filtro de aire", image: afinFiltroAire },
      { name: "Filtro de gasolina", image: afinFiltroGasolina },
      { name: "Partes de carburador", image: "https://images.unsplash.com/photo-1630259501578-a5ea4e01eda3?w=500&q=80&auto=format" },
    ],
  },
  {
    id: "distribucion",
    name: "Distribución",
    icon: "⛓️",
    coverImage: distCadena,
    subcategories: [
      { name: "Cadena de distribución", image: distCadena },
      { name: "Cigüeñal", image: distCiguenal },
      { name: "Correas", image: distCorreas },
      { name: "Impulsadores", image: distImpulsadores },
      { name: "Gorros", image: motorGorros },
      { name: "Piñón cigüeñal", image: distPinon },
      { name: "Tensores", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&q=80&auto=format" },
    ],
  },
  {
    id: "frenos",
    name: "Frenos",
    icon: "🛑",
    coverImage: frenosDiscos,
    subcategories: [
      { name: "Anti ruidos", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80&auto=format" },
      { name: "Bandas", image: frenosBandas },
      { name: "Bomba de freno", image: frenosBomba },
      { name: "Booster", image: frenosBooster },
      { name: "Chupas", image: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=500&q=80&auto=format" },
      { name: "Cilindros", image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&q=80&auto=format" },
      { name: "Discos", image: frenosDiscos },
      { name: "Líquido de freno", image: frenosLiquido },
      { name: "Mangueras", image: frenosMangueras },
      { name: "Pastas", image: frenosPastas },
    ],
  },
];
