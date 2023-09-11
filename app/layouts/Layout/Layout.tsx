import React, { PropsWithChildren } from "react";
import { ParallaxProvider } from "react-scroll-parallax";

const Layout: React.FC<PropsWithChildren> = ({ children }) => (
  <main className="bg-gradient-to-b from-dark via-cyan-300/10 to-dark">
    <ParallaxProvider>{children}</ParallaxProvider>
  </main>
);

export default Layout;
