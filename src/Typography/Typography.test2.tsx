// Generated with util/create-component.js
import { render } from "@testing-library/react";
import React from "react";

import Typography from "./Typography";
import { TypographyProps } from "./Typography.types";

describe("Test Component", () => {
  let props: TypographyProps;

  beforeEach(() => {
    props = {
      foo: "bar",
    };
  });

  const renderComponent = () => render(<Typography {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "conner was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Typography");

    expect(component).toHaveTextContent("conner was here");
  });
});
