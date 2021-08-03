import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import { get } from "../../../api/productAPI";

const EditProductForm = (props) => {
  const [product, setProduct] = useState({});
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const { id } = useParams();
  const history = useHistory();

  // call api de lay object dua vao id tu tren url
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await get(id);
      setProduct(data);
      reset(data);
    };
    getProduct();
  }, []);

  const onSubmit = (data) => {
    console.log("form edit", data);
    const product = {
      id: id,
      ...data
    };
    console.log(product);
    props.onEdit(product);
    history.push("/admin/products");
  };

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Sửa sản phẩm</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Tên sản phẩm</label>
          <input
            type="text"
            defaultValue={product.name}
            className="form-control"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="d-block mt-2 text-danger">Field is required</span>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Giá sản phẩm</label>
          <input
            type="number"
            defaultValue={product.price}
            className="form-control"
            {...register("price")}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Danh mục</label>
          <select className="form-control"
          defaultValue={product.category}
          {...register("category")}>
              {props.category.map((items) => (
          <option>{items.name}</option>
        ))} 
          </select>
        </div>
        <button className="btn btn-primary" type="submit">
          Thêm sản phẩm
        </button>
      </form>
    </>
  );
};
export default EditProductForm;
