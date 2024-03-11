import * as process from 'process';
import * as path from 'path';
import { Client } from 'pg';
import fs from 'fs';

import { config } from '@/database/config';
import { logger } from '@/logger';

(async () => {
  try {
    const db = new Client(config);

    await db.connect();
    const isProd = process.env.NODE_ENV == 'production';
    const sql = isProd ? require('./up').default : './up.sql';
    const query = fs.readFileSync(path.join(__dirname, sql), 'utf-8');

    await db.query(query);
    await db.end();

    logger.info('database migration completed');
  } catch (e) {
    logger.error(e);
    process.exit(0);
  }
})();
