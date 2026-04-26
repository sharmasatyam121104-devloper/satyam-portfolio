const Logo = ({ height = "h-10 md:h-12", className = "" }) => {
  return (
    <div className={`items-center p-1 md:p-1.5 rounded-sm flex ${height} ${className}`}>
      
      {/* Icon Square */}
      {/* Mobile pe aspect-square thoda chota rakha hai */}
      <div className="h-full aspect-square bg-bio-pink rounded-lg flex items-center justify-center mr-1 md:mr-1.5 relative">
        <div className="text-black font-bold flex flex-col leading-none items-center">
          {/* Mobile pe 20px, Desktop pe 26px */}
          <span className="text-[20px] md:text-[26px] font-extrabold transform -translate-y-0.5">
            T
          </span>
        </div>
      </div>

      {/* Text Part */}
      <div className="flex font-sans font-bold tracking-tight">
        {/* Mobile pe 18px, Desktop pe 24px */}
        <span className="text-white text-[18px] md:text-[24px]">Tech</span>
        <span className="text-bio-pink text-[18px] md:text-[24px]">Hub</span>
      </div>
      
    </div>
  );
};

export default Logo;