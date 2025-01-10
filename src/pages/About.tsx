import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl font-bold mb-8">Sobre a Origitec</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Nossa História</h2>
          <p className="text-lg text-gray-700 mb-6">
            A Origitec é uma empresa especializada em soluções elétricas industriais, 
            com anos de experiência no mercado. Nossa missão é fornecer serviços de 
            alta qualidade que otimizam processos e reduzem custos para nossos clientes.
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Missão</h3>
            <p className="text-gray-700">
              Fornecer soluções elétricas industriais inovadoras e eficientes, 
              contribuindo para o sucesso de nossos clientes.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Visão</h3>
            <p className="text-gray-700">
              Ser referência nacional em soluções elétricas industriais, 
              reconhecida pela excelência e inovação.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Valores</h3>
            <p className="text-gray-700">
              • Qualidade<br />
              • Inovação<br />
              • Comprometimento<br />
              • Segurança<br />
              • Sustentabilidade
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;