import { useState } from "react";
import logo from "../Image/foodlogo.jpeg";
import { Link } from "react-router-dom";
export const Header = () => {
  const [buttonReact, setButtonReact] = useState("Login");

  console.log("rendered");
  return (
    <>
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={logo} />
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
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
