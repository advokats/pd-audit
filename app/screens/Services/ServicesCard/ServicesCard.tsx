import React from "react";

interface ServicesCardProps {
  description: string;
}

const ServicesCard: React.FC<ServicesCardProps> = ({ description }) => (
  <div
    className="flex h-20 items-center gap-10 rounded-md bg-white/20 bg-gradient-to-tr
    from-black/50 via-silver/50 to-black/50 p-4 backdrop-blur-lg
    duration-150 hover:scale-105"
  >
    <p className="text-[34px] font-thin">&#9998;</p>
    <p className="text-sm">{description}</p>
  </div>
);

export default ServicesCard;
