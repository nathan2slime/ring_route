import { Client } from 'pg';

import { config } from '@/database/config';
import { logger } from '@/logger';

export const db = new Client(config);

export const connectDatabase = async () => {
  try {
    await db.connect();

    logger.info('database connected');
  } catch (e) {
    logger.error('database disconnected', e);
  }
};
