// Vendors
import { fileURLToPath } from 'url';
import path from 'path';

const getDirname = (url) => {
  const __filename = fileURLToPath(url);

  return path.dirname(__filename);
};

export { getDirname };
