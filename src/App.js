import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import { useState } from "react";
import Nav from "./components/nav";
import Product from "./components/product";
import "./dashboard.css";
import data from "./data";
export default function App() {
  const [products, setProducts] = useState(data);
  function onHandleRemove(id) {
    const newProduct = products.filter((items) => items.id !== id);
    setProducts(newProduct);
  }  return (
    <div className="App">
      <div>
        {/* show header */}
        <Header />
        <div className="container-fluid">
          <div className="row">
            {/* show menu left */}
            <Nav />
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              {/* show sản phẩm */}
              <Product Products = {products}  onRemove={onHandleRemove}/>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
/**
 * Tạo 2 component AlertSuccess hoặc AlertDanger
 * Hiển thị ra một vài nội dung trong component
 */
