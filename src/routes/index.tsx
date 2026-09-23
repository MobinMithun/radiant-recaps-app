import { createFileRoute } from "@tanstack/react-router";
import { createRoot } from "react-dom/client";
import { useEffect } from "react";

import MetallicButton from "@/components/ui/metallic-button";
import { DiaText } from "@/components/dia-text";
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

    const mounts = [
      {
        id: "start-my-shop-button-mount",
        label: "Start my Shop",
      },
      {
        id: "start-free-trial-button-mount",
        label: "Start Free Trial",
      },
    ];

    const roots = mounts.flatMap(({ id, label }) => {
      const element = document.getElementById(id);
      if (!element) return [];

      const root = createRoot(element);
      root.render(
        <MetallicButton
          label={label}
          baseColor="#08c0d8"
          sheenColor="#ffffff"
          className="w-full sm:w-auto"
          onClick={() => window.location.assign("/pricing")}
        />,
      );
      return [root];
    });

    const titleElement = document.getElementById("hero-title-mount");
    if (titleElement) {
      const titleRoot = createRoot(titleElement);
      titleRoot.render(
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] max-w-4xl mb-6 font-sans">
          Start selling
          <div>
            <span className="cyan-underline relative inline-block px-1">
              <DiaText
                words={["products", "digitals", "anything"]}
                duration={2400}
                className="min-w-0 text-slate-900"
              />
              <span className="text-slate-900">{" online"}</span>
            </span>
          </div>
        </h1>,
      );
      roots.push(titleRoot);
    }

    return () => roots.forEach((root) => root.unmount());
  }, []);

  return <div className={landingBodyClass} dangerouslySetInnerHTML={{ __html: landingHtml }} />;
}
