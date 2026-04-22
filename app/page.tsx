import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Clients from "./components/Clients";
import AccredianEdge from "./components/AccredianEdge";
import DomainExpertise from "./components/DomainExpertise";
import CourseSegmentation from "./components/CourseSegmentation";
import CATFramework from "./components/CATFramework";
import FAQs from "./components/FAQs";
import Testimonials from "./components/Testimonials";
import CTABanner, { Footer } from "./components/CTABannerFooter";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Clients />
      <AccredianEdge />
      <DomainExpertise />
      <CourseSegmentation />
      <CATFramework />
      <FAQs />
      <Testimonials />
      <CTABanner />
      <Footer />
    </main>
  );
}
