import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import MainHome from "./components/MainHome";
import MyRessume from "./components/MyRessume";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import NavBar from "./components/NavBar";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

const Home = () => {

const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const triggerHeight = window.innerHeight * 0.1; // 10vh
      if (window.scrollY > triggerHeight) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-fit bg-white shadow z-50 transition-transform duration-300 
        ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
        >
        <NavBar />
      </div>

      <div id="home">
       <MainHome />
      </div>

      <div id="services">
        <Services />
      </div>

      <div id="portfolio">
        <Portfolio />
      </div>

      <div id="resume">
        <MyRessume />
      </div>

      <div id="blog">
        <Blog />
      </div>

      <div id="contact">
        <Contact />
      </div>
      {/* <Testimonials/> */}
      <Footer/>
    </>
  );
}

export default Home;
