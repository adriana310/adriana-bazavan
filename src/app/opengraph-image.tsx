import { imagineOG } from "@/app/_og/imagine";

export const alt = "Un obiectiv clar și un drum pe măsura fiecăruia · Adriana Băzăvan, English Teacher";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Imagine() {
  return imagineOG({ supratitlu: "Engleză unu la unu", titlu: "Un obiectiv clar și un drum pe măsura fiecăruia" });
}
