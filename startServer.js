const { dbConnection } = require('./database/config');
const {
  CYAN,
  RESET,
  YELLOW,
  GREEN,
  RED,
  MAGENTA,
} = require('./constants/logs.colors.constants');

const startServer = async (app, port) => {
  try {
    console.clear();

    const [error] = await dbConnection();

    if (error) {
      console.error(`${RED}${error}${RESET}`);
      process.exit(2);
    }

    app.listen(port, () => {
      console.log(`${GREEN}ENV:${MAGENTA} ${process.env.NODE_ENV}${RESET}`);
      console.log(`${GREEN}Conectado a${CYAN} MongoDB${RESET}`);
      console.log(`${GREEN}Server is running on port ${YELLOW}${port}${RESET}`);
    });
  } catch (err) {
    console.error(`${RED}Error al iniciar el servidor: ${err}${RESET}`);
    process.exit(1);
  }
};

module.exports = { startServer };
