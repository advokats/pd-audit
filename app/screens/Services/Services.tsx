import React from "react";
import { Parallax } from "react-scroll-parallax";

import Heading from "@/app/components/Heading";
import Container from "@/app/layouts/Container";
import Section from "@/app/layouts/Section";
import ServicesList from "@/app/screens/Services/ServicesList";
import Logo from "@/public/assets/svg/_shared/logo.svg";

const Services = () => (
  <Section id="accountant" className="z-20">
    <Container className="flex flex-col items-center justify-center gap-20">
      <Heading className="text-center">Послуги</Heading>
      <div className="flex gap-10">
        <Parallax className="flex">
          <div
            className="flex items-center justify-center rounded-md
            bg-white/20 bg-gradient-to-tr from-black/50 via-silver/50
            to-black/50 backdrop-blur-lg"
          >
            <Logo className="w-1/4" />
          </div>
        </Parallax>
        <ServicesList />
      </div>
    </Container>
  </Section>
);
export default Services;
