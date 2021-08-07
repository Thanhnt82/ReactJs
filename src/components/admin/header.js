import React from 'react';
import { useLocation } from 'react-router-dom';
import { isAuthenticated, signOut } from '../../auth';
import { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
export default function Header() {
  const { pathname } = useLocation(); console.log(pathname)
    const [isLogged, setIsLogged] = useState(false);
    const history = useHistory();
    useEffect(() => {
        isAuthenticated() && setIsLogged(true);
        console.log(isAuthenticated);
    }, [pathname, isLogged]);
  return (
    <header className="topbar" data-navbarbg="skin6">
      <nav className="navbar top-navbar navbar-expand-md navbar-dark">
        <div className="navbar-header" data-logobg="skin6">

          <a className="navbar-brand" href="index.html">
            <b className="logo-icon">
              <img src="../assets/images/logo-icon.png" alt="homepage" className="dark-logo" />
            </b>

            <span className="logo-text">

              <img src="../assets/images/logo-text.png" alt="homepage" className="dark-logo" />
            </span>
          </a>

          <a className="nav-toggler waves-effect waves-light text-dark d-block d-md-none" href="javascript:void(0)"><i className="ti-menu ti-close" /></a>
        </div>

        <div className="navbar-collapse collapse" id="navbarSupportedContent" data-navbarbg="skin5">
          <ul className="navbar-nav me-auto mt-md-0 ">
            <li className="nav-item hidden-sm-down">
              <form className="app-search ps-3">
                <input type="text" className="form-control" placeholder="Search for..." /> <a className="srh-btn"><i className="ti-search" /></a>
              </form>
            </li>
          </ul>

          <ul className="navbar-nav">

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle waves-effect waves-dark" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {isLogged && (
                            <>
                                            <img src="../assets/images/users/1.jpg" alt="user" className="profile-pic me-2" />

                            {isAuthenticated().user.name}
                            </>                                       
                            )}
              </a>
              <ul className="dropdown-menu show" aria-labelledby="navbarDropdown" />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
