import { z } from 'zod';

import { client } from '@/client.schema';
import { Location } from '@/types/location.type';
import { BaseEntity } from '@/types/index';

export type NewClientPayload = z.infer<typeof client.new>;
export type NewClientEntity = Omit<
  NewClientPayload,
  'latitude' | 'longitude'
> & {
  location_id: string;
};

export type ClientEntity = NewClientEntity & BaseEntity;

export type Client = ClientEntity & {
  location: Location | null;
};
