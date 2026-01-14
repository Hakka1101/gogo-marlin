import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#f0f7f8] -z-10 hidden lg:block rounded-l-[100px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center py-16">
          <div className="z-10">
            <div className="animate-reveal mb-6">
              <span className="text-[#287580] font-bold tracking-widest text-xs uppercase border-l-4 border-[#287580] pl-4 inline-block">IT-Focused Employment Support</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8 text-gray-900 tracking-tight">
              <div className="animate-reveal mb-2">
                <span className="delay-100">デジタルの力で、</span>
              </div>
              <div className="animate-reveal">
                <span className="text-[#287580] delay-300">未来をデザイン。</span>
              </div>
            </h1>
            
            <div className="animate-reveal mb-10 overflow-hidden">
              <p className="text-lg text-gray-600 max-w-lg leading-relaxed font-medium delay-500 opacity-0 animate-fadeInUp">
                栃木県宇都宮市を拠点とするIT特化型の就労支援事業所。<br />
                Webデザイン、プログラミング、事務スキルなど、あなたの「やりたい」を形にするクリエイティブな場所です。
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-10 py-5 bg-[#287580] text-white font-bold rounded-3xl hover:bg-[#1e5a63] transition-all transform hover:-translate-y-1 shadow-xl shadow-[#287580]/20"
              >
                無料相談・見学
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link
                to="/service"
                className="inline-flex items-center justify-center px-10 py-5 border-2 border-[#287580] text-[#287580] font-bold rounded-3xl hover:bg-[#f0f7f8] transition-all shadow-lg"
              >
                サービス内容
              </Link>
            </div>
          </div>
          <div className="relative opacity-0 animate-fadeInUp" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <div className="aspect-square bg-gray-100 rounded-[50px] overflow-hidden rotate-2 transform hover:rotate-0 transition-transform duration-1000">
              <img
                src="images/女性がPCの前に座りこちらに向かって笑っている.jpg" 
                alt="スタッフ"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Concept Features */}
      <section className="py-32 bg-[#f0f7f8] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 opacity-0 animate-fadeInUp">
            <h2 className="text-4xl font-bold mb-6 tracking-tight">GOGOマーリンの3つの強み</h2>
            <p className="text-gray-500 font-medium">デジタルの知識は、あなたの世界を広げる強力な武器になります。</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <FeatureCard
              delay="0.1s"
              icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>}
              title="実践的なITカリキュラム"
              description="デザイン・開発・事務。現場で求められるスキルを、現役レベルの指導員が丁寧にサポートします。"
            />
            <FeatureCard
              delay="0.3s"
              icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>}
              title="安心の個別サポート"
              description="体調や心の状態に合わせ、無理のないペースで進められる個別支援計画を策定します。"
            />
            <FeatureCard
              delay="0.5s"
              icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>}
              title="自分らしく働ける空間"
              description="最新PCと使いやすいデスク。クリエイティブな発想が生まれる、快適なオフィス環境をご提供。"
            />
          </div>
        </div>
      </section>

      {/* Office Spaces Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10 order-2 lg:order-1 opacity-0 animate-fadeInUp">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold leading-tight text-gray-900">集中と対話が両立する、<br /><span className="text-[#287580]">洗練されたワークスペース</span></h2>
                <p className="text-gray-600 leading-loose text-lg font-medium">
                  パーテーション付きの個別デスクで集中して学習。
                  観葉植物が並ぶミーティングエリアでリラックスして意見交換。
                  あなたの感性を刺激する環境が整っています。
                </p>
              </div>
              <div className="rounded-[40px] overflow-hidden h-64 border-none shadow-none">
                <img 
                  src="images/事業所入り口.jpg" 
                  alt="事業所入り口" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <div className="rounded-[60px] overflow-hidden aspect-[4/5] border-none shadow-none">
                <img 
                  src="images/事業所内部入り口から見た写真.jpg" 
                  alt="オフィス内部" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#287580] rounded-[60px] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-cyan-900/40 opacity-0 animate-fadeInUp">
            <div className="absolute top-0 right-0 -mr-32 -mt-32 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-80 h-80 bg-black/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-10 leading-tight tracking-tight">未来への第一歩を、<br />ここから始めませんか？</h2>
              <p className="text-white/80 mb-14 text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                見学や体験利用、個別のご相談はいつでも大歓迎です。<br />
                まずはあなたの「やってみたい」を聞かせてください。
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link
                  to="/contact"
                  className="inline-block bg-white text-[#287580] px-12 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-xl transform hover:scale-105"
                >
                  見学・相談を予約する
                </Link>
                <Link
                  to="/contact"
                  className="inline-block border-2 border-white/40 text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
                >
                  お問い合わせ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string, delay?: string }> = ({ icon, title, description, delay }) => (
  <div 
    className="bg-white p-12 rounded-[40px] border border-gray-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group flex flex-col h-full opacity-0 animate-fadeInUp"
    style={{ animationDelay: delay, animationFillMode: 'forwards' }}
  >
    <div className="w-20 h-20 bg-[#f0f7f8] text-[#287580] rounded-[24px] flex items-center justify-center mb-8 group-hover:bg-[#287580] group-hover:text-white transition-all duration-500 shadow-sm">
      {icon}
    </div>
    <h3 className="text-2xl font-bold mb-6 text-gray-900">{title}</h3>
    <p className="text-gray-500 leading-loose font-medium flex-grow">{description}</p>
  </div>
);

export default Home;