import React from "react";

interface ServicesCardProps {
  description: string;
}

const ServicesCard: React.FC<ServicesCardProps> = ({ description }) => (
  <div
    className="flex items-center gap-4 rounded-md bg-white/20 bg-gradient-to-tr from-black/50 via-silver/50
    to-black/50 p-4 backdrop-blur-lg duration-150 hover:scale-105
    md:h-20 md:gap-10"
  >
    <p className="text-xl font-thin md:text-[34px]">&#9998;</p>
    <p className="text-sm">{description}</p>
  </div>
);

export default ServicesCard;
