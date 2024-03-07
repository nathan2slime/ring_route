import express from 'express';
import * as process from 'process';

import { connectDatabase } from '@/database';
import { logger } from '@/logger';

const PORT = process.env.API_PORT || 8080;

const app = express();

connectDatabase();

app.listen(PORT, () => logger.info(`http://localhost:${PORT}`));
