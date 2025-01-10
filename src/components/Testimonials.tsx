const testimonials = [
  {
    name: "João Silva",
    role: "Diretor Industrial",
    company: "Metalúrgica ABC",
    content: "A Origitec transformou nossa operação com soluções elétricas inovadoras. Profissionalismo e qualidade excepcionais.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100"
  },
  {
    name: "Maria Santos",
    role: "Gerente de Manutenção",
    company: "Indústria XYZ",
    content: "Excelente suporte técnico e atendimento. As melhorias implementadas reduziram significativamente nossas paradas não programadas.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100"
  },
  {
    name: "Pedro Costa",
    role: "Coordenador de Projetos",
    company: "Fábrica 123",
    content: "Parceria confiável em automação industrial. Resultados impressionantes em eficiência energética.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          O que nossos clientes dizem
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-origitec-gray">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
              <p className="text-origitec-gray">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;