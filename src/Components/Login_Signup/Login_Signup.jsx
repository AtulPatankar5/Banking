import React, { useState } from "react";
import { IoPerson } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaMobile } from "react-icons/fa6";
import { IoArrowBackCircle } from "react-icons/io5";

import "./Login_Signup.css";
export default function Login_Signup() {
  const [action, setAction] = useState("Login");
  console.log(action);
  return (
    <div>
      <div className="container">
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <IoPerson className="icon" />
            <input type="text" placeholder="Username" />
          </div>
        
          {action === "Sign Up" ? (
            <div className="input">
              <FaMobile className="icon" />
              <input type="text" placeholder="Mobile Number" />
            </div>
          ) : (
            <div></div>
          )}
            <div className="input">
            <RiLockPasswordFill className="icon" />
            <input type="password" placeholder="Password" />
          </div>
          {action === "Sign Up" ? (
            <div className="input">
              <RiLockPasswordFill className="icon" />
              <input type="password" placeholder="Confirm Password" />
            </div>
          ) : (
            <div></div>
          )}
        </div>
        {action === "Sign Up" ? (
          <div></div>
        ) : (
          <div className="forgot-password">
            <span>Forgot Password ? </span>
          </div>
        )}
        <div className="submit-container">
          {action === "Login" ? (
            <button
              className={action === "Sign Up" ? "submit gray" : "submit"}
              onClick={() => {
                setAction("Login");
              }}
            >
              Login
            </button>
          ) : (
            <></>
          )}
          {action === "Sign Up" || "Login" ? (
            <button
              className={action === "Login" ? "submit gray" : "submit"}
              onClick={() => {
                setAction("Sign Up");
              }}
            >
              Sign Up
            </button>
          ) : (
            <></>
          )}
        </div>

        <div className="back-Login">
          {action === "Sign Up" ? (
            <span
              onClick={() => {
                setAction("Login");
              }}
            >
              <IoArrowBackCircle className="icon-back" />   Login
            </span>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
