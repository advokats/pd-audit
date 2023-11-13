import Image from "next/image";
import React from "react";

import Heading from "@/app/components/Heading";
import ShadowGradient from "@/app/components/ShadowGradient";
import Testimonials from "@/app/components/Testimonials";
import Container from "@/app/layouts/Container";
import Section from "@/app/layouts/Section";
import description from "@/app/screens/Company/defaultData";
import pd from "@/public/assets/img/backgrounds/pd.jpg";
import ua from "@/public/assets/img/shared/ua.png";

const Company = () => (
  <Section>
    <Container className="flex flex-col items-center justify-center gap-10 overflow-hidden md:gap-20">
      <Heading
        className="bg-gradient-to-t from-coal via-white
        to-light bg-clip-text py-3 text-transparent"
      >
        Праве діло
      </Heading>
      <div className="flex flex-col gap-10 md:grid md:grid-cols-2">
        <Image src={pd} alt="Prave Dilo picture" />
        <div className="flex flex-col items-center gap-4">
          <p className="text-sm md:text-lg">{description}</p>
          <ShadowGradient className="-inset-3 from-yellow-500/30 to-blue-500/30">
            <Image width={48} height={48} src={ua} alt="ua" />
          </ShadowGradient>
        </div>
      </div>
      <Testimonials />
    </Container>
  </Section>
);

export default Company;
