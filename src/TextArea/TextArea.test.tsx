// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import TextArea from "./TextArea";
import { TextAreaProps } from "./TextArea.types";

describe("Test Component", () => {
  let props: TextAreaProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<TextArea {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("TextArea");

    expect(component).toHaveTextContent("harvey was here");
  });
});
