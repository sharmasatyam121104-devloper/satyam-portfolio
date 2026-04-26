import { FaCode, FaReact, FaServer, FaAws, FaPlug, FaFigma, FaNodeJs, FaGitAlt, FaDocker } from "react-icons/fa";
import { SiMongodb, SiExpress, SiJavascript, SiTailwindcss, SiPostman } from "react-icons/si";

const Services = () => {
  const servicesContent = [
    { title: "Full Stack Development", desc: "Building scalable web apps using MERN stack.", icon: <FaCode /> },
    { title: "React Development", desc: "Creating responsive and dynamic user interfaces.", icon: <FaReact /> },
    { title: "Backend APIs", desc: "Developing secure REST APIs with Node.js & Express.", icon: <FaServer /> },
    { title: "MongoDB Database", desc: "Designing optimized and scalable database structures.", icon: <SiMongodb /> },
    { title: "AWS Deployment", desc: "Deploying apps on EC2, S3 with high availability.", icon: <FaAws /> },
    { title: "API Integration", desc: "Integrating and testing APIs using Postman.", icon: <FaPlug /> },
  ];

  const items = [
    { title: "React.js", icon: <FaReact /> },
    { title: "Node.js", icon: <FaNodeJs /> },
    { title: "Express.js", icon: <SiExpress /> },
    { title: "MongoDB", icon: <SiMongodb /> },
    { title: "JavaScript", icon: <SiJavascript /> },
    { title: "Tailwind CSS", icon: <SiTailwindcss /> },
    { title: "AWS Cloud", icon: <FaAws /> },
    { title: "REST APIs", icon: <SiPostman /> },
    { title: "Git & GitHub", icon: <FaGitAlt /> },
    { title: "Docker", icon: <FaDocker /> },
    { title: "Figma", icon: <FaFigma /> },
  ];

  return (
    // Mobile par rounded thoda kam, padding adjust ki hai
    <div className="min-h-screen bg-[#111214] w-full md:w-11/12 mx-auto rounded-[30px] md:rounded-[60px] p-4 md:p-6 mt-4">
      
      <div className="flex flex-col items-center mt-10 md:mt-20 px-4">
        <div className="relative inline-block px-4 py-1 text-[#FF014F] text-sm md:text-lg mb-6 md:mb-10 font-medium text-center">
          <span className="absolute top-0 left-0 w-2 h-2 border-l border-t border-slate-700"></span>
          <span className="absolute top-0 right-0 w-2 h-2 border-r border-t border-slate-700"></span>
          <span className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-slate-700"></span>
          <span className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-slate-700"></span>
          My Specializations Services
        </div>
        
        <h2 className="text-3xl md:text-5xl font-bold text-[#D6DAF0] mb-6 text-center">
          What I Do
        </h2>

        <p className="max-w-3xl mx-auto text-[#D6DAF0] text-base md:text-lg leading-relaxed text-center">
          I develop scalable and efficient web applications tailored to your
          business needs, ensuring clean code and seamless user experience.
        </p>
      </div>

      {/* Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 mt-12 md:mt-16">
        {servicesContent.map((item, index) => (
          <div key={index} className="relative p-8 md:p-12 lg:p-18 bg-[#0d0d0d] text-center border border-slate-700">
            {/* Corners */}
            <span className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-[#FF014F]"></span>
            <span className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-[#FF014F]"></span>
            <span className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-[#FF014F]"></span>
            <span className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-[#FF014F]"></span>

            {/* Icon Circle - Mobile pe thoda chota kiya */}
            <div className="w-24 h-24 md:w-35 md:h-35 mx-auto mb-6 rounded-full bg-[#1a1a1a] flex items-center justify-center">
              <span className="text-[#FF014F] text-4xl md:text-6xl">
                {item.icon}
              </span>
            </div>

            <h3 className="text-lg md:text-xl font-semibold text-[#D6DAF0] mb-4">
              {item.title}
            </h3>

            <p className="text-[#D6DAF0] text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Moving Tech Track */}
      <div className="relative w-full lg:w-[96%] mx-auto mt-12 md:mt-18 border border-slate-700 mb-24">
          <span className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-[#FF014F]"></span>
          <span className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-[#FF014F]"></span>
          <span className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-[#FF014F]"></span>
          <span className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-[#FF014F]"></span>

          <div className="overflow-hidden px-4 md:px-12 py-8">
              <div className="flex w-max animate-scroll gap-8 md:gap-16">
                {[...items, ...items].map((item, index) => (
                  <div key={index} className="flex flex-col items-center min-w-25 md:min-w-30">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#1a1a1a] flex items-center justify-center mb-3 text-3xl md:text-4xl text-[#FF014F]">
                      {item.icon}
                    </div>
                    <p className="text-gray-300 text-sm md:text-xl font-bold text-center">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
          </div>
      </div>
    </div>
  );
}

export default Services;