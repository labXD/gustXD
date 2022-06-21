import React from "react";
import cn from "classnames";

export type CheckboxFieldsetProps = {
  children: React.ReactNode;
  className?: string;
  screenReader?: string;
};

export const CheckboxFieldset: React.FC<CheckboxFieldsetProps> = ({
  children,
  className,
  screenReader,
  ...rest
}) => {
  const outerClassNames = cn(className, "space-y-5");

  return (
    <fieldset className={outerClassNames} {...rest}>
      <legend className="sr-only">{screenReader}</legend>
      {children}
    </fieldset>
  );
};
