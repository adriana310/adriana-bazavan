import { imagineOG } from "@/app/_og/imagine";

export const alt = "Unu la unu, cu un obiectiv clar · Adriana Băzăvan, English Teacher";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Imagine() {
  return imagineOG({ supratitlu: "Cum lucrez", titlu: "Unu la unu, cu un obiectiv clar" });
}
