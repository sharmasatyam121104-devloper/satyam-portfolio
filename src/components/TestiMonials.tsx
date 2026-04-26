const testimonials = [
  {
    name: "Aman Verma",
    role: "Startup Founder",
    desc: "Working with Satyam was a great experience. He designed and developed our backend architecture using Node.js and MongoDB with scalability in mind. The APIs were clean, well-documented, and handled high traffic efficiently. His understanding of system design really helped us launch faster and more reliably.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Rohit Sharma",
    role: "Tech Lead",
    desc: "Satyam has strong MERN stack expertise and a deep understanding of real-time systems. He implemented WebSocket-based features and optimized database queries which significantly improved performance. His coding standards and modular approach make him easy to collaborate with in large projects.",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Neha Singh",
    role: "Product Manager",
    desc: "From requirement understanding to final delivery, Satyam handled everything professionally. He built scalable APIs and ensured smooth frontend-backend integration. His focus on performance and user experience made a noticeable difference in our product quality.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Karan Mehta",
    role: "Full Stack Developer",
    desc: "I collaborated with Satyam on a real-time chat and video calling project using WebRTC. His backend logic and debugging skills are impressive. He quickly solves complex issues and always suggests better architecture when needed.",
    img: "https://randomuser.me/api/portraits/men/55.jpg",
  },
];

export default function Testimonials() {
  const data = [...testimonials, ...testimonials];

  return (
    <section className="py-20 bg-black overflow-hidden">

      {/* Heading */}
      <div className="text-center mb-16">
        <div className="relative inline-block px-6">

            {/* Top Left */}
            <span className="absolute top-0 left-0 w-1 h-1 border-l-2 border-t-2 border-gray-500"></span>

            {/* Top Right */}
            <span className="absolute top-0 right-0 w-1 h-1 border-r-2 border-t-2 border-gray-500"></span>

            {/* Bottom Left */}
            <span className="absolute bottom-0 left-0 w-1 h-1 border-l-2 border-b-2 border-gray-500"></span>

            {/* Bottom Right */}
            <span className="absolute bottom-0 right-0 w-1 h-1 border-r-2 border-b-2 border-gray-500"></span>

            <p className="text-[#FF014F] text-[16px]">
                See My Clients
            </p>

        </div>
        <h2 className="text-[40px] mt-2 font-bold text-[#D6DAF0]">
          Awesome Clients
        </h2>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto text-[16px]">
          Real feedback from people I worked with on full-stack & backend projects.
        </p>
      </div>

      {/* ===== ROW 1 ===== */}
      <div className="overflow-hidden mb-6">
        <div className="flex gap-6 animate-left w-max px-6">

          {data.map((item, i) => (
            <div
              key={i}
              className="relative min-w-[641.8px] max-w-60.75 px-10 py-15 border border-[#1f1f1f]  hover:bg-[radial-gradient(circle_at_bottom_right,rgba(255,1,79,0.4),transparent_60%)]"
            >
              {/* Corners */}
              <span className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-[#FF014F]"></span>
              <span className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-[#FF014F]"></span>
              <span className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-[#FF014F]"></span>
              <span className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-[#FF014F]"></span>

              {/* Stars */}
              <div className="text-yellow-400 mb-4">⭐⭐⭐⭐⭐</div>

              {/* Text */}
              <p className="text-gray-400 text-[16px] mb-6">
                {item.desc}
              </p>

              {/* User */}
              <div className="flex items-center gap-3">
                <img
                  src={item.img}
                  alt=""
                  className="w-10 h-10 rounded-md object-cover"
                />
                <div>
                  <h4 className="text-[#D6DAF0] font-semibold text-[16px]">
                    {item.name}
                  </h4>
                  <p className="text-gray-500 text-[12px]">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* ===== ROW 2 ===== */}
      <div className="overflow-hidden">
        <div className="flex gap-6 animate-right w-max px-6 -translate-x-30">

          {data.map((item, i) => (
            <div
              key={i}
              className="relative min-w-[641.8px] max-w-60.75 px-10 py-15 border border-[#1f1f1f]  hover:bg-[radial-gradient(circle_at_bottom_right,rgba(255,1,79,0.4),transparent_60%)]"
            >
              {/* Corners */}
              <span className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-[#FF014F]"></span>
              <span className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-[#FF014F]"></span>
              <span className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-[#FF014F]"></span>
              <span className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-[#FF014F]"></span>

              {/* Stars */}
              <div className="text-yellow-400 mb-4">⭐⭐⭐⭐⭐</div>

              {/* Text */}
              <p className="text-gray-400 text-sm mb-6 text-[16px]">
                {item.desc}
              </p>

              {/* User */}
              <div className="flex items-center gap-3">
                <img
                  src={item.img}
                  alt=""
                  className="w-10 h-10 rounded-md object-cover"
                />
                <div>
                  <h4 className="text-[#D6DAF0] font-semibold text-[16px]">
                    {item.name}
                  </h4>
                  <p className="text-gray-500 text-[12px]">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>

    </section>
  );
}