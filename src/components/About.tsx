import React from 'react';
import { Users, Award, TrendingUp, Target } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Passionate about building engaged communities and creating impactful digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              As a dedicated Community Manager with over 2 years of experience, I specialize in 
              creating compelling content and building meaningful connections between brands and 
              their audiences. My expertise extends to UI/UX design, allowing me to approach 
              community management with a unique, design-thinking perspective.
            </p>
            <p className="text-gray-700 leading-relaxed">
              I've worked with diverse clients across industries, from luxury brands to tech startups, 
              helping them grow their social media presence, generate qualified leads through Meta Ads, 
              and create engaging content that resonates with their target audience.
            </p>
            <p className="text-gray-700 leading-relaxed">
              My dual expertise in community management and UI/UX design enables me to create 
              visually stunning content while maintaining strategic focus on engagement and conversion.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl">
              <Users className="text-blue-600 mb-4" size={32} />
              <h3 className="text-gray-900 mb-2">Community Building</h3>
              <p className="text-sm text-gray-600">
                Creating engaged and loyal brand communities
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl">
              <TrendingUp className="text-purple-600 mb-4" size={32} />
              <h3 className="text-gray-900 mb-2">Lead Generation</h3>
              <p className="text-sm text-gray-600">
                Strategic Meta Ads campaigns that convert
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl">
              <Award className="text-green-600 mb-4" size={32} />
              <h3 className="text-gray-900 mb-2">UI/UX Design</h3>
              <p className="text-sm text-gray-600">
                Beautiful, user-centered design solutions
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl">
              <Target className="text-orange-600 mb-4" size={32} />
              <h3 className="text-gray-900 mb-2">Content Creation</h3>
              <p className="text-sm text-gray-600">
                Compelling content that drives engagement
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl text-gray-900 mb-8 text-center">Skills & Expertise</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-gray-900 mb-3">Community Management</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Social Media Strategy</li>
                <li>• Content Planning & Scheduling</li>
                <li>• Community Engagement</li>
                <li>• Brand Voice Development</li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-900 mb-3">Digital Marketing</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Meta Ads Management</li>
                <li>• Lead Generation Campaigns</li>
                <li>• Analytics & Reporting</li>
                <li>• Conversion Optimization</li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-900 mb-3">Design</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• UI/UX Design</li>
                <li>• Visual Content Creation</li>
                <li>• Brand Identity</li>
                <li>• Graphic Design</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
