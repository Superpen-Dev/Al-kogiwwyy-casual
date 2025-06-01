
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Scissors } from "lucide-react";
import logo from '../assets/logo.jpg'; 


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/20 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
  <img src={logo} alt="Al-Kogiwiyy Logo" className="w-8 h-8" />
  <div className="flex flex-col leading-tight">
    <span className="text-xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
      Al-Kogiwwyy Casuals
    </span>
    <span className="text-xs text-gray-500">BN: 8336017</span>
  </div>
</div>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-slate-700 hover:text-yellow-600 transition-colors duration-200 font-medium"
              >
                {item.name}
              </button>
            ))}
            <Button
              onClick={() => window.open('https://wa.me/+2348123456789?text=Hi Al-Kogiwwyy Casuals, I would like to know more about your services', '_blank')}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full"
            >
              WhatsApp
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-yellow-600 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200/20 shadow-lg">
            <div className="px-6 py-4 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-slate-700 hover:text-yellow-600 transition-colors duration-200 font-medium py-2"
                >
                  {item.name}
                </button>
              ))}
              <Button
                onClick={() => {
                  window.open('https://wa.me/+2348123456789?text=Hi Al-Kogiwiyy Casuals, I would like to know more about your services', '_blank');
                  setIsOpen(false);
                }}
                className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full mt-4"
              >
                WhatsApp
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
