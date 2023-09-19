import { motion } from "framer-motion";
import React from "react";

import { auditVariant, cardInformation } from "../defalutData";
import WhiteCard from "../WhiteCard";

const AuditList = () => (
  <motion.ul
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={auditVariant}
    className="grid w-full gap-8 lg:gap-12"
  >
    <div
      className="grid grid-cols-1 justify-center gap-5
      md:grid-cols-2 xl:grid-cols-4"
    >
      {cardInformation.map((card, index) => (
        <WhiteCard key={index} {...card} />
      ))}
    </div>
  </motion.ul>
);

export default AuditList;
