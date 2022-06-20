import React from "react";
import cn from "classnames";

export type CheckboxFieldsetProps = {
  children?: React.ReactNode;
  className?: string;
  legend?: string;
};

export const CheckboxFieldset: React.FC<CheckboxFieldsetProps> = ({
  children,
  className,
  legend,
  ...rest
}) => {
  const outerClassNames = cn(className, "space-y-5");

  return (
    <fieldset className={outerClassNames} {...rest}>
      <legend className="sr-only">{legend}</legend>
      {children}
    </fieldset>
  );
};
