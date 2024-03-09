'use client';

import { PlusSquare, Route, RouteIcon } from 'lucide-react';
import { Button, Card } from '@nextui-org/react';

export const Menu = () => {
  return (
    <Card
      shadow="sm"
      className="flex bg-[#18181bcc] gap-2 backdrop-blur-md flex-shrink-0 p-4 items-center flex-col w-full h-full max-w-[150px]"
    >
      <Button className="w-full justify-start font-medium">
        <PlusSquare className="w-5 h-5" />
        New
      </Button>

      <Button className="w-full justify-start font-medium">
        <RouteIcon className="w-5 h-5" />
        Router
      </Button>
    </Card>
  );
};
