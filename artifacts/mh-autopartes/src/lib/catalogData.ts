// Category/subcategory catalog data
// Local images imported via @assets alias → attached_assets/categorias/

import motorAnillos from "@assets/categorias/motor-anillos.png";
import motorBombaAceite from "@assets/categorias/motor-bombaaceite.png";
import motorEjeLevas from "@assets/categorias/motor-ejelevas.png";
import motorEmpaques from "@assets/categorias/motor-empaques.png";
import motorGorros from "@assets/categorias/motor-gorros.png";
import motorPistones from "@assets/categorias/motor-pistones.png";
import motorReten from "@assets/categorias/motor-reten.png";

import refrigBombaAgua from "@assets/categorias/refrigeracion-bombaagua.png";
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
import transmPinones from "@assets/categorias/transm-pinones.jpg";

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
import distPinon from "@assets/categorias/pinonciguenal.png";

import catCasquetes from "@assets/categorias/motor_casquetes.png";
import catValvulas from "@assets/categorias/motor_valvulas.png";
import catSensorTemp from "@assets/categorias/sensor_oxigeno.png";
import catBateria from "@assets/categorias/bateria1.png";
import catIluminacion from "@assets/categorias/iluminacion.png";
import catInyectores from "@assets/categorias/inyectores.png";
import catReguladores from "@assets/categorias/reguladores.png";
import catSensores from "@assets/categorias/pera_motovent.png";
import catRotula from "@assets/categorias/rotula.png";
import catCablesAlta from "@assets/categorias/cables_alta.png";
import catCarburador from "@assets/categorias/carburador.png";
import catTensores from "@assets/categorias/tensor_dist.png";
import catChupas from "@assets/categorias/chupas.png";
import catCilindros from "@assets/categorias/cilindro_freno.png";
import catAntiruidos from "@assets/categorias/antiruido.png";
import catAfinAceite from "@assets/categorias/afin_aceite.png";
import catSwitchEncendido from "@assets/categorias/switch_encendido.png";
import catSwitchParqueo from "@assets/categorias/switch_parqueo.png";
import catSwitchLuces from "@assets/categorias/swtich_luces.png";

import aceites_lub1 from "@assets/categorias/aceites_lub1.png";
import aceites_lub2 from "@assets/categorias/aceites_lub2.png";
import aceites_lub3 from "@assets/categorias/aceites_lub3.png";

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
      { name: "Switches de encendido", image: catSwitchEncendido },
      { name: "Sensores", image: catSensores },
      { name: "Switches de parqueo", image: catSwitchParqueo },
      { name: "Switches de luces", image: catSwitchLuces },
    ],
  },
  {
    id: "aceites",
    name: "Aceites y Lubricantes",
    icon: "",
    coverImage: aceites_lub1,
    subcategories: [
      { name: "Aceites", image: aceites_lub1 },
      { name: "Lubricantes", image: aceites_lub2 },
      { name: "Refrigerantes", image: aceites_lub3 },
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
      { name: "Aceite", image: catAfinAceite },
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
