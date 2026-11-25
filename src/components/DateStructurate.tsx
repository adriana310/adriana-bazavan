/**
 * Date structurate (schema.org, JSON-LD): îi spun lui Google și asistenților AI (ChatGPT, Gemini, Copilot)
 * cine e Adriana, ce servicii are, cât costă și ce întrebări primește. Nu se văd pe pagină.
 */
export function DateStructurate({ date }: { date: Record<string, unknown> | Record<string, unknown>[] }) {
  const json = JSON.stringify(Array.isArray(date) ? { "@context": "https://schema.org", "@graph": date } : date).replace(
    /</g,
    "\\u003c",
  );
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
