import Link from "next/link";
import React from "react";
import theme from "tailwindcss/defaultTheme";

import BurgerMenu from "@/app/components/BurgerMenu";
import NavBar from "@/app/components/NavBar";
import { navigation } from "@/app/components/NavBar/NavBar";
import useMatchesMediaQuery from "@/app/hooks/useMatchesMediaQuery";
import useMediaQuery from "@/app/hooks/useMediaQuery";
import Container from "@/app/layouts/Container";
import Logo from "@/public/assets/svg/_shared/logo.svg";

const Header = () => {
  const [isBurgerOpen, setIsBurgerOpen] = React.useState(false);
  const burgerMenuHandler = () => setIsBurgerOpen(!isBurgerOpen);
  const matches = useMediaQuery(theme.screens.md, true);
  const { mobileView } = useMatchesMediaQuery(!matches);

  const onClickNavigation = () => {
    setIsBurgerOpen(!isBurgerOpen);
    setIsBurgerOpen(false);
  };

  return (
    <header className="fixed z-50 w-full bg-dark">
      <Container className="flex h-24 items-center justify-between">
        <Link href="/">
          <Logo width={40} />
        </Link>
        {mobileView ? (
          <BurgerMenu
            isOpen={isBurgerOpen}
            burgerMenuHandler={burgerMenuHandler}
          />
        ) : (
          <NavBar />
        )}
        {isBurgerOpen && mobileView && (
          <div
            className="absolute left-0 top-24 z-10 flex h-screen w-full
            flex-col items-center overflow-hidden border-t border-solid
            border-silver bg-gradient-to-b from-dark to-coal pt-12"
          >
            <ul className="flex flex-col gap-10">
              {navigation.map((link) => (
                <li
                  key={link.title}
                  className="text-center text-2xl font-semibold"
                >
                  <Link onClick={onClickNavigation} href={`#${link.url}`}>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;
