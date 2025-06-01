import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



import kaftan2 from '@/assets/clothing/kaftan2.jpg';
import kaftan3 from '@/assets/clothing/kaftan3.jpg';
import kaftan6 from '@/assets/clothing/kaftan6.jpg';
import kaftan5 from '@/assets/clothing/kaftan5.jpg';
import agbada6 from '@/assets/clothing/agbada6.jpg';
import agbada1 from '@/assets/clothing/agbada1.jpg';
import agbada2 from '@/assets/clothing/agbada2.jpg';
import agbada3 from '@/assets/clothing/agbada3.jpg';
import agbada4 from '@/assets/clothing/agbada4.jpg';
import custom1 from '@/assets/clothing/custom1.jpg';
import custom2 from '@/assets/clothing/custom2.jpg';
import custom3 from '@/assets/clothing/custom3.jpg';
import custom4 from '@/assets/clothing/custom4.jpg';
import casual1 from '@/assets/clothing/casual1.jpg';
import casual2 from '@/assets/clothing/casual2.jpg';
import casual3 from '@/assets/clothing/casual3.jpg';
import casual4 from '@/assets/clothing/casual4.jpg';
import pant1 from '@/assets/clothing/pant1.jpg';
import pant2 from '@/assets/clothing/pant2.jpg';
import pant3 from '@/assets/clothing/pant3.jpg';
import pant4 from '@/assets/clothing/pant4.jpg';
import material1 from '@/assets/clothing/material1.jpg';
import material2 from '@/assets/clothing/material2.jpg';
import material3 from '@/assets/clothing/material3.jpg';
import material4 from '@/assets/clothing/material4.jpg';
import material5 from '@/assets/clothing/material5.jpg';
import material6 from '@/assets/clothing/material6.jpg';
import material7 from '@/assets/clothing/material7.jpg';
import material8 from '@/assets/clothing/material8.jpg';
import material9 from '@/assets/clothing/material9.jpg';
import material10 from '@/assets/clothing/material10.jpg';
import material11 from '@/assets/clothing/material11.jpg';
import material12 from '@/assets/clothing/material12.jpg';

import { Button } from "@/components/ui/button";

const Gallery = () => {
  const clothingItems = [
    {
      id: 1,
      name: "Kaftan",
      images: [kaftan2, casual4, kaftan5, kaftan6, kaftan3],
      description: "Elegant flowing kaftan for special occasions",
      price: "Standard Kaftan ₦45,000 - ₦65,000 | Classic Kaftan ₦70,000 - ₦100,000",
      // Note: Adjusted price to reflect a range for standard kaftan
    },
    {
      id: 2,
      name: "Agbada",
      images: [agbada6, agbada1, agbada2, agbada3, agbada4],
      description: "Majestic agbada with beautiful embroidery",
      price: "Royal Agbada ₦120,000 - ₦180,000 | Wedding Agbada ₦190,000 - ₦300,000",
    },
    {
      id: 3,
      name: "Custom Event Dresses",
      images: [custom1, custom2, custom3, custom4],
      description: "Sophisticated evening wear for elegant occasions",
      price: "Custom Event Dresses ₦100,000 - ₦120,000 | Premium Event Dresses ₦120,000 - ₦200,000",
    },
    {
      id: 4,
      name: "Casual Dresses",
      images: [casual1, casual2, casual3, casual4],
      description: "Comfortable daily wear with vibrant patterns",
      price: "Casual Dresses ₦40,000 - ₦60,000",
    },
    {
      id: 5,
      name: "Pant/Trousers",
      images: [pant1, pant2, pant3, pant4],
      description: "Stylish and durable trousers for all occasions",
      price: "Standard Prices ₦20,500 | Classic Prices ₦35,000 | Premium Prices: ₦45,000 - ₦60,000",
    },
    {
      id: 6,
      name: "Senator Materials",
      images: [ material1,
  material2,
  material3,
  material4,
  material5,
  material6,
  material7,
  material8,
  material9,
  material10,
  material11,
  material12,],
      description: "Premium quality senator fabric with intricate designs",
      price: "Available in various colors, patterns and Prices",
    }
  ];

  const handleWhatsAppOrder = (itemName: string) => {
    const message = `Hi Al-Kogiwwyy Casuals, I would like to get ${itemName}`;
    const whatsappUrl = `https://wa.me/+2349022920617?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Slick carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // one image full width
    slidesToScroll: 1,
    swipeToSlide: true,
    adaptiveHeight: true,
    arrows: true,
    autoplay: false,
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
              {/* Carousel for each clothing item */}
              <Slider {...settings}>
                {item.images.map((img, idx) => (
                  <div key={idx} className="flex justify-center">
                    <img
                      src={img}
                      alt={`${item.name} ${idx + 1}`}
                      className="max-w-full max-h-[400px] object-contain"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                ))}
              </Slider>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  {item.name}
                </h3>
                <p className="text-slate-600 mb-4">
                  {item.description}
                </p>
                <div className="flex flex-col gap-3">
  <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-md shadow-sm text-slate-800">
    {item.price.split("|").map((line, index) => (
      <p key={index} className="text-sm md:text-base font-medium leading-relaxed">
        {line.trim()}
      </p>
    ))}
  </div>

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
