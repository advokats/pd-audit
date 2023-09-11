import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import React, { PropsWithChildren } from "react";

import CloseIcon from "@/public/assets/svg/_shared/close.svg";

interface ModalProps extends PropsWithChildren {
  modal: boolean;
  setModal: (arg: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({ children, modal, setModal }) => {
  const mods = {
    ["bg-black/90 z-50"]: modal,
  };

  return (
    <AnimatePresence>
      {modal && (
        <div
          className={clsx(
            "fixed left-0 top-0 flex h-full w-full items-center justify-center px-5",
            mods,
          )}
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -50,
              opacity: 0,
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="absolute z-10 grid h-auto w-full max-w-screen-lg grid-cols-2
            items-center bg-gradient-to-b from-dark to-gray-700 p-5 text-white"
          >
            <CloseIcon
              onClick={() => setModal(false)}
              className="absolute right-4 top-4 cursor-pointer"
            />
            {children}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.2 }}
            onClick={() => setModal(false)}
            className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-transparent px-5"
          />
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
