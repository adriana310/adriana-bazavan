import { imagineOG } from "@/app/_og/imagine";

export const alt = "Sprijin pentru proiectele educaționale · Adriana Băzăvan, English Teacher";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Imagine() {
  return imagineOG({ supratitlu: "Proiecte în educație", titlu: "Sprijin pentru proiectele educaționale" });
}
