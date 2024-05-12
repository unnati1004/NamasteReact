import { useState } from "react";
import logo from "../Image/foodlogo.jpeg";

export const Header = ()=> {

     const [buttonReact,setButtonReact] = useState("Login")

     console.log("rendered");
          return (
          <>
              <div className="header">
                    <div className="logo-container">
                              <img
                                className="logo"
                                src={logo}
                              />
                    </div>
                    <div className="nav-items">
                         <ul>
                              <li>Home</li>
                              <li>About Us</li>
                              <li>Contact Us</li>
                              <li>Cart</li>
                              <button
                               onClick={()=>{
                                   setButtonReact("Logout")
                               }}
                              >{buttonReact}</button>
                         </ul>
                    </div>
              </div>           
          </>
          )
}