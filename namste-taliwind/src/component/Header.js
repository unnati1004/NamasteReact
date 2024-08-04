import React, { useCallback, useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Image/foodlogo.jpeg";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";
// import "../App.css";

export const Header = () => {
  const [buttonReact, setButtonReact] = useState("Login");

  const onlineStatus = useOnlineStatus();
  // console.log(onlineStatus);
  // console.log("rendered");

  const {LoggedInUser} = useContext(userContext);

  // subscribing to the store
  const cartItems = useSelector((store)=>store.cart.items);
  // console.log(cartItems);
    
  return (
    <>
      <div className="flex justify-between
       bg-blue-100 sm:bg-yellow-100 
       lg:bg-green-100">
        <div className="w-20">
          <img className="w-20" src={logo} />
        </div>
        <div className="flex items-center">
          <ul className="flex p-4">
            <li className="px-4">Online Status {onlineStatus ? "🔴" : "🟢"}</li>
            <li className="px-4 hover:border border-solid border-black">
              <Link to="/">Home</Link>
            </li>
            <li className="px-4 hover:border border-solid border-black">
              <Link to="/about">About Us</Link>
            </li>
            <li className="px-4 hover:border border-solid border-black">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="px-4 hover:border border-solid border-black" >
              <Link to="/grocery">Grocery</Link>
            </li>
            <li className="px-4 hover:border border-solid border-black text-bold text-xl">
            <Link to="/cart" >
             Cart ({cartItems.length} items)
            </Link> 
             </li>
            <li
            className="px-4 hover:border border-solid border-black bg-slate-500"
              onClick={() => {
                setButtonReact("Logout");
              }}
            >
              {buttonReact}
            </li>
             <li>{LoggedInUser}</li>
          </ul>
        </div>
      </div>
    </>
  );
};
