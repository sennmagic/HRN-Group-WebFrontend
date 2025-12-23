"use client";

import React from "react";
import Breadcrumb from "@/components/atoms/breadcrumb";
import {
  Wrench,
  CheckCircle,
  Globe2,
  BookOpen,
  GraduationCap,
} from "lucide-react";
import Link from "next/link";
import { servicesData } from "../../../servicesData";
import { useParams } from "next/navigation";

const SERVICE_IMAGES = {
  1: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  2: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  3: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
};

const FALLBACK_SECTOR_IMAGE =
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80";

const SERVICE_ICONS = {
  1: GraduationCap,
  2: BookOpen,
  3: Globe2,
};

const ServiceSinglePage = () => {
  const params = useParams();

  const rawSlug = params?.slug;
  const slug = Array.isArray(rawSlug) ? rawSlug[0] : rawSlug;
  const slugId = Number(slug);

  const service = servicesData.find((s) => Number(s.id) === slugId);
  const ServiceIcon = SERVICE_ICONS[slugId];

  const topImage = SERVICE_IMAGES[slugId] || FALLBACK_SECTOR_IMAGE;

  return (
    <>
      <Breadcrumb
        items={[{ label: "Services", href: "/services" }]}
        withContainer
        title={service ? service.title : "Service"}
      />

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8">

            {/* LEFT CONTENT */}
            <div className="lg:col-span-8">
              {service ? (
                <article>
                  {/* Top Image */}
                  <div className="relative overflow-hidden rounded-2xl shadow-lg mb-8">
                    <img
                      src={topImage}
                      alt={service.title}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>

                  <div className="space-y-8">
                    {/* Title + Icon */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        {ServiceIcon && (
                          <ServiceIcon className="w-6 h-6 text-primary" />
                        )}
                      </div>
                      <h1 className="text-3xl font-bold text-gray-900">
                        {service.title}
                      </h1>
                    </div>

                    {/* Overview */}
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {service?.details?.overview}
                    </p>

                    {/* Eligible Sectors */}
                    {service?.details?.eligibleSectors && (
                      <div className="space-y-4">
                        <h2 className="text-2xl font-semibold text-gray-900">
                          Eligible Sectors
                        </h2>

                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                          {service.details.eligibleSectors.map(
                            (sector, index) => (
                              <div
                                key={index}
                                className="group bg-white rounded-3xl shadow-lg 
                                hover:shadow-2xl hover:-translate-y-1 
                                transition-all duration-300 flex flex-col overflow-hidden 
                                w-full min-h-[350px]"
                              >
                                {/* Sector Image */}
                                <div className="w-full h-56 bg-gray-100 overflow-hidden">
                                  <img
                                    src={
                                      sector?.image
                                        ? sector.image
                                        : FALLBACK_SECTOR_IMAGE
                                    }
                                    alt={sector?.name || "Sector"}
                                    className="w-full h-full object-cover 
                                    transition-all duration-300 
                                    group-hover:scale-105 
                                    group-hover:rotate-[2deg]"
                                    loading="lazy"
                                  />
                                </div>

                                {/* CONTENT */}
                                <div className="flex flex-col justify-between p-6">
                                  <div>
                                    <h3 className="text-xl font-semibold text-gray-900">
                                      {sector?.name}
                                    </h3>

                                    {(sector?.subtitle || sector?.japanese) && (
                                      <p className="mt-2 text-sm text-gray-500">
                                        {sector?.subtitle || sector?.japanese}
                                      </p>
                                    )}

                                    {sector?.description && (
                                      <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                                        {sector.description}
                                      </p>
                                    )}
                                  </div>
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    )}

                    {/* Divider */}
                    <div className="h-px bg-gray-200" />

                    {/* Eligibility Criteria */}
                    {service?.details?.eligibility && (
                      <div className="space-y-4">
                        <h2 className="text-2xl font-semibold text-gray-900">
                          Eligibility Criteria
                        </h2>

                        <div className="grid gap-3">
                          {service.details.eligibility.map((item, index) => (
                            <div
                              key={index}
                              className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg"
                            >
                              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                              <span className="text-gray-700">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </article>
              ) : (
                <div className="text-gray-700">Service not found.</div>
              )}
            </div>

            {/* SIDEBAR */}
            <aside className="lg:col-span-4">
              <div className="sticky top-6">
                <div className="flex items-center gap-2 mb-4">
                  <Wrench className="w-5 h-5 text-primary" />
                  <h2 className="text-lg font-semibold text-gray-900">
                    Other Services
                  </h2>
                </div>

                <ul className="space-y-3">
                  {servicesData
                    .filter((item) => Number(item.id) !== slugId)
                    .map((item) => {
                      const ItemIcon = SERVICE_ICONS[Number(item.id)];
                      return (
                        <li
                          key={item.id}
                          className="border-b border-gray-200 pb-3 last:border-none"
                        >
                          <Link
                            href={`/services/${item.id}`}
                            className="flex items-center gap-3 text-sm text-gray-800 hover:text-primary transition-colors group"
                          >
                            {ItemIcon && (
                              <ItemIcon className="w-4 h-4 group-hover:text-primary" />
                            )}
                            <span>{item.title}</span>
                          </Link>
                        </li>
                      );
                    })}
                </ul>

                <div className="mt-4">
                  <Link
                    href="/services"
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    View all services
                  </Link>
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
