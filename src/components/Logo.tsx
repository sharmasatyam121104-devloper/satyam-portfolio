import { Link as ScrollLink } from "react-scroll";

const Logo = ({ height = "h-10 md:h-12", className = "" }) => {
  return (
    <ScrollLink
      to="home"
      smooth={true}
      duration={500}
      offset={-80}
      className="cursor-pointer"
    >
      <div className={`items-center p-1 md:p-1.5 rounded-sm flex ${height} ${className}`}>
        
        {/* Icon */}
        <div className="h-full aspect-square bg-bio-pink rounded-lg flex items-center justify-center mr-1 md:mr-1.5">
          <div className="text-black font-bold flex flex-col leading-none items-center">
            <span className="text-[20px] md:text-[26px] font-extrabold transform -translate-y-0.5">
              T
            </span>
          </div>
        </div>

        {/* Text */}
        <div className="flex font-sans font-bold tracking-tight">
          <span className="text-white text-[18px] md:text-[24px]">Tech</span>
          <span className="text-bio-pink text-[18px] md:text-[24px]">Hub</span>
        </div>
      </div>
    </ScrollLink>
  );
};

export default Logo;