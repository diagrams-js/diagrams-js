/**
 * Vite type declarations
 */

declare interface ImportMeta {
  glob(pattern: string, options?: { eager?: boolean }): Record<string, unknown>;
}

declare module "*.png" {
  const value: string;
  export default value;
}
