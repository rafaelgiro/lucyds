import { describe, it, vi } from "vitest";
import { render, screen, fireEvent } from "../../../test-utils";

import { Button, ButtonProps } from "../Button";

describe("<Button />", () => {
  it("is extending basic HTML props", () => {
    render(<Button type="submit">Button test</Button>);
    const button = screen.getByRole("button", { name: "Button test" });

    expect(button).toBeVisible();
    expect(button).toHaveAttribute("type", "submit");
  });

  it("runs HTML callback events", () => {
    const onClick = vi.fn();
    const onDoubleClick = vi.fn();
    const onMouseDown = vi.fn();
    const onMouseUp = vi.fn();
    const onMouseEnter = vi.fn();
    const onMouseLeave = vi.fn();
    const onFocus = vi.fn();
    const onBlur = vi.fn();

    render(
      <Button
        onClick={onClick}
        onDoubleClick={onDoubleClick}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onFocus={onFocus}
        onBlur={onBlur}
      >
        Button test
      </Button>
    );

    const button = screen.getByRole("button", { name: "Button test" });

    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);

    fireEvent.dblClick(button);
    expect(onDoubleClick).toHaveBeenCalledTimes(1);

    fireEvent.mouseDown(button);
    expect(onMouseDown).toHaveBeenCalledTimes(1);

    fireEvent.mouseUp(button);
    expect(onMouseUp).toHaveBeenCalledTimes(1);

    fireEvent.mouseEnter(button);
    expect(onMouseEnter).toHaveBeenCalledTimes(1);

    fireEvent.mouseLeave(button);
    expect(onMouseLeave).toHaveBeenCalledTimes(1);

    fireEvent.focus(button);
    expect(onFocus).toHaveBeenCalledTimes(1);

    fireEvent.blur(button);
    expect(onBlur).toHaveBeenCalledTimes(1);
  });
});
