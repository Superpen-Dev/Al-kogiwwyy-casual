import { Instagram, Music2 } from "lucide-react"; // Music2 will be used as TikTok icon placeholder


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
              <li>Agbada</li>
              <li>Custom Dresses</li>
              <li>Alterations</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Contact Info</h4>
            <ul className="space-y-2 text-slate-300">
              <li>Phone Number: +234 902 292 0617</li>
              <li>Location: Ogun State, Nigeria (Wolrdwide delivery Available)</li>
              <li>Working hour: Mon - Sat: 9AM - 8PM</li>
            </ul>
          </div>
        </div>
        
       <div className="border-t border-slate-700 mt-8 pt-8 text-center">
  <div className="flex justify-center items-center space-x-6 mb-4">
    <a
      href="https://www.instagram.com/alkogiwwyy_casuals/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-yellow-400 transition"
    >
      <Instagram className="w-6 h-6" />
    </a>
    <a
      href="https://www.tiktok.com/@alkogiwwyy_casuals"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-yellow-400 transition"
    >
      <Music2 className="w-6 h-6" />
    </a>
  </div>
  <p>
    © {new Date().getFullYear()} Al-Kogiwwyy Casuals. All rights reserved.
  </p>
</div>
      </div>
    </footer>
  );
};

export default Footer;
