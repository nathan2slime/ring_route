import { Client, NewClient } from '@/schemas/client.schema';

import { db } from '@/database';

export class ClientRepository {
  async create(payload: NewClient) {
    try {
      await db.connect();

      const res = await db.query<Client, string[]>(
        'INSERT INTO clients(name, phone, email) VALUES ($1,$2,$3) RETURNING *',
        [payload.name, payload.email, payload.phone],
      );

      return res.rows[0];
    } catch (e) {
      if (e instanceof Error) throw new Error(e.message);
    }
  }
}
