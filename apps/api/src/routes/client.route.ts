import { Router } from 'express';

import { ClientController } from '@/controllers/client.controller';

export const clientRoute = Router();

const clientController = new ClientController();

clientRoute.post('/new', clientController.create);
