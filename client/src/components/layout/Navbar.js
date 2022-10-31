import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import authContext from "../../context/auth/AuthContext";

import logo from "./Assets/Logo.JPG";

const Navbar = () => {
  const AuthContext = useContext(authContext);

  const { isAuthenticated, logout, user } = AuthContext;

  const logoutUser = () => {
    logout();
  };

  const authLinks = (
    <>
      <li>Hello {user && user.name}</li>
      <li>
        <a href="" onClick={logoutUser}>
          <i className="fas fa-sign-out-alt"></i>{" "}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </>
  );

  const guesLinks = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/About">About</Link>
      </li>
      <li>
        <Link to="/register">Pricing</Link>
      </li>
      <li>
        <Link to="/About">Blog</Link>
      </li>
      <li>
        <Link to="/register">Page</Link>
      </li>
      <li>
        <Link to="/register">Help</Link>
      </li>
      <li className="signup">
        <Link to="/register">Sign Up</Link>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar hide-sm">
        <h1>
          <Link to="/">
            <img src={logo} style={{ width: 200 }} />
          </Link>
        </h1>
        <ul>{isAuthenticated ? authLinks : guesLinks}</ul>
      </div>

      <nav class="navbar navbar-expand-lg navbar-light bg-light d-lg-none">
        <Link to="/">
          <img src={logo} style={{ width: 200 }} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item active">
              <Link to="/">About</Link>
            </li>
            <li className="nav-item active">
              <Link to="/">Pricing</Link>
            </li>
            <li className="nav-item active">
              <Link to="/">Blog</Link>
            </li>
            <li className="nav-item active">
              <Link to="/">Page</Link>
            </li>
            <li className="nav-item active">
              <Link to="/">Help</Link>
            </li>
            <li className="nav-item active">
              <Link to="/">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Sign Up",
  icon: "fas fa-id-card-alt",
};

export default Navbar;
