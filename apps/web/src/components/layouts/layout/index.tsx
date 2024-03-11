'use client';

import { Card } from '@nextui-org/react';
import { Toaster } from 'react-hot-toast';

import { Menu } from '../menu';

import { AppChildren } from '@/types';

export const Layout = ({ children }: AppChildren) => {
  return (
    <div className="w-screen h-screen p-10 flex gap-10 justify-between items-center">
      <Menu />

      <Toaster containerClassName="toast" />

      <Card
        shadow="sm"
        className="w-full bg-[#18181bcc] gap-2 backdrop-blur-md h-full"
      >
        {children}
      </Card>
    </div>
  );
};
