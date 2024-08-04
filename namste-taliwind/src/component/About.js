// import User from "./User";
import UserContext from "../utils/userContext";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);

    // console.log("Parent Constructor");
  }
  componentDidMount() {
    // console.log("Component Did Mount");
    setInterval(() => {
      console.log("namste op");
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval();
    // console.log("ComponentWillMount")
  }

  render() {
    // console.log("Parent Render");
    return (
      <div>
        <h1>About Class Component</h1>
         <div>
        <UserContext.Consumer>
          {({LoggedInUser})=> <h2>{LoggedInUser}</h2>}
        </UserContext.Consumer>
         </div>
        <h2>This is namaste react webSeries</h2>
        {/* <User name={"Akshay Saini(function)"}/>  */}
        <UserClass name={"Akshay Saini"} location={"Dehradun"} />
        {/* <UserClass name={"Elon Musk"} location={"UK"}/> */}
      </div>
    );
  }
}

// const About = ()=>{
//   return (
//     <div>
//        <h1>About</h1>
//        <h2>This is namaste react webSeries</h2>
//        {/* <User name={"Akshay Saini(function)"}/>  */}
//        <UserClass name={"Akshay Saini(class)"}/>
//     </div>
//   )
// }

export default About;

// Life Cycle Method in class component With multiple instances

// parent Constructor
// parent Render

// akshay constructor
// akshay Render

// elon constructor
// Elon Render

// Akshay componentDidMount
// Elon componentDidMount
// Parent componentDidMount
