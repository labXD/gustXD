import React from "react";
import cn from "classnames";

export type ButtonSizes = "xs" | "sm" | "md" | "lg" | "xl";
export type ButtonVariants = "primary" | "secondary" | "outlined";

export interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  size?: ButtonSizes;
  rounded?: boolean;
  variant?: ButtonVariants;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  rounded,
  size = "md",
  variant = "primary",
  ...rest
}) => {
  const outerCls = cn(
    className,
    "border",
    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-indigo-500",
    "focus:ring-offset-2",
    "font-medium",
    "inline-flex",
    "items-center",
    "shadow-sm",
    [variant == "outlined" ? "border-gray-300" : "border-transparent"],
    {
      ["px-2.5 py-1.5 text-xs"]: size == "xs",
      ["leading-4 px-3 py-2 text-sm"]: size == "sm",
      ["px-4 py-2 text-sm"]: size == "md",
      ["px-4 py-2 text-base"]: size == "lg",
      ["px-6 py-3 text-base"]: size == "xl",
      ["bg-indigo-600 hover:bg-indigo-700 text-white"]: variant == "primary",
      ["bg-indigo-100 hover:bg-indigo-200 text-indigo-700"]:
        variant == "secondary",
      ["bg-white hover:bg-gray-50 text-gray-700"]: variant == "outlined",
    },
    {
      ["rounded"]: size == "xs" && !rounded,
      ["rounded-md"]: size !== "xs" && !rounded,
      ["rounded-full"]: rounded,
    }
  );

  return (
    <button className={outerCls} {...rest}>
      {children}
    </button>
  );
};
