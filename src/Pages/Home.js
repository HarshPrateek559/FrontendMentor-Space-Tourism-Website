import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="Home">
      <main className="container">
        <section className="text">
          <h1>
           SO, YOU WANT TO TRAVEL TO <span className="space">SPACE</span>
          </h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </section>
        <button className="explore">
        <Link to="/destination">Explore</Link>
        </button>
      </main>
    </div>
  );
};

export default Home;
