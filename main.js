/**
 * GOGO MARLIN - Vanilla JS Engine
 * @version 1.0.0
 */

// --- Constants & State ---
const state = {
    fontSize: 'normal',
    currentPath: window.location.hash || '#/'
};

// --- Templates ---
const templates = {
    home: () => `
        <div class="overflow-hidden">
            <section class="relative min-h-[90vh] flex items-center bg-white">
                <div class="absolute top-0 right-0 w-1/2 h-full bg-[#f0f7f8] -z-10 hidden lg:block rounded-l-[100px]"></div>
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center py-16">
                    <div data-aos="fade-up">
                        <h2 class="text-[#287580] font-bold tracking-widest text-xs mb-6 uppercase border-l-4 border-[#287580] pl-4">IT-Focused Employment Support</h2>
                        <h1 class="text-5xl lg:text-7xl font-bold leading-tight mb-8 text-gray-900 tracking-tight">デジタルの力で、<br /><span class="text-[#287580]">未来をデザイン。</span></h1>
                        <p class="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed font-medium">栃木県宇都宮市を拠点とするIT特化型の就労支援事業所。<br />Webデザイン、プログラミング、事務スキルなど、あなたの「やりたい」を形にするクリエイティブな場所です。</p>
                        <div class="flex flex-col sm:flex-row gap-5">
                            <a href="#/contact" class="inline-flex items-center justify-center px-10 py-5 bg-[#287580] text-white font-bold rounded-3xl hover:bg-[#1e5a63] transition-all transform hover:-translate-y-1 shadow-xl shadow-[#287580]/20">無料相談・見学 <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg></a>
                            <a href="#/service" class="inline-flex items-center justify-center px-10 py-5 border-2 border-[#287580] text-[#287580] font-bold rounded-3xl hover:bg-[#f0f7f8] transition-all shadow-lg">サービス内容</a>
                        </div>
                    </div>
                    <div class="relative" data-aos="fade-left">
                        <div class="aspect-square bg-gray-100 rounded-[50px] overflow-hidden shadow-2xl">
                            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2" alt="スタッフ" class="w-full h-full object-cover">
                        </div>
                    </div>
                </div>
            </section>

            <section class="py-32 bg-[#f0f7f8] relative overflow-hidden">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div class="text-center mb-20">
                        <h2 class="text-4xl font-bold mb-6 tracking-tight">GOGOマーリンの3つの強み</h2>
                        <p class="text-gray-500 font-medium">デジタルの知識は、あなたの世界を広げる強力な武器になります。</p>
                    </div>
                    <div class="grid md:grid-cols-3 gap-10">
                        ${renderFeatureCard("実践的なITカリキュラム", "デザイン・開発・事務。現場で求められるスキルを、現役レベルの指導員が丁寧にサポートします。")}
                        ${renderFeatureCard("安心の個別サポート", "体調や心の状態に合わせ、無理のないペースで進められる個別支援計画を策定します。")}
                        ${renderFeatureCard("自分らしく働ける空間", "最新PCと使いやすいデスク。クリエイティブな発想が生まれる、快適なオフィス環境をご提供。")}
                    </div>
                </div>
            </section>

            <section class="py-32 bg-white">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="grid lg:grid-cols-2 gap-20 items-center">
                        <div class="space-y-10 order-2 lg:order-1" data-aos="fade-right">
                            <h2 class="text-4xl font-bold leading-tight text-gray-900">集中と対話が両立する、<br /><span class="text-[#287580]">洗練されたワークスペース</span></h2>
                            <p class="text-gray-600 leading-loose text-lg font-medium">パーテーション付きの個別デスクで集中して学習。観葉植物が並ぶミーティングエリアでリラックスして意見交換。あなたの感性を刺激する環境が整っています。</p>
                            <div class="rounded-[40px] overflow-hidden h-64">
                                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0" alt="ミーティングスペース" class="w-full h-full object-cover">
                            </div>
                        </div>
                        <div class="order-1 lg:order-2" data-aos="fade-left">
                            <div class="rounded-[60px] overflow-hidden aspect-[4/5]">
                                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c" alt="オフィス内部" class="w-full h-full object-cover">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    `,
    about: () => `
        <div class="pt-20 pb-32 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center py-16 mb-16" data-aos="zoom-in">
                    <h2 class="text-[#287580] font-bold tracking-[0.3em] text-xs mb-4 uppercase">About Us</h2>
                    <h1 class="text-5xl font-bold mb-6 text-gray-900">事業所について</h1>
                    <div class="w-24 h-1.5 bg-[#287580] mx-auto rounded-full"></div>
                </div>

                <div class="grid lg:grid-cols-2 gap-20 items-center mb-32">
                    <div class="order-2 lg:order-1 space-y-8" data-aos="fade-right">
                        <h2 class="text-4xl font-bold leading-tight text-gray-900">テクノロジーを通じて、<br />自分らしく輝ける<br />ステージを共創する。</h2>
                        <p class="text-gray-600 leading-relaxed text-xl font-medium">栃木県宇都宮市の「GOGOマーリン」は、ITスキルに特化した就労支援を通じて、障がいのある方の「働きたい」という想いを形にします。</p>
                        <p class="text-gray-500 leading-loose">デジタルの知識を習得することは、単なる技術習得ではありません。それは新しい表現方法を手に入れ、社会と繋がるための新しい「言葉」を得るようなものです。私たちは一人ひとりの感性を尊重し、共に学び、成長し続けられる場所でありたいと考えています。</p>
                    </div>
                    <div class="order-1 lg:order-2 relative" data-aos="fade-left">
                        <div class="rounded-[60px] overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1577412647305-991150c7d163" alt="事業所入口" class="w-full h-[550px] object-cover">
                        </div>
                    </div>
                </div>

                <div class="bg-[#f0f7f8] rounded-[50px] p-10 md:p-20 shadow-inner" data-aos="fade-up">
                    <h3 class="text-3xl font-bold text-gray-900 mb-12">事業所概要</h3>
                    <div class="bg-white rounded-[40px] overflow-hidden shadow-xl border border-white">
                        ${renderProfileRow("事業者名", "GOGOマーリン")}
                        ${renderProfileRow("運営会社", "sora合同会社")}
                        ${renderProfileRow("サービス種別", "障害福祉サービス事業（就労継続支援A型・就労移行支援）")}
                        ${renderProfileRow("所在地", "〒320-0816 栃木県宇都宮市京町5-17")}
                        ${renderProfileRow("事業内容", "障害者の日常生活及び社会生活を総合的に支援するための法律に基づく障害福祉サービス")}
                    </div>
                </div>
            </div>
        </div>
    `,
    service: () => `
        <div class="pt-32 pb-24 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16" data-aos="fade-up">
                <h1 class="text-4xl font-bold mb-4 text-gray-900">サービス内容</h1>
                <div class="w-20 h-1.5 bg-[#287580] mx-auto rounded-full"></div>
                <p class="mt-6 text-gray-500 max-w-2xl mx-auto">個々の希望や適性に合わせ、2つのサポートプログラムをご提供。未経験からでも安心して始められる学習カリキュラムが整っています。</p>
            </div>

            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 mb-24">
                <div class="bg-white p-10 rounded-[40px] border-2 border-[#f0f7f8] shadow-xl relative overflow-hidden group" data-aos="fade-right">
                    <div class="absolute top-0 right-0 bg-[#287580] text-white px-8 py-2 rounded-bl-3xl font-bold">就労継続支援A型</div>
                    <h3 class="text-2xl font-bold mb-6 text-gray-900">働く喜びを実感しながら<br /><span class="text-[#287580]">スキルアップ</span></h3>
                    <p class="text-gray-600 mb-8">雇用契約を結び、実際の業務に携わりながらお給料を受け取るサービスです。実践的なIT業務を通じて、自立した生活と職業スキルの定着を目指します。</p>
                    <ul class="space-y-4">
                        ${renderServiceListItem("Webバナー・ロゴ制作補助")}
                        ${renderServiceListItem("ECサイトのデータ登録・管理")}
                        ${renderServiceListItem("システム開発のデバッグ作業")}
                    </ul>
                </div>
                <div class="bg-[#f0f7f8] p-10 rounded-[40px] shadow-xl relative overflow-hidden group" data-aos="fade-left">
                    <div class="absolute top-0 right-0 bg-white text-[#287580] px-8 py-2 rounded-bl-3xl font-bold">就労移行支援</div>
                    <h3 class="text-2xl font-bold mb-6 text-gray-900">一般企業への就職を<br /><span class="text-[#287580]">トータルサポート</span></h3>
                    <p class="text-gray-600 mb-8">一般企業への就職を目指す方に、スキルの習得から就職活動、定着支援までをワンストップで。あなたが希望するキャリアパスを描くためのお手伝いをします。</p>
                    <ul class="space-y-4">
                        ${renderServiceListItem("Adobeツールの操作習得")}
                        ${renderServiceListItem("プログラミング基礎学習")}
                        ${renderServiceListItem("面接対策・履歴書作成支援")}
                    </ul>
                </div>
            </div>

            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#287580] rounded-[60px] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl" data-aos="fade-up">
                <h2 class="text-3xl font-bold text-center mb-16 relative z-10">学べるITスキル</h2>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
                    ${renderSkillCard("Web Design", "Figma / Ps / Ai", "https://img.icons8.com/color/96/figma.png")}
                    ${renderSkillCard("Developing", "HTML / CSS / JS", "https://img.icons8.com/color/96/source-code.png")}
                    ${renderSkillCard("Office", "Excel / GAS / Word", "https://img.icons8.com/color/96/microsoft-excel-2019.png")}
                    ${renderSkillCard("Game Unity", "Unity / Blender", "https://img.icons8.com/ios-filled/100/ffffff/unity.png")}
                </div>
            </div>
        </div>
    `,
    contact: () => `
        <div class="pt-24 pb-24 bg-white">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16" data-aos="fade-up">
                    <h2 class="text-[#287580] font-bold tracking-widest text-sm mb-4 uppercase">Contact & Booking</h2>
                    <h1 class="text-4xl font-bold mb-4 text-gray-900">お問い合わせ・無料相談予約</h1>
                    <div class="w-20 h-1.5 bg-[#287580] mx-auto rounded-full"></div>
                    <p class="mt-8 text-gray-600 leading-relaxed">事業所の雰囲気を直接見てみたい、具体的なカリキュラムを知りたいなど、些細なことでも構いません。まずはお気軽にお問い合わせください。</p>
                </div>

                <div class="bg-[#f0f7f8] rounded-[40px] p-8 md:p-12 shadow-sm border border-[#287580]/10" data-aos="fade-up">
                    <form class="space-y-8" id="contact-form">
                        <div class="grid md:grid-cols-2 gap-8">
                            <div class="space-y-2">
                                <label class="text-sm font-bold text-gray-700">お名前 <span class="text-red-500 text-xs">*</span></label>
                                <input type="text" class="w-full px-5 py-4 bg-white border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#287580] focus:outline-none transition-all shadow-sm" placeholder="山田 太郎" required />
                            </div>
                            <div class="space-y-2">
                                <label class="text-sm font-bold text-gray-700">ふりがな</label>
                                <input type="text" class="w-full px-5 py-4 bg-white border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#287580] focus:outline-none transition-all shadow-sm" placeholder="やまだ たろう" />
                            </div>
                        </div>
                        <div class="grid md:grid-cols-2 gap-8">
                            <div class="space-y-2">
                                <label class="text-sm font-bold text-gray-700">メールアドレス <span class="text-red-500 text-xs">*</span></label>
                                <input type="email" class="w-full px-5 py-4 bg-white border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#287580] focus:outline-none transition-all shadow-sm" placeholder="example@mail.com" required />
                            </div>
                            <div class="space-y-2">
                                <label class="text-sm font-bold text-gray-700">電話番号</label>
                                <input type="tel" class="w-full px-5 py-4 bg-white border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#287580] focus:outline-none transition-all shadow-sm" placeholder="000-0000-0000" />
                            </div>
                        </div>
                        <div class="space-y-4">
                            <label class="text-sm font-bold text-gray-700">ご希望のサービス項目</label>
                            <div class="flex flex-wrap gap-4">
                                ${renderCheckbox("就労継続支援A型")}
                                ${renderCheckbox("就労移行支援")}
                                ${renderCheckbox("未定・相談したい")}
                            </div>
                        </div>
                        <div class="space-y-2">
                            <label class="text-sm font-bold text-gray-700">メッセージ・ご質問</label>
                            <textarea rows={5} class="w-full px-5 py-4 bg-white border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#287580] focus:outline-none shadow-sm" placeholder="現在の状況や気になることなど、ご自由にご記入ください。"></textarea>
                        </div>
                        <div class="pt-4">
                            <button type="submit" class="w-full py-5 bg-[#287580] text-white font-bold rounded-2xl hover:bg-[#1e5a63] transition-all transform hover:shadow-xl flex items-center justify-center space-x-2">
                                <span>送信する</span>
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                            </button>
                        </div>
                    </form>
                </div>

                <div class="mt-20 h-[450px] bg-gray-100 rounded-[50px] overflow-hidden relative shadow-inner border border-gray-200" data-aos="zoom-in">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3205.1554619736853!2d139.880663!3d36.550304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601f67727195d233%3A0x77d016c96b797177!2z44CSMzIwLTA4MTYg5qCD5pyo55yM5a6H6YO95a6u5biC5Lqs55S677yV4oiS77yR77yX!5e0!3m2!1sja!2sjp!4v1715600000000!5m2!1sja!2sjp" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    `
};

