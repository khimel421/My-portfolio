import { useState } from "react";

import "./App.css";
import Hero from "./component/Hero";
import About from "./component/About";
import Projects from "./component/Projects";
import Blog from "./component/Blog";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import ScrollHandler from "./component/ScrollHandler";
import ScrollSpy from "react-ui-scrollspy";
import Headroom from "react-headroom";

function App() {
  // const [count, setCount] = useState(0)

  const sections = {
    section1: { offsetTop: 0, offsetHeight: 500 },
    section2: { offsetTop: 500, offsetHeight: 800 },
    section3: { offsetTop: 1300, offsetHeight: 600 },
  };
  return (
    <>
      <Headroom disableInlineStyles>
        <Navbar className=" sticky"></Navbar>
      </Headroom>

      <ScrollSpy scrollThrottle={100} useBoxMethod={false}>
        <section id="home">
          <Hero></Hero>
        </section>

        <section id="about">
          <About></About>
        </section>
        <section id="project">
          <Projects></Projects>
        </section>
        <section id="blog">
          <Blog></Blog>
        </section>
        <section id="contact">
          <Contact></Contact>
        </section>
        <section id="contact">
          <Footer></Footer> 
        </section>
      </ScrollSpy>
      <div>
        {/* <ScrollSpy>
          <section>
            <Hero ></Hero>
          </section>
          <section id="first">
            <About></About>
          </section>
        </ScrollSpy> */}
        {/* 
        <Hero ></Hero>
        <About></About>
        <Projects></Projects>
        <Blog></Blog>
        <Contact></Contact>
        <Footer></Footer> */}
      </div>
    </>
  );
}

export default App;
