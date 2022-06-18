import React from "react";
import cn from "classnames";

export type TextInputProps = {
  placeholder?: string;
  prefix?: string;
  label?: string;
  id?: string;
  value?: string;
  className?: string;
};

export const TextInput: React.FC<TextInputProps> = ({
  className,
  prefix,
  placeholder,
  label,
  id,
  value,
  ...rest
}) => {
  const outerClassNames = cn(className);

  const labelWrapperClassNames = cn(
    "block",
    "font-medium",
    "text-sm",
    "text-gray-700"
  );

  const prefixWrapperClassNames = cn(
    "absolute",
    "flex",
    "inset-y-0",
    "left-0",
    "items-center",
    "pl-3",
    "pointer-events-none"
  );

  const prefixClassNames = cn("text-gray-500", "sm:text-sm");

  const inputWrapperClassNames = cn(
    "mt-1",
    "relative",
    "rounded-md",
    "shadow-sm"
  );

  const inputClassNames = cn(
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
  );
  return (
    <div className={outerClassNames}>
      <label className={labelWrapperClassNames}>
        <div>{label}</div>
        <div className={inputWrapperClassNames}>
          <div className={prefixWrapperClassNames}>
            {prefix && <span className={prefixClassNames}>{prefix}</span>}
          </div>
          <input
            type="text"
            id={id}
            className={inputClassNames}
            placeholder={placeholder}
            {...rest}
          />
        </div>
      </label>
    </div>
  );
};
