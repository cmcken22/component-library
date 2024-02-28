// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import RadioButtonGroup from "./RadioButtonGroup";
import { RadioButtonGroupProps } from "./RadioButtonGroup.types";

describe("Test Component", () => {
  let props: RadioButtonGroupProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<RadioButtonGroup {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("RadioButtonGroup");

    expect(component).toHaveTextContent("harvey was here");
  });
});
