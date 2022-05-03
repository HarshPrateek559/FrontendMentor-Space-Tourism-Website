import React from "react";
import background from "../starter-code/assets/home/background-home-desktop.jpg";
const Home = () => {
  let style = {
    background: `url(${background})`,
    backgroundSize: "cover",
    height: "100vh",
    width: "100vw",
  };
  return <div className="Home"></div>;
};

export default Home;
