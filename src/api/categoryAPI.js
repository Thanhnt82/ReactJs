import instance from "./instance";
export const getCate = () => {
    const url = '/category';
    return instance.get(url);
  };
export const addCate =(items)=> {
    const url = '/category/add';
    return instance.get(url,items);
};
export const onRemoveCate =(id)=> {
    const url = `/category/${id}`;
    return instance.delete(url);
};
export const getIdCate =(id)=> {
    const url = `/categori/${id}`;
    return instance.get(url);
};
export const updateCate = (items) => {
    const url = `/category/${items.id}`;
      return instance.put(url , items);
  };
