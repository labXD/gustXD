import clsx from "clsx"
import React from "react"

export type CheckboxFieldsetProps = {
  children: React.ReactNode
  className?: string
  screenReader?: string
}

export const CheckboxFieldset: React.FC<CheckboxFieldsetProps> = ({
  children,
  className,
  screenReader,
  ...rest
}) => {
  const outerClassNames = clsx(className, "space-y-5")

  return (
    <fieldset className={outerClassNames} {...rest}>
      <legend className="sr-only">{screenReader}</legend>
      {children}
    </fieldset>
  )
}
