import { imagineOG } from "@/app/_og/imagine";

export const alt = "Ca un copil să se împrietenească cu engleza · Adriana Băzăvan, English Teacher";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Imagine() {
  return imagineOG({ supratitlu: "Pentru copii", titlu: "Ca un copil să se împrietenească cu engleza" });
}
