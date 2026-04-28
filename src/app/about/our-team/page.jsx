const chairmanParagraphs = [
  "平素より格別のご高配を賜り、心より御礼申し上げます。",
  "HRN Groupは、",
  "「人を育み、力を活かし、価値を創造する。」",
  "という企業理念のもと、ネパールと日本を結び、人材と産業をつなぐ持続可能な国際成長モデルの確立に取り組んでおります。",
  "私は、人材の質こそが企業の未来を左右すると確信しております。",
  "人材は単なる労働力ではなく、企業の競争力を支える重要な資産です。そのためHRN Groupでは、教育を最重要基盤とし、選考・育成・入国支援・定着後フォローまでを一貫して担う体制を構築してまいりました。",
  "数ではなく質。短期ではなく長期。",
  "この姿勢を貫くことが、日本企業様との揺るぎない信頼関係につながると考えております。",
  "私たちは、人材育成の様々な分野において教育を軸とした持続可能な育成モデルを構築しております。入国は出発点に過ぎません。企業様の現場で活躍し、定着し、成長してこそ、真の価値が創出されると確信しております。",
  "HRNは、教育・育成・定着支援を柱とする総合人材パートナーとして、日本企業様の持続的な発展を支えてまいります。",
  "今後も信頼と実績を積み重ね、日本とネパールを結ぶトップブランドとして責任ある人材ビジネスを推進してまいります。",
  "皆様との長期的かつ強固なパートナーシップを、心よりお願い申し上げます。",
];

const boardMembers = [
  {
    id: 1,
    nameEn: "POKHREL BISHAL",
    nameJp: "ポクレル ビサル",
    role: "代表取締役",
    image: "/bishal.png",
    paragraphs: [
      "1996年生まれ。日本で約5年間の在留経験を有し、日本語能力N1。これまで約7年間にわたり人材業界に従事してまいりました。日本の深刻な人手不足とネパールの雇用課題という両国が抱える社会的課題の解決に取り組んでおります。人材を「単なる労働力」ではなく「かけがえのない命」として尊重し、提携企業様にとって真に価値あるパートナーであり続けることを使命に、持続可能かつ信頼性の高い事業運営を推進しております。",
    ],
  },
  {
    id: 2,
    nameEn: "NEUPANE SANTOSH",
    nameJp: "ネウパネ サントス",
    role: "取締役",
    image: "/santosh.PNG",
    paragraphs: [
      "1991年ネパール生まれ。日本に約6年間滞在し、日本の社会・文化・就労環境への理解を深めてまいりました。帰国後は、日本で培った経験と知識を活かし、ネパールにおける人材育成および日本就労支援に取り組んでおります。",
      "特定技能制度の開始当初より、ネパールにおいて特定技能に特化したトレーニングセンターをいち早く設立し、日本語教育の質の向上と実践的な人材の育成に尽力してまいりました。従来の単なる人材送り出しにとどまらず、教育・育成から就職後の定着支援まで、一貫した長期サポート体制の構築に力を注いでおります。",
      "これまで多くの学生および日本企業の皆様より厚い信頼をいただいてまいりました。その信頼にお応えするため、今後も責任と誠意をもって、質の高い人材支援に取り組んでまいります。",
    ],
  },
];

const MemberText = ({ member }) => (
  <div className="flex-1 self-start">
    <p className="text-golden font-bold tracking-widest text-sm md:text-base uppercase">
      {member.nameEn}
    </p>
    <p className="text-gray-200 text-sm tracking-wide mt-0.5">{member.nameJp}</p>
    <p className="text-gray-200 text-sm tracking-wide mb-5">{member.role}</p>
    <div className="space-y-4">
      {member.paragraphs.map((p, i) => (
        <p key={i} className="text-gray-200 text-sm leading-relaxed tracking-wide">
          {p}
        </p>
      ))}
    </div>
  </div>
);

const MemberPhoto = ({ member }) => (
  <div className="flex-shrink-0 w-64 self-start">
    <img
      src={member.image}
      alt={member.nameEn}
      className="w-full object-cover object-top"
      style={{ transform: "scaleX(-1)" }}
    />
  </div>
);

