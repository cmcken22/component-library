// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Currency from "./Currency";
import { CurrencyProps } from "./Currency.types";

describe("Test Component", () => {
  let props: CurrencyProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<Currency {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Currency");

    expect(component).toHaveTextContent("harvey was here");
  });
});
