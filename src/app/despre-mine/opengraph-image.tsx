import { imagineOG } from "@/app/_og/imagine";

export const alt = "Sunt Adriana, English Teacher · Adriana Băzăvan, English Teacher";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Imagine() {
  return imagineOG({ supratitlu: "Despre mine", titlu: "Sunt Adriana, English Teacher" });
}