// --- Helper Components ---
function renderFeatureCard(title, desc) {
    return `<div class="bg-white p-12 rounded-[40px] border border-gray-100 shadow-xl hover:-translate-y-2 transition-all duration-500 group flex flex-col h-full" data-aos="fade-up">
        <div class="w-20 h-20 bg-[#f0f7f8] text-[#287580] rounded-[24px] flex items-center justify-center mb-8 group-hover:bg-[#287580] group-hover:text-white transition-all duration-500 shadow-sm">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" /></svg>
        </div>
        <h3 class="text-2xl font-bold mb-6 text-gray-900">${title}</h3>
        <p class="text-gray-500 leading-loose font-medium flex-grow">${desc}</p>
    </div>`;
}

function renderProfileRow(label, value) {
    return `<div class="grid md:grid-cols-4 py-8 px-8 md:px-12 border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
        <div class="md:col-span-1 font-bold text-[#287580] mb-3 md:mb-0 text-sm tracking-wider">${label}</div>
        <div class="md:col-span-3 text-gray-700 font-medium leading-loose">${value}</div>
    </div>`;
}

function renderServiceListItem(text) {
    return `<li class="flex items-center space-x-3 text-gray-700">
        <span class="w-6 h-6 bg-[#287580] text-white rounded-full flex items-center justify-center flex-shrink-0">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" /></svg>
        </span>
        <span class="font-medium">${text}</span>
    </li>`;
}

