import { motion } from "framer-motion";
import React from "react";

import Modal from "@/app/components/Modal";
import { CardInformationData } from "@/app/screens/InitialAudit/types";

const WhiteCard: React.FC<CardInformationData> = ({
  subtitles,
  description,
  title,
}) => {
  const [modal, setModal] = React.useState<boolean>(false);

  return (
    <>
      <motion.li
        onClick={() => setModal(true)}
        className="flex h-full w-full cursor-pointer flex-col items-start rounded-xl bg-white/10
        bg-gradient-to-tr from-black/50 via-silver/50 to-black/50 p-4 backdrop-blur-lg
        duration-150 hover:scale-105 md:min-h-[308px] md:p-6"
      >
        <span className="w-full py-2 text-xl font-bold">{title}</span>
        {Array.isArray(subtitles) &&
          subtitles.map((subtitle, index) => (
            <p className="w-full py-2 text-sm md:py-2" key={index}>
              &#10003; {subtitle}
            </p>
          ))}
      </motion.li>
      <Modal {...{ modal, setModal }}>
        <div className="flex flex-col items-center">
          <span className="w-full py-2 text-xl font-bold">{title}</span>
          {Array.isArray(subtitles) &&
            subtitles.map((subtitle, index) => (
              <p className="w-full py-2 text-sm md:py-2" key={index}>
                &#10003; {subtitle}
              </p>
            ))}
        </div>
        <div>
          <span className="w-full py-2 text-center text-xl font-bold">
            Опис послуги:
          </span>
          <p className="w-full py-2 text-base md:py-2">{description}</p>
        </div>
      </Modal>
    </>
  );
};

export default WhiteCard;
