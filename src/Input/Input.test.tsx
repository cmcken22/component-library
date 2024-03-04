import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import "jest-styled-components";
import React from "react";
import ThemeWrapper from "../ThemeWrapper";
import Input, { InputProps } from "./Input";

// let documentBody: RenderResult;

const AllTheProviders = ({ children }) => {
  return <ThemeWrapper>{children}</ThemeWrapper>;
};

const customRender = (ui, options) =>
  // render(ui, { wrapper: AllTheProviders, ...options });
  render(ui, { wrapper: AllTheProviders, ...options });

describe("Test Component", () => {
  let props: InputProps;

  beforeEach(() => {
    // documentBody = render(provideTheme(<Input />));
    // document.head.innerHTML = document.head.innerHTML; // ⚠️ Add this line.
    // console.log("InputComponent:", document.head.innerHTML);
    props = {
      id: "test_id",
      label: "label",
      placeholder: "placeholder",
      helperText: "helperText",
      disabled: false,
      value: "12345",
      fullWidth: false,
      required: true,
      labelPosition: "top",
    };
  });

  const renderComponent = () => {
    const component = customRender(<Input {...props} />, {});
    return component;
  };

  it("should render correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("Input");
    expect(component).toBeInTheDocument();

    const InputComponent = component.querySelector("input");
    expect(InputComponent).toBeInTheDocument();

    expect(component).toHaveAttribute("id", "test_id");
    expect(InputComponent).toHaveValue("12345");
  });

  it("should update value", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("Input");

    const Input = component.querySelector("input");
    expect(Input).toBeInTheDocument();

    // Simulate a change event
    fireEvent.change(Input!, { target: { value: "5678" } });

    // Check if the value has been updated
    expect(Input).toHaveValue("5678");
  });

  it("should have error state", () => {
    props.status = "error";
    // console.log("body:", document.body.innerHTML);
    const { getByTestId } = renderComponent();
    // console.log("head:", document.head.outerHTML);
    const component = getByTestId("Input");
    const InputComponent = component.querySelector(".MuiTextField-root");
    // console.log("InputComponent:", document.head.innerHTML);
    // setTimeout(() => {
    // const FieldSet = component.querySelector(".MuiOutlinedInput-root fieldset");
    // const computedStyle = document.defaultView.getComputedStyle(FieldSet);
    // console.log("computedStyle", computedStyle?.borderColor);
    // }, 1000);
    // console.log("FieldSet:", getStyle(FieldSet, "border-bottom-color"));
    // expect(InputComponent).toBeInTheDocument();
    expect(InputComponent).toHaveClass("status--error");
  });
});
