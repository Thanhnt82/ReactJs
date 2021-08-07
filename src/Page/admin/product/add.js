import { useForm  } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { add } from "../../../api/productAPI";
import firebase from '../../../firebase';
import swal from "sweetalert";
const AddProductForm = (props) => {
    const {
    register,
    handleSubmit,
    formState: { errors }
    } = useForm();
    const history = useHistory();
    const onSubmit = (data) => {
      let file =data.image[0];
      let storageRef = firebase.storage().ref(`images/${file.name}`);
      storageRef.put(file).then(function(){
          storageRef.getDownloadURL().then((url)=>{
              console.log(url)
              const getProduct = {
                  ...data,
                  image: url
              }
              console.log(getProduct);
              props.onAdd(getProduct);
          })
      })
      history.push("/admin/products");
    };
    return (
      <>
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Thêm sản phẩm</h1>
      </div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label className="form-label">Tên sản phẩm</label>
        <input
          type="text"
          className="form-control"
          {...register("name", { required: true })}
        />
        {errors.name && (
          <span className="d-block mt-2 text-danger">Không được bỏ trống</span>
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
        <input type="number" className="form-control" {...register("price", { required: true })} />
      </div>
      <div className="mb-3">
        <label className="form-label">Mô Tả</label>
        {/* <Yamde value={description} handler={setdescription} theme="light" {...register("description")}/> */}
        <textarea className="form-control" rows="4" cols="100" {...register("description", { required: true })}></textarea>
      </div>
      <div className="mb-3">
        <label className="form-label">Danh mục</label>
        <select className="form-control" {...register("category")}>
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
    )
}
export default AddProductForm;