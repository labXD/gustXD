import React from "react";
import cn from "classnames";

export type CheckboxProps = {
  className?: string;
  checked?: boolean;
  children?: string | React.ReactNode;
  defaultChecked?: boolean;
  flip?: boolean;
  id: string;
  inline?: boolean;
  onChange?: () => void;
  label?: string;
  value?: string;
};

export const Checkbox: React.FC<CheckboxProps> = ({
  className,
  children,
  checked,
  defaultChecked,
  flip = false,
  inline,
  id,
  onChange,
  label,
  value,
  ...rest
}) => {
  const outerClassNames = cn(className, "flex", "items-start", "relative");
  const inputWrapperClassNames = cn("flex", "h-5", "items-center", {
    "ml-3": flip,
  });
  const inputClassNames = cn(
    "cursor-pointer",
    "focus:ring-indigo-500",
    "h-4",
    "w-4",
    "text-indigo-600",
    "border-gray-300",
    "rounded"
  );
  const labelContentWrapperClassNames = cn("text-sm", {
    "ml-3": !flip,
    "min-w-0": flip,
    "flex-1": flip,
  });

  const labelClassNames = cn("cursor-pointer", "font-medium text-gray-700");
  const detailClassNames = cn("text-gray-500");

  const LabelContent = () => {
    return (
      <div className={labelContentWrapperClassNames}>
        {label && (
          <label htmlFor={id} className={labelClassNames}>
            {label}
          </label>
        )}
        {inline ? (
          <span className={detailClassNames}>
            <span className="sr-only">{label}</span> {children}
          </span>
        ) : typeof children == "string" ? (
          <p className={detailClassNames}>{children}</p>
        ) : (
          children
        )}
      </div>
    );
  };
  return (
    <>
      <div className={outerClassNames}>
        {flip && (label || children) && <LabelContent />}
        <div className={inputWrapperClassNames}>
          <input
            id={id}
            value={value}
            type="checkbox"
            className={inputClassNames}
            defaultChecked={defaultChecked}
            onChange={onChange}
            {...rest}
          />
        </div>
        {!flip && (label || children) && <LabelContent />}
      </div>
    </>
  );
};
