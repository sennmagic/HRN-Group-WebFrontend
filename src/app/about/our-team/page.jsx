import React from "react";
import Breadcrumb from "@/components/atoms/breadcrumb";
import TeamSection from "@/components/molecules/team";

export default function OurTeamPage() {
  return (
    <div className="min-h-screen">
      <Breadcrumb
        items={[
          { label: "About", href: "/about" },
          { label: "Our Team", href: "/about/our-team" },
        ]}
        title="Our Team"
        withContainer
        className="mb-8"
      />

      <TeamSection />
    </div>
  );
}
