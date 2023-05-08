import { Link } from "react-router-dom";
import { appRoutes } from "lib/constants/appRoutes";

// Components
import MainLogoSVG from "assets/fan.svg";
import { useMediaQuery } from "usehooks-ts";

const MainLogo = () => {
  const isMobileView = useMediaQuery("(max-width:800px)");
  const scrollToTop = () => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // Optional if you want to skip the scrolling animation
    });
  };
  return (
    <div
      className="flex justify-between items-center desktop:w-auto"
      onClick={() => scrollToTop()}
    >
      <Link to={appRoutes.discover_path}>
        <img
          className={isMobileView ? `w-[110px] h-[40px]` : `w-[108px] h-[40px]`}
          src={MainLogoSVG}
          alt="Fan Shark"
        />
      </Link>
    </div>
  );
};

export default MainLogo;
