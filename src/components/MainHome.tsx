import { useState } from 'react';
import Logo from './Logo';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react'; // Icons ke liye: npm install lucide-react

const MainHome = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/pdf/fakeCV.pdf";
    link.download = "Satyam_CV.pdf";
    document.body.appendChild(link); // important
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-[#0a0a0a]">
      {/* Background Glow Effect */}
      <div 
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 85% 100%, #780029 0%, #0a0a0a 70%)'
        }}
      />
      
      <div className="relative z-10">
        {/* --- NAVIGATION --- */}
        <nav className='flex items-center justify-between px-6 lg:px-20 py-10'>
          <div>
            <Logo />
          </div>

          {/* Desktop Menu: Laptop pe waisa hi rahega */}
          <div className='hidden lg:flex justify-between items-center gap-14'>
            <div className='text-gray-300 font-medium text-[18px] flex gap-6'>
              <Link to="home" smooth duration={500} offset={-80} className='hover:text-rose-500 cursor-pointer'>Home</Link>
              
              <Link to="services" smooth duration={500} offset={-80} className='hover:text-rose-500 cursor-pointer'>Service</Link>
              
              <Link to="portfolio" smooth duration={500} offset={-80} className='hover:text-rose-500 cursor-pointer'>Portfolio</Link>
              
              <Link to="blog" smooth duration={500} offset={-80} className='hover:text-rose-500 cursor-pointer'>Blog</Link>
              
              <Link to="contact" smooth duration={500} offset={-80} className='hover:text-rose-500 cursor-pointer'>Contact</Link>
            </div>
            <div className='text-gray-100 flex gap-6 font-bold'>
              <button className='bg-bio-pink rounded-3xl w-32 h-12 cursor-pointer transition'>Join Now</button>
            </div>
          </div>

          {/* Mobile Menu Icon: Sirf phone pe dikhega */}
          <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </nav>

        {/* Mobile Dropdown Menu: Phone pe click karne pe khulega */}
        {isMenuOpen && (
          <div className="lg:hidden bg-[#111] border-b border-gray-800 p-6 flex flex-col gap-4 text-gray-300 font-medium">
            
            <Link to="home" smooth duration={500} offset={-80} onClick={() => setIsMenuOpen(false)}>Home</Link>

            <Link to="services" smooth duration={500} offset={-80} onClick={() => setIsMenuOpen(false)}>Service</Link>

            <Link to="portfolio" smooth duration={500} offset={-80} onClick={() => setIsMenuOpen(false)}>Portfolio</Link>

            <Link to="blog" smooth duration={500} offset={-80} onClick={() => setIsMenuOpen(false)}>Blog</Link>

            <Link to="contact" smooth duration={500} offset={-80} onClick={() => setIsMenuOpen(false)}>Contact</Link>

            <hr className="border-gray-800" />

            <button className='bg-bio-pink text-white rounded-3xl py-3'>Join Now</button>
          </div>
        )}

        {/* --- HERO CONTENT --- */}
        {/* flex-col on mobile, flex-row on laptop */}
        <div className='flex flex-col lg:flex-row justify-between px-6 lg:px-20 mt-10 lg:mt-14 items-center lg:items-start'>
          
          <div className='mt-10 lg:mt-24 text-center lg:text-left'>
              {/* Badge */}
              <div className="relative inline-block px-4 py-1 text-[#FF014F] text-sm lg:text-lg mb-10">
                <span className="absolute top-0 left-0 w-2 h-2 border-l border-t border-slate-700"></span>
                <span className="absolute top-0 right-0 w-2 h-2 border-r border-t border-slate-700"></span>
                <span className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-slate-700"></span>
                <span className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-slate-700"></span>
                Welcome To My World
              </div>

              <div className="max-w-3xl">
                <h3 className="text-[#FF014F] text-2xl lg:text-3xl">Hi I Am</h3>
                <h1 className="text-4xl lg:text-7xl font-bold text-[#FF014F] leading-tight">
                  Satyam Sharma
                </h1>
                <h2 className="text-3xl lg:text-6xl font-bold text-gray-300 mt-4">
                  a MERN Stack Developer<span>.</span>
                </h2>
                <p className="text-gray-400 mt-6 text-base lg:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                  I am a passionate Full Stack Developer specializing in the MERN stack.
                  I build scalable web applications with clean UI, efficient backend,
                  and seamless user experiences.
                </p>
              </div>

              {/* CV & Socials */}
              <div className='mt-10 lg:mt-16 flex flex-col lg:flex-row items-center gap-8 lg:gap-12'>
                <button onClick={handleDownload} className="bg-[#e60b3e] active:scale-30 hover:bg-[#e82448] text-white px-8 py-3 rounded-3xl cursor-pointer transition w-full lg:w-auto">
                  Download CV <i className="ri-download-2-line"></i>
                </button>
                <div className='flex gap-3'>
                  <Link to={"https://github.com/sharmasatyam121104-devloper"} className='border border-gray-500 rounded-full h-10 w-10 flex justify-center items-center hover:bg-[#f4b3bc]'><i className="ri-github-line font-bold text-[#FF014F] text-xl"></i></Link>
                  <Link to={"https://x.com/SatyamShar44494"} className='border border-gray-500 rounded-full h-10 w-10 flex justify-center items-center hover:bg-[#f4b3bc]'><i className="ri-twitter-line font-bold text-[#FF014F] "></i></Link>
                  <Link to={"https://www.linkedin.com/in/satyam-sharma-dev04"} className='border border-gray-500 rounded-full h-10 w-10 flex justify-center items-center hover:bg-[#f4b3bc]'><i className="ri-linkedin-line font-bold text-[#FF014F]"></i></Link>
                  <Link to={"https://www.instagram.com/satyam548sharma"} className='border border-gray-500 rounded-full h-10 w-10 flex justify-center items-center hover:bg-[#f4b3bc]'><i className="ri-instagram-line font-bold text-[#FF014F]"></i></Link>
                </div>
              </div>
          </div>

          {/* Right Image: Mobile pe size adjust ki hai, Laptop pe original width/height hi rahegi */}
          <div className='w-84 h-84 lg:w-170 lg:h-170 mt-16 lg:mt-0 lg:ml-20 rounded-full overflow-hidden'>
            <img src={"/photos/myHomePic.png"} alt="my-pic" className='object-cover h-full w-full shadow-2xl'/>
          </div>

        </div>

        <div className='h-20 w-full'></div>
      </div>
    </div>
  );
}

export default MainHome;