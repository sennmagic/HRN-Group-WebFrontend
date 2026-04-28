import React from "react";
import AboutSection from "@/components/molecules/aboutsection";
export default function Company() {
  return (
    <>

    <div className="w-full bg-primary px-6 md:px-10 py-12 md:py-16">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <h1 className="text-golden mb-6">
          HRN グループとは
        </h1>

        {/* Paragraphs */}
        <div className="space-y-6">
          <p className="text-stonewhite text-sm md:text-base leading-relaxed tracking-wide">
            HRNグループは、日本で働きたいネパール人の皆様を対象に、日本語学習から就職支援、送り出し、そして来日後の生活や職場でのサポートまで、一貫して提供する総合支援企業です。当社は自社運営の日本語学校を4校とネパール労働局認定送り出し機関を運営しています。
          </p>
          <p className="text-stonewhite text-sm md:text-base leading-relaxed tracking-wide">
            2019年の設立以来、様々な目的で日本に渡航したいネパール人に特化した教育、指導及び手続きサポートを提供してきました。経験豊富な講師陣が、日本語の習得だけでなく、日本での働き方や文化、職場でのマナーを指導することで、受講生が安心して日本で就業できる環境づくりを支援しています。。我々の主な目的は、HRNグループを通して日本に関連するすべてのプロセスを円滑に進め、有能な労働者を日本の多様な企業に紹介することです。これにより、協力関係にある日本の企業様に満足していただけるサービスを提供します。これまでに多くのネパール人がHRNグループの支援により、日本での就労を実現しています。
          </p>
        </div>

      </div>
    
    </div>

  
    <div className="bg-primary text-stonewhite">
      {/* Main Responsive Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">
        
        {/* Header Section */}
        <header className="mb-16 border-l-4  ">
          <h1 className="text-3xl text-golden md:text-5xl font-bold text-golden mb-6 tracking-tighter">
            教育・育成・送り出しの一貫体
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-gray-100 max-w-4xl">
            <span className=" font-bold">HRN Group</span> は、ネパールにおいて教育機関および認定送り出し機関を運営し、人材育成から就労・定着までを包括的に支援しております。
          </p>
        </header>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Column 1: Primary Education */}
          <div className="space-y-10">
            <section>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-light text-amber-500/60 ">01 |</span>
                <h2 className="text-2xl font-bold text-white border-b border-white/10 flex-grow pb-1">
                  教育・人材育成事業
                </h2>
              </div>
              
              <div className="space-y-8 ml-4">
                <div>
                  <h3 className="flex items-center text-amber-200 font-semibold mb-3">
                    <span className="mr-2 text-xs">★</span> 日本語教育プログラム
                  </h3>
                  <ul className="space-y-2 text-gray-400 pl-4">
                    <li>↳ N5〜N2レベル体系的指導</li>
                  </ul>
                </div>

                <div>
                  <h3 className="flex items-center text-amber-200 font-semibold mb-3">
                    <span className="mr-2 text-xs">★</span> 特定技能試験対策プログラム
                  </h3>
                  <ul className="space-y-2 text-gray-400 pl-4">
                    <li>↳ 特定技能1号/2号(各分野対応)</li>
                    <li>↳ 介護福祉士国家試験対策</li>
                  </ul>
                </div>

                <div>
                  <h3 className="flex items-center text-amber-200 font-semibold mb-3">
                    <span className="mr-2 text-xs">★</span> 専門研修・内定者研修
                  </h3>
                  <ul className="space-y-2 text-gray-400 pl-4">
                    <li>↳ 日本社会ルール／ビジネスマナー研修</li>
                    <li>↳ 生活ガイダンス</li>
                    <li>↳ 実践的日常会話トレーニング</li>
                    <li>↳ 職種別専門実技研修</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-light text-amber-500/60 ">02 |</span>
                <h2 className="text-2xl font-bold text-white border-b border-white/10 flex-grow pb-1">
                  就職・マッチング支援
                </h2>
              </div>
              <ul className="space-y-3 text-gray-400 ml-8">
                <li>↳ 戦略的面接対策指導</li>
                <li>↳ 履歴書・応募書類作成支援</li>
                <li>↳ 企業説明会の企画・運営</li>
                <li>↳ 面接調整および実施支援</li>
              </ul>
            </section>
          </div>

          {/* Column 2: Operations & Follow-up */}
          <div className="space-y-12">
            <section>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-light text-white ">03 |</span>
                <h2 className="text-2xl font-bold text-white border-b border-white/10 flex-grow pb-1">
                  申請・渡航トータルサポート
                </h2>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-1 gap-3 text-gray-400 ml-8">
                <li>↳ 留資格認定証明書申請準備(ネパール側業務)</li>
                <li>↳ 大使館関連手続き支援</li>
                <li>↳ 査証申請サポート</li>
                <li>↳ 海外労働許可取得支援</li>
                <li>↳ 健康診断手配</li>
                <li>↳ 事前ガイダンス(通訳対応)</li>
                <li>↳ 出国前オリエンテーション</li>
                <li>↳ 渡航調整・航空券手配</li>
                <li>↳ 空港見送り</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-light text-amber-500/60 ">04 |</span>
                <h2 className="text-2xl font-bold text-white border-b border-white/10 flex-grow pb-1">
                  入国後フォローアップ体制
                </h2>
              </div>
              <ul className="space-y-3 text-gray-400 ml-8">
                <li>↳ 生活支援・定着支援</li>
                <li>↳ 日本語学習継続支援</li>
                <li>↳ 特定技能2号試験申請サポート</li>
                <li>↳ 在留期間中の随時対応</li>
                <li>↳ 緊急時対応</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-light text-amber-500/60 ">05 |</span>
                <h2 className="text-2xl font-bold text-white border-b border-white/10 flex-grow pb-1">
                  国際連携・付加価値事業
                </h2>
              </div>
              <ul className="space-y-3 text-gray-400 ml-8">
                <li>↳ ネパール現地視察コーディネート</li>
                <li>↳ 国際交流プログラム企画運営</li>
                <li>↳ 企業向け勉強会開催</li>
                <li>↳ 人材マッチング／管理システム運営</li>
              </ul>
            </section>
          </div>

        </div>
      </div>
    </div>
  
    </>
  );
}



//  <div className=" px-10 py-12 min-h-screen">
//       <h2
//         className="!text-golden"
       
//       >
//         HRN グループとは
//       </h2>

//       <p className="text-[#e8dcc8] text-base leading-9 mb-8">
//         HRNグループは、日本で働きたいネパール人の皆様を対象に、日本語学習から就職支援、送り出し、そして来日後の生活や職場でのサポートまで、一貫して提供する総合支援企業です。当社は自社運営の日本語学校を4校とネパール労働局認定送り出し機関を運営しています。
//       </p>

//       <p className="text-[#e8dcc8] text-base leading-9">
//         2019年の設立以来、様々な目的で日本に渡航したいネパール人に特化した教育、指導及び手続きサポートを提供してきました。経験豊富な講師陣が、日本語の習得だけでなく、日本での働き方や文化、職場でのマナーを指導することで、受講生が安心して日本で就業できる環境づくりを支援しています。我々の主な目的は、HRNグループを通して日本に関連するすべてのプロセスを円滑に進め、有能な労働者を日本の多様な企業に紹介することです。これにより、協力関係にある日本の企業様に満足していただけるサービスを提供します。これまでに多くのネパール人がHRNグループの支援により、日本での就労を実現しています。
//       </p>
//     </div>