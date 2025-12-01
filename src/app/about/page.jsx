import React from 'react';
import Breadcrumb from '@/components/atoms/breadcrumb';
import OurMissionVision from '@/components/molecules/ourmission-vision';


import WhyChooseSection from '@/components/molecules/whychoose';
import AboutSection from '@/components/molecules/aboutsection';
const AboutHrnPage = () => {
  const breadcrumbItems = [
    { label: 'About Us', href: '/about/about-hrn' }
  ];

  return (
    <>
      <Breadcrumb 
        items={breadcrumbItems} 
        withContainer={true}
        title="Empowering nepali youth for global opportunities"
       
      />
            <AboutSection />
      <OurMissionVision />
      <WhyChooseSection />

    </>
  );
};

export default AboutHrnPage;
