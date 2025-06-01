
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "+234 902 292 0617",
      action: () => window.open('tel:+2349022920617', '_blank')
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      details: "Chat with us instantly",
      action: () => window.open('https://wa.me/+2349022920617?text=Hi Al-Kogiwwyy Casuals, I would like to know more about your services.', '_blank')
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      details: "Ogun, Nigeria",
      action: () => {}
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Working Hours",
      details: "Mon - Sat: 9AM - 8PM",
      action: () => {}
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Ready to create your perfect outfit? Contact us today for a consultation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl p-6 shadow-lg text-center transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 ${
                info.action && info.title !== 'Location' && info.title !== 'Working Hours' ? 'cursor-pointer' : ''
              }`}
              onClick={info.action}
            >
              <div className="text-blue-600 mb-4 flex justify-center">
                {info.icon}
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">{info.title}</h3>
              <p className="text-slate-600">{info.details}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Order?</h3>
            <p className="text-blue-100 mb-6">
              Click the button below to start a conversation with us on WhatsApp
            </p>
            <Button 
              onClick={() => window.open('https://wa.me/+2349022920617?text=Hi Al-Kogiwwyy Casuals, I would like to place an order', '_blank')}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Start WhatsApp Chat
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
