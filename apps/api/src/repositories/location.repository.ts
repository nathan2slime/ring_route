import { Location, NewLocation } from '@/schemas/types/location.type';

import { db } from '@/database';

export class LocationRepository {
  async create(payload: NewLocation) {
    try {
      const res = await db.query<Location>(
        'INSERT INTO locations(latitude, longitude) VALUES($1, $2) RETURNING *',
        [payload.latitude, payload.longitude],
      );

      return res.rows[0];
    } catch (e) {
      if (e instanceof Error) throw new Error(e.message);
    }
  }

  async getByID(id: string) {
    try {
      const res = await db.query<Location>(
        'SELECT *  FROM locations WHERE id = $1',
        [id],
      );

      return res.rows[0];
    } catch (e) {
      if (e instanceof Error) throw new Error(e.message);
    }
  }
}
