import "bootstrap/dist/css/bootstrap.min.css";
import swal from 'sweetalert';
import { useState, useEffect } from "react";
import { add, getAll, remove, update } from "./api/productAPI";
import { addCate, getCate, onRemoveCate,updateCate } from "./api/categoryAPI";
import Routes from "./routes";
export default function App() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  //call API
  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await getAll();
        setProducts(data);
      } catch (error) {
        console.log(error)
      }
    }
    getProduct();
  }, []);
  function onHandleRemove(id) {
    swal({
      title: "Bạn có chắc muốn xóa ?",
      text: "Nếu xóa bạn có thể mất vĩnh viễn dữ liệu",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          swal({
            title: "Xóa thành công !",
            text: "Dữ liệu đang được cập nhật",
            icon: "success",
            timer: 2000
          })
          remove(id); // xóa data từ api
          const newProduct = products.filter((items) => items.id !== id);
          setProducts(newProduct);
        }
        else {
          swal({
            title: "Xóa thất bại !",
            text: "Dữ liệu hoàn lại như ban đầu",
            icon: "error",
            timer: 2000
          })
        }
      })
  }
  const onHandleAdd = async (items) => {
    swal({
      title: "Thêm thành công !",
      text: "Dữ liệu đang được cập nhật",
      button: true,
      // dangerMode: true,
      icon: "success",
      timer: 2000
    });
    try {
      const { data } = await add(items);
      setProducts([...products, data]);
    } catch (error) {
      console.error();
    }
  };
  const onHandleEdit = async (item) => {
    swal({
      title: "Cập nhật thành công <3",
      text: "Dữ liệu mới đang được cập nhật",
      icon: "success",
      timer: 2000
    });
    try {
      const { data } = await update(item);
      console.log("app.js", data);
      const newProducts = products.map((product) =>
        product.id == data.id ? data : product
      );
      setProducts(newProducts);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const getCategory = async () => {
      const { data } = await getCate();
      setCategory( data );
    };
    getCategory();
  }, []);
  function onDeleteCate(id) {
    try {
      onRemoveCate(id);
      const newCategory = category.filter((items) => items.id !== id);
      setCategory(newCategory);
    } catch (error) {
      console.log(error);
    }
  };
  const onHandleAddCate = async (items) => {
    try {
      const { data } = await addCate(items);
      setCategory([...category, data]);
    } catch (error) {
      console.error();
    }
  };
  const onHandleEditCate = async (items) => {
    try {
      const { data } = await updateCate(items);
      console.log("app.js", data);
      const newCategory = category.map((category) =>
        category.id == data.id ? data : category
      );
      setCategory(newCategory);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Routes
      category={category}
      onRemoveCate={onDeleteCate}
      onAddCate={onHandleAddCate}
      onEditCate={onHandleEditCate}
      Products={products}
      onRemove={onHandleRemove}
      onAdd={onHandleAdd}
      onEdit={onHandleEdit} />
  );
}

