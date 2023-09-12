import { motion } from "framer-motion";
import React from "react";

import WhiteCard from "./WhiteCard";

import DotsLogo from "@/app/components/DotsLogo";
import Heading from "@/app/components/Heading";
import Container from "@/app/layouts/Container";
import Section from "@/app/layouts/Section";
import { cardInformation } from "@/app/screens/Initial/defalutData";

const Initial = () => {
  const list = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
    hidden: {
      opacity: 0,
    },
  };

  return (
    <Section className="relative">
      <DotsLogo position="right" />
      <Container className="flex flex-col items-center justify-center gap-20">
        <Heading>Ініціативний аудит</Heading>
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={list}
          className="grid w-full gap-8 lg:gap-12"
        >
          <div
            className="grid grid-cols-1 flex-wrap justify-center gap-5
            md:grid-cols-2 lg:grid-cols-4"
          >
            {cardInformation.map((card, index) => (
              <WhiteCard key={index} {...card} />
            ))}
          </div>
        </motion.ul>
      </Container>
    </Section>
  );
};

export default Initial;
