import { imagineOG } from "@/app/_og/imagine";

export const alt = "Examenul, ca un antrenament cu pași clari · Adriana Băzăvan, English Teacher";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Imagine() {
  return imagineOG({ supratitlu: "Examene de limbă", titlu: "Examenul, ca un antrenament cu pași clari" });
}
