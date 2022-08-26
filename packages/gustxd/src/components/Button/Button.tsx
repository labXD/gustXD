import clsx from "clsx"
import React from "react"

export type ButtonSizes = "xs" | "sm" | "md" | "lg" | "xl"
export type ButtonVariants = "primary" | "secondary" | "outlined"

export interface ButtonProps {
  children?: React.ReactNode
  className?: string
  size?: ButtonSizes
  variant?: ButtonVariants
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  size = "md",
  variant = "primary",
  ...rest
}) => {
  const outerCls = clsx(
    className,
    "border transition-all",
    "focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
    "font-medium",
    "flex items-center justify-center",
    "shadow-sm rounded-sm",
    {
      "px-2.5 py-1.5 text-xs": size == "xs",
      "leading-4 px-3 py-2 text-sm": size == "sm",
      "px-4 py-2 text-sm": size == "md",
      "px-4 py-2 text-base": size == "lg",
      "px-6 py-3 text-base": size == "xl",
      ["text-white bg-indigo-700 border-indigo-700 hover:bg-indigo-600"]:
        variant == "primary",
      "text-indigo-700 bg-indigo-100 border-indigo-100 hover:border-indigo-50 hover:bg-indigo-50":
        variant == "secondary",
      "bg-white border-indigo-700 text-indigo-700 hover:bg-indigo-50":
        variant == "outlined",
    }
  )

  return (
    <button className={outerCls} {...rest}>
      {children}
    </button>
  )
}
