import { Router } from 'express';

import { clientRoute } from '@/routes/client.route';

export const router = Router();

router.use('/clients', clientRoute);
