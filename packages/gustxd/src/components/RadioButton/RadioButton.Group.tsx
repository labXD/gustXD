import cn from "classnames"
import React from "react"

export type RadioButtonGroupProps = {
  className?: string
  children?: React.ReactNode
  description?: string
  inline?: boolean
  label?: string
  screenReader?: string
}

export const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
  className,
  children,
  description,
  inline,
  label,
  screenReader,
}) => {
  const outerCls = cn(className)

  const labelCls = cn("font-medium", "text-base", "text-gray-900")

  const descriptionCls = cn("leading-5", "text-gray-500", "text-sm")

  const groupWrapperClassNames = cn("space-y-4", {
    ["sm:flex sm:items-center sm:space-y-0 sm:space-x-10"]: inline,
  })

  return (
    <>
      <div className={outerCls}>
        {label && <label className={labelCls}>{label}</label>}
        {description && <p className={descriptionCls}>{description} </p>}
        <fieldset className="mt-4">
          <legend className="sr-only">
            {screenReader ? screenReader : label ? label : "radio-group"}
          </legend>
          <div className={groupWrapperClassNames}>{children}</div>
        </fieldset>
      </div>
    </>
  )
}
