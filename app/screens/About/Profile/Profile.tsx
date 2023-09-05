import React from "react";

import { profiles } from "@/app/screens/About/defaultData";

const Profile = () => (
  <div className="flex gap-10">
    {profiles.map(({ name, image, description }, index) => {
      return (
        <div key={index} className="flex flex-col gap-10">
          {image}
          <div className="flex flex-col gap-4">
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
        </div>
      );
    })}
  </div>
);

export default Profile;
