import Image from "next/image";
import Button from "../components/atoms/buttons";
import Navbar from "../components/organisms/Navbar";
import HeroSection from "@/components/organisms/herosection";
import { Import } from "lucide-react";
import PartnerSection from "@/components/molecules/partners";
import AboutSection from "@/components/molecules/aboutsection";
import ServicesSection from "@/components/molecules/services";
import WhyChooseSection from "@/components/molecules/whychoose";
import TeamSection from "@/components/molecules/team";
import TestimonialsSection from "@/components/molecules/testimonials";
import FAQSection from "@/components/molecules/faq";
import BlogSection from "@/components/molecules/blog";
import Footer from "@/components/organisms/footer";

export default function Home() {
  const handleButtonClick = (message) => {
    alert(message);
  };

  // Sample partner data with Unsplash images
  const partnersData = [
    {
      title: "Nepal Agriculture",
      images: {
        small: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=120&h=80&fit=crop&crop=face",
        big: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&h=300&fit=crop&crop=face"
      }
    },
    {
      title: "Japan Technology",
      images: {
        small: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=120&h=80&fit=crop&crop=face",
        big: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&crop=face"
      }
    },
    {
      title: "Culinary Arts",
      images: {
        small: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=80&fit=crop&crop=face",
        big: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=face"
      }
    },
    {
      title: "Office Management",
      images: {
        small: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=80&fit=crop&crop=face",
        big: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop&crop=face"
      }
    },
    {
      title: "Healthcare",
      images: {
        small: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=120&h=80&fit=crop&crop=face",
        big: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=face"
      }
    },
    {
      title: "Construction",
      images: {
        small: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=120&h=80&fit=crop&crop=face",
        big: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop&crop=face"
      }
    }
  ];

  return (
    <>
      <HeroSection />
      <PartnerSection partnersdata={partnersData} />
      <AboutSection />
      <ServicesSection />
      <WhyChooseSection />
      <TeamSection />
      <TestimonialsSection />
      <FAQSection />
      <BlogSection />

    </>
  );
}
