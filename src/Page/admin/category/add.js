import { useForm  } from "react-hook-form";
import { useHistory } from "react-router-dom";
import firebase from "firebase";
const AddCategory = (props) => {
    //khai báo các kiểu dữ liệu trong useFornm
    const {
        register,
        handleSubmit,
        formState: { errors }
        } = useForm();
    const history = useHistory();
    const onSubmitCate = (data) => {
      let file =data.image[0];
      let storageRef = firebase.storage().ref(`images/${file.name}`);
      storageRef.put(file).then(function(){
          storageRef.getDownloadURL().then((url)=>{
              console.log(url)
              const getCate = {
                  ...data,
                  image: url
              }
              console.log(getCate);
              props.onAddCate(getCate);
          })
      })
      history.push("/admin/category");
    };
    return (
      <>
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Thêm Danh Mục</h1>
      </div>
    <form onSubmit={handleSubmit(onSubmitCate)}>
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
        <label className="form-label">Ảnh Danh mục</label>
        <input
          type="file"
          className="form-control"
          {...register("image", { required: true })}
        />
        {errors.image && (
          <span className="d-block mt-2 text-danger">Không được bỏ trống</span>
        )}
      </div>
      <button className="btn btn-primary" type="submit">
        Lưu
      </button>
        </form>
        
        </>
    )
}
export default AddCategory;