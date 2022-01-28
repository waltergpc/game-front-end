import React from "react";
import { useUser } from "../Context/UserContext";
import { Link, Navigate } from "react-router-dom";
import "./PagesCss/DashboardStyles.css";

const Dashboard = () => {
  const { user } = useUser();

  if (!user) return <Navigate to="/home" />;

  return (
    <div className="myhero-container">
      <div id="user-card" className="user-card">
        <div id="avatar" className="avatar-div">
          <img className="avatar-pic" src={user.avatar} alt={user.nickname} />
        </div>
        <div id="userInfo" className="user-info-div">
          <div className="user-info-div-container">
            <h4 className="user-name-h4" id="user-name">
              <span className="span-name">Name:</span>
              <span className="span-user">{user.name}</span>
            </h4>
            <h4 className="user-nickname" id="user-nickname">
              <span className="spec-name">Nickname:</span>
              <span className="span-nickname">{user.nickname}</span>
            </h4>
            <h4 className="user-status" id="user-status">
              <span className="spec-name">Status:</span>{" "}
              <span className="span-nickname">{user.status}</span>
            </h4>
            <h4 className="user-ranking" id="user-ranking">
              <span className="spec-name">Ranking:</span>
              <span className="span-ranking">{user.ranking}</span>
            </h4>
            <h4 className="user-id" id="user-id">
              <span className="spec-name">Player Id:</span>
              <span className="span-id">{user.playerId}</span>
            </h4>
          </div>
        </div>
        <div className="to-update-div">
          <Link className="to-update-link" to="/update-user">
            Update your user here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
