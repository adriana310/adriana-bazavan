import { imagineOG } from "@/app/_og/imagine";

export const alt = "Ce scriu între două ore · Adriana Băzăvan, English Teacher";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Imagine() {
  return imagineOG({ supratitlu: "Caietul cu idei", titlu: "Ce scriu între două ore" });
}
