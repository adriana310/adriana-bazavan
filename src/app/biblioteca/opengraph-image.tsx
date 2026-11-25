import { imagineOG } from "@/app/_og/imagine";

export const alt = "Povești și materiale pentru acasă · Adriana Băzăvan, English Teacher";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Imagine() {
  return imagineOG({ supratitlu: "Bibliotecă", titlu: "Povești și materiale pentru acasă" });
}
