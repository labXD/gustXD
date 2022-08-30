import clsx from "clsx"
import React from "react"

export type TextAreaProps = {
  className?: string
  defaultValue?: string
  label?: string
  id: string
}

export const TextArea: React.FC<TextAreaProps> = ({
  className,
  defaultValue,
  label,
  id,
  ...rest
}) => {
  const outerCls = clsx(className)
  const labelWrapCls = clsx("block", "font-medium", "text-gray-700", "text-sm")
  const labelCls = clsx("text-left")
  const textAreaCls = clsx(
    "block",
    "border-gray-300",
    "focus:border-indigo-500",
    "focus:ring-indigo-500",
    "rounded-md",
    "shadow-sm",
    "sm:text-sm",
    "w-full"
  )
  return (
    <>
      <div className={outerCls}>
        <label className={labelWrapCls}>
          <div className={labelCls}>{label}</div>
          <div className={clsx({ "mt-1": label })}>
            <textarea
              rows={4}
              name={id}
              id={id}
              className={textAreaCls}
              defaultValue={defaultValue}
              {...rest}
            />
          </div>
        </label>
      </div>
    </>
  )
}
