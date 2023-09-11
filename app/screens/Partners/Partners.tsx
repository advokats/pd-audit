import React from "react";

import Heading from "@/app/components/Heading";
import Container from "@/app/layouts/Container";
import Section from "@/app/layouts/Section";
import partnersLogo from "@/app/screens/Partners/defaultData";

const Partners = () => (
  <Section>
    <Container className="flex flex-col items-center justify-center gap-10">
      <Heading>Наші партнери та клієнти</Heading>
      <div className="grid grid-cols-4 gap-10">
        {partnersLogo.map(({ logo }, index) => (
          <div className="flex items-center justify-center" key={index}>
            {logo}
          </div>
        ))}
      </div>
    </Container>
  </Section>
);

export default Partners;
