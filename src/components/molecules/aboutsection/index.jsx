import react from 'react';


export default function Aboutsection() {
  const rows = [
    { label: "会社名", value: <>HRN Group And Management Company Pvt. Ltd.<br />（HRNグループ＆マネジメント株式会社）</> },
    { label: "設立", value: "2019年5月" },
    { label: "所在地（本社）", value: "BISHALNAGAR, DHUMBARAHI-04 KATHMANDU, NEPAL, 44600" },
    { label: "TEL", value: "+977-1-4534455" },
    { label: "資本金", value: "5千万 ネパールルピー" },
    { label: "会長", value: "ACHARYA PRAKASH（アチアリア・パルカス）" },
    { label: "代表取締役", value: "POKHREL BISHAL（ポクレル・ビサル）" },
    { label: "取締役", value: "NEUPANE SANTOSH（ネウパネ・サントス）" },
    { label: "従業員数", value: "75名（グループ全体）" },
    {
      label: "事業内容",
      value: (
        <>
          日本語教育機関運営<br />
          送り出し機関運営<br />
          人材マッチング・管理システム運営<br />
          通訳・翻訳サービス<br />
          ネパール人材支援事業<br />
          日本企業海外進出支援<br />
          外国人就労者支援事業
        </>
      ),
    },
    {
      label: "許可番号",
      value: (
        <>
          株式会社登録番号: 304794/079/080<br />
          VAT: 610424133<br />
          送り出し機関認可番号: 203-057/058<br />
          KALINCHOK MANPOWER PRIVATE LIMITED
        </>
      ),
    },
  ];

  return (

    <>
    <section className="bg-primary mb-8">
  <div className=" px-10 py-12 min-h-screen">
      <h2
        className="!text-golden"
       
      >
        HRN グループとは
      </h2>

      <p className="text-[#e8dcc8] text-base leading-9 mb-8">
        HRNグループは、日本で働きたいネパール人の皆様を対象に、日本語学習から就職支援、送り出し、そして来日後の生活や職場でのサポートまで、一貫して提供する総合支援企業です。当社は自社運営の日本語学校を4校とネパール労働局認定送り出し機関を運営しています。
      </p>

      <p className="text-[#e8dcc8] text-base leading-9">
        2019年の設立以来、様々な目的で日本に渡航したいネパール人に特化した教育、指導及び手続きサポートを提供してきました。経験豊富な講師陣が、日本語の習得だけでなく、日本での働き方や文化、職場でのマナーを指導することで、受講生が安心して日本で就業できる環境づくりを支援しています。我々の主な目的は、HRNグループを通して日本に関連するすべてのプロセスを円滑に進め、有能な労働者を日本の多様な企業に紹介することです。これにより、協力関係にある日本の企業様に満足していただけるサービスを提供します。これまでに多くのネパール人がHRNグループの支援により、日本での就労を実現しています。
      </p>
    </div>

      
    </section>
    <div className="bg-primary p-8 min-h-screen font-serif">
      <h2 className="text-[#c9a84c] text-3xl font-bold mb-6 tracking-widest">会社概要</h2>
      <table className="w-full border border-[#c9a84c] border-collapse">
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border border-golden">
              <td className="border border-golden px-4 py-3 text-[#FFFAF2] font-semibold text-sm whitespace-nowrap align-top min-w-[120px]">
                {row.label}
              </td>
              <td className="border border-golden px-4 py-3 text-[#FFFAF2] text-sm leading-7 align-top">
                {row.value}  
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}