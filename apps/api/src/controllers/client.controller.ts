import { Request, Response } from 'express';
import { schemas } from '@clp/types';

import { ClientService } from '@/services/client.service';

import { logger } from '@/logger';

export class ClientController {
  async create(req: Request, res: Response) {
    try {
      const body = schemas.client.new.parse(req.body);

      const clientService = new ClientService();

      const data = await clientService.create(body);

      return res.status(201).json(data);
    } catch (error) {
      logger.error(error);

      return res
        .status(400)
        .json({ message: error instanceof Error && error.message, error });
    }
  }
}
