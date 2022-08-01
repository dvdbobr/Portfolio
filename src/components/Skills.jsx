import React from "react";

import { skills } from "../data";

const Skills = () => {
  return (
    <section id="skills">
      <div className="container mx-auto my-6">
        <div className="my-4 flex justify-center flex-wrap items-center text-center space-x-2">
          {skills.map((skill, index) => {
            return (
              <div className="flex flex-col items-center justify-center w-[118px] px-2" key={index}>
                <img className="h-10 lg:h-28 object-contain" src={skill.image} alt="" />
                <p className="text-white">{skill.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
