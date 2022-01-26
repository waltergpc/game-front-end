import React, { useState } from "react";
import Loading from "../Components/Loading";
import { useUser } from "../Context/UserContext";

import "../PagesCss/Signin.css";

const SignIn = () => {
  const { register, login, errorMsg, userLoading } = useUser();
  const [showLogin, setShowLogin] = useState(true);
  const [newUser, setNewUser] = useState({
    nickname: "",
    name: "",
    password: "",
  });
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [passwordError, setPasswordError] = useState(null);

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const submitLogin = (e) => {
    e.preventDefault();
    if (showLogin) {
      login({ ...newUser });
    }
    if (!showLogin) {
      if (newUser.password !== confirmedPassword) {
        setPasswordError("Passwords do not match");
        return;
      }
      register({ ...newUser });
    }
    setConfirmedPassword("");
    setPasswordError(null);
    setNewUser({ name: "", nickname: "", password: "" });
  };

  if (userLoading) return <Loading />;

  return (
    <div className="container">
      <div className="error-container">
        {errorMsg && <div className="error-section">{errorMsg}</div>}
      </div>
      <section className="container-glass">
        <h3>{showLogin ? "Log In" : "Register"}</h3>
        {passwordError && <div>{passwordError}</div>}

        <form onSubmit={submitLogin} className="input-container">
          {!showLogin && (
            <input
              className="input-style"
              type="text"
              name="name"
              value={newUser.name}
              placeholder="Enter your name"
              onChange={handleChange}
            />
          )}
          <input
            className="input-style"
            type="text"
            name="nickname"
            value={newUser.nickname}
            placeholder="Enter your nickname"
            onChange={handleChange}
          />
          <input
            className="input-style"
            type="password"
            name="password"
            value={newUser.password}
            placeholder="Enter your password"
            onChange={handleChange}
          />
          {!showLogin && (
            <input
              className="input-style"
              type="password"
              name="confirmed-password"
              value={confirmedPassword}
              placeholder="Confirm your password"
              onChange={(e) => {
                setConfirmedPassword(e.target.value);
              }}
            />
          )}
          <div className="button-container">
            <button
              className="button-style"
              type="submit"
              disabled={!newUser.nickname}
            >
              Log In
            </button>
          </div>
        </form>
        <div className="if-registered">
          <p>
            <button
              type="button"
              className="toggle-login if-registered-button"
              onClick={() => setShowLogin(!showLogin)}
            >
              {showLogin ? "Create account" : "Already have an account ?"}
            </button>
          </p>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
