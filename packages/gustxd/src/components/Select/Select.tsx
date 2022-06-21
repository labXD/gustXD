import React from "react";
import cn from "classnames";

export type SelectProps = {
  children?: React.ReactNode;
  className?: string;
  defaultValue?: string;
  label?: string;
  id: string;
  options: string[];
};

export const Select: React.FC<SelectProps> = ({
  children,
  className,
  defaultValue,
  label,
  id,
  options,
  ...rest
}) => {
  const outerCls = cn(className);

  const labelWrapCls = cn("block", "font-medium", "text-gray-700", "text-sm");
  const labelCls = cn("text-left");
  const selectCls = cn(
    "block",
    "border-gray-300",
    "focus:border-indigo-500",
    "focus:outline-none",
    "focus:ring-indigo-500",
    "pl-3",
    "pr-10",
    "py-2",
    "rounded-md",
    "sm:text-sm",
    "text-base",
    "w-full",
    { "mt-1": label }
  );

  return (
    <>
      <div className={outerCls} {...rest}>
        <label className={labelWrapCls}>
          <div className={labelCls}>{label}</div>
          <select
            id={id}
            name={id}
            className={selectCls}
            defaultValue={defaultValue}
          >
            {options.map((item, index) => (
              <option key={index}>{item}</option>
            ))}
          </select>
        </label>
      </div>
    </>
  );
};
