import Image from "next/image";
import React from "react";

import ShadowGradient from "@/app/components/ShadowGradient/ShadowGradient";
import Container from "@/app/layouts/Container";
import Section from "@/app/layouts/Section";
import description from "@/app/screens/Company/defaultData";
import pd from "@/public/assets/img/backgrounds/pd.jpg";
import ua from "@/public/assets/img/shared/ua.png";

const Company = () => {
  return (
    <Section>
      <Container className="flex flex-col items-center justify-center gap-20">
        <h1
          className="bg-gradient-to-t from-coal via-white
        to-light bg-clip-text py-3 text-transparent"
        >
          Праве діло
        </h1>
        <div className="grid grid-cols-2 gap-10">
          <ShadowGradient className="from-cyan-100/20 via-cyan-300/20 to-cyan-600/20">
            <Image className="rounded-md" src={pd} alt="Prave Dilo picture" />
          </ShadowGradient>
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-lg">{description}</p>
            <ShadowGradient className="from-yellow-500/30 to-blue-500/30">
              <Image width={48} height={48} src={ua} alt="ua" />
            </ShadowGradient>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Company;
