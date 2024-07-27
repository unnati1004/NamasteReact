import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Image/foodlogo.jpeg";
import useOnlineStatus from "../utils/useOnlineStatus";
// import "../App.css";

export const Header = () => {
  const [buttonReact, setButtonReact] = useState("Login");

  const onlineStatus = useOnlineStatus();
  console.log(onlineStatus);
  // console.log("rendered");
  return (
    <>
      <div className="flex justify-between bg-blue-50">
        <div className="w-20">
          <img className="w-20" src={logo} />
        </div>
        <div className="flex">
          <ul className="flex p-4">
            <li className="p-4">Online Status {onlineStatus ? "🔴" : "🟢"}</li>
            <li className="p-4">
              <Link to="/">Home</Link>
            </li>
            <li className="p-4">
              <Link to="/about">About Us</Link>
            </li>
            <li className="p-4">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="p-4" >
              <Link to="/grocery">Grocery</Link>
            </li>
            <li className="p-4">Cart</li>
            <button
            className="p-4 bg-slate-500"
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
