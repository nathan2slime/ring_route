import { z } from 'zod';

export const client = {
  new: z.object({
    name: z.string(),
    phone: z.string(),
    email: z.string().email(),
  }),
};

export type NewClient = z.infer<typeof client.new>;
export type Client = NewClient & {
  id: string;
  created_at: Date;
};
