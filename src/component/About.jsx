import React, { useEffect } from "react";
import { BiSolidTachometer } from "react-icons/bi";
import { FaRegLightbulb } from "react-icons/fa6";
import { IoIosRocket } from "react-icons/io";
import SkillProgress from "./SkillProgress";
import HexagonBox from "./HexagonBox";
import DisplayPic from "./DisplayPic";
import HeadTitle from "./HeadTitle";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="">
      <div
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <HeadTitle title={"ABOUT"}></HeadTitle>
      </div>
      <div className="md:flex mt-16 md:justify-center md:items-center md:gap-4 grid grid-cols-2 w-[100%] md:w-[95%] md:ml-6 gap-4 p-4 mx-auto">
        {/* Fast  */}
        <HexagonBox
          title={"Fast"}
          paragraph={
            "Fast load times and lag free interaction, my highest priority."
          }
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="160"
            viewBox="0 0 512 512"
            id="speedometer"
            fill="#ffffff"
          >
            <path d="M344 256l-84.4 64.2c-1.2-.1-2.4-.2-3.6-.2-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32c0-1.2-.1-2.4-.2-3.6L352 264l-8-8z"></path>
            <path d="M256 96C132.3 96 32 196.3 32 320c0 34.4 7.8 66.9 21.6 96h36.1c-15.4-26.6-24.2-56.6-25.5-88H96v-16H64.2c1.2-28.8 8.7-56.5 21.8-81.4l27.5 15.9 8-13.9L94 216.8c7.4-11.6 16.2-22.6 26.2-32.6 10.2-10.1 21.3-19 33.1-26.5l15.8 27.3 13.9-8-15.8-27.3c24.8-13 52.2-20.3 80.8-21.5V160h16v-31.8c28.6 1.2 56 8.6 80.8 21.5L329.1 177l13.9 8 15.8-27.3c11.8 7.5 22.9 16.4 33.1 26.5 10 10 18.7 20.9 26.2 32.6l-27.4 15.8 8 13.9 27.5-15.9c13.1 24.9 20.6 52.6 21.8 81.4h-32v16h31.8c-1.3 31.4-10.1 61.4-25.5 88h36.1c13.8-29.1 21.6-61.6 21.6-96 0-123.7-100.3-224-224-224z"></path>
          </svg>
        </HexagonBox>
        {/* bulb */}
        <HexagonBox
          title={"Intuitive"}
          paragraph={"Strong preference for easy to use, intuitive UX/UI."}
        >
          <FaRegLightbulb className=" text-[60px] text-white" />
        </HexagonBox>
        {/* responsive */}
        <HexagonBox
          title={"Responsive"}
          paragraph={"My layouts will work on any device, big or small."}
        >
          <svg
            fill="#ffffff"
            height="60px"
            width="150px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512"
            xml:space="preserve"
          >
            <g>
              <g>
                <path
                  d="M416.072,196.044l-95.548,0.096c-15.584,0-28.524,12.68-28.524,28.264v199.404C292,439.392,304.936,454,320.524,454h0.132
			l95.352-1.056c15.584,0,28.296-13.164,28.296-28.748l0.112-199.552C444.416,209.008,431.712,196.044,416.072,196.044z
			 M359.916,210H376.8c4.416,0,8,3.584,8,8s-3.584,8-8,8h-16.884c-4.416,0-8-3.584-8-8S355.496,210,359.916,210z M330.76,210.956
			c3-2.96,8.32-2.96,11.32,0c1.48,1.52,2.32,3.56,2.32,5.68c0,2.08-0.84,4.16-2.32,5.64c-1.48,1.48-3.564,2.36-5.68,2.36
			c-2.084,0-4.16-0.88-5.64-2.36c-1.48-1.48-2.36-3.56-2.36-5.64C328.404,214.512,329.28,212.432,330.76,210.956z M368.356,444.18
			c-6.62,0-12.008-5.388-12.008-12.004c0-6.616,5.388-12.004,12.008-12.004s12.008,5.384,12.008,12.004
			S374.976,444.18,368.356,444.18z M428,410c0,2.208-1.788,4-4,4H312c-2.212,0-4-1.792-4-4V242c0-2.208,1.788-4,4-4h112
			c2.212,0,4,1.792,4,4V410z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  d="M507.888,354H484V88.472C484,70.4,469.276,58,451.208,58H60.792C42.716,58,28,70.4,28,88.472V354H4.104
			C1.896,354,0,353.376,0,355.584v3.728C0,379.36,16.412,398,36.456,398H300v-60H52V94h408v244h-20v60h35.528
			C495.584,398,512,379.36,512,359.312v-3.728C512,353.376,510.096,354,507.888,354z M261.636,81.192
			c-1.484,1.484-3.524,2.32-5.64,2.32c-2.116,0-4.164-0.836-5.64-2.32c-1.524-1.516-2.36-3.56-2.36-5.68
			c0-2.12,0.836-4.16,2.36-5.64c2.96-3,8.32-3,11.28,0c1.516,1.48,2.36,3.56,2.36,5.64
			C263.996,77.632,263.152,79.672,261.636,81.192z"
                />
              </g>
            </g>
          </svg>
        </HexagonBox>
        {/* Dynamic */}
        <HexagonBox
          title={"Dynamic"}
          paragraph={
            "Websites don't have to be static, I love making pages come to life."
          }
        >
          <IoIosRocket className=" text-[60px] text-white" />
        </HexagonBox>
      </div>

      <div className="flex flex-col md:flex-row justify-center my-20">
        <div
          className=" grow"
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <DisplayPic></DisplayPic>
        </div>
        <div
          className=" p-6 md:p-0 flex flex-col gap-3 grow"
          data-aos="fade-left"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <SkillProgress skilName={"HTML"} percent={100}></SkillProgress>
          <SkillProgress skilName={"CSS"} percent={100}></SkillProgress>
          <SkillProgress skilName={"JAVASCRIPT"} percent={80}></SkillProgress>
          <SkillProgress skilName={"REACT"} percent={80}></SkillProgress>
          <SkillProgress skilName={"NODE.JS"} percent={60}></SkillProgress>
          <SkillProgress skilName={"Express.js"} percent={40}></SkillProgress>
          <SkillProgress skilName={"Mongo DB"} percent={40}></SkillProgress>
          <SkillProgress skilName={"Tailwind CSS"} percent={60}></SkillProgress>
        </div>
      </div>
    </div>
  );
};

// style={{clipPath:" polygon(25% 0%, 75% 0%, 100% 50%, 81% 100%, 25% 100%, 0% 50%)"}}
// "flex mt-16 justify-center items-center flex-wrap md:flex-none"
export default About;
