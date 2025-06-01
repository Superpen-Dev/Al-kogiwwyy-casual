
const About = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-400">
              About Al-Kogiwwyy Casuals
            </h2>
            <p className="text-lg text-blue-100 mb-6 leading-relaxed">
             AL-KOGIWWYY CASUALS, a registered business under the Corporate Affairs Commission (CAC) of Nigeria with the registration Number: BN: 8336017, is a premium Nigerian fashion brand founded in January 2024, specializing in bespoke menswear that blends traditional African elegance with modern sophistication. After working for some years in Ghana and gaining hands-on experience in West African fashion trends and garment production, the founder returned to Nigeria with a renewed vision to redefine casual luxury for the modern African man. The brand offers meticulously tailored kaftans (starting from ₦45,000) and luxurious agbadas (from ₦120,000), each crafted with precision, quality, and cultural pride

            </p>
            <p className="text-lg text-blue-100 mb-6 leading-relaxed">
            With a strong focus on customer satisfaction, AL-KOGIWWYY CASUALS provides personalized service, custom fittings, and seamless communication. The brand maintains an active online presence via Instagram and TikTok @alkogiwwyy_casuals and can be reached directly through WhatsApp. As it continues to grow, AL-KOGIWWYY CASUALS aims to expand its reach
            </p>
            
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-2xl p-8 backdrop-blur-sm border border-yellow-400/30">
              <h3 className="text-2xl font-semibold mb-6 text-yellow-400">Why Choose Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  <span className="text-blue-100">Expert craftsmanship with years of experience</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  <span className="text-blue-100">Premium quality fabrics and materials</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  <span className="text-blue-100">Custom designs tailored to your preferences</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  <span className="text-blue-100">Quick delivery and excellent customer service</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  <span className="text-blue-100">Affordable pricing without compromising quality</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
