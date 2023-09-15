import React from "react";
import { Parallax } from "react-scroll-parallax";

import ServicesList from "../ServicesList";

import ShadowGradient from "@/app/components/ShadowGradient";
import Logo from "@/public/assets/svg/_shared/logo.svg";

const ServicesContent = () => (
  <div className="flex gap-10">
    <Parallax className="flex">
      <ShadowGradient
        className="-inset-2 cursor-pointer bg-gradient-to-tr
        from-black via-silver/20 to-black hover:from-violet-600
        hover:to-pink-800"
      >
        <div
          className="flex h-full items-center justify-center rounded-md
          bg-white/10 bg-gradient-to-tr backdrop-blur-lg"
        >
          <Logo className="w-1/4" />
        </div>
      </ShadowGradient>
    </Parallax>
    <ServicesList />
  </div>
);

export default ServicesContent;
