// Generated with util/create-component.js
import { render } from "@testing-library/react";
import React from "react";

import Toggle from "./Toggle";
import { ToggleProps } from "./Toggle.types";

describe("Test Component", () => {
  let props: ToggleProps;

  beforeEach(() => {
    props = {
      foo: "bar",
    };
  });

  const renderComponent = () => render(<Toggle {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "conner was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Toggle");

    expect(component).toHaveTextContent("conner was here");
  });
});
