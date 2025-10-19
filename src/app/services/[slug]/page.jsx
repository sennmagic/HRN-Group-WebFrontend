"use client";

import React from 'react';
import Breadcrumb from '@/components/atoms/breadcrumb';
import { Wrench, CheckCircle, Globe2, BookOpen, GraduationCap } from 'lucide-react';
import Link from 'next/link';
import { servicesData } from '../../../servicesData,';

const SERVICE_IMAGES = {
  1: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop&crop=center',
  2: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop&crop=center',
  3: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=600&fit=crop&crop=center'
};

const SERVICE_ICONS = {
  1: GraduationCap,
  2: BookOpen,
  3: Globe2
};

const ServiceSinglePage = ({ params }) => {
  const { slug } = params;
  const service = servicesData.find(s => s.id === parseInt(slug));
  const ServiceIcon = SERVICE_ICONS[slug];

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
                    <img src={SERVICE_IMAGES[slug]} alt={service.title} className="w-full h-auto object-cover" />
                  </div>
                  <div className="space-y-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <ServiceIcon className="w-6 h-6 text-primary" />
                      </div>
                      <h1 className="text-3xl font-bold text-gray-900">{service.title}</h1>
                    </div>
                    
                    <p className="text-gray-700 text-lg leading-relaxed">{service.details.overview}</p>
                    
                    <div className="h-px bg-gray-200" />
                    
                    {/* Eligibility Criteria for Student Visa */}
                    {service.details.eligibility && (
                      <div className="space-y-4">
                        <h2 className="text-2xl font-semibold text-gray-900">Eligibility Criteria</h2>
                        <div className="grid gap-3">
                          {service.details.eligibility.map((item, index) => (
                            <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* Eligible Sectors for TITP and SSW */}
                    {service.details.eligibleSectors && (
                      <div className="space-y-4">
                        <h2 className="text-2xl font-semibold text-gray-900">Eligible Sectors</h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          {service.details.eligibleSectors.map((sector, index) => {
                            const SectorIcon = sector.icon;
                            return (
                              <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-primary/30 hover:shadow-md transition-all">
                                <div className="flex items-center gap-3 mb-2">
                                  <SectorIcon className="w-5 h-5 text-primary" />
                                  <h3 className="font-semibold text-gray-900">{sector.name}</h3>
                                </div>
                                <p className="text-sm text-gray-600">{sector.japanese}</p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
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
                  {servicesData
                    .filter((item) => item.id !== parseInt(slug))
                    .map((item) => {
                      const ItemIcon = SERVICE_ICONS[item.id];
                      return (
                        <li key={item.id} className="border-b border-gray-200 last:border-b-0 pb-3">
                          <Link href={`/services/${item.id}`} className="flex items-center gap-3 text-sm text-gray-800 hover:text-primary transition-colors cursor-pointer group">
                            <ItemIcon className="w-4 h-4 group-hover:text-primary" />
                            <span>{item.title}</span>
                          </Link>
                        </li>
                      );
                    })}
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


