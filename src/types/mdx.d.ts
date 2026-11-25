// Fișierele .mdx din src/continut exportă, pe lângă text, și `informatii` despre articol.
declare module "*.mdx" {
  export const informatii: Record<string, unknown>;
}
