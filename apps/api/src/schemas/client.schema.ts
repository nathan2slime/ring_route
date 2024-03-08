import { z } from 'zod';

import { location } from '@/schemas/location.schema';

export const client = {
  new: z
    .object({
      name: z.string(),
      phone: z.string(),
      email: z.string().email(),
    })
    .merge(location.new),
};
