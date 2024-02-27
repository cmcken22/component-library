import React from "react";
import TestComponent from "./TestComponent";
import Button from "../Button";

export default {
  title: "TestComponent"
};

export const WithText = () => (
  <TestComponent
    heading="I am a test component"
    content={<h2>Made with love by Conner</h2>}
  />
);

export const WithButtons = () => (
  <TestComponent
    heading="I have a button"
    content={
      <div>
        <Button onClick={() => alert("You clicked me!")}>Click me</Button>
      </div>
    }
  />
);
