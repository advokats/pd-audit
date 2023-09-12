import clsx from "clsx";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { Parallax } from "react-scroll-parallax";

import {
  leftPosition,
  rightPosition,
} from "@/app/components/DotsLogo/defaultData";
import sphere from "@/public/assets/img/backgrounds/shpere.png";

interface DotsLogoProps {
  position?: "left" | "right";
}

const DotsLogo: React.FC<DotsLogoProps> = ({ position }) => {
  const dotsPosition = (rightDots: string, leftDots: string) => {
    if (position === "right") {
      return rightDots;
    }
    return leftDots;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 0, x: 0 }}
      whileInView={{ opacity: 1, y: 50, x: 10 }}
      viewport={{ once: false }}
      transition={{
        type: "spring",
        duration: 2,
      }}
    >
      <Parallax speed={-10} easing="ease">
        <Image
          width={100}
          className={clsx(
            "absolute",
            dotsPosition(rightPosition.fl, leftPosition.fl),
          )}
          src={sphere}
          alt="shpere"
        />
        <Image
          width={100}
          className={clsx(
            "absolute",
            dotsPosition(rightPosition.fr, leftPosition.fr),
          )}
          src={sphere}
          alt="shpere"
        />
        <Image
          width={100}
          className={clsx(
            "absolute",
            dotsPosition(rightPosition.sl, leftPosition.sl),
          )}
          src={sphere}
          alt="shpere"
        />
        <Image
          width={100}
          className={clsx(
            "absolute",
            dotsPosition(rightPosition.sr, leftPosition.sr),
          )}
          src={sphere}
          alt="shpere"
        />
        <Image
          width={100}
          className={clsx(
            "absolute",
            dotsPosition(rightPosition.tl, leftPosition.tl),
          )}
          src={sphere}
          alt="shpere"
        />
        <Image
          width={100}
          className={clsx(
            "absolute",
            dotsPosition(rightPosition.tr, leftPosition.tr),
          )}
          src={sphere}
          alt="shpere"
        />
        <Image
          width={100}
          className={clsx(
            "absolute",
            dotsPosition(rightPosition.frl, leftPosition.frl),
          )}
          src={sphere}
          alt="shpere"
        />
        <Image
          width={100}
          className={clsx(
            "absolute",
            dotsPosition(rightPosition.frr, leftPosition.frr),
          )}
          src={sphere}
          alt="shpere"
        />
      </Parallax>
    </motion.div>
  );
};
export default DotsLogo;
