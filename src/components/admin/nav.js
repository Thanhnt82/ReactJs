import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
      <nav
        id="sidebarMenu"
        className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
      >
      <img src="../assets/images/logo/logo-medical.jpg" alt="" style={{marginTop: '-56px'}} />
           <div className="position-sticky pt-3">
          <ul className="nav flex-column">
            <li className="nav-item">
              <NavLink className="nav-link active"  to="/admin" activeClassName="acctive" exact>
                <span data-feather="home" />
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin/category" activeClassName="acctive" exact>
                <span data-feather="users" />
                Danh Mục
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin/products" activeClassName="acctive" exact>
                <span data-feather="shopping-cart" />
                Sản Phẩm
              </NavLink>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/trangchu" activeClassName="acctive" exact>
                <span data-feather="users" />
                Quay về trang chủ
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }