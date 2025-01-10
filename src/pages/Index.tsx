import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Metrics from "@/components/Metrics";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Metrics />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;