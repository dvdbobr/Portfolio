import React from "react";

// import social data
import { socials } from "../data";


const Footer = () => {
  return (
    <footer className="bg-tertiary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between">
          <div className="flex space-x-6 items-center justify-center">
            {socials.map((item, index) => {
              const { href, icon } = item;
              return (
                  <a className="text-accent text-xl hover:text-white rounded-full w-[50px] h-[50px] bg-secondary flex items-center justify-center" href={href} key={index}>
                    {icon}
                  </a>
              );
            })}
          </div>
          <p className="text-paragraph opacity-80 text-[15px]">
            &copy; 2022 David Bobritsky. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
