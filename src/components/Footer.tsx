import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-origitec-black text-origitec-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ORIGITEC</h3>
            <p className="text-origitec-gray">
              Soluções completas em elétrica industrial para otimizar seus processos e reduzir custos.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone size={20} className="mr-2" />
                <span>(11) 1234-5678</span>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="mr-2" />
                <span>contato@origitec.com.br</span>
              </div>
              <div className="flex items-center">
                <MapPin size={20} className="mr-2" />
                <span>São Paulo - SP</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Horário</h3>
            <p className="text-origitec-gray">
              Segunda a Sexta: 8h às 18h<br />
              Plantão 24h para emergências
            </p>
          </div>
        </div>
        
        <div className="border-t border-origitec-gray/20 mt-8 pt-8 text-center">
          <p className="text-origitec-gray">
            © {new Date().getFullYear()} Origitec. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;