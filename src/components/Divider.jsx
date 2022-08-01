import React from "react";
const Divider = (props) => {
  return (
    <div className=" bg-tertiary flex py-10 justify-center relative" id={props.id}>
        <h2
          className={`text-[4rem] italic`}
        >
          {props.title}
        </h2>
      </div>
  );
};

export default Divider;
