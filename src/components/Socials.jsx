import React from "react";

import { socials } from "../data";
const Socials = () => {
  return (
    <ul className="flex space-x-6 container">
      {socials.map((item, index) => {
        return (
          <a href={item.href} className="text-base text-[26px]" key={index}>
            <li
              className="flex justify-center items-center text-accent hover:text-white rounded-full w-[50px] h-[50px] bg-secondary"
              
            >
              {item.icon}
            </li>
          </a>
        );
      })}
    </ul>
  );
};

export default Socials;
