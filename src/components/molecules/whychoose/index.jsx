export default function WhyHRN() {
  const items = [
    {
      number: "01",
      title: "特定技能分野の専門性と先駆的実績",
      desc: "特定技能に特化したトレーニングセンターとして運営。ネパール初の特定技能対応・オンライン体制構築を実現した先駆者。",
    },
    {
      number: "02",
      title: "圧倒的な実績と在学規模",
      desc: "送り出し実績が豊富で、在学数もトップクラス。安定した人材供給が可能。",
    },
    {
      number: "03",
      title: "高度な日本語教育水準",
      desc: "日本語学習及び日本のマナー、働き方などを習得した高度な人材を育成。",
    },
    {
      number: "04",
      title: "一貫した分野別教育・実技研修制度",
      desc: "初級者教育から内定後の職種別実技研修まで体系化。分野ごとの実践的な指導を徹底。",
    },
    {
      number: "05",
      title: "経験豊富な講師・役員体制",
      desc: "日本人講師および日本滞在歴豊富な教師・役員が在籍し、実務と文化理解を含めた指導が可能。",
    },
    {
      number: "06",
      title: "迅速かつ正確なオペレーション体制",
      desc: "書類作成・申請・情報共有を速やかに対応。正確で透明性の高い運営を徹底。",
    },
    {
      number: "07",
      title: "透明のある情報共有と登録支援機関連携",
      desc: "出席率・成績証明・定期レポート・ライフプランシートを共有。交流会や面談もサポート可能。",
    },
    {
      number: "08",
      title: "入国後の手厚い定着支援",
      desc: "生活支援から特定技能2号・介護福祉士取得まで長期サポート。退職率の低さが強みです。",
    },
    {
      number: "09",
      title: "強固な信頼・ネットワーク・システム開発",
      desc: "日本とネパール両国での信頼性、幅広いネットワーク、独自の人材マッチング・管理システムを構築。",
    },
  ];

  return (
    <div className="px-10 py-12 bg-primary">
      {/* Page Title */}
      <h2 className="font-bold mb-10 text-2xl bg-gradient-to-b from-[#e8c97a] to-[#b8922a] bg-clip-text text-transparent">
        なぜHRN GROUP？
      </h2>

      {/* Items */}
      <div className="flex flex-col gap-7">
        {items.map((item) => (
          <div key={item.number}>
            {/* Row: number | bar | title */}
            <div className="flex items-center gap-2.5 mb-2">

              {/* Number - white */}
              <span className="font-bold text-base text-white min-w-[28px]">
                {item.number}
              </span>

              {/* Vertical gold bar */}
              <div className="w-[3px] h-7 bg-golden rounded-sm shrink-0" />

              {/* Title - gold gradient */}
              <h3 className="font-bold text-[22px] tracking-wide text-white bg-clip-text text-transparent">
                {item.title}
              </h3>
            </div>

            {/* Description row */}
            <div className="flex items-start pl-12 gap-2">
              {/* Arrow - white */}
              <span className="text-white text-sm mt-1 shrink-0">↘</span>

              {/* Description - white */}
              <p className="text-white text-sm leading-loose m-0">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}