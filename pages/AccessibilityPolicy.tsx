import React from 'react';

const AccessibilityPolicy: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-10 text-gray-900 border-b-2 border-[#287580] pb-4">ウェブアクセシビリティ方針</h1>
        <div className="prose prose-lg text-gray-600 space-y-8 leading-relaxed">
          <p>
            私達は、ウェブアクセシビリティ基盤委員会（WAIC）のガイドラインに則り、対象と目標を明確化するためにウェブアクセシビリティ方針をたて、運用を行っていきます。
            次の通りウェブアクセシビリティ方針を定めます。
          </p>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-4">目標とする適合レベル及び対応度</h2>
            <p>JIS X 8341-3:2016 の適合レベルAAに準拠</p>
            <p className="text-sm italic">
              注記：本ウェブアクセシビリティ方針における「準拠」という表記は、 ウェブアクセシビリティ基盤委員会（WAIC）委員会「ウェブコンテンツの JIS X 8341-3:2016 対応度表記ガイドライン 2021年４月版」で定めた表記による。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-4">対象範囲</h2>
            <p>
              「ウェブページ」はテキスト、画像を含んだページを含めるものとする。2023 年 12 月 23 日以前のコンテンツについては、2025 年度までを目処に段階的にアクセシビリティ対応を行う。この際、公開日もしくは最終更新日から５年以上経過した文書については、アクセシビリティ対応を行った上で公開を継続するか、コンテンツを取り下げるかを決定する。
            </p>
            <p>対象外のコンテンツであっても、アクセシビリティ上の理由でコンテンツの理解に不都合がある場合は、以下問い合わせ先にて対応を行う。</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-4">目標を達成する期限</h2>
            <p>2024 年 1 月 25 日</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-4">問い合わせ先</h2>
            <p className="font-bold">info＠gogomarlin.com</p>
            <p className="text-sm">（※スパムメール防止の為、＠は大文字になっています）</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-4">ウェブアクセシビリティ試験結果</h2>
            <a 
              href="https://gogomarlin.com/accessibility-results/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#287580] hover:underline"
            >
              https://gogomarlin.com/accessibility-results/
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityPolicy;