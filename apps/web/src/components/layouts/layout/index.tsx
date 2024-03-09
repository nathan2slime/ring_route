'use client';

import { Menu } from '../menu';

import { AppChildren } from '@/types';

export const Layout = ({ children }: AppChildren) => {
  return (
    <div className="w-screen h-screen p-10 flex gap-10 justify-between items-center">
      <Menu />

      <div className="w-full h-full">{children}</div>
    </div>
  );
};
