export type Product = {
  id: number;
  name: string;
  brand: string;
  model: string;
  category: string;
  type: "Original" | "Homologado";
  price: string;
  image: string;
};

export const products: Product[] = [
  { id: 1, name: "Pastillas de freno delanteras", brand: "Chevrolet", model: "Aveo", category: "Frenos", type: "Original", price: "85.000 COP", image: "brake-pads" },
  { id: 2, name: "Filtro de aceite", brand: "Mazda", model: "Mazda 3", category: "Motor", type: "Homologado", price: "25.000 COP", image: "oil-filter" },
  { id: 3, name: "Kit de embrague completo", brand: "Renault", model: "Logan", category: "Transmisión", type: "Original", price: "320.000 COP", image: "clutch-kit" },
  { id: 4, name: "Amortiguador trasero", brand: "Kia", model: "Picanto", category: "Suspensión", type: "Homologado", price: "145.000 COP", image: "shock-absorber" },
  { id: 5, name: "Termostato motor", brand: "Hyundai", model: "i10", category: "Motor", type: "Original", price: "55.000 COP", image: "thermostat" },
  { id: 6, name: "Banda de distribución", brand: "Ford", model: "Fiesta", category: "Motor", type: "Homologado", price: "78.000 COP", image: "timing-belt" },
  { id: 7, name: "Disco de freno delantero", brand: "Chevrolet", model: "Spark GT", category: "Frenos", type: "Original", price: "110.000 COP", image: "brake-disc" },
  { id: 8, name: "Bujías de encendido x4", brand: "Mazda", model: "Mazda 6", category: "Motor", type: "Original", price: "45.000 COP", image: "spark-plugs" },
  { id: 9, name: "Filtro de aire", brand: "Renault", model: "Sandero", category: "Motor", type: "Homologado", price: "32.000 COP", image: "air-filter" },
  { id: 10, name: "Aceite 5W-30 sintético 4L", brand: "Kia", model: "Sportage", category: "Lubricantes", type: "Original", price: "95.000 COP", image: "engine-oil" },
  { id: 11, name: "Bomba de agua", brand: "Hyundai", model: "Tucson", category: "Motor", type: "Homologado", price: "185.000 COP", image: "water-pump" },
  { id: 12, name: "Buje de suspensión", brand: "Ford", model: "EcoSport", category: "Suspensión", type: "Original", price: "65.000 COP", image: "suspension-bush" }
];

export const brands = ["Chevrolet", "Mazda", "Renault", "Kia", "Hyundai", "Ford"];
export const categories = ["Frenos", "Motor", "Transmisión", "Suspensión", "Lubricantes"];
