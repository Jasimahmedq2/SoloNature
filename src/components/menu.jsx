import { useState } from "react";
import { AiOutlineHome, AiOutlineHeart } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";

const BottomNavbar = () => {
  const [activeIcon, setActiveIcon] = useState("home");

  const handleIconClick = (iconName) => {
    setActiveIcon(iconName);
  };

  return (
    <div className={`fixed z-20 bottom-0 w-full bg-white`}>
      {/* <div className="w-full h-2 rounded bg-gray-300"></div> */}
      <div className="flex justify-between p-4">
        <div
          className={`nav-icon relative ${
            activeIcon === "home" && "active-icon "
          }`}
          onClick={() => handleIconClick("home")}
        >
          <AiOutlineHome
            className={`icon text-4xl ${activeIcon === "home" && "active"}`}
          />
        </div>
        <div
          className={`nav-icon relative ${
            activeIcon === "search" && "active-icon"
          }`}
          onClick={() => handleIconClick("search")}
        >
          <BiSearch
            className={`icon text-4xl ${activeIcon === "search" && "active"}`}
          />
        </div>
        <div
          className={`nav-icon relative ${
            activeIcon === "heart" && "active-icon"
          }`}
          onClick={() => handleIconClick("heart")}
        >
          <AiOutlineHeart
            className={`icon text-4xl  ${activeIcon === "heart" && "active"}`}
          />
        </div>
        <div
          className={`nav-icon relative ${
            activeIcon === "profile" && "active-icon"
          }`}
          onClick={() => handleIconClick("profile")}
        >
          <CgProfile
            className={`icon text-4xl ${activeIcon === "profile" && "active"}`}
          />
        </div>
      </div>
    </div>
  );
};

export default BottomNavbar;
