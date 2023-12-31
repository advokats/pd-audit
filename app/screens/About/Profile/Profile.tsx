import Link from "next/link";
import React from "react";

import ContactWrapper from "@/app/components/ContactWrapper";
import Heading from "@/app/components/Heading";
import Modal from "@/app/components/Modal";
import { profiles } from "@/app/screens/About/defaultData";
import { ProfileData } from "@/app/screens/About/Profile/types";
import Arrow from "@/public/assets/svg/_shared/arrow.svg";
import Phone from "@/public/assets/svg/_shared/phone.svg";
import Telegram from "@/public/assets/svg/_shared/telegram.svg";

const Profile = () => {
  const [modal, setModal] = React.useState<boolean>(false);
  const [selectProfile, setSelectProfile] = React.useState<ProfileData>();
  const { name, image, description, phone, url, telegram } =
    selectProfile ?? {};
  const link = description?.includes("Export Legal Support");

  return (
    <>
      <div className="flex cursor-pointer flex-col gap-10 md:flex-row md:gap-24">
        {profiles.map((profile, index) => {
          return (
            <div
              key={index}
              onClick={() => setSelectProfile(profile)}
              className="flex flex-col gap-2 bg-gradient-to-b from-dark via-silver to-coal"
            >
              <div
                onClick={() => setModal(!modal)}
                className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat"
              >
                <div className="transition duration-300 ease-in-out hover:scale-110">
                  {profile.image}
                </div>
              </div>
              <div className="flex flex-col gap-2 px-2 py-4">
                <Heading className="text-left text-4xl">{profile.name}</Heading>
                <div className="flex gap-4 hover:underline">
                  <Telegram />
                  <p className="text-sm">{profile.telegram}</p>
                </div>
                <div className="flex gap-4 hover:underline">
                  <Phone />
                  <Link className="text-sm" href={`tel:${profile.phone}`}>
                    {profile.phone}
                  </Link>
                </div>
                <Link
                  target="_blank"
                  className="text-sm hover:underline"
                  href={profile.url}
                >
                  Сайт фахівця
                </Link>
                <p
                  className="flex items-center justify-end gap-2 text-right
                  text-sm hover:underline"
                  onClick={() => setModal(!modal)}
                >
                  Читати більше <Arrow />
                </p>
              </div>
            </div>
          );
        })}
      </div>
      {selectProfile && (
        <Modal {...{ modal, setModal }}>
          <div
            className="flex flex-row items-end justify-center gap-2 md:flex-col
            md:items-start md:justify-start md:gap-5"
          >
            <div className="w-full max-w-[140px] md:max-w-full">{image}</div>
            <div className="flex flex-col gap-2">
              <ContactWrapper>
                <Telegram />
                <p className="text-sm hover:underline md:text-base">
                  {telegram}
                </p>
              </ContactWrapper>
              <ContactWrapper>
                <Phone />
                <Link
                  className="text-sm hover:underline md:text-base"
                  href={`tel:${phone}`}
                >
                  {phone}
                </Link>
              </ContactWrapper>
              <Link
                target="_blank"
                className="text-sm hover:underline md:text-base"
                href={url ?? ""}
              >
                Сайт фахівця
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:gap-10">
            <Heading>{name}</Heading>
            <p className="text-sm md:text-base">{description}</p>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Profile;
