const routes = (router) => {
  router.get('/', (req, res) => {
    res.status(200).json({
      message: 'Welcome to node express starter pack'
    });
  });
};

export default routes;
