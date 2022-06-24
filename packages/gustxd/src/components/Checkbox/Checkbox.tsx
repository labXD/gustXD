import cn from "classnames";
import React from "react";

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
  const outerCls = cn(className, "flex", "items-start", "relative");
  const inputWrapCls = cn("flex", "h-5", "items-center", {
    "ml-3": flip,
  });
  const inputCls = cn(
    "cursor-pointer",
    "focus:ring-indigo-500",
    "h-4",
    "w-4",
    "text-indigo-600",
    "border-gray-300",
    "rounded"
  );
  const labelWrapCls = cn("text-sm", {
    "ml-3": !flip,
    "min-w-0": flip,
    "flex-1": flip,
  });

  const labelCls = cn("cursor-pointer", "font-medium text-gray-700");
  const detailCls = cn("text-gray-500");

  const LabelContent = () => {
    return (
      <div className={labelWrapCls}>
        {label && (
          <label htmlFor={id} className={labelCls}>
            {label}
          </label>
        )}
        {inline ? (
          <span className={detailCls}>
            <span className="sr-only">{label}</span> {children}
          </span>
        ) : typeof children == "string" ? (
          <p className={detailCls}>{children}</p>
        ) : (
          children
        )}
      </div>
    );
  };
  return (
    <>
      <div className={outerCls}>
        {flip && (label || children) && <LabelContent />}
        <div className={inputWrapCls}>
          <input
            id={id}
            value={value}
            type="checkbox"
            className={inputCls}
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
