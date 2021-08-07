import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import { get,remove,update } from "../../../api/productAPI";
import firebase from "../../../firebase";
import swal from "sweetalert";
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
      delete(data.image);
      reset(data);
      console.log(data);
    };
    getProduct();
  }, []);

  const onSubmit = (data) => {
    let file =data.image[0];
    let storageRef = firebase.storage().ref(`images/${file.name}`);
    storageRef.put(file).then(function(){
        storageRef.getDownloadURL().then((url)=>{
            console.log(url)
            const product = {
                ...data,
                image: url
            }
            console.log(product);
        props.onEdit(product);
        })
    })
    console.log(product);
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
            id="upload"
            className="form-control"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="d-block mt-2 text-danger">Field is required</span>
          )}
        </div>
        <div className="mb-3">
        <label className="form-label">Ảnh sản phẩm</label>
        <input
          type="file"
          className="form-control"
          {...register("image", { required: true })}
        />
        {errors.image && (
          <span className="d-block mt-2 text-danger">Không được bỏ trống</span>
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
          <label className="form-label">Mô tả : </label><br></br>
          <textarea className="form-control" rows="4" cols="100" {...register("description")}>{product.description}</textarea>
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
