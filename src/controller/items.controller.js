import ItemsService from '../service/items.service.js';

const ItemsController = () => {
  const itemsService = ItemsService();

  const getItemById = async (req, res) => {
    if (!req.params.id) {
      res.status(400).json({ error: 'Id is required' });
    }
    const item = await itemsService.getItemsById(req.params.id);
    if (!item) {
      res.status(404).json({ error: 'Item not found' });
    } else {
      res.status(200).json(item);
    }
  };

  const getItemAll = async (req, res) => {
    console.log(req.query.q);
    const itemsService = ItemsService(req.query?.q);
    const items = await itemsService.getItems();
    res.status(200).json(items);
  };

  return {
    getItemById,
    getItemAll
  };
};

export default ItemsController;
