import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const HexagonBox = ({ children, title, paragraph }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="md:w-[40%] mx-auto "
      data-aos="flip-left"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <section className="flex flex-col items-center gap-4 ">
        <div
          className=" bg-[#0a95ff] w-[100px] h-[80px] md:w-[130px] md:h-[100px] flex items-center justify-center"
          style={{
            clipPath:
              "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
          }}
        >
          {children}
        </div>
        <div>
          <h1 className="text-center text-lg md:text-2xl text-[#616161] font-raleway font-bold">
            {title}
          </h1>
          <p className="  text-center text-[10px] md:text-base md:max-w-[250px]">
            {paragraph}
          </p>
        </div>
      </section>
    </div>
  );
};

export default HexagonBox;
