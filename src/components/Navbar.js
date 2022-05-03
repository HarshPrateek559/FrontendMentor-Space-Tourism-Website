import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import openImg from "../starter-code/assets/shared/icon-hamburger.svg";
import closeImg from "../starter-code/assets/shared/icon-close.svg";
import logo from "../starter-code/assets/shared/logo.svg";
const Navbar = () => {
    let ul ="";
    useEffect(() => {
        ul = document.querySelector(".navlist");
    },[])//JS runs much earlier than HTML therefore querySelector would return null if not read after loading JSX, which could be done with useEffect Hook
    
  
  const handleOpen = () => {
    // ul.style.display = "block";
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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/destination">Destination</Link>
          </li>
          <li>
            <Link to="/crew">Crew</Link>
          </li>
          <li>
            <Link to="/technology">Technology</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
