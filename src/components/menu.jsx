import { useEffect, useState } from "react";
import { AiOutlineHome, AiOutlineHeart } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";

const BottomNavbar = () => {
  const [activeIcon, setActiveIcon] = useState(null);

  const handleIconClick = (iconName) => {
    setActiveIcon(iconName);
  };

  return (
    <div className={`fixed z-20 left-0 right-0 bottom-0 w-full bg-white`}>
      <div className="flex justify-between p-4">
        <Link to="/homeScreen">
          <div onClick={() => handleIconClick("home")}>
            <AiOutlineHome
              className={`icon text-4xl ${
                activeIcon === "home" && "active text-blue-400"
              }`}
            />
          </div>
        </Link>
        <Link to="/shopScreen">
          <div onClick={() => handleIconClick("search")}>
            <BiSearch
              className={`icon text-4xl ${
                activeIcon === "search" && "active text-blue-400"
              }`}
            />
          </div>
        </Link>
        <Link to="/favorite">
          <div onClick={() => handleIconClick("heart")}>
            <AiOutlineHeart
              className={`icon text-4xl  ${
                activeIcon === "heart" && "active text-blue-400"
              }`}
            />
          </div>
        </Link>
        <Link to="/profileone">
          <div onClick={() => handleIconClick("profile")}>
            <CgProfile
              className={`icon text-4xl ${
                activeIcon === "profile" && "active text-blue-400"
              }`}
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BottomNavbar;
