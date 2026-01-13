
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 bg-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#f0f7f8] -z-10 hidden lg:block rounded-l-[100px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-[#287580] font-bold tracking-widest text-sm mb-4 uppercase">IT-Focused Employment Support</h2>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6 text-gray-900">
              デジタルの力で、<br />
              <span className="text-[#287580]">未来をデザインする。</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
              GOGOマーリンは、栃木県宇都宮市を拠点とするIT特化型の就労支援事業所です。
              Webデザイン、プログラミング、事務スキルなど、あなたの「やりたい」を形にするサポートを。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/service"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#287580] text-white font-bold rounded-full hover:bg-[#1e5a63] transition-all transform hover:-translate-y-1 shadow-lg"
              >
                サービスを見る
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#287580] text-[#287580] font-bold rounded-full hover:bg-gray-50 transition-all"
              >
                私たちについて
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gray-200 rounded-3xl overflow-hidden shadow-2xl rotate-3 transform hover:rotate-0 transition-transform duration-700">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000" // Smiling staff member photo (Photo 2)
                alt="Career Counselor"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Accent Elements */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden sm:block">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-[#287580] rounded-full flex items-center justify-center text-white font-bold">2023</div>
                <div>
                  <p className="text-xs text-gray-400">Since Opening</p>
                  <p className="font-bold text-[#287580]">宇都宮で歩み始める</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <section className="py-24 bg-[#f0f7f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">GOGOマーリンの3つの特徴</h2>
            <p className="text-gray-500">あなたの個性を活かしたデジタルキャリアを伴走支援</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>}
              title="実践的なITスキル"
              description="プログラミングからWebデザイン、データ入力まで。現場で活かせる実務重視のカリキュラムをご用意。"
            />
            <FeatureCard
              icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
              title="一人ひとりに合わせた環境"
              description="A型就労・就労移行支援、それぞれのステップに合わせた最適なサポート体制を構築しています。"
            />
            <FeatureCard
              icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>}
              title="クリエイティブな空間"
              description="スタイリッシュで落ち着いた室内で、集中して作業や学習に取り組めるデジタルワークスペース。"
            />
          </div>
        </div>
      </section>

      {/* Office Image Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                 <h2 className="text-3xl font-bold text-gray-900 leading-tight">集中できる最新のワークスペース</h2>
                 <p className="text-gray-600 leading-loose">
                    作業効率を考慮したパーテーション付きのデスク、最新のノートPC、そして目に優しい照明環境。
                    一歩足を踏み入れれば、そこはプロフェッショナルなITワークスペースです。
                 </p>
                 <img 
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000" // Meeting table with plants (Photo 3)
                    alt="Meeting Table" 
                    className="rounded-3xl shadow-lg w-full h-64 object-cover"
                 />
              </div>
              <div>
                 <img 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" // Office interior with white dividers (Photo 1)
                    alt="Office Workspaces" 
                    className="rounded-[40px] shadow-2xl w-full h-[500px] object-cover"
                 />
              </div>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#287580] rounded-[40px] p-8 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">まずは、お話を聞かせてください</h2>
              <p className="text-white/80 mb-10 text-lg">
                自分にどんな仕事が合っているか、どんなITスキルが学べるか。<br className="hidden md:block" />
                見学や体験は随時受け付けております。お気軽にお問い合わせください。
              </p>
              <Link
                to="/contact"
                className="inline-block bg-white text-[#287580] px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-xl"
              >
                見学・お問い合わせはこちら
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-white p-10 rounded-3xl border border-gray-100 hover:shadow-2xl hover:border-transparent transition-all group">
    <div className="w-16 h-16 bg-[#f0f7f8] text-[#287580] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#287580] group-hover:text-white transition-colors duration-500">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-gray-500 leading-relaxed">{description}</p>
  </div>
);

export default Home;
