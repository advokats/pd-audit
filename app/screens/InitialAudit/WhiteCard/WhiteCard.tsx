import { motion } from "framer-motion";
import React from "react";

interface WhiteCardProps {
  title: string;
  subtitles?: string[];
}

const WhiteCard: React.FC<WhiteCardProps> = ({ subtitles, title }) => {
  return (
    <motion.li
      className="flex h-full w-full flex-col items-start rounded-xl bg-white/10
      bg-gradient-to-tr from-black/50 via-silver/50 to-black/50 p-6
      backdrop-blur-lg duration-150 hover:scale-105"
    >
      <span className="w-full py-2 text-xl font-bold">{title}</span>
      {Array.isArray(subtitles) &&
        subtitles.map((subtitle, index) => (
          <p className="w-full py-3 text-sm" key={index}>
            &#10003; {subtitle}
          </p>
        ))}
    </motion.li>
  );
};

export default WhiteCard;
