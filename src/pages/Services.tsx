import Header from "@/components/Header";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Shield } from "lucide-react";

const Services = () => {
  const technicalServices = [
    {
      title: "Automação Industrial",
      content: "Implementação de sistemas automatizados para otimização de processos industriais, incluindo PLCs, IHMs e sistemas SCADA."
    },
    {
      title: "Manutenção Elétrica",
      content: "Serviços preventivos e corretivos em instalações elétricas industriais, com equipe especializada 24/7."
    },
    {
      title: "Eficiência Energética",
      content: "Análise e implementação de soluções para redução do consumo energético e otimização de recursos."
    }
  ];

  const industriesList = [
    "Metalúrgica",
    "Alimentícia",
    "Química",
    "Farmacêutica",
    "Automotiva",
    "Papel e Celulose"
  ];

  const plans = [
    {
      feature: "Manutenção Preventiva",
      basic: "Trimestral",
      standard: "Mensal",
      premium: "Semanal"
    },
    {
      feature: "Suporte Técnico",
      basic: "Horário Comercial",
      standard: "12h/dia",
      premium: "24/7"
    },
    {
      feature: "Tempo de Resposta",
      basic: "Em até 24h",
      standard: "Em até 8h",
      premium: "Em até 2h"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 pt-24">
        {/* Serviços Técnicos em Accordion */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Serviços Técnicos</h2>
          <Accordion type="single" collapsible className="w-full">
            {technicalServices.map((service, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{service.title}</AccordionTrigger>
                <AccordionContent>{service.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Processo de Trabalho */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Nosso Processo</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {["Diagnóstico", "Planejamento", "Execução", "Acompanhamento"].map((step, index) => (
              <div key={index} className="relative p-6 bg-white rounded-lg shadow-md">
                <div className="absolute -top-4 left-4 w-8 h-8 bg-origitec-black text-white rounded-full flex items-center justify-center">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mt-4">{step}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Indústrias Atendidas */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Indústrias Atendidas</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industriesList.map((industry, index) => (
              <div key={index} className="p-4 bg-white rounded-lg shadow-md text-center">
                {industry}
              </div>
            ))}
          </div>
        </section>

        {/* Tabela de Planos */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Planos de Serviço</h2>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Recurso</TableHead>
                  <TableHead>Básico</TableHead>
                  <TableHead>Padrão</TableHead>
                  <TableHead>Premium</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {plans.map((plan, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{plan.feature}</TableCell>
                    <TableCell>{plan.basic}</TableCell>
                    <TableCell>{plan.standard}</TableCell>
                    <TableCell>{plan.premium}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>

        {/* Selo de Garantia */}
        <section className="mb-16 text-center">
          <div className="inline-block p-8 bg-white rounded-full shadow-lg">
            <Shield className="w-16 h-16 text-origitec-black mb-4 mx-auto" />
            <h3 className="text-xl font-bold">Garantia de Qualidade</h3>
            <p className="text-sm text-gray-600">Todos os serviços com garantia de 12 meses</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Perguntas Frequentes</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Qual o prazo médio de implementação?</AccordionTrigger>
              <AccordionContent>
                O prazo varia de acordo com a complexidade do projeto, mas geralmente leva entre 2 a 8 semanas.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Como é feita a manutenção preventiva?</AccordionTrigger>
              <AccordionContent>
                Realizamos visitas programadas com checklist completo de verificações e testes nos sistemas.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Vocês atendem em todo o Brasil?</AccordionTrigger>
              <AccordionContent>
                Sim, atuamos em todo o território nacional com equipes especializadas.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </main>
    </div>
  );
};

export default Services;