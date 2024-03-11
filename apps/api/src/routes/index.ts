import { Router } from 'express';

import { clientRoute } from '@/routes/client.route';
import { routeRoute } from '@/routes/route.route';

export const router = Router();

router.use('/clients', clientRoute);
router.use('/route', routeRoute);
