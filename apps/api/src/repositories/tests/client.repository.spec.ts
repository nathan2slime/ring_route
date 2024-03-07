import { ClientRepository } from '../client.repository';

import { NewClient } from '@/schemas/client.schema';
import { db } from '@/database';

describe('ClientRepository', () => {
  describe('create', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    const client: NewClient = {
      email: expect.any(String),
      phone: expect.any(String),
      name: expect.any(String),
    };

    it('should create and return user', async () => {
      jest.spyOn(db, 'query').mockImplementation(() => ({
        rows: [client],
      }));

      const clientRepository = new ClientRepository();
      const res = await clientRepository.create(client);

      expect(res).toBe(client);
    });
  });
});
