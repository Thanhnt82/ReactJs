import instance from "./instance";

export const getAll = () => {
  const url = `/products`;
  return instance.get(url);
};
export const get = (id) => {
  const url = `/products/${id}`;
  return instance.get(url);
};
export const remove = (id) => {
    const url = `/products/${id}`;
    return instance.delete(url);
};
export const add = (items) => {
    const url = '/products';
    return instance.post(url, items);
};
export const update = (items) => {
  const url = `/products/${items.id}`;
    return instance.put(url , items);
};