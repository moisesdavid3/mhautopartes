export type Product = {
  id: number;
  name: string;
  brand: string;
  model: string;
  category: string;
  price: string;
  photo: string;
};

export const products: Product[] = [
  {
    id: 1, name: "Pastillas de freno delanteras", brand: "Chevrolet", model: "Aveo",
    category: "Frenos", price: "85.000 COP",
    photo: "https://images.unsplash.com/photo-1563461660947-507ef49e9c47?w=500&q=80&auto=format",
  },
  {
    id: 2, name: "Filtro de aceite", brand: "Mazda", model: "Mazda 3",
    category: "Motor", price: "25.000 COP",
    photo: "https://images.unsplash.com/photo-1625047509252-ab38fb5c7343?w=500&q=80&auto=format",
  },
  {
    id: 3, name: "Kit de embrague completo", brand: "Renault", model: "Logan",
    category: "Transmisión", price: "320.000 COP",
    photo: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=500&q=80&auto=format",
  },
  {
    id: 4, name: "Amortiguador trasero", brand: "Kia", model: "Picanto",
    category: "Suspensión", price: "145.000 COP",
    photo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80&auto=format",
  },
  {
    id: 5, name: "Termostato motor", brand: "Hyundai", model: "i10",
    category: "Motor", price: "55.000 COP",
    photo: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=500&q=80&auto=format",
  },
  {
    id: 6, name: "Banda de distribución", brand: "Ford", model: "Fiesta",
    category: "Motor", price: "78.000 COP",
    photo: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=500&q=80&auto=format",
  },
  {
    id: 7, name: "Disco de freno delantero", brand: "Chevrolet", model: "Spark GT",
    category: "Frenos", price: "110.000 COP",
    photo: "https://images.unsplash.com/photo-1630259501578-a5ea4e01eda3?w=500&q=80&auto=format",
  },
  {
    id: 8, name: "Bujías de encendido x4", brand: "Mazda", model: "Mazda 6",
    category: "Motor", price: "45.000 COP",
    photo: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=500&q=80&auto=format",
  },
  {
    id: 9, name: "Filtro de aire", brand: "Renault", model: "Sandero",
    category: "Motor", price: "32.000 COP",
    photo: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=500&q=80&auto=format",
  },
  {
    id: 10, name: "Aceite 5W-30 sintético 4L", brand: "Kia", model: "Sportage",
    category: "Lubricantes", price: "95.000 COP",
    photo: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=500&q=80&auto=format",
  },
  {
    id: 11, name: "Bomba de agua", brand: "Hyundai", model: "Tucson",
    category: "Motor", price: "185.000 COP",
    photo: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=500&q=80&auto=format",
  },
  {
    id: 12, name: "Buje de suspensión", brand: "Ford", model: "EcoSport",
    category: "Suspensión", price: "65.000 COP",
    photo: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=500&q=80&auto=format",
  },
];

export const brands = ["Chevrolet", "Mazda", "Renault", "Kia", "Hyundai", "Ford"];
export const categories = ["Frenos", "Motor", "Transmisión", "Suspensión", "Lubricantes"];
