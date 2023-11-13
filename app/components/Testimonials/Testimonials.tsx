import React from "react";

import { testimonialsData } from "@/app/components/Testimonials/defaultData";
import TestimonialCard from "@/app/components/Testimonials/TestimonialCard";

const Testimonials = () => (
  <div className="flex w-full flex-col items-center">
    <h3>Відгуки клієнтів</h3>
    <div className="grid w-full grid-cols-1 gap-4 p-4 md:gap-8 md:p-10 lg:grid-cols-2">
      {testimonialsData.map((testimonial, index) => (
        <TestimonialCard key={index} {...testimonial} />
      ))}
    </div>
  </div>
);

export default Testimonials;
