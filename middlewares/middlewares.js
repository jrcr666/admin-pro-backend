// Node Core
import fs from 'fs';
import path from 'path';
// Vendors
import cors from 'cors';
import morgan from 'morgan';
// Utils
import { getDirname } from '../utils/common.utils.js';

const accessLogStream = fs.createWriteStream(
  path.join(getDirname(import.meta.url), '..', 'app.log'),
  { flags: 'a' },
);

const setMiddlewares = (app) => {
  app.use(cors());

  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  } else {
    app.use(morgan('common', { stream: accessLogStream }));
  }
};

export { setMiddlewares };
