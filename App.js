import React from "react";
import ReactDOM from "react-dom" 

// {} this object is the place where u give attribute to our tag;
// <h1 id ="heading"> Hello World</h1>
// example const heading = React.createElement('h1',{
// id: heading
// },"Hello World from React")


// ReactElement(Object) = HTML(BROWSER understand) 

const parent = React.createElement(
          "div",
          { id: "parent" },
          React.createElement("div", { id: "child" },
                    [React.createElement('h1', {
                              id: "heading"
                    }, "I am h1 tag"),
                    React.createElement('h2', {
                              id: "heading"
                    }, "I am h2 tag"),]
          )
)

// const heading = React.createElement('h1',{
//           id: "heading"
// },"Hello World from React")
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);  
