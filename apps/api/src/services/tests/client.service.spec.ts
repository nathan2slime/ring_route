import { ClientService } from '@/services/client.service';
import { ClientRepository } from '@/repositories/client.repository';
import { Client, NewClient } from '@/schemas/client.schema';

describe('ClientService', () => {
  describe('create', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    const newClient: NewClient = {
      email: expect.any(String),
      phone: expect.any(String),
      name: expect.any(String),
    };

    const client: Client = {
      ...newClient,
      id: expect.any(Number),
      created_at: expect.any(Date),
      updated_at: expect.any(Date),
      deleted_at: null,
    };

    it('should create and return client', async () => {
      const clientService = new ClientService();

      jest
        .spyOn(ClientRepository.prototype, 'create')
        .mockImplementation(async () => client);

      const res = await clientService.create(newClient);

      expect(res).toBe(client);
      expect(ClientRepository.prototype.create).toHaveBeenCalledTimes(1);
      expect(ClientRepository.prototype.create).toHaveBeenCalled();
    });
  });
});
