import React from "react";
import { FiGithub } from "react-icons/fi";
import { AiOutlineEye } from "react-icons/ai";
const ProjectCard = ({ item }) => {
  const clicked = () => {
    console.log("clicked");
  };
  return (
    <div
      key={item.id}
      className="flex flex-col items-center text-center my-10"
      onClick={clicked}
    >
      <div className="mb-4 p-6 relative">
        <img
          className="rounded-2xl shadow-xl hover:opacity-40 "
          src={item.image}
          alt="project_image"
        />
        <div className="absolute hover:[&_a]:scale-90 hover:cursor-pointer [&_a]:transition duration-500 ease-in-out inset-6 rounded-2xl bg-[#00000080] flex justify-center space-x-4 items-center opacity-0 hover:opacity-100">
          <a
            className="w-[4rem] h-[4rem] rounded-full bg-black flex justify-center items-center"
            href={item.href}
          >
            <AiOutlineEye />
          </a>
          <a
            className="w-[4rem] h-[4rem] rounded-full bg-black flex justify-center items-center"
            href={item.github}
          >
            <FiGithub />
          </a>
        </div>
      </div>
      {/* <p className='capitalize text-accent text-sm mb-3'>{item.category}</p> */}
      {/* <h3 className='text-sm lg:text-2xl font-semibold capitalize mb-3'>{item.name}</h3> */}
      <h3 className="capitalize text-accent text-lg mb-3">{item.name}</h3>
      <p className="text-base max-w-md">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit veniam
        obcaecati ipsam.
      </p>
    </div>
  );
};

export default ProjectCard;
