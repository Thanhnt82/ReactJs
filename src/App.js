import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import "./dashboard.css";
import { add, getAll, remove ,update} from "./api/productAPI";
import { addCate, getCate,onRemoveCate } from "./api/categoryAPI";
import Routes from "./routes";
export default function App() {
  const [products, setProducts] = useState([]);
  const [category,setCategory] = useState([]);
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
    try {
      remove(id); // xóa data từ api
      const newProduct = products.filter((items) => items.id !== id);
      setProducts(newProduct);
    } catch (error) {
      console.error();
    }
  };
  const onHandleAdd = async (items) => {
    try {
      const { data } = await add(items);
      setProducts([...products, data]);
    } catch (error) {
      console.error();
    }
  };
  const onHandleEdit = async (item) => {
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
  useEffect(()=>{
    const getCategory = async () =>{
      const {data} = await getCate();
      setCategory(data);
    };
    getCategory();
  },[]);
  function onDeleteCate(id){
    try {
      onRemoveCate(id);
      const newCategory = category.filter((items)=> items.id !== id );
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
  return (
    <Routes 
    Category={category}
    onRemoveCate={onDeleteCate} 
    onAddCate = {onHandleAddCate}  



    
    Products={products} 
    onRemove={onHandleRemove} 
    onAdd={onHandleAdd} 
    onEdit={onHandleEdit}/>
    );
}

