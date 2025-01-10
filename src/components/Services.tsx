import { CircuitBoard, Factory, Wrench, Bolt, Cable, Shield } from "lucide-react";

const services = [
  {
    icon: <CircuitBoard size={40} />,
    title: "Automação Industrial",
    description: "Sistemas inteligentes para otimizar sua produção",
  },
  {
    icon: <Factory size={40} />,
    title: "Instalações Elétricas",
    description: "Projetos e execução com alta qualidade",
  },
  {
    icon: <Wrench size={40} />,
    title: "Manutenção Preventiva",
    description: "Prevenção de falhas e paradas não programadas",
  },
  {
    icon: <Bolt size={40} />,
    title: "Eficiência Energética",
    description: "Redução de custos e consumo consciente",
  },
  {
    icon: <Cable size={40} />,
    title: "Infraestrutura",
    description: "Adequação e modernização elétrica",
  },
  {
    icon: <Shield size={40} />,
    title: "Segurança",
    description: "Proteção para equipamentos e pessoas",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Nossos Serviços
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card"
            >
              <div className="text-origitec-black mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-origitec-gray">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;