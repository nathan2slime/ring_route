import { Router } from 'express';

import { RouteController } from '@/controllers/route.controller';

export const routeRoute = Router();

const routeController = new RouteController();

routeRoute.get('/generate', routeController.generate);
