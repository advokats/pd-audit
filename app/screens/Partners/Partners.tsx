import React, { useState } from "react";
import { SwiperSlide } from "swiper/react";

import Carousel from "@/app/components/Carousel";
import Heading from "@/app/components/Heading";
import Container from "@/app/layouts/Container";
import Section from "@/app/layouts/Section";
import partnersLogo from "@/app/screens/Partners/defaultData";

const Partners = () => {
  const [activeSlideTopSlider, setActiveSlideTopSlider] = useState<number>(1);
  useState<number>(1);

  return (
    <Section>
      <Container className="flex flex-col items-center justify-center gap-10 overflow-hidden">
        <Heading>Наші партнери та клієнти</Heading>
        <Carousel
          swiperClassName="w-full flex items-center"
          isAutoplay
          wrapperClass="flex items-center py-16"
          slidesPerView={3}
          activeSlide={activeSlideTopSlider}
          setActiveSlide={setActiveSlideTopSlider}>
          {partnersLogo.map(({ logo }, index) => (
            <SwiperSlide
              key={index}
              className="flex items-start justify-center">
              {logo}
            </SwiperSlide>
          ))}
        </Carousel>
      </Container>
    </Section>

  );
};

export default Partners;
