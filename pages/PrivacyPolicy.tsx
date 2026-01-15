import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-10 text-gray-900 border-b-2 border-[#287580] pb-4">プライバシーポリシー</h1>
        <div className="prose prose-lg text-gray-600 space-y-8 leading-relaxed">
          <p>
            「sora合同会社」（以下、「当社」）は、各種サービスのご提供にあたり、利用者様の個人情報をお預かりしております。
            当社は個人情報を保護し、お客様に更なる信頼と安心感をご提供できるように努めて参ります。
            当社は、個人情報に関する法令を遵守し、個人情報の適切な取り扱いを致します。
          </p>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-4">1. 個人情報の取得について</h2>
            <p>当社は、偽りその他不正の手段によらず適正に個人情報を取得致します。なお、ご相談・お問い合わせに必要な範囲で個人情報を収集する場合があります。</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-4">2. 個人情報の利用について</h2>
            <p>
              当社は、個人情報を以下の利用目的の達成に必要な範囲内で利用致します。
              以下に定めのない目的で個人情報を利用する場合、あらかじめご本人の同意を得た上で行ないます。
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>ご相談・お問い合わせに対する回答や確認のご連絡のため</li>
              <li>個人情報を特定しない統計情報に利用するため</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-4">3. 個人情報の安全管理について</h2>
            <p>当社は、取り扱う個人情報の漏えい、滅失または毀損の防止その他の個人情報の安全管理のために必要かつ適切な措置を講じます。</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-4">4. 個人情報の委託について</h2>
            <p>当社は、個人情報の取り扱いの全部または一部を第三者に委託する場合は、当該第三者について厳正な調査を行い、取り扱いを委託された個人情報の安全管理が図られるよう当該第三者に対する必要かつ適切な監督を行います。</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-4">5. 個人情報の第三者提供について</h2>
            <p>当社は、個人情報保護法等の法令に定めのある場合を除き、個人情報をあらかじめご本人の同意を得る事なく、第三者に提供いたしません。</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-4">6. 個人情報の開示・訂正について</h2>
            <p>
              当社は、ご本人から自己の個人情報についての開示の請求がある場合、速やかに開示を致します。
              その際、ご本人である事が確認できない場合には開示に応じません。
              個人情報の内容に誤りがありご本人から訂正・追加・削除の請求がある場合、調査の上、速やかにこれらの請求に対応致します。
              その際、ご本人である事が確認できない場合には、これらの請求に応じません。
              当社の個人情報の取り扱いにつきまして、上記の請求・お問い合わせ等ございましたら、当社までご連絡くださいますようお願い申し上げます。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-4">7. 組織・体制</h2>
            <p>当社は、個人情報の適正な管理及び継続的な改善を実施致します。</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-4">8. その他の注意事項</h2>
            <p>当社が運営するコンテンツや掲載物等からリンクされている第三者のサイト及びサービスは、当社とは独立した個人情報の保護に関する規定やデータ収集の規約を定めています。 当サイトはこれらの規約や活動に対していかなる義務や責任も負いません。</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-4">9. 個人情報の管理方法の継続的な改善について</h2>
            <p>当社は、個人情報の管理方法を見直し、継続的に改善を実施致します。</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-4">10. 本方針の変更</h2>
            <p>本方針の内容は変更される事があります。 変更後の本方針については、当社が別途定める場合を除いて、当サイトに掲載した時から効力を生じるものとします。</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;