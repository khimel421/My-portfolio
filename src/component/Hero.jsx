import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
    const handleScroll = () => {
        window.scrollTo({ top: 650, left: 0, behavior: 'smooth' });
    }
    return (
        <div  className=' font-raleway bg-[#252934] text-white h-screen flex flex-col justify-center items-center text-lg md:text-3xl lg:text-4xl'>
            <h1>Hello, I'm <span className='text-[#de2a60]'>Himel Khondokar</span>. </h1>
            <h1>I'm a full stack web developer.</h1>
            <button onClick={handleScroll} className={`flex items-center gap-2 cursor-pointer text-sm md:text-lg   border p-2 mt-3 hover:bg-[#03cafc] hover:border-[#03cafc] transition-all delay-75 group`}>View my work <span className=' group-hover:rotate-90 transition-transform delay-75 ease-linear'><FaArrowRight /></span>  </button>
        </div>
    );
}

export default Hero;
