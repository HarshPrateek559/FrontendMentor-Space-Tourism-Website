import React, { useState } from "react";
//importing images from the assets folder
import vehicle from "../starter-code/assets/technology/image-launch-vehicle-portrait.jpg";
import capsule from "../starter-code/assets/technology/image-space-capsule-portrait.jpg";
import spaceport from "../starter-code/assets/technology/image-spaceport-portrait.jpg";

const Technology = () => {
  let technology = [
    {
      name: "Launch vehicle",
      description:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    },
    {
      name: "Spaceport",
      description:
        "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    },
    {
      name: "Space capsule",
      description:
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    },
  ];

  const [position, setPosition] = useState(0); //variable to track the changes when buttons are clicked
  const handleClick = (e) => {
    setPosition(e.target.value);
  };
  const imgs = [vehicle, spaceport, capsule];
  return (
    <div className="Technology">
      <main className="container">
        <section className="heading">
          <h1 className="number">03</h1>
          <h1 className="sentence">Space Launch 101</h1>
        </section>
        <section className="content">
          <img src={imgs[position]} alt="" />
          <div className="contain">
            <div className="control">
              <ul>
                <li className={`circle ${position === 0 ? "opaque" : ""}`} onClick={handleClick} value={0}>
                  1
                </li>
                <li className={`circle ${position === 1 ? "opaque" : ""}`} onClick={handleClick} value={1}>
                  2
                </li>
                <li className={`circle ${position === 2 ? "opaque" : ""}`} onClick={handleClick} value={2}>
                  3
                </li>
              </ul>
            </div>
            <section className="text">
              <div className="name">{technology[position].name}</div>
              <div className="description">
                {technology[position].description}
              </div>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Technology;
