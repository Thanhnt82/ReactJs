import instance from "./instance";
export const getCate = () => {
    const url = '/category';
    return instance.get(url);
  };
  export const addCate = (items) => {
    const url = '/category';
    return instance.post(url, items);
};
export const onRemoveCate =(id)=> {
    const url = `/category/${id}`;
    return instance.delete(url);
};
export const getIdCate =(id)=> {
    const url = `/category/${id}`;
    return instance.get(url);
};
export const updateCate = (items) => {
    const url = `/category/${items.id}`;
      return instance.put(url , items);
  };
