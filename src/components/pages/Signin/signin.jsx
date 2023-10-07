import React, { useState } from "react";
import "./styles.css";

const SigninBoxed = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleClick = (e) => {
    const { id, value } = e.target;
    setLoginData((prevValue) => {
      return {
        ...prevValue,
        [id]: value,
      };
    });
  };
  console.log(loginData);
  return (
    <div className="loginWrap">
      <form className="loginBoxedWrap">
        <p className="signInText">Sign In</p>
        <div className="inputWrap">
          <label>
            <p>Email</p>
          </label>
          <input
            type="email"
            placeholder="Enter Your Email"
            id="email"
            onChange={handleClick}
          />
        </div>
        <div className="inputWrap">
          <label>
            <p>Password</p>
          </label>
          <input
            type="password"
            placeholder="Enter Your Passwword"
            id="password"
            onChange={handleClick}
          />
        </div>
        <div  className="fpText">
          <span>Forgotten Password</span>
        </div>
        <button className="signInButton">Sign In</button>
      </form>
    </div>
  );
};

export default SigninBoxed;
