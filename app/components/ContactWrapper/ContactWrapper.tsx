import React, { PropsWithChildren } from "react";

const ContactWrapper: React.FC<PropsWithChildren> = ({ children }) => (
  <div className="flex items-center gap-1 md:gap-4">{children}</div>
);

export default ContactWrapper;
