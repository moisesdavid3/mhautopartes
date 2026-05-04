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

import catCasquetes from "@assets/catalog/casquetes.jpg";
import catValvulas from "@assets/catalog/valvulas.jpg";
import catSensorTemp from "@assets/catalog/sensor_temp.jpg";
import catBateria from "@assets/catalog/bateria.jpg";
import catIluminacion from "@assets/catalog/iluminacion.jpg";
import catInyectores from "@assets/catalog/inyectores.jpg";
import catReguladores from "@assets/catalog/reguladores.jpg";
import catSensores from "@assets/catalog/sensores.jpg";
import catRotula from "@assets/catalog/rotula.jpg";
import catCablesAlta from "@assets/catalog/cables_alta.jpg";
import catCarburador from "@assets/catalog/carburador.jpg";
import catTensores from "@assets/catalog/tensores.jpg";
import catChupas from "@assets/catalog/chupas.jpg";
import catCilindros from "@assets/catalog/cilindros_freno.jpg";
import catAntiruidos from "@assets/catalog/antiruidos.jpg";
import catSwitches from "@assets/catalog/switches.jpg";

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
    icon: "",
    coverImage: motorPistones,
    subcategories: [
      { name: "Anillos", image: motorAnillos },
      { name: "Bomba de aceite", image: motorBombaAceite },
      { name: "Casquetes", image: catCasquetes },
      { name: "Eje de levas", image: motorEjeLevas },
      { name: "Empaques", image: motorEmpaques },
      { name: "Gorros", image: motorGorros },
      { name: "Pistones", image: motorPistones },
      { name: "Retenes", image: motorReten },
      { name: "Válvulas", image: catValvulas },
    ],
  },
  {
    id: "refrigeracion",
    name: "Refrigeración",
    icon: "",
    coverImage: refrigRadiador,
    subcategories: [
      { name: "Bomba de agua", image: refrigBombaAgua },
      { name: "Mangueras", image: refrigMangueras },
      { name: "Radiador", image: refrigRadiador },
      { name: "Termostato", image: refrigTermostato },
      { name: "Sensor de temperatura", image: catSensorTemp },
      { name: "Ventilador", image: refrigVentilador },
    ],
  },
  {
    id: "suspension",
    name: "Suspensión",
    icon: "",
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
    icon: "",
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
    icon: "",
    coverImage: electAlternador,
    subcategories: [
      { name: "Alternador", image: electAlternador },
      { name: "Batería", image: catBateria },
      { name: "Bobina", image: electBobina },
      { name: "Bujías", image: electBujias },
      { name: "Boquereles eléctricos", image: electBoquetes },
      { name: "Iluminación", image: catIluminacion },
      { name: "Inyectores", image: catInyectores },
      { name: "Motor de arranque", image: electMotorArranque },
      { name: "Reguladores", image: catReguladores },
      { name: "Switches de encendido", image: catSwitches },
      { name: "Sensores", image: catSensores },
      { name: "Switches de parqueo", image: catSwitches },
      { name: "Switches de luces", image: catSwitches },
    ],
  },
  {
    id: "aceites",
    name: "Aceites y Lubricantes",
    icon: "",
    coverImage: aceite,
    subcategories: [
      { name: "Aceites y Lubricantes", image: aceite },
    ],
  },
  {
    id: "direccion",
    name: "Dirección",
    icon: "",
    coverImage: dirCaja,
    subcategories: [
      { name: "Barra de dirección", image: dirBarra },
      { name: "Brazos de dirección", image: dirBrazos },
      { name: "Biela", image: dirBiela },
      { name: "Caja de dirección", image: dirCaja },
      { name: "Rótula", image: catRotula },
      { name: "Terminales", image: dirTerminales },
    ],
  },
  {
    id: "afinacion",
    name: "Afinación",
    icon: "",
    coverImage: afinFiltroAire,
    subcategories: [
      { name: "Aceite", image: aceite },
      { name: "Cables de alta", image: catCablesAlta },
      { name: "Filtro de aire", image: afinFiltroAire },
      { name: "Filtro de gasolina", image: afinFiltroGasolina },
      { name: "Partes de carburador", image: catCarburador },
    ],
  },
  {
    id: "distribucion",
    name: "Distribución",
    icon: "",
    coverImage: distCadena,
    subcategories: [
      { name: "Cadena de distribución", image: distCadena },
      { name: "Cigüeñal", image: distCiguenal },
      { name: "Correas", image: distCorreas },
      { name: "Impulsadores", image: distImpulsadores },
      { name: "Gorros", image: motorGorros },
      { name: "Piñón cigüeñal", image: distPinon },
      { name: "Tensores", image: catTensores },
    ],
  },
  {
    id: "frenos",
    name: "Frenos",
    icon: "",
    coverImage: frenosDiscos,
    subcategories: [
      { name: "Anti ruidos", image: catAntiruidos },
      { name: "Bandas", image: frenosBandas },
      { name: "Bomba de freno", image: frenosBomba },
      { name: "Booster", image: frenosBooster },
      { name: "Chupas", image: catChupas },
      { name: "Cilindros", image: catCilindros },
      { name: "Discos", image: frenosDiscos },
      { name: "Líquido de freno", image: frenosLiquido },
      { name: "Mangueras", image: frenosMangueras },
      { name: "Pastas", image: frenosPastas },
    ],
  },
];
