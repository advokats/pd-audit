import React, { useState } from "react";
import { SwiperSlide } from "swiper/react";
import theme from "tailwindcss/defaultTheme";

import Carousel from "@/app/components/Carousel";
import Heading from "@/app/components/Heading";
import useMatchesMediaQuery from "@/app/hooks/useMatchesMediaQuery";
import useMediaQuery from "@/app/hooks/useMediaQuery";
import Container from "@/app/layouts/Container";
import Section from "@/app/layouts/Section";
import partnersLogo from "@/app/screens/Partners/defaultData";

const Partners = () => {
  const [activeSlideTopSlider, setActiveSlideTopSlider] = useState<number>(1);
  useState<number>(1);
  const matches = useMediaQuery(theme.screens.sm, true);
  const { mobileView } = useMatchesMediaQuery(!matches);

  return (
    <Section>
      <Container className="flex flex-col items-center justify-center gap-5 overflow-hidden md:gap-10">
        <Heading>Наші партнери та клієнти</Heading>
        <Carousel
          swiperClassName="w-full flex items-center"
          isAutoplay
          wrapperClass="flex items-center py-2 md:py-16"
          slidesPerView={mobileView ? 1 : 3}
          activeSlide={activeSlideTopSlider}
          setActiveSlide={setActiveSlideTopSlider}
        >
          {partnersLogo.map(({ logo }, index) => (
            <SwiperSlide
              key={index}
              className="flex items-start justify-center"
            >
              {logo}
            </SwiperSlide>
          ))}
        </Carousel>
      </Container>
    </Section>
  );
};

export default Partners;
