import React from "react";

import Container from "@/app/layouts/Container";
import Section from "@/app/layouts/Section";
import Profile from "@/app/screens/About/Profile";

const About = () => (
  <Section id="specialists">
    <Container className="flex justify-center gap-10">
      <Profile />
    </Container>
  </Section>
);

export default About;
