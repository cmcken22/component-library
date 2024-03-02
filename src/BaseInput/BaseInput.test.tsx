// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import BaseInput from "./BaseInput";
import { BaseInputProps } from "./BaseInput.types";

describe("Test Component", () => {
  let props: BaseInputProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<BaseInput {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("BaseInput");

    expect(component).toHaveTextContent("harvey was here");
  });
});
