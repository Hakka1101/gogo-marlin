import React from 'react';

const Consultation: React.FC = () => {
  return (
    <div className="pt-24 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[#287580] font-bold tracking-widest text-sm mb-4 uppercase">Booking</h2>
          <h1 className="text-4xl font-bold mb-4 text-gray-900">無料相談・見学の予約</h1>
          <div className="w-20 h-1.5 bg-[#287580] mx-auto rounded-full"></div>
          <p className="mt-8 text-gray-600 leading-relaxed">
            事業所の雰囲気を直接見てみたい、具体的なカリキュラムについて詳しく知りたいなど、<br className="hidden md:block" />
            些細なことでも構いません。まずは一度、見学や相談にお越しください。
          </p>
        </div>

        <div className="bg-[#f0f7f8] rounded-[40px] p-8 md:p-12 shadow-sm border border-[#287580]/10">
          <form className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">お名前 <span className="text-red-500 text-xs">*</span></label>
                <input type="text" className="w-full px-5 py-4 bg-white border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#287580] focus:outline-none transition-all shadow-sm" placeholder="山田 太郎" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">ふりがな</label>
                <input type="text" className="w-full px-5 py-4 bg-white border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#287580] focus:outline-none transition-all shadow-sm" placeholder="やまだ たろう" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">メールアドレス <span className="text-red-500 text-xs">*</span></label>
                <input type="email" className="w-full px-5 py-4 bg-white border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#287580] focus:outline-none transition-all shadow-sm" placeholder="example@mail.com" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">電話番号</label>
                <input type="tel" className="w-full px-5 py-4 bg-white border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#287580] focus:outline-none transition-all shadow-sm" placeholder="000-0000-0000" />
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-sm font-bold text-gray-700">ご希望のサービス項目</label>
              <div className="flex flex-wrap gap-4">
                <label className="flex items-center space-x-2 bg-white px-5 py-3 rounded-xl border border-gray-100 cursor-pointer hover:bg-gray-50">
                  <input type="checkbox" className="w-4 h-4 text-[#287580] rounded" />
                  <span className="text-sm font-medium">就労継続支援A型</span>
                </label>
                <label className="flex items-center space-x-2 bg-white px-5 py-3 rounded-xl border border-gray-100 cursor-pointer hover:bg-gray-50">
                  <input type="checkbox" className="w-4 h-4 text-[#287580] rounded" />
                  <span className="text-sm font-medium">就労移行支援</span>
                </label>
                <label className="flex items-center space-x-2 bg-white px-5 py-3 rounded-xl border border-gray-100 cursor-pointer hover:bg-gray-50">
                  <input type="checkbox" className="w-4 h-4 text-[#287580] rounded" />
                  <span className="text-sm font-medium">未定・相談したい</span>
                </label>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">ご希望の予約内容</label>
              <select className="w-full px-5 py-4 bg-white border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#287580] focus:outline-none transition-all shadow-sm">
                <option>見学を希望（所要時間：約30分）</option>
                <option>体験利用を希望（所要時間：2〜4時間程度）</option>
                <option>相談のみを希望</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">メッセージ・ご質問</label>
              <textarea rows={5} className="w-full px-5 py-4 bg-white border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#287580] focus:outline-none transition-all shadow-sm" placeholder="現在の状況や、気になることなどご自由にご記入ください。"></textarea>
            </div>

            <div className="pt-4">
              <button type="submit" className="w-full py-5 bg-[#287580] text-white font-bold rounded-2xl hover:bg-[#1e5a63] transition-all transform hover:shadow-xl shadow-[#287580]/20 flex items-center justify-center space-x-2">
                <span>予約内容を送信する</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
              <p className="mt-4 text-center text-xs text-gray-400">※送信後、担当者より日程調整のご連絡をさせていただきます。</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Consultation;