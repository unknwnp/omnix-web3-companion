import { HeroSection } from "@/components/HeroSection";
import { ProductPreview } from "@/components/ProductPreview";
import { VisionSection } from "@/components/VisionSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProductPreview />
      <VisionSection />
      <Footer />
    </div>
  );
};

export default Index;
