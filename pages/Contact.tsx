import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">お問い合わせ・無料相談予約</h1>
          <div className="w-20 h-1.5 bg-[#287580] mx-auto rounded-full"></div>
          <p className="mt-8 text-gray-600 leading-relaxed">
            事業所の雰囲気を直接見てみたい、具体的なカリキュラムについて詳しく知りたいなど、<br className="hidden md:block" />
            些細なことでも構いません。まずはお気軽にお問い合わせください。
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-[#f0f7f8] p-8 rounded-[40px] h-full border border-[#287580]/10">
              <h3 className="text-2xl font-bold mb-8 text-[#287580]">連絡先</h3>
              <div className="space-y-8">
                <ContactInfoItem 
                  icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>}
                  label="電話番号"
                  value="028-XXX-XXXX"
                  sub="受付時間：平日 10:00 - 18:00"
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

          {/* Combined Form */}
          <div className="lg:col-span-3">
            <form action="send_mail.php" method="POST" className="bg-white border border-gray-100 p-8 md:p-12 rounded-[40px] shadow-sm space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">お名前 <span className="text-red-500 text-xs">*</span></label>
                  <input name="name" type="text" className="w-full px-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#287580] focus:outline-none transition-all" placeholder="山田 太郎" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">ふりがな</label>
                  <input name="kana" type="text" className="w-full px-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#287580] focus:outline-none transition-all" placeholder="やまだ たろう" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">メールアドレス <span className="text-red-500 text-xs">*</span></label>
                  <input name="email" type="email" className="w-full px-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#287580] focus:outline-none transition-all" placeholder="example@mail.com" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">電話番号</label>
                  <input name="tel" type="tel" className="w-full px-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#287580] focus:outline-none transition-all" placeholder="000-0000-0000" />
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-sm font-bold text-gray-700">ご希望のサービス項目</label>
                <div className="flex flex-wrap gap-4">
                  <label className="flex items-center space-x-2 bg-gray-50 px-4 py-3 rounded-xl border border-gray-100 cursor-pointer hover:bg-white">
                    <input name="service[]" value="A型" type="checkbox" className="w-4 h-4 text-[#287580] rounded" />
                    <span className="text-sm font-medium">就労継続支援A型</span>
                  </label>
                  <label className="flex items-center space-x-2 bg-gray-50 px-4 py-3 rounded-xl border border-gray-100 cursor-pointer hover:bg-white">
                    <input name="service[]" value="移行支援" type="checkbox" className="w-4 h-4 text-[#287580] rounded" />
                    <span className="text-sm font-medium">就労移行支援</span>
                  </label>
                  <label className="flex items-center space-x-2 bg-gray-50 px-4 py-3 rounded-xl border border-gray-100 cursor-pointer hover:bg-white">
                    <input name="service[]" value="相談" type="checkbox" className="w-4 h-4 text-[#287580] rounded" />
                    <span className="text-sm font-medium">未定・相談したい</span>
                  </label>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">お問い合わせ内容 / ご希望の予約内容</label>
                <select name="type" className="w-full px-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#287580] focus:outline-none transition-all">
                  <option value="見学希望">見学・体験を希望</option>
                  <option value="質問">サービスに関するご質問</option>
                  <option value="その他">その他</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">メッセージ</label>
                <textarea name="message" rows={5} className="w-full px-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#287580] focus:outline-none transition-all" placeholder="お問い合わせ内容をご記入ください"></textarea>
              </div>
              <button type="submit" className="w-full py-5 bg-[#287580] text-white font-bold rounded-2xl hover:bg-[#1e5a63] transition-all transform hover:shadow-lg">
                送信する
              </button>
            </form>
          </div>
        </div>

        {/* Map Embedded */}
        <div className="mt-20 h-[450px] bg-gray-100 rounded-[50px] overflow-hidden relative shadow-inner border border-gray-100">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3205.1554619736853!2d139.880663!3d36.550304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601f67727195d233%3A0x77d016c96b797177!2z44CSMzIwLTA4MTYg5qCD5pyo55yM5a6H6YO95a6u5biC5Lqs55S677yV4oiS77yR77yX!5e0!3m2!1sja!2sjp!4v1715600000000!5m2!1sja!2sjp" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy"
          ></iframe>
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