import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

import { landingBodyClass, landingHtml } from "@/lib/landing-html";
import { initLandingScripts } from "@/lib/landing-scripts";

const title = "UrShop — Launch your online shop in under 5 minutes";
const description =
  "The simplest way for Bangladeshi shops and creators to sell products online: bKash & Nagad payouts, automated Pathao, Steadfast and RedX delivery, and a clean checkout page.";

export const Route = createFileRoute("/")({
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
  component: Index,
});

function Index() {
  useEffect(() => {
    initLandingScripts();
  }, []);

  return <div className={landingBodyClass} dangerouslySetInnerHTML={{ __html: landingHtml }} />;
}
