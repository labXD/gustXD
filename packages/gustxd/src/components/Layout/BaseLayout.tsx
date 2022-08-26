import clsx from "clsx"
import React, { FC } from "react"
export interface BaseLayoutProps {
  children: React.ReactNode
  className?: string
}
export const BaseLayout: FC<BaseLayoutProps> = ({ children, className }) => {
  return (
    <div className={clsx(className, "flex flex-col min-h-screen")}>
      {children}
    </div>
  )
}
