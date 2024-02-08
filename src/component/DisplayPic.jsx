import React from "react";


const DisplayPic = () => {
  return (
    <div className="flex flex-col items-center">
      <div
        className=" bg-[#0a95ff] w-[230px] h-[180px] md:w-[230px] md:h-[180px] flex items-center justify-center"
        style={{
          clipPath:
            "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
        }}
      >
        <img src="/images/display.JPG" alt="image" />

      </div>
      <div className="max-w-[350px] text-center font-raleway space-y-3 mt-4">
        <p className="text-[#6d6d6d] text-2xl font-bold ">Who's this guy?</p>
        <h1 className="font-medium text-sm leading-5">
          With a fusion of creativity and code, I specialize in bringing web
          designs to life. My toolbox includes HTML, CSS, and JavaScript, Node.js, Express.js, noSQL Mongo DB, Tailwind CSS and I
          have a knack for turning static concepts into interactive and
          responsive websites.
        </h1>
      </div>
    </div>
  );
};

export default DisplayPic;
