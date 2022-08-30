import clsx from "clsx"
import React from "react"

export type BadgeColors =
  | "blue"
  | "gray"
  | "green"
  | "indigo"
  | "pink"
  | "purple"
  | "red"
  | "yellow"
export type BadgeSizes = "xs" | "sm" | "md" | "lg"

export type BadgeProps = {
  children?: React.ReactNode
  className?: string
  /**
   * Choose the color scheme for your badge
   */
  color?: BadgeColors
  /**
   * Specify if you want fully rounded corners
   */
  rounded?: boolean
  /**
   * Specify the size of the badge.
   */
  size?: BadgeSizes
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  color = "gray",
  rounded = false,
  size = "xs",
  ...rest
}) => {
  const outerCls = clsx(
    className,
    "font-medium",
    "inline-flex",
    "items-center",
    `bg-${color}-100`,
    `text-${color}-800`,
    [rounded ? "rounded-full" : "rounded"],
    {
      ["text-xs px-2.5 py-0.5"]: size == "xs",
      ["text-sm px-3 py-0.5"]: size == "sm",
      ["text-base px-3.5 py-1"]: size == "md",
      ["text-lg px-4 py-1"]: size == "lg",
    }
  )

  return (
    <span
      className={outerCls}
      title={typeof children == "string" ? children : ""}
      {...rest}
    >
      {children}
    </span>
  )
}
