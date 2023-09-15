import Link from "next/link";
import React from "react";

const navigation = [
  {
    title: "Ініціативний аудит",
    url: "audit",
  },
  {
    title: "Послуги",
    url: "services",
  },
  {
    title: "Спеціалісти",
    url: "specialists",
  },
];
const NavBar = () => {
  return (
    <div className="flex gap-20">
      {navigation.map(({ url, title }, index) => (
        <Link key={index} href={`#${url}`}>
          {title}
        </Link>
      ))}
    </div>
  );
};

export default NavBar;
