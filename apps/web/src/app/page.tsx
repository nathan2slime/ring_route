'use client';

import dynamic from 'next/dynamic';
import { useMemo } from 'react';

const Home = () => {
  const Map = useMemo(
    () =>
      dynamic(() => import('@/components/core/map').then(res => res.Map), {
        ssr: false,
      }),
    [],
  );

  return (
    <div className="w-full h-full">
      <Map type="view" />
    </div>
  );
};

export default Home;
