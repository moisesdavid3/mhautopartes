import { useState } from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { BrandSelector } from "@/components/sections/BrandSelector";
import { Catalog } from "@/components/sections/Catalog";
import { Trust } from "@/components/sections/Trust";
import { Stores } from "@/components/sections/Stores";
import { About } from "@/components/sections/About";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <BrandSelector selectedBrand={selectedBrand} setSelectedBrand={setSelectedBrand} />
      <Catalog selectedBrand={selectedBrand} setSelectedBrand={setSelectedBrand} />
      <Trust />
      <Stores />
      <About />
      <Footer />
    </div>
  );
}
