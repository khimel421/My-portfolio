import React from "react";

const BlogCard = () => {
  return (
    <div className="font-raleway md:max-w-[300px]  hover:opacity-20">
      <figure>
        <img src="/images/coding.jpg"></img>
      </figure>
      <div className="flex flex-col gap-4 p-2">
        <h1 className="text-xl font-semibold">Breaking Your Coder's Block</h1>
        <p>APRIL 29, 2016</p>
        <hr className=" w-[120px] rounded-md border-[#04c2c9] border-2"></hr>
        <p>
          At one time or another, as a developer, we've all found ourselves
          hopelessly stuck on a coding issue...
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
