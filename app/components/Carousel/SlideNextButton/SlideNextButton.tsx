import React from "react";
import { useSwiper } from "swiper/react";

import NextArrow from "@/public/assets/svg/_shared/navigation.svg";

const SlideNextButton = () => {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper.slideNext()}>
      <NextArrow />
    </button>
  );
};

export default SlideNextButton;
