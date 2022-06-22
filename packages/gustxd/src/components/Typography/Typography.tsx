import React from "react";
import cn from "classnames";

export type TypographyProps = {
  children?: React.ReactNode;
  className?: string;
};

export const Typography: React.FC<TypographyProps> = ({
  children,
  className,
  ...rest
}) => {
  const outerCls = cn(className);

  // console.log([].sort());
  
  return (<>
    <div className={outerCls} {...rest}>
      {children}
    </div>
  </>);
};
