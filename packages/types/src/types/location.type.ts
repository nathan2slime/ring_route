import { z } from 'zod';

import { location } from '@/location.schema';
import { BaseEntity } from './index';

export type NewLocation = z.infer<typeof location.new>;
export type Location = NewLocation & BaseEntity;
