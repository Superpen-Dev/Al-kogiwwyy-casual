
const ScrollingBanner = () => {
  // You can easily edit this text to display any message you want
  const bannerText = "Welcome to Al-Kogiwwyy Casuals • Where Style Meets Tradition • Premium African Fashion • Custom Tailoring Services • Senator Materials & Agbada Specialists • Quality Craftsmanship • ";

  return (
    <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-2 overflow-hidden relative">
      <div className="flex animate-scroll whitespace-nowrap">
        <span className="text-sm font-medium px-4">{bannerText}</span>
        <span className="text-sm font-medium px-4">{bannerText}</span>
        <span className="text-sm font-medium px-4">{bannerText}</span>
      </div>
    </div>
  );
};

export default ScrollingBanner;
