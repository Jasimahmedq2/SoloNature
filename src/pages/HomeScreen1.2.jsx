import HomeBanner2 from "../components/homeScreenComponent/HomeBanner2";
import BannerCategory from "../components/homeScreenComponent/bannerCatagory";
import HomeBannerComponent from "../components/homeScreenComponent/homeBanner1";
import HomeBanner3 from "../components/homeScreenComponent/homeBanner3";
import BottomNavbar from "../components/menu";
import { MdOutlineLocalGroceryStore } from "react-icons/md";

const HomeScreenPage = () => {
  return (
    <div className="px-4 py-4">
      <div className="flex justify-between items-center">
        <img
          className="w-16"
          src="https://i.ibb.co/LkmD31Q/cropped-logo-solo-natura-upscaled-1.png"
          alt=""
        />
        <MdOutlineLocalGroceryStore className="text-2xl" />
      </div>
      {/* banner components */}
      <div className="">
        {/* banner component 1*/}
        <div>
          <HomeBannerComponent />
        </div>

        {/* banner component 2*/}
        <div className="py-4">
          <HomeBanner2 />
        </div>
        {/* banner component 3*/}
        <div className="py-4">
          <BannerCategory />
        </div>
        <div className="py-4">
          <HomeBanner3 />
        </div>
      </div>

      {/* bottom navbar */}
      <div>
        <BottomNavbar />
      </div>
    </div>
  );
};

export default HomeScreenPage;
