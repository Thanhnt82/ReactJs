import { set } from 'lodash';
import React, { useState } from 'react';
import { useForm  } from "react-hook-form";
import {Link, Redirect} from "react-router-dom";
import {signin, signup} from "../../api/authAPI";
import { authenticate } from '../../auth';
import { isAutehnticate } from '../../auth';
const Signin = () => {

  const { register , handleSubmit , formState:{errors} } = useForm();
  const [error,setError] = useState("");
  const [success,setSuccess] = useState(false);
  
  const onSubmit = async (user) => {
  try {
    const { data } = await signin(user);
    //
    authenticate(data);
    setSuccess(true);
    setError("");
  } catch (error) {
    setError(error.response.data);
  }
  };
  const redirectUser = () =>{
    if(success){
        const id = isAutehnticate().user.id;
        if(id==1){
            return <Redirect to="/admin"/>
        }else{
            return <Redirect to="/products" />
        }
    }

  }
    
  
    return (
    <form onSubmit={handleSubmit(onSubmit)} >
    {redirectUser()}
      {error && <div className="alert-danger">{error}</div>}
      <h2>Đăng Nhập</h2>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input type="email" className="form-control" {...register("email", { required: true })} />
        {errors.email && (
          <span className="d-block mt-2 text-danger">Không được bỏ trống</span>
        )}
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input type="password" className="form-control" {...register("password" ,{ required: true })} />
        {errors.password && (
          <span className="d-block mt-2 text-danger">Không được bỏ trống</span>
        )}
      </div>
      <button className="btn btn-primary" type="submit">
        Đăng Nhập
      </button>
        </form>
    );
}
export default Signin