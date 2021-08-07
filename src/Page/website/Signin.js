import { set } from 'lodash';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, Redirect, useHistory } from "react-router-dom";
import { signin, signup } from "../../api/authAPI";
import { authenticate } from '../../auth';
import { isAuthenticated } from '../../auth';
const Signin = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
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
  const redirectUser = () => {
    if (success) {
      const id = isAuthenticated().user.id;
      if (id == 1) {
        return <Redirect to="/admin" />
      } else {
        return <Redirect to="/trangchu" />
      }
    }
  }
  return (
    <>
                <div class="login-register-area mb-60px mt-53px">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-7 col-md-12 ml-auto mr-auto">
                            <div class="login-register-wrapper">
                                <div class="login-register-tab-list nav">
                                    <a class="active">
                                        <h4>Đăng Nhập</h4>
                                    </a>
                                </div>
                                <div class="tab-content">
                                <div id="lg1" className="tab-pane active">
        <div className="login-form-container">
          <div className="login-register-form">
            <form onSubmit={handleSubmit(onSubmit)} >
              {redirectUser()}
              {error && <div className="alert-danger">{error}</div>}
              <input type="email" className="form-control" {...register("email", { required: true })} placeholder="Email"/>
              {errors.email && (
                <span className="d-block mt-2 text-danger">Không được bỏ trống</span>
              )}
              <input type="password" className="form-control" {...register("password", { required: true })} placeholder="Mật Khẩu"/>
              {errors.password && (
                <span className="d-block mt-2 text-danger">Không được bỏ trống</span>
              )}
              <div className="button-box">
                <div className="login-toggle-btn">
                  <input type="checkbox" />
                  <a className="flote-none" href="javascript:void(0)">Remember me</a>
                  <a href="#">Forgot Password?</a>
                </div>
                <button className="btn btn-primary" type="submit">
                  <span>Đăng Nhập</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  );
}
export default Signin