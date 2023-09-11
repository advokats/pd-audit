import React from "react";

import Heading from "@/app/components/Heading";
import Container from "@/app/layouts/Container";
import Section from "@/app/layouts/Section";
import Profile from "@/app/screens/About/Profile";

const About = () => {
  return (
    <Section id="specialists">
      <Container className="flex flex-col items-center justify-center gap-20">
        <Heading>Оберіть свого спеціаліста</Heading>
        <Profile />
      </Container>
    </Section>
  );
};

export default About;
