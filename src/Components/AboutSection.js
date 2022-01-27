import React from "react";
import UniverseGods4 from "../images/UniverseGods4.jpg";

import "./AboutSection.css";

export const AboutSection = () => {
  return (
    <div className="about-section">
      <div className="about-container">
        <div className="about-content-section">
          <div className="title">
            <h1>Strive for greatness</h1>
          </div>
          <div className="about-content">
            <p className="about-text">
              Universe Gods is a live action multiplayer video game in which you
              explore and conquer new regions of the universe by completing
              missions and competing against other players in challenges. <br />
              Conquer planets and even galaxies... if you can. <br />
              Assert your dominance of the cosmos and prove that you are a
              Universe God.
            </p>
          </div>
        </div>
        <div className="image-section">
          <img src={UniverseGods4} alt="UnivG4" />
        </div>
      </div>
    </div>
  );
};