function renderSkillCard(title, desc, iconUrl) {
    return `<div class="text-center group">
        <div class="skill-icon-wrap mb-4 mx-auto group-hover:scale-110 transition-transform">
            <img src="${iconUrl}" alt="${title}">
        </div>
        <h4 class="text-xl font-bold mb-2 tracking-tight">${title}</h4>
        <p class="text-white/60 text-sm font-light">${desc}</p>
    </div>`;
}

function renderCheckbox(label) {
    return `<label class="flex items-center space-x-2 bg-white px-5 py-3 rounded-xl border border-gray-100 cursor-pointer hover:bg-gray-50">
        <input type="checkbox" class="w-4 h-4 text-[#287580] rounded" />
        <span class="text-sm font-medium">${label}</span>
    </label>`;
}

// --- Router Engine ---
function router() {
    const path = window.location.hash.slice(1) || '/';
    const main = document.querySelector('#main-content');
    
    // Clear and hide
    main.style.opacity = '0';
    
    setTimeout(() => {
        if (path === '/') main.innerHTML = templates.home();
        else if (path === '/about') main.innerHTML = templates.about();
        else if (path === '/service') main.innerHTML = templates.service();
        else if (path === '/contact') main.innerHTML = templates.contact();
        
        main.style.opacity = '1';
        AOS.refresh();
        window.scrollTo(0, 0);
    }, 100);

    // Active link styling
    document.querySelectorAll('[data-role="desktop-menu"] a').forEach(a => {
        a.classList.remove('text-[#287580]', 'relative', 'after:content-[""]', 'after:absolute', 'after:-bottom-1', 'after:left-0', 'after:w-full', 'after:h-0.5', 'after:bg-[#287580]');
        if (a.getAttribute('href') === '#' + path) {
            a.classList.add('text-[#287580]');
        }
    });
}

// --- Event Listeners ---
window.addEventListener('hashchange', router);
window.addEventListener('load', () => {
    router();
    AOS.init({ once: true });
});

// Font control logic
document.querySelector('[data-role="font-controls"]').addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (!btn) return;
    
    const size = btn.dataset.size;
    let scale = '1';
    if (size === 'large') scale = '1.2';
    if (size === 'huge') scale = '1.4';
    
    document.documentElement.style.setProperty('--font-scale', scale);
    
    // UI Feedback
    document.querySelectorAll('[data-role="font-controls"] button').forEach(b => {
        b.classList.remove('bg-[#287580]', 'text-white');
        b.classList.add('text-gray-500');
    });
    btn.classList.add('bg-[#287580]', 'text-white');
    btn.classList.remove('text-gray-500');
});

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('[data-role="mobile-menu-toggle"]');
const mobileMenu = document.querySelector('[data-role="mobile-menu"]');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu on click
mobileMenu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        mobileMenu.classList.add('hidden');
    }
});