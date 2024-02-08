import React from "react";

const Navbar = () => {
  const scrollPosition = window.scrollY

  console.log(scrollPosition)
  const onPress = (e) => {
    e.preventDefault();
    const target = window.document.getElementById(
      e.currentTarget.href.split("#")[1]
    );
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav className="border-b-2 border-[#03cafc]">
      <ul className="flex capitalize gap-4 p-4 text-lg font-raleway bg-[#1b242f] text-white ">
        <li>
          <a onClick={(e) => onPress(e)} href="#home">
            <div data-to-scrollspy-id="home" className={"ss-item hover:text-[#de2a60] transition-all delay-75"}>
              home
            </div>
          </a>
        </li>
        <li>
          <a onClick={(e) => onPress(e)} href="#about">
            <div data-to-scrollspy-id="about" className={"ss-item hover:text-[#de2a60] transition-all delay-75"}>
              about
            </div>
          </a>
        </li>
        <li>
        <a onClick={(e) => onPress(e)} href="#project">
            <div data-to-scrollspy-id="project" className={"text-white hover:text-[#de2a60] transition-all delay-75"}>
              project
            </div>
          </a>
        </li>
        <li>
          <a onClick={(e) => onPress(e)} href="#blog">
            <div data-to-scrollspy-id="blog" className={"text-white hover:text-[#de2a60] transition-all delay-75"}>
              Blog
            </div>
          </a>
        </li>
        <li>
          <a onClick={(e) => onPress(e)} href="#contact">
            <div data-to-scrollspy-id="contact" className={"text-white hover:text-[#de2a60] transition-all delay-75"}>
              Contact
            </div>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
