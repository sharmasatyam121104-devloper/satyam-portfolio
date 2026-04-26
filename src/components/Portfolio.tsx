import { BiHeart } from "react-icons/bi";

const Portfolio = () => {
  const projects = [
    {
      title: "DevSync",
      desc: "Real-time team collaboration platform with chat, task management, and file sharing using MERN & WebSockets.",
      image: "/photos/devsync.jpg",
      tags: ["Collaboration", "Web App"],
      count: 120
    },
    {
      title: "Social Media App",
      desc: "MERN-based social platform with posts, likes, chat, and real-time video/audio calling using WebRTC.",
      image: "/photos/social.jpg",
      tags: ["Social", "WebRTC"],
      count: 150
    },
    {
      title: "E-commerce App",
      desc: "Full-featured shopping platform built with Next.js with product management and optimized performance.",
      image: "/photos/ecommerce.jpg",
      tags: ["Ecommerce", "Next.js"],
      count: 200
    },
    {
      title: "NPM CLI Tool",
      desc: "Custom NPM CLI tool to quickly scaffold Node.js, Express, and MongoDB applications.",
      image: "/photos/cli.jpg",
      tags: ["CLI Tool", "NPM"],
      count: 80
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="flex flex-col items-center mt-10 md:mt-20 px-6">
        <div className="relative inline-block px-4 py-1 text-[#FF014F] text-sm md:text-lg mb-6 md:mb-10">
          {/* Corner Borders */}
          <span className="absolute top-0 left-0 w-2 h-2 border-l border-t border-slate-700"></span>
          <span className="absolute top-0 right-0 w-2 h-2 border-r border-t border-slate-700"></span>
          <span className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-slate-700"></span>
          <span className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-slate-700"></span>
          My Awesome Work
        </div>
        
        <h2 className="text-3xl md:text-5xl font-bold text-gray-300 mb-6 text-center">
          My Portfolio
        </h2>

        <p className="max-w-3xl mx-auto text-white text-base md:text-lg leading-relaxed text-center px-4">
          I am a Full Stack Developer focused on building modern, scalable web applications 
          using the MERN stack, delivering clean UI and robust backend systems.
        </p>
      </div>

      {/* Grid: 1 col on mobile, 2 on md+ screens */}
      {/* Width ko responsive kiya: mobile pe 95%, desktop pe 10/12 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mt-12 md:mt-18 px-4 md:px-10 lg:px-18 w-full md:w-11/12 lg:w-10/12 mx-auto">
        
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative bg-black/60 border border-gray-800 p-6 md:p-12 transition-all hover:border-gray-600"
          >
            {/* Design Corner Borders */}
            <span className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-[#FF014F]"></span>
            <span className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-[#FF014F]"></span>
            <span className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-[#FF014F]"></span>
            <span className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-[#FF014F]"></span>
            
            {/* Top Content */}
            <div className="mb-5">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-200 mb-3">
                {project.title}
              </h2>

              <p className="text-gray-400 text-sm md:text-base mb-4 line-clamp-3">
                {project.desc}
              </p>

              <div className="flex flex-wrap justify-between items-center gap-4">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs md:text-sm px-3 md:px-4 py-1 bg-black border border-gray-700 rounded-full text-rose-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Likes */}
                <div className="flex items-center gap-2 text-gray-400">
                  <BiHeart size={18} className="text-rose-500" />
                  <span className="text-sm">{project.count}</span>
                </div>
              </div>
            </div>

            {/* Image Container: Height responsive on mobile */}
            <div className="rounded-xl overflow-hidden mt-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 md:h-85 object-cover hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
        ))}

      </div>

      <div className="h-20 md:h-40 w-full"></div>
    </div>
  );
}

export default Portfolio;