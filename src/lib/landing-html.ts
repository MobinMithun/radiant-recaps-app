// Markup ported from the provided design.
export const landingBodyClass = "bg-[#FAFBFD] text-slate-900 antialiased selection:bg-brand-light selection:text-brand-dark relative overflow-x-hidden";
export const landingBodyStyle = null;

export const landingHtml = `
<!-- Ambient Flowing Iridescent Fluid Blobs -->
<div class="aurora-bg">
<div class="aurora-blob-1"></div>
<div class="aurora-blob-2"></div>
<div class="aurora-blob-3"></div>
</div>
<!-- Top Navigation (Floating Liquid Glass Bar) -->
<header class="fixed top-0 w-full z-50 transition-all duration-300">
<div class="max-w-5xl mx-auto px-4 sm:px-6 pt-3 pb-2">
<div class="h-20 px-6 sm:px-8 flex items-center justify-between gap-4 rounded-full liquid-glass" style="min-height: 86px; border: 1.5px solid rgba(255, 255, 255, 0.85); box-shadow: 0 10px 30px -10px rgba(2, 132, 199, 0.1), inset 0 1.5px 2px 0 rgba(255, 255, 255, 0.95);">
<div class="flex items-center gap-3">
<a class="flex items-center transition-transform hover:scale-[1.02] active:scale-95" href="#"><img alt="UrShop" class="h-10 w-auto object-contain drop-shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1BVPOLuPQkCszQEiZdS48vseiWBWWiECEmVcuxm18A4JQLZee7AA2TyTilmDkFjFCSjUf4culb7QFfPOMhAPJIgZ579RYKM7OCS8MQRwUIFKP0LWBaNgpvDAmfLBDj91T7fQESsAKkLfLDJ_Rr8-lOaBm7uuLzqXSSrjGe7_nOvPO8xfhtkHjNBfmPGHZFbbSKnUN61cFGi5efsuyC7oPAC0OHt7DpWIi8Wpo_OIP8FJcV4X7-aYF9b31aiRvekBPrUI"></a>
</div>
<div class="flex items-center gap-4 sm:gap-6">
<a class="text-sm sm:text-base font-bold text-slate-700 hover:text-slate-900 transition-colors px-3 py-1.5 rounded-full hover:bg-white/50" href="#">Log in</a>
<a class="inline-flex items-center justify-center px-7 py-2.5 rounded-full text-white font-bold text-sm sm:text-base transition-all duration-300 active:scale-95 hover:shadow-lg border" href="#" style="background: linear-gradient(135deg, rgba(8, 192, 216, 0.96), rgba(2, 132, 199, 0.96)); backdrop-filter: blur(14px); border-color: rgba(255, 255, 255, 0.65); box-shadow: 0 8px 24px -4px rgba(2, 132, 199, 0.4), inset 0 1.5px 2px rgba(255, 255, 255, 0.75);">
          Sign up
        </a>
</div>
</div>
</div>
</header>
<main class="w-full pt-28 relative z-10" style="padding-top: 116px;">
<!-- 1. HERO SECTION (Liquid Glass, Crisp Highlights, Jewel Badges) -->
<section class="relative w-full pt-16 pb-28 px-6 lg:px-12 overflow-hidden">
<div class="max-w-4xl mx-auto relative flex flex-col items-center text-center">
<!-- Left Floating Liquid Jewel Badge -->
<div class="hidden xl:flex absolute top-10 -left-12 items-center gap-4 px-6 py-3.5 rounded-full transition-all duration-300 hover:rotate-0 hover:scale-105 pointer-events-none z-10" style="transform: rotate(-3deg); background: rgba(255, 255, 255, 0.76); backdrop-filter: blur(24px) saturate(180%); border: 1.5px solid rgba(255, 255, 255, 0.95); box-shadow: 0 20px 45px -12px rgba(2, 132, 199, 0.16), inset 0 1.5px 2px rgba(255, 255, 255, 1);">
<div class="relative shrink-0">
<div class="w-12 h-12 rounded-full bg-[#E0F2FE] flex items-center justify-center overflow-hidden ring-2 ring-white shadow-inner"><img alt="Apparel store avatar" class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=120&amp;h=120&amp;q=80"></div>
<div class="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-white shadow-sm flex items-center justify-center text-xs ring-2 ring-white">🛍️</div>
</div>
<div class="text-left">
<p class="text-[11px] font-bold tracking-wider text-slate-500 uppercase font-sans">APPAREL BRAND</p>
<p class="text-base font-extrabold text-slate-900 tracking-tight leading-snug font-sans">৳34,200 <span class="text-xs font-medium text-slate-500 font-sans">earned</span></p>
</div>
</div>
<!-- Right Floating Liquid Jewel Badge -->
<div class="hidden xl:flex absolute top-10 -right-12 items-center gap-4 px-6 py-3.5 rounded-full transition-all duration-300 hover:rotate-0 hover:scale-105 pointer-events-none z-10" style="transform: rotate(3deg); background: rgba(255, 255, 255, 0.76); backdrop-filter: blur(24px) saturate(180%); border: 1.5px solid rgba(255, 255, 255, 0.95); box-shadow: 0 20px 45px -12px rgba(2, 132, 199, 0.16), inset 0 1.5px 2px rgba(255, 255, 255, 1);">
<div class="relative shrink-0">
<div class="w-12 h-12 rounded-full bg-[#FEF3C7] flex items-center justify-center overflow-hidden ring-2 ring-white shadow-inner"><img alt="Digital creator avatar" class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=120&amp;h=120&amp;q=80"></div>
<div class="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-white shadow-sm flex items-center justify-center text-xs ring-2 ring-white">💻</div>
</div>
<div class="text-left">
<p class="text-[11px] font-bold tracking-wider text-slate-500 uppercase font-sans">DIGITAL CREATOR</p>
<p class="text-base font-extrabold text-slate-900 tracking-tight leading-snug font-sans">৳18,650 <span class="text-xs font-medium text-slate-500 font-sans">earned</span></p>
</div>
</div>
<!-- Eyebrow Pill -->
<div class="inline-flex items-center gap-3 px-4 py-1.5 rounded-full liquid-pill mb-8">
<div class="flex -space-x-2">
<img alt="User" class="w-5 h-5 rounded-full ring-2 ring-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMJpNYMuaYpatsD0biicHx9togplrovnLOa57PIJybNzL26QP4-IW8Nl2JQvbYbm2Q6chRrvJSBJfuchOXlZ96t1ACE1rGG8vwc-jeRMkkz_zEO4rXJsp73TaPflw1MQwYU0OLv9WcEdRXe43ZHzym5cyfSoz1hmxwB21KJ7WkJwMF4XSAP-N44Nyd6qpfZAEDH7G1eq5dGZYDPPecLWR9a_K-8IdAGJgdkibppDCydkHKKmRzlQj90Q">
<img alt="User" class="w-5 h-5 rounded-full ring-2 ring-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuApBy2jtuFl6kIY82veEL21lPd9IVyqi3JK6nmpeg_RyQ99kmEmR91n--KRz1oQBIKd-t7p4Fq_xQNLji6UGbVKTimtkH-LFSrd0BczCWgjaw82uJL8bO9hGVxuHV2MtVBH6piTRz_SUdVu7NPP27ISpVe9vypH8rE2kyzrGBHY8K5_0-s1_m93LCbfBtDclnfNGXAxuUC40JJ0IE9PjHqQZ-xPAwWTctSTqdtag2IBd26SiBo82VJXqA">
<img alt="User" class="w-5 h-5 rounded-full ring-2 ring-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWyy_m_bln11bZ1InmNrvClJx3X8MNApG9N1HEY8y50csm4zBbwS3iFK2W-c1RXJlqritPBk9H5qvZpHnh2bAcriwakbe33IrKpiRA63_pAyc6vEviNVJfg96nnUMikExeEAzLGrJE0tm1QoYkYpsHUHpKtg2qEI5tcrokClUWg4n9fW66n4Y9Z16fvjDjuIj88YsAWSi2UXdQqNf5VEDfPWBKLFnxd2Wf1MGIiOXVYT6m_Sj6ODcJPQ">
</div>
<span class="text-xs font-semibold text-slate-700 tracking-tight">Launch your online shop in under 5 minutes</span>
</div>
<!-- Hero Title -->
<h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] max-w-4xl mb-6 font-sans">
    Start selling<div><span class="cyan-underline relative inline-block px-1">products online</span></div>
</h1>
<p class="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
    The simplest way for online shops to manage orders and delivery.
  </p>
<!-- Sleek Liquid Capsule Input Box -->
<div class="w-full rounded-full p-2 border mb-10 max-w-md mx-auto transition-all duration-300 hover:shadow-2xl" style="background: linear-gradient(135deg, rgba(255, 255, 255, 0.88) 0%, rgba(240, 249, 255, 0.75) 50%, rgba(224, 242, 254, 0.55) 100%); backdrop-filter: blur(24px) saturate(190%); border: 1.5px solid rgba(255, 255, 255, 0.95); box-shadow: 0 16px 36px -8px rgba(2, 132, 199, 0.15), 0 2px 6px 0 rgba(0, 0, 0, 0.04), inset 0 1.5px 2px rgba(255, 255, 255, 1), inset 0 -2px 6px rgba(8, 192, 216, 0.08);">
<form class="flex flex-col sm:flex-row items-center justify-between gap-2 pl-4 pr-1" onsubmit="event.preventDefault();">
<div class="flex items-center w-full sm:w-auto px-2 py-2.5 bg-transparent rounded-full">
<div class="flex items-center justify-start gap-1 select-none font-sans text-sm">
<span class="text-slate-400 font-medium">your brand name</span>
<span class="text-brand font-bold tracking-tight">.urshop.app</span>
</div>
</div>
<button class="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-white font-bold text-sm active:scale-95 transition-all border shadow-sm cursor-pointer" style="background: linear-gradient(135deg, rgba(8, 192, 216, 0.95), rgba(2, 132, 199, 0.95)); backdrop-filter: blur(14px); border-color: rgba(255, 255, 255, 0.6); box-shadow: 0 8px 20px -4px rgba(2, 132, 199, 0.4), inset 0 1.5px 2px rgba(255, 255, 255, 0.7);">
<span class="">Start my Shop</span>
</button>
</form>
</div>
</div>
</section>
<!-- 2. HOW IT WORKS SECTION (Liquid Glass Step Cards) -->
<section class="py-24 px-6 lg:px-12 relative" id="how-it-works">
<!-- Subtle architectural grid background -->
<div class="absolute inset-0 pointer-events-none opacity-30" style="background-size: 40px 40px; background-image: linear-gradient(to right, rgba(226, 232, 240, 0.6) 1px, transparent 1px), linear-gradient(rgba(226, 232, 240, 0.6) 1px, transparent 1px);"></div>
<div class="mx-auto max-w-5xl relative z-10">
<div class="text-center max-w-2xl mx-auto mb-16">
<span class="inline-flex items-center justify-center px-6 py-2 rounded-full font-bold text-[12px] tracking-[0.18em] uppercase select-none liquid-pill text-slate-600 mb-2">HOW IT WORKS</span>
<h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-4">From idea to live shop<br>in 3 simple steps.</h2>
</div>
<!-- 3 Steps Grid with Connecting Stem Lines -->
<div class="relative">
<!-- Horizontal Connector Guide Line (Desktop) -->
<div class="hidden md:block absolute -top-8 left-[16%] right-[16%] h-[1px] bg-slate-300/80 z-0"></div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
<!-- Step 01 Card -->
<div class="relative flex flex-col pt-6 md:pt-8">
<div class="hidden md:flex flex-col items-center absolute -top-8 left-1/2 -translate-x-1/2 h-8 pointer-events-none z-20">
<div class="w-[1px] h-full bg-slate-300"></div>
<div class="w-2.5 h-2.5 rounded-full bg-white border-2 border-slate-300 -mt-1 shadow-sm"></div>
</div>
<div class="liquid-glass-card rounded-3xl p-8 flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-glass-hover" style="border-radius: 28px;">
<div>
<div class="flex items-center justify-between mb-8">
<div class="relative">
<div class="w-14 h-14 rounded-2xl bg-[#FFD000] flex items-center justify-center overflow-hidden shadow-sm">
<span class="text-2xl">⚡</span>
</div>
<div class="absolute -bottom-1 -right-1.5 w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center border border-slate-100 text-xs text-amber-600 ring-2 ring-white">
                    ✍️
                  </div>
</div>
<span class="text-6xl font-extrabold tracking-tight select-none text-slate-200/80 font-sans">01</span>
</div>
<h3 class="text-xl font-bold text-slate-900 mb-3 font-sans">Create Your Shop</h3>
<p class="text-slate-500 text-sm leading-relaxed font-normal">Claim your unique shop name</p>
<div><span class="" style="font-size: 0.875rem;">(<b>myjersey</b>.urshop.app) and customize your clean checkout page in 60 seconds.</span></div>
</div>
</div>
</div>
<!-- Step 02 Card -->
<div class="relative flex flex-col pt-6 md:pt-8">
<div class="hidden md:flex flex-col items-center absolute -top-8 left-1/2 -translate-x-1/2 h-8 pointer-events-none z-20">
<div class="w-[1px] h-full bg-slate-300"></div>
<div class="w-2.5 h-2.5 rounded-full bg-white border-2 border-slate-300 -mt-1 shadow-sm"></div>
</div>
<div class="liquid-glass-card rounded-3xl p-8 flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-glass-hover" style="border-radius: 28px;">
<div>
<div class="flex items-center justify-between mb-8">
<div class="relative">
<div class="w-14 h-14 rounded-2xl bg-[#D8ECFE] flex items-center justify-center overflow-hidden shadow-sm">
<span class="text-2xl">📦</span>
</div>
<div class="absolute -bottom-1 -right-1.5 w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center border border-slate-100 text-xs text-brand ring-2 ring-white">
                    🔗
                  </div>
</div>
<span class="text-6xl font-extrabold tracking-tight select-none text-slate-200/80 font-sans">02</span>
</div>
<h3 class="text-xl font-bold text-slate-900 mb-3 font-sans">Add Your Products</h3>
<p class="text-slate-500 text-sm leading-relaxed font-normal">List your physical items or upload digital files with custom pricing, photos, and instant stock inventory tracking.</p>
</div>
</div>
</div>
<!-- Step 03 Card -->
<div class="relative flex flex-col pt-6 md:pt-8">
<div class="hidden md:flex flex-col items-center absolute -top-8 left-1/2 -translate-x-1/2 h-8 pointer-events-none z-20">
<div class="w-[1px] h-full bg-slate-300"></div>
<div class="w-2.5 h-2.5 rounded-full bg-white border-2 border-slate-300 -mt-1 shadow-sm"></div>
</div>
<div class="liquid-glass-card rounded-3xl p-8 flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-glass-hover" style="border-radius: 28px;">
<div>
<div class="flex items-center justify-between mb-8">
<div class="relative">
<div class="w-14 h-14 rounded-2xl bg-[#D5F5E3] flex items-center justify-center overflow-hidden shadow-sm">
<span class="text-2xl">🚀</span>
</div>
<div class="absolute -bottom-1 -right-1.5 w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center border border-slate-100 text-xs text-emerald-600 ring-2 ring-white">
                    💸
                  </div>
</div>
<span class="text-6xl font-extrabold tracking-tight select-none text-slate-200/80 font-sans">03</span>
</div>
<h3 class="text-xl font-bold text-slate-900 mb-3 font-sans">Deliver and Earn</h3>
<p class="text-slate-500 text-sm leading-relaxed font-normal">Dispatch orders automatically via directly into Steadfast, Pathao, or RedX with live SMS tracking.</p>
</div>
</div>
</div>
</div>
</div>
<!-- Closing Promise Line -->
<div class="mt-16 text-center">
<p class="text-base text-slate-600 font-medium">
        Skip the complex setup. <span class="text-slate-900 font-semibold">We handle the rest.</span>
</p>
</div>
</div>
</section>
<!-- 3. FEATURE DEEP-DIVES (Liquid Glass Video & Syllabus Cards) -->
<section class="py-24 px-6 lg:px-12 relative" id="features">
<div class="mx-auto space-y-24 max-w-5xl">
<div class="w-full flex flex-col items-center pt-4 pb-4">
<!-- Eyebrow + Headline Header -->
<div class="text-center max-w-3xl mx-auto mb-12">
<span class="inline-flex items-center justify-center px-5 py-1.5 rounded-full font-bold text-[12px] tracking-[0.18em] uppercase select-none mb-4 liquid-pill text-slate-600">SHOP SETUP GUIDE</span>
<h2 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-5 font-sans">
<p data-pm-slice="1 1 [&quot;bullet_list&quot;,{},&quot;list_item&quot;,{}]" class="">Set up your shop</p>
<p data-pm-slice="1 1 [&quot;bullet_list&quot;,{},&quot;list_item&quot;,{}]" class="">in 5 minutes</p>
</h2>
<p class="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">No complex plugins. Add your products, set your price, and manage the checkout, payouts, and deliveries.
    </p>
</div>
<!-- Two-Column Interactive Video Player & Playlist Card UI -->
<div class="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
<!-- Left Column: Video Player Card (lg:col-span-8) -->
<div class="lg:col-span-8 flex flex-col">
<div class="liquid-glass-card rounded-3xl p-4 sm:p-6 relative" style="border-radius: 28px;">
<!-- Video Viewport -->
<div class="relative w-full rounded-2xl overflow-hidden bg-slate-900 aspect-video flex items-center justify-center group select-none shadow-inner">
<img alt="Course Video Lesson Preview" class="w-full h-full object-cover rounded-2xl" src="https://lh3.googleusercontent.com/aida/AEtjO1XH-Yc7qhIkKF8fVxbboxGgjacbQqsIfKom4bbk0S-9nbJUggCp6zeHMsgRxVW-9_WBgQEpUA71pAH5iwf7T7nU9Inw1S8mZpVubE2iln4ftWciEmMvrxoBlaE2FCKpyA-DTIPTo3_y0EJ1H7_Kfy3iaEN32HbyzQmR4QVCHK6S9w8rrnUreJRLYI15kxJ_vyskiQR3rfSSzNQ6_Gf44caZ0tseDHl6OFKoTtdKdmM1pvPPakoh0F03fVw">
<div class="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-slate-950/30 pointer-events-none"></div>
<div class="absolute top-4 right-4 z-10 flex items-center gap-2">
<span class="px-2 py-0.5 rounded bg-white/20 backdrop-blur-md text-white text-[10px] font-bold tracking-wider">HD</span>
<div class="w-6 h-6 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white/70 hover:text-white transition-colors text-xs cursor-pointer">✕</div>
</div>
<!-- Centered Play Icon with Frosted Halo Ring -->
<div class="absolute inset-0 flex items-center justify-center z-10">
<button aria-label="Play Video" class="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/95 backdrop-blur-md shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 text-slate-900 cursor-pointer ring-8 ring-white/30 hover:ring-white/50" style="box-shadow: 0 16px 36px rgba(0, 0, 0, 0.35);">
<svg class="w-6 h-6 sm:w-7 sm:h-7 text-slate-900 fill-current translate-x-0.5" viewBox="0 0 24 24"><path d="M8 5.14v13.72a1 1 0 0 0 1.52.85l11-6.86a1 1 0 0 0 0-1.7l-11-6.86A1 1 0 0 0 8 5.14z"></path></svg>
</button>
</div>
<div class="absolute bottom-3 left-4 right-4 z-10 flex items-center justify-between text-xs text-white/90">
<span class="font-semibold tracking-wide flex items-center gap-1.5">Lesson 3 · Setting Up bKash &amp; Nagad Payouts</span>
<span class="font-mono text-white/80 bg-black/50 px-2 py-0.5 rounded text-[11px]">03:10</span>
</div>
</div>
<!-- Video Scrub Bar -->
<div class="mt-4 mb-2">
<div class="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden flex">
<div class="h-full w-[45%] rounded-full" style="background: linear-gradient(90deg, rgb(2, 132, 199) 0%, rgb(0, 180, 216) 100%);"></div>
<div class="bg-slate-200 h-full w-[55%]"></div>
</div>
</div>
<!-- Video Title & Presenter Info -->
<div class="pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<h3 class="text-xl font-bold text-slate-900 tracking-tight font-sans">
              UrShop Masterclass: Launch Your Shop in 5 Minutes
            </h3>
<div class="flex items-center gap-3 mt-2">
<img alt="Tanvir Ahmed" class="w-9 h-9 rounded-full object-cover border border-slate-200" src="https://lh3.googleusercontent.com/aida/AEtjO1WBlZMvS_LN-uQy-BU5T69epzwWqEOcldnW4Ksn3tR0pZhmm0LKUcgaDQ8FQL4x_U71S0SCtn1WwKxw-kN4KDidXtVs0nIreRxrSJqOmOXOc-cFcCPAa4_uJ843wQFMqJYae2edrGAqakRKzoII7tSDI40K4lciQSYxNjOZpoEcHVT_614e21e8N799of8LVk8iaINOZe2p-ktmB6ny0BwBYw_ZdTUWJpZ2FXCNKO9HFOsXp0U9PKanjfe7">
<div>
<p class="text-xs font-bold text-slate-900">Tanvir Ahmed</p>
<p class="text-[11px] text-slate-500">UrShop Onboarding Specialist</p>
</div>
</div>
</div>
</div>
</div>
</div>
<!-- Right Column: Course Content Playlist Panel (lg:col-span-4) -->
<div class="lg:col-span-4 flex flex-col">
<div class="liquid-glass-card rounded-3xl p-6 flex flex-col justify-between h-full" style="border-radius: 28px;">
<div>
<!-- Playlist Header -->
<div class="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
<h4 class="text-base font-bold text-slate-900 tracking-tight font-sans">Course content</h4>
<div class="flex items-center gap-3 text-xs text-slate-500 font-medium">
<span class="flex items-center gap-1">
<span class="material-symbols-outlined text-sm">menu_book</span> 5
              </span>
<span class="flex items-center gap-1">
<span class="material-symbols-outlined text-sm">schedule</span> 15m
              </span>
</div>
</div>
<!-- Playlist Items -->
<div class="space-y-2.5">
<!-- Item 1 (Completed) -->
<div class="w-full flex items-center justify-between p-3 rounded-xl bg-white/60 border border-slate-100 hover:border-slate-200 transition-all cursor-pointer group">
<div class="flex items-center gap-3 pr-2">
<span class="material-symbols-outlined text-emerald-600 text-lg shrink-0">check_circle</span>
<span class="text-xs font-semibold text-slate-800 leading-snug group-hover:text-brand transition-colors">01 Claiming Shop Handle</span>
</div>
<span class="text-[11px] font-mono text-slate-400 shrink-0">02:15</span>
</div>
<!-- Item 2 (Completed) -->
<div class="w-full flex items-center justify-between p-3 rounded-xl bg-white/60 border border-slate-100 hover:border-slate-200 transition-all cursor-pointer group">
<div class="flex items-center gap-3 pr-2">
<span class="material-symbols-outlined text-emerald-600 text-lg shrink-0">check_circle</span>
<span class="text-xs font-semibold text-slate-800 leading-snug group-hover:text-brand transition-colors">02 Adding Physical &amp; Digital Items</span>
</div>
<span class="text-[11px] font-mono text-slate-400 shrink-0">03:40</span>
</div>
<!-- Item 3 (Active / Current Playing) -->
<div class="w-full flex items-center justify-between p-3 rounded-xl bg-[#E0F2FE]/80 border border-[#7DD3FC] shadow-sm cursor-pointer">
<div class="flex items-center gap-3 pr-2">
<div class="w-5 h-5 rounded-full bg-brand flex items-center justify-center shrink-0 shadow-sm" style="background: #0284C7;">
<svg class="w-2.5 h-2.5 fill-current text-white" style="margin-left: 1.5px;" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg>
</div>
<span class="text-xs font-bold text-slate-900 leading-snug">03 Connecting bKash &amp; Nagad Payouts</span>
</div>
<span class="text-[11px] font-mono font-bold text-brand shrink-0" style="color: #0284C7;">03:10</span>
</div>
<!-- Item 4 (Locked) -->
<div class="w-full flex items-center justify-between p-3 rounded-xl bg-white/40 border border-transparent hover:border-slate-100 transition-all cursor-pointer group">
<div class="flex items-center gap-3 pr-2">
<span class="material-symbols-outlined text-slate-400 text-base shrink-0">lock</span>
<span class="text-xs font-medium text-slate-500 leading-snug group-hover:text-slate-700 transition-colors">04 Automating Pathao &amp; Steadfast</span>
</div>
<span class="text-[11px] font-mono text-slate-400 shrink-0">04:05</span>
</div>
<!-- Item 5 (Locked) -->
<div class="w-full flex items-center justify-between p-3 rounded-xl bg-white/40 border border-transparent hover:border-slate-100 transition-all cursor-pointer group">
<div class="flex items-center gap-3 pr-2">
<span class="material-symbols-outlined text-slate-400 text-base shrink-0">lock</span>
<span class="text-xs font-medium text-slate-500 leading-snug group-hover:text-slate-700 transition-colors">05 Sharing Shop Link &amp; Bio</span>
</div>
<span class="text-[11px] font-mono text-slate-400 shrink-0">02:10</span>
</div>
</div>
</div>
<div class="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs"></div>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- 4. PLATFORM INTEGRATIONS (Liquid Glass Pedestals) -->
<section class="py-20 px-6 lg:px-12 relative" id="integrations">
<div class="mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 max-w-5xl">
<div class="max-w-md text-center lg:text-left">
<span class="inline-flex items-center justify-center px-5 py-1.5 rounded-full font-bold text-[12px] tracking-[0.18em] uppercase select-none mb-2 liquid-pill text-slate-600">NATIVE BANGLADESH INTEGRATIONS</span>
<h3 class="text-2xl font-bold text-slate-900 mt-2 mb-2">Plugged into the tools<div class="">your customers trust</div></h3>
<p class="text-slate-600 text-sm">Direct API connections with zero middlemen or manual approval delays.</p>
</div>
<div class="grid grid-cols-2 sm:grid-cols-5 gap-4 w-full lg:w-auto"><div class="liquid-pill px-5 py-3.5 flex items-center justify-center h-16 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-glass-hover"><img alt="bKash" class="h-8 w-auto max-w-[100px] object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQjdbVvfyjvWJZTfvPe5OkUoGDwolnQks7bfKWu0-6jiW3LZWsOxzP9NJtzkEK3zfw3qGVnBLEimMhWqqU4KYMkxdy9Pd836uMyBxKo0cnquVCPP9gbNZQsHcIyMhssft4TjRFGJKCPC17QEI32IJyocfncvAF-gtIr0LL98a2JS0r6QiLr1-slSXTJ09XOU76tffg3p2xWOh-TsPBlzPFyjdT57hCK5j2VgSPfMfZGXN83WWd5nZ8GBY0Wmw-7j_Ge_g"></div><div class="liquid-pill px-5 py-3.5 flex items-center justify-center h-16 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-glass-hover"><img alt="Nagad" class="h-9 w-auto max-w-[100px] object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtH8_nVpKFnuJ0z27lqaPkjEJ98CsVWZGjK4GOTu_LYw_AiNPE1QZws36lNDWoDdqs21WDI_SwR79NzJ0IbGJzuF0-U80eRzix1-uDbsES9p8bgSbLvaJnWlHhU0gVIAz0IssSCqO8wF6ord_ocymNuvaXido8whFV_Z3jqlYoD9D0CGk3dzkJ1HUUTQq2GAesVx8WhxOCJ45aWMrXvEItFU9BelGBVmvvSWxlu2a9x5nLos04_toLz3EnV5fxiC9YAxw"></div><div class="liquid-pill px-5 py-3.5 flex items-center justify-center h-16 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-glass-hover"><img alt="Pathao" class="h-7 w-auto max-w-[105px] object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLDsvmgEfcOwjZJoS8COg2WEwfcYAWBwWOeNjBZBc_WVvRcj8LuV0r3nZ3Ae_Bq7HMsEzYO70aYAUiFplrjGgNbuX-Kf8ny9u92yz84VAhmwX9idSJsrwC66RwbE1_edNlUfsU7KZK6kmMuFbi52Ib18oR7tvhhiY6tdj-jKkXuYk22vUlEH0WI10ZrdtzUleOioI31EWXmBXHuAMt-6D_a0Ktq-6bhZR2zEiTHw8X6IHu742KAsW5JVEtcqCdcSK_pFc"></div><div class="liquid-pill px-5 py-3.5 flex items-center justify-center h-16 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-glass-hover"><img alt="SteadFast Courier" class="h-7 w-auto max-w-[110px] object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1ViPKraYuEMTj4XurUVAL7KoLmmR-jl8VfTmsRAdMLrFVsOouivYo-aQ_lgQcMjmJ9c_7rNUdZovyOgMqNgAlgFLqMpsM52tyi7RgZPAMjdXD5JT9gaJ5hlCH_je4Al4i6MQ_T5nLI57p8jTgZSqDJndEoa-pm4ZxH76EmidQ5ajdVX-j5b5czl7sAQ4z-5t-4mINQxjG9AgzldVHc8Hf3AjJzF0mJGh1Ln4q7SlmyAe_pNN0BHYWjR7whc"></div><div class="liquid-pill px-5 py-3.5 flex items-center justify-center h-16 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-glass-hover"><img alt="RedX" class="h-7 w-auto max-w-[90px] object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuripTf1oGCMa-6VW5B0YwsVho0qxiMLMkIxhOoCPo3FKncZLDP9xO2OpnAXCRjfBTX35kVTQF8WQqyfKMzbyKyG2PAEgZEoE_XUGAisNT2tC_yZSVCr6LWuJA8Jo1UgbkioIngaydutt7OKiA7BkIPIKKP_EJ7_o76IbKDKYXYRiOwdUqWPUfPk8LkL4jPfNbdxdBp_TLu5cdUZJcAsF3bf5YB-4_zh2B9KEFX1OjDcR3xitmajjjIPLD8NVJJ6p61xI"></div></div>
</div>
</section>
<!-- 5. TESTIMONIALS (Frosted Liquid Glass Cards) -->
<section class="py-24 px-6 lg:px-12 relative" id="testimonials">
<div class="mx-auto max-w-5xl">
<div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
<div>
<span class="inline-flex items-center justify-center px-5 py-1.5 rounded-full font-bold text-[12px] tracking-[0.18em] uppercase select-none mb-1 liquid-pill text-slate-600">TESTIMONIALS</span>
<h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">Voice of the Founders</h2>
</div>
<div class="text-left md:text-right"></div>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
<!-- Card 1 -->
<div class="liquid-glass-card rounded-card p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-glass-hover">
<div>
<p class="text-slate-700 text-sm leading-relaxed mb-6 font-normal">
        "We used to spend four hours every evening manually pasting customer addresses into Pathao and checking bKash transaction IDs. UrShop automated everything. Orders ship the same hour."
      </p>
</div>
<div class="flex items-center justify-between pt-4 border-t border-slate-100">
<div class="flex items-center gap-3"><img alt="Tanzeela Chowdhury" class="w-10 h-10 rounded-full object-cover border border-slate-200" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;w=120&amp;h=120&amp;q=80"><div><h4 class="text-sm font-bold text-slate-900">Tanzeela Chowdhury</h4><p class="text-xs text-slate-500">Founder, Clay &amp; Loom</p></div></div>
</div>
</div>
<!-- Card 2 -->
<div class="liquid-glass-card rounded-card p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-glass-hover">
<div>
<p class="text-slate-700 text-sm leading-relaxed mb-6 font-normal">
        "Selling digital presets across Bangladesh used to fail because global platforms do not take bKash. UrShop let me launch my digital shop in 10 minutes and receive funds directly."
      </p>
</div>
<div class="flex items-center justify-between pt-4 border-t border-slate-100">
<div class="flex items-center gap-3"><img alt="Sabbir Hossain" class="w-10 h-10 rounded-full object-cover border border-slate-200" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=120&amp;h=120&amp;q=80"><div><h4 class="text-sm font-bold text-slate-900">Sabbir Hossain</h4><p class="text-xs text-slate-500">Creator, PixelCraft Assets</p></div></div>
</div>
</div>
<!-- Card 3 -->
<div class="liquid-glass-card rounded-card p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-glass-hover">
<div>
<p class="text-slate-700 text-sm leading-relaxed mb-6 font-normal">
        "Direct Steadfast &amp; RedX synchronization cut our courier return rate by 30%. Buyers receive automatic SMS notifications. It is genuinely the Shopify built for Bangladesh."
      </p>
</div>
<div class="flex items-center justify-between pt-4 border-t border-slate-100">
<div class="flex items-center gap-3"><img alt="Farhan Akhtar" class="w-10 h-10 rounded-full object-cover border border-slate-200" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;w=120&amp;h=120&amp;q=80"><div><h4 class="text-sm font-bold text-slate-900">Farhan Akhtar</h4><p class="text-xs text-slate-500">Co-founder, ModestWear BD</p></div></div>
</div>
</div>
</div>
</div>
</section>
<!-- 6. FAQ (Liquid Glass Accordion with Refined Glass Tabs) -->
<section class="py-24 px-6 lg:px-12 relative" id="faqs">
<div class="max-w-4xl mx-auto">
<div class="text-center mb-16">
<span class="inline-flex items-center justify-center px-6 py-1.5 rounded-full font-bold text-[12px] tracking-[0.18em] uppercase select-none mb-1 liquid-pill text-slate-600">FREQUENTLY ASKED QUESTIONS</span>
<h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-3">Everything you need to know</h2>
<p class="text-slate-600 text-base">Simple answers to get your business running immediately.</p>
</div>
<!-- Tabs Pill Container -->
<div class="flex justify-center mb-10 overflow-x-auto px-4">
<div class="inline-flex items-center gap-1.5 p-1.5 rounded-full liquid-glass max-w-full" id="faq-tab-container">
<button class="faq-tab-btn active px-7 py-2.5 rounded-full text-sm font-semibold text-white shadow-sm transition-all duration-200 cursor-pointer border border-white/30" data-category="all" onclick="window.filterFaq('all', this)" style="background: linear-gradient(135deg, rgb(2, 132, 199) 0%, rgb(8, 192, 216) 100%); box-shadow: rgba(8, 192, 216, 0.35) 0px 4px 14px, rgba(255, 255, 255, 0.35) 0px 1px 1px inset;" type="button">Common</button>
<button class="faq-tab-btn px-7 py-2.5 rounded-full text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-white/50 transition-all duration-200 cursor-pointer bg-transparent" data-category="storefront" onclick="window.filterFaq('storefront', this)" type="button">Storefront</button>
<button class="faq-tab-btn px-7 py-2.5 rounded-full text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-white/50 transition-all duration-200 cursor-pointer bg-transparent" data-category="admin" onclick="window.filterFaq('admin', this)" type="button">Admin Dashboard</button>
<button class="faq-tab-btn px-7 py-2.5 rounded-full text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-white/50 transition-all duration-200 cursor-pointer bg-transparent" data-category="meta" onclick="window.filterFaq('meta', this)" type="button">Meta Ads &amp; Landing Pages</button>
</div>
</div>
<!-- Liquid Glass Accordion Card Container -->
<div class="divide-y divide-slate-200/80 liquid-glass-card rounded-3xl px-6 sm:px-8 py-2" style="border-radius: 24px;">
<!-- FAQ Item 1 -->
<details class="group py-6" data-category="all storefront" open="">
<summary class="flex items-center justify-between cursor-pointer list-none">
<h3 class="text-base sm:text-lg font-semibold text-slate-900 group-hover:text-brand transition-colors">
        Do I need technical skills or a registered company to start?
      </h3>
<span class="material-symbols-outlined text-brand transition-transform group-open:rotate-45">add</span>
</summary>
<p class="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed font-normal">
      No. You don't need coding knowledge or prior server setup. You can start with your personal NID and personal or merchant bKash/Nagad number. We handle hosting, SSL certificates, payment processing, and courier bookings.
    </p>
</details>
<!-- FAQ Item 2 -->
<details class="group py-6" data-category="all admin">
<summary class="flex items-center justify-between cursor-pointer list-none">
<h3 class="text-base sm:text-lg font-semibold text-slate-900 group-hover:text-brand transition-colors">
        How do payouts work for bKash, Nagad, and Card transactions?
      </h3>
<span class="material-symbols-outlined text-brand transition-transform group-open:rotate-45">add</span>
</summary>
<p class="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed font-normal">
      Payments collected via online MFS (bKash/Nagad) or Visa/Mastercard are automatically credited to your merchant ledger. Payouts are transferred directly to your bank account or MFS wallet on automated settlement cycles.
    </p>
</details>
<!-- FAQ Item 3 -->
<details class="group py-6" data-category="all admin">
<summary class="flex items-center justify-between cursor-pointer list-none">
<h3 class="text-base sm:text-lg font-semibold text-slate-900 group-hover:text-brand transition-colors">
        How does automated courier dispatch function?
      </h3>
<span class="material-symbols-outlined text-brand transition-transform group-open:rotate-45">add</span>
</summary>
<p class="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed font-normal">
      When a buyer places a physical order, you can approve it with one click. UrShop calls Pathao, Steadfast, or RedX APIs instantly, generates shipping labels, and assigns a rider to your pickup address while sending tracking SMS to your buyer.
    </p>
</details>
<!-- FAQ Item 4 -->
<details class="group py-6" data-category="all storefront">
<summary class="flex items-center justify-between cursor-pointer list-none">
<h3 class="text-base sm:text-lg font-semibold text-slate-900 group-hover:text-brand transition-colors">
        Can I sell digital downloads and physical products in the same store?
      </h3>
<span class="material-symbols-outlined text-brand transition-transform group-open:rotate-45">add</span>
</summary>
<p class="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed font-normal">
      Yes! UrShop is unified commerce. You can have a physical hoodie and a downloadable Lightroom preset catalog running from the exact same storefront link with independent checkout flows.
    </p>
</details>
<!-- FAQ Item 5 -->
<details class="group py-6" data-category="all meta">
<summary class="flex items-center justify-between cursor-pointer list-none">
<h3 class="text-base sm:text-lg font-semibold text-slate-900 group-hover:text-brand transition-colors">How does Meta Conversions API &amp; Pixel tracking work with UrShop?</h3>
<span class="material-symbols-outlined text-brand transition-transform group-open:rotate-45">add</span>
</summary>
<p class="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed font-normal">UrShop comes with native server-side Meta Conversions API (CAPI) and browser Pixel integration. Add your Pixel ID in one field to bypass iOS tracking drop-offs, deduplicate standard events (PageView, AddToCart, Purchase), and improve ad ROAS instantly.</p>
</details>
<!-- FAQ Item 6 -->
<details class="group py-6" data-category="all meta">
<summary class="flex items-center justify-between cursor-pointer list-none">
<h3 class="text-base sm:text-lg font-semibold text-slate-900 group-hover:text-brand transition-colors">Can I build standalone single-product landing pages for ads?</h3>
<span class="material-symbols-outlined text-brand transition-transform group-open:rotate-45">add</span>
</summary>
<p class="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed font-normal">Yes! You can generate blazing-fast high-converting landing pages tailored specifically for Facebook and Instagram ad campaigns with frictionless 1-click checkout forms and automatic COD or MFS processing.</p>
</details>
</div>
<div class="mt-12 text-center text-sm text-slate-600">
  Have more questions? <a class="text-brand font-semibold hover:underline" href="#">Chat with us</a>.
</div>

</div>
</section>
<!-- 7. CLOSING CTA BANNER (Curved Liquid Glass Aurora Vessel) -->
<section class="py-24 px-6 lg:px-12 relative overflow-hidden">
<div class="max-w-5xl mx-auto rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden transition-all duration-500" style="background: linear-gradient(135deg, rgba(255, 255, 255, 0.85) 0%, rgba(240, 249, 255, 0.75) 50%, rgba(224, 242, 254, 0.8) 100%); backdrop-filter: blur(28px) saturate(190%); border: 1.5px solid rgba(255, 255, 255, 0.95); box-shadow: 0 28px 56px -12px rgba(2, 132, 199, 0.18), inset 0 2px 3px rgba(255, 255, 255, 1); border-radius: 32px;">
<!-- Fluid accent glow inside CTA -->
<div class="absolute -top-24 -left-24 w-80 h-80 bg-brand-cyan/20 rounded-full blur-3xl pointer-events-none"></div>
<div class="absolute -bottom-24 -right-24 w-80 h-80 bg-brand/20 rounded-full blur-3xl pointer-events-none"></div>
<div class="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
<span class="inline-flex items-center justify-center px-6 py-2 rounded-full font-bold text-[12px] tracking-[0.18em] uppercase select-none mb-4 liquid-pill text-slate-600">START IN 60 SECONDS</span>
<h2 class="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight">
        Your Online Business, Simplified.
      </h2>
<p class="text-slate-600 text-sm sm:text-base mb-10 max-w-lg leading-relaxed">
        Skip the complex setup. We handle the payments, delivery, and support so you can focus on creating.
      </p>
<div class="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a class="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full text-white font-bold text-base active:scale-95 transition-all duration-300 border hover:shadow-xl" href="#" style="background: linear-gradient(135deg, rgba(8, 192, 216, 0.96), rgba(2, 132, 199, 0.96)); backdrop-filter: blur(14px); border-color: rgba(255, 255, 255, 0.6); box-shadow: 0 10px 24px -4px rgba(2, 132, 199, 0.42), inset 0 1.5px 2px rgba(255, 255, 255, 0.75);">
          Start Free Trial
        </a>
<a class="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full text-slate-800 font-semibold text-base transition-all duration-300 border hover:bg-white/80 active:scale-95" href="#" style="background: rgba(255, 255, 255, 0.75); backdrop-filter: blur(16px); border: 1.5px solid rgba(255, 255, 255, 0.95); box-shadow: 0 4px 16px rgba(15, 23, 42, 0.06), inset 0 1.5px 2px rgba(255, 255, 255, 1);">
          Book Calendar
        </a>
</div>
</div>
</div>
</section>
</main>
<!-- 8. FOOTER (Deep Ink Atmosphere with Crisp Translucent Badges) -->
<footer class="w-full text-slate-400 bg-[#070B12] border-t border-white/10 relative z-10">
<div class="max-w-6xl mx-auto px-6 pt-16 pb-12">
<!-- Top 4 Columns Grid -->
<div class="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-16">
<!-- Column 1: Brand & Trust Block (md:col-span-4) -->
<div class="md:col-span-4 flex flex-col items-start gap-5">
<a class="inline-block" href="#"><img alt="UrShop" class="h-10 w-auto object-contain brightness-0 invert drop-shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwsb9saST-Mkfuvy-8FDPDjMNvuDCNL13THu_1tCgCpFefR7UPigkEy_n6cFLxfR1r0dauTzXX7bFXxF5X16PrbEsflNq8HHKQ5dJmcfI-JEPE2R1t1EczP0Zcw2MN6rESILyAsCxuGSjMFnPDS8P34CnAt3fe1fGslQm6zvmUWXPsLgXE6lw9zMQ6NO6LIWjwNr6avWR99V-pQsF1UkiqDRRRBjmqMgbY4kElwwQC6j2w9864sxlf3Kt6NkKo_voNAyU"></a>
<p class="text-sm text-slate-400 leading-relaxed max-w-sm">
          Empowering businesses and creators in Bangladesh to scale with ease. We provide the secure tools you need to build, grow, and automate your store.
        </p>
<!-- Govt Reg Badge -->
<div class="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono">
<span class="flex items-center gap-1.5 text-emerald-400 font-semibold tracking-wider">
<span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            GOVT. REG
          </span>
<span class="text-slate-500">|</span>
<span class="text-slate-300 font-medium">TRAD/NCC/0005482/2025</span>
</div>
<!-- App Store Badges -->
<div class="mt-2">
<span class="text-[11px] font-bold tracking-widest text-slate-400 uppercase block mb-3">GET THE APP</span>
<div class="flex flex-wrap items-center gap-3">
<!-- Apple Store Button -->
<a class="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-lg bg-white/5 border border-white/15 hover:border-white/40 hover:bg-white/10 transition-colors text-white text-left" href="#">
<svg class="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
<path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.93-2.85-.9.04-1.99.6-2.61 1.34-.55.63-1.03 1.66-.9 2.68 1 .08 2.02-.51 2.58-1.17z"></path>
</svg>
<div class="leading-none">
<span class="block text-[9px] uppercase tracking-wider text-slate-400 font-sans">Download on the</span>
<span class="block text-xs font-bold text-white font-sans mt-0.5">App Store</span>
</div>
</a>
<!-- Google Play Button -->
<a class="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-lg bg-white/5 border border-white/15 hover:border-white/40 hover:bg-white/10 transition-colors text-white text-left" href="#">
<svg class="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
<path d="M3.609 1.814L13.792 12 3.61 22.186a2.124 2.124 0 0 1-.61-1.516V3.33c0-.58.225-1.127.609-1.516zm11.238 11.241l2.456 2.456-11.83 6.76 9.374-9.216zm2.456-4.055L14.847 11.45 5.473 2.234l11.83 6.766zm1.096 1.096l2.951 1.686c.92.525.92 1.383 0 1.908l-2.951 1.686-2.186-2.64 2.186-2.64z"></path>
</svg>
<div class="leading-none">
<span class="block text-[9px] uppercase tracking-wider text-slate-400 font-sans">GET IT ON</span>
<span class="block text-xs font-bold text-white font-sans mt-0.5">Google Play</span>
</div>
</a>
</div>
</div>
</div>
<!-- Column 2: Platform & Discover (md:col-span-3) -->
<div class="md:col-span-3 flex flex-col justify-between gap-8">
<div class="flex flex-col gap-2.5">
<span class="text-sm font-bold text-white mb-1">Platform</span>
<a class="text-sm text-slate-400 hover:text-white transition-colors" href="#">Start a Page</a>
<a class="text-sm text-slate-400 hover:text-white transition-colors" href="#">Login</a>
<a class="text-sm text-slate-400 hover:text-white transition-colors" href="#">Leaderboard</a>
<a class="text-sm text-slate-400 hover:text-white transition-colors" href="#">Help Center</a>
<a class="text-sm text-slate-400 hover:text-white transition-colors" href="#">Report</a>
<a class="text-sm text-slate-400 hover:text-white transition-colors" href="#">Feature Request</a>
<a class="text-sm text-slate-400 hover:text-white transition-colors" href="#">Contact</a>
</div>
<div class="flex flex-col gap-2.5">
<span class="text-sm font-bold text-white mb-1">Discover</span>
<a class="text-sm text-slate-400 hover:text-white transition-colors" href="#">Explore Creators</a>
<a class="text-sm text-slate-400 hover:text-white transition-colors" href="#">Digital Products</a>
<a class="text-sm text-slate-400 hover:text-white transition-colors" href="#">Online Courses</a>
<a class="text-sm text-slate-400 hover:text-white transition-colors" href="#">Events &amp; Workshops</a>
</div>
</div>
<!-- Column 3: Legal (md:col-span-2) -->
<div class="md:col-span-2 flex flex-col gap-2.5">
<span class="text-sm font-bold text-white mb-1">Legal</span>
<a class="text-sm text-slate-400 hover:text-white transition-colors" href="#">About Us</a>
<a class="text-sm text-slate-400 hover:text-white transition-colors" href="#">Privacy Policy</a>
<a class="text-sm text-slate-400 hover:text-white transition-colors" href="#">Terms of Service</a>
<a class="text-sm text-slate-400 hover:text-white transition-colors" href="#">Security Policy</a>
<a class="text-sm text-slate-400 hover:text-white transition-colors" href="#">Withdrawal Policy</a>
<a class="text-sm text-slate-400 hover:text-white transition-colors" href="/pricing">Pricing</a>
<a class="text-sm text-slate-400 hover:text-white transition-colors" href="#">Refund Policy</a>
</div>
<!-- Column 4: Contact & Addresses & Socials (md:col-span-3) -->
<div class="md:col-span-3 flex flex-col gap-6">
<div>
<span class="text-sm font-bold text-white mb-3 block">Contact</span>
<div class="space-y-4 text-xs">
<div>
<p class="font-bold uppercase tracking-wider text-slate-300 mb-1">USA HEADQUARTERS</p>
<p class="text-slate-400 leading-relaxed">
                1209 Mountain Road PL NE, Ste N<br>Albuquerque, NM 87110<br>United States
              </p>
</div>
<div>
<p class="font-bold uppercase tracking-wider text-slate-300 mb-1">BANGLADESH OFFICE</p>
<p class="text-slate-400 leading-relaxed">
                52, Khanpur Road,<br>Narayanganj, Dhaka,<br>Bangladesh
              </p>
</div>
</div>
</div>
<!-- Prominent Email -->
<div class="pt-1">
<a class="text-lg font-extrabold text-white underline underline-offset-4 decoration-2 decoration-brand-cyan hover:text-brand-cyan transition-colors" href="mailto:support@urshop.app">
            support@urshop.app
          </a>
</div>
<!-- Social Icons -->
<div class="pt-1">
<span class="text-[11px] font-bold tracking-widest text-slate-400 uppercase block mb-3">FOLLOW US</span>
<div class="flex items-center gap-3">
<!-- Facebook -->
<a aria-label="Facebook" class="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors" href="#">
<svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>
</a>
<!-- Instagram -->
<a aria-label="Instagram" class="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors" href="#">
<svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
</a>
<!-- YouTube -->
<a aria-label="YouTube" class="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors" href="#">
<svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path></svg>
</a>
<!-- Discord -->
<a aria-label="Discord" class="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors" href="#">
<svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"></path></svg>
</a>
</div>
</div>
</div>
</div>
<!-- Divider Line -->
<div class="border-t border-white/10 pt-10 pb-4 text-center">
<p class="text-[11px] font-bold font-mono tracking-[0.2em] text-slate-400 uppercase">
        PAYMENTS 100% SECURED BY SSLCOMMERZ &amp; EPS
      </p>
</div>
<!-- Bottom Security, Payment Rails & Copyright Rail -->
<div class="flex flex-col lg:flex-row items-center justify-between gap-6 pt-4 pb-4">
<!-- Left: Security badges -->
<div class="flex items-center gap-3 shrink-0 order-2 lg:order-1">
<div class="inline-flex items-center gap-2 px-2.5 py-1.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300 font-semibold">
<span class="px-1.5 py-0.5 rounded bg-white/10 text-white font-bold">256</span>
<span class="">BIT ENCRYPTION</span>
</div>
<div class="inline-flex items-center gap-2 px-2.5 py-1.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300 font-semibold">
<span class="px-1.5 py-0.5 rounded bg-white/10 text-white font-bold">PCI</span>
<span class="">DSS COMPLIANT</span>
</div>
</div>
<!-- Center: Payment Gateways Pill Container -->
<div class="order-1 lg:order-2 px-5 py-2.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center gap-3 shadow-inner overflow-x-auto max-w-full">
<span class="text-[9px] font-mono uppercase text-slate-500 shrink-0">Pay With</span>
<div class="flex items-center gap-1.5 shrink-0">
<!-- Visa -->
<div class="h-5 px-1.5 bg-white rounded flex items-center justify-center">
<span class="text-[9px] font-extrabold text-[#1A1F71] tracking-tighter">VISA</span>
</div>
<!-- Mastercard -->
<div class="h-5 px-1 bg-white rounded flex items-center justify-center">
<div class="flex -space-x-1 items-center">
<span class="w-2.5 h-2.5 rounded-full bg-[#EB001B]"></span>
<span class="w-2.5 h-2.5 rounded-full bg-[#F79E1B] opacity-90"></span>
</div>
</div>
<!-- Amex -->
<div class="h-5 px-1.5 bg-[#006FCF] rounded flex items-center justify-center text-white text-[8px] font-extrabold">
            AMEX
          </div>
<!-- bKash -->
<div class="h-5 px-1.5 bg-[#E2136E] rounded flex items-center justify-center text-white text-[9px] font-bold">
            bKash
          </div>
<!-- Nagad -->
<div class="h-5 px-1.5 bg-[#F7941D] rounded flex items-center justify-center text-white text-[9px] font-bold">
            Nagad
          </div>
<!-- Rocket -->
<div class="h-5 px-1.5 bg-[#8C3494] rounded flex items-center justify-center text-white text-[8px] font-bold">
            Rocket
          </div>
<!-- Upay -->
<div class="h-5 px-1.5 bg-[#005EAA] rounded flex items-center justify-center text-white text-[8px] font-bold">
            upay
          </div>
<!-- City Bank -->
<div class="h-5 px-1.5 bg-[#D32F2F] rounded flex items-center justify-center text-white text-[7px] font-bold uppercase">
            City Bank
          </div>
<!-- BRAC -->
<div class="h-5 px-1.5 bg-[#003865] rounded flex items-center justify-center text-white text-[7px] font-bold uppercase">
            BRAC
          </div>
<!-- EBL -->
<div class="h-5 px-1.5 bg-[#E57200] rounded flex items-center justify-center text-white text-[7px] font-bold uppercase">
            EBL
          </div>
<!-- DBBL -->
<div class="h-5 px-1.5 bg-[#008248] rounded flex items-center justify-center text-white text-[7px] font-bold uppercase">
            DBBL
          </div>
<!-- SSLCOMMERZ logo text -->
<div class="h-5 px-2 bg-slate-800 border border-white/10 rounded flex items-center justify-center text-slate-300 text-[8px] font-bold tracking-tight">
            SSLCOMMERZ
          </div>
</div>
</div>
<!-- Right: Copyright & Version -->
<div class="text-right order-3 shrink-0 flex flex-col items-center lg:items-end gap-1">
<p class="text-xs text-slate-400 font-sans">
          © 2026 SupportKori Inc. All rights reserved.
        </p>
<span class="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
          V2.4.0 STABLE
        </span>
</div>
</div>
</div>
</footer>


`;
