import { set } from 'lodash';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { signup } from "../../api/authAPI";
import { authenticate } from '../../auth';
import { useHistory } from 'react-router';
const Signup = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const history = useHistory();
  const onSubmit = async (user) => {
    try {
      const { data } = await signup(user);
      authenticate(data);
      setSuccess(true);
      setError("");
      history.push("/trangchu")
    } catch (error) {
      setError(error.response.data);
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
                    <h4>Đăng Kí</h4>
                  </a>
                </div>
                <div class="tab-content">
                  <div id="lg1" className="tab-pane active">
                    <div className="login-form-container">
                      <div className="login-register-form">
                        <form onSubmit={handleSubmit(onSubmit)} >
                          {error && <div className="alert-danger">{error}</div>}
                          {success && <div className="alert-success">Ban da dang ki thanh cong . click <Link to="/signin">vao day</Link> de dang nhap</div>}
                          <h2>Đăng kí</h2>
                          <div className="mb-3">
                            <label className="form-label">Họ Tên</label>
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
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" {...register("email", { required: true })} />
                            {errors.email && (
                              <span className="d-block mt-2 text-danger">Không được bỏ trống</span>
                            )}
                          </div>
                          <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" {...register("password", { required: true })} />
                            {errors.password && (
                              <span className="d-block mt-2 text-danger">Không được bỏ trống</span>
                            )}
                          </div>
                          <button className="btn btn-success" type="submit">
                            Đăng kí
                          </button>
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
export default Signup