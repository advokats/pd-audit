import { motion } from "framer-motion";
import React from "react";
import ShadowGradient from "@/app/components/ShadowGradient/ShadowGradient";

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
    <ShadowGradient className="from-cyan-200/20 via-cyan-300/20 to-cyan-600/20">
      <motion.li
        variants={listVariant}
        className="flex h-full flex-col items-start rounded-xl bg-white/10 p-6
        backdrop-blur-lg"
      >
        <h3 className="h-20 w-full py-2">{title}</h3>
        {Array.isArray(subtitles) &&
          subtitles.map((subtitle, index) => (
            <p className="w-full py-3 text-sm" key={index}>
              &#10003; {subtitle}
            </p>
          ))}
      </motion.li>
    </ShadowGradient>
  );
};

export default WhiteCard;
