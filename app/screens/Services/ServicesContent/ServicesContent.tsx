import clsx from "clsx";
import Link from "next/link";
import React from "react";

import ServicesList from "../ServicesList";

import ShadowGradient from "@/app/components/ShadowGradient";
import Logo from "@/public/assets/svg/_shared/logo.svg";

const ServicesContent = () => {
  const [hoverStyle, setHoverStyle] = React.useState<string>("");
  const hoverGradient = "bg-animate from-violet-700 via-orange-900 to-pink-700";

  return (
    <div className="flex flex-col-reverse gap-4 md:flex-row md:gap-10">
      <ShadowGradient
        className={clsx(
          `-inset-2 bg-gradient-to-tr from-black via-silver/20 to-black`,
          hoverStyle,
        )}
      >
        <Link
          href="https://pravoedelo.ua/"
          target="_blank"
          title="Сайт компанії"
          onMouseOver={() => setHoverStyle(hoverGradient)}
          onMouseOut={() => setHoverStyle("")}
          className="flex h-full cursor-pointer items-center justify-center rounded-md
            bg-white/10 bg-gradient-to-tr backdrop-blur-lg"
        >
          <Logo className="w-12 py-4 md:w-1/4" />
        </Link>
      </ShadowGradient>
      <ServicesList />
    </div>
  );
};

export default ServicesContent;
