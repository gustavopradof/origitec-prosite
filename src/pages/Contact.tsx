import { useState } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, MessageCircle } from "lucide-react";

const Contact = () => {
  const [step, setStep] = useState(1);

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "(11) 1234-5678",
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "contato@origitec.com",
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: "Av. Industrial, 1000 - São Paulo/SP",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulário Multi-etapas */}
          <section className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-8">Entre em Contato</h2>
            
            {step === 1 && (
              <div className="space-y-4">
                <Input placeholder="Nome" />
                <Input type="email" placeholder="E-mail" />
                <Input type="tel" placeholder="Telefone" />
                <Button onClick={() => setStep(2)} className="w-full">
                  Próximo
                </Button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Tipo de Serviço" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="automation">Automação Industrial</SelectItem>
                    <SelectItem value="maintenance">Manutenção Elétrica</SelectItem>
                    <SelectItem value="efficiency">Eficiência Energética</SelectItem>
                  </SelectContent>
                </Select>
                <Textarea placeholder="Descreva sua necessidade" className="min-h-[120px]" />
                <div className="flex gap-4">
                  <Button variant="outline" onClick={() => setStep(1)}>
                    Voltar
                  </Button>
                  <Button className="flex-1">Enviar</Button>
                </div>
              </div>
            )}
          </section>

          {/* Informações de Contato */}
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="p-6 bg-white rounded-lg shadow-md">
                  <info.icon className="w-8 h-8 text-origitec-black mb-4" />
                  <h3 className="font-bold mb-2">{info.title}</h3>
                  <p className="text-gray-600">{info.content}</p>
                </div>
              ))}
            </div>

            {/* Redes Sociais */}
            <div className="flex gap-4 mb-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6 text-origitec-black" />
                </a>
              ))}
            </div>

            {/* Mapa */}
            <div className="bg-gray-200 rounded-lg h-[300px] mb-8">
              {/* Aqui será integrado o Google Maps */}
            </div>
          </section>
        </div>

        {/* Botão flutuante do WhatsApp */}
        <a
          href="https://wa.me/5511123456789"
          className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
          aria-label="Contato via WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </main>
    </div>
  );
};

export default Contact;