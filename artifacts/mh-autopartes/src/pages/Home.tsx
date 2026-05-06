import { motion, type Variants } from "framer-motion";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { BrandSelector } from "@/components/sections/BrandSelector";
import { Catalog } from "@/components/sections/Catalog";
import { Trust } from "@/components/sections/Trust";
import { Stores } from "@/components/sections/Stores";
import { About } from "@/components/sections/About";
import { Footer } from "@/components/sections/Footer";
import { FloatingActions } from "@/components/FloatingActions";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 48 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

function AnimatedSection({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <AnimatedSection>
        <BrandSelector selectedBrand={null} setSelectedBrand={() => {}} />
      </AnimatedSection>
      <AnimatedSection>
        <Catalog />
      </AnimatedSection>
      <AnimatedSection>
        <Trust />
      </AnimatedSection>
      <AnimatedSection>
        <About />
      </AnimatedSection>
      <AnimatedSection>
        <Stores />
      </AnimatedSection>
      <AnimatedSection>
        <Footer />
      </AnimatedSection>
      <FloatingActions />
    </div>
  );
}
