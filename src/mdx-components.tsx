import type { MDXComponents } from "mdx/types";
import Link from "next/link";

// Cum arată textul articolelor din Caietul cu idei.
const componente: MDXComponents = {
  h2: (props) => <h2 className="mt-12 text-2xl sm:text-3xl" {...props} />,
  h3: (props) => <h3 className="mt-8 text-xl sm:text-2xl" {...props} />,
  p: (props) => <p className="mt-5 text-lg leading-8 text-verde-negru/90" {...props} />,
  ul: (props) => <ul className="mt-5 list-disc space-y-2 pl-6 text-lg leading-8 marker:text-sofran" {...props} />,
  ol: (props) => <ol className="mt-5 list-decimal space-y-2 pl-6 text-lg leading-8 marker:text-auriu-inchis" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="mt-8 rounded-r-2xl border-l-4 border-sofran bg-galben-pal/50 px-6 py-4 font-titluri text-xl italic text-verde-negru"
      {...props}
    />
  ),
  a: ({ href = "", ...props }) =>
    href.startsWith("/") ? (
      <Link href={href} className="font-semibold text-smarald underline underline-offset-4" {...props} />
    ) : (
      <a href={href} target="_blank" rel="noopener" className="font-semibold text-smarald underline underline-offset-4" {...props} />
    ),
  strong: (props) => <strong className="font-semibold text-verde-negru" {...props} />,
};

export function useMDXComponents(): MDXComponents {
  return componente;
}
