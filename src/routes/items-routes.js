import Router from 'express-promise-router';
import Controller from '../controller/items.controller.js';

const ItemsRouter = () => {
  const router = Router();
  const controller = Controller();

  router.get('/api/items', controller.getItemAll);
  router.get('/api/items/:id', controller.getItemById);

  return router;
};

export default ItemsRouter;
