import react from 'react';

export default function Aboutsection() {
  const rows = [
    { label: "会社名", value: <>HRN Group And Management Company Pvt. Ltd.<br />（HRNグループ＆マネジメント株式会社）</> },
    { label: "設立", value: "2019年5月" },
    { label: "所在地（本社）", value: "BISHALNAGAR, DHUMBARAHI-04 KATHMANDU, NEPAL, 44600" },
    { label: "TEL", value: "+977-1-4534455" },
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
    <section className="bg-primary">
      <div className="max-w-7xl mx-auto p-8 min-h-screen font-serif">
        <h2 className="text-golden text-3xl font-bold mb-6 tracking-widest">会社概要</h2>
        <table className="w-full border border-golden border-collapse">
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
    </section>
  );
}