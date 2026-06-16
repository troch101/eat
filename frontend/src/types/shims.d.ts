declare namespace JSX {
  interface Element {}
  interface IntrinsicElements {
    [elementName: string]: unknown;
  }
}

declare module '*.scss';

declare module 'react' {
  export type PropsWithChildren<TProps = unknown> = TProps & {
    children?: JSX.Element | JSX.Element[] | string | number | null;
  };
}

declare module 'react/jsx-runtime' {
  export function jsx(type: unknown, props: unknown, key?: unknown): JSX.Element;
  export function jsxs(type: unknown, props: unknown, key?: unknown): JSX.Element;
  export const Fragment: unknown;
}

declare module '@tanstack/react-query' {
  import type { PropsWithChildren } from 'react';

  export class QueryClient {
    constructor(config?: Record<string, unknown>);
  }

  export function QueryClientProvider(
    props: PropsWithChildren<{ client: QueryClient }>,
  ): JSX.Element;
}
