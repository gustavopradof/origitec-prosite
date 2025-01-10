import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-origitec-black text-origitec-white z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold">ORIGITEC</Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-origitec-gray transition-colors">Home</Link>
            <Link to="/services" className="hover:text-origitec-gray transition-colors">Serviços</Link>
            <Link to="/about" className="hover:text-origitec-gray transition-colors">Sobre</Link>
            <Link to="/contact" className="hover:text-origitec-gray transition-colors">Contato</Link>
          </nav>

          <Button className="hidden md:block bg-origitec-white text-origitec-black hover:bg-origitec-gray">
            Solicitar Orçamento
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 hover:bg-origitec-gray/10 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/services"
                className="block px-3 py-2 hover:bg-origitec-gray/10 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Serviços
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 hover:bg-origitec-gray/10 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Sobre
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 hover:bg-origitec-gray/10 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Contato
              </Link>
              <Button className="w-full mt-4 bg-origitec-white text-origitec-black hover:bg-origitec-gray">
                Solicitar Orçamento
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;