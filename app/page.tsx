import { ProductGrid } from "@/components/product-grid";
import { Footer } from "@/components/footer";
import { CustomSoapSection } from "@/components/custom-soap-section";
import Container from "@/components/Container";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Container>
        <Navbar />
        <ProductGrid />
        <CustomSoapSection />
      </Container>
      <Footer />
    </div>
  );
}
