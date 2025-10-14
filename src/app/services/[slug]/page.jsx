"use client";

import React from 'react';
import Breadcrumb from '@/components/atoms/breadcrumb';
import { Wrench } from 'lucide-react';
import Link from 'next/link';

const SERVICES = {
  1: {
    title: 'Specified skilled worker (SSW)',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=600&fit=crop&crop=center',
    description: 'We provide complete preparation for the SSW visa, a Japanese government-approved program that allows skilled Nepali youth to work in 14 labor-scarce industries in Japan.'
  },
  2: {
    title: 'Technical intern training program (TITP)',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop&crop=center',
    description: "The technical intern training program (TITP) offers young individuals from Nepal a chance to gain real-world work experience in Japan's industries. It's a great way to build career skills abroad."
  },
  3: {
    title: 'Student visa for Japan',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop&crop=center',
    description: 'Guidance and preparation for students aiming to study in Japan with end-to-end support.'
  }
};

const ServiceSinglePage = ({ params }) => {
  const { slug } = params;
  const service = SERVICES[slug];

  return (
    <>
      <Breadcrumb 
        items={[{ label: 'Services', href: '/services' }]}
        withContainer
        title={service ? service.title : 'Service'}
      />
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
            {service ? (
                <article>
                  <div className="relative overflow-hidden rounded-2xl shadow-lg mb-8">
                    <img src={service.image} alt={service.title} className="w-full h-auto object-cover" />
                  </div>
                  <div className="space-y-6">
                    <p className="text-gray-700 text-lg leading-relaxed">{service.description}</p>
                    <div className="h-px bg-gray-200" />
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="rounded-xl border border-gray-200 p-4">
                        <h3 className="text-sm font-semibold text-gray-900 mb-1">Eligibility</h3>
                        <p className="text-sm text-gray-600">Basic requirements vary by program and industry.</p>
                      </div>
                      <div className="rounded-xl border border-gray-200 p-4">
                        <h3 className="text-sm font-semibold text-gray-900 mb-1">Support</h3>
                        <p className="text-sm text-gray-600">Guidance through preparation, application, and onboarding.</p>
                      </div>
                    </div>
                  </div>
                </article>
              ) : (
                <div className="text-gray-700">Service not found.</div>
              )}
            </div>
            <aside className="lg:col-span-4">
              <div className="sticky top-6">
                <div className="flex items-center gap-2 mb-4">
                  <Wrench className="w-5 h-5 text-primary" />
                  <h2 className="text-lg font-semibold text-gray-900">Other Services</h2>
                </div>
                <ul className="space-y-3">
                  {Object.entries(SERVICES)
                    .filter(([id]) => String(id) !== String(slug))
                    .map(([id, item]) => (
                      <li key={id} className="border-b border-gray-200 last:border-b-0 pb-3">
                        <Link href={`/services/${id}`} className="text-sm text-gray-800 hover:text-primary transition-colors cursor-pointer">
                          {item.title}
                        </Link>
                      </li>
                    ))}
                </ul>
                <div className="mt-4">
                  <Link href="/services" className="text-sm font-medium text-primary hover:underline">View all services</Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
};

export default ServiceSinglePage;


