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
      <div className="home-btns">
        {!user ? (
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            GET STARTED
          </Button>
        ) : (
          <Link to="/dashboard">My Hero</Link>
        )}
      </div>
    </div>
  );
};
