import { ClientRepository } from '@/repositories/client.repository';

import { Client, NewClientEntity } from '@clp/types';

import { db } from '@/database';

describe('ClientRepository', () => {
  describe('create', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    const newClient: NewClientEntity = {
      email: expect.any(String),
      phone: expect.any(String),
      name: expect.any(String),
      location_id: expect.any(Number),
    };

    const client: Client = {
      ...newClient,
      id: expect.any(Number),
      created_at: expect.any(Date),
      updated_at: expect.any(Date),
      location: null,
      deleted_at: null,
    };

    it('should create and return user', async () => {
      jest.spyOn(db, 'query').mockImplementation(() => ({
        rows: [client],
      }));

      const clientRepository = new ClientRepository();
      const res = await clientRepository.create(newClient);

      expect(res).toEqual(client);
      expect(db.query).toHaveBeenCalled();
      expect(db.query).toHaveBeenCalledTimes(1);
    });

    it('should return an error when something occurs', async () => {
      const error = 'Connection timeout';

      jest.spyOn(db, 'query').mockImplementation(() => {
        throw new Error(error);
      });

      const clientRepository = new ClientRepository();

      try {
        await clientRepository.create(newClient);

        expect(false).toBe(true);
      } catch (e) {
        expect((e as Error).message).toBe(error);
      }
    });
  });
});
