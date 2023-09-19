import React from "react";
import theme from "tailwindcss/defaultTheme";

import DotsLogo from "@/app/components/DotsLogo";
import Heading from "@/app/components/Heading";
import useMatchesMediaQuery from "@/app/hooks/useMatchesMediaQuery";
import useMediaQuery from "@/app/hooks/useMediaQuery";
import Container from "@/app/layouts/Container";
import Section from "@/app/layouts/Section";
import Profile from "@/app/screens/About/Profile";

const About = () => {
  const matches = useMediaQuery(theme.screens.sm, true);
  const { mobileView } = useMatchesMediaQuery(!matches);

  return (
    <Section id="specialists" className="relative">
      {!mobileView && <DotsLogo />}
      <Container className="flex flex-col items-center justify-center gap-10 md:gap-20">
        <Heading>Оберіть свого спеціаліста</Heading>
        <Profile />
      </Container>
    </Section>
  );
};

export default About;
