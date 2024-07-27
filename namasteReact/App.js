import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement-JS Object => HTMLELEMENT(render)

// const heading = React.createElement("h1",{id: "heading"},"Namaste React");

// console.log(heading);

// JSX -html-like or XML-like syntax
// React is different and jsx is different

// JSX (transpiled before it reaches the JS) - PARCEL -BABEL

// JSX => React.createElement => ReactElement-JS Object => HTMLELEMENT(render)

// Below code is not html.
// jsx use html like syntax , jsx use camelcase,how to write anchor codde in javascript

// BABEL is javascript compiler and Transpiles it to react.CreateElement.
const jsxHeading = <h1 id="heading">Namaste React using JSX </h1>

// why we wrap multiple line of code in round bracket ?
// so jsx will know from where code start and ending where 
// console.log(jsxHeading);


// React Component
// 

// const fn = ()=>{
//    return true       
// }

// const fn =()=> true
const Heading = () => {
   return <div>
              <h1> Namaste Heading</h1>
          </div>
}
// component return normal jsx

const elem = <span>React Element</span>

const title = (
   <h1>
      {elem}
       Namaste React Developer
   </h1>
)

// Compont composition

// what if api send some millicious data what actually happen here is injecting data
//  to our laptop
// this type of attcking called 

// whatever data u pass your data through curly braceces jsx take care of this injection attacks 
// jsx will escape it , jsx wo'nt blindly send data through curly braceces, santizies the data whatever is comming 

const HeadingComponent = () => (
  <div>
   {/* both way u can run component in your code both way is same */}
      <Heading/> 
      <Heading></Heading>

      {/* i can also call this function like this  */}
      
      {Heading()}
      {title}   
    <h1> Namaste</h1>
  </div>
)


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);