import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

const SkillProgress = ({skilName, percent}) => {
  return (
    <div className="w-[100%]">
      <div className="flex items-center w-[100%]">
        <p className="px-2 w-[160px] bg-[#04c2c9] text-white text-xl">{skilName}</p>
        <ProgressBar
          animateOnRender={true}
          bgColor={"#00a1a7"}
          completed={percent}
          borderRadius={""}
          width={"100%"}
          height={"28px"}
          className=" w-[200px] md:w-[350px]"
        />
      </div>
    </div>
  );
};

export default SkillProgress;
