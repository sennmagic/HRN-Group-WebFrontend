"use client";

import React from 'react';
import Button from '../../atoms/buttons';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image'; // ✅ Import Next.js Image component

const HeroSection = () => {
  return (
   <section
  className="relative min-h-screen overflow-hidden bg-primary"

>
      {/* Abstract Background Shapes */}
<div className="absolute inset-0 z-0">
  <Image
    src="/buildinghrn.png"
    alt="Background"
    width={2020}
    height={1080}
    className="w-full h-auto opacity-10"
    priority
  />
</div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-24 items-center min-h-[60vh] lg:min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 z-10">
          <h2
  className="text-stonewhite w-full max-w-full lg:w-[760px]"
  style={{
    fontFamily: 'Plus Jakarta Sans',
    fontWeight: 600,
    fontSize: 'clamp(28px, 4vw, 40px)',
    lineHeight: '110%',
    letterSpacing: '-0.5px',
    opacity: 0.9
  }}
>
  <span className="block text-stonewhite mb-2" style={{ fontSize: 'clamp(28px, 2vw, 60px)' }}>
    ようこそ
  </span>
 <span className="block   ">
  Welcome to HRN Group <br/> <span className="block text-stonewhite" style={{ fontSize: 'clamp(14px, 2vw, 18px)' }}>


<span className=' p-1 text-right '>
  機会に満ちた世界
</span>
  </span>  
</span>
</h2>



<div className="flex gap-2">
  <div className="">
    <h3 className='font-bold text-stonewhite text-lg'>企業理念</h3>
    <p>人を育み、力を活かし、価値を創造する。</p>

    <h3 className='font-bold text-stonewhite mt-4 text-lg'>Mission（ミッション）</h3>
    <p>質の高い人材を育成し、日本企業へ円滑かつ責任ある送り出しを実現すること</p>

    <h3 className='font-bold text-stonewhite mt-4 text-lg'>Vision（ビジョン）</h3>
    <p>信頼と実績を礎に、日本とネパールを結ぶ架け橋として、持続的な価値を創造する存在へ</p>
  </div>
</div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/contact">
                <Button
                  variant="primary"
                  className="text-sm sm:text-base lg:text-lg bg-stonewhite hover:!bg-primary hover:!text-stonewhite w-full sm:w-auto px-6 py-3"
                  textColor="#041926"
                >
                  Book Appointment
                </Button>
              </Link>

              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-stonewhite rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
      <div className="relative flex justify-center lg:justify-end z-10 lg:-mr-24 xl:-mr-32">
  <Image
    src="/HRN.gif"
    alt="Hero Image"
    width={2200}
    height={1200}
    className="rounded-full object-cover drop-shadow-2xl hover:scale-105 transition-transform duration-500 mix-blend-multiply w-[600px] lg:w-[800px] xl:w-[1000px]"
    priority
  />
</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
