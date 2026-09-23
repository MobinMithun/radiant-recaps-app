// Markup ported from the provided design.
export const pricingBodyClass = "text-[#0F172A] antialiased overflow-x-hidden selection:bg-[#08C0D8] selection:text-slate-900 min-h-screen";
export const pricingBodyStyle = "background-color: #ffffff;";

export const pricingHtml = `
<!-- Ambient Prismatic Radial Glows (Liquid Glass Lighting Backdrop) -->
<div class="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
<div class="absolute -top-36 left-1/4 w-[650px] h-[650px] rounded-full" style="background: radial-gradient(circle, rgba(8, 192, 216, 0.22) 0%, rgba(2, 132, 199, 0.12) 50%, transparent 70%); filter: blur(75px);"></div>
<div class="absolute top-[520px] -right-24 w-[620px] h-[620px] rounded-full" style="background: radial-gradient(circle, rgba(14, 165, 233, 0.18) 0%, rgba(8, 192, 216, 0.12) 48%, transparent 70%); filter: blur(80px);"></div>
<div class="absolute top-[1350px] -left-36 w-[680px] h-[680px] rounded-full" style="background: radial-gradient(circle, rgba(8, 192, 216, 0.18) 0%, rgba(56, 189, 248, 0.10) 50%, transparent 70%); filter: blur(85px);"></div>
<div class="absolute top-[2200px] right-1/6 w-[700px] h-[700px] rounded-full" style="background: radial-gradient(circle, rgba(8, 192, 216, 0.16) 0%, rgba(2, 132, 199, 0.10) 50%, transparent 70%); filter: blur(90px);"></div>
<div class="absolute bottom-20 left-1/3 w-[650px] h-[650px] rounded-full" style="background: radial-gradient(circle, rgba(8, 192, 216, 0.16) 0%, rgba(14, 165, 233, 0.08) 55%, transparent 75%); filter: blur(85px);"></div>
</div>
<!-- STICKY TOP FROSTED LIQUID GLASS NAVBAR -->
<header class="sticky top-0 z-50 w-full bg-white/85 backdrop-blur-md border-b border-slate-200/80 shadow-[0_4px_24px_-4px_rgba(8,192,216,0.06)]"></header>
<!-- MAIN PAGE CONTAINER -->
<main class="w-full max-w-6xl mx-auto px-6 sm:px-12 pb-24 pt-16">
<!-- Top Breadcrumb & Status Bar -->
<div class="flex items-center justify-between mb-8">
<a class="inline-flex items-center gap-1.5 text-slate-600 hover:text-[#08C0D8] text-[13px] font-semibold transition-colors group px-3.5 py-1.5 rounded-full liquid-glass-subtle" href="/">
<span class="material-symbols-outlined text-[18px] group-hover:-translate-x-0.5 transition-transform text-[#08C0D8]">arrow_back</span>
<span class="">Back to Home</span>
</a>

</div>
<!-- PAGE HERO & BILLING FREQUENCY TOGGLE -->
<div class="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 relative z-10 mt-6">
<!-- Eyebrow Pill -->

<!-- H1 Headline with Signature Gradient Underline Accent Bar -->
<h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-4">Choose the plan that <span class="relative inline-block px-1"><span class="absolute inset-x-0 bottom-1.5 h-3 bg-[#08C0D8]/35 -z-10 rounded-sm"></span>grows with your business</span><div><span class="relative inline-block px-1"><br></span></div></h1>

<!-- Local Tax Disclaimer Pill -->

<!-- Liquid Glass Billing Frequency Toggle Capsule -->
<div class="relative p-1 rounded-full bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-sm flex items-center gap-1.5"><button class="relative px-6 py-2 rounded-full text-sm font-bold transition-all duration-200 text-white flex items-center gap-1.5 active:scale-95" id="billing-monthly-btn" onclick="setBilling('monthly')" style="background: linear-gradient(135deg, rgb(8, 192, 216) 0%, rgb(2, 132, 199) 100%); box-shadow: rgba(8, 192, 216, 0.35) 0px 4px 14px, rgba(255, 255, 255, 0.8) 0px 1px 1.5px inset; border: 1px solid rgba(255, 255, 255, 0.6);"><span class="">Monthly</span></button><button class="relative px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 text-slate-600 hover:text-slate-900 hover:bg-white/50 flex items-center gap-2" id="billing-yearly-btn" onclick="setBilling('yearly')"><span class="">Yearly</span><span class="inline-flex items-center px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold shadow-xs">Save 20%</span></button></div>
</div>
<!-- 4-TIER PRICING CARDS -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-16 relative z-10">
<!-- CARD 1: Free Trial -->
<div class="liquid-glass p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
<div>
<div class="flex items-center justify-between mb-2">
<h2 class="text-xl font-bold text-slate-900">Free Trial</h2>
<span class="px-2.5 py-0.5 rounded-full bg-white/80 border border-slate-200/90 text-[11px] font-semibold text-slate-600 shadow-xs">Sandbox</span>
</div>
<p class="text-[13px] text-slate-600 min-h-[38px] mb-5 leading-snug">
            For new and small stores exploring online sales.
          </p>
<div class="mb-6 pb-2 border-b border-slate-200/70">
<div class="flex items-baseline gap-1">
<span class="text-4xl font-extrabold text-slate-900 tracking-tight">৳0</span>
<span class="text-slate-500 text-sm font-medium">for 30 days</span>
</div>
<span class="text-[12px] text-slate-500 mt-1 block">No credit card required</span>
</div>
<a class="w-full rounded-full text-slate-800 text-sm font-bold px-6 py-3 transition-all flex items-center justify-center mb-6 text-center active:scale-95 border hover:bg-white/90" style="background: rgba(255, 255, 255, 0.85); backdrop-filter: blur(14px); border-color: rgba(255, 255, 255, 0.95); box-shadow: rgba(15, 23, 42, 0.05) 0px 4px 14px 0px, rgba(255, 255, 255, 0.95) 0px 1px 1.5px inset;" href="#">30 day free trial</a>
<div>
<span class="text-[11px] uppercase tracking-wider text-slate-500 font-bold block mb-3">Included in your trial</span>
<ul class="space-y-2.5 text-[13px] text-slate-700">
<li class="flex items-start gap-2">
<span class="material-symbols-outlined text-[18px] text-emerald-600 shrink-0">check_circle</span>
<span class="">Up to <strong>60 products</strong></span>
</li>
<li class="flex items-start gap-2">
<span class="material-symbols-outlined text-[18px] text-emerald-600 shrink-0">check_circle</span>
<span class=""><strong>1 staff account</strong></span>
</li>
<li class="flex items-start gap-2">
<span class="material-symbols-outlined text-[18px] text-emerald-600 shrink-0">check_circle</span>
<span class="">Hosted UrShop storefront</span>
</li>
<li class="flex items-start gap-2">
<span class="material-symbols-outlined text-[18px] text-emerald-600 shrink-0">check_circle</span>
<span class="">1 Page Builder page</span>
</li>
<li class="flex items-start gap-2">
<span class="material-symbols-outlined text-[18px] text-emerald-600 shrink-0">check_circle</span>
<span class="">Custom delivery checkout</span>
</li>
<li class="flex items-start gap-2">
<span class="material-symbols-outlined text-[18px] text-emerald-600 shrink-0">check_circle</span>
<span class="">bKash cash on delivery</span>
</li>
<li class="flex items-start gap-2">
<span class="material-symbols-outlined text-[18px] text-emerald-600 shrink-0">check_circle</span>
<span class="">Basic analytics</span>
</li>
</ul>
</div>
</div>
<div class="pt-5 mt-6 flex items-center justify-between text-slate-500 border-t border-slate-200/70 text-[12px]">


</div>
</div>
<!-- CARD 2: Starter -->
<div class="liquid-glass p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
<div>
<div class="flex items-center justify-between mb-2">
<h2 class="text-xl font-bold text-slate-900">Starter</h2>
<span class="px-2.5 py-0.5 rounded-full bg-cyan-50/90 border border-cyan-200 text-[11px] font-bold text-[#08C0D8] shadow-xs">Scale Up</span>
</div>
<p class="text-[13px] text-slate-600 min-h-[38px] mb-5 leading-snug">
            For growing e-commerce businesses scaling sales.
          </p>
<div class="mb-6 pb-2 border-b border-slate-200/70">
<div class="flex items-baseline gap-1">
<span class="text-4xl font-extrabold text-slate-900 tracking-tight transition-all" id="price-starter">৳550</span>
<span class="text-slate-500 text-sm font-medium">/ month</span>
</div>
<span class="text-[12px] text-slate-500 mt-1 block" id="sub-starter">Billed monthly</span>
</div>
<a class="w-full rounded-full text-slate-800 text-sm font-bold px-6 py-3 transition-all flex items-center justify-center mb-6 text-center active:scale-95 border hover:bg-white/90" style="background: rgba(255, 255, 255, 0.85); backdrop-filter: blur(14px); border-color: rgba(255, 255, 255, 0.95); box-shadow: rgba(15, 23, 42, 0.05) 0px 4px 14px 0px, rgba(255, 255, 255, 0.95) 0px 1px 1.5px inset;" href="#">Choose Starter</a>
<div>
<span class="text-[11px] uppercase tracking-wider text-slate-500 font-bold block mb-3">What's included</span>
<ul class="space-y-2.5 text-[13px] text-slate-700">
<li class="flex items-start gap-2">
<span class="material-symbols-outlined text-[18px] text-emerald-600 shrink-0">check_circle</span>
<span class="">Up to <strong>300 products</strong></span>
</li>
<li class="flex items-start gap-2">
<span class="material-symbols-outlined text-[18px] text-emerald-600 shrink-0">check_circle</span>
<span class=""><strong>2 staff accounts</strong></span>
</li>
<li class="flex items-start gap-2">
<span class="material-symbols-outlined text-[18px] text-emerald-600 shrink-0">check_circle</span>
<span class="">Unlimited customer orders</span>
</li>
<li class="flex items-start gap-2">
<span class="material-symbols-outlined text-[18px] text-emerald-600 shrink-0">check_circle</span>
<span class="">5 Page Builder pages</span>
</li>
<li class="flex items-start gap-2">
<span class="material-symbols-outlined text-[18px] text-emerald-600 shrink-0">check_circle</span>
<span class="">Use your own custom domain</span>
</li>
<li class="flex items-start gap-2">
<span class="material-symbols-outlined text-[18px] text-emerald-600 shrink-0">check_circle</span>
<span class="">Pathao &amp; SteadFast Couriers</span>
</li>
<li class="flex items-start gap-2">
<span class="material-symbols-outlined text-[18px] text-emerald-600 shrink-0">check_circle</span>
<span class="">Full theme customization</span>
</li>
<li class="flex items-start gap-2">
<span class="material-symbols-outlined text-[18px] text-emerald-600 shrink-0">check_circle</span>
<span class="">bKash &amp; Cash on delivery</span>
</li>
<li class="flex items-start gap-2">
<span class="material-symbols-outlined text-[18px] text-emerald-600 shrink-0">check_circle</span>
<span class="">Meta Pixel &amp; Basic analytics</span>
</li>
</ul>
</div>
</div>
<div class="pt-5 mt-6 flex items-center justify-between border-t border-slate-200/70 text-[12px] text-slate-500">
<div class="flex items-center gap-2 opacity-90">


</div>

</div>
</div>
<!-- CARD 3: Growth (MOST POPULAR - LIQUID GLASS HIGHLIGHTED) -->
<div class="relative liquid-glass-popular p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 lg:-translate-y-2">
<!-- Most Popular Badge -->
<div class="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#08C0D8] text-slate-900 text-[11px] font-extrabold uppercase tracking-wider shadow-[0_4px_14px_rgba(8,192,216,0.45)] border border-white/60 flex items-center gap-1.5 whitespace-nowrap">
<span class="material-symbols-outlined text-[14px]">local_fire_department</span>
<span class="">MOST POPULAR</span>
</div>
<div>
<div class="flex items-center justify-between mb-2 pt-1">
<h2 class="text-xl font-bold text-[#08C0D8]">Growth</h2>
<span class="px-2.5 py-0.5 rounded-full bg-cyan-100/90 text-[11px] font-bold text-[#08C0D8] border border-cyan-200">Recommended</span>
</div>
<p class="text-[13px] text-slate-600 min-h-[38px] mb-5 leading-snug">
            For expanding stores needing automation &amp; marketing.
          </p>
<div class="mb-6 pb-2 border-b border-cyan-200/80">
<div class="flex items-baseline gap-1">
<span class="text-4xl font-extrabold text-[#08C0D8] tracking-tight transition-all" id="price-growth">৳1,050</span>
<span class="text-slate-600 text-sm font-semibold">/ month</span>
</div>
<span class="text-[12px] text-slate-500 mt-1 block font-medium" id="sub-growth">Billed monthly</span>
</div>
<div class="w-full rounded-full p-1 border mb-6 transition-all duration-300 hover:shadow-lg" style="background: rgba(255, 255, 255, 0.65); backdrop-filter: blur(16px); border-color: rgba(255, 255, 255, 0.9); box-shadow: rgba(255, 255, 255, 0.95) 0px 1px 1.5px inset;"><a class="w-full inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-white font-bold text-sm active:scale-95 transition-all border cursor-pointer" style="background: linear-gradient(135deg, #08c0d8 0%, #0284c7 100%); backdrop-filter: blur(14px); border-color: rgba(255, 255, 255, 0.65); box-shadow: 0 4px 20px -2px rgba(8, 192, 216, 0.45), inset 0 1.5px 2px rgba(255, 255, 255, 0.75);" href="#"><span class="">Choose Growth</span></a></div>
<div>
<span class="text-[11px] uppercase tracking-wider text-[#08C0D8] font-bold block mb-3">Everything in Starter plus</span>
<ul class="space-y-2.5 text-[13px] text-slate-800">
<li class="flex items-start gap-2">
<span class="material-symbols-outlined text-[18px] text-[#08C0D8] shrink-0">check_circle</span>
<span class="">Up to <strong>1,500 products</strong></span>
</li>
<li class="flex items-start gap-2">
<span class="material-symbols-outlined text-[18px] text-[#08C0D8] shrink-0">check_circle</span>
<span class=""><strong>5 staff accounts</strong></span>
</li>
<li class="flex items-start gap-2">
<span class="material-symbols-outlined text-[18px] text-[#08C0D8] shrink-0">check_circle</span>
<span class=""><strong>20 Page Builder pages</strong></span>
</li>
<li class="flex items-start gap-2">
<span class="material-symbols-outlined text-[18px] text-[#08C0D8] shrink-0">check_circle</span>
<span class="">Abandoned checkout recovery</span>
</li>
<li class="flex items-start gap-2">
<span class="material-symbols-outlined text-[18px] text-[#08C0D8] shrink-0">check_circle</span>
<span class="">All Couriers: Pathao, SteadFast, RedX</span>
</li>
<li class="flex items-start gap-2">
<span class="material-symbols-outlined text-[18px] text-[#08C0D8] shrink-0">check_circle</span>
<span class="">Blog for SEO &amp; Content</span>
</li>
<li class="flex items-start gap-2">
<span class="material-symbols-outlined text-[18px] text-[#08C0D8] shrink-0">check_circle</span>
<span class="">Coupons &amp; product reviews</span>
</li>
<li class="flex items-start gap-2">
<span class="material-symbols-outlined text-[18px] text-[#08C0D8] shrink-0">check_circle</span>
<span class="">GTM &amp; Server-side Meta Pixel</span>
</li>
<li class="flex items-start gap-2">
<span class="material-symbols-outlined text-[18px] text-[#08C0D8] shrink-0">check_circle</span>
<span class="">Priority dedicated support</span>
</li>

</ul>
</div>
</div>
<div class="pt-5 mt-6 flex items-center justify-between border-t border-cyan-200/80 text-[12px]">
<div class="flex items-center gap-2 opacity-90">



</div>

</div>
</div>
<!-- CARD 4: Scale -->
<div class="liquid-glass p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
<div>
<div class="flex items-center justify-between mb-2">
<h2 class="text-xl font-bold text-slate-900">Scale</h2>
<span class="px-2.5 py-0.5 rounded-full bg-white/80 border border-slate-200/90 text-[11px] font-semibold text-slate-600 shadow-xs">Enterprise</span>
</div>
<p class="text-[13px] text-slate-600 min-h-[38px] mb-5 leading-snug">
            For established brands and high-volume sellers.
          </p>
<div class="mb-6 pb-2 border-b border-slate-200/70">
<div class="flex items-baseline gap-1">
<span class="text-4xl font-extrabold text-slate-900 tracking-tight transition-all" id="price-scale">৳2,250</span>
<span class="text-slate-500 text-sm font-medium">/ month</span>
</div>
<span class="text-[12px] text-slate-500 mt-1 block" id="sub-scale">Billed monthly</span>
</div>
<a class="w-full rounded-full text-slate-800 text-sm font-bold px-6 py-3 transition-all flex items-center justify-center mb-6 text-center active:scale-95 border hover:bg-white/90" style="background: rgba(255, 255, 255, 0.85); backdrop-filter: blur(14px); border-color: rgba(255, 255, 255, 0.95); box-shadow: rgba(15, 23, 42, 0.05) 0px 4px 14px 0px, rgba(255, 255, 255, 0.95) 0px 1px 1.5px inset;" href="#">Choose Scale</a>
<div>
<span class="text-[11px] uppercase tracking-wider text-slate-500 font-bold block mb-3">Everything in Growth plus</span>
<ul class="space-y-2.5 text-[13px] text-slate-700">
<li class="flex items-start gap-2">
<span class="material-symbols-outlined text-[18px] text-emerald-600 shrink-0">check_circle</span>
<span class=""><strong>Unlimited products</strong></span>
</li>
<li class="flex items-start gap-2">
<span class="material-symbols-outlined text-[18px] text-emerald-600 shrink-0">check_circle</span>
<span class=""><strong>10 staff accounts</strong></span>
</li>
<li class="flex items-start gap-2">
<span class="material-symbols-outlined text-[18px] text-emerald-600 shrink-0">check_circle</span>
<span class="">Unlimited Page Builder pages</span>
</li>
<li class="flex items-start gap-2">
<span class="material-symbols-outlined text-[18px] text-emerald-600 shrink-0">check_circle</span>
<span class="">Wholesale &amp; B2B selling</span>
</li>
<li class="flex items-start gap-2">
<span class="material-symbols-outlined text-[18px] text-emerald-600 shrink-0">check_circle</span>
<span class="">Custom checkout scripts</span>
</li>
<li class="flex items-start gap-2">
<span class="material-symbols-outlined text-[18px] text-emerald-600 shrink-0">check_circle</span>
<span class="">Highest priority 24/7 support</span>
</li>
<li class="mt-2"><div class="w-full rounded-2xl p-4 border text-left shadow-sm transition-all duration-300" style="background: linear-gradient(135deg, rgba(8, 192, 216, 0.08) 0%, rgba(2, 132, 199, 0.12) 100%); border-color: rgba(8, 192, 216, 0.35); backdrop-filter: blur(12px);"><div class="flex items-center gap-1.5 mb-1.5"><span class="material-symbols-outlined text-[16px] text-[#08C0D8]">auto_awesome</span><span class="text-[11px] font-bold tracking-wider uppercase text-[#08C0D8]">URSHOP AI SUITE</span></div><div class="text-[#0F172A] font-extrabold text-sm tracking-tight mb-3">10,000 AI credits / month</div><div class="flex flex-wrap gap-1.5"><span class="inline-block px-2.5 py-1 rounded-full text-[11px] font-semibold text-slate-800 border" style="background: rgba(255, 255, 255, 0.85); border-color: rgba(8, 192, 216, 0.25); box-shadow: 0 1px 2px rgba(8, 192, 216, 0.06);">AI Store Assistant</span><span class="inline-block px-2.5 py-1 rounded-full text-[11px] font-semibold text-slate-800 border" style="background: rgba(255, 255, 255, 0.85); border-color: rgba(8, 192, 216, 0.25); box-shadow: 0 1px 2px rgba(8, 192, 216, 0.06);">AI business reports &amp; action plans</span><span class="inline-block px-2.5 py-1 rounded-full text-[11px] font-semibold text-slate-800 border" style="background: rgba(255, 255, 255, 0.85); border-color: rgba(8, 192, 216, 0.25); box-shadow: 0 1px 2px rgba(8, 192, 216, 0.06);">AI product descriptions</span><span class="inline-block px-2.5 py-1 rounded-full text-[11px] font-semibold text-slate-800 border" style="background: rgba(255, 255, 255, 0.85); border-color: rgba(8, 192, 216, 0.25); box-shadow: 0 1px 2px rgba(8, 192, 216, 0.06);">AI blog writing</span><span class="inline-block px-2.5 py-1 rounded-full text-[11px] font-semibold text-slate-800 border" style="background: rgba(255, 255, 255, 0.85); border-color: rgba(8, 192, 216, 0.25); box-shadow: 0 1px 2px rgba(8, 192, 216, 0.06);">AI review generation</span></div></div></li>
</ul>
</div>
</div>
<div class="pt-5 mt-6 flex items-center justify-between text-slate-500 border-t border-slate-200/70 text-[12px]">


</div>
</div>
</div>
<!-- PARTNER INTEGRATION TRUST STRIP -->

<!-- FULL FEATURE COMPARISON TABLE -->
<div class="liquid-glass overflow-hidden mb-16 relative z-10" id="comparison-section">
<!-- Table Top Controls Header -->
<div class="p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200/80">
<div>
<h2 class="text-2xl font-bold text-slate-900 tracking-tight">Compare all features</h2>
<p class="text-sm text-slate-600 mt-1">
            Every feature and limit, side-by-side. Pick the plan that fits how you sell.
          </p>
</div>
<!-- Differences Filter Toggle Checkbox -->
<label class="inline-flex items-center gap-2.5 cursor-pointer select-none px-4 py-2.5 rounded-xl liquid-glass-subtle hover:bg-white/80 transition-all self-start md:self-auto">
<input class="w-4 h-4 rounded text-[#08C0D8] focus:ring-[#08C0D8]" id="diff-toggle" onchange="toggleDiffOnly(this.checked)" type="checkbox">
<span class="text-xs sm:text-sm font-semibold text-slate-800">Show differences only</span>
</label>
</div>
<!-- Sticky Comparison Header Bar & Columns -->
<div class="overflow-x-auto">
<table class="w-full text-left text-sm border-collapse">
<thead class="sticky top-16 z-30 bg-white/85 backdrop-blur-2xl border-b border-slate-200/80 shadow-xs"><tr class=""><th class="p-4 sm:p-5 text-xs uppercase tracking-wider text-slate-600 font-bold w-2/5">Features</th><th class="p-4 sm:p-5 text-center w-[15%]"><div class="font-bold text-slate-900">Free Trial</div><a class="mt-2 inline-block text-xs font-bold px-4 py-1.5 rounded-full text-slate-700 hover:text-slate-900 border transition-all active:scale-95 hover:bg-white/90" style="background: rgba(255, 255, 255, 0.85); backdrop-filter: blur(12px); border-color: rgba(255, 255, 255, 0.95); box-shadow: rgba(15, 23, 42, 0.05) 0px 2px 8px, rgba(255, 255, 255, 0.95) 0px 1px 1px inset;" href="#">Start Free</a></th><th class="p-4 sm:p-5 text-center w-[15%]"><div class="font-bold text-slate-900">Starter</div><a class="mt-2 inline-block text-xs font-bold px-4 py-1.5 rounded-full text-slate-700 hover:text-slate-900 border transition-all active:scale-95 hover:bg-white/90" style="background: rgba(255, 255, 255, 0.85); backdrop-filter: blur(12px); border-color: rgba(255, 255, 255, 0.95); box-shadow: rgba(15, 23, 42, 0.05) 0px 2px 8px, rgba(255, 255, 255, 0.95) 0px 1px 1px inset;" href="#">Select</a></th><th class="p-4 sm:p-5 text-center w-[15%] bg-cyan-50/70 border-x border-cyan-200/80"><div class="flex items-center justify-center gap-1 font-bold text-[#08C0D8]"><span class="">Growth</span><span class="material-symbols-outlined text-[15px]">stars</span></div><a class="mt-2 inline-block text-xs font-bold px-4 py-1.5 rounded-full text-white shadow-sm active:scale-95 transition-all border" style="background: linear-gradient(135deg, rgb(8, 192, 216) 0%, rgb(2, 132, 199) 100%); border-color: rgba(255, 255, 255, 0.65); box-shadow: rgba(8, 192, 216, 0.35) 0px 4px 14px, rgba(255, 255, 255, 0.7) 0px 1px 1px inset;" href="#">Upgrade</a></th><th class="p-4 sm:p-5 text-center w-[15%]"><div class="font-bold text-slate-900">Scale</div><a class="mt-2 inline-block text-xs font-bold px-4 py-1.5 rounded-full text-slate-700 hover:text-slate-900 border transition-all active:scale-95 hover:bg-white/90" style="background: rgba(255, 255, 255, 0.85); backdrop-filter: blur(12px); border-color: rgba(255, 255, 255, 0.95); box-shadow: rgba(15, 23, 42, 0.05) 0px 2px 8px, rgba(255, 255, 255, 0.95) 0px 1px 1px inset;" href="#">Select</a></th></tr></thead>
<tbody>
<!-- CATEGORY 1: GENERAL & STORE BUILDER -->
<tr class="bg-slate-100/50 border-t border-b border-slate-200/70">
<td class="px-5 py-2.5 text-xs font-bold text-[#08C0D8] uppercase tracking-wider" colspan="5">
                1. General &amp; Store Builder
              </td>
</tr>
<tr class="table-row-item hover:bg-white/40 border-b border-slate-200/50 transition-colors" data-is-diff="false">
<td class="p-4 text-slate-800 font-medium">Hosted storefront (urshop.me)</td>
<td class="p-4 text-center text-emerald-600"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
<td class="p-4 text-center text-emerald-600"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
<td class="p-4 text-center text-emerald-600 bg-cyan-50/30 border-x border-cyan-100/80"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
<td class="p-4 text-center text-emerald-600"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
</tr>
<tr class="table-row-item hover:bg-white/40 border-b border-slate-200/50 transition-colors" data-is-diff="true">
<td class="p-4 text-slate-800 font-medium">Custom domain connection</td>
<td class="p-4 text-center text-slate-300 font-bold">—</td>
<td class="p-4 text-center text-emerald-600"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
<td class="p-4 text-center text-emerald-600 bg-cyan-50/30 border-x border-cyan-100/80"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
<td class="p-4 text-center text-emerald-600"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
</tr>
<tr class="table-row-item hover:bg-white/40 border-b border-slate-200/50 transition-colors" data-is-diff="true">
<td class="p-4 text-slate-800 font-medium">Courier integrations</td>
<td class="p-4 text-center"><span class="px-2 py-0.5 rounded-full bg-white/80 border border-slate-200 text-slate-600 text-xs">Basic</span></td>
<td class="p-4 text-center"><span class="px-2 py-0.5 rounded-full bg-white/80 border border-slate-200 text-slate-700 text-xs">2 Couriers</span></td>
<td class="p-4 text-center bg-cyan-50/30 border-x border-cyan-100/80"><span class="px-2.5 py-0.5 rounded-full bg-[#08C0D8] text-slate-900 font-bold text-xs shadow-xs">Full (All 3)</span></td>
<td class="p-4 text-center"><span class="px-2.5 py-0.5 rounded-full bg-slate-800 text-white font-bold text-xs shadow-xs">Full (All 3)</span></td>
</tr>
<tr class="table-row-item hover:bg-white/40 border-b border-slate-200/50 transition-colors" data-is-diff="true">
<td class="p-4 text-slate-800 font-medium">Page Builder custom pages</td>
<td class="p-4 text-center text-slate-700 font-semibold">1 page</td>
<td class="p-4 text-center text-slate-700 font-semibold">5 pages</td>
<td class="p-4 text-center text-[#08C0D8] font-bold bg-cyan-50/30 border-x border-cyan-100/80">20 pages</td>
<td class="p-4 text-center text-slate-900 font-bold">Unlimited</td>
</tr>
<tr class="table-row-item hover:bg-white/40 border-b border-slate-200/50 transition-colors" data-is-diff="true">
<td class="p-4 text-slate-800 font-medium">Store theme customization</td>
<td class="p-4 text-center text-slate-500 text-xs">Basic colors</td>
<td class="p-4 text-center text-emerald-600"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
<td class="p-4 text-center text-emerald-600 bg-cyan-50/30 border-x border-cyan-100/80"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
<td class="p-4 text-center text-emerald-600"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
</tr>
<!-- CATEGORY 2: CATALOGING & PRODUCTS -->
<tr class="bg-slate-100/50 border-t border-b border-slate-200/70">
<td class="px-5 py-2.5 text-xs font-bold text-[#08C0D8] uppercase tracking-wider" colspan="5">
                2. Cataloging &amp; Products
              </td>
</tr>
<tr class="table-row-item hover:bg-white/40 border-b border-slate-200/50 transition-colors" data-is-diff="true">
<td class="p-4 text-slate-800 font-medium">Products catalog limit</td>
<td class="p-4 text-center text-slate-700 font-semibold">60</td>
<td class="p-4 text-center text-slate-700 font-semibold">300</td>
<td class="p-4 text-center text-[#08C0D8] font-bold bg-cyan-50/30 border-x border-cyan-100/80">1,500</td>
<td class="p-4 text-center text-slate-900 font-bold">Unlimited</td>
</tr>
<tr class="table-row-item hover:bg-white/40 border-b border-slate-200/50 transition-colors" data-is-diff="false">
<td class="p-4 text-slate-800 font-medium">Product variants (Size, Color, Material)</td>
<td class="p-4 text-center text-emerald-600"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
<td class="p-4 text-center text-emerald-600"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
<td class="p-4 text-center text-emerald-600 bg-cyan-50/30 border-x border-cyan-100/80"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
<td class="p-4 text-center text-emerald-600"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
</tr>
<tr class="table-row-item hover:bg-white/40 border-b border-slate-200/50 transition-colors" data-is-diff="false">
<td class="p-4 text-slate-800 font-medium">Real-time inventory management</td>
<td class="p-4 text-center text-emerald-600"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
<td class="p-4 text-center text-emerald-600"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
<td class="p-4 text-center text-emerald-600 bg-cyan-50/30 border-x border-cyan-100/80"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
<td class="p-4 text-center text-emerald-600"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
</tr>
<tr class="table-row-item hover:bg-white/40 border-b border-slate-200/50 transition-colors" data-is-diff="false">
<td class="p-4 text-slate-800 font-medium">Bulk product import &amp; export (CSV/Excel)</td>
<td class="p-4 text-center text-emerald-600"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
<td class="p-4 text-center text-emerald-600"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
<td class="p-4 text-center text-emerald-600 bg-cyan-50/30 border-x border-cyan-100/80"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
<td class="p-4 text-center text-emerald-600"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
</tr>
<!-- CATEGORY 3: CUSTOMERS & ORDERS -->
<tr class="bg-slate-100/50 border-t border-b border-slate-200/70">
<td class="px-5 py-2.5 text-xs font-bold text-[#08C0D8] uppercase tracking-wider" colspan="5">
                3. Customers &amp; Orders
              </td>
</tr>
<tr class="table-row-item hover:bg-white/40 border-b border-slate-200/50 transition-colors" data-is-diff="false">
<td class="p-4 text-slate-800 font-medium">Order management &amp; unlimited orders</td>
<td class="p-4 text-center text-emerald-600"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
<td class="p-4 text-center text-emerald-600"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
<td class="p-4 text-center text-emerald-600 bg-cyan-50/30 border-x border-cyan-100/80"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
<td class="p-4 text-center text-emerald-600"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
</tr>
<tr class="table-row-item hover:bg-white/40 border-b border-slate-200/50 transition-colors" data-is-diff="true">
<td class="p-4 text-slate-800 font-medium">Registered customer accounts &amp; history</td>
<td class="p-4 text-center text-slate-300 font-bold">—</td>
<td class="p-4 text-center text-emerald-600"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
<td class="p-4 text-center text-emerald-600 bg-cyan-50/30 border-x border-cyan-100/80"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
<td class="p-4 text-center text-emerald-600"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
</tr>
<tr class="table-row-item hover:bg-white/40 border-b border-slate-200/50 transition-colors" data-is-diff="false">
<td class="p-4 text-slate-800 font-medium">Customer wishlist support</td>
<td class="p-4 text-center text-emerald-600"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
<td class="p-4 text-center text-emerald-600"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
<td class="p-4 text-center text-emerald-600 bg-cyan-50/30 border-x border-cyan-100/80"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
<td class="p-4 text-center text-emerald-600"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
</tr>
<tr class="table-row-item hover:bg-white/40 border-b border-slate-200/50 transition-colors" data-is-diff="true">
<td class="p-4 text-slate-800 font-medium">Abandoned checkout recovery &amp; reminders</td>
<td class="p-4 text-center text-slate-300 font-bold">—</td>
<td class="p-4 text-center text-slate-300 font-bold">—</td>
<td class="p-4 text-center text-emerald-600 bg-cyan-50/30 border-x border-cyan-100/80"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
<td class="p-4 text-center text-emerald-600"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
</tr>
<!-- CATEGORY 4: PAYMENTS & DELIVERY -->
<tr class="bg-slate-100/50 border-t border-b border-slate-200/70">
<td class="px-5 py-2.5 text-xs font-bold text-[#08C0D8] uppercase tracking-wider" colspan="5">
                4. Payments &amp; Delivery
              </td>
</tr>
<tr class="table-row-item hover:bg-white/40 border-b border-slate-200/50 transition-colors" data-is-diff="false">
<td class="p-4 text-slate-800 font-medium">Cash on delivery (Nationwide COD)</td>
<td class="p-4 text-center text-emerald-600"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
<td class="p-4 text-center text-emerald-600"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
<td class="p-4 text-center text-emerald-600 bg-cyan-50/30 border-x border-cyan-100/80"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
<td class="p-4 text-center text-emerald-600"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
</tr>
<tr class="table-row-item hover:bg-white/40 border-b border-slate-200/50 transition-colors" data-is-diff="false">
<td class="p-4 text-slate-800 font-medium">bKash payments integration</td>
<td class="p-4 text-center text-emerald-600"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
<td class="p-4 text-center text-emerald-600"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
<td class="p-4 text-center text-emerald-600 bg-cyan-50/30 border-x border-cyan-100/80"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
<td class="p-4 text-center text-emerald-600"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
</tr>
<tr class="table-row-item hover:bg-white/40 border-b border-slate-200/50 transition-colors" data-is-diff="true">
<td class="p-4 text-slate-800 font-medium">Secure COD OTP / Fraud Verification</td>
<td class="p-4 text-center text-slate-300 font-bold">—</td>
<td class="p-4 text-center text-emerald-600"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
<td class="p-4 text-center text-emerald-600 bg-cyan-50/30 border-x border-cyan-100/80"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
<td class="p-4 text-center text-emerald-600"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
</tr>
<tr class="table-row-item hover:bg-white/40 border-b border-slate-200/50 transition-colors" data-is-diff="true">
<td class="p-4 text-slate-800 font-medium">Courier APIs (Pathao, SteadFast, RedX)</td>
<td class="p-4 text-center text-slate-300 font-bold">—</td>
<td class="p-4 text-center text-xs text-slate-700">Pathao &amp; SteadFast</td>
<td class="p-4 text-center text-xs font-bold text-[#08C0D8] bg-cyan-50/30 border-x border-cyan-100/80">All 3 Integrated</td>
<td class="p-4 text-center text-xs font-bold text-slate-800">All 3 Integrated</td>
</tr>
<tr class="table-row-item hover:bg-white/40 border-b border-slate-200/50 transition-colors" data-is-diff="true">
<td class="p-4 text-slate-800 font-medium">Bulk courier parcel booking &amp; slips</td>
<td class="p-4 text-center text-slate-300 font-bold">—</td>
<td class="p-4 text-center text-slate-300 font-bold">—</td>
<td class="p-4 text-center text-emerald-600 bg-cyan-50/30 border-x border-cyan-100/80"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
<td class="p-4 text-center text-emerald-600"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
</tr>
<tr class="table-row-item hover:bg-white/40 border-b border-slate-200/50 transition-colors" data-is-diff="false">
<td class="p-4 text-slate-800 font-medium">Customer self-order tracking portal</td>
<td class="p-4 text-center text-emerald-600"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
<td class="p-4 text-center text-emerald-600"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
<td class="p-4 text-center text-emerald-600 bg-cyan-50/30 border-x border-cyan-100/80"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
<td class="p-4 text-center text-emerald-600"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
</tr>
<!-- CATEGORY 5: MARKETING & GROWTH -->
<tr class="bg-slate-100/50 border-t border-b border-slate-200/70">
<td class="px-5 py-2.5 text-xs font-bold text-[#08C0D8] uppercase tracking-wider" colspan="5">
                5. Marketing &amp; Growth
              </td>
</tr>
<tr class="table-row-item hover:bg-white/40 border-b border-slate-200/50 transition-colors" data-is-diff="true">
<td class="p-4 text-slate-800 font-medium">Coupons, vouchers &amp; cart discounts</td>
<td class="p-4 text-center text-slate-300 font-bold">—</td>
<td class="p-4 text-center text-emerald-600"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
<td class="p-4 text-center text-emerald-600 bg-cyan-50/30 border-x border-cyan-100/80"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
<td class="p-4 text-center text-emerald-600"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
</tr>
<tr class="table-row-item hover:bg-white/40 border-b border-slate-200/50 transition-colors" data-is-diff="true">
<td class="p-4 text-slate-800 font-medium">Verified customer product reviews</td>
<td class="p-4 text-center text-slate-300 font-bold">—</td>
<td class="p-4 text-center text-emerald-600"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
<td class="p-4 text-center text-emerald-600 bg-cyan-50/30 border-x border-cyan-100/80"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
<td class="p-4 text-center text-emerald-600"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
</tr>
<tr class="table-row-item hover:bg-white/40 border-b border-slate-200/50 transition-colors" data-is-diff="true">
<td class="p-4 text-slate-800 font-medium">SEO tools &amp; automated sitemaps</td>
<td class="p-4 text-center text-xs text-slate-400">Basic</td>
<td class="p-4 text-center text-xs text-slate-400">Basic</td>
<td class="p-4 text-center text-xs font-bold text-[#08C0D8] bg-cyan-50/30 border-x border-cyan-100/80">Advanced</td>
<td class="p-4 text-center text-xs font-bold text-slate-800">Advanced</td>
</tr>
<tr class="table-row-item hover:bg-white/40 border-b border-slate-200/50 transition-colors" data-is-diff="true">
<td class="p-4 text-slate-800 font-medium">Integrated blog &amp; articles engine</td>
<td class="p-4 text-center text-slate-300 font-bold">—</td>
<td class="p-4 text-center text-slate-300 font-bold">—</td>
<td class="p-4 text-center text-emerald-600 bg-cyan-50/30 border-x border-cyan-100/80"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
<td class="p-4 text-center text-emerald-600"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
</tr>
<tr class="table-row-item hover:bg-white/40 border-b border-slate-200/50 transition-colors" data-is-diff="true">
<td class="p-4 text-slate-800 font-medium">Meta Pixel &amp; CAPI (Server-side tracking)</td>
<td class="p-4 text-center text-slate-300 font-bold">—</td>
<td class="p-4 text-center text-xs text-slate-700">Client Pixel</td>
<td class="p-4 text-center text-xs font-bold text-[#08C0D8] bg-cyan-50/30 border-x border-cyan-100/80">Full Server CAPI</td>
<td class="p-4 text-center text-xs font-bold text-slate-800">Full Server CAPI</td>
</tr>
<tr class="table-row-item hover:bg-white/40 border-b border-slate-200/50 transition-colors" data-is-diff="true">
<td class="p-4 text-slate-800 font-medium">TikTok Pixel &amp; Google Tag Manager</td>
<td class="p-4 text-center text-slate-300 font-bold">—</td>
<td class="p-4 text-center text-slate-300 font-bold">—</td>
<td class="p-4 text-center text-emerald-600 bg-cyan-50/30 border-x border-cyan-100/80"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
<td class="p-4 text-center text-emerald-600"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
</tr>
<tr class="table-row-item hover:bg-white/40 border-b border-slate-200/50 transition-colors" data-is-diff="true">
<td class="p-4 text-slate-800 font-medium">SMS marketing campaigns</td>
<td class="p-4 text-center text-slate-300 font-bold">—</td>
<td class="p-4 text-center text-slate-300 font-bold">—</td>
<td class="p-4 text-center text-emerald-600 bg-cyan-50/30 border-x border-cyan-100/80"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
<td class="p-4 text-center text-emerald-600"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
</tr>
<!-- CATEGORY 6: ANALYTICS & REPORTING -->
<tr class="bg-slate-100/50 border-t border-b border-slate-200/70">
<td class="px-5 py-2.5 text-xs font-bold text-[#08C0D8] uppercase tracking-wider" colspan="5">
                6. Analytics &amp; Reporting
              </td>
</tr>
<tr class="table-row-item hover:bg-white/40 border-b border-slate-200/50 transition-colors" data-is-diff="true">
<td class="p-4 text-slate-800 font-medium">Sales &amp; order analytics</td>
<td class="p-4 text-center text-xs text-slate-400">Basic</td>
<td class="p-4 text-center text-xs text-slate-400">Basic</td>
<td class="p-4 text-center text-xs font-bold text-[#08C0D8] bg-cyan-50/30 border-x border-cyan-100/80">Advanced</td>
<td class="p-4 text-center text-xs font-bold text-slate-800">Advanced</td>
</tr>
<tr class="table-row-item hover:bg-white/40 border-b border-slate-200/50 transition-colors" data-is-diff="true">
<td class="p-4 text-slate-800 font-medium">Product performance &amp; margin analytics</td>
<td class="p-4 text-center text-slate-300 font-bold">—</td>
<td class="p-4 text-center text-emerald-600"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
<td class="p-4 text-center text-emerald-600 bg-cyan-50/30 border-x border-cyan-100/80"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
<td class="p-4 text-center text-emerald-600"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
</tr>
<!-- CATEGORY 7: AI & AUTOMATION ENGINE -->
<tr class="bg-slate-100/50 border-t border-b border-slate-200/70">
<td class="px-5 py-2.5 text-xs font-bold text-[#08C0D8] uppercase tracking-wider" colspan="5">
                7. AI &amp; Automation Engine
              </td>
</tr>
<tr class="table-row-item hover:bg-white/40 border-b border-slate-200/50 transition-colors" data-is-diff="true">
<td class="p-4 text-slate-800 font-semibold">AI Credits per month</td>
<td class="p-4 text-center text-slate-400 font-semibold">0</td>
<td class="p-4 text-center text-slate-400 font-semibold">0</td>
<td class="p-4 text-center text-[#08C0D8] font-bold bg-cyan-50/30 border-x border-cyan-100/80">1,000 / mo</td>
<td class="p-4 text-center text-slate-900 font-bold">10,000 / mo</td>
</tr>
<tr class="table-row-item hover:bg-white/40 border-b border-slate-200/50 transition-colors" data-is-diff="true">
<td class="p-4 text-slate-800 font-medium">AI product description generator</td>
<td class="p-4 text-center text-slate-300 font-bold">—</td>
<td class="p-4 text-center text-slate-300 font-bold">—</td>
<td class="p-4 text-center text-emerald-600 bg-cyan-50/30 border-x border-cyan-100/80"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
<td class="p-4 text-center text-emerald-600"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
</tr>
<tr class="table-row-item hover:bg-white/40 border-b border-slate-200/50 transition-colors" data-is-diff="true">
<td class="p-4 text-slate-800 font-medium">AI blog writer &amp; SEO helper</td>
<td class="p-4 text-center text-slate-300 font-bold">—</td>
<td class="p-4 text-center text-slate-300 font-bold">—</td>
<td class="p-4 text-center text-emerald-600 bg-cyan-50/30 border-x border-cyan-100/80"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
<td class="p-4 text-center text-emerald-600"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
</tr>
<tr class="table-row-item hover:bg-white/40 border-b border-slate-200/50 transition-colors" data-is-diff="true">
<td class="p-4 text-slate-800 font-medium">UrShop AI 24/7 Site Assistant Bot</td>
<td class="p-4 text-center text-slate-300 font-bold">—</td>
<td class="p-4 text-center text-slate-300 font-bold">—</td>
<td class="p-4 text-center text-emerald-600 bg-cyan-50/30 border-x border-cyan-100/80"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
<td class="p-4 text-center text-emerald-600"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
</tr>
<!-- CATEGORY 8: STAFF & SUPPORT -->
<tr class="bg-slate-100/50 border-t border-b border-slate-200/70">
<td class="px-5 py-2.5 text-xs font-bold text-[#08C0D8] uppercase tracking-wider" colspan="5">
                8. Staff &amp; Support
              </td>
</tr>
<tr class="table-row-item hover:bg-white/40 border-b border-slate-200/50 transition-colors" data-is-diff="true">
<td class="p-4 text-slate-800 font-medium">Staff team accounts</td>
<td class="p-4 text-center text-slate-700 font-medium">1 account</td>
<td class="p-4 text-center text-slate-700 font-medium">2 accounts</td>
<td class="p-4 text-center text-[#08C0D8] font-bold bg-cyan-50/30 border-x border-cyan-100/80">5 accounts</td>
<td class="p-4 text-center text-slate-900 font-bold">10 accounts</td>
</tr>
<tr class="table-row-item hover:bg-white/40 border-b border-slate-200/50 transition-colors" data-is-diff="true">
<td class="p-4 text-slate-800 font-medium">Customer support response tier</td>
<td class="p-4 text-center text-xs text-slate-400">Standard</td>
<td class="p-4 text-center text-xs text-slate-400">Standard</td>
<td class="p-4 text-center text-xs font-bold text-[#08C0D8] bg-cyan-50/30 border-x border-cyan-100/80">Priority</td>
<td class="p-4 text-center text-xs font-bold text-slate-800">24/7 Highest Priority</td>
</tr>
<!-- CATEGORY 9: WHOLESALE & B2B -->
<tr class="bg-slate-100/50 border-t border-b border-slate-200/70">
<td class="px-5 py-2.5 text-xs font-bold text-[#08C0D8] uppercase tracking-wider" colspan="5">
                9. Wholesale &amp; B2B Selling
              </td>
</tr>
<tr class="table-row-item hover:bg-white/40 border-b border-slate-200/50 transition-colors" data-is-diff="true">
<td class="p-4 text-slate-800 font-medium">Tiered Wholesale pricing &amp; B2B portal</td>
<td class="p-4 text-center text-slate-300 font-bold">—</td>
<td class="p-4 text-center text-slate-300 font-bold">—</td>
<td class="p-4 text-center text-slate-300 font-bold bg-cyan-50/30 border-x border-cyan-100/80">—</td>
<td class="p-4 text-center text-emerald-600"><span class="material-symbols-outlined text-[20px]">check_circle</span></td>
</tr>
</tbody>
</table>
</div>
<!-- Table Footer CTA Bar -->
<div class="p-5 sm:p-6 bg-slate-50/60 border-t border-slate-200/70 flex flex-col sm:flex-row items-center justify-between gap-4">
<div class="flex items-center gap-2.5 text-slate-600 text-xs sm:text-sm">
<span class="material-symbols-outlined text-[20px] text-[#08C0D8]">contact_support</span>
<span class="">Need a tailored custom configuration or multi-store enterprise volume?</span>
</div>
<a class="rounded-full text-slate-800 text-sm font-bold px-5 py-2 border transition-all flex items-center justify-center active:scale-95 hover:bg-white/90" style="background: rgba(255, 255, 255, 0.85); backdrop-filter: blur(14px); border-color: rgba(255, 255, 255, 0.95); box-shadow: rgba(15, 23, 42, 0.05) 0px 4px 14px 0px, rgba(255, 255, 255, 0.95) 0px 1px 1.5px inset;" href="#">Talk to Sales Team</a>
</div>
</div>
<!-- FAQ SECTION (LIQUID GLASS ACCORDIONS) -->

<!-- CLOSING CTA BANNER -->

</main>
<!-- MIDNIGHT INK DARK FOOTER (MATCH SCREEN_7) -->

<!-- SCRIPT FOR DYNAMIC BILLING SWITCH & TABLE FILTER -->







`;
