import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { PromoBanner } from "@/components/sections/PromoBanner";
import { BrandSelector } from "@/components/sections/BrandSelector";
import { Categories } from "@/components/sections/Categories";
import { Catalog } from "@/components/sections/Catalog";
import { Trust } from "@/components/sections/Trust";
import { Stores } from "@/components/sections/Stores";
import { About } from "@/components/sections/About";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <PromoBanner />
      <BrandSelector selectedBrand={null} setSelectedBrand={() => {}} />
      <Categories onCategorySelect={() => {}} />
      <Catalog />
      <Trust />
      <Stores />
      <About />
      <Footer />
    </div>
  );
}
