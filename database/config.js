const mongoose = require('mongoose');

const dbConnection = async () => {
  const { MONGO_USER, MONGO_PASS, MONGO_DATABASE, MONGO_URL } = process.env;

  try {
    await mongoose.connect(
      `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@${MONGO_URL}/${MONGO_DATABASE}`,
    );
  } catch (error) {
    return [error];
  }

  return [false];
};

module.exports = {
  dbConnection,
};
