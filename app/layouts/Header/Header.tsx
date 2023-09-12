import Link from "next/link";
import React from "react";

import NavBar from "@/app/components/NavBar";
import Container from "@/app/layouts/Container";
import Logo from "@/public/assets/svg/_shared/logo.svg";

const Header = () => {
  return (
    <header className="fixed z-50 w-full bg-dark">
      <Container className="flex h-24 items-center justify-between">
        <Link href="/">
          <Logo width={40} />
        </Link>
        <NavBar />
      </Container>
    </header>
  );
};

export default Header;
