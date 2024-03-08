import express, { json } from 'express';
import * as process from 'process';

import { connectDatabase } from '@/database';
import { router } from '@/routes';
import { logger } from '@/logger';

const PORT = process.env.API_PORT || 8080;

connectDatabase();

const app = express();

app.use(json());
app.use('/api', router);

app.listen(PORT, () => logger.info(`http://localhost:${PORT}`));
