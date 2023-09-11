import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { Parallax } from "react-scroll-parallax";

import sphere from "@/public/assets/img/backgrounds/shpere.png";

const DotsLogo = () => (
  <motion.div
    initial={{ opacity: 0, y: 0, x: 0 }}
    whileInView={{ opacity: 1, y: 40, x: 10 }}
    viewport={{ once: true }}
    transition={{
      type: "spring",
      duration: 2,
    }}
  >
    <Parallax speed={-20}>
      <Image
        width={100}
        className="absolute -top-32 right-10"
        src={sphere}
        alt="shpere"
      />
      <Image
        width={100}
        className="absolute right-10"
        src={sphere}
        alt="shpere"
      />
      <Image
        width={100}
        className="absolute right-10 top-32"
        src={sphere}
        alt="shpere"
      />
      <Image
        width={100}
        className="absolute right-40"
        src={sphere}
        alt="shpere"
      />
      <Image
        width={100}
        className="absolute -top-32 right-40"
        src={sphere}
        alt="shpere"
      />
      <Image
        width={100}
        className="absolute right-40 top-32"
        src={sphere}
        alt="shpere"
      />
      <Image
        width={100}
        className="absolute right-40 top-64"
        src={sphere}
        alt="shpere"
      />
      <Image
        width={100}
        className="absolute right-10 top-64"
        src={sphere}
        alt="shpere"
      />
    </Parallax>
  </motion.div>
);
export default DotsLogo;
