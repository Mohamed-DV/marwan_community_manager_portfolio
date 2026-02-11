import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <Sparkles className="text-blue-600" size={16} />
              <span className="text-sm text-gray-700">Marwan Sidki - Community Manager & UI/UX Designer</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-gray-900">
              Building Digital <span className="text-blue-600">Communities</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-xl">
              Experienced community manager with 2+ years specializing in content creation, 
              social media strategy, and lead generation through Meta Ads. Let's grow your brand together.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToContact}
                className="bg-gray-900 text-white px-8 py-4 rounded-full flex items-center gap-2 hover:bg-gray-800 transition-colors shadow-lg"
              >
                Let's Work Together
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-gray-900 px-8 py-4 rounded-full border-2 border-gray-900 hover:bg-gray-50 transition-colors"
              >
                View Portfolio
              </button>
            </div>
            
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-3xl text-gray-900">2+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl text-gray-900">11+</div>
                <div className="text-sm text-gray-600">Clients Served</div>
              </div>
              <div>
                <div className="text-3xl text-gray-900">100%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl opacity-20 blur-2xl" />
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1618254170747-35f7ba2f9a6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBtYW5hZ2VyJTIwd29ya3NwYWNlJTIwZGVza3xlbnwxfHx8fDE3NzA4MDIwNzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Community Manager Workspace"
              className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}