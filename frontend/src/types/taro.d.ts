declare function defineAppConfig<TConfig extends Record<string, unknown>>(config: TConfig): TConfig;

declare function definePageConfig<TConfig extends Record<string, unknown>>(config: TConfig): TConfig;

declare module '@tarojs/components' {
  import type { PropsWithChildren } from 'react';

  export function View(props: PropsWithChildren<{ className?: string }>): JSX.Element;
  export function Text(props: PropsWithChildren<{ className?: string }>): JSX.Element;
}
