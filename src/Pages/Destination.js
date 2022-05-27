import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Titan from "../starter-code/assets/destination/image-titan.webp";
import Moon from "../starter-code/assets/destination/image-moon.webp";
import Mars from "../starter-code/assets/destination/image-mars.webp";
import Europa from "../starter-code/assets/destination/image-europa.webp";
/*In React, images can only be used imported as a component and not used from the path of the image. 
Even if it is coming from a local database, it will not render the image unless the image is a component.*/

const Destination = () => {
  const destinations = [
    {
      name: "Moon",
      description:
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 km",
      travel: "3 days",
    },
    {
      name: "Mars",
      description:
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      distance: "225 mil. km",
      travel: "9 months",
    },
    {
      name: "Europa",
      description:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      distance: "628 mil. km",
      travel: "3 years",
    },
    {
      name: "Titan",
      description:
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distance: "1.6 bil. km",
      travel: "7 years",
    },
  ];

  const [position, setPosition] = useState(0);
  const [pos, setPos] = useState(0);
  const imgs = [Moon, Mars, Europa, Titan];
  const [show, setShow] = useState(true);
  const handleChange = (e) => {
    setShow(false);
    setPos(e.currentTarget.value);
  };
  setTimeout(() => {
    setShow(true);
    setPosition(pos);
  }, 700);
  const variantsEnter = {
    visible: {
      opacity: 1,
      x: '0px'
    },
    hidden: {
      opacity: 0,
      x: '20px'
    },
  };
  const variantExit = {
    visible: {
      opacity: 0,
      x: '20px'
    },
    hidden: {
      opacity: 1,
      x: '0px'
    },
  };

  return (
    <div className="Destination">
      <main className="container">
        <section className="heading">
          <h1 className="number">01</h1>
          <h1 className="sentence">PICK YOUR DESTINATION</h1>
        </section>
        <section className="info">
          <motion.div
            variants={show ? variantsEnter : variantExit}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.7,
            }}
          >
            <img src={imgs[position]} alt="" />
          </motion.div>

          <section className="control">
            <ul className="control-list">
              <li value="0" onClick={handleChange}>
                <Link to="#" className={position === 0 ? "active" : ""}>
                  MOON
                </Link>
              </li>
              <li value="1" onClick={handleChange}>
                <Link to="#" className={position === 1 ? "active" : ""}>
                  MARS
                </Link>
              </li>
              <li value="2" onClick={handleChange}>
                <Link to="#" className={position === 2 ? "active" : ""}>
                  EUROPA
                </Link>
              </li>
              <li value="3" onClick={handleChange}>
                <Link to="#" className={position === 3 ? "active" : ""}>
                  TITAN
                </Link>
              </li>
            </ul>
          </section>
          <motion.section
            className="text"
            variants={show ? variantsEnter : variantExit}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.7,
            }}
          >
            <div className="name">{destinations[position].name}</div>
            <div className="description">
              {destinations[position].description}
            </div>
          </motion.section>

          <motion.section
            className="details"
            variants={show ? variantsEnter : variantExit}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.7,
            }}
          >
            <div className="distance">
              <p className="title">AVG. DISTANCE</p>
              <div className="num">{destinations[position].distance}</div>
            </div>
            <div className="time">
              <p className="title">EST. TRAVEL TIME</p>
              <div className="num">{destinations[position].travel}</div>
            </div>
          </motion.section>
        </section>
      </main>
    </div>
  );
};

export default Destination;
