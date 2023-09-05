import React from "react";

import NavBar from "@/app/components/NavBar";
import Container from "@/app/layouts/Container";
import Logo from "@/public/assets/svg/logo.svg";

const Header = () => {
  return (
    <header className="fixed z-50 w-full border-b border-b-grey bg-dark">
      <Container className="flex h-24 items-center justify-between">
        <Logo width={40} />
        <NavBar />
      </Container>
    </header>
  );
};

export default Header;
