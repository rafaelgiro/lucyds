import clsx from "clsx";
import { forwardRef } from "react";
import { LucyTypography } from "./styles";

/**
 * Component that displays text based on a typographic scale.
 *
 * @example
 * ```
 * <Typography htmlTag="h2" variant="heading">
 * ```
 */
export const Typography = forwardRef<HTMLDivElement, TypographyProps>(
  (props: TypographyProps, ref) => {
    const {
      variant = "paragraph",
      htmlTag = "span",
      className,
      ...other
    } = props;

    return (
      <LucyTypography ref={ref} as={htmlTag} variant={variant} {...other} />
    );
  }
);

Typography.displayName = "Typography";

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * HTML Component wich will be rendered on the DOM
   */
  htmlTag?: keyof JSX.IntrinsicElements;
  /**
   * Font type style to render
   */
  variant?: "paragraph" | "button" | "label";
  /**
   * Text content of the component
   */
  children: React.ReactNode;
  /**
   * If true, the text will have its color changed to indicate an error.
   */
  hasError?: boolean;
}
