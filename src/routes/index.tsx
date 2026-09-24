import { createFileRoute } from "@tanstack/react-router";
import { createRoot } from "react-dom/client";
import { useEffect } from "react";

import MetallicButton from "@/components/ui/metallic-button";
import { LocationMap } from "@/components/ui/expand-map";
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

    const locationMapElement = document.getElementById("footer-location-map");
    if (locationMapElement) {
      const locationMapRoot = createRoot(locationMapElement);
      locationMapRoot.render(
        <LocationMap
          location="Dhaka, Bangladesh"
          coordinates="23.8103° N, 90.4125° E"
          className="max-w-[280px]"
        />,
      );
      roots.push(locationMapRoot);
    }

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

    const siteNavigation = document.getElementById("site-navigation");
    const siteFooter = document.querySelector("footer");
    const footerObserver =
      siteNavigation && siteFooter
        ? new IntersectionObserver(
            ([entry]) => {
              const hideNavigation = entry.isIntersecting;
              siteNavigation.classList.toggle("nav-hidden-near-footer", hideNavigation);
              siteNavigation.toggleAttribute("inert", hideNavigation);
            },
            { rootMargin: "0px 0px 280px 0px", threshold: 0 },
          )
        : null;
    if (siteFooter) footerObserver?.observe(siteFooter);

    const alignHowItWorksPath = () => {
      const titleBlock = document.querySelector<HTMLElement>(".how-it-works-title-block");
      const line = document.querySelector<HTMLElement>(".how-it-works-data-line");
      const points = Array.from(
        document.querySelectorAll<HTMLElement>(".how-it-works-data-point"),
      );
      if (!titleBlock || !line || points.length !== 3) return;

      const titleRect = titleBlock.getBoundingClientRect();
      const lineRect = line.getBoundingClientRect();
      const titleCenter = titleRect.left + titleRect.width / 2;
      const pointCenters = points.map((point) => {
        const rect = point.getBoundingClientRect();
        return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
      });
      const middleCenter = pointCenters[1];
      if (!middleCenter || lineRect.width === 0) return;

      titleBlock.style.setProperty(
        "--title-connector-left",
        `${middleCenter.x - titleRect.left}px`,
      );
      line.style.setProperty("--packet-start-left", `${titleCenter - lineRect.left - 3.5}px`);
      line.style.setProperty("--packet-start-top", `${titleRect.bottom - lineRect.top - 3.5}px`);
      line.style.setProperty("--packet-rail-top", `${lineRect.height / 2 - 3.5}px`);

      pointCenters.forEach((center, index) => {
        line.style.setProperty(`--packet-${index}-left`, `${center.x - lineRect.left - 3.5}px`);
        line.style.setProperty(`--packet-${index}-top`, `${center.y - lineRect.top - 3.5}px`);
      });
    };

    alignHowItWorksPath();
    const pathResizeObserver = new ResizeObserver(alignHowItWorksPath);
    const titleBlock = document.querySelector(".how-it-works-title-block");
    const dataLine = document.querySelector(".how-it-works-data-line");
    if (titleBlock) pathResizeObserver.observe(titleBlock);
    if (dataLine) pathResizeObserver.observe(dataLine);
    document.querySelectorAll(".how-it-works-data-point").forEach((point) => {
      pathResizeObserver.observe(point);
    });
    window.addEventListener("resize", alignHowItWorksPath);

    return () => {
      pathResizeObserver.disconnect();
      footerObserver?.disconnect();
      siteNavigation?.classList.remove("nav-hidden-near-footer");
      siteNavigation?.removeAttribute("inert");
      window.removeEventListener("resize", alignHowItWorksPath);
      roots.forEach((root) => root.unmount());
    };
  }, []);

  return <div className={landingBodyClass} dangerouslySetInnerHTML={{ __html: landingHtml }} />;
}
