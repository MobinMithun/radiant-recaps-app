// Interactions from the original landing page design: FAQ category tabs,
// pricing billing toggle and the comparison-table "differences only" filter.

const pricingData: Record<string, Record<string, string>> = {
  monthly: {
    starter: "৳550",
    starterSub: "Billed monthly",
    growth: "৳1,050",
    growthSub: "Billed monthly",
    scale: "৳2,250",
    scaleSub: "Billed monthly",
  },
  yearly: {
    starter: "৳440",
    starterSub: "Billed ৳5,280 / year (Save 20%)",
    growth: "৳840",
    growthSub: "Billed ৳10,080 / year (Save 20%)",
    scale: "৳1,800",
    scaleSub: "Billed ৳21,600 / year (Save 20%)",
  },
};

function filterFaq(category: string, btn: HTMLElement) {
  const container = document.getElementById("faq-tab-container");
  if (container) {
    container.querySelectorAll<HTMLElement>(".faq-tab-btn").forEach((b) => {
      b.className =
        "faq-tab-btn px-7 py-2.5 rounded-full text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-white/50 transition-all duration-200 cursor-pointer bg-transparent";
      b.style.background = "transparent";
      b.style.boxShadow = "none";
    });
    btn.className =
      "faq-tab-btn active px-7 py-2.5 rounded-full text-sm font-semibold text-white shadow-sm transition-all duration-200 cursor-pointer border border-white/30";
    btn.style.background = "linear-gradient(135deg, rgb(2, 132, 199) 0%, rgb(8, 192, 216) 100%)";
    btn.style.boxShadow =
      "rgba(8, 192, 216, 0.35) 0px 4px 14px, rgba(255, 255, 255, 0.35) 0px 1px 1px inset";
  }
  document.querySelectorAll<HTMLElement>("#faqs .divide-y > details").forEach((item) => {
    const cats = item.getAttribute("data-category") || "";
    item.style.display = category === "all" || cats.indexOf(category) !== -1 ? "" : "none";
  });
}

function setBilling(mode: string) {
  const monthlyBtn = document.getElementById("billing-monthly-btn");
  const yearlyBtn = document.getElementById("billing-yearly-btn");
  if (!monthlyBtn || !yearlyBtn) return;

  if (mode === "monthly") {
    monthlyBtn.className =
      "relative px-6 py-2.5 rounded-full text-[13px] font-bold transition-all duration-200 glass-btn-primary text-slate-900 flex items-center gap-1.5";
    yearlyBtn.className =
      "relative px-6 py-2.5 rounded-full text-[13px] font-semibold transition-all duration-200 text-slate-700 hover:text-slate-900 flex items-center gap-2";
  } else {
    yearlyBtn.className =
      "relative px-6 py-2.5 rounded-full text-[13px] font-bold transition-all duration-200 glass-btn-primary text-slate-900 flex items-center gap-2";
    monthlyBtn.className =
      "relative px-6 py-2.5 rounded-full text-[13px] font-semibold transition-all duration-200 text-slate-700 hover:text-slate-900 flex items-center gap-1.5";
  }

  const set = (id: string, value: string) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  };
  const data = pricingData[mode];
  if (!data) return;
  set("price-starter", data["starter"]!);
  set("sub-starter", data["starterSub"]!);
  set("price-growth", data["growth"]!);
  set("sub-growth", data["growthSub"]!);
  set("price-scale", data["scale"]!);
  set("sub-scale", data["scaleSub"]!);
}

function toggleDiffOnly(diffOnly: boolean) {
  document.querySelectorAll<HTMLElement>(".table-row-item").forEach((row) => {
    const isDiff = row.getAttribute("data-is-diff") === "true";
    row.style.display = diffOnly && !isDiff ? "none" : "";
  });
}

export function initLandingScripts() {
  const w = window as unknown as Record<string, unknown>;
  w["filterFaq"] = filterFaq;
  w["setBilling"] = setBilling;
  w["toggleDiffOnly"] = toggleDiffOnly;
}
