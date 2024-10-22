const setRoutes = (app) => {
  app.get('/', (req, res) => {
    res.status(200).json({ error: false });
  });
};

module.exports = {
  setRoutes,
};
