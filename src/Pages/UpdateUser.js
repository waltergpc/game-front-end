import React, { useState, useEffect } from "react";
import { useUser } from "../Context/UserContext";
import { Navigate, Link } from "react-router-dom";
import AvatarSelect from "../Components/AvatarSelect";
import Loading from "../Components/Loading";

import "../PagesCss/UpdateUser.css";

const UpdateUser = () => {
  const [updatedUser, setUpdatedUser] = useState({
    name: "",
    nickname: "",
    avatar: "",
  });
  const { user, updateUser, startUpdate, updateMessage, userLoading } =
    useUser();

  console.log(updatedUser);

  useEffect(() => {
    startUpdate();
    if (user) {
      setUpdatedUser({
        name: user.name,
        nickname: user.nickname,
        avatar: user.avatar,
      });
    }
    // eslint-disable-next-line
  }, []);

  if (!user) return <Navigate to="/home" />;

  if (userLoading) return <Loading />;

  const handleChange = (e) => {
    setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(user.playerId, updatedUser);
  };

  return (
    <div className="updateUser-container">
      <div className="section-div">
        {updateMessage && <div className="success-msg">{updateMessage}</div>}
        <div className="update-form">
          <form id="update-from" onSubmit={handleSubmit}>
            <input
              className="name-input"
              type="text"
              name="name"
              value={updatedUser.name}
              onChange={handleChange}
              placeholder="Name"
            />
            <input
              className="nickname-input"
              type="text"
              name="nickname"
              value={updatedUser.nickname}
              onChange={handleChange}
              placeholder="Nickname"
            />
            <AvatarSelect
              setUpdatedUser={setUpdatedUser}
              updatedUser={updatedUser}
            />
            <button className="submit-link-div update-btn" type="submit">
              Update
            </button>
          </form>
        </div>
        <div className="submit-link-div">
          <br />
          <div className="submit-link-div link-div">
            <Link
              className="submit-link-div link-div link"
              to="/dashboard"
              onClick={startUpdate}
            >
              Back to Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
