import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import { getIdCate } from "../../../api/categoryAPI";
import firebase from "firebase";
const EditCate = (props) => {
  const [category, setCategory] = useState({});
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
    const getCategory = async () => {
      const { data } = await getIdCate(id);console.log(data);
      setCategory(data);
      delete(data.image);
      reset(data);
    };
    getCategory();
  }, []);
  const onSubmit = (data) => {
    let file =data.image[0];
    let storageRef = firebase.storage().ref(`images/${file.name}`);
    storageRef.put(file).then(function(){
        storageRef.getDownloadURL().then((url)=>{
            console.log(url)
            const category = {
                ...data,
                image: url
            }
            console.log(category);
        props.onEditCate(category);
        })
    })
    console.log(category);
    history.push("/admin/category");
  };
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Sửa danh Mục</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Tên sản phẩm</label>
          <input
            type="text"
            defaultValue={category.name}
            className="form-control"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="d-block mt-2 text-danger">Field is required</span>
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
          Lưu danh mục
        </button>
      </form>
    </>
  );
};
export default EditCate;
