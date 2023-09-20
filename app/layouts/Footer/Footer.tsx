import Link from "next/link";
import React from "react";

import Container from "@/app/layouts/Container";
import socialMediaLinks from "@/app/layouts/Footer/defautlData";
import { year } from "@/app/utils/getDate";
import Logo from "@/public/assets/svg/_shared/logo.svg";

const Footer = () => (
  <footer>
    <Container className="flex flex-col items-center justify-between gap-2">
      <div className="flex w-full flex-col justify-between gap-10 md:flex-row md:gap-0">
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
        <div className="flex flex-col gap-4">
          <span>Слілкуйте за нами:</span>
          <div className="flex justify-between gap-8 py-4">
            {socialMediaLinks.map(({ url, icon }, index) => (
              <Link target="_blank" key={index} href={url}>
                {icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <p className="text-xs text-grey">
        © {year} Prave Dilo. Всі права захищені
      </p>
    </Container>
  </footer>
);

export default Footer;
