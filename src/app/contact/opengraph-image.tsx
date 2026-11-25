import { imagineOG } from "@/app/_og/imagine";

export const alt = "Scrieți-mi și vedem împreună de unde pornim · Adriana Băzăvan, English Teacher";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Imagine() {
  return imagineOG({ supratitlu: "Contact", titlu: "Scrieți-mi și vedem împreună de unde pornim" });
}
