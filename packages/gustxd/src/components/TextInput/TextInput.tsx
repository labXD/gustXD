import clsx from "clsx"
import React from "react"

export type TextInputProps = {
  placeholder?: string
  prefix?: string
  label?: string
  id?: string
  value?: string
  className?: string
}

export const TextInput: React.FC<TextInputProps> = ({
  className,
  prefix,
  placeholder,
  label,
  id,
  value,
  ...rest
}) => {
  const outerCls = clsx(className)

  const labelWrapCls = clsx("block", "font-medium", "text-sm", "text-gray-700")

  const labelCls = clsx("text-left")

  const prefixWrapCls = clsx(
    "absolute",
    "flex",
    "inset-y-0",
    "left-0",
    "items-center",
    "pl-3",
    "pointer-events-none"
  )

  const prefixCls = clsx("text-gray-500", "sm:text-sm")

  const inputWrapCls = clsx("mt-1", "relative", "rounded-md", "shadow-sm")

  const inputCls = clsx(
    "border-gray-300",
    "block w-full",
    "focus:ring-indigo-500",
    "focus:border-indigo-500",
    "pr-3",
    "rounded-md",
    "sm:text-sm",
    {
      "pl-3": !prefix,
      "pl-7": prefix,
    }
  )
  return (
    <div className={outerCls}>
      <label className={labelWrapCls}>
        <div className={labelCls}>{label}</div>
        <div className={inputWrapCls}>
          <div className={prefixWrapCls}>
            {prefix && <span className={prefixCls}>{prefix}</span>}
          </div>
          <input
            type="text"
            id={id}
            className={inputCls}
            placeholder={placeholder}
            value={value}
            {...rest}
          />
        </div>
      </label>
    </div>
  )
}
