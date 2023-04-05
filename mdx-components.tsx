import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className='text-4xl font-semibold'>{children}</h1>,
    h2: ({ children }) => <h1 className='text-xl'>{children}</h1>,

    ...components,
  };
}
