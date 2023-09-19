import React from "react";
import theme from "tailwindcss/defaultTheme";

import AuditList from "./AuditList";

import DotsLogo from "@/app/components/DotsLogo";
import useMatchesMediaQuery from "@/app/hooks/useMatchesMediaQuery";
import useMediaQuery from "@/app/hooks/useMediaQuery";
import Container from "@/app/layouts/Container";
import Section from "@/app/layouts/Section";

const InitialAudit = () => {
  const matches = useMediaQuery(theme.screens.sm, true);
  const { mobileView } = useMatchesMediaQuery(!matches);

  return (
    <Section className="relative" id="audit">
      {!mobileView && <DotsLogo position="right" />}
      <Container className="flex flex-col items-center justify-center gap-10 md:gap-20">
        <h1>Ініціативний аудит</h1>
        <AuditList />
      </Container>
    </Section>
  );
};

export default InitialAudit;
