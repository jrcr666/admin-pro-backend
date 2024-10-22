// Node Core
const fs = require('fs');
const path = require('path');

// Vendors
const cors = require('cors');
const morgan = require('morgan');

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, '..', 'app.log'),
  {
    flags: 'a',
  },
);

const setMiddlewares = (app) => {
  app.use(cors());

  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  } else {
    app.use(morgan('common', { stream: accessLogStream }));
  }
};

module.exports = {
  setMiddlewares,
};
