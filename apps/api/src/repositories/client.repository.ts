import { ClientEntity, NewClientEntity } from '@clp/types';

import { db } from '@/database';

export class ClientRepository {
  async create(payload: NewClientEntity) {
    try {
      const res = await db.query<ClientEntity, string[]>(
        'INSERT INTO clients(name, email, phone, location_id) VALUES ($1,$2,$3,$4) RETURNING *',
        [payload.name, payload.email, payload.phone, payload.location_id],
      );

      return res.rows[0];
    } catch (e) {
      if (e instanceof Error) throw new Error(e.message);
    }
  }

  async find() {
    try {
      const res = await db.query<ClientEntity>('SELECT *  FROM clients');

      return res.rows;
    } catch (e) {
      if (e instanceof Error) throw new Error(e.message);
    }
  }

  async getByID(id: string) {
    try {
      const res = await db.query<ClientEntity>(
        'SELECT *  FROM clients WHERE id = $1',
        [id],
      );

      return res.rows[0];
    } catch (e) {
      if (e instanceof Error) throw new Error(e.message);
    }
  }
}
