// Vendors
const express = require('express');
// Init Utils
const { startServer } = require('./startServer');
// Middlewares
const { setMiddlewares } = require('./middlewares/middlewares');
// Constants
const { PORT } = require('./constants/commons');
// Routes
const { setRoutes } = require('./routes/routes');

require('dotenv').config();

const app = express();
// Middleware
setMiddlewares(app);
// Routes
setRoutes(app);
// start
const port = process.env.PORT || PORT;
startServer(app, port);
