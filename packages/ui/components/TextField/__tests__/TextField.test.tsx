import { describe, it, vi } from "vitest";
import { render, screen, fireEvent } from "../../../test-utils";

import { TextField } from "../TextField";

describe("<TextField />", () => {
  it("is extending basic HTML props", () => {
    render(<TextField type="password" label="Password" />);
    const input = screen.getByRole("textbox", { name: "Password" });

    expect(input).toBeVisible();
    expect(input).toHaveAttribute("type", "password");
  });

  it("runs HTML callback events", () => {
    const onChange = vi.fn();
    const onFocus = vi.fn();
    const onBlur = vi.fn();

    render(
      <TextField
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        label="Password"
      />
    );

    const input = screen.getByRole("textbox", { name: "Password" });

    fireEvent.change(input, { target: { value: "123" } });
    expect(onChange).toHaveBeenCalledTimes(1);

    fireEvent.focus(input);
    expect(onFocus).toHaveBeenCalledTimes(1);

    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalledTimes(1);
  });

  it("invalidates the input when `hasError` is passed", () => {
    render(<TextField hasError label="Testing error" />);
    const input = screen.getByRole("textbox", { name: "Testing error" });

    expect(input).toBeInvalid();
  });

  it("has a hint when 'hintText' is passed", () => {
    render(<TextField hintText="Hint text" label="Testing hint" />);
    const input = screen.getByRole("textbox", { name: "Testing hint" });

    expect(input).toHaveAccessibleDescription("Hint text");
  });
});
