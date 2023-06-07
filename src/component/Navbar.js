import { AccountCircleRounded } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Popup } from "./Popup";
import logo from "../public/logo.png";
const Navbar = () => {
  let location = useLocation();
  useEffect(() => {
    // console.log(location.pathname);
  }, [location]);

  let [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      {localStorage.getItem("token") && <Popup open={open} />}
      <nav className="navbar navbar-expand-lg bg-light sticky-top">
        <Box className="container-fluid " mx="2rem" >
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo" />
          </Link>
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
          <Box className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                  to="/about"
                >
                  About
                </Link>
              </li>
            </ul>
            {!localStorage.getItem("token") ? (
              <form className="d-flex" role="search">
                <Link
                  className="btn btn-primary mx-2"
                  to="/login"
                  role="button"
                >
                  Login
                </Link>
                <Link
                  className="btn btn-primary mx-2"
                  to="/signup"
                  role="button"
                >
                  Sign Up
                </Link>
              </form>
            ): (<Button onClick={handleClick}>
              <AccountCircleRounded />
            </Button>)}

            
          </Box>
        </Box>
      </nav>
      {/* <Home open={open} setOpen={setOpen} /> */}
    </>
  );
};

export default Navbar;
