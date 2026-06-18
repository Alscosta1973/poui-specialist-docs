import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { PreviewModal } from '@/components/preview-modal';

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    PreviewModal,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
