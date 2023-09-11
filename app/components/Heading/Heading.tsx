import React, { PropsWithChildren } from "react";

interface HeadingProps extends PropsWithChildren {
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ children, className }) => (
  <h2 className={className}>{children}</h2>
);

export default Heading;
