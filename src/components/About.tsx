
const About = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-400">
              About Al-Kogiwiyy Casuals
            </h2>
            <p className="text-lg text-blue-100 mb-6 leading-relaxed">
              With years of experience in the fashion industry, Al-Kogiwiyy Casuals has established itself as a premier destination for traditional African wear and modern fashion.
            </p>
            <p className="text-lg text-blue-100 mb-6 leading-relaxed">
              Our skilled artisans specialize in creating beautiful garments that celebrate African heritage while incorporating contemporary design elements. From elegant senator materials to majestic agbadas, every piece is crafted with attention to detail and quality.
            </p>
            <p className="text-lg text-blue-100 leading-relaxed">
              We take pride in our ability to bring our customers' visions to life, creating custom pieces that perfectly fit their style and occasion needs.
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
