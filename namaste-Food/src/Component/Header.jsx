import logo from "../Image/foodlogo.jpeg";

export const Header = ()=> {
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
                              <li>About us</li>
                              <li>Contact Us</li>
                              <li>Cart</li>
                         </ul>
                    </div>
              </div>           
          </>
          )
}