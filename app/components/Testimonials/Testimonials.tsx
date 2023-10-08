import React, { useState } from "react";
import { SwiperSlide } from "swiper/react";
import theme from "tailwindcss/defaultTheme";

import Carousel from "@/app/components/Carousel";
import SlideNextButton from "@/app/components/Carousel/SlideNextButton";
import SlidePrevButton from "@/app/components/Carousel/SlidePrevButton";
import { testimonialsData } from "@/app/components/Testimonials/defaultData";
import TestimonialCard from "@/app/components/Testimonials/TestimonialCard";
import useMatchesMediaQuery from "@/app/hooks/useMatchesMediaQuery";
import useMediaQuery from "@/app/hooks/useMediaQuery";

const Testimonials = () => {
  const [activeSlideTopSlider, setActiveSlideTopSlider] = useState<number>(1);
  const matches = useMediaQuery(theme.screens.sm, true);
  const { mobileView } = useMatchesMediaQuery(matches);

  return (
    <div className="flex w-full flex-col items-center">
      <h3>Відгуки клієнтів</h3>
      <Carousel
        swiperClassName="w-full flex items-center"
        wrapperClass="flex items-center pt-8 md:pt-16"
        slidesPerView={1}
        activeSlide={activeSlideTopSlider}
        setActiveSlide={setActiveSlideTopSlider}
      >
        {testimonialsData.map((testimonial, index) => (
          <SwiperSlide
            key={index}
            className="flex items-center justify-center gap-1 md:gap-5 md:px-8 lg:gap-20"
          >
            {mobileView && <SlidePrevButton />}
            <TestimonialCard {...testimonial} />
            {mobileView && <SlideNextButton />}
          </SwiperSlide>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonials;
