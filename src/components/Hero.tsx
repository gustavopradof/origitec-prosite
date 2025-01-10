import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="home" className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=2000')",
        }}
      >
        <div className="absolute inset-0 hero-gradient" />
      </div>
      
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl text-origitec-white font-bold mb-6">
            Soluções em Elétrica Industrial
          </h1>
          <p className="text-xl text-origitec-white/90 mb-8">
            Expertise técnica e inovação para otimizar seus processos industriais
          </p>
          <Link to="/contact">
            <Button className="bg-origitec-white text-origitec-black hover:bg-origitec-gray text-lg px-8 py-6">
              Solicite um Orçamento
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;