import React from "react";
import 'animate.css';


const HeadTitle = ({title}) => {

  return (
    <section className="flex flex-col items-center mt-12">
      <h1 className="font-raleway text-2xl md:text-4xl font-bold text-center p-2 ">
        {title}
      </h1>
      <hr className=" w-24 border-2 border-black rounded-lg"></hr>
    </section>
  );
};

export default HeadTitle;
