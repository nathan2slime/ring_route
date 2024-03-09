'use client';

import { NextUIProvider } from '@nextui-org/react';

import { AppChildren } from '@/types';

export const Providers = ({ children }: AppChildren) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};
