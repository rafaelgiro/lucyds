import { forwardRef } from "react";
import { LucyBytton } from "./styles";

/**
 * Element used to trigger an action or event,
 * such as submitting a form, opening a dialog, canceling an action,
 * or performing a delete operation.
 * It's label represents the action that will occur when the user interacts with it.
 *
 * @example
 * ```
 * <Button>Click me!</Button>
 * ```
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props: ButtonProps, ref) => {
    const { priority = "primary", size = "md", children, ...other } = props;

    return (
      <LucyBytton priority={priority} size={size} {...other} ref={ref}>
        {children}
      </LucyBytton>
    );
  }
);

Button.displayName = "Button";
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * `primary:` The button has border and background color.
   * `secondary:` The button has only border color.
   * `tertiary:` The button does not have border and background color.
   */
  priority?: "primary" | "secondary" | "tertiary";
  /**
   * `sm:` The button has small size.\
   * `md:` The button has medium size.
   */
  size?: "sm" | "md";
}
