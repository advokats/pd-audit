import { motion } from "framer-motion";
import React from "react";

interface WhiteCardProps {
  title: string;
  subtitles?: string[];
}

const WhiteCard: React.FC<WhiteCardProps> = ({ subtitles, title }) => {
  const listVariant = {
    visible: {
      opacity: 1,
      y: 0,
    },
    hidden: {
      opacity: 0,
      y: -150,
    },
  };
  return (
    <motion.li
      variants={listVariant}
      className="flex flex-col items-start rounded-xl bg-white/10 p-6
      backdrop-blur-lg"
    >
      <h2 className="py-2">{title}</h2>
      {Array.isArray(subtitles) &&
        subtitles.map((subtitle, index) => (
          <p className="w-full py-4 text-sm" key={index}>
            &#10003; {subtitle}
          </p>
        ))}
    </motion.li>
  );
};

export default WhiteCard;
