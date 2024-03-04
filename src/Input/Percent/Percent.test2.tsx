// Generated with util/create-component.js
import { render } from "@testing-library/react";
import React from "react";

import Percent from "./Percent";
import { PercentProps } from "./Percent.types";

describe("Test Component", () => {
  let props: PercentProps;

  beforeEach(() => {
    props = {
      foo: "bar",
    };
  });

  const renderComponent = () => render(<Percent {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "conner was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Percent");

    expect(component).toHaveTextContent("conner was here");
  });
});
