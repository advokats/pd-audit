import React from "react";

import Heading from "@/app/components/Heading";
import Modal from "@/app/components/Modal";
import { profiles } from "@/app/screens/About/defaultData";
import { ProfileData } from "@/app/screens/About/Profile/types";

const Profile = () => {
  const [modal, setModal] = React.useState<boolean>(false);
  const [selectProfile, setSelectProfile] = React.useState<ProfileData>();
  const { name, image, description } = selectProfile ?? {};

  return (
    <>
      <div
        onClick={() => setModal(!modal)}
        className="flex cursor-pointer gap-24"
      >
        {profiles.map((profile, index) => {
          return (
            <div
              key={index}
              onClick={() => setSelectProfile(profile)}
              className="flex flex-col gap-2 hover:bg-grey/10"
            >
              <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                <div className="transition duration-300 ease-in-out hover:scale-110">
                  {profile.image}
                </div>
              </div>
              <div className="flex flex-col gap-4 px-2 py-4">
                <Heading>{profile.name}</Heading>
                <p>Читати більше &#8599;</p>
              </div>
            </div>
          );
        })}
      </div>
      {selectProfile && (
        <Modal {...{ modal, setModal }}>
          <div>{image}</div>
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
