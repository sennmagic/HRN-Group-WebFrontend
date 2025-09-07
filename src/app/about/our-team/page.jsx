import React from 'react';
import Breadcrumb from '@/components/atoms/breadcrumb';
import TeamSection from '@/components/molecules/team';

const OurTeamPage = () => {
  const breadcrumbItems = [
    { label: 'About', href: '/about' },
    { label: 'Our Team', href: '/about/our-team' }
  ];

  return (
    <div className="min-h-screen">
      {/* Breadcrumb with Container */}
      <Breadcrumb 
        items={breadcrumbItems}
        title=" Team"
        withContainer={true}
        className="mb-8"
      />
      
      {/* Team Section */}
      <TeamSection />
    </div>
  );
};

export default OurTeamPage;
