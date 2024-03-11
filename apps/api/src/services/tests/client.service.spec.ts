import { Location, NewLocation, Client, NewClientPayload } from '@clp/types';

import { ClientService } from '@/services/client.service';
import { ClientRepository } from '@/repositories/client.repository';
import { LocationRepository } from '@/repositories/location.repository';

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

    const newLocation: NewLocation = {
      longitude: expect.any(Number),
      latitude: expect.any(Number),
    };

    const location: Location = {
      ...newLocation,
      id: expect.any(Number),
      created_at: expect.any(Date),
      updated_at: expect.any(Date),
      deleted_at: null,
    };

    const client: Client = {
      ...newClient,
      created_at: expect.any(Date),
      updated_at: expect.any(Date),
      location_id: expect.any(Number),
      id: expect.any(Number),
      deleted_at: null,
      location,
    };

    it('should create and return client', async () => {
      const clientService = new ClientService();

      jest
        .spyOn(ClientRepository.prototype, 'create')
        .mockImplementation(async () => client);
      jest
        .spyOn(LocationRepository.prototype, 'create')
        .mockImplementation(async () => location);

      const res = await clientService.create(newClient);

      expect(res).toMatchObject(client);
      expect(ClientRepository.prototype.create).toHaveBeenCalledTimes(1);
      expect(ClientRepository.prototype.create).toHaveBeenCalled();
      expect(LocationRepository.prototype.create).toHaveBeenCalledTimes(1);
      expect(LocationRepository.prototype.create).toHaveBeenCalled();
    });
  });
});
