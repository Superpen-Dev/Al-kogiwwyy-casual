
import { Scissors, Shirt, Crown, Sparkles } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Crown className="w-12 h-12" />,
      title: "Senator Materials",
      description: "Premium quality senator fabrics crafted into elegant traditional wear for distinguished gentlemen."
    },
    {
      icon: <Shirt className="w-12 h-12" />,
      title: "Kaftan & Agbada",
      description: "Traditional flowing robes and ceremonial wear that showcase the beauty of African heritage."
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: "Custom Dresses",
      description: "Bespoke dresses tailored to perfection for every occasion, from casual to formal events."
    },
    {
      icon: <Scissors className="w-12 h-12" />,
      title: "Expert Tailoring",
      description: "Professional alterations and custom fittings to ensure the perfect fit for every garment."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We specialize in creating beautiful, high-quality traditional and modern African wear
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100"
            >
              <div className="text-blue-600 mb-6 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-slate-600 text-center leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
