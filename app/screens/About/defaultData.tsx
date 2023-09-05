import Image from "next/image";
import React from "react";

import birsan from "@/public/assets/img/birsan.jpg";
import shcherbina from "@/public/assets/img/shcherbina.jpg";

export const profiles = [
  {
    image: (
      <Image
        className="h-[500px] w-[400px] object-cover"
        width={400}
        height={500}
        src={birsan}
        alt="Ірина Бірсан"
      />
    ),
    name: "Ірина Бірсан",
    description: "Опис",
  },
  {
    image: (
      <Image
        className="h-[500px] w-[400px] object-cover"
        width={400}
        height={500}
        src={shcherbina}
        alt="Зоя Щербина"
      />
    ),
    name: "Зоя Щербина",
    description: "Опис",
  },
];
