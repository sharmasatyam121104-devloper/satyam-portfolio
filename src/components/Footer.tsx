import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import Logo from "./Logo";
import { Link as ScrollLink } from "react-scroll";

export default function Footer() {

    const openWhatsApp = () => {
        window.open(
            "https://wa.me/6306424265?text=Hello%20Satyam%2C%20I%20want%20to%20connect",
            "_blank"
        );
    };

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/pdf/fakeCV.pdf";
        link.download = "Satyam_CV.pdf";
        document.body.appendChild(link); 
        link.click();
        document.body.removeChild(link);
    };


  return (
    <footer className="bg-[linear-gradient(to_bottom_right,#2a000a,black,#1a0a10)] text-white py-10 md:py-10 mb-16 border-b-4 border-[#FF014F] rounded-b-lg md:h-140 h-auto">

        {/* TOP BOX */}
        <div className="max-w-326 mx-auto px-4 md:px-6">

            <div className="border border-[#1f1f1f] bg-[#0a0a0a] rounded-xl px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6 md:h-45 h-auto py-8 md:py-0">

                <h2 className="text-2xl md:text-[40px] text-[#D6DAF0] font-semibold text-center md:text-left">
                Stay Updated With My Work
                </h2>

                <div className="flex flex-col sm:flex-row items-center border border-[#222] rounded-2xl sm:rounded-full overflow-hidden px-3 py-2 w-full md:w-auto gap-4 sm:gap-0">
                
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-transparent px-3 outline-none text-sm w-full md:w-94 h-10"
                />

                <button className="bg-[#FF014F] px-6 rounded-full hover:opacity-90 transition h-12 w-full sm:w-auto whitespace-nowrap">
                    Subscribe Now →
                </button>

                </div>

            </div>

            {/* MIDDLE */}
            <div className="flex flex-col md:flex-row justify-between items-center mt-12 md:mt-24 gap-8 md:mx-20">

                {/* LEFT LINKS */}
                <div className="flex flex-wrap justify-center gap-6 text-sm md:text-[16px] font-medium text-gray-400">
                
                <ScrollLink
                    to="about"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="hover:text-[#FF014F] cursor-pointer"
                >
                    ABOUT ME
                </ScrollLink>

                <ScrollLink
                    to="projects"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="hover:text-[#FF014F] cursor-pointer"
                >
                    PROJECTS
                </ScrollLink>

                <ScrollLink
                    to="skills"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="hover:text-[#FF014F] cursor-pointer"
                >
                    SKILLS
                </ScrollLink>

                <ScrollLink
                    to="contact"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="hover:text-[#FF014F] cursor-pointer"
                >
                    CONTACTS
                </ScrollLink>

                </div>

                {/* SOCIAL */}
                <div className="flex gap-8">
                <Link to="https://github.com/sharmasatyam121104-devloper" className="text-gray-400 hover:text-[#FF014F] transition">
                    <FaGithub size={28} />
                </Link>
                <Link to="https://www.linkedin.com/in/satyam-sharma-dev04" className="text-gray-400 hover:text-[#FF014F] transition">
                    <FaLinkedin size={28} />
                </Link>
                <Link to="https://x.com/SatyamShar44494" className="text-gray-400 hover:text-[#FF014F] transition">
                    <FaTwitter size={28} />
                </Link>
                <Link to="https://www.instagram.com/satyam548sharma" className="text-gray-400 hover:text-[#FF014F] transition">
                    <FaInstagram size={28} />
                </Link>
                </div>

            </div>

            {/* DIVIDER */}
            <div className="border-t border-[#1f1f1f] mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-400 md:mx-20 text-[16px]">

                {/* LEFT - Copyright (Order 2 on mobile) */}
                <p className="order-2 md:order-1 text-center md:text-left">
                © 2026 Satyam Sharma. All rights reserved.
                </p>

                {/* CENTER LOGO (Order 1 on mobile) */}
                <div className="order-1 md:order-2">
                <Logo />
                </div>

                {/* RIGHT LINKS (Order 3 on mobile) */}
                <div className="flex gap-6 order-3">
                <button onClick={handleDownload} className="hover:text-[#FF014F]">Resume</button>
                <button onClick={openWhatsApp} className="hover:text-[#FF014F]">Contact Me</button>
                </div>

            </div>

        </div>
    </footer>
  );
}