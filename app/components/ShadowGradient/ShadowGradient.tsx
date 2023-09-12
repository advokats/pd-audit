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
    <div className="relative flex h-full items-center justify-center">
      {children}
    </div>
  </div>
);
export default ShadowGradient;
