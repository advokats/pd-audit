import Link from "next/link";
import React from "react";

import Heading from "@/app/components/Heading";
import Modal from "@/app/components/Modal";
import { profiles } from "@/app/screens/About/defaultData";
import { ProfileData } from "@/app/screens/About/Profile/types";
import Phone from "@/public/assets/svg/_shared/phone.svg";
import Telegram from "@/public/assets/svg/_shared/telegram.svg";

const Profile = () => {
  const [modal, setModal] = React.useState<boolean>(false);
  const [selectProfile, setSelectProfile] = React.useState<ProfileData>();
  const { name, image, description, phone, url, telegram } =
    selectProfile ?? {};

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
              <div className="flex flex-col gap-3 px-2 py-4">
                <Heading>{profile.name}</Heading>
                <div className="flex gap-4">
                  <Telegram />
                  <p className="text-sm">{profile.telegram}</p>
                </div>
                <div className="flex gap-4">
                  <Phone />
                  <Link className="text-sm" href={`tel:${profile.phone}`}>
                    {profile.phone}
                  </Link>
                </div>
                <Link target="_blank" className="text-sm" href={profile.url}>
                  Сайт фахівця
                </Link>
                <p
                  className="text-right text-sm"
                  onClick={() => setModal(!modal)}
                >
                  Читати більше &#8599;
                </p>
              </div>
            </div>
          );
        })}
      </div>
      {selectProfile && (
        <Modal {...{ modal, setModal }}>
          <div className="flex flex-col gap-2">
            <div>{image}</div>
            <div className="flex flex-col gap-2 px-2 py-4">
              <div className="flex gap-4">
                <Telegram />
                <p>{telegram}</p>
              </div>
              <div className="flex gap-4">
                <Phone />
                <Link href={`tel:${phone}`}>{phone}</Link>
              </div>
              <Link href={url ?? ""}>Сайт фахівця</Link>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <Heading>{name}</Heading>
            <p>{description}</p>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Profile;
