import React from "react";

import ServicesContent from "./ServicesContent";

import Heading from "@/app/components/Heading";
import Container from "@/app/layouts/Container";
import Section from "@/app/layouts/Section";

const Services = () => (
  <Section id="services" className="z-20">
    <Container className="flex flex-col items-center justify-center gap-10 md:gap-20">
      <Heading className="text-center">Що ви отримуєте</Heading>
      <ServicesContent />
    </Container>
  </Section>
);
export default Services;
