import React, { RefAttributes } from "react";
import {
  A11y,
  Autoplay,
  Controller,
  EffectCoverflow,
  EffectFade,
  Navigation,
  Pagination,
  Scrollbar
} from "swiper/modules";
import { Swiper, SwiperProps, SwiperRef } from "swiper/react";
import { Swiper as SwiperClass } from "swiper/types";


interface CarouselProps extends SwiperProps {
  activeSlide: number;
  setActiveSlide: (value: number) => void;
  isAutoplay?: boolean;
  swiperClassName?: string;
  wrapperClass?: string;
  controllerSwiper?: SwiperClass;
}

const Carousel: React.FC<CarouselProps & RefAttributes<SwiperRef>> = ({
                                                                        onSwiper,
                                                                        effect = "slide",
                                                                        slidesPerView = "auto",
                                                                        spaceBetween = 0,
                                                                        centeredSlides = false,
                                                                        isAutoplay = false,
                                                                        swiperClassName,
                                                                        controllerSwiper,
                                                                        activeSlide,
                                                                        wrapperClass,
                                                                        setActiveSlide,
                                                                        children
                                                                      }) => (
  <Swiper
    grabCursor
    navigation
    effect={effect}
    wrapperClass={wrapperClass}
    centeredSlides={centeredSlides}
    className={swiperClassName}
    spaceBetween={spaceBetween}
    initialSlide={activeSlide}
    slidesPerView={slidesPerView}
    controller={{ control: controllerSwiper }}
    pagination={{ clickable: true }}
    autoplay={isAutoplay && { delay: 3000, disableOnInteraction: false }}
    onSwiper={onSwiper}
    modules={[
      Navigation,
      Pagination,
      Autoplay,
      EffectCoverflow,
      Scrollbar,
      A11y,
      Controller,
      EffectFade
    ]}
    coverflowEffect={{
      rotate: 0,
      stretch: 20,
      scale: 0.7,
      modifier: 1,
      slideShadows: true
    }}
    onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}>
    {children}
  </Swiper>
);
export default Carousel;
