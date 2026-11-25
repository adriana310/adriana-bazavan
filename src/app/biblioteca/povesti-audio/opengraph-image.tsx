import { imagineOG } from "@/app/_og/imagine";

export const alt = "Povești în engleză, cu vocea mea · Adriana Băzăvan, English Teacher";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Imagine() {
  return imagineOG({ supratitlu: "Bibliotecă · Povești audio", titlu: "Povești în engleză, cu vocea mea" });
}
