// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Grid from "./Grid";
import { GridProps } from "./Grid.types";

describe("Test Component", () => {
  let props: GridProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<Grid {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "conner was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Grid");

    expect(component).toHaveTextContent("conner was here");
  });
});
