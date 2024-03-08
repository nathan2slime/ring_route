import { ClientRepository } from '@/repositories/client.repository';
import { LocationRepository } from '@/repositories/location.repository';

import { Client, NewClientPayload } from '@/schemas/types/client.type';

export class ClientService {
  async create({
    longitude,
    latitude,
    ...payload
  }: NewClientPayload): Promise<Client | undefined> {
    const clientRepository = new ClientRepository();
    const locationRepository = new LocationRepository();

    const newLocation = {
      latitude,
      longitude,
    };

    const location = await locationRepository.create(newLocation);

    if (location) {
      const newClient = {
        ...payload,
        location_id: location.id,
      };

      const client = await clientRepository.create(newClient);

      if (client) {
        return { ...client, location };
      }
    }
  }

  async getWithLocation(): Promise<Client[]> {
    const clientRepository = new ClientRepository();
    const locationRepository = new LocationRepository();

    const clients = await clientRepository.find();

    if (clients) {
      return Promise.all(
        clients.map(
          async client =>
            ({
              ...client,
              location: await locationRepository.getByID(client.location_id),
            }) as Client,
        ),
      );
    }

    return [];
  }
}
