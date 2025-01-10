import { useEffect, useState } from "react";

const metrics = [
  { value: 150, label: "Projetos Realizados" },
  { value: 50, label: "Clientes Ativos" },
  { value: 15, label: "Anos de Experiência" },
  { value: 100, label: "Profissionais Certificados" },
];

const Metrics = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("metrics");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-origitec-black text-origitec-white">
      <div id="metrics" className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className={`counter-value ${isVisible ? "animate-count-up" : "opacity-0"}`}>
                {isVisible ? metric.value : 0}+
              </div>
              <div className="text-origitec-gray">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;