import { imagineOG } from "@/app/_og/imagine";

export const alt = "Engleză pentru tine, în ritmul tău · Adriana Băzăvan, English Teacher";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Imagine() {
  return imagineOG({ supratitlu: "Pentru adulți", titlu: "Engleză pentru tine, în ritmul tău" });
}
