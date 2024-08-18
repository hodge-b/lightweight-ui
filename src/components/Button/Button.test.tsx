import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

describe("Button", () => {
  it("Renders the Button component", () => {
    const { container } = render(<Button className="test-button" />);
    expect(container.firstChild).toHaveClass("test-button");
  });
});
