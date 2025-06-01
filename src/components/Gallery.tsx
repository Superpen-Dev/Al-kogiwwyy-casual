
import { Button } from "@/components/ui/button";

const Gallery = () => {
  const clothingItems = [
    {
      id: 1,
      name: "Classic Senator Material",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80",
      description: "Premium quality senator fabric with intricate designs",
      price: "From ₦15,000"
    },
    {
      id: 2,
      name: "Traditional Kaftan",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      description: "Elegant flowing kaftan for special occasions",
      price: "From ₦12,000"
    },
    {
      id: 3,
      name: "Royal Agbada",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=800&q=80",
      description: "Majestic agbada with beautiful embroidery",
      price: "From ₦25,000"
    },
    {
      id: 4,
      name: "Custom Evening Dress",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80",
      description: "Sophisticated evening wear for elegant occasions",
      price: "From ₦18,000"
    },
    {
      id: 5,
      name: "Casual African Print",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80",
      description: "Comfortable daily wear with vibrant patterns",
      price: "From ₦8,000"
    },
    {
      id: 6,
      name: "Wedding Agbada",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      description: "Special ceremonial wear for your big day",
      price: "From ₦35,000"
    }
  ];

  const handleWhatsAppOrder = (itemName: string) => {
    const message = `Hi Al-Kogiwiyy Casuals, I would like to get ${itemName}`;
    const whatsappUrl = `https://wa.me/+2348123456789?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Our Collection
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Browse our stunning collection and place your order directly via WhatsApp
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clothingItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  {item.name}
                </h3>
                <p className="text-slate-600 mb-4">
                  {item.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-blue-600">
                    {item.price}
                  </span>
                  <Button 
                    onClick={() => handleWhatsAppOrder(item.name)}
                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
                  >
                    Order via WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
