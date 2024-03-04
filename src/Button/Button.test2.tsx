// Generated with util/create-component.js
import { render } from "@testing-library/react";
import React from "react";

import Button from "./Button";
import { ButtonProps } from "./Button.types";

describe("Test Component", () => {
  let props: ButtonProps;

  beforeEach(() => {
    props = {
      foo: "bar",
    };
  });

  const renderComponent = () => render(<Button {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "conner was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Button");

    expect(component).toHaveTextContent("conner was here");
  });
});
