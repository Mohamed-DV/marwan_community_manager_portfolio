import React, { useState } from 'react';
import { ExternalLink, Briefcase, Instagram } from 'lucide-react';

const portfolioItems = [
  {
    name: 'AfrikaLuxe',
    category: 'Freelance',
    description: 'Social media strategy and content creation for luxury African fashion brand',
    services: ['Content Creation', 'Social Media Management'],
    instagram: 'https://www.instagram.com/afrikaluxeofficial?igsh=eXZhMzl3bzFkOXo4',
  },
  {
    name: 'Siera',
    category: 'Freelance',
    description: 'Complete brand presence management and community engagement',
    services: ['Community Management', 'Lead Generation'],
    instagram: 'https://www.instagram.com/sieraelectromenager?igsh=aGhlNHEwdGtqMW55',
  },
  {
    name: 'Chronopost',
    category: 'Freelance',
    description: 'Meta Ads campaigns and customer engagement strategies',
    services: ['Meta Ads', 'Content Creation'],
    instagram: 'https://www.instagram.com/chronopostinternationalmaroc?igsh=Z3YwdXEwMmRpNTg=',
  },
  {
    name: 'Frozy',
    category: 'Freelance',
    description: 'Brand development and social media growth strategies',
    services: ['Social Strategy', 'Content Creation'],
    instagram: 'https://www.instagram.com/frozy_delices?igsh=MWdmdXVvZHJwbXNhNQ==',
  },
  {
    name: 'Yatema',
    category: 'Freelance',
    description: 'UI/UX design and digital marketing campaigns',
    services: ['UI/UX Design', 'Marketing'],
    instagram: 'https://www.instagram.com/yatema.app?igsh=MTZrZ3FwMWNmcWZraw==',
  },
  {
    name: 'Collis Privé',
    category: 'Freelance',
    description: 'Premium brand positioning and targeted lead generation',
    services: ['Lead Generation', 'Content Strategy'],
    instagram: 'https://www.instagram.com/colisprivemaroc?igsh=dDZhYWxqczZta3Rk',
  },
  {
    name: 'Group Chaimae',
    category: 'Freelance',
    description: 'Multi-platform social media management and content planning',
    services: ['Social Media', 'Content Planning'],
    instagram: '',
  },
  {
    name: 'Auriga Bois',
    category: 'Client',
    description: 'Strategic content creation and Meta Ads optimization',
    services: ['Content Creation', 'Meta Ads'],
    instagram: 'https://www.instagram.com/aurigaboismaroc?igsh=c255ZndnbjNxaW5t',
  },
  {
    name: 'Ugirl Salon',
    category: 'Client',
    description: 'Beauty salon brand building and customer acquisition campaigns',
    services: ['Brand Building', 'Lead Generation'],
    instagram: 'https://www.instagram.com/ugirl_salon?igsh=YmxidGQ3ZDNyMms2',
  },
];

export function Portfolio() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Freelance', 'Client'];

  const filteredItems = filter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">Portfolio</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by brands across diverse industries
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full text-sm transition-all ${
                filter === category
                  ? 'bg-gray-900 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <Briefcase className="text-white" size={24} />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs px-3 py-1 bg-gray-900 text-white rounded-full">
                    {item.category}
                  </span>
                  {item.instagram && (
                    <a
                      href={item.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center hover:scale-110 transition-transform"
                      aria-label={`View ${item.name} on Instagram`}
                    >
                      <Instagram className="text-white" size={16} />
                    </a>
                  )}
                </div>
              </div>
              
              <h3 className="text-xl text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {item.name}
              </h3>
              
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                {item.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {item.services.map((service, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 bg-blue-50 text-blue-700 rounded-full"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl mb-2">11+</div>
              <div className="text-sm text-gray-300">Clients Worked With</div>
            </div>
            <div>
              <div className="text-4xl mb-2">2+</div>
              <div className="text-sm text-gray-300">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl mb-2">100+</div>
              <div className="text-sm text-gray-300">Campaigns Launched</div>
            </div>
            <div>
              <div className="text-4xl mb-2">95%</div>
              <div className="text-sm text-gray-300">Client Retention</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}