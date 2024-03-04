// Generated with util/create-component.js
import React from "react";
import { customRender } from "../utils/testUtils";
import Chip, { ChipProps } from "./Chip";

describe("Chip", () => {
  let props: ChipProps;

  beforeEach(() => {
    props = {
      id: "chip",
      type: "neutral",
      text: "Chip",
      hideIcon: false,
      iconPosition: "left",
      onClick: () => {},
      onHover: () => {},
    };
  });

  const renderComponent = (props: ChipProps) => {
    const component = customRender(<Chip {...props} />, {});
    return component;
  };

  it("should render correctly", () => {
    props.text = "Conner was here";
    const { getByTestId } = renderComponent(props);
    const component = getByTestId("Chip");
    expect(component).toHaveTextContent(props.text);
  });
});
