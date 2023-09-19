import clsx from "clsx";
import React, { PropsWithChildren } from "react";

interface ShadowGradientProps extends PropsWithChildren {
  className?: string;
}

const ShadowGradient: React.FC<ShadowGradientProps> = ({
  children,
  className,
}) => (
  <div className="relative">
    <div
      className={clsx(
        `absolute -inset-1 rounded-lg bg-gradient-to-t opacity-50 blur-md ${className}`,
      )}
    />
    {children}
  </div>
);
export default ShadowGradient;
