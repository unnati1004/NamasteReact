import React from "react";
import { useState } from "react";
import logo from "../Image/foodlogo.jpeg";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// import "../App.css";    

export const Header = () => {
  const [buttonReact, setButtonReact] = useState("Login");

  const onlineStatus = useOnlineStatus();
  console.log(onlineStatus);
  // console.log("rendered");
  return (
    <>
      <div className="flex">
        <div className="w-3">
        <img className="w-30" src={logo}/>
        </div>
        <div className="nav-items">
          <ul>
            <li>
              Online Status {onlineStatus ? "🔴":"🟢"}
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/grocery">Grocery</Link>
            </li>
            <li>Cart</li>
            <button
              onClick={() => {
                setButtonReact("Logout");
              }}
            >
              {buttonReact}
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};
