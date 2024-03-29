import { z } from 'zod';

export const location = {
  new: z.object({
    latitude: z.number(),
    longitude: z.number(),
  }),
};
