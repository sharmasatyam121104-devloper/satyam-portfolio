import { BsFillLaptopFill } from "react-icons/bs";
import { CgInstagram, CgTwitter } from "react-icons/cg";
import { CiLinkedin } from "react-icons/ci";
import { FaVimeoV, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Link as SLink } from "react-scroll";

import {
  SiNodedotjs,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiRabbitmq,
  SiPostman,
  SiHtml5,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiAntdesign,
  SiShadcnui
} from "react-icons/si";
import { CloudSnow } from "lucide-react";

const MyRessume = () => {
  const stats = [
    { value: "10+", label: "Complete Projects" },
    { value: "5+", label: "Happy Clients" },
    { value: "20+", label: "Real Projects" },
    { value: "15+", label: "Awesome Clients" },
    { value: "5K+", label: "Pending Projects" },
    { value: "10+", label: "React Templates" },
  ];

  const skills = [
    { name: "Node.js", icon: <SiNodedotjs height={40} color="#339933" /> },
    { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
    { name: "Redis", icon: <SiRedis color="#DC382D" /> },
    { name: "Docker", icon: <SiDocker color="#2496ED" /> },
    { name: "RabbitMQ", icon: <SiRabbitmq color="#FF6600" /> },
    { name: "BullMQ", icon: <SiNodedotjs color="#339933" /> },
    { name: "Postman", icon: <SiPostman color="#FF6C37" /> },
    { name: "AWS", icon: <CloudSnow color="#FF9900" /> },
    { name: "HTML", icon: <SiHtml5 color="#E34F26" /> },
    { name: "Tailwind", icon: <SiTailwindcss color="#06B6D4" /> },
    { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
    { name: "React", icon: <SiReact color="#61DAFB" /> },
    { name: "Next.js", icon: <SiNextdotjs color="#ffffff" /> },
    { name: "Ant Design", icon: <SiAntdesign color="#0170FE" /> },
    { name: "ShadCN", icon: <SiShadcnui color="#ffffff" /> },
  ];

    const openWhatsApp = () => {
        window.open(
            "https://wa.me/6306424265?text=Hello%20Satyam%2C%20I%20want%20to%20connect",
            "_blank"
        );
    };

  return (
    <div className="min-h-screen bg-[#0d0d0d] w-11/12 mx-auto rounded-[30px] md:rounded-[60px] p-2 mt-4">
      {/* Header Section */}
      <div className="flex flex-col items-center mt-10 md:mt-20 px-4">
        <div className="relative inline-block px-4 py-1 text-[#FF014F] text-sm md:text-lg mb-6">
          <span className="absolute top-0 left-0 w-2 h-2 border-l border-t border-slate-700"></span>
          <span className="absolute top-0 right-0 w-2 h-2 border-r border-t border-slate-700"></span>
          <span className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-slate-700"></span>
          <span className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-slate-700"></span>
          1.5+ YEARS OF EXPERIENCE
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-[#D6DAF0] mb-6 text-center">
          My Resume
        </h2>
        <p className="max-w-3xl mx-auto text-[#D6DAF0] text-base md:text-lg leading-relaxed text-center">
          As a Full Stack Developer with a backend-oriented approach, I focus on building robust, scalable server-side systems while delivering clean and seamless user interfaces.
        </p>
      </div>

      {/* Educational & Stay With Me Grid */}
      <div className="max-w-310 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 md:mt-15">
        {/* LEFT SIDE - Education */}
        <div className="relative md:col-span-2 p-6 md:p-10 border border-slate-700">
          <span className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-[#FF014F]"></span>
          <span className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-[#FF014F]"></span>
          <span className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-[#FF014F]"></span>
          <span className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-[#FF014F]"></span>

          <h2 className="text-2xl md:text-3xl font-bold text-[#D6DAF0] mb-6">Educational Experience</h2>
          <div className="mb-6">
            <div className="flex justify-between text-sm text-[#D6DAF0] mb-2">
              <span>2022 - Present</span>
              <span className="text-[#FF014F]">Pursuing</span>
            </div>
            <h3 className="text-xl text-[#D6DAF0] font-semibold">B.E in Computer Engineering</h3>
            <p className="text-[#D6DAF0]">Currently in 3rd Year (Final Year Ongoing)</p>
          </div>
          <hr className="border-[#1a1a1a] my-6" />
          <div className="mb-6">
            <div className="flex justify-between text-sm text-[#D6DAF0] mb-2">
              <span>2020 - 2022</span>
              <span className="text-[#FF014F]">12th</span>
            </div>
            <h3 className="text-xl text-[#D6DAF0] font-semibold">Higher Secondary (12th)</h3>
            <p className="text-[#D6DAF0]">Maharashtra Board</p>
          </div>
        </div>

        {/* RIGHT SIDE - Socials */}
        <div className="relative p-6 md:p-10 border border-slate-700 flex flex-col items-center">
          <span className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-[#FF014F]"></span>
          <span className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-[#FF014F]"></span>
          <span className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-[#FF014F]"></span>
          <span className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-[#FF014F]"></span>

          <h2 className="text-2xl md:text-3xl text-[#D6DAF0] mb-8 md:mb-12 font-bold text-center">Stay With Me</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
                {Icon:CgInstagram, link: "https://www.instagram.com/satyam548sharma"},
                {Icon:CgTwitter, link: "https://x.com/SatyamShar44494"},
                {Icon:CiLinkedin, link: "https://www.linkedin.com/in/satyam-sharma-dev04"}, 
                {Icon: CgInstagram, link: "https://www.instagram.com/satyam548sharma"}
            ].map((data, idx) => (
              <Link key={idx} to={data.link} className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-[#222] flex items-center justify-center text-[#FF014F] hover:bg-[#FF014F] hover:text-white transition">
                <data.Icon size={24} />
              </Link>
            ))}
          </div>
            <SLink
            to="home"
            smooth={true}
            duration={500}
            offset={-80}
            spy={true}
            activeClass="text-[#FF014F]"
            className="inline-block bg-[#FF014F] text-[#D6DAF0] px-6 py-3 rounded-full hover:opacity-90 transition mt-4 md:mt-12 text-sm md:text-base cursor-pointer"
            >
            View My Profile →
            </SLink>

        </div>
      </div>

      {/* Jobs, Experience, Skills Row */}
      <div className="max-w-325 mx-auto flex flex-col md:flex-row gap-7 mt-8 px-0 md:px-6">
        {/* JOB SECTION */}
        <div className="w-full md:w-100 relative p-6 md:p-9 border border-slate-700 h-100">
          <span className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-[#FF014F]"></span>
          <span className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-[#FF014F]"></span>
          <span className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-[#FF014F]"></span>
          <span className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-[#FF014F]"></span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#D6DAF0] mb-8">Job Experience</h2>
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-400">
              <span>2023 - Present</span>
              <span className="text-[#FF014F]">Learning</span>
            </div>
            <h3 className="text-lg text-[#D6DAF0] font-semibold mt-2">Full Stack Developer</h3>
            <p className="text-gray-400 text-sm">MERN stack apps & real-time systems</p>
          </div>
          <hr className="border-[#1a1a1a] my-6" />
          <div>
            <div className="flex justify-between text-sm text-gray-400">
              <span>2022 - 2023</span>
              <span className="text-[#FF014F]">Practice</span>
            </div>
            <h3 className="text-lg text-[#D6DAF0] font-semibold mt-2">Backend Development</h3>
            <p className="text-gray-400 text-sm">Node.js, Express, MongoDB</p>
          </div>
        </div>

        {/* EXPERIENCE MIDDLE SECTION */}
        <div className="relative  px-8 border border-slate-700 w-full md:w-68.75 h-100 flex flex-col justify-center items-center">
          <span className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-[#FF014F]"></span>
          <span className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-[#FF014F]"></span>
          <span className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-[#FF014F]"></span>
          <span className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-[#FF014F]"></span>
          <h2 className="text-3xl font-bold text-[#D6DAF0] mb-6">Experience</h2>
          <div className="space-y-6 w-full">
            <div className="flex items-center gap-4">
              <FaWhatsapp className="text-green-500 text-3xl" />
              <div><h4 className="text-[#D6DAF0] text-sm">Chat App</h4><p className="text-gray-400 text-xs">Real-time</p></div>
            </div>
            <div className="flex items-center gap-4">
              <FaVimeoV className="text-blue-400 text-3xl" />
              <div><h4 className="text-[#D6DAF0] text-sm">Video Platform</h4><p className="text-gray-400 text-xs">Streaming</p></div>
            </div>
            {/* Video & Audio Call App */}
                <div className="flex items-center gap-4">
                <FaWhatsapp className="text-green-500 text-3xl" />
                <div>
                    <h4 className="text-[#D6DAF0] text-sm font-semibold">Video & Audio Call App</h4>
                    <p className="text-gray-400 text-xs">WebRTC & Socket.io</p>
                </div>
                </div>

                {/* Doctor Appointment Booking */}
                <div className="flex items-center gap-4">
                <BsFillLaptopFill className="text-blue-400 text-3xl" />
                <div>
                    <h4 className="text-[#D6DAF0] text-sm font-semibold">Doctor Appointment</h4>
                    <p className="text-gray-400 text-xs">Fullstack Booking System</p>
                </div>
                </div>

                {/* NPM CLI Tool */}
                <div className="flex items-center gap-4">
                <SiNodedotjs className="text-[#339933] text-3xl" />
                <div>
                    <h4 className="text-[#D6DAF0] text-sm font-semibold">Express Setup CLI</h4>
                    <p className="text-gray-400 text-xs">1-Click Project Setup Genrate</p>
                </div>
                </div>
          </div>
        </div>

        {/* SKILLS SECTION */}
        <div className="flex-1 relative p-3 md:p-9 border border-slate-700 w-full">
          <span className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-[#FF014F]"></span>
          <span className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-[#FF014F]"></span>
          <span className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-[#FF014F]"></span>
          <span className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-[#FF014F]"></span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#D6DAF0] mb-6">Skills</h2>
          {[{ name: "React.js", value: "90%" }, { name: "Node.js", value: "85%" }, { name: "MongoDB", value: "80%" }, { name: "AWS", value: "80%" }].map((skill, i) => (
            <div key={i} className="mb-6">
              <p className="text-[#D6DAF0] text-sm mb-2">{skill.name}</p>
              <div className="w-full h-2 bg-[#222] rounded">
                <div className="h-2 bg-[#FF014F] rounded" style={{ width: skill.value }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats, Contact, Scroll Section */}
      <div className="max-w-325 mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr_0.5fr] gap-6 mt-10 px-0 md:px-6">
        {/* STATS */}
        <div className="relative p-6 md:p-10 border border-[#1f1f1f] grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          <span className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-[#FF014F]"></span>
          <span className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-[#FF014F]"></span>
          <span className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-[#FF014F]"></span>
          <span className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-[#FF014F]"></span>
          {stats.map((item, i) => (
            <div key={i} className="bg-[#151515] p-4 md:p-6 text-center rounded-xl hover:scale-105 transition">
              <h3 className="text-xl md:text-3xl font-bold text-white">{item.value}</h3>
              <p className="text-gray-400 mt-1 text-[10px] md:text-sm">{item.label}</p>
            </div>
          ))}
        </div>

        {/* CONTACT */}
        <div className="relative p-6 md:p-10 border border-[#1f1f1f] text-center flex flex-col items-center justify-center">
          <span className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-[#FF014F]"></span>
          <span className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-[#FF014F]"></span>
          <span className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-[#FF014F]"></span>
          <span className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-[#FF014F]"></span>
          <h2 className="text-xl text-white mb-6">Stay With Me</h2>
          <button onClick={openWhatsApp} className="bg-[#FF014F] text-white px-6 py-3 rounded-full text-sm">
            Get In Touch →
          </button>
        </div>

        {/* SKILLS SCROLL */}
        <div className="relative h-64 md:h-100 flex flex-col overflow-hidden border border-slate-800 md:border-none">
          <div className="text-white text-center py-2 font-medium">Skills On</div>
          <div className="flex-1 overflow-hidden">
            <div className="animate-scrollY flex flex-col items-center gap-6 h-full w-full justify-center">
              {[...skills, ...skills].map((skill, i) => (
                <div key={i} className="text-3xl md:text-4xl rounded-xl bg-[#151515] p-2 text-[#FF014F]">
                  {skill.icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="h-10 md:h-20 w-full"></div>
    </div>
  );
};

export default MyRessume;