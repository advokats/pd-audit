import Image from "next/image";
import React, { FC } from "react";
import theme from "tailwindcss/defaultTheme";

import { TestimonialData } from "@/app/components/Testimonials/types";
import useMatchesMediaQuery from "@/app/hooks/useMatchesMediaQuery";
import useMediaQuery from "@/app/hooks/useMediaQuery";

const TestimonialCard: FC<TestimonialData> = ({
  image,
  date,
  name,
  description,
}) => {
  const matches = useMediaQuery(theme.screens.md, true);
  const { mobileView } = useMatchesMediaQuery(!matches);

  return (
    <div className="grid grid-cols-1 items-center rounded-lg bg-dark p-4 md:grid-cols-[1fr,2fr] md:p-10 lg:w-2/3">
      <Image
        style={{
          width: mobileView ? "100px" : "200px",
          height: mobileView ? "100px" : "200px",
        }}
        width={200}
        height={200}
        src={image}
        alt="..."
        className="rounded-full object-cover"
      />
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <h4>{name}</h4> <p className="text-sm text-grey/50">{date}</p>
        </div>
        <p className="text-sm lg:text-base">{description}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
