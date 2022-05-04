import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import openImg from "../starter-code/assets/shared/icon-hamburger.svg";
import closeImg from "../starter-code/assets/shared/icon-close.svg";
import logo from "../starter-code/assets/shared/logo.svg";
const Navbar = () => {
    let ul ="";
    let navbar = "";
    useEffect(() => {
        ul = document.querySelector(".navlist");
        navbar = document.querySelector('.navbar')
    },[])//JS runs much earlier than HTML therefore querySelector would return null if not read after loading JSX, which could be done with useEffect Hook
    
  
  const handleOpen = () => {
    // ul.style.display = "block";
    navbar.style.height = "100vh";
    if(ul.classList.contains('remove')){
        ul.classList.remove('remove')
    }
    ul.classList.add('animate')
  };

  const handleClose = () => {
    // ul.style.display = "none";
    if(ul.classList.contains('animate')){
        ul.classList.remove('animate')
    }
    ul.classList.add('remove');
    setTimeout(() => {
      navbar.style.height = "10vh";
    }, 1000);
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
            <Link to="/">00 Home</Link>
          </li>
          <li>
            <Link to="/destination">01 Destination</Link>
          </li>
          <li>
            <Link to="/crew">02 Crew</Link>
          </li>
          <li>
            <Link to="/technology">03 Technology</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
