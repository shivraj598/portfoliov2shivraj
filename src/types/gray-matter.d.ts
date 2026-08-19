declare module "gray-matter" {
  interface GrayMatterFile<T> {
    data: T;
    content: string;
    excerpt?: string;
    orig: string;
    lang: string;
    matter: string;
    stringify: (data?: T) => string;
  }

  interface GrayMatterOptions<T> {
    excerpt?: boolean | ((input: string, options: GrayMatterOptions<T>) => string);
    engines?: Record<string, (value: string) => T>;
    language?: string;
    delimiters?: string | [string, string];
  }

  export default function matter<T = Record<string, unknown>>(
    input: string,
    options?: GrayMatterOptions<T>
  ): GrayMatterFile<T>;
}