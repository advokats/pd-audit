import Image from "next/image";
import React, { FC } from "react";
import theme from "tailwindcss/defaultTheme";

import { TestimonialData } from "@/app/components/Testimonials/types";
import useMatchesMediaQuery from "@/app/hooks/useMatchesMediaQuery";
import useMediaQuery from "@/app/hooks/useMediaQuery";

const TestimonialCard: FC<TestimonialData> = ({ image, name, description }) => {
  const matches = useMediaQuery(theme.screens.md, true);
  const { mobileView } = useMatchesMediaQuery(!matches);

  return (
    <div className="flex h-full min-h-[104px] items-center gap-8 rounded-lg bg-dark p-4 md:min-h-[160px] md:p-6">
      <Image
        width={mobileView ? 80 : 120}
        height={mobileView ? 80 : 120}
        src={image}
        alt="testimonial person avatar"
        className="rounded-lg object-contain"
      />
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <h4>{name}</h4>
        </div>
        {description && <p className="text-sm lg:text-base">{description}</p>}
      </div>
    </div>
  );
};

export default TestimonialCard;
