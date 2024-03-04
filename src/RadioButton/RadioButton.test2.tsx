// Generated with util/create-component.js
import { render } from "@testing-library/react";
import React from "react";

import RadioButton from "./RadioButton";
import { RadioButtonProps } from "./RadioButton.types";

describe("Test Component", () => {
  let props: RadioButtonProps;

  beforeEach(() => {
    props = {
      foo: "bar",
    };
  });

  const renderComponent = () => render(<RadioButton {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "conner was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("RadioButton");

    expect(component).toHaveTextContent("conner was here");
  });
});
