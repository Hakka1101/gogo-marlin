import React from 'react';

const Service: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 opacity-0 animate-fadeInUp">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">サービス内容</h1>
          <div className="w-20 h-1.5 bg-[#287580] mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-500 max-w-2xl mx-auto">
            個々の希望や適性に合わせ、2つのサポートプログラムをご提供。
            未経験からでも安心して始められる学習カリキュラムが整っています。
          </p>
        </div>

        {/* Support Types */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <div className="bg-white p-10 rounded-[40px] border-2 border-[#f0f7f8] shadow-xl hover:shadow-[#287580]/5 transition-all relative overflow-hidden group opacity-0 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <div className="absolute top-0 right-0 bg-[#287580] text-white px-8 py-2 rounded-bl-3xl font-bold">就労継続支援A型</div>
            <h2 className="text-2xl font-bold mb-6 text-gray-900">働く喜びを実感しながら<br /><span className="text-[#287580]">スキルアップ</span></h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              雇用契約を結び、実際の業務に携わりながらお給料を受け取るサービスです。
              実践的なIT業務を通じて、自立した生活と職業スキルの定着を目指します。
            </p>
            <ul className="space-y-4">
              <ServiceItem text="Webバナー・ロゴ制作補助" />
              <ServiceItem text="ECサイトのデータ登録・管理" />
              <ServiceItem text="システム開発のデバッグ作業" />
            </ul>
          </div>

          <div className="bg-[#f0f7f8] p-10 rounded-[40px] shadow-xl hover:shadow-[#287580]/5 transition-all relative overflow-hidden group opacity-0 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <div className="absolute top-0 right-0 bg-white text-[#287580] px-8 py-2 rounded-bl-3xl font-bold border-l border-b border-[#287580]/10">就労移行支援</div>
            <h2 className="text-2xl font-bold mb-6 text-gray-900">一般企業への就職を<br /><span className="text-[#287580]">トータルサポート</span></h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              一般企業への就職を目指す方に、スキルの習得から就職活動、定着支援までをワンストップで。
              あなたが希望するキャリアパスを描くためのお手伝いをします。
            </p>
            <ul className="space-y-4">
              <ServiceItem text="Adobeツールの操作習得" />
              <ServiceItem text="プログラミング基礎学習" />
              <ServiceItem text="面接対策・履歴書作成支援" />
            </ul>
          </div>
        </div>

        {/* Skill Matrix */}
        <div className="bg-[#287580] rounded-[60px] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl opacity-0 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -ml-20 -mt-20"></div>
          <h2 className="text-3xl font-bold text-center mb-16 relative z-10">学べるITスキル</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
            <SkillCard
              title="Web Design"
              desc="Figma / Ps / Ai"
              icon={
                <img src="images/adobe-illustrator.png" alt="Web Design" className="w-24 h-24 object-contain" />
              }
            />
            <SkillCard
              title="Developing"
              desc="HTML / CSS / JS"
              icon={
                <img src="images/CSS3_logo.svg" alt="Developing" className="w-24 h-24 object-contain" />
              }
            />
            <SkillCard
              title="Office"
              desc="Word / Excel / GAS"
              icon={
                <img src="images/excel.png" alt="Office" className="w-24 h-24 object-contain" />
              }
            />
            <SkillCard
              title="Game Unity"
              desc="Unity / Blender / C#"
              icon={
                <img src="images/vtzpl5c9yd181.png" alt="Game Unity" className="w-24 h-24 object-contain" />
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceItem: React.FC<{ text: string }> = ({ text }) => (
  <li className="flex items-center space-x-3 text-gray-700">
    <span className="w-6 h-6 bg-[#287580] text-white rounded-full flex items-center justify-center flex-shrink-0 shadow-md shadow-cyan-900/20">
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
    </span>
    <span className="font-medium">{text}</span>
  </li>
);

const SkillCard: React.FC<{ title: string; desc: string; icon: React.ReactNode }> = ({ title, desc, icon }) => (
  <div className="text-center group cursor-default">
    <div className="mb-4 bg-white/10 aspect-square rounded-3xl flex items-center justify-center backdrop-blur-sm group-hover:bg-white/20 transition-all border border-white/20 shadow-inner overflow-hidden">
      <div className="text-white transform group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
    </div>
    <h4 className="text-xl font-bold mb-2">{title}</h4>
    <p className="text-white/60 text-sm font-light">{desc}</p>
  </div>
);

export default Service;