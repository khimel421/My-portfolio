import React, { useEffect } from "react";
import { LuExternalLink } from "react-icons/lu";
import AOS from "aos";
import "aos/dist/aos.css";
const Card = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div  className="font-raleway group  h-[300px] bg-gray-300 overflow-hidden  shadow-lg transition-transform transform ">
      <img
        src="/images/background.jpg"
        alt="Card Image"
        className="w-full h-full object-cover transition duration-300 ease-in-out group-hover:scale-210 group-hover:opacity-0"
      ></img>
      <div className="flex flex-col  group-hover:opacity-100 opacity-0 transition-all duration-300 absolute inset-0  items-center justify-around  ">
        <p className="text-black text-xl font-bold cursor-pointer transition-all ease-in-out delay-75 group-hover:translate-y-0 -translate-y-10">
          ChowNow Ordering <br></br>{" "}
          <span className="text-base ml-6">React JS / Python</span>
        </p>

        <button
          className="border border-pink-500 py-2 px-4 font-semibold hover:bg-pink-500 hover:text-white transition-all ease-in-out delay-75 group-hover:translate-y-0 translate-y-10 "
          onClick={() => document.getElementById("my_modal_2").showModal()}
        >
          LEARN MORE
        </button>
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box max-w-[100%] lg:max-w-[50%] h-[100%]">
            <div className="carousel w-full h-[200px]">
              <div id="slide1" className="carousel-item relative w-full">
                <img
                  src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
                  className="w-full"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide4" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide2" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide2" className="carousel-item relative w-full">
                <img
                  src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
                  className="w-full"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide1" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide3" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide3" className="carousel-item relative w-full">
                <img
                  src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
                  className="w-full"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide2" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide4" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide4" className="carousel-item relative w-full">
                <img
                  src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
                  className="w-full"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide3" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide1" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h1 className=" text-2xl font-bold">ChowNow Discover</h1>
              <p className="text-base font-semibold">Food ordering platform</p>
            </div>
            <div className="mt-10">
              <hr className="border-1"></hr>
              <p className="pt-4">
                ChowNow Discover is a platform that lets customers discover new
                local restaurants and provides business owners with tools to
                convert first time orders into lifelong diners.
              </p>
            </div>
            <button className="flex gap-4 items-center justify-center mt-8 border border-pink-500 py-2 px-4 font-semibold hover:bg-pink-500 hover:text-white transition-all ease-in-out delay-75 ">
               <span><LuExternalLink /></span> VIEW SITE
            </button>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    </div>
  );
};

export default Card;
