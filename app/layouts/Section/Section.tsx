import clsx from "clsx";
import React, { PropsWithChildren } from "react";

interface SectionProps extends PropsWithChildren {
  className?: string;
  id?: string;
}

const Section: React.FC<SectionProps> = ({ children, className, id }) => (
  <section id={id} className={clsx(className)}>
    {children}
  </section>
);

export default Section;
