import React, { PropsWithChildren } from "react";
import { ParallaxProvider } from "react-scroll-parallax";

const Layout: React.FC<PropsWithChildren> = ({ children }) => (
  <main className="bg-gradient-to-r from-dark via-silver/30 to-dark">
    <ParallaxProvider>{children}</ParallaxProvider>
  </main>
);

export default Layout;
