import React, { useState } from "react";
import { Button } from "./Button";
import { useUser } from "../Context/UserContext";
import { Link } from "react-router-dom";

import "./HomeSection.css";

export const HomeSection = () => {
  const { user } = useUser();

  return (
    <div className="home-container">
      <h1>FIGHT FOR THE UNIVERSE</h1>
      <p>The power is yours</p>
      <div className="home-btn">
        {!user ? (
          <Button
            className="getstarted-btn"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            GET STARTED
          </Button>
        ) : (
          <div className="link-myhero-div">
            <Link className="link-myhero" to="/dashboard">
              My Hero
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
