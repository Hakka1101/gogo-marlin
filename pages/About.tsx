
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">事業所について</h1>
          <div className="w-20 h-1.5 bg-[#287580] mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold mb-6 leading-tight text-gray-900">
              デジタルの力で、<br />
              ひとりひとりの可能性を広げ、<br />
              未来を自由に創り出す。
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              栃木県宇都宮市に2023年4月に開所した「GOGOマーリン」は、障害をお持ちの方がITスキルを武器に社会で活躍できるよう支援する事業所です。
            </p>
            <p className="text-gray-600 leading-relaxed">
              私たちは単なる就労の場だけでなく、「個人のクリエイティビティ」と「働く喜び」がリンクする場所を目指しています。
              IT業界の速いスピード感に合わせつつも、一人一人の体調やペースを最優先に考えた丁寧なサポートを行っています。
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&q=80&w=1000" // Facility Entrance Photo (Photo 5)
              alt="GOGO Marlin Entrance"
              className="rounded-[40px] shadow-2xl w-full h-[450px] object-cover"
            />
            <div className="absolute -bottom-10 -right-10 bg-[#f0f7f8] w-48 h-48 rounded-full -z-10"></div>
          </div>
        </div>

        {/* Office Wide View */}
        <div className="mb-24">
           <img 
             src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000" // Wider view of office (Photo 4)
             alt="Office Interior"
             className="w-full h-96 object-cover rounded-[40px] shadow-lg"
           />
        </div>

        {/* Profile Table */}
        <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-sm">
          <h3 className="text-2xl font-bold mb-8 flex items-center text-[#287580]">
            <span className="w-10 h-10 bg-[#f0f7f8] rounded-xl mr-4 flex items-center justify-center text-[#287580]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
            </span>
            事業所概要
          </h3>
          <div className="space-y-0 border-t border-gray-100">
            <ProfileRow label="事業者名" value="GOGOマーリン" />
            <ProfileRow label="運営会社" value="sora合同会社" />
            <ProfileRow label="業種/業界" value="障害福祉サービス事業（就労継続支援A型・就労移行支援）" />
            <ProfileRow label="開所" value="2023年4月" />
            <ProfileRow label="所在地" value="〒320-0816 栃木県宇都宮市京町5-17" />
            <ProfileRow label="事業内容" value="「障害者の日常生活及び社会生活を総合的に支援するための法律に基づく障害福祉サービス事業」" />
          </div>
        </div>
      </div>
    </div>
  );
};

const ProfileRow: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="grid md:grid-cols-4 py-6 border-b border-gray-100">
    <div className="md:col-span-1 font-bold text-[#287580] mb-2 md:mb-0">{label}</div>
    <div className="md:col-span-3 text-gray-700">{value}</div>
  </div>
);

export default About;
