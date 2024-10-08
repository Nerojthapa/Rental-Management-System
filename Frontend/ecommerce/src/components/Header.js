

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; // For navigation
import { logout } from "../actions/userActions";

function Header() {
  const [keyword, setKeyword] = useState(""); // Store search input
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();
  const navigate = useNavigate(); // To navigate programmatically

  const logoutHandler = () => {
    dispatch(logout());
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/search/${keyword}`); // Redirect to search results page
    } else {
      navigate("/"); // If no keyword, go to the homepage
    }
  };

  return (
    <>
      <Navbar className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <LinkContainer to="/">
            <Nav.Link className="navbar-brand">RentEase</Nav.Link>
          </LinkContainer>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <LinkContainer to="/">
                  <Nav.Link className="navbar-link active">
                    Home <i className="fa-solid fa-house"></i>
                  </Nav.Link>
                </LinkContainer>
              </li>
              <li className="nav-item">
                <LinkContainer to="/cart">
                  <Nav.Link className="nav-link">Cart</Nav.Link>
                </LinkContainer>
              </li>
              {userInfo ? (
                <li className="nav-item dropdown">
                  <Nav.Link
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Welcome {userInfo.name}
                  </Nav.Link>
                  <div className="dropdown-menu">
                    <Nav.Link className="dropdown-item" onClick={logoutHandler}>
                      Logout
                    </Nav.Link>
                  </div>
                </li>
              ) : (
                <li className="nav-item dropdown">
                  <LinkContainer to="/signup">
                    <Nav.Link
                      className="nav-link dropdown-toggle"
                      data-bs-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      New User?
                    </Nav.Link>
                  </LinkContainer>

                  <div className="dropdown-menu">
                    <LinkContainer to="/login">
                      <Nav.Link className="dropdown-item">Login</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/signup">
                      <Nav.Link className="dropdown-item">Signup</Nav.Link>
                    </LinkContainer>
                  </div>
                </li>
              )}
            </ul> 
            <form className="d-flex" onSubmit={submitHandler}>
              <input
                className="form-control me-sm-2"
                type="search"
                placeholder="Search"
                value={keyword} // Bind input to keyword state
                onChange={(e) => setKeyword(e.target.value)} // Update state on input change
              />
              <button className="btn btn-secondary my-2 my-sm-0" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </Navbar>
    </>
  );
}

export default Header;
