import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import openImg from "../starter-code/assets/shared/icon-hamburger.svg";
import closeImg from "../starter-code/assets/shared/icon-close.svg";
import logo from "../starter-code/assets/shared/logo.svg";
const Navbar = () => {
  let location = useLocation();
  let ul = "";
  let navbar = "";
  //JS runs much earlier than HTML therefore querySelector would return null if not read after loading JSX, which could be done with useEffect Hook
  useEffect(() => {
    ul = document.querySelector(".navlist");
    navbar = document.querySelector(".navbar");
  }, [
    location,
  ]); /*The location given in this array makes the useEffect hook render ul and li each time the page changes, when not using it, the console throws error of undefined when trying to toggle navbar. 
  Without it, React would not assign the values to variables in useEffect hook after every page change.*/

  const handleOpen = () => {
    navbar.style.height = "100vh";
    if (ul.classList.contains("remove")) {
      ul.classList.remove("remove");
    }
    ul.classList.add("animate");
  };

  const handleClose = () => {
    if (ul.classList.contains("animate")) {
      ul.classList.remove("animate");
    }
    ul.classList.add("remove");
    setTimeout(() => {
      navbar.style.height = "10vh";
    }, 700);
  };

  return (
    <nav className="navbar">
      <div className="container-fluid">
        <Link className="brand" to="/">
          <img src={logo} alt="" />
        </Link>
        <button className="navbtn" onClick={handleOpen}>
          <img src={openImg} alt="" />
        </button>
        <ul className="navlist remove">
          <button className="navbtn" onClick={handleClose}>
            <img src={closeImg} alt="" />
          </button>
          <li>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              00 Home
            </Link>
          </li>
          <li>
            <Link
              to="/destination"
              className={location.pathname === "/destination" ? "active" : ""}
            >
              01 Destination
            </Link>
          </li>
          <li>
            <Link
              to="/crew"
              className={location.pathname === "/crew" ? "active" : ""}
            >
              02 Crew
            </Link>
          </li>
          <li>
            <Link
              to="/technology"
              className={location.pathname === "/technology" ? "active" : ""}
            >
              03 Technology
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
