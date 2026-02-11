import React from 'react';
import { Megaphone, FileText, Target, Palette, BarChart, MessageSquare } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const services = [
  {
    icon: FileText,
    title: 'Content Creation',
    description: 'Engaging, on-brand content that resonates with your audience and drives meaningful interactions.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Target,
    title: 'Lead Generation',
    description: 'Strategic Meta Ads campaigns designed to attract qualified leads and maximize ROI.',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Megaphone,
    title: 'Social Media Management',
    description: 'Complete social media strategy, from content planning to community engagement.',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, user-centered design that enhances user experience and brand identity.',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: BarChart,
    title: 'Analytics & Reporting',
    description: 'Data-driven insights to track performance and optimize your social media strategy.',
    color: 'from-pink-500 to-pink-600',
  },
  {
    icon: MessageSquare,
    title: 'Community Engagement',
    description: 'Building authentic relationships with your audience to foster brand loyalty.',
    color: 'from-indigo-500 to-indigo-600',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions to elevate your brand's digital presence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-3xl p-8 md:p-12 shadow-lg">
          <div>
            <h3 className="text-3xl text-gray-900 mb-6">Why Work With Me?</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-gray-900 mb-1">Strategic Approach</h4>
                  <p className="text-sm text-gray-600">Every campaign is backed by data-driven insights and strategic planning</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-gray-900 mb-1">Creative Excellence</h4>
                  <p className="text-sm text-gray-600">Combining design expertise with community management for standout content</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-gray-900 mb-1">Proven Results</h4>
                  <p className="text-sm text-gray-600">Track record of successful campaigns across diverse industries</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-gray-900 mb-1">Dedicated Support</h4>
                  <p className="text-sm text-gray-600">Personalized service and consistent communication throughout projects</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1498926506265-166e25d0910a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hcmtldGluZyUyMGNyZWF0aXZlfGVufDF8fHx8MTc3MDcxMjkwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Social Media Marketing"
              className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
