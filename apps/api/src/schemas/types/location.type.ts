import { z } from 'zod';

import { location } from '@/schemas/location.schema';
import { BaseEntity } from '@/schemas/types/index';

export type NewLocation = z.infer<typeof location.new>;
export type Location = NewLocation & BaseEntity;
