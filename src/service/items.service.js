import axios from 'axios';
import { createItemAdapter, createItemsListAdapter, createCategoriesListAdapter } from '../adapter/index.js';

const ItemsService = () => {
  const getItemsById = async (id) => {
    let item = {};
    const responseItem = await axios
      .get(`https://api.mercadolibre.com/items/${id}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log('error--', error);
        return error;
      });

    const responseDescription = await axios
      .get(`https://api.mercadolibre.com/items/${id}/description`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log('error--', error);
        return error;
      });

    item = createItemAdapter(responseItem);
    item.description = responseDescription.plain_text;

    return item;
  };

  const getItems = async (query) => {
    let items = [];
    let categories = [];
    const response = await axios
      .get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=4#json`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log('error--', error);
        return error;
      });

    items = createItemsListAdapter(response);
    let dataFilters = response.filters?.filter((item) => item.id == 'category');
    categories = createCategoriesListAdapter(dataFilters);

    return {
      author: {
        name: 'Angela',
        lastname: 'Franco'
      },
      categories,
      items
    };
  };

  return {
    getItemsById,
    getItems
  };
};

export default ItemsService;
