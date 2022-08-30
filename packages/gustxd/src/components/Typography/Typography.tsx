import clsx from "clsx"
import React from "react"

export type TypographyTypes =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "div"
  | "p"
  | "span"

export type TypographyProps = {
  children?: React.ReactNode
  className?: string
  type: TypographyTypes
}

export const Typography: React.FC<TypographyProps> = ({
  children = "content",
  className,
  type = "div",
  ...rest
}) => {
  const parseClasses = () => {
    switch (type) {
      case "h1":
        return clsx(className, "font-light", "text-8xl")
      case "h2":
        return clsx(className, "font-light", "text-6xl")
      case "h3":
        return clsx(className, "font-normal", "text-5xl")
      case "h4":
        return clsx(className, "font-normal", "text-4xl")
      case "h5":
        return clsx(className, "font-medum", "text-2xl")
      case "h6":
        return clsx(className, "font-medium", "text-xl")
      case "div":
      case "p":
      case "span":
      default:
        return clsx(className, "font-normal", "text-base")
    }
  }

  return React.createElement(
    type,
    { className: parseClasses(), ...rest },
    children
  )
}
