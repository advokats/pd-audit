import React from "react";

import AuditList from "./AuditList";

import DotsLogo from "@/app/components/DotsLogo";
import Heading from "@/app/components/Heading";
import Container from "@/app/layouts/Container";
import Section from "@/app/layouts/Section";

const InitialAudit = () => {
  return (
    <Section className="relative" id="audit">
      <DotsLogo position="right" />
      <Container className="flex flex-col items-center justify-center gap-20">
        <Heading>Ініціативний аудит</Heading>
        <AuditList />
      </Container>
    </Section>
  );
};

export default InitialAudit;
