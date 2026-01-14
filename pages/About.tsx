import React, { useEffect, useState } from 'react';

const About: React.FC = () => {
  const [metadata, setMetadata] = useState<any>(null);

  useEffect(() => {
    fetch('metadata.json')
      .then(res => res.json())
      .then(data => setMetadata(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="pt-20 pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-16 mb-16 opacity-0 animate-fadeInUp">
          <h2 className="text-[#287580] font-bold tracking-[0.3em] text-xs mb-4 uppercase">About Us</h2>
          <h1 className="text-5xl font-bold mb-6 text-gray-900">事業所について</h1>
          <div className="w-24 h-1.5 bg-[#287580] mx-auto rounded-full"></div>
        </div>

        {/* Concept Section */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="order-2 lg:order-1 space-y-8 opacity-0 animate-fadeInUp">
            <h2 className="text-4xl font-bold leading-tight text-gray-900">
              テクノロジーを通じて、<br />
              自分らしく輝ける<br />
              ステージを共創する。
            </h2>
            <p className="text-gray-600 leading-relaxed text-xl font-medium">
              栃木県宇都宮市の「GOGOマーリン」は、ITスキルに特化した就労支援を通じて、障がいのある方の「働きたい」という想いを形にします。
            </p>
            <p className="text-gray-500 leading-loose">
              デジタルの知識を習得することは、単なる技術習得ではありません。それは新しい表現方法を手に入れ、社会と繋がるための新しい「言葉」を得るようなものです。<br />
              私たちは一人ひとりの感性を尊重し、共に学び、共に成長し続けられる場所でありたいと考えています。
            </p>
          </div>
          <div className="order-1 lg:order-2 relative opacity-0 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <div className="rounded-[60px] overflow-hidden border-none shadow-none">
              <img 
                src="images/事業所内部A型作業スペース.jpg" 
                alt="A型作業スペース"
                className="w-full h-[550px] object-cover"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#287580]/10 rounded-full blur-2xl -z-10"></div>
          </div>
        </div>

        {/* Office Wide View */}
        <div className="mb-32 relative group opacity-0 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
           <img 
             src="images/事業所内部移行支援作業スペース.jpg" 
             alt="移行支援作業スペース"
             className="w-full h-[500px] object-cover rounded-[60px] grayscale-[20%] hover:grayscale-0 transition-all duration-700"
           />
           <div className="absolute bottom-10 left-10 bg-white/90 backdrop-blur-sm p-8 rounded-[30px] shadow-xl max-w-md hidden md:block">
              <h4 className="text-xl font-bold text-[#287580] mb-3">Professional Workspace</h4>
              <p className="text-sm text-gray-600 leading-loose font-medium">
                落ち着いた配色の室内と最新の設備。クリエイティブな活動に没頭できる環境を追求しました。
              </p>
           </div>
        </div>

        {/* Profile Table */}
        <div className="bg-[#f0f7f8] rounded-[50px] p-10 md:p-20 shadow-inner opacity-0 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          <div className="flex items-center space-x-5 mb-12">
            <div className="w-12 h-12 bg-[#287580] rounded-2xl flex items-center justify-center text-white shadow-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
            </div>
            <h3 className="text-3xl font-bold text-gray-900">事業所概要</h3>
          </div>
          
          <div className="bg-white rounded-[40px] overflow-hidden border border-white">
            <ProfileRow label="事業者名" value={metadata?.name || "GOGOマーリン"} />
            <ProfileRow label="運営会社" value={metadata?.contactInfo?.company || "sora合同会社"} />
            <ProfileRow label="サービス種別" value="障害福祉サービス事業（就労継続支援A型・就労移行支援）" />
            <ProfileRow label="開所日" value="2023年4月1日" />
            <ProfileRow label="所在地" value={metadata?.contactInfo?.address || "〒320-0816 栃木県宇都宮市京町5-17"} />
            <ProfileRow label="事業内容" value="障害者の日常生活及び社会生活を総合的に支援するための法律に基づく障害福祉サービス" />
          </div>
        </div>
      </div>
    </div>
  );
};

const ProfileRow: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="grid md:grid-cols-4 py-8 px-8 md:px-12 border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
    <div className="md:col-span-1 font-bold text-[#287580] mb-3 md:mb-0 text-sm uppercase tracking-wider">{label}</div>
    <div className="md:col-span-3 text-gray-700 font-medium leading-loose">{value}</div>
  </div>
);

export default About;