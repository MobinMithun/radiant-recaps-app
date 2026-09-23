import * as React from "react";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

type LiquidMetalButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
  label?: string;
  viewMode?: "text" | "icon";
};

const LiquidMetalButton = React.forwardRef<HTMLButtonElement, LiquidMetalButtonProps>(
  ({ className, label = "Get Started", viewMode = "text", type = "button", ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      className={cn("liquid-metal-button", viewMode === "icon" && "liquid-metal-button-icon", className)}
      aria-label={viewMode === "icon" ? label : undefined}
      {...props}
    >
      {viewMode === "icon" ? <ArrowUpRight aria-hidden="true" /> : label}
    </button>
  ),
);

LiquidMetalButton.displayName = "LiquidMetalButton";

export { LiquidMetalButton };
