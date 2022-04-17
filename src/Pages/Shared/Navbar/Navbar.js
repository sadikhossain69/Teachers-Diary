import "./Navbar.css";
import React from "react";
import { Link } from "react-router-dom";
import teachersLogo from '../../../Photos/teachers-logo.png'
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const Navbar = () => {

  const [user, loading, error] = useAuthState(auth);


  return (
    <div className="navbar-component">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="ms-5" to='/' ><img style={{height: '50px'}} src={teachersLogo} alt="" /></Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a style={{display: 'none'}} className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a style={{display: 'none'}} className="nav-link" href="/">
                  Link
                </a>
              </li>
              <li style={{display: 'none'}} className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a style={{display: 'none'}} className="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a style={{display: 'none'}} className="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a style={{display: 'none'}} className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a style={{display: 'none'}} className="nav-link disabled" href="/">
                  Disabled
                </a>
              </li>
            </ul>
            <Link className="mx-3 my-2 home-button d-block" to='/home' >Home</Link>
            <Link className="mx-3 my-2 home-button d-block" to='/about' >About Me</Link>
            <Link className="mx-3 my-2 home-button d-block" to='/blogs' >Blogs</Link>
            {
              user ? <button onClick={ () => signOut(auth) } className="mx-5 my-2 register-button">Sign Out</button>
                    :
                    // <Link className="d-block login-button" to='/login' >Login</Link>
                    <Link className="mx-5 my-2 register-button d-block" to='/register' >Register</Link>
            }
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
