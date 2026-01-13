
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">お問い合わせ・見学予約</h1>
          <div className="w-20 h-1.5 bg-[#287580] mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-500">
            お電話、またはフォームよりお気軽にご連絡ください。<br />
            専門のスタッフが丁寧に対応させていただきます。
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-[#f0f7f8] p-8 rounded-[40px] h-full">
              <h3 className="text-2xl font-bold mb-8 text-[#287580]">連絡先</h3>
              <div className="space-y-8">
                <ContactInfoItem 
                  icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>}
                  label="電話番号"
                  value="028-XXX-XXXX"
                  sub="受付時間：平日 9:00 - 18:00"
                />
                <ContactInfoItem 
                  icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                  label="メール"
                  value="info@gogomarlin.com"
                  sub="24時間受付中"
                />
                <ContactInfoItem 
                  icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
                  label="所在地"
                  value="栃木県宇都宮市京町5-17"
                  sub="宇都宮駅よりアクセス可能"
                />
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form className="bg-white border border-gray-100 p-8 md:p-12 rounded-[40px] shadow-sm space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">お名前</label>
                  <input type="text" className="w-full px-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#287580] focus:outline-none transition-all" placeholder="山田 太郎" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">メールアドレス</label>
                  <input type="email" className="w-full px-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#287580] focus:outline-none transition-all" placeholder="example@mail.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">お問い合わせ内容</label>
                <select className="w-full px-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#287580] focus:outline-none transition-all">
                  <option>見学・体験の予約</option>
                  <option>サービスに関するご質問</option>
                  <option>資料請求</option>
                  <option>その他</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">メッセージ</label>
                <textarea rows={5} className="w-full px-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#287580] focus:outline-none transition-all" placeholder="お問い合わせ内容をご記入ください"></textarea>
              </div>
              <button type="submit" className="w-full py-5 bg-[#287580] text-white font-bold rounded-2xl hover:bg-[#1e5a63] transition-all transform hover:shadow-lg">
                送信する
              </button>
            </form>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-20 h-[450px] bg-gray-100 rounded-[50px] overflow-hidden relative shadow-inner border-4 border-white">
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="text-center">
               <p className="text-gray-400 font-medium">Google Maps API (Placeholder)</p>
               <p className="text-gray-600 font-bold">栃木県宇都宮市京町5-17</p>
               <a 
                 href="https://www.google.com/maps/search/?api=1&query=栃木県宇都宮市京町5-17" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="mt-4 inline-block text-[#287580] underline font-bold"
               >
                 Googleマップで開く
               </a>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactInfoItem: React.FC<{ icon: React.ReactNode; label: string; value: string; sub: string }> = ({ icon, label, value, sub }) => (
  <div className="flex items-start space-x-4">
    <div className="w-12 h-12 bg-white text-[#287580] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
      {icon}
    </div>
    <div>
      <p className="text-xs font-bold text-[#287580] uppercase tracking-wider mb-1">{label}</p>
      <p className="text-xl font-bold text-gray-900 mb-1">{value}</p>
      <p className="text-sm text-gray-500">{sub}</p>
    </div>
  </div>
);

export default Contact;
