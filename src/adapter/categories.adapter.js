export const createCategoriesListAdapter = (dataFilters) => {
  if (!dataFilters[0]) return [];
  return dataFilters[0].values.map((item) => categories.push(item.name));
};
