// Vendors
import express from 'express';
import 'dotenv/config';
// Init Utils
import { startServer } from './startServer.js';
// Middlewares
import { setMiddlewares } from './middlewares/middlewares.js';
// Routes
import { setRoutes } from './routes/routes.js';

const app = express();

console.clear();
// Middleware
setMiddlewares(app);
// Routes
setRoutes(app);
// start
startServer(app);
