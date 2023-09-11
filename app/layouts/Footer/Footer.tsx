import Link from "next/link";
import React from "react";

import Container from "@/app/layouts/Container";
import Facebook from "@/public/assets/svg/_shared/facebook.svg";
import Instagram from "@/public/assets/svg/_shared/instagram.svg";
import LinkedIn from "@/public/assets/svg/_shared/linkedin.svg";
import Logo from "@/public/assets/svg/_shared/logo.svg";
import Telegram from "@/public/assets/svg/_shared/telegram.svg";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <Container className="flex flex-col items-center justify-between gap-2">
        <div className="flex w-full justify-between">
          <div className="flex items-center gap-10">
            <Link href="/">
              <Logo width={40} />
            </Link>
            <div className="flex flex-col gap-2">
              <span className="text-lg font-bold">Завітайте до нас:</span>
              <div>
                <p className="text-xs">Дніпро, пр. Дмитра Яворницького, 99</p>
                <p className="text-xs text-grey">
                  (Наш офіс працює з 9:00 до 18:00)
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <span>Слілкуйте за нами:</span>
            <div className="flex justify-between gap-8 py-4">
              <Telegram width={32} height={32} />
              <Instagram width={32} height={32} />
              <Facebook width={32} height={32} />
              <LinkedIn width={32} height={32} />
            </div>
          </div>
        </div>
        <p className="text-xs text-grey">
          © {year} Prave Dilo. Всі права захищені
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
