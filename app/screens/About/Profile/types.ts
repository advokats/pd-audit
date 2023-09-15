import React from "react";

export interface ProfileData {
  name: string;
  phone: string;
  telegram: string;
  url: string;
  image: React.JSX.Element | string;
  description: string;
}
