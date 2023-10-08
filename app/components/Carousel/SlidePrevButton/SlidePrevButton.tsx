import React from "react";
import { useSwiper } from "swiper/react";

import PrevArrow from "@/public/assets/svg/_shared/navigation.svg";

const SlidePrevButton = () => {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper.slidePrev()}>
      <PrevArrow className="rotate-180" />
    </button>
  );
};

export default SlidePrevButton;
