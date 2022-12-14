import { describe, it, vi } from "vitest";
import { render, screen, fireEvent } from "../../../test-utils";

import { TextField } from "../TextField";

describe("<TextField />", () => {
  it("is extending basic HTML props", () => {
    render(<TextField id="test" type="password" label="Password" />);
    const input = screen.getByLabelText("Password");

    expect(input).toBeVisible();
    expect(input).toHaveAttribute("type", "password");
  });

  it("runs HTML callback events", () => {
    const onChange = vi.fn();
    const onFocus = vi.fn();
    const onBlur = vi.fn();

    render(
      <TextField
        id="test"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        label="Testing"
      />
    );

    const input = screen.getByRole("textbox", { name: "Testing" });

    fireEvent.change(input, { target: { value: "123" } });
    expect(onChange).toHaveBeenCalledTimes(1);

    fireEvent.focus(input);
    expect(onFocus).toHaveBeenCalledTimes(1);

    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalledTimes(1);
  });

  it("invalidates the input when `hasError` is passed", () => {
    render(<TextField id="test" hasError label="Testing error" />);
    const input = screen.getByRole("textbox", { name: "Testing error" });

    expect(input).toBeInvalid();
  });

  it("has a hint when 'hintText' is passed", () => {
    render(<TextField id="test" hintText="Hint text" label="Testing hint" />);
    const input = screen.getByRole("textbox", { name: "Testing hint" });

    expect(input).toHaveAccessibleDescription("Hint text");
  });
});
