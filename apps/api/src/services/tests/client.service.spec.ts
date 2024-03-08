import { ClientService } from '@/services/client.service';
import { ClientRepository } from '@/repositories/client.repository';
import { Client, NewClientPayload } from '@/schemas/types/client.type';

describe('ClientService', () => {
  describe('create', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    const newClient: NewClientPayload = {
      email: expect.any(String),
      phone: expect.any(String),
      name: expect.any(String),
      latitude: expect.any(Number),
      longitude: expect.any(Number),
    };

    const client: Client = {
      ...newClient,
      created_at: expect.any(Date),
      updated_at: expect.any(Date),
      location_id: expect.any(Number),
      id: expect.any(Number),
      location: null,
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
