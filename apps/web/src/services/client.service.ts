import { toast } from 'react-hot-toast';

import { Client, NewClientPayload } from '@clp/types';

import { api } from '@/api';

export class ClientService {
  async create(payload: NewClientPayload) {
    try {
      const { status, data } = await api.post<Client>('/clients/new', payload);

      if (status == 201) {
        return data;
      }
    } catch (e) {
      toast.error('Error creating client');
    }
  }
}
