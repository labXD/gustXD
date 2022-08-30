import { Switch } from "@headlessui/react"
import clsx from "clsx"
import React from "react"

export type ToggleProps = {
  className?: string
  checked: boolean
  compact?: boolean
  description?: string
  flip?: boolean
  inline?: boolean
  onChange(checked: boolean): void
  screenReader?: string
  label?: string
}

export const Toggle: React.FC<ToggleProps> = ({
  className,
  checked,
  compact,
  description,
  flip,
  inline,
  onChange,
  screenReader = "user settings",
  label,
  ...rest
}) => {
  const switchCls = clsx(
    className,
    [checked ? "bg-indigo-600" : "bg-gray-200"],
    "cursor-pointer",
    "flex-shrink-0",
    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-indigo-500",
    "focus:ring-offset-2",
    "inline-flex",
    "relative",
    "rounded-full",
    {
      ["border-2 border-transparent duration-200 ease-in-out h-6 transition-colors w-11"]:
        !compact,
      ["group h-5 items-center justify-center w-10"]: compact,
    }
  )

  const toggleCls = clsx(
    [checked ? "translate-x-5" : "translate-x-0"],
    "bg-white",
    "duration-200",
    "ease-in-out",
    "h-5",
    "inline-block",
    "pointer-events-none",
    "ring-0",
    "rounded-full",
    "shadow",
    "transform",
    "w-5",
    {
      ["transition"]: !compact,
      ["absolute border border-gray-200 left-0 transition-transform"]: compact,
    }
  )

  const bgCls = clsx(
    checked ? "bg-indigo-600" : "bg-gray-200",
    "absolute",
    "duration-200",
    "ease-in-out",
    "h-4",
    "mx-auto",
    "pointer-events-none",
    "rounded-full",
    "transition-colors",
    "w-9"
  )

  const bgHeightCls = clsx(
    "absolute",
    "bg-white",
    "h-full",
    "pointer-events-none",
    "rounded-md",
    "w-full"
  )

  const groupCls = clsx("flex", "items-center")

  const labelCls = clsx("font-medium", "text-gray-900", "text-sm")

  const descriptionCls = clsx("text-gray-500", "text-sm", { "ml-1": label })

  const ParseSwitch = () => {
    return (
      <Switch
        checked={checked}
        onChange={onChange}
        className={switchCls}
        {...rest}
      >
        <span className="sr-only">{screenReader}</span>
        {compact && (
          <>
            <span aria-hidden="true" className={bgHeightCls} />
            <span aria-hidden="true" className={bgCls} />
          </>
        )}
        <span aria-hidden="true" className={toggleCls} />
      </Switch>
    )
  }

  if (inline) {
    return (
      <Switch.Group as="div" className={groupCls}>
        {!flip && <ParseSwitch />}
        <Switch.Label as="span" className={clsx([flip ? "mr-3" : "ml-3"])}>
          {label && <span className={labelCls}>{label}</span>}
          {description && <span className={descriptionCls}>{description}</span>}
        </Switch.Label>
        {flip && <ParseSwitch />}
      </Switch.Group>
    )
  }

  return <ParseSwitch />
}
