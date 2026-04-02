
import HeroSection from "@/components/organisms/herosection";
import PartnerSection from "@/components/molecules/partners";
import ServicesSection from "@/components/molecules/services";
import WhyChooseSection from "@/components/molecules/whychoose";
import TeamSection from "@/components/molecules/team";
import TestimonialsSection from "@/components/molecules/testimonials";
import FAQSection from "@/components/molecules/faq";
import BlogSection from "@/components/molecules/blog";

export default function Home() {
  const handleButtonClick = (message) => {
    alert(message);
  };

  // Sample partner data with Unsplash images
  const partnersData = [
    {
      title: "Nepal Agriculture",
      images: {
        small: "./hanazuki.jpg",
        big: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&h=300&fit=crop&crop=face"
      }
    },
    {
      title: "Japan Technology",
      images: {
        small: "./hrngroup.jpg",
        big: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&crop=face"
      }
    },
    {
      title: "Culinary Arts",
      images: {
        small: "./reiwa.png",
        big: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=face"
      }
    },
   
  
    {
      title: "Construction",
      images: {
        small: "./trainingha.png",
        big: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop&crop=face"
      }
    }
  ];

  return (
    <>
      <HeroSection />
      <PartnerSection partnersdata={partnersData} />
     
   
    <div className="w-full bg-slate-900 px-6 md:px-10 py-12 md:py-16">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <h1 className="text-golden mb-6">
          HRN グループとは
        </h1>

        {/* Paragraphs */}
        <div className="space-y-6">
          <p className="text-gray-200 text-sm md:text-base leading-relaxed tracking-wide">
            HRNグループは、日本で働きたいネパール人の皆様を対象に、日本語学習から就職支援、送り出し、そして来日後の生活や職場でのサポートまで、一貫して提供する総合支援企業です。当社は自社運営の日本語学校を4校とネパール労働局認定送り出し機関を運営しています。
          </p>
          <p className="text-gray-200 text-sm md:text-base leading-relaxed tracking-wide">
            2019年の設立以来、様々な目的で日本に渡航したいネパール人に特化した教育、指導及び手続きサポートを提供してきました。経験豊富な講師陣が、日本語の習得だけでなく、日本での働き方や文化、職場でのマナーを指導することで、受講生が安心して日本で就業できる環境づくりを支援しています。。我々の主な目的は、HRNグループを通して日本に関連するすべてのプロセスを円滑に進め、有能な労働者を日本の多様な企業に紹介することです。これにより、協力関係にある日本の企業様に満足していただけるサービスを提供します。これまでに多くのネパール人がHRNグループの支援により、日本での就労を実現しています。
          </p>
        </div>

      </div>
    </div>
 
      <ServicesSection />
      <WhyChooseSection />
      <TeamSection />
      <TestimonialsSection />
      <FAQSection />
      <BlogSection />

    </>
  );
}
