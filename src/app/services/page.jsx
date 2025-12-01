"use client";

import React from 'react';
import Breadcrumb from '@/components/atoms/breadcrumb';
import ServicesSection from '@/components/molecules/services';

const ServicesPage = () => {
  return (
    <>
      <Breadcrumb items={[{ label: 'Services', href: '/services' }]}  className='mt-6 mb-2' alignmentClass='justify-start'/>
      <main>
        <ServicesSection />
      </main>
    </>
  );
};

export default ServicesPage;


