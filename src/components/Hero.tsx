import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToGallery = () => {
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden pt-16">
      
      {/* Agbada Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1594736797933-d0c501ba2fe8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3" 
          alt="Traditional Agbada"
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-400/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-400/10 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent animate-fade-in">
            Al-Kogiwiyy Casuals
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-4 animate-fade-in delay-300">
            Premium African Fashion & Traditional Wear
          </p>
          <p className="text-lg text-blue-200 mb-8 animate-fade-in delay-500">
            Specializing in Senator Materials, Kaftan, Agbada & Custom Dresses
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-700">
          <Button 
            onClick={scrollToGallery}
            className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View Our Collections
          </Button>
          <Button 
            variant="outline" 
            className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-slate-900 px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
            onClick={() => window.open('https://wa.me/+2348123456789?text=Hi Al-Kogiwiyy Casuals, I would like to know more about your services', '_blank')}
          >
            Contact Us
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
