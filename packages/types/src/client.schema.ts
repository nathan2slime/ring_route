import { z } from 'zod';

import { location } from '@/location.schema';

export const client = {
  new: z
    .object({
      name: z.string(),
      phone: z.string(),
      email: z.string().email(),
    })
    .merge(location.new),
};
