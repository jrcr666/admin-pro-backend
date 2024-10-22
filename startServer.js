import { dbConnection } from './database/config.js';
import {
  CYAN,
  RESET,
  YELLOW,
  GREEN,
  RED,
  MAGENTA,
} from './constants/logs.colors.constants.js';
import { PORT } from './constants/commons.js';

const startServer = async (app) => {
  const port = process.env.PORT || PORT;

  try {
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

export { startServer };
