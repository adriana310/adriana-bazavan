import Image from "next/image";
import { Buton, Container } from "@/components/ui";

export default function NuExista() {
  return (
    <Container className="flex flex-col items-center py-24 text-center">
      <Image src="/brand/simbol-verde.svg" alt="" width={120} height={120} unoptimized />
      <h1 className="mt-8 text-4xl sm:text-5xl">Pagina aceasta nu există</h1>
      <p className="mt-4 max-w-md text-lg text-verde-negru/80">
        Poate s-a mutat sau adresa are o greșeală. Ne întoarcem pe prima pagină?
      </p>
      <Buton href="/" className="mt-8">
        Înapoi acasă
      </Buton>
    </Container>
  );
}
