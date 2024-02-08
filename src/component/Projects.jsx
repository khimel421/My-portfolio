import React, { useEffect } from "react";
import HeadTitle from "./HeadTitle";
import "animate.css";
import Card from "./Card";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="  bg-[#f5f5f5]">
      <div className=" pt-10 " data-aos="fade-left"  data-aos-anchor-placement="top-center">
        <HeadTitle title={"PROJECTS"}></HeadTitle>
      </div>

      <section className="grid lg:grid-cols-3 gap-2 mt-20 lg:w-[80%] mx-auto pb-40">
        <div data-aos="fade-up" data-aos-duration="700">
          <Card></Card>
        </div>
        <div data-aos="fade-up" data-aos-duration="710">
          <Card></Card>
        </div>
        <div data-aos="fade-up" data-aos-duration="720">
          <Card></Card>
        </div>
        <div data-aos="fade-up" data-aos-duration="730">
          <Card></Card>
        </div>
        <div data-aos="fade-up" data-aos-duration="740">
          <Card></Card>
        </div>
       
        <div data-aos="fade-up" data-aos-duration="750">
          <Card></Card>
        </div>
      </section>
    </div>
  );
};

export default Projects;
