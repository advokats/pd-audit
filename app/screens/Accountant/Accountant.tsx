import React from "react";
import { Parallax } from "react-scroll-parallax";

import Heading from "@/app/components/Heading";
import Container from "@/app/layouts/Container";
import Section from "@/app/layouts/Section";
import description from "@/app/screens/Company/defaultData";
import Domino from "@/public/assets/svg/_shared/domino.svg";

const Accountant = () => (
  <Section id="accountant">
    <Container className="flex flex-col items-center justify-center gap-20">
      <Heading>Бухгалтерський аудит</Heading>
      <div className="grid grid-cols-2">
        <Parallax speed={-10}>
          <Domino className="opacity-20" />
        </Parallax>
        <p>{description}</p>
      </div>
    </Container>
  </Section>
);
export default Accountant;
