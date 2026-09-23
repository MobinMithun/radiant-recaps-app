import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

import { pricingBodyClass, pricingHtml } from "@/lib/pricing-html";
import { initLandingScripts } from "@/lib/landing-scripts";

const title = "UrShop Pricing — Plans for every Bangladeshi shop";
const description =
  "Compare UrShop plans: monthly or yearly billing, unlimited products, bKash and Nagad payouts, automated courier dispatch and Meta ads tooling.";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Pricing,
});

function Pricing() {
  useEffect(() => {
    initLandingScripts();
  }, []);

  return (
    <div
      className={`${pricingBodyClass} bg-white`}
      dangerouslySetInnerHTML={{ __html: pricingHtml }}
    />
  );
}