export default function ChairmanMessage() {
  return (
    <div className="w-full bg-slate-900">

      {/* ── PAGE 1: Chairman ── */}
      <div className="w-full flex items-start justify-center px-6 md:px-10 py-10 md:py-14">
        <div className="w-full max-w-7xl flex flex-col md:flex-row gap-8 md:gap-14 items-center">

          {/* Chairman photo + name below */}
          <div className="flex-shrink-0 flex flex-col items-center w-full md:w-64">
            <img
              src="/prakash.png"
              alt="Acharya Prakash"
              className="w-48 md:w-full object-cover object-top"
            />
            <div className="mt-4 text-center">
              <p className="text-stonewhite font-bold tracking-widest text-sm uppercase">
                ACHARYA PRAKASH
              </p>
              <p className="text-gray-200 text-sm mt-1 tracking-wide">アチアリア パルカス</p>
              <p className="text-gray-200 text-sm mt-0.5 tracking-wide">会長</p>
            </div>
          </div>

          {/* Chairman message text */}
          <div className="flex-1 pt-0">
       
            <div className="">
              {chairmanParagraphs.map((p, i) => (
                <p key={i} className="text-gray-200 text-sm leading-relaxed tracking-wide">
                  {p}
                </p>
              ))}
            </div>
          </div>

        </div>
        
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 md:px-10">
        <img src="/Line 16.png" alt="" className="w-full" />
      </div>

         <div className="w-full flex items-start justify-center px-6 md:px-10 py-10 md:py-14">
        <div className="w-full max-w-7xl flex flex-col md:flex-row gap-8 md:gap-14 items-center">

          {/* Chairman photo + name below */}
          <div className="flex-shrink-0 flex flex-col items-center w-full md:w-64">
            <img
              src="/bishal.png"
              alt="Acharya Prakash"
                  style={{ transform: "scaleX(-1)" }}
              className="w-48 md:w-full object-cover object-top"
            />
            <div className="mt-4 text-center">
              <p className="text-stonewhite font-bold tracking-widest text-sm uppercase">
                POKHREL BISHAL
              </p>

              <p>ポクレル ビサル</p>
              <p className="text-gray-200 text-sm mt-1 tracking-wide">代表取締役</p>
           
            </div>
          </div>

          {/* Chairman message text */}
          <div className="flex-1 pt-0">
            <h1 className="text-golden text-3xl md:text-5xl font-semibold tracking-widest mb-8">
              
            </h1>
            <div className="">
             
                <p  className="text-gray-200 text-sm leading-relaxed tracking-wide">
             1996年生まれ。日本で約5年間の在留経験を有し、日本語能力N1。これまで約7年間にわたり人材業界に従事してまいりました。  <br/>日本の深刻な人手不足とネパールの雇用課題という両国が抱える社会的課題の解決に取り組んでおります。 <br/>人材を「単なる労働力」ではなく「かけがえのない命」として尊重し、提携企業様にとって真に価値あるパートナーであり続けることを使命に、持続可能かつ信頼性の高い事業運営を推進しておりま。
                </p>
           
            </div>
          </div>

        </div>
        
      </div>



      <div className="w-full flex items-start justify-center px-6 md:px-10 py-10 md:py-14">
        <div className="w-full max-w-7xl flex flex-col md:flex-row gap-8 md:gap-14 items-center">

          {/* Chairman photo + name below */}
          <div className="flex-shrink-0 flex flex-col items-center w-full md:w-64">
            <img
              src="/santosh.png"
              alt="Acharya Prakash"
                  style={{ transform: "scaleX(-1)" }}
              className="w-48 md:w-full object-cover object-top"
            />
            <div className="mt-4 text-center">
              <p className="text-stonewhite font-bold tracking-widest text-sm uppercase">
              NEUPANE SANTOSH
              </p>
              <p className="text-gray-200 text-sm mt-1 tracking-wide">取締役</p>
           
            </div>
          </div>

          {/* Chairman message text */}
          <div className="flex-1 pt-0">
         
            <div className="">
             
                <p  className="text-gray-200 text-sm leading-relaxed  flex  tracking-wide">
           1991年ネパール生まれ。日本に約6年間滞在し、日本の社会・文化・就労環境への理解を深めてまいりました。帰国後は、日本で培った経験と知識を活かし、ネパールにおける人材育成および日本就労支援に取り組んでおります。",
      "特定技能制度の開始当初より、ネパールにおいて特定技能に特化したトレーニングセンターをいち早く設立し、日本語教育の質の向上と実践的な人材の育成に尽力してまいりました。従来の単なる人材送り出しにとどまらず、教育・育成から就職後の定着支援まで、一貫した長期サポート体制の構築に力を注いでおります。",
      "これまで多くの学生および日本企業の皆様より厚い信頼をいただいてまいりました。その信頼にお応えするため、今後も責任と誠意をもって、質の高い人材支援に取り組んでまいります。。
                </p>
           
            </div>
          </div>

        </div>
        
      </div>




         <div className="max-w-7xl  mx-auto h-px bg-golden opacity-40 " />


    </div>
  );
}