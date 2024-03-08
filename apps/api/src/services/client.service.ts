import { ClientRepository } from '@/repositories/client.repository';
import { NewClient } from '@/schemas/client.schema';

export class ClientService {
  create(payload: NewClient) {
    const clientRepository = new ClientRepository();

    const client = clientRepository.create(payload);

    return client;
  }
}
