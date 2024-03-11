'use client';

import { PlusSquare, RouteIcon } from 'lucide-react';
import { Button, Card } from '@nextui-org/react';
import { useState } from 'react';

import { CreateClient } from '@/components/core/create-client';

export const Menu = () => {
  const [isOpenNewClient, setIsOpenNewClient] = useState(false);

  return (
    <Card
      shadow="sm"
      className="flex gap-2 backdrop-blur-md flex-shrink-0 p-4 items-center flex-col w-full h-full max-w-[150px]"
    >
      <CreateClient
        open={isOpenNewClient}
        onToggle={e => setIsOpenNewClient(e)}
      />

      <Button
        onClick={() => setIsOpenNewClient(true)}
        className="w-full justify-start font-medium"
      >
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
