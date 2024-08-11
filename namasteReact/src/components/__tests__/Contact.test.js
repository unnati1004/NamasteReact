import { render,screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";
import { Component } from "react";

test("Should load contact us component", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

// Assertion
  expect(heading).toBeInTheDocument();
});

//there is a button or not in a 
// Component 
test("Should load button inside Contact component", () => {
  render(<Contact />);

  const button = screen.getByRole("button");

// Assertion
  expect(button).toBeInTheDocument();
});



// test("Should load Random text inside Contact component", () => {
//   render(<Contact />);

//   const text = screen.getByText("Contact");

// // Assertion
//   expect(text).toBeInTheDocument();
// });

// checking placeholder name is there in a inputbox
test("Should load inputName inside Contact component", () => {
  render(<Contact />);

  const inputName = screen.getByPlaceholderText("name");

// Assertion
  expect(inputName).toBeInTheDocument();
});

it("should load 2 input boxes on the contact component",()=>{
  render(<Contact/>);
//   Querying
  const inputBoxes = screen.getAllByRole("textbox");

//   Assertion
// expect(inputBoxes.length).not.toBe(3);
expect(inputBoxes.length).toBe(2);
  
})