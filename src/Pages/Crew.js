import React, { useState } from "react";
import Ansari from "../starter-code/assets/crew/image-anousheh-ansari.webp";
import Douglas from "../starter-code/assets/crew/image-douglas-hurley.webp";
import Mark from "../starter-code/assets/crew/image-mark-shuttleworth.webp";
import Victor from "../starter-code/assets/crew/image-victor-glover.webp";

const Crew = () => {
  let data = [
    {
      name: "Douglas Hurley",
      role: "Commander",
      bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    },
    {
      name: "Mark Shuttleworth",
      role: "Mission Specialist",
      bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    },
    {
      name: "Victor Glover",
      role: "Pilot",
      bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    },
    {
      name: "Anousheh Ansari",
      role: "Flight Engineer",
      bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    },
  ];
  const img = [Douglas, Mark, Victor, Ansari];

  const [position, setPosition] = useState(0);

  const handleClick = (e) => {
    setPosition(e.target.value);
  };

  return (
    <div className="Crew">
      <main className="container">
        <section className="heading">
          <h1 className="number">02</h1>
          <h1 className="sentence">MEET YOUR CREW</h1>
        </section>
        <section className="content">
          <img src={img[position]} alt=""/>
          <section className="section">
            <ul className="control">
              <li className={`circle ${position=="0"?"opaque":""}`} value="0" onClick={handleClick} ></li>
              <li className={`circle ${position=="1"?"opaque":""}`} value="1" onClick={handleClick} ></li>
              <li className={`circle ${position=="2"?"opaque":""}`} value="2" onClick={handleClick} ></li>
              <li className={`circle ${position=="3"?"opaque":""}`} value="3" onClick={handleClick} ></li>
            </ul>
            <div className="info">
              <h1 className="role">{data[position].role}</h1>
              <h1 className="name">{data[position].name}</h1>
              <p className="bio">{data[position].bio}</p>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
};

export default Crew;
