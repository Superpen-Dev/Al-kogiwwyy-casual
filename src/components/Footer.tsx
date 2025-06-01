
const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">
              Al-Kogiwwyy Casuals
            </h3>
            <p className="text-slate-300 mb-4">
              Your trusted partner for premium African fashion and traditional wear.
            </p>
            <p className="text-slate-400">
              Creating beautiful, quality garments that celebrate African heritage.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Our Services</h4>
            <ul className="space-y-2 text-slate-300">
              <li>Senator Materials</li>
              <li>Kaftan Design</li>
              <li>Agbada Tailoring</li>
              <li>Custom Dresses</li>
              <li>Alterations</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Contact Info</h4>
            <ul className="space-y-2 text-slate-300">
              <li>📱 +234 812 345 6789</li>
              <li>💬 WhatsApp Available</li>
              <li>📍 Lagos, Nigeria</li>
              <li>🕒 Mon - Sat: 9AM - 7PM</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p>
  © {new Date().getFullYear()} Al-Kogiwiyy Casuals. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
