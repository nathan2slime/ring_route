import { Request, Response } from 'express';

import { ClientService } from '@/services/client.service';

import { logger } from '@/logger';

export class RouteController {
  async generate(req: Request, res: Response) {
    try {
      const clientService = new ClientService();

      const clients = await clientService.getWithLocation();
    } catch (error) {
      logger.error(error);

      return res
        .status(400)
        .json({ message: error instanceof Error && error.message, error });
    }
  }
}
