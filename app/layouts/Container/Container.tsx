import clsx from "clsx";
import React, { PropsWithChildren } from "react";

interface ContainerProps extends PropsWithChildren {
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={clsx("container px-4 md:px-8", className)}>{children}</div>
  );
};

export default Container;
