import { useForm  } from "react-hook-form";
import { useHistory } from "react-router-dom";
const AddCategory = (props) => {
    //khai báo các kiểu dữ liệu trong useFornm
    const {
        register,
        handleSubmit,
        formState: { errors }
        } = useForm();
    const history = useHistory();
    const onSubmitCate = (data) =>{
        const Category = {
            id: Math.random().toString(5).substring(2),
            ...data
          };
          props.onAddCate(Category);
          history.push("/category");
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
      <button className="btn btn-primary" type="submit">
        Lưu
      </button>
        </form>
        
        </>
    )
}
export default AddCategory;